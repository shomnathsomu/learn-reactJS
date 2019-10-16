import React from 'react';
import Joke from './Joke';
import JokesData from './JokesData';

function Joker() {

    const jokeComponents = JokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default Joker;
