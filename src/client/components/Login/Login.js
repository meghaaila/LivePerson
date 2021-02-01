import React, {Component} from 'react';
import "./Login.scss";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Route, Link, BrowserRouter } from 'react-router-dom'
const textboxIcon = "./icons/Page 1.png";

export default class Login extends Component{

	constructor(props){
		super(props);
		this.state={
			checkFlag: false,
			email: "",
			password: "",
			loginFailed: false
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
		if(this.state.checkFlag){
			let userParams = {email: this.state.email, password: this.state.password}
			fetch(`/api/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userParams)
      }).then(res => res.json())
			.then(res => {
				if(res != "failed")
					this.props.history.push('/home')
				else this.setState({loginFailed : true})
			})
		}

	}

	render(){
		return(
			<div className="login-container">
				<img src={textboxIcon} id="textboxIcon" />

				<div id="text">
					<img className="logo" src="https://d1hryyr5hiabsc.cloudfront.net/web2020/img/header/logo-white.svg" alt="LivePerson" />
				</div>
				<div className={this.state.loginFailed ? "loginFailed": "hidden"}>Login failed! Please try again.</div>
				 <form>
				    <div>
				      	<input type="text" placeholder="Your email"  name="email" required onChange={this.handleClick} onFocus={this.handleClick} />
				      	<label className={this.state.email ==="" && this.state.checkFlag? "" : "hidden"}> Email is required</label>

				      	<input type="password" placeholder="Password"  name="password" required onChange={this.handleClick} onFocus={this.handleClick}/>
				      	<label className={this.state.password ==="" && this.state.checkFlag? "" : "hidden"}> Password is required</label>

				    </div>
				  </form>
				   <button id="footer" onClick={this.handleSubmit}>
				    	Sign in
				    </button>
						<div style={{height: "50px", lineHeight: "50px"}}>
							Not a member yet? <Link to="/register">Register</Link>
						</div>
			</div>
		)
	}
}
