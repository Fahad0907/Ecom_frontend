import React from 'react'
import { Link } from 'react-router-dom'
const Registrations = () => {
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
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Re-type Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button class="loginSubmit" type="submit"  >Create account</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Registrations
