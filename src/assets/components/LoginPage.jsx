import './LoginPage.css'

export function LoginPage(){
    return(
<>
<div className="card">
    <div className='left'>
        <div className="input-type"></div>
        <h1>create account</h1>
        <input type='text' placeholder='username'></input>
        <i class="fa-solid fa-user"></i>
        <input type='email' placeholder='email'></input>
        <input type='password' placeholder='password'></input><br></br>
        
        <div className="">
            <div className="terms">
        <input type='checkbox'></input>
        <label for="terms">I accept the terms </label>
        </div>
        <button className='sign-up'>Sign up</button>
        </div>
    </div>
    <div className="right">
        <div className="input">
        <h2>Get Started</h2>
        <p>Already have an account?</p>
        </div>
        <button className='login'>Login</button>
    </div>
</div>
</>
    );
}
export default LoginPage