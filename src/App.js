
import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          The project was cooded by Katie and is
          <a
            href="https://github.com/KatieRiches/Weather-app-react"
          >
            {" "}
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
