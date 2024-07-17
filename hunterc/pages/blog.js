import React, { useEffect, useState } from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const Blog = (props) => {
  console.log(props)
  const [blogs, setblogs] = useState(props.allBlogs) ;
  // useEffect(()=>{
  //   // console.log("useeffect is running") ;
  //   fetch('http://localhost:3000/api/blogs').then((a)=>{
  //         return a.json() ;
  //   }).then((parsed)=>{
  //     // console.log(parsed) ;
  //     setblogs(parsed) 
  //   })
  // }, [])
  return (<div>
    {/* <h2> Popular Blogs </h2> */}
    <main className={`${styles.main}`}>
      {blogs.map((blogitem)=>{
        return <div className="blogItem" key={blogitem.slug}>
          <Link href = {`/blogpost/${blogitem.slug}`}>
            <h3  className={styles.styleforh3}>{blogitem.title}</h3>
          </Link>
          <p className={styles.styleforp}>{blogitem.content.substr(0, 400)}</p>
         </div>
      })}
      </main>
    </div>)
}

export async function getServerSideProps(context) {
      
      let   data = await  fetch('http://localhost:3000/api/blogs') 
      let allBlogs = await data.json() ;
      
      return {
        props : {allBlogs},
      }   
}

export default Blog

