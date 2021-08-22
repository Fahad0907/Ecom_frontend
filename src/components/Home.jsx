import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider'

const Home = () => {
    const[{profile}, dispatch] =useStateValue()
    try{
    useEffect(()=>{
        const getPost = async () =>{
            await axios({
                method : 'get',
                url : 'http://127.0.0.1:8000/userinfo/',
                headers :  {Authorization : `token ${window.localStorage.getItem('token')}`}
            }).then(response=>{
              dispatch({type:'addProfile', value:response.data['Data']})
              
                
            })
        }
        getPost()
    })
  }
  catch{
    
  }
    
    return (
        <div>
            
        </div>
    )
}

export default Home
