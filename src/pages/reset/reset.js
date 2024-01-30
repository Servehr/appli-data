import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Reset extends Component {
  render() {
    return ( 
        <section style={{ backgroundColor : '#0a023f', position : 'absolute', top : 0, left : 0, right : 0, bottom : 0, padding : 20 }}>
            <div class="container mt-5">
                <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">          
                    <div class="login-box" style={{ width : "auto" }}>
                    <div class="login-logo">
                        <a href="https://www.google.com"><b>ICS OUTSOURCING CV-PORTAL</b></a><br/>
                    </div>
                    {/* <!-- /.login-logo --> */}
                    <div class="card py-4 px-2 col-sm-12">
                        <div class="card-body login-card-body">
                    
                        <form action="https:/www.google.com" method="post">
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Password" style={{ paddingTop : 30, paddingBottom : 30 }}/>
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-lock" style={{ fontSize : 23 }}></span>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Confirm Password" style={{ paddingTop : 30, paddingBottom : 30 }}/>
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                    <span class="fas fa-lock" style={{ fontSize : 23 }}></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                            {/* <div class="col-8">
                                <div class="icheck-primary">
                                <input type="checkbox" id="remember"/ >
                                <label for="remember">
                                    Remember Me
                                </label>
                                </div>
                            </div> */}
                            {/* <!-- /.col --> */}
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block py-3">RESET MY PASSWORD</button>
                            </div>
                            {/* <!-- /.col --> */}
                            </div>
                        </form>
                        
                        <div class="row mt-4">
                            <div class="col-9">
                                <Link to="/login">Login</Link>
                            </div>
                            {/* <!-- /.col --> */}
                            <div class="col-3">
                            <Link to="/register" class="text-center">Register</Link>
                            </div>
                            {/* <!-- /.col --> */}
                        </div>
                        </div>
                        {/* <!-- /.login-card-body --> */}
                    </div>
                    </div>
                    {/* <!-- /.login-box -->         */}
                </div>
                <div class="col-sm-3"></div>
                </div>
            </div>
      </section>
    )
  }
}

export default Reset
