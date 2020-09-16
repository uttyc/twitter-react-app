import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LikeLogo from "../assets/like.svg";
import RetweetLogo from "../assets/retweet.svg";
import CommentLogo from "../assets/comment.svg";
export default class TweetItem extends Component {
  render() {
    const {
      id,
      text,
      comment_count,
      retweet_count,
      fav_count,
      comments,
    } = this.props.tweet;
    const tweetComments = comments.map((c) => {
      return (
        <Card className="container-margin" key={c.id}>
          <Card.Body>
            <blockquote >{c.text}</blockquote>
          </Card.Body>
        </Card>
      );
    });
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
                  <span className="footer-button">
                    <img
                      src={RetweetLogo}
                      alt="retweet-button"
                      onClick={this.props.retweetTweet.bind(this, id)}
                    />
                  </span>{" "}
                  {retweet_count} |{" "}
                  <span className="footer-button">
                    <img
                      src={CommentLogo}
                      alt="comment-button"
                      onClick={this.props.commentTweet.bind(this, id)}
                    />
                  </span>{" "}
                  {comment_count} |{" "}
                  <span className="footer-button">
                    <img
                      src={LikeLogo}
                      alt="like-button"
                      onClick={this.props.likeTweet.bind(this, id)}
                    />
                  </span>{" "}
                  {fav_count}
                    {tweetComments}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
