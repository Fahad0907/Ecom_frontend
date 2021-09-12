import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [image1, setimage1] = useState(null)
    const [image2, setimage2] = useState(null)
    const [productName, setproductName] = useState(null)
    const [description, setdescription] = useState(null)
    const [discount, setdiscount] = useState(null)
    const [price, setprice] = useState(null)
    const [col, setcol] = useState(null)
    const [sz, setsz] = useState(null)
    const [sizeS, setsizeS] = useState(null)
    const [sizeM, setsizeM] = useState(null)
    const [sizeL, setsizeL] = useState(null)
    const [sizeXL, setsizeXL] = useState(null)
    let color = ""
    let size = ""
    useEffect(()=>{
        const getPost = async () =>{
            await axios({
                method : 'get',
                url : `http://127.0.0.1:8000/updateproduct/${id}/`,
            }).then(response=>{
               
                //setProduct(response.data)
                setproductName(response.data?.product?.productName)
                setdescription(response.data?.product?.description)
                setimage1(`http://127.0.0.1:8000${response.data?.product?.image}`)
                setprice(response.data?.product?.price)
                setdiscount(response.data?.product?.discountVal)
                
              /*
                for(let i=0; i<response.data?.Color?.length; i++)
                {
                    if(i== response.data?.Color?.length - 1)
                        color = color+ response.data?.Color[i]?.value
                    else
                        color = color  + response.data?.Color[i]?.value + ' '
                    
                }
                setcol(color)
                for(let i=0; i<response.data?.Size?.length; i++)
                {
                    if(i== response.data?.Size?.length - 1)
                        size = size+ response.data?.Size[i]?.value
                    else
                        size = size  + response.data?.Size[i]?.value + ' '
                    
                }
                setsz(size)
                */
               
                
            })
        }
        getPost()
    },[])

    const updateData= async()=>{
        let formField = new FormData()
        
        formField.append('productName',productName)
        formField.append('price',price)
        formField.append('discountVal',discount)
        formField.append('description',description)
        
        if(image2 !== null){
            formField.append('image',image2)
        }
        await axios({
            method : 'put',
            url : `http://127.0.0.1:8000/updateproduct/${id}/`,
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            data  : formField
            
        }).then(response=>{
            
            console.log(response.data)
        })
        

    }
    
    
    return (
        <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>

            <div class="col-lg-6">
                <h5 class="text-center">Update Product</h5>
                
                    <br/>
                    <label for="">Product Name : </label>
                    <br/>
                    <input onChange={(e)=> setproductName(e.target.value)} value={productName} name="pname" type="text" class="pname"/>
                    <br/>

                    <p>Availability :</p>
                    <input type="checkbox" id="avl" name="avl" value="False"/>
                    <label for="avl">Out of stock</label><br/>
                    <label for="">Image :</label>
                    <br/>
                    <img src={image1} alt="" class = "updateImage" />
                    <br/>
                    <input onChange={(e)=>setimage2(e.target.files[0])} type="file" id="img" name="img" accept="image/*"/>
                    <br/>
                    <label for="">Description: </label>
                    <br/>
                    <textarea onChange={(e)=>setdescription(e.target.value)} class="pname" value={description} name="description" id="" cols="50" rows="10"></textarea >
                    <br/>
                    <label for="">Price </label>
                    <br/>
                    <input onChange={(e)=>setprice(e.target.value)} value={price} name="price" type="text" class="pname" />
                    <br/>
                    <label for="">Discount </label>
                    <br/>
                    <input onChange={(e)=> setdiscount( e.target.value)} value={discount}  class="pname" name="discount" type="text" />
                    <br/>
                    
                    
                    <input onClick={updateData} class ="pupdate" type="submit" value="Update" name="update"/>
                    



                

            </div>
        </div>
    </div>
    )
}

export default UpdateProductDetails
