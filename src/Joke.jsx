import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export default function Joke() {
    const [joke, setJoke] = useState();

    async function getJoke(){
        let element = document.querySelector(".joke_text");
        const urlAPI = "https://api.chucknorris.io/jokes/random";
        axios.request(urlAPI)
        .then(response =>  setJoke(response.data))
        .catch((error) => console.log(error));
    
        if(joke == null) return;

        element.textContent = joke.value;
    }

    return (
        <div>
            <Button onClick={() => {
                getJoke();
            }} style={{ margin: "10px" }} variant="contained" type='button'>Get a random joke</Button>
        </div>
    );
}

