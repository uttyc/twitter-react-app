import React, { Component } from "react";
import {
  Button,
  Container,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
export default class Tweet extends Component {
    state = {
        text: '',
        comment_count: 0,
        retweet_count: 0,
        fav_count: 0
    }
    onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })  
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.postTweet(this.state.text);
        this.setState({
            text: '',
            comment_count: 0,
            retweet_count: 0,
            fav_count: 0
        })
    }
  render() {
    return (
      <Container className="container-margin">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <form onSubmit={this.onSubmit}>
              <InputGroup className="mb-12">
                <FormControl
                  placeholder="What's on your mind?"
                  aria-label="tweetText"
                  aria-describedby="basic-addon2"
                  name="text"
                  value={this.state.text}
                    onChange={this.onChange}
                />
                <InputGroup.Append>
                  <Button type="submit" variant="primary">Tweet</Button>
                </InputGroup.Append>
              </InputGroup>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
