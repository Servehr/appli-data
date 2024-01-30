import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from '../components/pages/content/content'
import Dashboard from '../components/pages/admin/dashboard'

const Main = () => {
  
    return ( 
        <div>
            {/* <!-- Main content --> */}
            <Content/>
            {/* <!-- /.content --> */}

            {/* <!-- Main content --> */}
            {/* <Dashboard/> */}
            {/* <!-- /.content --> */}
        </div>
    )
  
}

export default Main
