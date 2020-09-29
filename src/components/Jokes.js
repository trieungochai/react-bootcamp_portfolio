import React from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{margin: 20}}>{setup}<em> {punchline}</em></p>
);

class Jokes extends React.Component {
  state = {
    joke: {},
    jokes: [],
  };

  componentDidMount = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(json => this.setState({joke: json}));  
  };

  fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then(response => response.json())
      .then(json => this.setState({jokes: json}));
  };
  
  render() {
    return (
      <div>
        <Joke joke={this.state.joke}/>
        <hr />
        <h3>You wanna 10 new jokes?</h3>
        <button onClick={this.fetchJokes}>CLick me!</button>
        {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke}/>))}
      </div>
    );
  };
};

export default Jokes;