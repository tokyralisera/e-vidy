import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <h1>Accueil</h1>
      <div className="flex flex-col gap-3">
        <p>
          Cliquez ici pour{" "}
          <Link to="/login" className="link link-primary">
            Se connecter
          </Link>{" "}
          à votre compte ou pour{" "}
          <Link to="/signup" className="link link-secondary">
            s'inscrire
          </Link>
        </p>
      </div>
    </main>
  );
}
