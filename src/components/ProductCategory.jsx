import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStateValue } from './StateProvider'
const ProductCategory = () => {
    
    
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    useEffect(()=>{
        const getPost = async () =>{
            await axios({
                method : 'get',
                url : `http://127.0.0.1:8000/showproduct/${id}/`,
            }).then(response=>{
               
                setProduct(response.data)
                
            })
        }
        getPost()
    },[])
    return (
        <div class="container" >

    <div class="row">
        {
            product && product.map((data, i)=>(
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card text-center">
                        <div class="card-body" >
                            <h5 class="card-title ">{data.productName}</h5>
                            <img src={`http://127.0.0.1:8000${data?.image}`} alt="Image not found" class="img-fluid"/>
                            <h6 class="text-center">{data.price}</h6>
                            <Link to={`/productdetails/${data.id}/`} class="btn btn-primary ">Details</Link>
                        </div>
                    </div>
            </div>
            ))
        }

        
        
    </div>


</div>
    )
}

export default ProductCategory
