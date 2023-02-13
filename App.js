import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //Axios.get(`https://graph.instagram.com/909843200147509insights?metric=impressions,reach,engagement&access_token=IGQVJYMGpGVXpOSGYzYzI3UmxCbUc1UEZADNjl3UjBTUldTc2ZAWNzlDMjd0WnpiS2xtQTVzWm1JeWZART0diYXFpZA1BjRHdnMUt2Rk1Db29TdEFTaEpmSDc5SkhKcDNJbFJGTFFxTFpicHB1X1NIVllZAdgZDZD`)
    Axios.get(`https://graph.instagram.com/me?fields=id,username,media_countt&access_token=IGQVJYMGpGVXpOSGYzYzI3UmxCbUc1UEZADNjl3UjBTUldTc2ZAWNzlDMjd0WnpiS2xtQTVzWm1JeWZART0diYXFpZA1BjRHdnMUt2Rk1Db29TdEFTaEpmSDc5SkhKcDNJbFJGTFFxTFpicHB1X1NIVllZAdgZDZD`)  
    .then(res => {
        console.log("Data:", res.data);
        setData(res.data.data);
      })
      .catch(err => console.error(err));
  }, []);

  const renderData = data.map((datum, index) => {
    return (
      <tr key={index}>
        <td>{datum.name}</td>
        <td>{datum.values[0].value}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h1>Instagram Insights</h1>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{renderData}</tbody>
      </table>
    </div>
  );
}

export default App;

