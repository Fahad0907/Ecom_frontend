import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Cart = () => {
    const history = useHistory()
    const [order, setorder] = useState(null)
    const [coupon, setcoupon] = useState(null)
    const [payment, setpayment] = useState(null)
    
    const applyCoupon = async()=>{
        await   axios({
            method : 'post',
            url : 'http://127.0.0.1:8000/coupon/',
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            data :{
                'coupon' : coupon
            }
        }).then(response=>{
            
            
            window.location.href = '/cart/'
            console.log(response.data)
        }).catch(_ =>{
            alert('something wrong')
        })
    }

    

    const incrementQuantity =async(id)=>{
        await   axios({
            method : 'put',
            url : 'http://127.0.0.1:8000/plus/',
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            data :{
                'id' : id
            }
        }).then(response=>{
            
            window.location.href = '/cart/'
            
            
        }).catch(_ =>{
            alert('something wrong')
        })
    }
    
    const decrementQuantity = async(id)=>{
        await   axios({
            method : 'post',
            url : 'http://127.0.0.1:8000/minus/',
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            data :{
                'id' : id
            }
        }).then(response=>{

            window.location.href = '/cart/'
            
        }).catch(_ =>{
            alert('problem')
        })
    }  


    const checkout = async()=>{
        await   axios({
            method : 'post',
            url : 'http://127.0.0.1:8000/checkout/',
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            data :{
                'payment' : payment
            }
        }).then(response=>{

            history.push('/')
            
        }).catch(_ =>{
            alert('problem')
        })
    }

    useEffect(()=>{
        const getPost = async () =>{
            await axios({
                method : 'get',
                url : 'http://127.0.0.1:8000/cart/',
                headers :  {Authorization : `token ${window.localStorage.getItem('token')}`}
            }).then(response=>{
                setorder(response.data)
                console.log(response.data)
            })
        }
        getPost()
    },[])

    

     
    return (
        
        <div class="container">
        <div class="row">
       
            <div class="col-lg-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Product name</th>
                            <th scope="col">Size</th>
                            <th scope="col">Color</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                        order && order.orderItems.map((data,i) =>(
                        <tr>
                            <td><img src={`http://127.0.0.1:8000${data?.productInfo?.image}`} alt=""/></td>
                            <td>{data?.productInfo?.productName}</td>
                            <td>{data?.size}</td>
                            <td>{data?.color}</td>
                            <td>{data?.productInfo?.price}</td>
                            <td> <Link class = "plus" onClick={()=>incrementQuantity(data?.productInfo?.id)}  >+</Link>   {data?.quantity}
                            <Link class ="minus" onClick={()=>decrementQuantity(data?.productInfo?.id)} >-</Link> </td>
                            <td class="amount">{data?.productInfo?.price } * {data?.quantity}</td>
                            <td><a href=""><i class="fas fa-trash-alt" style={{color: "Red"}}></i></a></td>

                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div class="cd">
                <div class="card box" >
                    <h3 class="heading text-center">Cart Total</h3>
                    <hr/>
                        <div class="card-body">
                            <h6 class="card-title">Subtotal : {order && order.amount} </h6>
                            <hr/>
        
                                
                                
                                <input onChange={(e)=> setcoupon(e.target.value)}  class ="cpn" type="text" name = "couponCode" />
                                <button onClick={applyCoupon}  class=" ml-2 coupon" name = "coupon">Apply Coupon </button> 
                                <br/>
                                <hr/>
                                
                                <select onChange={(e)=>{setpayment(e.target.value)}} name="color" required>
                                <option disabled selected>--Select payment--</option>

                        
                                <option name='size' value="cash on delivery">Cash on delivery</option>
                                <option name='size' value="online payment">Online payment</option>
 
                                </select>

                                <br/>
                              
                                
                                <br/>
                                <hr/>
                                <button onClick={checkout} class="check" name = "checkout" >Proced to checkout</button>
                        
                        </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Cart
