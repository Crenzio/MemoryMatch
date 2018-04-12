import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    click: 0,
    wins: 0,
    loses: 0
  };

  handleIncrement = () => {
    this.setState({ click: this.state.click + 1 });
  };

  wins = () => {
    this.setState({ wins: this.state.wins + 1 });
  };

  loses = () => {
    this.setState({ loses: this.state.loses + 1 });
  };

  render() {
    return (
      <Wrapper>
        <Title>Don't Click the Same Pic Twice</Title>

        <div className="line">
          Wins: {this.state.wins}
          <span className="room"></span>
          Loses: {this.state.loses}
        </div>

        <div className="line">
          Correct Guesses in a Row: {this.state.click}
        </div>

        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
