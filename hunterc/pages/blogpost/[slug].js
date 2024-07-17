import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import styles from "@/styles/BlogPost.module.css";

const slug = (props) => {
    const [blog, setBlog] = useState(props.allBlog) ;
    // const  router = useRouter() ;
    // useEffect(()=>{
    //   if(!router.isReady) return ;
    //   const { slug } = router.query ;
    //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
    //         return a.json() ;
    //   }).then((parsed)=>{
    //     setBlog(parsed) 
    //   })
    // }, [router.isReady])
  return (
    <div>
      <main className={`${styles.main}`}>
        <h1>{blog&&blog.title}</h1>
        <hr/>
        <div className={styles.pad}>
          {blog&&blog.content}
        </div>
        </main>
    </div>
  )
}

export async function getServerSideProps(context) {

   let {slug} = context.query ;
      
  let   data = await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`) ;
  let allBlog = await data.json() ;
  
  return {
    props : {allBlog},
  }   
}

export default slug ;
