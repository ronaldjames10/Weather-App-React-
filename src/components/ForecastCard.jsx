function ForecastCard({ day }) {
  const name = new Date(day.date).toLocaleDateString("en-US", { weekday: "short" });
  const icon = "https:" + day.day.condition.icon;

  return (
    <div className="forecast-card">
      <p className="forecast-day">{name}</p>
      <img src={icon} alt="icon" width={36} />
      <p className="forecast-temp">{Math.round(day.day.maxtemp_c)}°</p>
      <p className="forecast-min">{Math.round(day.day.mintemp_c)}°</p>
    </div>
  );
}

export default ForecastCard;