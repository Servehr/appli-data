import React from 'react'

function ChangePassword() {
  return (
    <div class="modal fade" id="changePassword" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content px-4">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">CHANGE PASSWORD</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Current Password:</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">New Password:</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Confirm New Password:</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        {/* <div class="form-group">
                            <label for="message-text" class="col-form-label">Message:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div> */}
                    </form>
                </div>
                <div class="container mb-4">
                    <div class="row mx-1">
                        <div class="col-sm-3">
                            <button type="button" class="btn btn-primary col-sm-12">CHANGE</button>
                        </div>
                        <div class="col-sm-6 mb-3 mt-3"></div>
                        <div class="col-sm-3">
                            <button type="button" class="btn btn-danger col-sm-12" data-dismiss="modal">CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword
