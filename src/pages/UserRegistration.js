import React from 'react'
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

function UserRegistration() {
   
    let schema =yup.object().shape(
    {
        fullname:yup.string().required(),
        email:yup.string().required('Email is required').email("Email is invalid"),
        age:yup.number().integer().positive("age must be positive").min(18,"age must be grater than 18").required("age is required"),
        password:yup.string().min(4,"minimum 4 characters required").max(10).required("password is required"),
        confirmpassword:yup.string().oneOf([yup.ref('password'),null],"passwords dosen't match").required("confirm password is required"), 
    })
    let submit=(data)=>
    {
        console.log("Form submitted");
        console.log(data);
    }
    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)});


  return (
    <div>
        <form onSubmit={handleSubmit(submit)} className="form border">
            <input type="text" placeholder='full name' {...register("fullname")}/>
            <p>{errors.fullname?.message}</p>
            <input type="text" placeholder='email' {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="text" placeholder='age' {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder='password' {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder='confirm password' {...register("confirmpassword")}/>
            <p>{errors.confirmpassword?.message }</p>
            <input type="submit"/>
            </form>
    </div>
  )
}

export default UserRegistration