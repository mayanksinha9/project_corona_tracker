import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './StatePicker.module.css';

import {fetchregionData} from '../../api';


const StatePicker=()=>{
const [fetchedregionData,setFetchedregionData]=useState([]);

    useEffect(()=> {
        const fetchAPI= async()=> {
        setFetchedregionData(await fetchregionData());
        }
        
        fetchAPI();
    },[setFetchedregionData]);

    console.log(fetchregionData);
  

    return(
        <FormControl className={styles.formcontrol}>
            <NativeSelect >
            <option value='global'>Global</option>
            {fetchedregionData.map((regionData,i)=> <option key={i} 
            value={regionData}></option>)}
             </NativeSelect>
        </FormControl>
    )
}

export default StatePicker;