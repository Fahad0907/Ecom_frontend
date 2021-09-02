import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UpdateProduct = () => {
    const [showcat, setshowcat] = useState(null)
    const [category, setcategory] = useState(null)
    const [holdCategory, setholdCategory] = useState(null)
    useEffect(()=>{
        
        const getPost = async () =>{
            await axios({
                method : 'get',
                url : 'http://127.0.0.1:8000/addproduct/',
                headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            }).then(response=>{
                setshowcat(response.data)
                //console.log(response.data)
                
            })
        }
        getPost()
    },[])
    if(category)
    {
        axios({
            method : 'post',
            url : 'http://127.0.0.1:8000/updateproduct/',
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            data :{
                'category' : category
            }
        }).then(response=>{
            
            setholdCategory(response.data)
            setcategory(null)
            //console.log(response.data)
            //console.log(category)
            
        })

    }
    const deleteProduct=(id)=>{
        axios({
            method : 'delete',
            url : 'http://127.0.0.1:8000/updateproduct/',
            headers :  {Authorization : `token ${window.localStorage.getItem('token')}`},
            data :{
                'id' : id
            }
        }).then(response=>{
            window.location.href ='/admin/updateproduct/'
            
            
        })
    }

    return (
        <div class="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                <select onChange={(e)=> setcategory(e.target.value)}  name="cat" class = "cat mt-3" >
                        <option disabled selected>--Select Category--</option>
                      {
                          showcat && showcat.map((data,i)=>(
                            <option name="cat" value={data?.name}>{data?.name}</option>
                          ))
                      }
                    </select>
                </div>
            </div>
            
                {
                    holdCategory?(
                        <div class="row">
                            <div class="col-lg-12">
                                <table class="table mt-5">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Product name</th>
                                            <th scope="col">Active Status</th>
                                            <th scope="col">Price</th>
                        

                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        holdCategory && holdCategory.map((data,i) =>(
                                            <tr>
                                                 <td><Link  to={`/admin/updateproduct/${data.id}/`}><img src={`http://127.0.0.1:8000${data?.image}`} alt=""/></Link></td>
                                                <td>{data?.productName}</td>
                                                {data?.available?(<td style={{color:"green"}}>Active</td>):(<td>In active</td>) }
                                                
                                                <td>{data?.price}</td>
                                                
                                                 <td> <Link onClick={()=>deleteProduct(data.id)}> <i style={{color:"red"}} class="fas fa-trash-alt"></i> </Link></td>
                                            </tr>
                                        
                                            ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ):(
                        <>
                        </>
                    )
                }
           
            
        </div>
    )
}

export default UpdateProduct
