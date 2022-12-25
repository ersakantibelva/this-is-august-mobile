const axios = require("axios");
const userUrl = 'http://localhost:4001/users'

const typeDefs = `#graphql
  type User {
    _id: String
    username: String
    email: String
    role: String
    phoneNumber: String
    address: String
  }

  type Output {
    message: String
  }

  type Query {
    users: [User]
    user (userId: ID) : User,
  }

  input userInput {
    username: String
    email: String
    password: String
    role: String
    address: String
  }

  type Mutation {
    addUser (content: userInput): Output
    deleteUser (userId: ID): Output
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      try {

        const { data: users } = await axios.get(userUrl);

        return users;
      } catch (error) {
        console.log(error);
      }
    },

    user: async (_, args) => {
      try {
        const { userId } = args;

        const { data: user } = await axios.get(
          `${userUrl}/${userId}`
        );

        return user;
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

        const { data } = await axios.post(userUrl, {
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
          `${userUrl}/${userId}`
        );

        const output = { message: data };
        return output;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { typeDefs, resolvers }