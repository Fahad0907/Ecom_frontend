import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Popper from 'popper.js'
import axios from 'axios'
import { useStateValue } from './StateProvider'
const Navbar = () => {
    const history = useHistory()
    let profile = null
    profile = window.localStorage.getItem('token')

    const logoutNow =()=>{
        window.localStorage.clear()
        window.location.href = '/'
    }



    const [category, setcategory] = useState(null)
    useEffect(()=>{
        const getPost = async () =>{
            await axios({
                method : 'get',
                url : 'http://127.0.0.1:8000/',
            }).then(response=>{
                
                setcategory(response.data)
            })
        }
        getPost()
    },[])

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#"><i class="fas fa-shopping-cart fa-2x"></i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                        Product
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        
                        
                        {
                           category && category.map((data,i)=>(
                               <div key={i}>
                                <Link   class="dropdown-item" to={`/showproduct/${data.id}/`}>{data?.name}</Link>
                                </div>
                            ))
                        }
                       
                        
                    </div>
                </li>
                {
                    profile!==null?(
                    <>
                        <li class="nav-item">
                        
                        <Link class="nav-link" onClick={logoutNow}>Logout</Link>
                    
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/myprofile/">My profile</Link>
                    </li>
                
                <li class="nav-item">
                    <div class="btn-group">

                        <Link class="nav-link"  to="/cart/">Cart</Link>
                    </div>
                </li>
                    </>
                    
                    )
                    
                    :(
                        <>
                        <li class="nav-item">
                        
                        <Link class="nav-link" to="/login/">Login</Link>
                    
                        </li>
                        </>
                    )
                }
                
                
               
                    
                <li class="nav-item">
                    <Link class="nav-link" href="#">Contact</Link>
                </li>
            </ul>

        </div>
    </div>

</nav>

    )
}

export default Navbar
