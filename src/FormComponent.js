import React from 'react';

function FormComponent(props) {
    return(
        <main>
            <form onSubmit={props.handleSubmit}>
                <input value={props.data.firstname} name="firstname" placeholder="First name" onChange={props.handleChange} />
    
                <br />
    
                <input value={props.data.lastname} name="lastname" placeholder="Last name" onChange={props.handleChange} />
    
                <br />
    
                <input value={props.data.age} name="age" placeholder="Age" onChange={props.handleChange} />
    
                <br />
    
                <label>
                    <input type="radio" name="gender" value="male" checked={props.data.gender === "male"} onChange={props.handleChange}/> Male
                </label>
    
                <label>
                    <input type="radio" name="gender" value="female" checked={props.data.gender === "female"} onChange={props.handleChange}/> Female
                </label>
    
                <br />
    
                {/* formik */}
                <label>Select Your Destination: </label>
                <select 
                    value={props.data.destination}
                    onChange={props.handleChange}
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
                    <input type="checkbox" name="isVegan" checked={props.data.isVegan} onChange={props.handleChange}/> Is Vegan?
                </label>
    
                <br />
    
                <label>
                    <input type="checkbox" name="isKosher" checked={props.data.isKosher} onChange={props.handleChange}/> Is Kosher?
                </label>
    
                <br />
    
                <label>
                    <input type="checkbox" name="isLactoseFree" checked={props.data.isLactoseFree} onChange={props.handleChange}/> Is LactoseFree?
                </label>
    
                <br />
    
                <button>Submit</button>
            </form>
    
            <hr />
    
            <h2>Entered information: </h2>
            <p>Your name: {props.data.firstname} {props.data.lastname}</p>
            <p>Your age: {props.data.age}</p>
            <p></p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>LactoseFree: {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    )
}

export default FormComponent;