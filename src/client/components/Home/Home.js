import React, { Component } from 'react';
import "./Home.scss";
import NavigationBar from "../NavigationBar/NavigationBar";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default class Home extends Component {
  state = { username: null, value: 0 };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div className="home-container">
        <NavigationBar onClickCallBack={(val) => this.setState({value: val})}/>
        <TabPanel value={this.state.value} index={0}>
          Item One
          {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
          <div>
            <p>Lorem Ipsum Porem Lorem Ipsum Porem</p>
          </div>
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          Item Three
        </TabPanel>

        <div class="contact-us">
          <button onClick={() => this.props.history.push('/contactus')} className="primary"> Contact Us </button>
        </div>
      </div>
    );
  }
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} height="50vh">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
