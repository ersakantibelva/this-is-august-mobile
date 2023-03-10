const { GraphQLError } = require("graphql");
const axios = require("axios");
const redis = require("../config/cache");
const productUrl = "http://localhost:4002/products";
const userUrl = "http://localhost:4001/users";

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
    products (search: String) : [Product]
    product (productId: ID!) : Product
  }

  input imageInput {
    imgUrl: String
  }

  input productInput {
    name: String!
    description: String
    price: Int!
    mainImg: String!
    categoryId: Int!
    UserMongoDb: String!
    images: [imageInput]
  }

  input imageEdit {
    id: ID,
    imgUrl: String
  }

  input productEdit {
    name: String!
    description: String
    price: Int!
    mainImg: String!
    categoryId: Int!
    Images: [imageEdit]
  }

  type Mutation {
    addProduct (content: productInput): Output
    editProduct (productId: ID!, content: productEdit): Output
    deleteProduct (productId: ID!): Output
  }
`;

const resolvers = {
  Query: {
    products: async (_, args) => {
      try {
        const { search } = args;
        const productCache = await redis.get("productCache");
        if (productCache && !search) {
          return JSON.parse(productCache);
        } else if (!productCache || search) {
          let url = productUrl;

          if (search) url += `?search=${search}`;

          const { data: products } = await axios.get(url);

          const { data: users } = await axios.get(`${userUrl}`);

          products.map((el) => {
            users.forEach((ele) => {
              if (ele["_id"] == el.UserMongoDb) el.User = ele;
            });
            return el;
          });

          if (!search)
            await redis.set("productCache", JSON.stringify(products));

          return products;
        }
      } catch (error) {
        throw new GraphQLError(error.response.data.message, {
          extensions: {
            code: error.code,
            http: { status: error.response.status },
          },
        });
      }
    },

    product: async (_, args) => {
      try {
        const { productId } = args;
        const { data: product } = await axios.get(`${productUrl}/${productId}`);

        const { data: User } = await axios.get(
          `${userUrl}/${product.UserMongoDb}`
        );

        product.User = User;

        return product;
      } catch (error) {
        console.log(error);
        throw new GraphQLError(error.response.data.message, {
          extensions: {
            code: error.code,
            http: { status: error.response.status },
          },
        });
      }
    },
  },

  Mutation: {
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

        const { data } = await axios.post(`${productUrl}`, {
          name,
          description,
          price,
          mainImg,
          categoryId,
          UserMongoDb,
          images,
        });

        await redis.del("productCache");

        return data;
      } catch (error) {
        throw new GraphQLError(error.response.data.message, {
          extensions: {
            code: error.code,
            http: { status: error.response.status },
          },
        });
      }
    },

    editProduct: async (_, args) => {
      try {
        const { productId } = args;
        const { name, description, price, mainImg, categoryId, Images } =
          args.content;

        const { data } = await axios.put(`${productUrl}/${productId}`, {
          name,
          description,
          price,
          mainImg,
          categoryId,
          Images,
        });

        await redis.del("productCache");

        return data;
      } catch (error) {
        throw new GraphQLError(error.response.data.message, {
          extensions: {
            code: error.code,
            http: { status: error.response.status },
          },
        });
      }
    },

    deleteProduct: async (_, args) => {
      try {
        const { productId } = args;

        const { data } = await axios.delete(`${productUrl}/${productId}`);

        await redis.del("productCache");

        return data;
      } catch (error) {
        throw new GraphQLError(error.response.data.message, {
          extensions: {
            code: error.code,
            http: { status: error.response.status },
          },
        });
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
