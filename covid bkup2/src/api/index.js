import axios from 'axios';

const url='https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true';

export const fetchData=async()=>{
    /*let changeableUrl=url;
    if(regionData){
        changeableUrl=(`${url}/regionData/${regionData}`);
    }*/
    try{
        const {data:{activeCases,recovered,deaths,lastUpdatedAtApify}}=await axios.get(url);

        
    return {activeCases,recovered,deaths,lastUpdatedAtApify};
    }
    catch(error){

    }
}

export const fetchRegionData= async()=>{
    try{
const{data}=await axios.get(`${url}/RegionData`);
const modifiedData=data.map((RegionData)=>({
    totalInfected:RegionData.totalInfected,
    recovered:RegionData.recovered,
    deceased:RegionData.deceased,
}));

return modifiedData;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchregionData =async ()=>{
    try{
        const{data:{regionData}}= await axios.get(`${url}/regionData`);
        
        return regionData.map((regionData)=> regionData.region);
    }
    catch(error){


      return(error);
    }
 };
