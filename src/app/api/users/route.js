import connectMongoDB from "@/utils/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, password, confirmPassword } = request.json();
    if (!email || !password || password !== confirmPassword) {
        NextResponse.json({ message: 'Invalid data received' }, { status: 400 });
    }
    await connectMongoDB();
    await User.create({ email, password });
    return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}