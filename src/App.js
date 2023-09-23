import { useState } from "react";

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=9fd8c9ba33504acc904232452231009&q=${city}&lang=pt`
    )
      .then((response) => {
        if(response.status === 200){
          return response.json();
        }
       
      })
      .then((data) => {
        setWeather(data)
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white" href="#top">
          Previsao do tempo
        </a>
      </nav>

      <main className="container">
        <div className="jumbotron">
          <h1>Verifique a previsão do tempo</h1>
          <p className="lead">Digite o nome da sua cidade</p>
        </div>
        <div className="row mb-4">
          <div className="col-mb-6">
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary btn-lg">
          Pesquisar
        </button>
        <div>
          {weather ? <img src={weather.current.condition.icon} alt="" />: null}
        </div>
        <div>
        <h3>Hoje o dia esta: {weather?weather.current.condition.text:null}</h3>
          <p>Temp: {weather?weather.current.temp_c:null} celsius</p>
        </div>
      </main>
    </div>
  );
}
export default App;
