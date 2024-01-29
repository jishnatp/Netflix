
import React, {useEffect,useState}from 'react'
import Youtube from 'react-youtube'
import './RowPost.css';
import axios from '../axios';
import {API_KEY,imageUrl} from '../../constants/constants'



export default function RowPost(props) {
const  [movies,setmovies]=useState([])
const [urlId,setUrlId]=useState('')
  useEffect(()=>{


axios.get(props.url).then(response=>{
  console.log(response);
  setmovies(response.data.results)
}).catch(err=>{
  //alert('Network Error')
})


  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };


  const handleMovie=(id)=>{
console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
  console.log(`url id is this`);
  console.log(Response.data.results[0]);
  if(Response.data.results.length!==0){
    setUrlId(Response.data.results[0])
  }else{
    console.log('Array empty');
  }
})
  }
  return (

    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} key={obj.id} className={props.isSmall ?'smallPoster' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
          )}
            
      
        </div>
       {urlId &&<Youtube opts={opts} videoId={urlId.key} id={urlId.key}/>}
    </div>
  )
}

