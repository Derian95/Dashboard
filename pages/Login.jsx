import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup';
import { useRouter } from 'next/router'
import Loader from '../components/loader/Loader'

export default function Login() {
    const [dark, setDark] = useState(true)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDark(localStorage.getItem("dark-mode"))

        }
    }, [dark]);
    useEffect(() => {
     setLoading(true)
     setTimeout(function () {
        setLoading(false)
      }, 3000);
    }, []);
    const login=()=>{
        setLoading(true)

        setTimeout(function () {
            setLoading(false)
            router.push("/")
          }, 3000);
    }
        
    

    const { values, handleBlur, handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object().shape({
            email: yup.string().email("Please enter a valid email").required("Required"),
            password: yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        }),
        onSubmit: () => {
            console.log("raaa")
        }
    })

    if(loading){
        return <Loader/>
    }
    return (
        <div className={dark ? styles.containerDark : styles.container}>
            <div className={dark ? `${styles.formContainer} ${styles.dark}` : styles.formContainer}>
                <h1>Login</h1>
                <p>Hello!! Log in with your email</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.textBox}>
                        <label htmlFor="Email">Email Adress</label>
                        <input
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            name="email"
                            placeholder='Email'
                            className={errors.email && touched.email ? `${styles.input} ${styles.error}` : styles.input} />
                        {errors.email ? <span className={styles.textError}>{errors.email}</span> : null}
                    </div>
                    <div className={styles.textBox}>
                        <label htmlFor="Email">Password</label>
                        <input
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                            name="password"
                            placeholder='Password'
                            className={errors.password && touched.password ? `${styles.input} ${styles.error}` : styles.input}
                        />
                        {errors.password ? <span className={styles.textError}>{errors.password}</span> : null}


                    </div>

                    {errors.email && errors.password ? (<button disabled className={styles.buttonDisable}>Log in</button>) :
                        (<button
                            className={styles.button}
                            onClick={() => login()}
                        >Log in
                        </button>)}
                </form>

                <div className={styles.containerCheck}>
                    <input type="checkbox" height={1} className={styles.check} />
                    <label>Remember me</label>
                </div>
                <div className={styles.divi}></div>
                <p>or enter with:</p>
                <div className={styles.icons}>
                    <FaFacebook size={25} />
                    <FaGithub size={25} />
                    <FaGoogle size={25} />
                </div>

                <p>Dont have an account? <Link href="/"><u className={styles.link}>Register</u></Link></p>
            </div>
        </div>
    )
}
