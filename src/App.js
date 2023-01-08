import "./styles.css";
import SearchWeather from "./SearchWeather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchWeather defaultCity="Jyvaskyla"/>
             <div>
          <p className="myGit">
            <a href="https://github.com/Nataliia-Burmaka/weather-react">
              {" "}
              Open-source code,
            </a>
            by Nataliia Burmaka{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
