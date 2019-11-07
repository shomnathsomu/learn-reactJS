import React, {Component} from 'react';

class Forms extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    handleSubmit(event) {
        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.firstname} name="firstname" placeholder="Type first name" onChange={this.handleChange} />

                <br />

                <input type="text" value={this.state.lastname} name="lastname" placeholder="Type last name" onChange={this.handleChange} />

                <br />

                <textarea value="type here something" onChange={this.handleChange} />

                <br />

                <label>
                    <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}/> Is Friendly?
                </label>

                <br />

                <label>
                    <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/> Male
                </label>

                <label>
                    <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/> Female
                </label>

                <br />

                {/* formik */}
                <label>Favorite Color:</label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                </select>

                <h1>Hey there! You are {this.state.firstname} {this.state.lastname}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h3>Your favorite color is: {this.state.favColor}</h3>
                <button>Submit</button>
            </form>
        )
    }
}

export default Forms;
