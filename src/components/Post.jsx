import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../index.css"
import { PacmanLoader } from 'react-spinners'

const Post = () => {
  const [loading,setLoading]=useState("false")
  const[posts, setPosts]=useState([])
  useEffect(()=>{
    setLoading(true)

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{

      setPosts(response.data)
      setLoading(false)
    })

    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })
  },[])
  // console.log(posts)
  if (loading){
    return <PacmanLoader className='spinner' />
 }
 const removePost =(id)=>{
  const newPosts =posts.filter((posts)=>posts.id !==id)
  setPosts(newPosts)
}
 

  return (
    <div className="container">
      {posts?.map((post,key)=>(
        <div className="card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          {/* btn remove */}
           <button  onClick={()=>removePost(post.id)}>Remove</button>
        </div>
      ))}
    </div>
    
  )
}

export default Post
