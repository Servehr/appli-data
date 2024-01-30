import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Academic from '../../components/pages/content/academic'
import BioData from '../../components/pages/content/bio_data'
import NYSC from '../../components/pages/content/nysc'
import Passport from '../../components/pages/content/passport'
import Preview from '../../components/pages/content/preview'
import Referee from '../../components/pages/content/referee'
import WorkBeforeNysc from '../../components/pages/content/work_before_nysc.js'
import WorkExperience from '../../components/pages/content/work_experience'
import Footer from '../../components/pages/footer/footer'
import ChangePassword from '../../components/pages/header/change_password'
import Header from '../../components/pages/header/header'
import Headings from '../../components/pages/header/heading'
import Main from '../main'

class Home extends Component {
  render() {    

    return (
            <div>
                <div class="wrapper">
                    {/* Header Starts Here  */}
                    <Header/>
                    {/* <!-- Content Wrapper. Contains page content --> */}
                    <div class="content-wrapper">
                        {/* <!-- Content Header (Page header) --> */}
                        <Headings/>
                        {/* <!-- /.content-header --> */}
                        {/* Header Ends Here  */}

                        <Main/>
                    </div>
                    {/* <!-- /.content-wrapper --> */}
                    {/* <!-- /.control-sidebar --> */}

                    {/* ************************************************************************************************************************************ */}

                    {/* Change Password Starts  */}
                    <ChangePassword/>
                    {/* Change Password Ends */}

                    {/* Passport Photograph Starts */}
                    <Passport/>
                    {/* Passport Photograph Ends */}  

                    {/* ************************************************************************************************************************************ */}          

                    {/* Bio-Data Starts */}
                    <BioData/>
                    {/* Bio-Data Ends */}        

                    {/* ************************************************************************************************************************************ */}

                    {/* Academic Starts */}
                    <Academic/>
                    {/* Academic Ends */}

                    {/* ************************************************************************************************************************************ */}

                    {/* Work Experience Before Nysc Starts */}
                    <WorkBeforeNysc/>
                    {/* Edit Experience Before Nysc Ends */}
                    
                    {/* ************************************************************************************************************************************ */}            

                    {/* NYSC WORK Starts */}
                    <NYSC/>
                    {/* NYSC WORK ENDS  */}

                    {/* ************************************************************************************************************************************ */}          

                    {/* WORK EXPERIENCE STARTS */}
                    <WorkExperience/>
                    {/* WORK EXPERIENCE ENDS  */}

                    {/* ************************************************************************************************************************************ */}

                    {/* Referee Starts */}
                    <Referee/>
                    {/* Referee Ends  */}

                    {/* ************************************************************************************************************************************ */}
                    
                    {/* DATA PREVIEW STARTS */}
                    <Preview/>
                    {/* DATA PREVIEW ENDS  */}

                    {/* ************************************************************************************************************************************ */}

                    {/* <!-- Footer Starts --> */}
                    <Footer/>
                    {/* Footer Ends  */}
            
                </div>
            </div>
        )
    }
}

export default Home
