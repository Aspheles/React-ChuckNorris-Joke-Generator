import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Alert from "@mui/material/Alert";
import Joke from "./Joke";


function App() {
  return (
    <>
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
      <img onClick={() => {
        window.open("https://api.chucknorris.io", "_blank")
      }} style={{margin: "10px", cursor: "pointer"}} height={"150px"} src='./images/chucknorris_logo.png'></img>
    </Grid>
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "50vh" }}>
    <h2 className="joke_text">Click on the button to generate your daily jokes</h2>
      <Joke />
      
    </Grid>
    </>
  )
}



export default App;
