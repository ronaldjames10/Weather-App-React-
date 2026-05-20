import ForecastCard from "./ForecastCard";

function ForecastRow({ forecastData }) {
  if (!forecastData) return null;

  const days = forecastData.forecast.forecastday;

  return (
    <div>
      <p className="section-title">5-day forecast</p>
      <div className="forecast-row">
        {days.map((d) => (
          <ForecastCard key={d.date} day={d} />
        ))}
      </div>
    </div>
  );
}

export default ForecastRow;