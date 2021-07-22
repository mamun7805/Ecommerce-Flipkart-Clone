import React from 'react';
import Layout from '../../components/layout';


function Signin(){

    return(
        <>
            <Layout>
                <div className = "jumbotron">
                    <div className = "row">
                        <div className = "col-md-4"></div>
                        
                        <div className = "col-md-4">
                            <div className = "container">
                                <form>
                                    <div>
                                        <label>Email</label>
                                        <input 
                                            type = "text"
                                            className = "form-control"
                                        />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input 
                                            type = "text"
                                            className = "form-control"
                                        />
                                    </div>
                                    <hr/>

                                    <button className = "form-control btn btn-primary "> Sign in </button>

                                    
                                </form>


                            </div>

                        </div>



                        <div className = "col-md-4"></div>
                    </div>
        
                </div>
            </Layout>
        </>
    )
}

export default Signin;