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
                url : `http://127.0.0.1:8000/productDetails/${id}/`,
            }).then(response=>{
               
                //setProduct(response.data)
                setproductName(response.data?.product?.productName)
                setdescription(response.data?.product?.description)
                setimage1(`http://127.0.0.1:8000${response.data?.product?.image}`)
                setprice(response.data?.product?.price)
                setdiscount(response.data?.product?.discountVal)
                
              
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
                
               
                
            })
        }
        getPost()
    },[])

    const updateData=()=>{
        let formField = new FormData()
        const sizeArray = []
        sizeArray.push(sizeS)
        sizeArray.push(sizeM)
        sizeArray.push(sizeL)
        sizeArray.push(sizeXL)
        formField.append('id',id)
        formField.append('productname',productName)
        formField.append('price',price)
        formField.append('discount',discount)
        formField.append('description',description)
        formField.append('color',col)
        formField.append('size',sizeArray)
        formField.append('image',image2)
        axios({
            method : 'put',
            url : 'http://127.0.0.1:8000/updateproduct/',
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            data  : formField
            
        }).then(response=>{
            
            
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
                    <p>Select avilable size :</p>
                    <p> Previously selected size for this product : {sz}</p>
                    <input type="checkbox" onChange={(e)=> setsizeS(e.target.value)} id="S" name="size" value="S"/>
                    <label for="s">S</label><br/>
                    <input type="checkbox" onChange={(e)=> setsizeM(e.target.value)} id="M" value="M" name="size"/>
                    <label for="M">M</label><br/>

                    <input type="checkbox" onChange={(e)=> setsizeL(e.target.value)} id="L" value="L" name="size" />
                    <label for="L">L</label><br/>
                    <input type="checkbox" onChange={(e)=> setsizeXL(e.target.value)} id="XL" value="XL" name="size"/>
                    <label for="XL">XL</label><br/>
                    <label for="">Available Color :</label>
                    
                    <input class="pname" name="color" type="text" value={col}/>
                    <br/>
                    <input onClick={updateData} class ="pupdate" type="submit" value="Update" name="update"/>
                    



                

            </div>
        </div>
    </div>
    )
}

export default UpdateProductDetails
