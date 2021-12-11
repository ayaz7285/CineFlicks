import axios from 'axios'
import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper'
import {Link} from 'react-router-dom'
import bg from '../images/bg.png'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             email:"",
             password:"",
             successmessage: "",
             errorMessage: ""
        }
    }
    enterUsername = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    enterEmail = (event) =>{
        this.setState({
            email:event.target.value
        })
    }
    enterPassword = (event) =>{
        this.setState({
            password:event.target.value
        })
    }
    addUser = () => {
        var formJSON = {
            name: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        console.log(formJSON)
        axios
        .post('http://localhost:8080/login', formJSON)
        .then(response => {
            if(response.data.message=="login success")
            {
                localStorage.setItem("token",this.state.username)
            }
            this.setState({successmessage: response.data.message, errorMessage: ""})
            console.log("Data from backend", response.data);
        }).catch(error => {
            if(error.response){
                this.setState({successmessage: "", errorMessage: error.response.data.message})
            }else{
                this.setState({successmessage: "", errorMessage: error.message})
            }
        })
    }
    handleSubmit=(event)=>{
        // alert(`form submitted by ${this.state.username}`)
        console.log("username",this.state.username)
        event.preventDefault()
    }


    render() {
        return (
        <div style={{backgroundImage:`url(${bg})`}}>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{paddingBottom:"10%",height:"100vh",backgroundRepeat:"no-repeat"}}
        >
        <h1 style={{padding:"20px"}}>E-Shop</h1>
        <Paper elevation={8} style={{width:"40%",margin:"auto"}}>
        <form style={{borderRadius:"4px",width:"100%",height:"fit-content",padding:"20px"}} onSubmit = {this.handleSubmit}>
            <h2 style={{marginTop:"15px",marginBottom:"15px"}}>Login</h2>
            <div style={{marginTop:"10px",marginBottom:"10px"}}>
                <TextField
                required
                id="outlined-required"
                label="Username"
                style={{width:"90%"}}
                name="username"
                value={this.state.username} 
                onChange= {this.enterUsername}
                />
            </div>
            <div style={{marginTop:"10px",marginBottom:"10px"}}>
                <TextField
                required
                id="outlined-email-required"
                label="Email"
                type="email"
                style={{width:"90%"}}
                value={this.state.email} 
                onChange= {this.enterEmail}
                />
            </div>
            <div style={{marginTop:"10px",marginBottom:"10px"}}>
                <TextField
                required
                id="outlined-password-required"
                label="Password"
                type="password"
                style={{width:"90%"}}
                value={this.state.password} 
                onChange= {this.enterPassword}
                />
            </div>
            <div style={{marginTop:"13px",marginBottom:"13px"}}>
                <button className="btn btn-primary" type="submit" style={{width:"90%"}} onClick= {this.addUser}>Login</button>
            </div>
            <p>{this.state.successmessage}</p>
            <div style={{marginTop:"10px",paddingBottom:"20px"}}>
            <Link to="/register" style={{textDecoration:"none"}}>Or Create a new Account</Link>
            </div>
        </form>
        </Paper>
    </Box>
    </div>
        )
    }
}

export default Login

