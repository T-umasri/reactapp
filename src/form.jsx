import React from 'react';
import axios from 'axios';
import './App.css';
import { useParams } from 'react-router';
import Updform from './updform';
function Updt() {
    var {id} = useParams();
    var [std,setStd] = React.useState(null);

    React.useEffect(()=>{
        axios.get(`http://localhost:4500/updateStudent/${id}`)
        .then((res)=>{
          console.log(res.data);
          setStd({...res.data})
       },[id])
      },[])
        
  return (
    <div>
    <div>updateStudent</div>
    {std && <Updform std={std} id={id}></Updform>}
      </div>
  )
}
export default Updt;