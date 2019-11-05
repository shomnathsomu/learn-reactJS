import React, {Component} from 'react';

class FormPractice extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
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
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.firstname} name="firstname" placeholder="First name" onChange={this.handleChange} />

                    <br />

                    <input value={this.state.lastname} name="lastname" placeholder="Last name" onChange={this.handleChange} />

                    <br />

                    <input value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange} />

                    <br />

                    <label>
                        <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/> Male
                    </label>

                    <label>
                        <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/> Female
                    </label>

                    <br />

                    {/ formik /}
                    <label>Select Your Destination: </label>
                    <select 
                        value={this.state.destination}
                        onChange={this.handleChange}
                        name="destination"
                    >
                        <option value="">Choose</option>
                        <option value="france">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Italy">Italy</option>
                        <option value="England">England</option>
                        <option value="Scotland">Scotland</option>
                    </select>

                    <br />

                    <label>
                        <input type="checkbox" name="isVegan" checked={this.state.isVegan} onChange={this.handleChange}/> Is Vegan?
                    </label>

                    <br />

                    <label>
                        <input type="checkbox" name="isKosher" checked={this.state.isKosher} onChange={this.handleChange}/> Is Kosher?
                    </label>

                    <br />

                    <label>
                        <input type="checkbox" name="isLactoseFree" checked={this.state.isLactoseFree} onChange={this.handleChange}/> Is LactoseFree?
                    </label>

                    <br />

                    <button>Submit</button>
                </form>

                <hr />

                <h2>Entered information: </h2>
                <p>Your name: {this.state.firstname} {this.state.lastname}</p>
                <p>Your age: {this.state.age}</p>
                <p></p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>
                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>LactoseFree: {this.state.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
    }
}

export default FormPractice;
