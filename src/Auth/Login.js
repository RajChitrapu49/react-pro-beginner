function Login(){
    return(
       <div className="container">
       <div className="row">
       <div className="col-4">
           <h2>Login FORM</h2>
           <div className='mt-4'>
           <label>EMAIL</label>
           <input type="text" className='form-control' placeholder="Name"/>
           </div>

           <div className='mt-4'>
           <label>PASSWORD</label>
           <input type="Password" className='form-control' placeholder="password"/>
           </div>

           <div className="mt-4 d-flex justify-content-center">
            <button className="btn btn-success"> LOGIN </button>
           </div>

       </div>

       </div>

       </div>
    )
}

export default Login;
