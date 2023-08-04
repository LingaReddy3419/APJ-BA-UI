import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const newData=[{"year":2020,"totalNodes":22},{"year":2021,"totalNodes":30},{"year":2022,"totalNodes":25},{"year":2023,"totalNodes":40},{"year":2024,"totalNodes":32},{"year":2025,"totalNodes":16}]
const formatYAxisTick = (value) => {
  if (value >= 1000) {
    return `${value / 1000}k`;
  }
  return value;
};
const BarChartGraph = () => {
  const [barGraphData, setBarGraphData] = useState([]);


  useEffect(() => {
    getBarGraphData();
  }, [])

  const getBarGraphData = async () => {
    try {
      const res = await axios.get('http://192.168.1.9:8081/api/apj-ba/scenarios/bar-test');
      const modifiedData=res?.data.map(eachGraph => {
        const newItem = {
          "Year": eachGraph.year,
          "Total Nodes":eachGraph.totalNodes
        }
        return newItem;
      })
      setBarGraphData(modifiedData)
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <BarChart
      width={480}
      height={220}
      data={newData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis tickFormatter={formatYAxisTick} />
      <Tooltip />
      <Legend />
      <Bar dataKey="totalNodes" fill="#ffc658" />
      {/* <Bar dataKey="amt"  fill="#82ca9d" />
          <Bar dataKey="uv"  fill="#ffc658" /> */}
    </BarChart>
  );
};
  export default BarChartGraph;
