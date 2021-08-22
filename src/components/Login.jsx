import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'


const Login = () => {
   
    const [username, setusername] = useState(null)
    const [password, setpassword] = useState(null)
    const history = useHistory()
    const log = () =>{
    axios({
            method : 'post',
            url : 'http://127.0.0.1:8000/login/',
            data :{
                'username' : username,
                'password' : password
            }
        }).then(response=>{
            
           window.localStorage.setItem("token", response.data['token'])
           window.location.href = '/'
          
            
        }).catch(_ =>{
            alert('worong username or password')
        })
        
    }
    return (
        <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 col-sm-12">
                <div class="card login" >
                    <div class="card-body">
                        <h1 class="card-title text-center"><i class="fas fa-user text-primary"></i></h1>
                        <div class="form-group">
                            <label for="exampleInputEmail1">User Name</label>
                            <input type="text" onChange={(e)=> setusername(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" onChange={(e)=> setpassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button class="loginSubmit" type="submit" onClick={log} >Submit</button>
                        <Link  class = "regis" to="/registration/" ><small >Not have a account ?</small></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login
