import React from 'react';
import styles from './App.module.css'; 
import {fetchData} from './api';
//import Card from 'react-bootstrap/Card';

import{Cards,Chart,StatePicker} from './components';

class App extends React.Component{
  state={
    data:{},
    region: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }

 /* handleStateChange=async(region)=>{
    const fetchData=await fetchData(region);

    this.setState({fetchData, region:region});
    

   // console.log(region);
  }
  */


  render(){
    const {data}=this.state;
    return(
      <div className={styles.container}>
        <Cards />
        <StatePicker handleStateChange={this.handleStateChange}/>
        <Chart/>
        </div>
    );
  }
}

export default App;