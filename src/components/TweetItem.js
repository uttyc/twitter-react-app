import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LikeLogo from "../assets/like.svg";
import RetweetLogo from "../assets/retweet.svg";
import CommentLogo from "../assets/comment.svg";
export default class TweetItem extends Component {
  render() {
    const { text, comment_count, retweet_count, fav_count } = this.props.tweet;
    return (
      <Container className="container-margin">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p> {text} </p>
                </blockquote>
              </Card.Body>
              <Card.Footer>
                <span class="footer-button">
                  <img src={RetweetLogo} alt="retweet-button"/>
                </span>{" "}
                {retweet_count} |{" "}
                <span class="footer-button">
                  <img src={CommentLogo} alt="comment-button"/>
                </span>{" "}
                {comment_count} |{" "}
                <span class="footer-button">
                  <img src={LikeLogo} alt="like-button"/>
                </span>{" "}
                {fav_count}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

