import React, { Component, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../pages/login/login.css'
import '../pages/register/register.css'
// import './bootstrap.css'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spinIt from "../pages/register/spinn.gif";
import { useDispatch } from 'react-redux';
import InputField from './controls/InputField';
import { EMAIL_REGX } from '../constant/regex';


const FirstName = ({ onBlurh }) => {

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail ] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    const [emailLength, setEmailLength] = useState(0)
  
    const [todos, setTodos] = useState()
  
    useEffect(() => 
    {
        const doesEmailMath = EMAIL_REGX.test(email);
        setValidEmail(doesEmailMath);
  
    }, [email]);

    const changeEmail = () => 
    {
        alert("Am Ok")
    }

  return (
      <>      
        <div className={!validEmail && emailLength > 1 ? 'input-group borderRed' : 'input-group mb-4'}>
            <InputField 
                    type="text" 
                    id="email" 
                    name="email" 
                    class="form-control borderh inputPadding"              
                    onChange={(event) => { setEmail(event?.target.value); }}
                    onFocus={(e) => {setEmailFocus(true); }}
                    onKeyUp={(e) => [ setEmailFocus(true), setEmailLength(e.target.value.length) ] }
                    onBlur={(e) => [ setEmailFocus(false), onBlurh(validEmail)] }
                    ariaInvalid={ !validEmail ? "false" : "true" }
                    ariaDescribedby="uidnotes"
                />
                
            <span class="input-group-text" id="basic-addon2" style={{ borderRadius : 0, paddingRight : 20 }}>                                
                <span className={ emailLength <= 0 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                    <FontAwesomeIcon icon={ faInfoCircle } style={{ color : "gray", fontSize : 26 }}/>
                </span>                                
                <span className={ ((emailLength >= 3 && validEmail) || (!emailFocus && validEmail)) && emailLength >= 3 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                    <FontAwesomeIcon icon={ faCheck } style={{ color : "green", fontSize : 26 }}/>
                </span>
                <span className={ ((emailLength >= 1 && !validEmail) || ((emailLength < 3 && emailLength > 0) && !validEmail)) ? "invalid" : "hide" } style={{ marginLeft : 10 }}>
                    <FontAwesomeIcon icon={ faTimes } style={{ color : "red", fontSize : 26 }}/>
                </span>
            </span>   
        </div>                
                
        <div class="row" className={ email === '' ? 'hide' : '' } style={{ marginTop : 10 }}>
            <p id="uidnotes" className={ ((emailFocus && !validEmail) || (emailLength < 3 && !validEmail)) || ( email && !validEmail) ? "instructions" : "hide" }>
                <FontAwesomeIcon icon={ faInfoCircle } style={{ marginRight : 5, color : "red" }}/>
                <span class="text-red" style={{ fontSize: 12, fontWeight: "bold" }}>Provide a valid email. Email can only contain "UnderScore( _ ), Numbers, Alphabets"</span>
            </p>  
        </div>
      </>
  )
}

export default FirstName