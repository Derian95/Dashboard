import React,{useMemo} from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import {Line} from 'react-chartjs-2'

const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Linear Bar Chart',
      },
    },
  };


export default function LinearChart({chartData}) {
 
  
    return (
        <Line data={chartData}  height={250}  options={options} />

    )
}
