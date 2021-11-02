import react, { Component } from 'react'
import './signin.css'
import { Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



class Signin1 extends Component{
    render(){
        return(
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4">
                            <center>
                            <div>
                                <img src="amazon2.jpg" id="img"></img>
                            </div>
                            <br>
                            </br>
                            <div>
                            <Card id="card">
                                <Card.Body>
                                    <h2 id="h2">Sign In</h2>
                                    <p id="size">Email or mobile phone number</p>
                                    <input type="text" id="length"></input>
                                    <br></br>
                                    <Button id="button9">Continue</Button>
                                    <p id="size2">By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a></p>
                                    <a href="#" id="left">Need help</a>
                                </Card.Body>
                            </Card>
                            </div>
                            <br></br>
                            <p id="new">---------------New to Amazonn?---------------</p>
                            <Link to='/sandp'><button id="create">Create your account</button></Link>                            
                            </center>                            
                        </div>
                        <div class="col-4"></div>
                    </div>
                </div>


            </div>
        )

    }
}
export default Signin1;