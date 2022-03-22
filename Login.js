import React from "react";
const Loginpage = () => {
  return (
    <div className="login">
      <div className="wedbush"> WEDBUSH</div>
      <br />
      <div className="slwp">STOCK LOCATE WEB PORTAL</div>
      <div className="input container">
        <label>User Name: </label>
        <input type="text" name="username" />
      </div>
      <br />
      <div className="input container">
        <label>Password: </label>
        <input type="text" name="password" />
      </div>
      <button className="lg">Login</button>
      <button className="reset">Reset</button>
      <p id="text"><i>
        For account setup and anyother questions,please contact our customer
        service at</i>
      </p>
      <p id="text1"><i>(213)688-4357. </i></p>
    </div>
  );
};
export default Loginpage;
