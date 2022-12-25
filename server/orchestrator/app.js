const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const axios = require("axios");

const typeDefs = `#graphql
  type User {
    _id: String
    username: String
    email: String
    role: String
    phoneNumber: String
    address: String
  }

  type Category {
    id: ID
    name: String
    createdAt: String
    updatedAt: String
  }

  type Image {
    id: ID
    productId: Int
    imgUrl: String
    createdAt: String
    updatedAt: String
  }

  type Product {
    id: ID
    name: String
    slug: String
    description: String
    price: Int
    mainImg: String
    categoryId: Int
    UserMongoDb: String
    createdAt: String
    updatedAt: String
    authorId: Int
    Category: Category
    Images: [Image]
    User: User
  }

  type Output {
    message: String
  }

  type Query {
    users: [User]
    user (userId: ID) : User,
    products: [Product]
    product (productId: ID) : Product
  }

  input userInput {
    username: String
    email: String
    password: String
    role: String
    address: String
  }

  input imageInput {
    imgUrl: String
  }

  input productInput {
    name: String
    description: String
    price: Int
    mainImg: String
    categoryId: Int
    UserMongoDb: String
    images: [imageInput]
  }

  input imageEdit {
    id: ID,
    imgUrl: String
  }

  input productEdit {
    name: String
    description: String
    price: Int
    mainImg: String
    categoryId: Int
    Images: [imageEdit]
  }

  type Mutation {
    addUser (content: userInput): Output
    deleteUser (userId: ID): Output
    addProduct (content: productInput): Output
    editProduct (productId: ID, content: productEdit): Output
    deleteProduct (productId: ID): Output
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      try {
        const { data: users } = await axios.get("http://localhost:4001/users");

        return users;
      } catch (error) {
        console.log(error);
      }
    },

    user: async (_, args) => {
      try {
        const { userId } = args;

        const { data: user } = await axios.get(
          `http://localhost:4001/users/${userId}`
        );

        return user;
      } catch (error) {
        console.log(error);
      }
    },

    products: async () => {
      try {
        const { data: products } = await axios.get(
          "http:localhost:4002/products"
        );
        return products;
      } catch (error) {
        console.log(error);
      }
    },

    product: async (_, args) => {
      try {
        const { productId } = args;
        const { data: product } = await axios.get(
          `http://localhost:4002/products/${productId}`
        );

        const { data: User } = await axios.get(
          `http://localhost:4001/users/${product.UserMongoDb}`
        );

        product.User = User;

        return product;
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      try {
        const { username, email, password, role, phoneNumber, address } =
          args.content;

        const { data } = await axios.post("http://localhost:4001/users", {
          username,
          email,
          password,
          role,
          phoneNumber,
          address,
        });

        const output = { message: data };

        return output;
      } catch (error) {
        console.log(error);
      }
    },

    deleteUser: async (_, args) => {
      try {
        const { userId } = args;

        const { data } = await axios.delete(
          `http://localhost:4001/users/${userId}`
        );

        const output = { message: data };
        return output;
      } catch (error) {
        console.log(error);
      }
    },

    addProduct: async (_, args) => {
      try {
        const {
          name,
          description,
          price,
          mainImg,
          categoryId,
          UserMongoDb,
          images,
        } = args.content;

        const { data: User } = await axios.get(
          `http://localhost:4001/users/${UserMongoDb}`
        );

        const { data } = await axios.post("http://localhost:4002/products", {
          name,
          description,
          price,
          mainImg,
          categoryId,
          UserMongoDb,
          images,
        });

        return data;
      } catch (error) {
        console.log(error);
      }
    },

    editProduct: async (_, args) => {
      try {
        const { productId } = args;
        const { name, description, price, mainImg, categoryId, Images } =
          args.content;

        const { data } = await axios.put(`http://localhost:4002/products/${productId}`, {
          name,
          description,
          price,
          mainImg,
          categoryId,
          Images
        });

        return data
      } catch (error) {
        console.log(error);
      }
    },

    deleteProduct: async (_, args) => {
      try {
        const { productId } = args;

        const { data } = await axios.delete(
          `http://localhost:4002/products/${productId}`
        );

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
