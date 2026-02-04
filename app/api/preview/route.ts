import { env } from "@/env";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const url = searchParams.get("url");
  const status = searchParams.get("status");

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== env.PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  // Validate the url parameter exists
  if (!url) {
    return new Response("Missing url parameter", { status: 400 });
  }

  // Prevent open redirects
  if (!url.startsWith("/") || url.includes("://")) {
    return new Response("Invalid redirect", { status: 400 });
  }

  const draft = await draftMode();

  if (status === "published") {
    draft.disable();
  } else {
    draft.enable();
  }

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(url);
}
