import React, { Component, useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import '../register/register.css'
// import './bootstrap.css'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spinIt from "../register/spinn.gif";
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../service/auth.service';
import TodoService from '../../service/TodoService';
import FetchClient from '../../service/clientInterface';
import FirstName from '../../components/FirstName';
import Password from '../../components/Password';

const NAME_REGEX = /^[a-zA-Z-]{3,20}$/;
const PWSD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/;
const EMAIL_REGX = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}$/;
const PHONE_REGX = /^[+]*[0-9]+$/;



export const Login = () => {

  const navigate = useNavigate();
  const [validEmail, setValidEmail ] = useState(false)
  const [validPassword, setValidPassword ] = useState(false)
  const [enabled, enable ] = useState(false)

  const [todos, setTodos] = useState()

  useEffect(() => 
  {
      if(validEmail === true && validPassword === true)
      {
          enable(true)
      } else {
          enable(false)
      }

  }, [validEmail, validPassword, enabled]);

  const goToDashBoard = () => 
  {
      navigate('/home')
  }
  
    return ( 
      <div class="container mt-5">
        <div class="row">

        {/* <div class="col-sm-12">
            <div class="col-sm-2 col-lg-offset-2">
               
            </div>
            <div class="col-sm-2 col-lg-offset-2">
              
            </div>
        </div> */}
          <div class="col-3"></div>
          <div class="col-6">    
              <div class="row login-logo">
                  <span class="col-12 text-left spanTextOne">Login</span>
                  <h6>Kindly provide a valid email and passwor to be able to access the dashboard.</h6>
              </div>
              {/* <!-- /.login-logo --> */}
              <div class="card py-4 px-2">
                <div class="card-body login-card-body">

                    <FirstName onBlurh={(event) => { setValidEmail(event)}}/>

                    <Password onBlurh={(event) => { setValidPassword(event); }}/>

                    <div class="row">
                      <div class="col-12">
                        <button type="submit" onClick={goToDashBoard} class="btn btn-primary btn-block py-3" disabled={!enabled}>Sign In</button>
                      </div>
                      {/* <!-- /.col --> */}
                    </div>
                  
                  <div class="row mt-4">
                    <div class="col-9">
                        <Link to="/forgot">I forgot my password</Link>
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
          <div class="col-3"></div>
          {/* <div class="col-sm-2"></div> */}
        </div>
      </div>
    )
}

export default Login
