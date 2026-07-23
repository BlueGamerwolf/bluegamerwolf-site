import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const secret = req.headers.get("x-deploy-secret");

    if (secret !== process.env.DEPLOY_SECRET) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    return NextResponse.json({
        success: true
    });
}