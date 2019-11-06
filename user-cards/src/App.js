import React from 'react';
import './App.css';
import axios from 'axios';
// import UserCard from './components/userCard';

class App extends React.Component {
  
    state = {
    users: {},
    followers: []
  };
  

  componentDidMount() {
    axios
    .get('https://api.github.com/users/panamajake86')
      .then(res => {
        console.log('didMount', res);
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log(err)
      });

      axios
    .get('https://api.github.com/users/panamajake86/followers')
      .then(res => {
        console.log('didMount2', res);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => {
        console.log(err)
      });
  };

  render() {
    console.log('render', this.state.followers)
    return (
      <div className="app">
      <div className="user">
        <img src={this.state.users.avatar_url} />
        <h1>{`Name: ${this.state.users.name}`}</h1>
        <h3>{`Username: ${this.state.users.login}`}</h3>
        <p>{`Location: ${this.state.users.location}`}</p>
        <p>Profile: <a href={this.state.users.html_url}>{this.state.users.html_url}</a></p>
        <p>{`Followers: ${this.state.users.followers}`}</p>
        <p>{`Following: ${this.state.users.following}`}</p>
        <p>{`Bio: ${this.state.users.bio}`}</p>
      </div>
      {this.state.followers.map(follow => (
        <div className="followers" key={follow}>
          <img src={follow.avatar_url} />
          <h1>{`Username: ${follow.login}`}</h1>
          <h3>Profile: <a href={follow.html_url}>{follow.html_url}</a></h3>
        </div>
        ))}
      </div>
    );
  }
}

export default App;