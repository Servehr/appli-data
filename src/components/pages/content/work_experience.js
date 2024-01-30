import React from 'react'

function WorkExperience() {
  return (
    <div>
        {/* Add Work Experience */}
        <div class="modal fade px-5" id="workExperience">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">WORK EXPERIENCE</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="container">
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <span>Date Started</span>
                                        </div>    
                                        <div class="col-sm-8">
                                            <input type="date" id="start_date" name="start_date" class="form-control mb-2"/>
                                        </div> 
                                    </div>                                     
                                </div>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <span>Date Ended</span>
                                        </div>    
                                        <div class="col-sm-8">
                                            <input type="date" id="end_date" name="end_date" class="form-control mb-2"/>
                                        </div> 
                                    </div>                                     
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <input type="text" id="duration" name="duration" class="form-control mb-3" placeholder="Enter Duration"/>                                        
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" id="company" name="company" class="form-control mb-2" placeholder="Enter Company"/>                                          
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <input type="text" id="business_activity" name="business_activity" class="form-control mb-2" placeholder="Enter Business Activity"/>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" id="job_location" name="job_location" class="form-control mb-2" placeholder="Enter Job Location"/>                                        
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <input type="text" id="job_title" name="job_title" class="form-control mb-2" placeholder="Enter Job Title"/>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" id="reporting_to" name="reporting_to" class="form-control mb-2" placeholder="Enter Whom you report to"/>                                 
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-12">
                                    <input type="text" id="status" name="status" class="form-control mb-2" placeholder="Enter Status"/>  
                                </div>
                            </div>
                        </div>
                        <div class="row form-group mt-2 mb-4 mx-1">
                            <div class="col-sm-12">
                                <textarea class="form-control" id="tasks" name="tasks">Enter Address</textarea>
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
            {/* Edit WORK EXPERIENCE */}            
            <div class="modal fade" id="editWorkExperience">
                <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title mx-4">WORK EXPERIENCE</h4>
                    </div>
                    <div class="modal-body">
                        <form class="mx-3">
                            <div class="container">
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="start_date">Date Started</label>
                                        <p>2202-10-25</p> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="end_date">Date Ended</label>
                                        <p>2022-01-28</p>
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="duration">Duration</label>
                                        <p>7 Months</p> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="company">Company</label>
                                        <p>ICS OutSourcing</p>
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="business_activity">Business Activity</label>
                                        <p>Financing</p> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="job_location">Job Location</label>
                                        <p>Port-Harcourt</p>
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="job_title">Job Title</label>
                                        <p>Accountant</p> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="reporting_to">Reporting To</label>
                                        <p>Manager</p>
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="status">Status</label>
                                        <p>Yes</p> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="address">Address</label>
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
            {/* VIEW WORK EXPERIENCE */} 
            <div class="modal fade px-5" id="viewWorkExperience">
                <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">EDIT : WORK EXPERIENCE</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="container">
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <span>Date Started</span>
                                            </div>    
                                            <div class="col-sm-8">
                                                <input type="date" id="start_date" name="start_date" class="form-control mb-2"/>
                                            </div> 
                                        </div>                                     
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <span>Date Ended</span>
                                            </div>    
                                            <div class="col-sm-8">
                                                <input type="date" id="end_date" name="end_date" class="form-control mb-2"/>
                                            </div> 
                                        </div>                                     
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <input type="text" id="duration" name="duration" class="form-control mb-3" placeholder="Enter Duration"/>                                        
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" id="company" name="company" class="form-control mb-2" placeholder="Enter Company"/>                                          
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <input type="text" id="business_activity" name="business_activity" class="form-control mb-2" placeholder="Enter Business Activity"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" id="job_location" name="job_location" class="form-control mb-2" placeholder="Enter Job Location"/>                                        
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <input type="text" id="job_title" name="job_title" class="form-control mb-2" placeholder="Enter Job Title"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" id="reporting_to" name="reporting_to" class="form-control mb-2" placeholder="Enter Whom you report to"/>                                 
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-12">
                                        <input type="text" id="status" name="status" class="form-control mb-2" placeholder="Enter Status"/>  
                                    </div>
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-4 mx-1">
                                <div class="col-sm-12">
                                    <textarea class="form-control" id="tasks" name="tasks">Enter Address</textarea>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">UPDATE</button>
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

export default WorkExperience
