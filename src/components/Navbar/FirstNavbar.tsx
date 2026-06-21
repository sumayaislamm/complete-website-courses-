import { Link } from "react-router-dom";


const FirstNavbar = () => {

    type NavLink = {
        id: number;
        name: string;
        href: string;
    };

    const navLinks: NavLink[] = [
        { id: 1, name: "Homepage", href: "/" },
        { id: 2, name: "HTML", href: "/html" },
        { id: 3, name: "CSS", href: "/css" },
        { id: 4, name: "JavaScript", href: "/javascript" },
        { id: 5, name: "React", href: "/react" },
        { id: 6, name: "Github", href: "/github" },
        { id: 7, name: "Typescript", href: "/typescript" },
        { id: 8, name: "Next.js", href: "/nextjs" },
        { id: 9, name: "About Us", href: "/about" },
        { id: 10, name: "Developer Portfolio", href: "/developer-portfolio" },
        { id: 11, name: "Profile", href: "/profile" },
        { id: 12, name: "Settings", href: "/settings" },
    ];
    return (
        // <nav className="navbar navbar-dark bg-card  " >
        //     <div className="container-fluid mt-20">
        //         <a className="navbar-brand" href="#"
        //             style={{
        //                 background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
        //                 WebkitBackgroundClip: "text",
        //                 WebkitTextFillColor: "transparent",
        //             }}
        //         >
        //             {/* <img src="/logo.png" alt="Profile" width="40" height="40"  /> */}
        //             <p className="fw-bold" style={{ wordSpacing: "40px" }} >  &lt;/&gt;Ilmifyyy</p>
        //         </a>

        //         <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="offcanvas offcanvas-end text-bg-dark" table-index="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        //             <div className="offcanvas-header">
        //                 <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{
        //                     background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
        //                     WebkitBackgroundClip: "text",
        //                     WebkitTextFillColor: "transparent",
        //                 }}>Sumu's All Courses</h5>
        //                 <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //             </div>
        //             <div className="offcanvas-body">
        //                 <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        //                     <li className="nav-item">
        //                         <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">HTML</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">CSS</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">JavaScript</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">React</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Github</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Typescript</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Next.js</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">PostgreSQL</a>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             Actions
        //                         </a>
        //                         <ul className="dropdown-menu dropdown-menu-dark">
        //                             <li><a className="dropdown-item" href="#">Strikes</a></li>
        //                             <li><a className="dropdown-item" href="#">Note</a></li>
        //                             <li><a className="dropdown-item" href="#">Links</a></li>
        //                             <li><a className="dropdown-item" href="#">Saved</a></li>
        //                             <li><a className="dropdown-item" href="#">About Me</a></li>
        //                             <li><a className="dropdown-item" href="#">Blog</a></li>
        //                             <li><a className="dropdown-item" href="#">Settings</a></li>
        //                             <li>
        //                                 <hr className="dropdown-divider" />
        //                             </li>
        //                             <li><a className="dropdown-item" href="#">Profile</a></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //                 <form className="d-flex mt-3" role="search">
        //                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                     <button className="btn btn-success" type="submit">Search</button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </nav>



        <nav>
            {/* <div className="drawer drawer-end">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  
                    <label htmlFor="my-drawer-5" className="drawer-button btn btn-primary">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-content min-h-full w-80 p-4">
                      
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div> */}


            <div className="navbar bg-card shadow-sm">
                <div className="navbar-start">
                    <div className="drawer drawer-end">
                        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                        <div tabIndex={0} role="button" className=" drawer-content">

                            <label htmlFor="my-drawer-5" className="drawer-button btn btn-ghost btn-circle bg-base-300 text-base-content"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                            </label>
                        </div>

                        <div className="drawer-side">
                            <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul tabIndex={-1}
                                className="menu  min-h-full w-80 p-4 menu-sm dropdown-content bg-base-content text-base-300 rounded-box z-1 mt-3 shadow">
                                {navLinks.map((link) => (
                                    <li className="hover:bg-base-200 hover:text-base-content " key={link.id}>
                                        <Link className="link link-hover" to={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="font-bold text-xl" style={{
                        background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        wordSpacing: "40px"
                    }}> &lt;/&gt;Ilmifyyy</a>
                </div>


                <div className="navbar-end">


                    {/* Search Part  */}

                    <div className="join  ">
                        <div>
                            <input className="input border border-base-content join-item bg-base-content text-base-300" placeholder="Search" />
                        </div>

                        <div>
                            <select className="select border border-base-content  bg-base-content text-base-300 join-item">
                                <option disabled selected>Filter</option>
                                <option>Sci-fi</option>
                                <option>Drama</option>
                                <option>Action</option>
                            </select>
                        </div>

                        <div>
                            <button className="link link-hover join-item bg-base-content text-base-300 p-2">Search</button>
                        </div>
                    </div>

                    {/* Notification Part */}

                    <button className="btn btn-ghost btn-circle bg-base-300 text-base-content mx-5">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                            <span className="badge badge-xs badge-error indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default FirstNavbar;