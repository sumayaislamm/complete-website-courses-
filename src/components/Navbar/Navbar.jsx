

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-dark bg-card fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Sumu's All Courses</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Sumu's All Courses</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">HTML</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">CSS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">JavaScript</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">React</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Github</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Typescript</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Next.js</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">PostgreSQL</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Actions
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li><a class="dropdown-item" href="#">Strikes</a></li>
                                        <li><a class="dropdown-item" href="#">Note</a></li>
                                        <li><a class="dropdown-item" href="#">Links</a></li>
                                        <li><a class="dropdown-item" href="#">Saved</a></li>
                                        <li><a class="dropdown-item" href="#">About Me</a></li>
                                        <li><a class="dropdown-item" href="#">Blog</a></li>
                                        <li><a class="dropdown-item" href="#">Settings</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Profile</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex mt-3" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;