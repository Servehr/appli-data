import React from 'react'

function Referee() {
  return (
    <div>
        {/* Add Referee  */}
        <div class="modal fade" id="referee">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title mx-3">REFEREE</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="container">
                            <div class="mx-3">
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">    
                                        <input type="text" id="name" name="name" class="form-control mb-2" placeholder="Enter Fullname"/> 
                                    </div>
                                    <div class="col-sm-6"> 
                                        <input type="text" id="phone_number" name="phone_number" class="form-control mb-2" placeholder="Enter Phone Number"/>  
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-12">
                                        <input type="text" id="job" name="job" class="form-control mb-2" placeholder="Enter Referee Job"/>
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-12">
                                        <textarea type="text" id="address" name="address" class="form-control mb-2">Enter Address</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- /.modal-content --> */}
            </div>
            {/* <!-- /.modal-dialog --> */}
        </div>
        {/* Add Experience Before Nysc Ends */}  

        {/* View Work Experience Before NYSC */}            
        <div class="modal fade" id="viewReferee">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title mx-4">WORK EXPERIENCE BEFORE NYSC</h4>
                </div>
                <div class="modal-body">
                    <form class="mx-3">
                        <div class="container">
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-12">
                                    <label for="name">Fullname</label>
                                    <p>2022-11-12</p> 
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <label for="phone_number">Phone Number</label>
                                    <p>09098343233</p> 
                                </div>
                                <div class="col-sm-6">
                                    <label for="job">Job</label>
                                    <p>ICS Farmer</p>
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-12">
                                    <label for="task_and_achievement">Address</label>
                                    <p>10 Olusoji Street, Obanikoro, Ilupeju, Lagos-State</p> 
                                </div>
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
        {/* View Experience Before Nysc Ends */}  

        {/* Edit Work Referee */}            
        <div class="modal fade" id="editReferee">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title mx-3">EDIT REFEREE</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="container">
                            <div class="mx-3">
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">    
                                        <input type="text" id="name" name="name" class="form-control mb-2" placeholder="Enter Fullname"/> 
                                    </div>
                                    <div class="col-sm-6"> 
                                        <input type="text" id="phone_number" name="phone_number" class="form-control mb-2" placeholder="Enter Phone Number"/>  
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-12">
                                        <input type="text" id="job" name="job" class="form-control mb-2" placeholder="Enter Referee Job"/>
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-12">
                                        <textarea type="text" id="address" name="address" class="form-control mb-2">Enter Address</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- /.modal-content --> */}
            </div>
            {/* <!-- /.modal-dialog --> */}
        </div>
        {/* Edit Experience Before Nysc Ends */}      
    </div>
  )
}

export default Referee
