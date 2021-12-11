import React, { Component } from 'react'
import bg from '../images/bg.png'
import img1 from "../images/img1.png"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom'
import requirePropFactory from '@mui/utils/requirePropFactory'

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:""
    }
  }
  enterName = (event)=>{
    this.setState({name:event.target.value})
  }
  render() {
    return (
      <div style={{backgroundImage:`url(${bg})`,height:"fit-content",paddingTop:"15%",paddingBottom:"10%"}}>
          <div style={{color:"white",height:"fit-content",width:"50%",margin:"auto",border:"4px solid white"}}>
            <h1 style={{fontSize:"60px",fontWeight:"bold"}}>Unlimited movies, TV shows and more.</h1>
            <h3>Ready to watch? Enter the name of the show you want to watch.</h3>
            <form style={{display:"flex"}}>
              <TextField
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
              style={{backgroundColor:"#D3D3D3",width:"70%",margin:"10px"}}
              onChange={this.enterName}
              value={this.state.name}
              />
              <Button variant="contained" style={{height:"53px",margin:"10px",width:"20%"}}> <Link to={`/Search/${this.state.name}`} style={{textDecoration:"none",color:"white"}}>Search</Link>  </Button>
            </form>
          </div>
          <Paper elevation={6} style={{width:"80%",margin:"auto",display:"flex",padding:"10px",marginTop:"10%",marginBottom:"20px"}}>
              <h2 style={{color:"black",width:"70%",fontSize:"45px",margin:"10px",paddingTop:"5%",fontFamily:"cursive"}}>Create an Account to maintain your own watchlist</h2>
              <img src={img1} style={{height:"250px"}}/>
          </Paper>
          <Paper elevation={6} style={{width:"80%",margin:"auto",display:"flex",padding:"10px",marginTop:"20px",marginBottom:"20px"}}>
              <h2 style={{color:"black",width:"70%",fontSize:"45px",margin:"10px",paddingTop:"6%",fontFamily:"cursive"}}>Watch your favourite Movie</h2>
              <img src={img2} style={{height:"250px",width:"400px"}}/>
          </Paper>
          <Paper elevation={6} style={{width:"80%",margin:"auto",display:"flex",padding:"10px",marginTop:"20px",marginBottom:"20px"}}>
              <h2 style={{color:"black",width:"70%",fontSize:"45px",margin:"10px",paddingTop:"5%",fontFamily:"cursive"}}>Watch your favourite TV and Web Series</h2>
              <img src={img3} style={{height:"250px",width:"400px"}}/>
          </Paper>
          <Paper elevation={6} style={{width:"80%",margin:"auto",display:"flex",padding:"10px",marginTop:"20px",marginBottom:"20px"}}>
              <h2 style={{color:"black",width:"70%",fontSize:"45px",margin:"10px",paddingTop:"6%",fontFamily:"cursive"}}>Watch your favourite Anime</h2>
              <img src={img4} style={{height:"250px",width:"200px"}}/>
          </Paper>
      </div>
    )
  }
}

export default Home
