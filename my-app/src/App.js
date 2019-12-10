import React from "react";
import { Container } from "semantic-ui-react";
import Axios from 'axios'

//Components
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading:true,
      login:'Ariels713'
    };
  }

  getUserData = () => {
    Axios.get(`https://api.github.com/users/${this.state.login}`)
    .then(res => {
      this.setState({
        isLoading:false,
        login:res.data.login,
        avatar_url:res.data.avatar_url,
        followers:res.data.followers,
        bio:res.data.bio,
        name:res.data.name,
        public_repos:res.data.public_repos,
        
      })

    })
    .catch(err => {console.log('Erro:', err)})
  }

  componentDidMount() {
    this.getUserData()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.login !== this.state.login){
      this.setState({
      
      })
      this.getUserData()
    }
  }

  // handleSubmit = (event) => {
  //   this.setState({
  //     login: event.target.value
  //   })
  // }

  lookUpUser = user => {
    const newUser = {
      login: user,
    };
    this.setState({ login: [...this.state.login, newUser] });
  };

  render() {
    return (
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20% auto"
        }}
      >
        <UserCard handleSubmit={this.handleSubmit} data={this.state} />
      </Container>
    );
  }
}

export default App;

