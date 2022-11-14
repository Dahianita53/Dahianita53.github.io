import './App.css';

function App() {
  return (
    <div className="App">
      <h1> bienvenidos <span> a mi pagina </span></h1>
      <div className="card" style={{width: "18rem"}}>
        <img src="yop.jpg" className="card-img-top" alt="10" />
        <div className="card-body">
          <p className="card-text"> hola me llamo carol
          <br></br>
          tengo 17 años
          <br></br>
          tengo un hijo de 10 meses</p>
        </div>
      </div>
      <button type="button" className="btn btn-outline-warning">descargar</button>

    </div>
  );
}

export default App;
