import React, { Component } from "react";
import TweetItem from "./TweetItem";
export default class Timeline extends Component {
  
  render() {
    return (
      this.props.tweets.map((tweet) => 
      <TweetItem key={tweet.id} tweet={tweet} />)
    );
  }
}
