import React, {Component} from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state = {
    usernames : [
      {username : "anggit97"},
      {username : "wahid66"},
      {username : "katalonstudio"},
    ]
  }
  
  onTextChange = (event) => {
    this.setState(
      {
      usernames : [
        {username : event.target.value},
        {username : "wahid66"},
        {username : "katalonstudio"},
      ]
     }
    )
  }

  render(){
    return (
      <div>
        <UserInput ontextchange={this.onTextChange}/>
        <UserOutput username={this.state.usernames[0].username}/>
        <UserOutput username={this.state.usernames[1].username}/>
        <UserOutput username={this.state.usernames[2].username}/>
      </div>
    );
  }
}

export default App;
