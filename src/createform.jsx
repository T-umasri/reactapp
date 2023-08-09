import React from 'react'
import { Formik, Form , Field, ErrorMessage,} from 'formik';
import axios from 'axios';
function Addstudent() {
  return (
    <div>
        <h1>Add Student</h1>
        <Formik
         initialValues={{
            firstname:"",
            lastname:"",
            age:''
         }
        }
         onSubmit={
            (values)=>{
             console.log(values)
               axios.post("http://localhost:4500/addStudent",values)
            }
          }>        
          {
            ({handleSubmit,getFieldProps,handleChange,handleBlur})=>{
              return (
                 <Form>
                      <Field name="firstname" onChange={handleChange } onBlur={handleBlur}></Field><br></br>
                      <ErrorMessage name='firstname' component='div'/>      
                      <Field name="lastname" onChange={handleChange} onBlur={handleBlur}></Field><br></br>
                      <Field type='number' name="age" onChange={handleChange} onBlur={handleBlur}></Field><br></br>
                      <button  onClick={handleSubmit}>save</button>
                 </Form>
              )
            }
          }
      </Formik>
    </div>
  )
}

export default Addstudent