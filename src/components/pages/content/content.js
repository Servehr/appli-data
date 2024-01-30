import React from 'react'
import '../../../index.css'
// import Loader from '../../images/Loading_icon.gif'

function Content() {
  return (
    <div class="content">
        <div class="container">
            
            <div class="px-3 py-3"></div>
            {/* <!-- Info boxes --> */}
            <div class="row">
                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box">
                        <a href='/' data-toggle="modal" data-target="#passport" data-whatever="@mdo" class="info-box-icon bg-info elevation-1">
                            <i class="fas fa-camera"></i>
                        </a>

                        <div class="info-box-content text-left">
                            <span class="info-box-text"><h6>PASSPORT</h6></span>
                            <div class="col-12 flex">
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#passport">
                                        <i class="fa fa-eye icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#passport">
                                        <i class="fa fa-edit icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#" class="text-danger">
                                        <i class="fa-sharp fa-solid fa-circle" style={{ fontSize: "11px" }} ></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box">
                        <a href='/' data-toggle="modal" data-target="#bioData" data-whatever="@mdo" class="info-box-icon bg-info elevation-1">
                            <i class="fa fa-address-book"></i>
                        </a>

                        <div class="info-box-content text-left">
                            <span class="info-box-text"><h6>BIO-DATA</h6></span>
                            <div class="col-12">
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#viewBioData">
                                        <i class="fa fa-eye icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#bioData">
                                        <i class="fa fa-edit icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#" class="text-danger">
                                        <i class="fa-sharp fa-solid fa-circle icon-color" style={{ fontSize: "11px" }} ></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}

                {/* <!-- fix for small devices only --> */}
                <div class="clearfix hidden-md-up"></div>

                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box">
                        <a href='/' data-toggle="modal" data-target="#academic" data-whatever="@mdo" class="info-box-icon bg-info elevation-1">
                            <i class="fas fa-university"></i>
                        </a>

                        <div class="info-box-content">
                            <span class="info-box-text"><h6>ACADEMIC</h6></span>
                            <div class="col-12">
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#viewAcademic">
                                        <i class="fa fa-eye icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#editAcademic">
                                        <i class="fa fa-edit icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#" class="text-danger">
                                        <i class="fa-sharp fa-solid fa-circle" style={{ fontSize: "11px" }} ></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box mb-3">
                        <a href='/' data-toggle="modal" data-target="#workBeforeNysc" data-whatever="@mdo" class="info-box-icon bg-info elevation-1">
                            <i class="fas fa-briefcase"></i>
                        </a>

                        <div class="info-box-content">
                            <span class="info-box-text"><h6>WORK B4 NYSC</h6></span>
                            <div class="col-12">
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#viewWorkBeforeNysc">
                                        <i class="fa fa-eye icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#editWorkBeforeNysc">
                                        <i class="fa fa-edit icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#" class="text-danger">
                                        <i class="fa-sharp fa-solid fa-circle" style={{ fontSize: "11px" }} ></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <span col="col-12">EXPERIENCE BEFORE NYSC</span> */}
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
            <div class="px-3 py-3"></div>
            {/* <!-- Info boxes --> */}
            <div class="row">
                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box">
                        <a href='/' data-toggle="modal" data-target="#nyscWork" data-whatever="@mdo" class="info-box-icon bg-info elevation-1">
                            <i class="fas fa-tasks"></i>
                        </a>

                        <div class="info-box-content">
                            <span class="info-box-text"><h6>NYSC WORK</h6></span>
                            <div class="col-12">
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#viewNyscWork" class="pull-left">
                                        <i class="fa fa-eye icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#editNyscWork">
                                        <i class="fa fa-edit icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#" class="text-danger">
                                        <i class="fa-sharp fa-solid fa-circle" style={{ fontSize: "11px" }} ></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box">
                        <a href='/' data-toggle="modal" data-target="#workExperience" data-whatever="@mdo" class="info-box-icon bg-info elevation-1">
                            <i class="fas fa-suitcase"></i>
                        </a>

                        <div class="info-box-content">
                            <span class="info-box-text"><h6>WORK EXP</h6></span>
                            <div class="col-12">
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#editWorkExperience">
                                        <i class="fa fa-eye icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#viewWorkExperience">
                                        <i class="fa fa-edit icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#" class="text-danger">
                                        <i class="fa-sharp fa-solid fa-circle" style={{ fontSize: "11px" }} ></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}

                {/* <!-- fix for small devices only --> */}
                <div class="clearfix hidden-md-up"></div>

                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box">
                        <a href='/' data-toggle="modal" data-target="#referee" data-whatever="@mdo" class="info-box-icon bg-info elevation-1">
                            <i class="fas fa-users"></i>
                        </a>

                        <div class="info-box-content">
                            <span class="info-box-text"><h6>REFEREE</h6></span>
                            <div class="col-12">
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#viewReferee">
                                        <i class="fa fa-eye icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#viewReferee">
                                        <i class="fa fa-edit icon-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                                <span class="col-4">
                                    <a href='/' data-toggle="modal" data-target="#" class="text-danger">
                                        <i class="fa-sharp fa-solid fa-circle" style={{ fontSize: "11px" }} ></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box mb-3">
                        <a href='/' data-toggle="modal" data-target="#preview" class="info-box-icon bg-warning elevation-1">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>

                    <div class="info-box-content">
                        <span class="info-box-text"><h6>PREVIEW</h6></span>
                        <div class="col-12">
                            <span class="col-4">
                                <a href='/' data-toggle="modal">
                                    <i class="fa fa-print icon-color" aria-hidden="true"></i>
                                </a>
                            </span>
                            <span class="col-4">
                                <a href='/' data-toggle="modal">
                                    <i class="fa fa-download icon-color" aria-hidden="true"></i>
                                </a>
                            </span>
                            <span class="col-4">
                                <a href='/' data-toggle="modal" data-target="#" class="text-danger">
                                    <i class="fa-sharp fa-solid fa-circle" style={{ fontSize: "11px" }} ></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
            {/* <!-- Info boxes --> */}
            <div class="row mt-5 mb-5">
                <div class="col-4 col-sm-4 col-md-5">
                    {/* <Navbar/> */}
                </div>
                <div class="col-4 col-sm-4 col-md-6">
                    <h1>
                        <a href='/'>
                                <i class="fa-solid fa-power-off py-5 px-5 text-red"></i>
                        </a>
                    </h1>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-4 col-sm-4 col-md-4">
                </div>
                {/* <!-- fix for small devices only --> */}
            </div>
            {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
    </div>
  )
}

export default Content
