import React, {Component} from 'react';
import "./ContactForm.scss";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class ContactForm extends Component{

	constructor(props){
		super(props);
		this.state={
			checkFlag: false,
			businessName: "",
			businessSite: "",
			email: "",
			thoughts: "",
			showMessage: false,
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
				thoughts: this.state.thoughts,
		}
			fetch(`/api/contactus`, {
	      method: 'POST',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({user: params})
	    }).then(res => res.json())
			.then(res => this.setState({showMessage: true}))
	}

	render(){
		return(
			<div className="contactform-container">
				<div id="text">
					Tell us your thoughts
				</div>
				<div className={this.state.showMessage ? "show-message": "hidden"}>
					Thank you for the message! We will get back to you shortly.
				</div>
				 <form>
				    <div>
				    	<input type="text" placeholder="Name" required name="businessName" onChange={this.handleClick} onFocus={this.handleClick}/>

				      	<input type="text" placeholder="Business website"  required onChange={this.handleClick}  name="businessSite" onFocus={this.handleClick}/>


				      	<input type="text" placeholder="Your email"  name="email" required onChange={this.handleClick} onFocus={this.handleClick} />

				      	<textarea id="thoughts" name="thoughts" placeholder="Message" rows="4" cols="50"
								style={{width: "-webkit-fill-available"}}
								required onChange={this.handleClick} onFocus={this.handleClick}/>
				    </div>
				  </form>
					<div className="submit">
				   	<button className="primary" onClick={this.handleSubmit}>
				    	Submit
				    </button>
					</div>
			</div>
		)
	}
}
