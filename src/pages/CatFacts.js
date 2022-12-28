import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

function CatFacts() {
    const {data,isLoading,isError,refetch}  =useQuery( ["catfact"],()=>{ return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)} )

  return (
    <div className='text-center text-lg-start fs-2'>

        {isLoading? <h2>Loading...</h2>:data.fact}
    </div>
  )
}

export default CatFacts