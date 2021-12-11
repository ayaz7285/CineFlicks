import React, { Component } from 'react'
import {Navigate,Link} from 'react-router-dom'
import bg from '../images/bg.png'
import Paper from '@mui/material/Paper'
import axios from 'axios'
export class Watchlist extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        console.log("token",token)
        let loggedIn = true
        if(token === null)
        {
            loggedIn=false
        }
        this.state = {
             loggedIn,
             token,
             list:[]
        }
    }
    

    componentDidMount()
    {
        axios.get(`http://localhost:8080/watchlist/${this.state.token}`) 
        .then(res=>{
            console.log("response data",res.data);
            console.log("watchlist is:",res.data.items)
            this.setState({list: res.data.items});
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        if(this.state.loggedIn==false)
        {
            return <Navigate to="/login"></Navigate>
        }
        const {list} = this.state
        console.log(list)
        return (
            <div style={{backgroundImage:`url(${bg})`,padding:"20px"}}>
                <Paper sx={{width:"80%",height:"80vh",margin:"auto",backgroundColor:"white",padding:"20px"}}>
                <h1 style={{marginBottom:"20px",fontFamily:"Merienda",fontWeight:"bold"}}>Your WatchList</h1>
                <ol style={{width:"65%",margin:"auto",border:"2px solid black",textAlign:"justify"}}>
                {
                    list.map(item =>
                        <li style={{margin:"10px"}}><Link to={`/info/${item.id}`} style={{color:"black"}}>{item.movie}</Link></li>
                        )
                }
                </ol>
                </Paper>
            </div>
        )
    }
}

export default Watchlist