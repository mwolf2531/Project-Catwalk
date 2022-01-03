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

const ScoreTable = ({scores}) => {
  scores[1] = Number(scores[1]);
  scores[2] = Number(scores[2]);
  scores[3] = Number(scores[3]);
  scores[4] = Number(scores[4]);
  scores[5] = Number(scores[5]);
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
            text: 'Review Scores',
          },
        },
      }}
      data = {{
        labels: [''],
        datasets: [
          {
            id: 1,
            label: '5 Stars',
            data: [scores[5]],
            backgroundColor: '#377'
          },
          {
            id: 2,
            label: '4 Stars',
            data: [scores[4]],
            backgroundColor: '#377'
          },
          {
            id: 3,
            label: '3 Stars',
            data: [scores[3]],
            backgroundColor: '#377'
          },
          {
            id: 4,
            label: '2 Stars',
            data: [scores[2]],
            backgroundColor: '#377'
          },
          {
            id: 5,
            label: '1 Star',
            data: [scores[1]],
            backgroundColor: '#377'
          }
        ]
      }}
    />
  )
}

export default ScoreTable;