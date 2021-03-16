import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			showPara:false
		}
		this.btnClick = this.btnClick.bind(this)
	}


    btnClick(){
		this.setState({
			showPara:true
		})
	}


    render() {
    	return(
    		<div id="main">
				<button id="click" onClick = {this.btnClick}>Click</button>
				{this.state.showPara && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    		</div>
    	);
    }
}


export default App;

