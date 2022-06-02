import React,{useMemo} from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import {Pie} from 'react-chartjs-2'

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
        <Pie data={chartData}  width={"100%"}  options={options} />

    )
}
