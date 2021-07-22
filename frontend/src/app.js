import React from 'react';
function App(){

    return(

    <>  
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <div className = "container">
                <a class="navbar-brand" href="#">Admin</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sign UP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>

                </ul>
             </div>
        </div>
    </nav>
    </>
    )
}

export default App;