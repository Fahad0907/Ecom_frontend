import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
const Registrations = () => {
    const [username, setusername] = useState(null)
    const [password1, setpassword1] = useState(null)
    const [password2, setpassword2] = useState(null)
    const [email, setemail] = useState(null)
    const history = useHistory()
    const createAccount =()=>{
        if(password1 !== password2)
        {
            alert('password should be same')
        }
        else{
            axios({
                method : 'post',
                url : 'http://127.0.0.1:8000/registration/',
                data :{
                    'username' : username,
                    'password' : password1,
                    'email' : email
                }
            }).then(response=>{
                
                if( response.data['error'])
                {
                    alert('A user with that username already exist')
                }
                else{
                    history.push('/login/')
                }
            
                
            }).catch(_ =>{
                alert('worong username or password')
            })
    }
    }

    return (
        <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 col-sm-12">
                <div class="card login" >
                    <div class="card-body">
                        <h1 class="card-title text-center"><i class="fas fa-registered text-primary"></i></h1>
                        <div class="form-group">
                            <label for="exampleInputEmail1">User Name</label>
                            <input onChange={(e)=>setusername(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="usename"/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input onChange={(e)=>setemail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={(e)=>setpassword1(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Re-type Password</label>
                            <input onChange={(e)=>setpassword2(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button onClick={createAccount} class="loginSubmit" type="submit"  >Create account</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Registrations
