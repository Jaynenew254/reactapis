import React,{useEffect,useState} from 'react'
import axios from 'axios'
import"../index.css"
import { PacmanLoader } from 'react-spinners'

const Comments = () => {
  const [loading,setLoading]=useState("false")
  const [comments,setComments]=useState([])

  useEffect( ( ) =>{
    // set loading to be true 
    setLoading(true)
    // fetch data from api
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
        // set loading to be false
        setComments(response.data)
        setLoading(false)

    })
    // incase error
    .catch((error)=>{
        // set loading false 
        setLoading(false)
        console.log(error)


    })


    


 },[ ])
  // console.log(comments)

  if (loading){
    return <PacmanLoader className='spinner' />
 }
 const removeComents=(id)=>{
  const newComents=comments.filter((comment)=>comment.id!==id)
  setComments(newComents)
 }
 
  return (
    <div className="container">
      {comments?.map((comment,key)=>(
        <div className="card">
          <h2>{comment.name}</h2>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
          <button onClick={()=>removeComents(comment.id)}>Remove</button>
        </div>
      ))}
    </div>
  
  )
}

export default Comments
