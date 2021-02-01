import React, {Component} from 'react';
import "./Register.scss";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const textboxIcon = process.env.PUBLIC_URL +"./icons/Page 1.png";

export default class Register extends Component{

	constructor(props){
		super(props);
		this.state={
			checkFlag: false,
			businessName: "",
			businessSite: "",
			email: "",
			psw: ""
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleClick = (e) =>{
		const name= e.target.name;
		const val = e.target.value;
		if(val === "")
			this.setState({checkFlag: true})
		else{
			this.setState({[name]:val})
		}
	}
	handleSubmit = () =>{
		Object.keys(this.state).map((val) => {
			if(this.state[val] =="")
				this.setState({checkFlag: true})
		})
		let params = {
				businessName: this.state.businessName,
				businessSite: this.state.businessSite,
				email: this.state.email,
				psw: this.state.psw,
		}
		if(!this.state.checkFlag)
			console.log("Submitted")
			fetch(`/api/user`, {
	      method: 'POST',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({user: data})
	    })
	}

	render(){
		return(
			<div className="container">
				<img src={textboxIcon} id="textboxIcon"/>
				<div id="text">
					Tell us about yourself
				</div>
				 <form>
				    <div>
				    	<input type="text" placeholder="What is the name of your business?" d required name="businessName" onChange={this.handleClick} onFocus={this.handleClick}/>
				      	<label className={this.state.businessName ==="" && this.state.checkFlag? "" : "hidden"}> Business name is required</label>

				      	<input type="text" placeholder="Business website"  required onChange={this.handleClick}  name="businessSite" onFocus={this.handleClick}/>
				      	<label className={this.state.businessSite ==="" && this.state.checkFlag? "" : "hidden"}> Business website is required</label>


				      	<input type="text" placeholder="Your email"  name="email" required onChange={this.handleClick} onFocus={this.handleClick} />
				      	<label className={this.state.email ==="" && this.state.checkFlag? "" : "hidden"}> Email is required</label>

				      	<input type="password" placeholder="Password"  name="psw" required onChange={this.handleClick} onFocus={this.handleClick}/>
				      	<label className={this.state.psw ==="" && this.state.checkFlag? "" : "hidden"}> Password is required</label>

				      	<span id="terms"><input type="checkbox"  name="terms"/>I accept to the <a href="#">Terms of Service </a></span>
				    </div>
				  </form>
				   <button id="footer" onClick={this.handleSubmit}>
				    	Register
				    </button>
			</div>
		)
	}
}
