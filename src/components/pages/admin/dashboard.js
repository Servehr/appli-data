import React from 'react'
import View from './view'

const Dashboard = () =>
{
  return (
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box">
                        <div class="info-box-content bg-info elevation-1">
                            <span class="info-box-text text-center mt-3 text-bold">DASHBOARD</span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box">
                        <div class="info-box-content bg-info elevation-1">
                            <span class="info-box-text text-center mt-3 text-bold">ADMIN</span>
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
                        <div class="info-box-content bg-info elevation-1">
                            <span class="info-box-text text-center mt-3 text-bold">RESUME</span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-6 col-sm-6 col-md-3">
                    <div class="info-box">
                        <div class="info-box-content bg-info elevation-1">
                            <span class="info-box-text text-center mt-3 text-bold">ACTIVITIES</span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}

            <View/>
            {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
    </div>
  )
}

export default Dashboard
