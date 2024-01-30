import React from 'react'

function Preview() {
  return (            
        <div class="modal fade" id="preview">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title mx-4">PREVIEW</h4>
                    </div>
                    <div class="modal-body">
                        {/* PASSPORT PHOTOGRAPH */}
                        <div class="form-group mb-5">
                            <div class="row mb-5">
                                <div class="col-sm-5"></div>
                                <div class="col-sm-3 thumbnail">
                                    <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"/>
                                </div>
                                <div class="col-sm-4"></div>
                            </div>
                        </div>
                        {/* BIO DATA  */} 
                        <div class="container mx-5">
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <label for="firstname">Firstname</label>
                                    <p>BCodesTech</p> 
                                </div>
                                <div class="col-sm-6">
                                    <label for="surname">Surname</label>
                                    <p>Technology</p>
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <label for="gender">Gender</label>
                                    <p>Male</p> 
                                </div>
                                <div class="col-sm-6">
                                    <label for="dob">Date of Birth</label>
                                    <p>2022-10-25</p>
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <label for="state_of_origin">State of Origin</label>
                                    <p>Ibadan</p> 
                                </div>
                                <div class="col-sm-6">
                                    <label for="phone_number">Phone Number</label>
                                    <p>07089361659</p>
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <label for="marital_status">Marital Status</label>
                                    <p>Married</p> 
                                </div>
                                <div class="col-sm-6">
                                    <label for="religion">Religion</label>
                                    <p>Islam</p>
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <label for="local_government_area">Local Government Area</label>
                                    <p>Akase</p> 
                                </div>
                                <div class="col-sm-6">
                                    <label for="email_address">Email Address</label>
                                    <p>hjimoh@bcodestech.com</p>
                                </div>
                            </div>
                        </div>
                        {/* ACADEMIC DETAILS */}
                        <div class="container mt-5">
                            <div class="row mx-3">
                                <p class="col-sm-12">ACADEMIC QUALIFICATIONS</p>
                                <table>
                                    <tr>
                                        <th>START YEAR</th>
                                        <th>GRADUATION YEAR</th>
                                        <th>LEVEL</th>
                                        <th>GRADE</th>
                                        <th>INSTITUTION</th>
                                        <th>QUALIFICATION</th>
                                    </tr>
                                    <tr>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                        <td>tables@mail.com</td>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                        <td>tables@mail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Lary</td>
                                        <td>Mak</td>
                                        <td>developer@mail.com</td>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                        <td>tables@mail.com</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        {/* WORK EXPERIENCE BEFORE NYSC */}
                        <div class="container mt-5">
                            <div class="row mx-3">
                                <p class="col-sm-12">WORK EXPERIENCE BEFORE NYSC</p>
                                <table>
                                    <tr>
                                        <th>START YEAR</th>
                                        <th>GRADUATION YEAR</th>
                                        <th>Type of Job</th>
                                        <th>Company</th>
                                        <th>Tasks</th>
                                    </tr>
                                    <tr>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                        <td>tables@mail.com</td>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                    </tr>
                                    <tr>
                                        <td>Lary</td>
                                        <td>Mak</td>
                                        <td>developer@mail.com</td>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        {/* NYSC WORKS */}                            
                        <div class="container mt-5 mx-3">
                                <p class="col-sm-12">NYSC WORK</p>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="start_date">Start Date</label>
                                        <p>2022-11-12</p> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="end_date">End Date</label>
                                        <p>2022-10-25</p>
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="type_of_job">Type of Job</label>
                                        <p>Farmer</p> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="company">Company</label>
                                        <p>ICS OutSourcing</p>
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="task_and_achievement">Task and Achievment</label>
                                        <p>Award Winning</p> 
                                    </div>
                                </div>
                        </div>
                        {/* WORK EXPERIENCE */}
                        <div class="container mt-5">
                            <div class="row mx-3">
                                <p class="col-sm-12">WORK EXPERIENCE</p>
                                <table>
                                    <tr>
                                        <th>START DATE</th>
                                        <th>END DATE</th>
                                        <th>COMPANY</th>
                                        <th>DURATION</th>
                                        <th>JOB TITLE</th>
                                        <th>JOB LOCATION</th>
                                    </tr>
                                    <tr>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                        <td>tables@mail.com</td>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                        <td>tables@mail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Lary</td>
                                        <td>Mak</td>
                                        <td>developer@mail.com</td>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                        <td>tables@mail.com</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        {/* REFEREE */}
                        <div class="container mt-5">
                            <div class="row mx-3">
                                <p class="col-sm-12">REFEREE</p>
                                <table>
                                    <tr>
                                        <th>FULLNAME</th>
                                        <th>PHONE NUMBER</th>
                                        <th>JOB</th>
                                        <th>ADDRESS</th>
                                    </tr>
                                    <tr>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                        <td>tables@mail.com</td>
                                        <td>Hillary</td>
                                    </tr>
                                    <tr>
                                        <td>Lary</td>
                                        <td>Mak</td>
                                        <td>developer@mail.com</td>
                                        <td>Hillary</td>
                                        <td>Nyakundi</td>
                                        <td>tables@mail.com</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /.modal-content --> */}
                </div>
                {/* <!-- /.modal-dialog --> */}
        </div>
  )
}

export default Preview
