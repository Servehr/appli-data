import React from 'react'

function Header() 
{
  return (
    <div>         
        {/* Header Starts Here  */}
        {/* <!-- Navbar --> */}
        <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div class="container">
            <a href="../../index3.html" class="navbar-brand px-5">
            <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"/>
            <span class="brand-text font-weight-light"><b>APPLI-DATA</b></span>
            </a>
            
            <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse order-3" id="navbarCollapse">
            {/* <!-- Left navbar links --> */}  

            <div class="container">
                <ul class="navbar-nav col-sm-12">
                    <li class="nav-item col-sm-10">
                    </li>
                    <li class="nav-item col-sm-1 mt-2">
                        <a href='/' data-toggle="modal" data-target="#changePassword" data-whatever="@mdo">
                            <h4><i class="fa-solid fa-key mt-2"></i></h4>
                        </a>
                    </li>
                    <li class="nav-item col-sm-1">
                        <a href="https://www.google.com" class="nav-link">
                            <h4><i class="fa-solid fa-power-off text-red mt-2"></i></h4>
                        </a>
                    </li>
                    <li class="col-sm-1"></li>
                </ul>
            </div>

            </div>
        </div>
        </nav>
        {/* <!-- /.navbar --> */}    
    </div>
  )
}

export default Header
