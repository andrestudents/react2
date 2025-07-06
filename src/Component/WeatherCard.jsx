// src/components/WeatherCard.jsx

function WeatherCard({ data }) {
    return (
        <div className="mt-8 p-6 bg-red-100 rounded-full shadow-lg text-center w-80">
            <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
            <p className="text-gray-600 mb-4 italic">{data.weather[0].description}</p>
            <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                className="mx-auto"
            />
            <h3 className="text-4xl font-bold">{Math.round(data.main.temp)}°C</h3>
            <p className="text-gray-700 mt-2">Humidity: {data.main.humidity}%</p>
            <p className="text-gray-700">Wind Speed: {data.wind.speed} m/s</p>
        </div>
    );
}

export default WeatherCard;
