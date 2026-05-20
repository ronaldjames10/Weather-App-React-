function WeatherStats({ data }) {
  const c = data.current;

  const stats = [
    { label: "Feels like",  value: Math.round(c.feelslike_c) + "°C" },
    { label: "Humidity",    value: c.humidity + "%" },
    { label: "Wind",        value: c.wind_kph + " kph" },
    { label: "Pressure",    value: c.pressure_mb + " mb" },
    { label: "Visibility",  value: c.vis_km + " km" },
    { label: "UV Index",    value: c.uv },
    { label: "AQI (US)",    value: c.air_quality?.["us-epa-index"] ?? "N/A" },
    { label: "Cloud Cover", value: c.cloud + "%" },
  ];

  return (
    <div className="stats-section">
      <p className="section-title">Details</p>
      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <p className="stat-label">{s.label}</p>
            <p className="stat-value">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherStats;