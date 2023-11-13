import { addToSendGrid, contactForm, sendMail } from "@/lib/externalRequest/sendgrid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {

    let { message, email, subject, name } = await req.json() as { message: string, email: string, name: string, subject: string, interest: string }
    // city = json.city;
    let firstName, lastName = '';
    if (name.split(' ').length > 1) {
        firstName = name.split(' ')[0]
        lastName = name.split(' ')[1];
    } else {
        firstName = name.split(' ')[0]
    }
    await addToSendGrid({ email, firstName, lastName, interest: subject })
    const res = await contactForm(email, message, subject)
    if (res === 202) return NextResponse.json({ message: "success" }, { status: 200 })
    else return NextResponse.json({ message: "error occuer while adding:" }, { status: 500 })
}

