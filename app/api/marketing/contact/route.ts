import { addToSendGrid, contactForm, sendMail } from "@/lib/externalRequest/sendgrid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {

    const { message, email, subject, name } = await req.json() as { message: string, email: string, name: string, subject: string }
    addToSendGrid({ email, name })
    const res = await contactForm(email, message, subject)
    if (res === 202) return NextResponse.json({ message: "success" }, { status: 200 })
    else return NextResponse.json({ message: "error occuer while adding:" }, { status: 500 })
}

