//Takes in the data from an individual trait and uses it to create a bar display of the average score
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Trait = ({trait}) => {
  return (
    <Bar
      datasetIdKey='id'
      options = {{
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Characteristics',
          },
        },
      }}
      data = {{
        labels: [''],
        datasets: [
          {
            id: 1,
            label: 'AvgScore',
            data: [3],
            backgroundColor: '#255'
          },
          {
            id: 2,
            label: 'AvgScore',
            data: [1.2],
            backgroundColor: '#377'
          }
        ]
      }}
    />
  )
}

export default Trait;