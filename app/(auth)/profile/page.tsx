import { requireAuth } from "@/lib/strapi/require-auth";

export default async function ProfilePage() {
  const user = await requireAuth();
  return (
    <div>
      <h1 className="txt-h1">Profile Page</h1>
      <p>username: {user?.username}</p>
      <p>email: {user?.email}</p>
    </div>
  );
}
