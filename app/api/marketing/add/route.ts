import { AddToMarketingDTO, addToMailChimp, getCities } from "@/lib/externalRequest/mailChimp";
import { addToSendGrid } from "@/lib/externalRequest/sendgrid";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    let name, email, city;

    const json = await req.json() as { name: string, email: string, city: string };
    name = json.name;
    email = json.email;
    city = json.city;
    let firstName, lastName = '';
    if (name.split(' ').length > 1) {
        firstName = name.split(' ')[0]
        lastName = name.split(' ')[1];
    } else {
        firstName = name.split(' ')[0]
    }
    await addToSendGrid({ firstName, lastName, email, city })
    return NextResponse.json({ message: "success" }, { status: 200 })
}

export async function GET(req: Request) {
    const choices = await getCities()
    return NextResponse.json({ message: "success", choices }, { status: 200 })
}