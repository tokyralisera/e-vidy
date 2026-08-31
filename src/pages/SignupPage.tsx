import SignupForm from "../components/auth/SignupForm";
import { Link } from "react-router-dom";
export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body space-y-6">
          <h1 className="card-title text-2xl font-bold">Créer un compte</h1>
          <p
            className="text-base-content/
          70"
          >
            Rejoignez{" "}
            <span className="uppercase text-blue-900 font-bold">E-vidy</span> et
            commencez à profiter de cette plateforme
          </p>
          <SignupForm />
          <p className="text-center text-sm">
            Déjà inscrit?{" "}
            <Link to="/login" className="link link-hover">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
