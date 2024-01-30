import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Academic() {

//   const academik = useSelector((state) => state.acaddemic.username);
//   const dispatch = useDispatch();
//   console.log('ACA', academik);

  return (
    <div>
        {/* Add Work Experience */}
        <div class="modal fade" id="academic">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">ACADEMIC QUALIFICATION</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="container">
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-12">
                                    <select id="levels" name="levels" class="form-control mb-2">
                                        <option value="-1">-  Select Academic Level -</option>
                                        <option value="primary">Primary</option>
                                        <option value="secondary">Secondary</option>
                                        <option value="tertiary">Tertiary</option>
                                        <option value="degree">Degree</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <span>Start Year</span>
                                        </div>    
                                        <div class="col-sm-9">
                                            <input type="date" id="start_date" name="start_date" class="form-control mb-2"/> 
                                        </div> 
                                    </div>                                     
                                </div>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <span>Graduation Year</span>
                                        </div>    
                                        <div class="col-sm-7">
                                            <input type="date" id="graduation_date" name="graduation_date" class="form-control mb-2"/>  
                                        </div> 
                                    </div>                                      
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-6">
                                    <input type="text" id="grade" name="grade" class="form-control mb-2" placeholder="Enter Grade"/>
                                </div>
                                <div class="col-sm-6">
                                <input type="text" id="institution" name="institution" class="form-control mb-2" placeholder="Enter Institution"/>
                                </div>
                            </div>
                            <div class="row form-group mt-2 mb-2">
                                <div class="col-sm-12">
                                <input type="text" id="qualification" name="qualification" class="form-control mb-2" placeholder="Enter Qualification"/>                                       
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
            {/* View Academic */}            
            <div class="modal fade" id="viewAcademic">
                <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title mx-4">ACADEMIC QUALIFICATION</h4>
                    </div>
                    <div class="modal-body">
                        <form class="mx-3">
                            <div class="container">
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="academic">Academic Level</label>
                                        <p>BCodesTech</p> 
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="start_year">Start Year</label>
                                        <p>Male</p> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="graduation_year">Graduation Year</label>
                                        <p>2022-10-25</p>
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="grade">Grade</label>
                                        <p>Ibadan</p> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="institution">Institution</label>
                                        <p>07089361659</p>
                                    </div>
                                </div>
                                <div class="row form-group mt-2 mb-2">
                                    <div class="col-sm-6">
                                        <label for="academic">Qualification or Course of Study</label>
                                        <p>BCodesTech</p> 
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
            {/* edit Academic */}            
            <div class="modal fade" id="editAcademic">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">EDIT : ACADEMIC QUALIFICATION</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="container">
                                    <div class="row form-group mt-2 mb-2">
                                        <div class="col-sm-12">
                                            <select id="levels" name="levels" class="form-control mb-2">
                                                <option value="-1">-  Select Data To Edit -</option>
                                                <option value="primary">Primary</option>
                                                <option value="secondary">Secondary</option>
                                                <option value="tertiary">Tertiary</option>
                                                <option value="degree">Degree</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row form-group mt-2 mb-2">
                                        <div class="col-sm-12">
                                            <select id="levels" name="levels" class="form-control mb-2">
                                                <option value="-1">-  Select Academic Level -</option>
                                                <option value="primary">Primary</option>
                                                <option value="secondary">Secondary</option>
                                                <option value="tertiary">Tertiary</option>
                                                <option value="degree">Degree</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row form-group mt-2 mb-2">
                                        <div class="col-sm-6">
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <span>Start Year</span>
                                                </div>    
                                                <div class="col-sm-9">
                                                    <input type="date" id="start_date" name="start_date" class="form-control mb-2"/> 
                                                </div> 
                                            </div>                                     
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="row">
                                                <div class="col-sm-5">
                                                    <span>Graduation Year</span>
                                                </div>    
                                                <div class="col-sm-7">
                                                    <input type="date" id="graduation_date" name="graduation_date" class="form-control mb-2"/>  
                                                </div> 
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div class="row form-group mt-2 mb-2">
                                        <div class="col-sm-6">
                                            <input type="text" id="grade" name="grade" class="form-control mb-2" placeholder="Enter Grade"/>
                                        </div>
                                        <div class="col-sm-6">
                                        <input type="text" id="institution" name="institution" class="form-control mb-2" placeholder="Enter Institution"/>
                                        </div>
                                    </div>
                                    <div class="row form-group mt-2 mb-2">
                                        <div class="col-sm-12">
                                        <input type="text" id="qualification" name="qualification" class="form-control mb-2" placeholder="Enter Qualification"/>                                       
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

export default Academic
