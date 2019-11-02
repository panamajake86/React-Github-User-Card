import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    usersText: ''
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/panamajake86')
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log(err)
      });
  };

  render() {
    return (
      <div className="App">
        {/* <img src={} alt={} /> */}
        <h1>Name: {this.state.name}</h1>
        <h3>Username: {this.state.login}</h3>
        <p>Location: {this.state.location}</p>
        <p>Profile: {this.state.html_url}</p>
        <p>Followers: {this.state.followers}</p>
        <p>Following: {this.state.following}</p>
        <p>Bio: {this.state.bio}</p>
      </div>
    );
  }
}

export default App;