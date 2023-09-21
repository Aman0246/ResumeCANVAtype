// import logo from './logo.svg';
import TamplateONE from './Pages/TamplateONE';
import './App.css';
import React, { useEffect,useState } from "react";
import axios from 'axios'
// import {data} from './dummydata'
import Nav from './Pages/Nav';
import { Routes, Route} from "react-router-dom";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;
function App() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    let data = async () => {
      console.log("Fetching data...");
      let a = await axios.get("/data");
      setdata(a.data.data);
    };
    data();
  }, []);
  return (
    <>
<Nav></Nav>
<Routes>
  <Route path='/TamplateONE' element={<TamplateONE data={data}/>}></Route>
</Routes>
    </>
  );
}

export default App;
