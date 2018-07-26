// import React, { Component } from 'react';
// import axios from 'axios'
// import { Container, Header, Card } from 'semantic-ui-react';

// class Cultures extends Component {
//   state = {cultures: {}}

//   componentDidMount() {
//     axios.get('https://api.got.show/api/cultures/')
//       .then(res => {
//         this.setState({cultures: res.data})
//       })
//   }
  
  
//   allCultures = () => {
//       return(
//       <Card key={culture.id}>
//         <Card.Content>
//           {culture.name}
//         </Card.Content>
//         <Card.Content>
//           {culture.description}
//         </Card.Content>
//       </Card>
//     )
//   }
  
  
  
//   render() {
//     const {cultures} = this.state.cultures;
//     return(
//       <Container>
//         <Header as='h1' textAlign='center'>Game of Thrones Cultures</Header>
//           <Card.Group itemsPerRow={3}>
//           {this.allCultures()}
//         </Card.Group>
//       </Container>
//     )
//   }
// }

// export default Cultures;