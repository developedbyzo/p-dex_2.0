import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons : [],
    };
  }

  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }))
  //     .catch(err => err);
  // }

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({pokemons : data.results}, () => {})
      }
    })
    .catch(console.log)
  }

  render() {
    const {pokemons} = this.state;
    
    const renderedPokemonList =pokemons.map((pokemon, index) => {
      return (
        <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
          <div className="card-header"><b>{pokemon.name} : {pokemon.id}</b></div>
        </div>
      );
    });
    
    return (
      <div className="container">
        <div className="card-columns">
          {renderedPokemonList}
        </div>
      </div>
    );
  }
}

export default App;