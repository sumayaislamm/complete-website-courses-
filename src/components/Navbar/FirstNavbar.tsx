

const FirstNavbar = () => {
    return (
        <nav className="navbar navbar-dark bg-card  " >
            <div className="container-fluid mt-20">
                <a className="navbar-brand" href="#"
                    style={{
                        background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    {/* <img src="/logo.png" alt="Profile" width="40" height="40"  /> */}
                    <p className="fw-bold" style={{ wordSpacing: "40px" }} >  &lt;/&gt;Ilmifyyy</p>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" table-index="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{
                            background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>Sumu's All Courses</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">HTML</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CSS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">JavaScript</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">React</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Typescript</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Next.js</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PostgreSQL</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Actions
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">Strikes</a></li>
                                    <li><a className="dropdown-item" href="#">Note</a></li>
                                    <li><a className="dropdown-item" href="#">Links</a></li>
                                    <li><a className="dropdown-item" href="#">Saved</a></li>
                                    <li><a className="dropdown-item" href="#">About Me</a></li>
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default FirstNavbar;