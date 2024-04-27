import React from "react";
import { NavLink } from "react-router-dom";

const Hotel =()=> {
  return(
    <>
    <div className="outlet">
    <div className="container">
     <div className="row">
      <div className="col-2 text-center skin ">
        <h1>LUXURY</h1>
        <pre>H  O  T  E  L</pre>
      </div> 
      <div className="col-8" >
        <ul className="list-unstyled d-flex justify-content-evenly fs-5  pt-3 ps-5 ms-5">
            <li>Home</li>  
            <li>Facilities</li>  
            <li>Rooms</li>  
            <li>Contact </li>  
            <NavLink to="/login">
            <button className="btn2 btn bg-warning justify-content-center">Login</button>  
            </NavLink>
            </ul>         

      </div>
      <div className="info ">
      <h3>Welcome to</h3>
      <h1 className="gold ">LUXURY</h1>
      <h3>H O T E L</h3>
      <p className="text-dark">Book your stay and enjoy luxury <br></br>
      redifined at the most affordaable rates. </p>
      </div>
      <div className="row">
      <div className="col-10 text-center m-auto mt-5 pt-5">
      <button className="btn bg-warning justify-content-center">Book Now </button>
        
      </div>
      </div>
      
     </div>
    </div>
    </div>

    <div className="container">
            <div className="text-center m-5 "><h2> <b> Hotel Management</b> </h2></div>
            <div className="container-fluid w-100 h-100">
          <div className="mrow row justify-content-around fs-4 text-dark  text-center">
              <div className="create col-4 mt-5  ">
              <i class="fas fa-hotel fs-1 mt-5 "></i> <br></br>
                Create Company/Hotel</div>


                <div className="list col-4 mt-5  ">
              <i class="fas fa-chalkboard-user fs-1 mt-5 "></i> <br></br>
                List of Company/Hotel</div>

                <div className="agent col-4 mt-5  ">
              <i class="far fa-rectangle-list fs-1 mt-5 "></i> <br></br>
                Agent List</div>
              
          </div>
            </div>

             
        </div>
        
        <div>
                  <br /><br /><br />
                  <br />
                    
                </div>    
    </>
  )
}
export default Hotel