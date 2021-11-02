import react, { Component } from 'react'
import { Button, Card} from 'react-bootstrap';
import './create.css'
import axios from "axios";


class Create extends Component{
    constructor(props){

    
        super()
            this.state={
                Yourname:"",
                Mobilenumber:"",
                Emailoptional:"",
                Password:""

            }
        
    }

    sandeep(){
        console.log("successfully logedin")
        let sd=JSON.stringify(this.state)
        console.log(this.state)
        let pobj=axios.put("https://jsonplaceholder.typicode.com/posts/1",sd)
        pobj.then((resp)=>{
            console.log(resp.data)
        })
        // this.props.history.push("/sandeep")
    }

    inchange1=(event)=>{
        this.setState({
            Yourname:event.target.value,
        })
    }
    inchange2=(event)=>{
        this.setState({
            Mobilenumber:event.target.value,
        })
    }
    inchange3=(event)=>{
        this.setState({
            Emailoptional:event.target.value,
        })
    }
    inchange4=(event)=>{
        this.setState({
            Password:event.target.value,
        })
    }





    render(){
        return(
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-4"></div>
                        
                        <div class="col-4">    
                        <center>                  
                        <img src="amazon2.jpg" id="img"></img>
                        <br>
                        </br>
                        <br></br>
                        <Card id="width">
                            <p id="account">Create Account</p>
                            <p id="your">Yourname</p>
                            <input type="text" id="text2" value={this.state.Yourname} onChange={this.inchange1} required></input>
                            <p id="Mobile">Mobilenumber</p>
                            <input type="text" id="text2" value={this.state.Mobilenumber} onChange={this.inchange2}></input>
                            <p id="Mobile">Emailoptional</p>
                            <input type="text" id="text2" value={this.state.Emailoptional} onChange={this.inchange3}></input>
                            <p id="Mobile2">Password</p>
                            <input type="password" id="text2" value={this.state.Password} onChange={this.inchange4}></input>
                            <p id="Mobilev">Passwords must be at least 6 characters.</p>
                            <p id="Mobile5">We will send you a text to verify your phone.<br></br>Message and Data rates may apply.</p>
                            <button id="Account"  onClick={()=>this.sandeep()}>Create Account</button>
                            <p id="signin">Already have an account?<a href="#" id="signin">sign in</a></p>
                            <p id="signin2">Buying for work?<a href="#" id="signin2">Create a free business account</a></p>
                            
                            
                        </Card>
                        </center>
                        </div>
                        
                        <div class="col-4"></div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Create;