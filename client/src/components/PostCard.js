import React from "react";
import { Card, Icon, Label, Button, Image } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";
function PostCard({
  post: { body, craetedAt, id, username, likeCount, commentCount, like },
}) {
  function likePost() {
    console.log("Like post");
  }
  function commentPost() {
    console.log("comment post");
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(craetedAt).fromNow()}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>
          <Button as="div" labelPosition="right" onClick={likePost}>
            <Button color="teal" basic>
              <Icon name="heart" />
             
            </Button>
            <Label basic color="teal" pointing="left">
              {likeCount}
            </Label>
          </Button>
          <Button as="div" labelPosition="right" onClick={commentPost}>
            <Button color="blue" basic>
              <Icon name="comment" />
            
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </p>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
