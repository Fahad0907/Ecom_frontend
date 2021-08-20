import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams()
    
    const [qty, setqty] = useState(null)
    const [size, setsize] = useState(null)
    const [color, setcolor] =useState(null)
    const [item, setitem] = useState(id)

    const addTocart =()=>{

        axios({
            method : 'post',
            url : `http://127.0.0.1:8000/cart/`,
            data : {
                'quantity' : qty,
                'size' : size,
                'color' : color,
                'item' : item
            },
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`}
        }).then(response=>{
            
        }).catch(_ =>{
            alert('problem')
        })

    }


    
    const [product, setProduct] = useState(null)
    useEffect(()=>{
        const getPost = async () =>{
            await axios({
                method : 'get',
                url : `http://127.0.0.1:8000/productDetails/${id}/`,
            }).then(response=>{
                console.log(response.data)
                setProduct(response.data)
            })
        }
        getPost()
    },[])
   if(product !== null){
        //console.log( product.Color[0].value)   
        let a = product.Color.length
        
   }
    
    return (
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img class="mainImage" id="productImage" src={`http://127.0.0.1:8000${product?.product?.image}`} alt="Image not found" />
                
            </div>
            <div class="col-md-6">
                <h2 class="productTitle">{product?.product?.productName}</h2>
                <p class="price">{product?.product?.price} {'&#2547'}</p>

                <p><b>Fabric:</b> 100% cotton</p>

                <p><b>Availability:</b> Stock out</p>

                <p><b>Condition:</b>New</p>
                <h5>Description:</h5>
                <p>{product?.product?.description}</p>
                <br/>
                <br/>
                

                    <label >Size</label>

                    <select name="size" onChange={(e)=>setsize(e.target.value)} required>
                        <option disabled selected>--Select size--</option>
                        {
                            product && product.Size.map((data, i)=>(
                                
                                 <option name='size' value={data.value}>{data.value}</option>
                                
                            ))
                        }    

                    </select>
                    <label class="label" > Color </label>
                    <select name="color" onChange={(e)=> setcolor(e.target.value)} required>
                        <option disabled selected>--Select color--</option>

                        {
                            product && product.Color.map((data, i)=>(
                                
                                 <option name='size' value={data.value}>{data.value}</option>
                                
                            ))
                        } 

                    </select>
                    <label class = "labelq" > Quantity : </label>
                    <input class="productDetailsInput" onChange={(e)=>setqty(e.target.value)} name="qty" type="number" min="1" max="15" step="1" required />

                    <br/>
                    <br/>

                    <button type="submit" onClick={addTocart} class="btn btn-default cart">Add to cart</button>
                

            </div>
        </div>
        <br/>
        <br/>
        <hr class="line"/>
    </div>
    )
}

export default ProductDetails
