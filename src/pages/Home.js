function Home() {
    return (
        <div className="App container">
            <h1> bienvenidos<span> a mi pagina </span></h1>
            <div className="row">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="col">
                        <img src="yop.jpg" className="card-img-top" alt="10" />
                    </div>

                    <div className="card-body">
                        <p className="card-text"> hola me llamo carol
                            <br></br>
                            tengo 17 años
                        </p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="col">
                        <img src="gero.jpg" className="card-img-top" alt="10" />
                    </div>

                    <div className="card-body">
                        <p>el es mi hijo se llama geronimo
                            <br></br>
                            tiene 10 meses
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home