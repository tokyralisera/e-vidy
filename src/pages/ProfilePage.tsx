import type { Profile } from "../types/profile";
import Button from "../components/common/Button";

export default function ProfilePage() {
  const profile: Profile = {
    id: "mon-id",
    username: "Test profile",
    fullname: "Username Test Profile",
    avatar_url: "null",
    created_at: "2026-08-28t09:01:06.365403+00:00",
    updated_at: "2026-08-28t09:01:06.365403+00:00",
  };
  return (
    <main className="min-h-screen bg-base-200 p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-3xl font-bold">Mon profil</h1>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <div className="avatar placeholder">
                <div className="w-25 rounded-full bg-neutral text-neutral-content text-center justify-center items-center">
                  <span className="text-xl">
                    {profile.avatar_url === "null" ? "votre photo ici" : ""}
                  </span>
                </div>
              </div>

              <div>
                <h2 className="card-title">{profile.username}</h2>
                <p className="text-base-content/60">{profile.fullname}</p>
              </div>
            </div>

            <div className="divider" />
            <div className="space-y-3">
              <div>
                <p className="text-sm text-base-content/60">Identifiant</p>
                <p>{profile.username}</p>
              </div>
              <div>
                <p className="text-sm text-base-content/60">Nom complet</p>
                <p>{profile.fullname}</p>
              </div>
            </div>
            <div className="card-actions justify-end mt-6">
              <Button variant="primary" type="button">
                Modifier le profil
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
