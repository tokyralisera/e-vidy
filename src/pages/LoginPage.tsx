import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body space-y-6">
          <h1 className="card-title text-2xl font-bold">
            Connecter vous à votre compte
          </h1>
          <p
            className="text-base-content/
          70"
          >
            Nous vous souhaitons une bonne expérience sur{" "}
            <span className="uppercase text-blue-900 font-bold">E-vidy</span>
          </p>
          <LoginForm />
          <p className="text-center text-sm">
            Vous n'avez pas encore de compte?{" "}
            <Link to="/signup" className="link link-hover">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
