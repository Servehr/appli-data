import React from 'react'

function WorkBeforeNysc() {
  return (
    <div>
        {/* Add Work Experience Before NYSC  */}
        <div class="modal fade" id="workBeforeNysc">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">WORK EXPERIENCE BEFORE NYSC</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="container">
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <span>Start Date</span>
                                        </div>    
                                        <div class="col-sm-9">
                                            <input type="date" id="start_date" name="start_date" class="form-control mb-2"/> 
                                        </div> 
                                    </div>                                     
                                </div>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <span>End Date</span>
                                        </div>    
                                        <div class="col-sm-7">
                                            <input type="date" id="end_date" name="end_date" class="form-control mb-2"/>  
                                        </div> 
                                    </div>                                      
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <input type="text" id="type_of_job" name="type_of_job" class="form-control mb-2" placeholder="Enter Type of Job"/>
                                </div>
                                <div class="col-sm-6">
                                <input type="text" id="company" name="company" class="form-control mb-2" placeholder="Enter Company"/>
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-12">
                                <input type="text" id="tasks" name="tasks" class="form-control mb-2" placeholder="Enter Tasks and Achievment"/>                                       
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- /.modal-content --> */}
            </div>
            {/* <!-- /.modal-dialog --> */}
        </div>
            {/* View Work Experience Before NYSC */}            
            <div class="modal fade" id="viewWorkBeforeNysc">
                <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title mx-4">WORK EXPERIENCE BEFORE NYSC</h4>
                    </div>
                    <div class="modal-body">
                        <form class="mx-3">
                            <div class="container">
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
            {/* Edit Work Experience Before NYSC */}            
            <div class="modal fade" id="editWorkBeforeNysc">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title">EDIT : WORK EXPERIENCE BEFORE NYSC</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="container">
                                    <div class="row form-group mt-2 mb-2">
                                        <div class="col-sm-6">
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <span>Start Date</span>
                                                </div>    
                                                <div class="col-sm-9">
                                                    <input type="date" id="start_date" name="start_date" class="form-control mb-2"/> 
                                                </div> 
                                            </div>                                     
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="row">
                                                <div class="col-sm-5">
                                                    <span>End Date</span>
                                                </div>    
                                                <div class="col-sm-7">
                                                    <input type="date" id="end_date" name="end_date" class="form-control mb-2"/>  
                                                </div> 
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div class="row form-group mt-2 mb-2">
                                        <div class="col-sm-6">
                                            <input type="text" id="type_of_job" name="type_of_job" class="form-control mb-2" placeholder="Enter Type of Job"/>
                                        </div>
                                        <div class="col-sm-6">
                                        <input type="text" id="company" name="company" class="form-control mb-2" placeholder="Enter Company"/>
                                        </div>
                                    </div>
                                    <div class="row form-group mt-2 mb-2">
                                        <div class="col-sm-12">
                                        <input type="text" id="tasks" name="tasks" class="form-control mb-2" placeholder="Enter Tasks and Achievment"/>                                       
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Update</button>
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

export default WorkBeforeNysc
