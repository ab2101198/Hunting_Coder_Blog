import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'


const contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc)

    const data = {phone, name, email, desc};

   fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(data) ,

    }).then(response => response.text()) 
    .then(data=>{
      console.log('Success', data) ;
      alert('Your data is submitted successfully')
      setname('') ;
      setemail('') ;
      setphone('') ;
      setdesc('');
    })
    .catch((error)=>{
      console.log('Error:', error) ;
    });
  }

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value);
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value);
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value);
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value);
    }

  }

  return (<div className={styles.container}>
    <div className={styles.in}>
     <h1>Contact Us</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <div className={styles.mb3}>
        <label htmlFor="name" className={styles.formlabel}>Enter your name :</label>
        <div className={styles.in}>
        <input type="text" value={name} onChange={handleChange}  id="name" name='name' aria-describedby="emailHelp" />
        </div>
      </div>
      <div className={styles.mb3}>
        <label htmlFor="email" className={styles.formlabel}>Email address :</label>
        <div className={styles.in} >
        <input type="email" value={email} onChange={handleChange}   id="email" name='email' aria-describedby="emailHelp" />
        </div>
      </div>
      <div className={styles.mb3}>
        <label htmlFor="phone" className={styles.formlabel}>Phone :</label>
        <div className={styles.in}>
         <input type="phone" value={phone} onChange={handleChange}  id="phone" name='phone' aria-describedby="emailHelp" />
        </div>
      </div>
      <div className={styles.mb3}>
        <label htmlFor="desc" className={styles.formlabel}>Elaborate your concern :</label>
        <div className={styles.in}>
        <textarea className={styles.text} value={desc} onChange={handleChange} placeholder="write your concern here" name="desc" id="desc" />
        </div>
      </div>
      <div className={styles.btnsty}>
        <button type="submit"  className={styles.btnstyle}>Submit</button>
      </div>
    </form>
  </div>)
}

export default contact
