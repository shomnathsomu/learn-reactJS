import React from 'react';
import Joke from './Joke';

function Joker() {
    return (
        <div>
            <Joke
                punchLine="It's hard to explain puns to klepmaniacs because they always take things literally."
            />
            <Joke 
                question="What's the best thing about Switzerland?"
                punchLine="I don't know, but the flag is a big plus!"
            />
            <Joke 
                question="Did you hear about the mathematician who's afraid of negetive numbers?"
                punchLine="He'll stop at nothing to avoid them!"
            />
            <Joke 
                question="Hear about the new restaurant called Karma?"
                punchLine="There's no menu: You get what you deserve."
            />
            <Joke 
                question="Did you hear about the actor who fell through floorboards?"
                punchLine="He was just going through a stage."
            />
            <Joke
                question="Did you hear about the claustrobic astronaut?"
                punchLine="He just needed a little space."
            />
        </div>
    )
}

export default Joker;
