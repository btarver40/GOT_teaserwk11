import React, { Component } from 'react';
import axios from 'axios'
import { Container, Header, Card } from 'semantic-ui-react';
import styled from 'styled-components'

class Home extends Component {
  state = {characters: {}, entries: [] }


  componentDidMount() {
    axios.get('https://api.got.show/api/characters/')
      .then(res => {
        this.setState({characters: res.data, entries: res.data.entries})
      })
  }
  
  
  allCharacters = () => {
    if (this.state.entries.length > 1) {
    return this.state.characters.entries.map(character => {
      return(
        <Card key={character.id}>
          <Card.Content>
            {character.name}
          </Card.Content>
          <Card.Content>
            {character.description}
          </Card.Content>
        </Card>
     )
    })
  }}
  
  
  render() {
    const {entries} = this.state.characters;
    return(
      <Container>
        <MainHeader></MainHeader>
        <Header as='h1' textAlign='center'>Game of Thrones</Header>
          <Card.Group itemsPerRow={3}>
          {this.allCharacters()}
        </Card.Group>
      </Container>
    )
  }
}

const MainHeader = styled.div`
  background-image: url(https://i.pinimg.com/564x/01/f6/61/01f661e30a9b4e51c583e5b19c2b80eb.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  height: 650px;
  text-align: center;
  display: flex;
  overflow: scroll;
` 



export default Home;
