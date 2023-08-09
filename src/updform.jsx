import React from 'react'
import { Formik, Form , Field, ErrorMessage,} from 'formik';
import axios from 'axios';
function Updform(props) {
    var updt=props.std;
    var id = props.id;
    console.log(updt);   
  return (
    <div>
        <Formik
         initialValues={{...updt}}
         onSubmit={
            (values)=>{
            console.log(values)
            axios.put(`http://localhost:4500/updateStudent/${id}`,values)
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
export default Updform