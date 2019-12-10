import React from "react";
import { Card, Icon, Image, Dimmer, Loader, Segment } from "semantic-ui-react";

//Component
import UserName from "./UserName";

export default function UserCard(props) {
  console.log("data", props.data.isLoading);
  return (
    <Card>
      <Image
        src={
          props.data.isLoading ? (
            <Segment>
              <Dimmer active>
                <Loader />
              </Dimmer>
              <Image src="/images/wireframe/short-paragraph.png" />
            </Segment>
          ) : (
            props.data.avatar_url
          )
        }
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>
          {props.data.isLoading ? (
            <Segment>
              <Dimmer active>
                <Loader />
              </Dimmer>
              <Image src="/images/wireframe/short-paragraph.png" />
            </Segment>
          ) : (
            props.data.name
          )}
        </Card.Header>
        <Card.Meta>
          <span> Followers: {
              props.data.isLoading ? (
                <Segment>
                  <Dimmer active>
                    <Loader />
                  </Dimmer>
                  <Image src="/images/wireframe/short-paragraph.png" />
                </Segment>
              ) : (
                props.data.followers
              )
            }</span>
        </Card.Meta>
        <Card.Description>
        {
              props.data.isLoading ? (
                <Segment>
                  <Dimmer active>
                    <Loader />
                  </Dimmer>
                  <Image src="/images/wireframe/short-paragraph.png" />
                </Segment>
              ) : (
                props.data.bio
              )
            }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="archive" />
          {
 `         Public Repositories:  
              ${props.data.isLoading ? (
                <Segment>
                  <Dimmer active>
                    <Loader />
                  </Dimmer>
                  <Image src="/images/wireframe/short-paragraph.png" />
                </Segment>
              ) : (
                props.data.public_repos
              )}`
            }
        </a>
      </Card.Content>
      <Card.Content>
        <UserName handleSubmit={props.handleSubmit} />
      </Card.Content>
    </Card>
  );
}
