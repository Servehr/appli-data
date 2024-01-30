import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Forgot extends Component {
    render() {
      return (
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-6">          
              <div class="login-box">
                <div class="login-logo">
                  <a href="https:/www.google.com"><b>ICS OUTSOURCING</b></a><br/>
                  <a href="https:/www.google.com"><h5>CV-PORTAL : FORGOT PASSWORD</h5></a>
                </div>
                {/* <!-- /.login-logo --> */}
                <div class="card py-4 px-2 mt-4">
                  <div class="card-body login-card-body">
              
                    <form action="https:/www.google.com" method="post">
                      <div class="input-group mb-3">
                        <input type="email" id="email" name="email" class="form-control" placeholder="Provide email to recieve reset link"/>
                        <div class="input-group-append">
                          <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
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
                          <button type="submit" class="btn btn-primary btn-block py-2">Send</button>
                        </div>
                        {/* <!-- /.col --> */}
                      </div>
                    </form>
                    
                    <div class="row mt-4">
                      {/* <!-- /.col --> */}
                      <div class="col-3">
                        <Link to="/register" class="text-center">Register</Link>
                      </div>
                      {/* <!-- /.col --> */}
                      <div class="col-6"></div>
                      <div class="col-3">
                        <Link to="/login" class="text-center">Login</Link>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.login-card-body --> */}
                </div>
              </div>
              {/* <!-- /.login-box -->         */}
            </div>
            <div class="col-sm-2"></div>
          </div>
        </div>
      )
    }
}

export default Forgot
