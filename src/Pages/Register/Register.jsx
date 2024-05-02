import axios from "axios";
import React, { useState } from "react";
import styles from '../Register/Register.module.css'

const Register = () => {
    const [name,SetName]=useState('')
    const [surname,SetSurname]=useState('')
    const [email,SetEmail]=useState('')
    const [words,SetWords]=useState('')
    
    const sendForm=()=>{
        axios.post('https://northwind.vercel.app/api/categories', {
            name: name,
            surname: surname,
            email: email,
            description: words
        })
        .then (res => {
            console.log(res.data);
        })

        SetName('')
        SetSurname('')
        SetEmail('')
        SetWords('')
    }


  return (
    <div>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1>Contact Us</h1>
          <div className={styles.inputBox}>
            <div className={styles.d}>
              <h4>
                Full name <span style={{ color: "red" }}>*</span>
              </h4>
                   <input type="text" placeholder="Name" value={name} onChange={(e)=> SetName(e.target.value)}/>
              <p>First</p>
            
            </div>
            <div className={styles.d}>
              <input type="text"  value={surname} onChange={(e)=> SetSurname(e.target.value)}/>
              <p>Last</p>
            </div>
            
          </div>
          <div className={styles.emailInp}>
            <h4>
              Email <span  style={{ color: "red" }}>*</span>
            </h4>
            <input type="text"  value={email} onChange={(e)=> SetEmail(e.target.value)}/>
          </div>

          <div className={styles.words}>
            <h4>
              Leave us a few words<span>*</span>
            </h4>
            <textarea name="" id="" cols="50" rows="20"  value={words} onChange={(e)=> SetWords(e.target.value)}></textarea>
          </div>
          <div className={styles.btn}>
            <button onClick={sendForm}>Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

