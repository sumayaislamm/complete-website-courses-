

const SecondNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg"
            style={{
                // marginTop: "70px",
                background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
            }}>
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Learning Path</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Catalog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">How it works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button className="btn btn-light" type="button">SignUp / Login</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default SecondNavbar;