import React, { Component } from 'react';
import "./Home.scss"
export default class Home extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div className="home-container">
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <div style={{height: "50vh"}}>
          <p>Lorem Ipsum Porem Lorem Ipsum Porem</p>
        </div>
        <div class="contact-us">
          <button onClick={() => this.props.history.push('/contactus')} className="primary"> Contact Us </button>
        </div>
      </div>
    );
  }
}
