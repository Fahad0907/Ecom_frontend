import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
    const [pendingOrder, setpendingOrder] = useState(null)
    const [count, setcount] = useState(null)

    useEffect(()=>{
        const getPost = async () =>{
            await axios({
                method : 'get',
                url : 'http://127.0.0.1:8000/orderlist/',
                headers :  {Authorization : `token ${window.localStorage.getItem('token')}`}
            }).then(response=>{
                setcount(response.data)
                console.log(response.data)
            })
        }
        getPost()
    },[])


    const pending =(value)=>{
        axios({
            method : 'post',
            url : 'http://127.0.0.1:8000/orderlist/',
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            data :{
                'ordered' : value,
                
            }
        }).then(response=>{

            setpendingOrder(response.data) 
            console.log(response.data)
            
          
           
            
        }).catch(_ =>{
            alert('problem')
        })
            
        
    }

    return (
        <div class="container">
        <div class="row">
             
            <h3 class="mt-5 text-center"> </h3>
            <hr/>
                <div class="col-lg-6">
                    <div class="card mt-5">
                        <div class="card-body">
                            <h2 class="card-title text-center">Your <span class= "text-primary">{count?.pending?.length}</span> Orders pending </h2>
                            
                            <Link onClick= {()=>pending('False')} class="btn btn-primary check">Check</Link>
                        </div>
                    </div>
                </div>
               

                <div class="col-lg-6">
                    <div class="card mt-5">
                        <div class="card-body">
                            <h2 class="card-title text-center">Total <span class= "text-primary"> {count?.Total?.length} </span> Orders</h2>
                            
                            <Link onClick= {()=>pending('True')} class="btn btn-primary check" >Check</Link>
                        </div>
                    </div>
                </div>


          
                {
                    pendingOrder !== null ?(

                        

                        
                           
                    <table class="table mt-5">
                        <thead>
                            <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Order date</th>
                            <th scope="col">Order Status</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                     pendingOrder.map((data,i)=>(
                                    <tr>
                                        {data?.orderId?(
                                            <>
                                                <td><Link  href="">{data?.orderId}</Link></td>
                                                <td>{data.crated}</td>
                                        {data?.delivere ==true?(<td class="text-primary">Delivered</td>):(<td class="text-primary">Pending</td>)}
                                            </>
                                        ):(<></>)}
                                        
                                        
`        
                                </tr>

                                ))
                            }
                            
                            
                        
                        </tbody>
                    </table>
                   
                    ):(
                        <></>
                    )
                }
            
        </div>
    </div>
    )
}

export default UserProfile
