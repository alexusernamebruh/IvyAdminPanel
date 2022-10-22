import './App.css';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

const LandingPage = () => {
  const [data, setData] = useState('');
  const getData = async () => {
    const apiUrl = 'http://localhost:3005';
    const a = axios.create({
      baseURL: apiUrl,
      timeout: 10000,
    });
    const GetTheData = (): Promise<AxiosResponse> => {
      return a.get('/all');
    };

    const result = await GetTheData();
    const resultData = result.data.data;
    const resultDataData = JSON.stringify(resultData);
    console.log(resultDataData);
    setData(resultDataData);
  };
  getData();
  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default LandingPage;
