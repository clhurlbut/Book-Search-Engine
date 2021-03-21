import gql from 'graphql-tag'

export const GET_CLIENT = gql`
query {
  currentUser {
    _id
    username
    email
    bookCount
    savedBooks {
        bookId
        authors 
        description
        title 
        image
        link
    }
  }
}
`;