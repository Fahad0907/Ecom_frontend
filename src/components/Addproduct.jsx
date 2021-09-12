import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'


const Addproduct = () => {
    let history = useHistory()
    const [category, setcategory] = useState(null)
    const [showcat, setshowcat] = useState(null)
    const [productName, setproductName] = useState(null)
    const [image, setimage] = useState(null)
    const [description, setdescription] = useState(null)
    const [price, setprice] = useState(null)
    const [discount, setdiscount] = useState(null)
    const [sizeS, setsizeS] = useState(null)
    const [sizeM, setsizeM] = useState(null)
    const [sizeL, setsizeL] = useState(null)
    const [sizeXL, setsizeXL] = useState(null)
    const [color, setcolor] = useState(null)
    const add =()=>{
        const sizeArray = []
        sizeArray.push(sizeS)
        sizeArray.push(sizeM)
        sizeArray.push(sizeL)
        sizeArray.push(sizeXL)
        console.log(sizeArray)
        let formField = new FormData()
        formField.append('image', image)
        formField.append('productName', productName)
        formField.append('description', description)
        formField.append('price', price)
        formField.append('discountVal', discount)
        formField.append('categoryKey', category)
        //formField.append('size', sizeArray)
        //formField.append('color', color)
        axios({
            method : 'post',
            url : 'http://127.0.0.1:8000/addproduct/',
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            data  : formField
            
        }).then(response=>{
             if (response.data['error'])
             {

             }
             else{
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  ) 
               // window.location.reload()
             }
            
        })
    }

    useEffect(()=>{
        const getPost = async () =>{
            await axios({
                method : 'get',
                url : 'http://127.0.0.1:8000/addproduct/',
                headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            }).then(response=>{
                setshowcat(response.data)
                console.log(response.data)
                
            })
        }
        getPost()
    },[])

    return (
        <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>

            <div class="col-lg-6">
                <h5 class="text-center">Add Product</h5>
                
                    <label >Choose Category :</label>
                    <br/>
                    <select onChange={(e)=> setcategory(e.target.value)}  name="cat" class = "cat" >
                        <option disabled selected>--Select Category--</option>
                      {
                          showcat && showcat.map((data,i)=>(
                            <option name="cat" value={data?.name}>{data?.name}</option>
                          ))
                      }
                        
                       


                    </select>
                    <br/>
                    <label for="">Product Name : </label>
                    <br/>
                    <input onChange={(e)=>setproductName(e.target.value)} name="pname" type="text" class="pname" required/>
                    <br/>
                    <label for="">Image :</label>
                    <br/>
                    <input type="file" onChange={(e)=>setimage(e.target.files[0])} id="img" name="img" accept="image/*"/>
                    <br/>
                    <label for="">Description: </label>
                    <br/>
                    <textarea class ="description" onChange={(e)=>setdescription(e.target.value)} name="description" id="" cols="50" rows="10"></textarea >
                    <br/>
                    <label for="">Price </label>
                    <br/>
                    <input class ="aprice" onChange={(e)=>setprice(e.target.value)} name="price" type="text" required/>
                    <br/>
                    <label for="">Discount </label>
                    <br/>
                    <input class="adiscount" name="discount" onChange={(e)=>setdiscount(e.target.value)} type="text" required/>
                    <br/>
                    <p>Select avilable size :</p>
                   
                    <input type="checkbox" onChange={(e)=>setsizeS(e.target.value)} id="S" name="size" value="S"/>
                    <label for="s">S</label><br/>
                    <input type="checkbox" onChange={(e)=>setsizeM(e.target.value)} id="M" value="M" name="size"/>
                    <label for="M">M</label><br/>
                   
                    <input type="checkbox" onChange={(e)=>setsizeL(e.target.value)} id="L" value="L" name="size"/>
                    <label for="L">L</label><br/>
                    <input type="checkbox" onChange={(e)=>setsizeXL(e.target.value)} id="XL" value="XL" name="size"/>
                    <label for="XL">XL</label><br/>
                    <label for="">Available Color :</label>
                    <input name="color" onChange={(e)=>setcolor(e.target.value)} type="text" class="acolor" placeholder="Red Black Blue etc"/><br/><br/>
                    <input type="submit" onClick={add} class ="addproduct" value="Add product"/>
 

            </div>
        </div>
    </div>
    )
}

export default Addproduct
