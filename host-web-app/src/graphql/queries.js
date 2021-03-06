/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHost = /* GraphQL */ `
  query GetHost($id: ID!) {
    getHost(id: $id) {
      id
      createdAt
      updatedAt
      username
    }
  }
`;
export const listHosts = /* GraphQL */ `
  query ListHosts(
    $filter: ModelHostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
