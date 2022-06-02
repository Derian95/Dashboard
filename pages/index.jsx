import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import styles from '../styles/index.module.css'
import Layout from '../components/layout/Layout'
import Loader from '../components/loader/Loader'
import { useState, useEffect } from 'react'
import Statistics from '../components/index/Statistics'
const props = {
  colorSlice: "#00a1ff",
  fontColor: "#365b74",
  fontSize: "1.6rem",
  fontWeight: 500,
  size: 200,
  stroke: 10,
  strokeBottom: 5,
  speed: 60,
  opacity: 10,
  fill: "#00897B",
  unit: "%",
  textPosition: "0.35em",
  animationOff: false,
  inverse: true,
  round: true,
  number: true,
};

export default function Home() {

  return (

    <Layout >
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <Statistics title={"Sales Today"} descripcion="Sales of the last month " number={62} color={"red"} />
          <Statistics title={"Total Earnings"} descripcion="More earnings than usual" number={152} color={"green"} />
          <Statistics title={"Visitors Today"} descripcion="More visitors than usual" number={662} color={"blue"} />
          <Statistics title={"Pending Orders"} descripcion="Less orders than usual" number={12} color={"blue"} />
          <Statistics title={"Browser Usage"} number={2} color={"orange"} />
          <Statistics title={"Sales Total"} descripcion="Sales total year" number={962} color={"red"} />
        </div>
        <div className={styles.containerProgress}>
          <div className={styles.progress}>
            <h2>User</h2>
            <CircularProgressBar {...props} percent={30}/>

          </div>
          <div className={styles.progress}>
          <h2>Jobs</h2>

            <CircularProgressBar {...props} percent={90}/>

          </div>
          <div className={styles.progress}>
          <h2>Products</h2>

            <CircularProgressBar {...props} percent={10}/>

          </div>
        </div>


      </div>

    </Layout>
  )
}
