import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search } from "lucide-react";

const publicLink = [
    { label: "Accueil", path: "/" },
    // ajout des routes product, category, about dans les routes ultérieurement
    { label: "Produits", path: "#" },
    { label: "Catégories", path: "#" },
    { label: "À propos", path: "#" },
]

const privateLink = [
    { label: "Connexion", path: "/login" },
    { label: "Inscription", path: "/signup" },
    // {label:"Profil", path:"/profile"},
]

export default function Navbar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedSearch = search.trim();

        if (!trimmedSearch) {
            return;
        }

        navigate(`\products?search=${encodeURIComponent(trimmedSearch)}`);

        console.log("recherche lancée : ", search);
    }

    const logo = "https://i.ibb.co/pjcTXmbQ/e-vidy-logo.png"
    
    return (
        <div className="navbar bg-base-100 px-4 shadow-md">
            {/* Logo et menu mobile */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <Menu size={22}/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        {publicLink.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path}>{ link.label }</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to="/" className="p-2">
                <img
              src={logo}
              alt="e-vidy"
              className="w-20 shadow"
            />
                </Link>
            </div>
            {/* Navigation desktop */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {publicLink.map((link) => (
                        <li key={link.path}>
                            <Link to={link.path}>{link.label}</Link></li>
                        ))}
                </ul>

                {/* barre de recherche */}
                <form className="form-control" onSubmit={handleSearch}>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="Rechercher un produit..."
                            className="input input-bordered join-item w-64"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="btn btn-primary join-item"
                        ><Search size={20} /></button>
                    </div>

                </form>
                

            </div>

            {/* Actions */}
            <div className="navbar-end gap-2">
                {privateLink.map((link) => (
                    <Link key={link.path} to={link.path} className="btn btn-ghost">{link.label}</Link>
                ))}

            </div>
        </div> 
    );
}