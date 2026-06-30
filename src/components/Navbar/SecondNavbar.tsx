import { Link } from "react-router-dom";


const SecondNavbar = () => {
    return (
        <nav>
            <div className="navbar text-base-content min-h-0 h-10 py-0 shadow-sm" style={{
                //  background: "linear-gradient(90deg, #15803d, #10b981)"
                // background: "linear-gradient(90deg, #16a34a, #34d399)"
                // background: "linear-gradient(90deg, #22c55e, #10b981)"
                // background: "#4F46E5"
                background: "#06B6D4"
            }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link className="px-2 py-1 hover:bg-base-300 transition-all" to="#learning-path">Learning path</Link></li>
                            <li><Link className="px-2 py-1 hover:bg-base-300 transition-all" to="#how-it-works">How it works</Link></li>
                            <li><Link className="px-2 py-1 hover:bg-base-300 transition-all" to="#catalog">Catalog </Link></li>
                            <li><Link className="px-2 py-1 hover:bg-base-300 transition-all" to="#contact">Contact us</Link></li>
                            <li><Link className="px-2 py-1 hover:bg-base-300 transition-all" to="#faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="link link-sm font-bold no-underline text-xl">Learning hub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-4 px-1 ">
                        <li className="nav-item"><Link className="px-2 py-1 hover:bg-base-300 transition-all" to="#learning-path">Learning path</Link></li>
                        <li className="nav-item"><Link className="px-2 py-1 hover:bg-base-300 transition-all" to="#how-it-works">How it works</Link></li>
                        <li className="nav-item"><Link className="px-2 py-1 hover:bg-base-300 transition-all" to="#catalog">Catalog </Link></li>
                        <li className="nav-item"><Link className="px-2 py-1 hover:bg-base-300 transition-all" to="#contact">Contact us</Link></li>
                        <li className="nav-item"><Link className="px-2 py-1 hover:bg-base-300 transition-all" to="#faq">FAQ</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-sm">Login / SignUp</a>
                </div>
            </div>
        </nav>
    );
};

export default SecondNavbar;