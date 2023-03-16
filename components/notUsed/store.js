import React, { useState,useEffect } from 'react';
import api from '../axios/api';

export const StoreContext=React.createContext();
export const StoreContextProvider = (props) => {
    const url="https://www.masterconnect.ca/api"
    const [isReady,setIsReady]=useState(false);
    const [packages,setpackages]=useState({loaded:false,data:[]});

    useEffect(()=>{
        async function getpackages(){
            try {
                const res=await api.get('/account/getPackages/');
                const body=res.data;
                console.log(body)
            } catch (error) {
                console.log(error.messages)
            }
        }
        async function fetchThis(){
            try {
                const res=await fetch(`${url}/account/getPackages/`);
                const body= await res.json();
                console.log(body)
            } catch (error) {
                console.log(error.message)
            }
        }
        // fetchThis();
    },[]);
  return (
    <StoreContext.Provider value={{isReady,setIsReady}}>
        {props.Children}
    </StoreContext.Provider>
  )
}

