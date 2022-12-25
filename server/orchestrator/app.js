const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone');
const axios = require('axios')

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

  type Query {
    users: [User]
    user (userId: ID) : User,
    products: [Product]
    product (productId: ID) : Product
  }
`

const resolvers = {
  Query: {
    users: async () => {
      try {
        const { data: users } = await axios.get('http://localhost:4001/users')

        return users 
      } catch (error) {
        console.log(error);
      }
    },

    user: async (_, args) => {
      try {
        const { userId } = args

        const { data: user } = await axios.get(`http://localhost:4001/users/${userId}`)

        return user
      } catch (error) {
        console.log(error);
      }
    },

    products: async () => {
      try {
        const { data: products } =  await axios.get('http:localhost:4002/products')
        return products
      } catch (error) {
        console.log(error);
      }
    },

    product: async (_, args) => {
      try {
        const { productId } = args
        const { data: product } = await axios.get(`http://localhost:4002/products/${productId}`)

        return product
      } catch (error) {
        console.log(error);
      }
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
})
.then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
})