import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SignoutButton } from "@/features/auth/components/signout-button";
import { requireAuth } from "@/lib/strapi/require-auth";

export default async function ProfilePage() {
  const user = await requireAuth();

  const initials = user.username
    .split(" ")
    .map((w: string) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const roleName =
    user.role && typeof user.role === "object" ? user.role.name : "User";

  const memberSince = new Date(user.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const provider =
    user.provider.charAt(0).toUpperCase() + user.provider.slice(1);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-semibold shrink-0">
                {initials}
              </div>
              <div className="min-w-0">
                <CardTitle className="txt-h3 truncate">
                  {user.username}
                </CardTitle>
                <CardDescription className="truncate">
                  {user.email}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <Separator />
            <dl className="flex flex-col gap-3">
              <Row label="Role" value={roleName} />
              <Row
                label="Status"
                value={
                  <Badge variant={user.confirmed ? "default" : "outline"}>
                    {user.confirmed ? "Confirmed" : "Unconfirmed"}
                  </Badge>
                }
              />
              <Row label="Member since" value={memberSince} />
              <Row label="Provider" value={provider} />
            </dl>
          </CardContent>

          <CardFooter>
            <SignoutButton className="w-full" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="txt-small text-muted-foreground shrink-0">{label}</dt>
      <dd className="txt-small font-medium text-right">{value}</dd>
    </div>
  );
}
