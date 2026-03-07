import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./home.css";


function Home() {

  const [ph, setPh] = useState(null);
  const [temp, setTemp] = useState(null);
  const [turbidity, setTurbidity] = useState(null);
  const [tds, setTds] = useState(null);
  const [orp, setOrp] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thingspeak.com/channels/3228815/feeds.json?results=1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        const latest = data.feeds[0];

        if (!latest) return;

        setPh(Number(latest.field2));
        setTemp(Number(latest.field1));
        setTurbidity(Number(latest.field4));
        setTds(Number(latest.field3));
        setOrp(Number(latest.field5));

        setLoading(false);

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData(); // first load

    const interval = setInterval(fetchData, 15000); // refresh every 15 sec

    return () => clearInterval(interval); // cleanup

  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />

      <div className="header">
        <h1>Live Water Quality Readings</h1>
        <p>Real-time monitoring of water parameters</p>
      </div>

      <div className="dashboard">

        <div className="card">
          <div className={`circle ${ph > 9.5 || ph < 6 ? "danger" : ph > 6.5 && ph < 8.5 ? "safe" : "warning"}`}>
            {ph ?? 0} pH
          </div>
          <h3>pH Level</h3>
        </div>

        <div className="card">
          <div className={`circle ${temp >10 && temp < 30 ? "safe" : temp >= 30 && temp <= 35 ? "warning" : "danger"}`}>
            {temp ?? 0} °C
          </div>
          <h3>Temperature</h3>
        </div>

        <div className="card">
          <div className={`circle ${turbidity < 2.5 ? "safe" : turbidity < 5 ? "warning" : "danger"}`}>
            {turbidity ?? 0} NTU
          </div>
          <h3>Turbidity</h3>
        </div>

        <div className="card">
          <div className={`circle ${tds < 500 ? "safe" : tds < 1000 ? "warning" : "danger"}`}>
            {tds ?? 0} ppm
          </div>
          <h3>TDS</h3>
        </div>

      </div>

      {/* Center ORP Card */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "150px" }}>
        <div className="card" style={{ width: "300px" }}>
          <div className={`circle ${orp > 300 ? "safe" : orp > 200 ? "warning" : "danger"}`}>
            {orp ?? 0} mV
          </div>
          <h3>ORP</h3>
        </div>
      </div>

    </>
  );
}

export default Home;
