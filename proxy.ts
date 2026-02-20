import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routes } from "@/lib/routes";

// Define an array of protected routes
const protectedRoutes: string[] = [routes.profile, `${routes.profile}/*`];

// Helper function to check if a path is protected
function isProtectedRoute(path: string): boolean {
  if (!path || protectedRoutes.length === 0) return false;
  return protectedRoutes.some((route) => {
    // For exact matches
    if (!route.includes("*")) {
      return path === route;
    }

    // For wildcard routes (e.g., /dashboard/*)
    const basePath = route.replace("/*", "");
    return path === basePath || path.startsWith(`${basePath}/`);
  });
}

export async function proxy(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  /*
    Only check if the JWT cookie exists, No validation with Strapi call — middleware runs at the edge and can't hit your backend reliably.
*/
  if (isProtectedRoute(currentPath) && !request.cookies.get("jwt")?.value) {
    return NextResponse.redirect(new URL(routes.signin, request.url));
  }

  return NextResponse.next();
}
// Configure matcher for better performance
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/profile",
    "/profile/:path*",
  ],
};
