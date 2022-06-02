import React, { useState } from 'react'
import LinearChart from '../components/charts/linearChart/LinearChart'
import { UserData } from '../Data'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'
import HorizontalBar from '../components/charts/horizontalBar/HorizontalBar'
import CardChart from '../components/charts/cardChart/CardChart'
import PieChart from '../components/charts/pieChart/PieChart'
export default function Home() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["blue"],
        borderColor: "gray",
        borderWidth: 2

      },
      {
        label: 'Users lost',
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["red"],
        borderColor: "gray",
        borderWidth: 2

      },
    ]
  });

  return (
    <Layout >
      <div className={styles.container}>
        <CardChart>
          <HorizontalBar chartData={userData} />
        </CardChart>

        <CardChart>
          <LinearChart chartData={userData} />
        </CardChart>
        
        <CardChart>
          <PieChart chartData={userData} />
        </CardChart>
      </div>

    </Layout>
  )
}

