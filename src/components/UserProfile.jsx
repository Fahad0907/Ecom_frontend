import React from 'react'

const UserProfile = () => {
    return (
        <div class="container">
        <div class="row">
             
            <h3 class="mt-5 text-center"> </h3>
            <hr/>
                <div class="col-lg-6">
                    <div class="card mt-5">
                        <div class="card-body">
                            <h2 class="card-title text-center">Your <span class= "text-primary">2</span> Orders pending </h2>
                            
                            <a href="" class="btn btn-primary check">Check</a>
                        </div>
                    </div>
                </div>
               

                <div class="col-lg-6">
                    <div class="card mt-5">
                        <div class="card-body">
                            <h2 class="card-title text-center">Total <span class= "text-primary"> 5 </span> Orders</h2>
                            
                            <a href="" class="btn btn-primary check" >Check</a>
                        </div>
                    </div>
                </div>
            
        </div>
    </div>
    )
}

export default UserProfile
