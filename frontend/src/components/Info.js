import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Paper from '@mui/material/Paper';
import bg from '../images/bg.png'
import Button from '@mui/material/Button';

function Info() {
    var [item, setItem] = useState({})
    const { id } = useParams()
    useEffect(()=>{
        getData()
    },{})
    const getData = ()=>
    {
        axios.get(`http://www.omdbapi.com/?apikey=6cae4c9b&i=${id}`) 
        .then(res=>{
            console.log("response data",res.data);
            var data = res.data
            setItem(data)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const add = ()=>
    {
        const name = localStorage.getItem("token")
        var formJSON = {
            name: name,
            movie: item.Title,
            id:id
        };
        console.log(formJSON)
        axios
        .post('http://localhost:8080/add', formJSON)
        .then(response => {
            console.log("Data from backend", response.data);
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div style={{backgroundImage:`url(${bg})`,padding:"15px"}}>
            <Paper elevation={6} sx={{height:"100%",width:"60%",margin:"auto",padding:"10px"}}>
                <h1 style={{fontFamily:"Josefin Sans",fontWeight:"bolder"}}>{item.Title}</h1>
                <img src={item.Poster} style={{margin:"10px"}}/>
                <ul style={{width:"50%",margin:"auto",textAlign:"justify",fontFamily:"Merienda"}}>
                    <li style={{margin:"5px"}}><b>Title: </b>{item.Title}</li>
                    <li style={{margin:"5px"}}><b>Year: </b>{item.Year}</li>
                    <li style={{margin:"5px"}}><b>Ratings: </b>{item.Rated}</li>
                    <li style={{margin:"5px"}}><b>Released: </b>{item.Released}</li>
                    <li style={{margin:"5px"}}><b>Runtime: </b>{item.Runtime}</li>
                    <li style={{margin:"5px"}}><b>Genre: </b>{item.Genre}</li>
                    <li style={{margin:"5px"}}><b>Director: </b>{item.Director}</li>
                    <li style={{margin:"5px"}}><b>Writer: </b>{item.Writer}</li>
                    <li style={{margin:"5px"}}><b>Actors: </b>{item.Actors}</li>
                    <li style={{margin:"5px"}}><b>Language: </b>{item.Language}</li>
                    <li style={{margin:"5px"}}><b>Country: </b>{item.Country}</li>
                    <li style={{margin:"5px"}}><b>Plot: </b>{item.Plot}</li>
                </ul>
                <Button variant="outlined" style={{width:"50%",margin:"5px"}} onClick={add}>Add to WatchList</Button>
            </Paper>
        </div>
    )
}

export default Info
