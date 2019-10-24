import React from "react";

function handleClick() {
    console.log("It was clicked");
}

function Events() {
    return(
        <div>
            <img onMouseOver={() => console.log("hovered!!")} src="https://www.fillmurray.com/200/100" alt="fresco" />
            <br />
            <br />
            <button onClick={handleClick} >Click me!</button>
        </div>
    )
}

export default Events;