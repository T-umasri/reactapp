import React from 'react';
import axios from 'axios';
import './App.css';
import { Link,Outlet } from 'react-router-dom';
function App() {
  const [students, setStudents] = React.useState([])
  React.useEffect(()=>{
    axios.get("http://localhost:4500/students")
    .then((res)=>{
      console.log(res.data);
      setStudents([...res.data])
   })
  },[])
  function del(e){
     var id = e._id;
    axios.delete(`http://localhost:4500/deleteStudent/${id}`)
  }
  return (
    <div>
     <h1>students</h1>
     <button className=' btn btn-info-subtle p-1 m-1'><Link to='/createform'>Add Student</Link></button>
          <table border="2">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
        {
          students.map((a,i)=>{
                return (<tr>
                            <td>{a.firstname}</td>
                            <td>{a.lastname}</td>
                            <td>{a.age}</td>
                            <td><button onClick={()=>{del(a,i)}} className=' btn p-1 btn-light m-1'>Delete</button></td>
                            <td><button className='btn p-1 btn-light m-1'><Link to={`/updateStudent/${a._id}`} >Update</Link></button></td> 
                      </tr>)
          })
        }   
      </table> 
        <Outlet></Outlet>
    </div>
  );
}
export default App;