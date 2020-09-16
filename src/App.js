import React, { Component} from 'react';
import './App.css';
import Tweet from './components/Tweet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timeline from './components/Timeline';
import {v4 as uuid} from 'uuid'

class App extends Component {
  state = {
    tweets: [
      {
        id: uuid(),
        text: "Verinin %0.15'i, Beynimizin Bir Nesneyi Tanıması İçin Yeterli!",
        comment_count: 5,
        retweet_count: 3,
        fav_count: 10
      },
      {
        id: uuid(),
        text: "BİM’de satılan bal 'hileli' çıktı!",
        comment_count: 15,
        retweet_count: 33,
        fav_count: 130
      },
      {
        id: uuid(),
        text: "Tiyatrolara yasak kalktı ama Salgında MÜZİSYENLER Taş Mı Yesin? Aylardır çalışmıyorlar yardım yok, unutuldular...",
        comment_count: 12,
        retweet_count: 4,
        fav_count: 10
      }
    ]
  }
  postTweet = (text) => {
      let tweet = {
        id: uuid(),
        text,
        comment_count: 0,
        retweet_count: 0,
        fav_count: 0
      }
      this.setState({
          tweets: [tweet, ...this.state.tweets]
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Twitter React App</h3>
        </header>
        <Tweet postTweet={this.postTweet}/>
        <Timeline tweets={this.state.tweets}/>
      </div>
    )
  }
}

export default App;
