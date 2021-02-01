import React, {useState} from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function NavigationBar(props){
  const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
     setValue(newValue);
     props.onClickCallBack(newValue);
   };
return (
  <div>
    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
         <Tab label="Item One" />
         <Tab label="Item Two"/>
         <Tab label="Item Three" />
       </Tabs>
  </div>
  )
}
