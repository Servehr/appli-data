import React from 'react'

function Passport() {
  return (
    <div class="modal fade" id="passport" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">PASSPORT PHOTOGRAPH</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    <form>
                        <div class="form-group mb-5">
                            <div class="row">
                                <div class="col-sm-4"></div>
                                <div class="col-sm-4 thumbnail">
                                    <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"/>
                                </div>
                                <div class="col-sm-4"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="file" id="photograph" name="photograph" class="form-control mb-4   "/>
                        </div>
                        {/* <div class="form-group">
                            <label for="message-text" class="col-form-label">Message:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div> */}
                        <div class="container mb-4">
                            <div class="row mx-1">
                                <div class="col-sm-3">
                                    <button type="button" class="btn btn-primary col-sm-12">UPLOAD</button>
                                </div>
                                <div class="col-sm-6 mb-3 mt-3"></div>
                                <div class="col-sm-3">
                                    <button type="button" class="btn btn-danger col-sm-12" data-dismiss="modal">CANCEL</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Passport
