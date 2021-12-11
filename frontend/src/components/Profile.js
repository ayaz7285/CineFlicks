import React, { Component } from 'react'
import {Navigate,Link} from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import bg from '../images/bg.png'
export class Profile extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        console.log("token",token)
        let loggedIn = true
        let user = token
        if(token === null)
        {
            loggedIn=false
        }
        this.state = {
             loggedIn,
             user
        }
    }
    
    render() {
        if(this.state.loggedIn == false){
            return <Navigate to = "/login"></Navigate>
        }
        return (
            <div>
                <div style={{backgroundImage:`url(${bg})`,padding:"20px"}}>
                <Paper elevation={5} sx={{width:"80%",margin:"auto",padding:"20px"}}>
                <img src="images/profile.png" style={{margin:"15px",height:"60%",width:"60%"}}/>
                <h1>Hello {this.state.user}</h1>
                <Button variant="outlined" style={{width:"20%",margin:"20px"}}><Link to = "/watchlist">Your WatchList</Link> </Button>
                <Button variant="outlined" style={{width:"20%",margin:"20px"}}><Link to = "/logout">Logout</Link> </Button>
                </Paper>
                </div>
            </div>
        )
    }
}

export default Profile

