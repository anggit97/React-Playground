import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './component/ValidationComponent';

class App extends Component{

  state = {
    lengthUsername : 0,
    lengthEmail : 0,
    errorMessageUsername: ""
  }

  changeLengthOutput = (event) => {
    const length = event.target.value.length

    let errorMessage = null
    if(length === 0){
      errorMessage = "Tidak boleh kosong"
    }else if (length <=5 && length > 0){
      errorMessage = "Terlalu Pendek"
    }else {
      errorMessage = "Pas"
    }

    this.setState({
      lengthUsername : length,
      errorMessageUsername : errorMessage
    })
  }

  render(){
    return(
      <div>
        <input type="text" placeholder="Isi Username" onChange={(event) => this.changeLengthOutput(event)}/>
        <p>{this.state.lengthUsername}</p>
        <ValidationComponent errorMsg={this.state.errorMessageUsername}/>

        <br/>
        <input type="text" placeholder="Isi Email"/>
        <p>Panjang Karakter</p>
      </div>
    )
  }
}

export default App;
