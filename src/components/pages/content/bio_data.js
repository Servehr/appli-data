import React from 'react'

function BioData() {
  return (
    <div>
        {/* Add Bio-Data */}
        <div class="modal fade" id="bioData">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">BIO-DATA</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="container">
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <input type="text" id="lastname" name="lastname" class="form-control mb-3" placeholder="Enter Firstname"/>                                        
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" id="first_and_middle_name" name="first_and_middle_name" class="form-control mb-2" placeholder="Enter Firstname"/>                                          
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <select id="gender" name="gender" class="form-control mb-3">
                                        <option value="-1">Select Gender</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </select>
                                </div>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <span>Date of Birth</span>
                                        </div>    
                                        <div class="col-sm-8">
                                            <input type="date" id="date_of_birth" name="date_of_birth" class="form-control mb-2"/>
                                        </div> 
                                    </div>                                     
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <select id="state_of_origin" name="state_of_origin" class="form-control mb-3">
                                        <option value="-1">- Select Your State -</option>
                                        <option value="Lagos">Lagos</option>
                                        <option value="Abuja">Abuja</option>
                                    </select>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" id="phone_number" name="phone_number" class="form-control mb-2" placeholder="Enter Phone Number"/>                                        
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <select id="marital_status" name="marital_status" class="form-control mb-3">
                                        <option value="-1">- Select Marital Status -</option>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                        <option value="divorced">Divorced</option>
                                    </select>
                                </div>
                                <div class="col-sm-6">
                                    <select id="religion" name="religion" class="form-control mb-3">
                                        <option value="-1">- Select Religion -</option>
                                        <option value="christainity">Christainity</option>
                                        <option value="islam">Islam</option>
                                        <option value="others">Others</option>
                                    </select>                                    
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <input type="text" id="local_government_area" name="local_government_area" class="form-control mb-3" placeholder="Enter Local Government Area"/>                                       
                                </div>
                                <div class="col-sm-6">
                                    <input type="email" id="email_address" name="email_address" class="form-control mb-2" placeholder="Enter Email Address"/>  
                                </div>
                            </div>
                        </div>
                        <div class="row form-group mt-2 mb-4 mx-1">
                            <div class="col-sm-12">
                                <textarea class="form-control" id="resdential_address" name="resdential_address">Enter Residential Address</textarea>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">SAVE</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- /.modal-content --> */}
            </div>
            {/* <!-- /.modal-dialog --> */}
        </div>
            {/* view bio-data */}            
            <div class="modal fade" id="viewBioData">
                <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title mx-4">BIO-DATA</h4>
                    </div>
                    <div class="modal-body">
                        <form class="mx-3">
                            <div class="container">
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
                            <div class="row form-group mt-2 mb-4 mx-1">
                                <div class="col-sm-6">
                                    <label for="resdential_address">Residential Address</label>
                                    <p>No 10, Olusoji Street, Obanikoro, Ilupeju, Lagos</p>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-5"></div>
                                        <div class="col-sm-2">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>
                                        <div class="col-sm-5"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- /.modal-content --> */}
                </div>
                {/* <!-- /.modal-dialog --> */}
            </div>      
    </div>
  )
}

export default BioData
