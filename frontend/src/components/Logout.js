import React, { Component } from 'react'
import Paper from '@mui/material/Paper'
import bg from '../images/bg.png'
export class Logout extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.removeItem("token")
    }
    
    render() {
        return (
            <div>
                <div style={{backgroundImage:`url(${bg})`,padding:"25px"}}>
                <Paper elevation={5} sx={{width:"80%",height:"82vh",padding:"30px",margin:"auto"}}>
                    <h1 style={{fontSize:"70px",margin:"20px"}}>You have been Logged out</h1>
                    <h2 style={{margin:"20px"}}>Please Login to continue</h2>
                </Paper>
                </div>
            </div>
        )
    }
}

export default Logout
