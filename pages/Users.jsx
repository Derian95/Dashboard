/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Layout from '../components/layout/Layout'
import styles from '../styles/Users.module.css'
import Card from '../components/user/userCard/Card'
export default function Users({ data }) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Users</h1>
        <div className={styles.cardContainer}>
          {data.data.map((users) => (
            <Card key={users.key} data={users} />
          ))}
        </div>

      </div>
    </Layout>
  )
}
 
export async function getStaticProps() {
  
  const api=process.env.API_USER
  const key=process.env.IDAPI
  const res = await fetch(api, {
    method: 'get',
    headers: new Headers({
      'app-id': key
    })
  });
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}