import './App.css';
import React, { useEffect, useState } from 'react'
import axios from "axios"
function App() {
  const [data, setData] = useState("");
  const [tarih, setTarih] = useState("");

  useEffect(() => {

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json") // asc çalıştı 
      .then((res) => setData(res.data[tarih]))
      .catch((error) => console.error(error))
  }, [data, tarih]); // boş kalırsa bir kere render eder  biz data değiştiğinde tekrar render etmesini istiyoruz 


  return (

    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-light">Türkiye Güncel Covid İstatistikleri</h2>
            <input placeholder="GG/AA/YYY" className="form-control mt-4" onChange={(e) => setTarih(e.target.value)}></input>
            <table className="table text-light mt-4">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Günlük Hasta Sayısı</th>
                  <th scope="col">Toplam Hasta Sayısı</th>
                  <th scope="col">Günlük Vefat Sayısı</th>
                  <th scope="col">İyileşen Sayısı</th>
                </tr>
              </thead>

              <tbody>
                <tr className={data === undefined ? "bg-danger" : "bg-success"}>
                  <th scope="row">1</th>
                  <td>{data === undefined ? "data bekleniyor" : data.patients}</td>
                  <td>{data === undefined ? "data bekleniyor" : data.patients}</td>
                  <td>{data === undefined ? "data bekleniyor" : data.totalPatients}</td>
                  <td>{data === undefined ? "data bekleniyor" : data.deaths}</td>
                  <td>{data === undefined ? "data bekleniyor" : data.totalRecovered}</td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
