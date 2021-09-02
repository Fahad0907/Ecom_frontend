import React from 'react'
import { Link } from 'react-router-dom'

const AdminOptions = () => {
    return (
        <div class="container">
        
        <div class="row">
            <div class="col-lg-4">
                <div class="card mt-5">
                    <div class="card-body">
                        <h3 class="card-title text-center">Product</h3>
                        <Link to="/admin/addproduct/" class="btn btn-success add">Add</Link>
                        <br/><br/>
                        <Link to="/admin/updateproduct/" class="btn btn-info add">Update</Link>
                    </div>
                </div>
            </div> 
            <div class="col-lg-4">
                <div class="card mt-5">
                    <div class="card-body">
                        <h3 class="card-title text-center">Category</h3>
                        <Link to="#" class="btn btn-success add">Add</Link>
                        <br/><br/>
                        <Link to="#" class="btn btn-info add">Update</Link>
                    </div>
                </div>
            </div>  

            <div class="col-lg-4">
                <div class="card mt-5">
                    <div class="card-body">
                        <h3 class="card-title text-center">Coupon</h3>
                        <Link to="" class="btn btn-success add">Add</Link>
                        <br/><br/>
                        <Link to="" class="btn btn-info add">Update</Link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card mt-5">
                    <div class="card-body">
                        <h3 class="card-title text-center">Order</h3>
                        <h4 class="text-center">You have <span class = "text-primary">2</span> New Orders</h4>
                        <br/>
                        <Link to="" class="btn btn-info add">Check</Link>
                    </div>
                </div>
            </div>     
        </div>
        


    </div>
    )
}

export default AdminOptions
