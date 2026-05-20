function MainWeatherCard({ data }) {
  const temp = Math.round(data.current.temp_c);
  const icon = "https:" + data.current.condition.icon;

  return (
    <div className="main-card">
      <h2>{data.location.name}</h2>
      <p className="country">{data.location.country}</p>
      <div className="temp-row">
        <img src={icon} alt="weather icon" width={60} />
        <span className="temp-big">{temp}°C</span>
      </div>
      <p className="description">{data.current.condition.text}</p>
    </div>
  );
}

export default MainWeatherCard;