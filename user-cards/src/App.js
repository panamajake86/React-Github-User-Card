import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/userCard';

class App extends React.Component {
  state = {
    users: {},
    usersText: ""
  };
  

  componentDidMount() {
    axios
    .get('https://api.github.com/users/panamajake86')
      .then(res => {
        console.log('didMount', res);
        this.setState({
          users: res
        });
      })
      .catch(err => {
        console.log(err)
      });
  };

  render() {
    console.log('render', this.state.users.data);
    return (
      <div className="App">
        <UserCard props={this.state.users.data} />
      </div>
    );
  }
}

export default App;