import React, { Component } from 'react'
import axios from 'axios';

class Multiple extends Component {
    render() {

      const postFiles = async (formData) => 
      {
          try 
          {
              const uploadFiles = await axios.post('https://icsrecruitment.bcodestech.com/api/mail_trail/trials', formData);
              console.log(uploadFiles);
          } catch (error) {
              console.log(error);
          }
      }

      const postMultiple = (allFiles) => 
      {
            // console.log(allFiles);
            const formData = new FormData();
            for (let index = 0; index < allFiles.length; index++) 
            {
                const eachFile = allFiles[index];
                formData.append('medical_mail_trial', eachFile);
            }
            formData.append('user_id', '6329c25685f3be3b6b6386b2');
            postFiles(formData);
            // console.log(formData);
      }

      return (
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-6">          
              <div class="login-box">
                <div class="login-logo">
                  <a href="https:/www.google.com"><b>UPLOAD FORMS</b></a><br/>
                </div>
                {/* <!-- /.login-logo --> */}
                <div class="card py-4 px-2 mt-4">
                  <div class="card-body login-card-body">
              
                    <form action="https:/www.google.com" method="post">
                      <div class="input-group mb-3">
                        <input type="file" id="medical_mail_trial" name="medical_mail_trial" 
                          onChange={ (event) => {
                              console.log("Before");
                              postMultiple(event.target.files);
                              console.log("After");
                          } } 
                          class="form-control" multiple />
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
                          <button type="submit" class="btn btn-primary btn-block py-2">UPLOAD FILES</button>
                        </div>
                        {/* <!-- /.col --> */}
                      </div>
                    </form>
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

export default Multiple
