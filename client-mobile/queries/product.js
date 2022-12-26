import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Query {
    products {
      id
      mainImg
      name
      price
    }
  }
`;

export const GET_PRODUCT_DETAIL = gql`
  query Query($productId: ID!) {
    product(productId: $productId) {
      Category {
        name
      }
      Images {
        id
        imgUrl
      }
      User {
        email
        username
      }
      id
      mainImg
      name
      price
      description
    }
  }
`