import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";

function Home() {
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POST_QUERY);
  if (data) {
    console.log(data);
  }

  return (
    <Grid columns={3}>
      <Grid.Row>
        <h1>Recent Post</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loadng post...</h1>
        ) : (
          posts &&
          posts.map((post) => {
            <Grid.Column key={post.id}>
              <PostCard post={post} />
            </Grid.Column>;
          })
        )}
      </Grid.Row>
    </Grid>
  );
}

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comment {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
