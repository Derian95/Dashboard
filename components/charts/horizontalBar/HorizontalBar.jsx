import React,{useMemo} from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import {Bar} from 'react-chartjs-2'


const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Horizontal Bar Chart',
      },
    },
  };

export default function HorizontalBar({chartData}) {
 
  
    return (
        <Bar data={chartData} height={250} options={options} />

    )
}
