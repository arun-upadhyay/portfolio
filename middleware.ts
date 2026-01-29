// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const maintenance = process.env.MAINTENANCE_MODE === "true";

    if (maintenance && !req.nextUrl.pathname.startsWith("/maintenance")) {
        return NextResponse.redirect(new URL("/maintenance", req.url));
    }
}
