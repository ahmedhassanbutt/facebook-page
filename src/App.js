import './App.css';
const Facebook = () => {
  return (
    <div>
      <div className="fb-main">
        <h3>Facebook
        </h3>
        <div className="fb-div">
          <form id="form">
            <input type='text' placeholder="Email Address or phone number" name="email" id="email" autoComplete="off"></input>
            <input type='password' placeholder="Password" name="password" id="password"></input>
            <button id="loginbtn">Login</button>
            <a id="fg" href="#">Forget Password</a>
            <button id="createbtn">Create New Account</button>
          </form>

        </div>
      </div>

    </div>
  )
}
export default Facebook