import React, { Component, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
// import './bootstrap.css'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spinIt from "./spinn.gif";
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../service/auth.service';

const NAME_REGEX = /^[a-zA-Z-]{3,20}$/;
const PWSD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/;
const EMAIL_REGX = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}$/;
const PHONE_REGX = /^[+]*[0-9]+$/;


const Register = () => {

  const firstName = useRef(null);
  const errRef = useRef();

  const [firstname, setFirstname] = useState('')
  const [validFirstname, setValidFirtname ] = useState(false)
  const [firstnameFocus, setFirstnameFocus] = useState(false)
  const [firstnameLength, setFirstnameLength] = useState("")

  const [surname, setSurname] = useState('')
  const [validSurname, setValidSurname ] = useState(false)
  const [surnameFocus, setSurnameFocus] = useState(false)
  const [surnameLength, setSurnameLength] = useState("")

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail ] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)
  const [emailLength, setEmailLength] = useState("")

  const [phone, setPhone] = useState('')
  const [validPhone, setValidPhone ] = useState(false)
  const [phoneFocus, setPhoneFocus] = useState(false)
  const [phoneLength, setPhoneLength] = useState("")

  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword ] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [passwordLength, setPasswordLength] = useState("")

  const [confirmPassword, setConfirmPassword] = useState('')
  const [validConfirmPassword, setValidConfirmPassword ] = useState(false)
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false)
  const [confirmPasswordLength, setConfirmPasswordLength] = useState("")
  const [match, passwordMatch ] = useState(false)
  
  const [credentials, setCredentials] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccessMsg] = useState('')

  const dispatch = useDispatch();

  const register = () => 
  {
      let user = 
      {
         firstname: firstname, 
         surname: surname, 
         phone: phone, 
         email: email, 
         password: password,
         confirm_password: confirmPassword
      }
      dispatch(signUpUser(user));
  }
  
  useEffect(() => {
    firstName.current.focus();
  }, []); 

  useEffect(() => 
  {
      const doesFirstnameMatch =  NAME_REGEX.test(firstname);
      setValidFirtname(doesFirstnameMatch);

      const doesSurnameMatch =  NAME_REGEX.test(surname);
      setValidSurname(doesSurnameMatch);

      const doesEmailMath = EMAIL_REGX.test(email);
      setValidEmail(doesEmailMath);

      const doesPhoneMatch = PHONE_REGX.test(phone);
      setValidPhone(doesPhoneMatch);

      const doesPasswordMatch = PWSD_REGEX.test(password);
      setValidPassword(doesPasswordMatch);

      const doesConfirmPasswordMatch = PWSD_REGEX.test(confirmPassword);
      setValidConfirmPassword(doesConfirmPasswordMatch);

      const isPasswordEqual = password === confirmPassword;
      passwordMatch(isPasswordEqual);

  }, [firstname, surname, email, phone, password, confirmPassword]);

  useEffect(() => 
  {
      setErrMsg("");
  }, [firstname, surname, email, phone, password, confirmPassword, firstnameLength, validPhone])

  useEffect(() => 
  {
    if(validFirstname && validSurname && validEmail && validPhone && validPassword && validConfirmPassword)
    {
        setCredentials(true)
    } else {
        setCredentials(false)
    }
  }, [validFirstname, validSurname, validEmail, validPhone, validPassword, validConfirmPassword])

 
  return (
      <section style={{ backgroundColor : '#0a023f' }}>
        <div class="container py-4">
          <div class="row mt-5">
            <div class="col">
            </div>
                <div class="col-sm-8">
                    <div class="col mb-5 text-center">
                      <a href="https://www.google.com" class="mb-3"><b><h2 class="text-white">ICSOUTSOURCING : CV-PORTAL</h2></b></a>
                    </div>
                    {/* <form> */}
                      {/* first row */}
                      <div class="row form-group text-center" className={ !errMsg ?? "takeOff" } style={{ fontSize : 20, color : "white" }}>
                        {/* <div class="col-sm-12 text-center text-white">
                           <p ref={errRef} className={ !errMsg ? "errMsg" : "takeOff" } class="alert alert-danger">{ errMsg }</p>
                        </div> */}
                      </div>
                      {/* first row */}
                      <div class="row form-group">
                        <div class="col-sm-6 mb-3 text-center text-white">
                          <div class="input-group">
                              {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" 
                                      aria-describedby="basic-addon2"/> */}
                                <input ref={firstName} type="text" id="firstname" name="firstname" class="form-control borderh" 
                                        placeholder="Enter Firstname" style={{ padding : 30 }}
                                        autoComplete="off" required 
                                        onChange={ (e) => setFirstname(e.target.value) }
                                        onFocus={ (e) => [ setFirstnameFocus(true) ] }
                                        onKeyUp={ (e) => [ setFirstnameFocus(true), setFirstnameLength(e.target.value.length) ] }
                                        onBlur={ (e) => [ setFirstnameFocus(true)] }
                                        aria-invalid={ !validFirstname ? "false" : "true" }
                                        aria-describedby="uidnote"
                                        />
                                    <span class="input-group-text" id="basic-addon2" style={{ borderRadius : 0, paddingRight : 20 }}>                                
                                      <span className={ firstnameLength <= 0 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faInfoCircle } style={{ color : "gray", fontSize : 26 }}/>
                                      </span>                                
                                      <span className={ ((firstnameLength >= 3 && validFirstname) || (!firstnameFocus && validFirstname)) && (firstnameLength <= 20 && firstnameLength >= 3) ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faCheck } style={{ color : "green", fontSize : 26 }}/>
                                      </span>
                                      <span className={ ((firstnameLength >= 1 && !validFirstname) || ((firstnameLength < 3 && firstnameLength > 0) && !validFirstname)) || firstnameLength > 20 ? "invalid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faTimes } style={{ color : "red", fontSize : 26 }}/>
                                      </span>
                                    </span>
                          </div> 
                              <div class="row" className={ firstname === '' ? 'hide' : '' } style={{ marginTop : 10 }}>
                                <p id="uidnote" className={ ((firstnameFocus && !validFirstname) || (firstnameLength < 3 && !validFirstname)) || (firstname && !validFirstname) ? "instructions" : "hide" }>
                                      <FontAwesomeIcon icon={ faInfoCircle } style={{ marginRight : 15, color : "yellow" }}/>
                                      <span class="text-white">3 to 20 characters. Must begin with a letter and can also contain hypens but no number.</span>
                                </p>        
                              </div>
                              {/* <h1 class="text-white">{firstnameLength}</h1> */}
                        </div>

                        <div class="col-sm-6 mb-3 text-center text-white">
                          <div class="input-group">
                              {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" 
                                      aria-describedby="basic-addon2"/> */}
                                <input type="text" id="surname" name="surname" class="form-control borderh" 
                                        placeholder="Enter Surname" style={{ padding : 30 }}
                                        autoComplete="off" required 
                                        onChange={ (e) => setSurname(e.target.value) }
                                        onFocus={ (e) => [ setSurnameFocus(true) ] }
                                        onKeyUp={ (e) => [ setSurnameFocus(true), setSurnameLength(e.target.value.length) ] }
                                        onBlur={ (e) => [ setSurnameFocus(false)] }
                                        aria-invalid={ !validSurname ? "false" : "true" }
                                        aria-describedby="uidnotes"
                                        />
                                  <span class="input-group-text" id="basic-addon2" style={{ borderRadius : 0, paddingRight : 20 }}>                                
                                    <span className={ surnameLength <= 0 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                                      <FontAwesomeIcon icon={ faInfoCircle } style={{ color : "gray", fontSize : 26 }}/>
                                    </span>                                
                                    <span className={ ((surnameLength >= 3 && validSurname) || (!surnameFocus && validSurname)) && (surnameLength <= 20 && surnameLength >= 3) ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                                      <FontAwesomeIcon icon={ faCheck } style={{ color : "green", fontSize : 26 }}/>
                                    </span>
                                    <span className={ ((surnameLength >= 1 && !validSurname) || ((surnameLength < 3 && surnameLength > 0) && !validSurname)) || surnameLength > 20 ? "invalid" : "hide" } style={{ marginLeft : 10 }}>
                                      <FontAwesomeIcon icon={ faTimes } style={{ color : "red", fontSize : 26 }}/>
                                    </span>
                                  </span>
                          </div> 
                              <div class="row" className={ surname === '' ? 'hide' : '' } style={{ marginTop : 10 }}>
                                <p id="uidnotes" className={ ((surnameFocus && !validSurname) || (surnameLength < 3 && !validSurname)) || ( surname && !validSurname) ? "instructions" : "hide" }>
                                      <FontAwesomeIcon icon={ faInfoCircle } style={{ marginRight : 15, color : "yellow" }}/>
                                      <span class="text-white">3 to 20 characters. Must begin with a letter and can also contain hypens but no number.</span>
                                </p>  
                              </div>                       
                        </div>
                      </div>
                      {/* second row */}
                      <div class="row form-group">
                        <div class="col-sm-6 mb-3 text-center text-white">
                            <div class="input-group">
                                {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" 
                                        aria-describedby="basic-addon2"/> */}
                                  <input type="text" id="email" name="email" class="form-control borderh" 
                                          placeholder="Enter Email" style={{ padding : 30 }}
                                          autoComplete="off" required 
                                          onChange={ (e) => setEmail(e.target.value) }
                                          onFocus={ (e) => [ setEmailFocus(true) ] }
                                          onKeyUp={ (e) => [ setEmailFocus(true), setEmailLength(e.target.value.length) ] }
                                          onBlur={ (e) => [ setEmailFocus(false)] }
                                          aria-invalid={ !validEmail ? "false" : "true" }
                                          aria-describedby="uidnotes"
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
                                        <FontAwesomeIcon icon={ faInfoCircle } style={{ marginRight : 15, color : "yellow" }}/>
                                        <span class="text-white">Provide a valid email. Email can only contain "UnderScore( _ ), Numbers, Alphabets"</span>
                                  </p>  
                                </div>                       
                        </div>
                        <div class="col-sm-6 mb-3 text-center text-white">
                            <div class="input-group">
                                {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" 
                                        aria-describedby="basic-addon2"/> */}
                                  <input type="text" id="phone" name="phone" class="form-control borderh" 
                                          placeholder="Enter Phone Number" style={{ padding : 30 }}
                                          autoComplete="off" required 
                                          onChange={ (e) => setPhone(e.target.value) }
                                          onFocus={ (e) => [ setPhoneFocus(true) ] }
                                          onKeyUp={ (e) => [ setPhoneFocus(true), setPhoneLength(e.target.value.length) ] }
                                          onBlur={ (e) => [ setPhoneFocus(false)] }
                                          aria-invalid={ !validPhone ? "false" : "true" }
                                          aria-describedby="passwordnotes"
                                          />
                                    <span class="input-group-text" id="basic-addon2" style={{ borderRadius : 0, paddingRight : 20 }}>                                
                                      <span className={ phoneLength <= 0 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faInfoCircle } style={{ color : "gray", fontSize : 26 }}/>
                                      </span>                                
                                      <span className={ ((phoneLength >= 3 && validPhone) || (!phoneFocus && validPhone)) && phoneLength >= 3 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faCheck } style={{ color : "green", fontSize : 26 }}/>
                                      </span>
                                      <span className={ ((phoneLength >= 1 && !validPhone) || ((phoneLength < 3 && phoneLength > 0) && !validPhone)) ? "invalid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faTimes } style={{ color : "red", fontSize : 26 }}/>
                                      </span>
                                    </span>
                            </div> 
                               <div class="row" className={ phone === '' ? 'hide' : '' } style={{ marginTop : 10 }}>
                                  <p id="phonenotes" className={ ((phoneFocus && !validPhone) || (phoneLength < 3 && !validPhone)) || ( phone && !validPhone) ? "instructions" : "hide" }>
                                        <FontAwesomeIcon icon={ faInfoCircle } style={{ marginRight : 15, color : "yellow" }}/>
                                        <span class="text-white">Provide a valid phone number. Phone number can only contain "numbers and plus (+) sign"</span>
                                  </p>  
                                </div>                      
                        </div>
                      </div>
                      {/* third row */}
                      <div class="row form-group text-center">
                        <div class="col-sm-6 mb-3 text-center text-white">
                            <div class="input-group">
                                {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" 
                                        aria-describedby="basic-addon2"/> */}
                                  <input type="password" id="password" name="password" class="form-control borderh" 
                                          placeholder="Enter Password" style={{ padding : 30 }}
                                          autoComplete="off" required 
                                          onChange={ (e) => setPassword(e.target.value) }
                                          onFocus={ (e) => [ setPasswordFocus(true) ] }
                                          onKeyUp={ (e) => [ setPasswordFocus(true), setPasswordLength(e.target.value.length) ] }
                                          onBlur={ (e) => [ setPasswordFocus(false)] }
                                          aria-invalid={ !validPassword ? "false" : "true" }
                                          aria-describedby="phonenotes"
                                          />
                                    <span class="input-group-text" id="basic-addon2" style={{ borderRadius : 0, paddingRight : 20 }}>                                
                                      <span className={ passwordLength <= 0 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faInfoCircle } style={{ color : "gray", fontSize : 26 }}/>
                                      </span>                                
                                      <span className={ ((passwordLength >= 3 && validPassword) || (!passwordFocus && validPassword)) && passwordLength >= 3 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faCheck } style={{ color : "green", fontSize : 26 }}/>
                                      </span>
                                      <span className={ ((passwordLength >= 1 && !validPassword) || ((passwordLength < 3 && passwordLength > 0) && !validPassword)) ? "invalid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faTimes } style={{ color : "red", fontSize : 26 }}/>
                                      </span>
                                    </span>
                            </div> 
                               <div class="row" className={ password === '' ? 'hide' : '' } style={{ marginTop : 10 }}>
                                  <p id="passwordnotes" className={ ((passwordFocus && !validPassword) || (passwordLength < 3 && !validPassword)) || ( password && !validPassword) ? "instructions" : "hide" }>
                                        <FontAwesomeIcon icon={ faInfoCircle } style={{ marginRight : 15, color : "yellow" }}/>
                                        <span class="text-white">
                                          8 to 24 characters
                                          Must include uppercase and lowercase, a number and a special character
                                          Allowed special characters :
                                          <span aria-label="exclamation mark"> !</span>
                                          <span aria-label="at symbol">@</span>
                                          <span aria-label="hash tag">#</span>
                                          <span aria-label="dollar sign">$</span>
                                          <span aria-label="percent">%</span>
                                        </span>
                                  </p>  
                                </div>                      
                        </div>
                        <div class="col-sm-6 mb-3 text-center text-white">
                            <div class="input-group">
                                {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" 
                                        aria-describedby="basic-addon2"/> */}
                                  <input type="password" id="cpassword" name="cpassword" class="form-control borderh" 
                                          placeholder="Confirm your password" style={{ padding : 30 }}
                                          autoComplete="off" required 
                                          onChange={ (e) => setConfirmPassword(e.target.value) }
                                          onFocus={ (e) => [ setConfirmPasswordFocus(true) ] }
                                          onKeyUp={ (e) => [ setConfirmPasswordFocus(true), setConfirmPasswordLength(e.target.value.length) ] }
                                          onBlur={ (e) => [ setConfirmPasswordFocus(false)] }
                                          aria-invalid={ !validConfirmPassword ? "false" : "true" }
                                          aria-describedby="confirmpasswordnotes"
                                          />
                                    <span class="input-group-text" id="basic-addon2" style={{ borderRadius : 0, paddingRight : 20 }}>                                
                                      <span className={ confirmPasswordLength <= 0 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faInfoCircle } style={{ color : "gray", fontSize : 26 }}/>
                                      </span>                                
                                      <span className={ match && confirmPasswordLength > 0 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faCheck } style={{ color : "green", fontSize : 26 }}/>
                                      </span>
                                      <span className={ !match && confirmPasswordLength > 0 ? "invalid" : "hide" } style={{ marginLeft : 10 }}>
                                        <FontAwesomeIcon icon={ faTimes } style={{ color : "red", fontSize : 26 }}/>
                                      </span>
                                    </span>
                            </div> 
                            <div class="row" className={ confirmPassword === '' ? 'hide' : '' } style={{ marginTop : 10 }}>
                                <p className={ match ? 'hide' : '' }>
                                  <FontAwesomeIcon icon={ faInfoCircle } style={{ marginRight : 15, color : "yellow" }}/>
                                  <span class="text-white">Password do not match</span>
                                 </p>  
                            </div>                      
                        </div>
                      </div>
                      {/* fourth row */}
                      {/* <div class="row">
                          <div class="col-sm-3"></div>
                          <div id="nomatch" class="col-sm-7 text-center text-danger"> {this.state.errors["nomatch"]}</div>
                      </div> */}
                      {/* fifth row */}
                      <div class="row">
                          <div class="col-sm-3"></div>
                          <div id="nomatch" class="col-sm-7 text-center text-danger">
                            {/* { this.state.isFirstnameValid ? null :  <span class="text-danger"> { this.firstnameErrorMessage }</span> } */}
                          </div>
                      </div>
                      {/* six row */}
                      <div class="row">
                        <div class="col-sm-5"></div>
                        {/* <div class="loadingio-eclipse col-sm-4">
                          <div class="ldio-rpinwye8j0b">
                            <div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div class="col-sm-2" style={{ padding : 20 }}>
                            <img src={ spinIt } style={{ width : 60, height : 60 }}/>
                        </div> */}

                      </div>
                      {/* seven row */}
                      <div class="row form-group">
                        <div class="col-12">
                          <button type="submit" class="btn btn-primary py-3 col-12" disabled={ !credentials } onClick={register}>Register</button>
                          {/* <button type='submit' class='btn btn-primary col-md-offset-4 col-md-2' disabled>Signup</button> */}
                          {/* <button type="submit" id="submit-user" name="submit-user" class="form-control btn btn-primary py-3">Register<button/>                   */}
                        </div>
                      </div>
                      
                      <div class="row mt-4">
                        <div class="col-3">
                          <Link to="/login" class="text-white">Login</Link>
                        </div>
                        <div class="col-6"></div>
                        {/* <!-- /.col --> */}
                        <div class="col-3">
                          <Link to="/forgot" class="text-center text-white">I Forgot My Password</Link>
                        </div>
                        {/* <!-- /.col --> */}
                      </div>
                    {/* </form> */}
                </div>
                <div class="col">
                </div>
          </div>
        {/* <!-- /.register-box -->         */}
        </div>
        <div class="container py-5">
            <div class="row mb-5">
                <div class="col-sm-3"></div>
                <div class="col-sm-6 text-white text-center mb-5">Copyright @ <a class="text-white" href='www.bcodestech.com'>BcodesTechology</a></div>
                <div class="col-sm-3"></div>
            </div>
        </div>
      </section>

    )
 
}

export default Register
