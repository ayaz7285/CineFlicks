import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bg from '../images/bg.png'

function Search() {
    var [items, setItems] = useState([])
    const { name } = useParams()
    useEffect(()=>{
        getData()
    },[])
    const getData = ()=>
    {
        axios.get(`http://www.omdbapi.com/?apikey=6cae4c9b&s=${name}`) 
        .then(res=>{
            console.log("response data",res.data.Search);
            var data = res.data.Search
            setItems(data)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div style={{backgroundImage:`url(${bg})`,height:"fit-content",paddingTop:"1%",paddingBottom:"1%"}}>
            <h1 style={{color:"white",fontSize:"50px",fontWeight:"Bold",fontFamily:"Merienda"}}>{name}</h1>
            <div style={{display:"flex",flexWrap:"wrap",padding:"20px",alignContent:"space-between"}}>
            {
                items.map(item=>(
                  
                    <Card sx={{ maxWidth: 345 ,width:"260px",margin:"15px"}} elevation={5}>
                    <CardMedia
                        component="img"
                        height="160"
                        image={item.Poster}
                        src={item.Poster}
                        alt={item.Title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.Title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to={`/info/${item.imdbID}`} style={{color:"Blue",textDecoration:"none"}}>Learn More</Link></Button>
                    </CardActions>
                    </Card>
                ))
            }
            </div>
        </div>
    )
}

export default Search
