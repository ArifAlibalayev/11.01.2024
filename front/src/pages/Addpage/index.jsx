import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.scss'
import { useNavigate } from "react-router-dom";


function AddPage() {
  
  
  const navigate = useNavigate();

  
  function addFlowerType(item) {
    fetch("http://localhost:4800/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(item)
})

navigate("/")

  }

  return (
    <Formik 
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(25, 'Must be 25 characters or less')
           .required('Required'),
         price: Yup.number()
           .required('Required'),
         img: Yup.string().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          addFlowerType(values);
           setSubmitting(false);
         }, 400);
       }}
     >
      
       <Form className='AddForm'> 
       <h2>Add New Flower Type</h2>
         <label htmlFor="name">Flower Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" className='errorMessage' />
 
         <label htmlFor="price">Flower Price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <label htmlFor="img">Image link</label>
         <Field name="img" type="text" />
         <ErrorMessage name="img" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
  )
}

export default AddPage