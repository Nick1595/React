import React from "react";

const Login = () => {
  return (
    <>
      <div className="outlet1">
        <div className="container ">
          <div className="row ">
            <div className="col-2 text-center skin ">
              <h1>LUXURY</h1>
              <pre>H O T E L</pre>
            </div>
            <div className="col-8">
              <ul className="list-unstyled text-secondary d-flex justify-content-evenly fs-5 mt ps-5 ms-5">
                <li>Home</li>
                <li>Facilities</li>
                <li>Rooms</li>
                <li className=" link-warning">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className= "info-2 col-4 m-auto">
          <h2>WE ARE HERE FOR YOU</h2>
          <p id="para">At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, 
          please forward it to our support desk and we will get back to you as soon as possible.</p>
        </div>
        <div className="log col-8   mt-4">
        <i class="fas fa-house-chimney-user justify-content-center mt-5   fs-1"></i>
          <h3>Luxury hotel</h3>
          <p>Easy and simple-to-use hotel <br />Management system </p>
          <input type="text" placeholder="email" /> 
          <br /> 
          <br />  
          <input type="password" placeholder="Password" />
          
            <div className=" mt-2">
            <i class="far fa-circle-question"></i> 
            <p className="d-inline need-help"> Need help ?</p>
            <br />
            <input type="button" className="log-btn mt-3"  value="Sign In" />
        
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
