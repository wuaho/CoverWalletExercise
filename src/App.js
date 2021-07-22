import React, {Component} from 'react';
import logo from './coverwalletlogo.png';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      n:"",
      res:"",
    }
  }
  updateFibonacci(){
  var num = this.state.n;
    if(!(num<0 ||num==="" || num===null || isNaN(num))){
      console.log(num)
      this.setState({res:this.fibonacci(num)});

    }else{
      //alert("Must input a valid number");
      this.setState({res:""});
    }

  }

  fibonacci(n){
    var i = 1, j = 0;

    while (n >=1){
      j=i+j;
      i=j-i;
      n--;
    }
    return j;
  }

  render(){
    
    return(
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input data-testid="input" className="N-input" type="number" min='0' placeholder="Enter a number" onChange={e=>this.setState({ n: e.target.value })}></input>
          <button data-testid="button" className="Calc-btn" onClick={() => this.updateFibonacci() }>Calculate</button>
          <div data-testid="result" className="Res-div"id="result"> {this.state.res}</div>
        </header>
    </div>

    )
  }
}

export default App;
