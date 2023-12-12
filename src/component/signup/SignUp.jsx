import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <div className="right-content">
        <div className="content">
          <div className="img"></div>

          <form action="">
            <input type="text" placeholder="Phone number,username, or email" />
            <input type="text" placeholder="Password" />

            <button type="submit">Log in</button>
          </form>
          <div className="main-divider">
            <div className="divider"></div>
            <div className="text">
              <h4>OR</h4>
            </div>
            <div className="divider"></div>
          </div>
          <div className="login-fb">
            <img src="../../../public/download.png" alt="" />
            <a>Log in with Facebook</a>
          </div>
          <div className="forgot">
            <a>Forgot password?</a>
          </div>
        </div>
        <div className="content middle">
          <p>
            Don't have an account? <a href="">Sign up</a>{" "}
          </p>
        </div>
        <div className="bottom-area">
          <p>Get the app.</p>
          <div className="img-area">
            <a href="">
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
