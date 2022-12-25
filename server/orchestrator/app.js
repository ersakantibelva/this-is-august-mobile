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
    user: User,
    products: [Product]
    product: Product
  }
`

const resolvers = {
  Query: {
    users: async () => {
      try {
        console.log('1');
        const { data: users } = await axios.get('http://localhost:4001/users')
        console.log('2');
        return users 
      } catch (error) {
        console.log(error);
      }
    },

    user: async () => {
      try {
        
        return
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

    product: async () => {
      try {
        
        return
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