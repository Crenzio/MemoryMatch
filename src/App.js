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

  click = () => {
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
          Wins: <u>{this.state.wins}</u>
          <span className="room"></span>
          Loses: <u>{this.state.loses}</u>
        </div>

        <div className="line">
          Correct Guesses in a Row: <u>{this.state.click}</u>
        </div>

        {this.state.friends.map(friend => (
          <FriendCard 
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
