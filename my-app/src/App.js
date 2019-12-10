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
  
  componentDidMount() {
    Axios.get(`https://api.github.com/users/${this.state.login}`)
    .then(res => {
      this.setState({
        isLoading:false,
        login:res.data.login,
        avatar_url:res.data.avatar_url,
        followers:res.data.followers,
        bio:res.data.bio,
        name:res.data.name,
        public_repos:res.data.public_repos
        
      })
      console.log(res.data)
    })
    .catch(err => {console.log('Erro:', err)})
  }

  handleSubmit = (event) => {
    this.setState({
      name: event.target.value
    })
  }

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


// const CharacterInfoPro = props => {
//   const [starWarsData, setStarWarsData] = useState([]);
//   const [refreshCard, setRefreshCard] = useState([]);
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     setIsLoading(true)

//     axios
//       .get("https://swapi.co/api/people")
//       .then(response => {
//         console.log(response.data.results);
//         setStarWarsData(response.data.results);
//         setIsLoading(false)
//       })
//       .catch(error => console.log(`We have an error ${error}`));
//   }, [refreshCard]);
  
// const randomCharList = starWarsData[Math.floor(Math.random() * starWarsData.length)] || {}

//   return (
//     <Container style={{ margin: 20 }}>
//       <Card>
//         <Image src="https://www.fillmurray.com/400/600" wrapped ui={false} />
//         <Card.Content>
//           <Card.Header>
//             {isLoading && <h3>Loading</h3>}
//             {randomCharList.name}
//           </Card.Header>
//           <Card.Meta>
//             <span className="date">{randomCharList.birth_year}</span>
//           </Card.Meta>
//           <Card.Description>
//             Star Wars is an American epic space-opera media franchise created by
//             George Lucas.
//           </Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//           <Button
//             onClick={() => {
//               setRefreshCard(refreshCard + 1);
//             }}
//           >
//             Click Here
//           </Button>
//         </Card.Content>
//       </Card>
//     </Container>
//   );
// };

// export default CharacterInfoPro;