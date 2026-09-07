import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero */}
      <section className="hero min-h-[70vh]">
        <div className="hero-content flex-col-reverse gap-10 lg:flex-row-reverse lg:gap-16">
          {/* image */}
          <div className="max-w-md">
            <img
              src={heroImage}
              alt="E-vidy"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Texte */}
          <div className="max-w-xl">
            <div className="badge badge-primary mb-4">Bienvenue sur E-vidy</div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Une plateforme pensée pour{" "}
              <span className="text-primary">vous accompagner</span>
            </h1>
            <p className="mt-6 text-base-content/70 md:text-lg">
              Que vous soyez particulier, vendeur, client ou entrepreneur,
              E-vidy vous accompagne dans vos activités au quotidien.
            </p>
            <p className="mt-4 text-base-content/70">
              Achetez, vendez, découvrez de nouveaux produits et profitez d'une
              expérience simple et agréable.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/signup" className="btn btn-primary">
                Créer un compte
              </Link>

              <Link to="/login" className="btn btn-outline">
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Pourquoir E-vidy?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
            Une plateforme qui réunit différentes expériences autour de l'achat,
            de la vente et de la découverte.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-3">
          <div className="card bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="card-body">
              <h3 className="card-title font-bold">Acheter</h3>
              <p className="text-lg text-base-content/60">
                Découvrez des produits et profitez d'une expérience d'achat
                simple et intuitive.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="card-body">
              <h3 className="card-title font-bold">Vendre</h3>
              <p className="text-lg text-base-content/60">
                Présentez vos produits et développez votre activité auprès de
                nouveaux clients.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="card-body">
              <h3 className="card-title font-bold">Découvrir</h3>
              <p className="text-lg text-base-content/60">
                Explorez de nouveaux produits et découvrez ce que la plateforme
                peut vous proposer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
