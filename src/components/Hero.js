const Hero = () => {
    return(
        <section>
            <div className="row">
                <div className="col-sm-6">
                    <div className="d-flex" style={{height: "100%",alignItems: "center"}}>
                        <div>
                            <p style={{fontWeight: "bold",fontSize: "28px"}}>
                            If there's a book that you want to read, but it hasn't been written yet, then you must write it.
                            </p>
                            <h5 style={{textAlign: "right"}}>Toni Morrison</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img src="./images/hero-img.jpg" alt="book store" />
                </div>
            </div>
        </section>
    )
}

export default Hero;