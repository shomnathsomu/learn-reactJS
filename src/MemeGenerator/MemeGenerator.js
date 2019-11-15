import React, { Component } from 'react';

/**
 * Initialize state to save the following data
 * top text
 * bottom text
 * random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * We'll be using an API that provides a bunch of meme images
     * 
     * task: 
     * make an API call to "https://api.imgflip.com/get_memes" and save the data
     * that comes back (`response.data.memes`) to a new state property
     * called `allMemeImgs`. (The data that comes back is an array.)
     */

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ allMemeImgs: memes })
        })
    }

    /**
     * Create the onChange handler method
     * It should update the corresponding state on every change of the input box
     * 
     */

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    /**
     * Create a method that when the "Generate" button is clicked,
     * Chooses one of the memes from our `allMemeImgs` array at random and makes it so that is the meme image that shows up in the bottom of portion of our meme generator site (`.url`)
     */

    handleSubmit = (event) => {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({ randomImg: randMemeImg })
    }

    render () {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    {/* 
                      * Create 2 input fields, one for the top text and one for the bottom text
                      * Remember that these will be "controlled forms", so make sure to add
                      * all the attributes you'll need for that to work
                    */}

                    <input 
                        type="text" 
                        name="topText" 
                        placeholder="Top text" 
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="bottomText" 
                        placeholder="Bottom text" 
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="ImageNotFound" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;
