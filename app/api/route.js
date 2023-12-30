import { NextResponse } from "next/server";


export async function GET (req) {
    return NextResponse.json({ time: new Date().toLocaleDateString()});
}

module.exports = {
    DB_URI,
};