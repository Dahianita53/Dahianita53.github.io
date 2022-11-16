function Home() {
    return (
        <div className="App container">
            <h1> bienvenidos<span> a mi pagina </span></h1>
            <div className="row">

                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="yop.jpg" className="card-img-top" alt="10" />
                        <div className="card-body">
                            <p className="card-text"> hola me llamo carol
                                <br></br>
                                tengo 17 años
                            </p>
                        </div>
                    </div>


                </div>
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="gero.png" className="card-img-top" alt="10" />
                        <div className="card-body">
                            <p>el es mi hijo se llama geronimo
                                <br></br>
                                tiene 10 meses
                            </p>
                        </div>
                    </div>


                </div>
            </div>
            <a href="https://github.com/Dahianita53" class="btn rounded-pill px-3 mb-2 mb-lg-0>">
                <img src="git.jpg" className="card-img-top" alt="10" height={80} width9 />
                </a>
                <a href="mailto:dahianagonzales53@gmail.com" class="btn rounded-pill px-3 mb-2 mb-lg-0>">
                <img src="gmail.jpg" className="card-img-top" alt="10" height={80} width9 />
</a>
        </div>
    )
}
export default Home