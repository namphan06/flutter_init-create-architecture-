import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const revalidate = 60

export async function GET() {
    const mockData = {
        total_generated: 1240,
        unique_sessions: 980,
        top_state_mgmt: "riverpod",
        top_architecture: "feature-first",
        top_navigation: "go_router",
        be_firebase: 450,
        be_supabase: 380,
        be_appwrite: 150,
        be_custom: 120,
        be_none: 140,
        dark_mode_enabled: 950
    }
    return NextResponse.json(mockData, {
        headers: {
            "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        },
    })
}
