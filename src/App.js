import React from 'react';
import Header from "./components/header";
import Technologies from "./components/technologies";
import "./templates/styles.scss";

function App() {
  return(
    <div className='container'>
    <Header />
    <Technologies />
    <Technologies />
    <Technologies />
    <Technologies />
    </div>
  )
}

export default App;
