'use server'
import { addToSendGrid, sendMailHtml } from "@/lib/externalRequest/sendgrid";
const template = `<div>
<p>Contact filled by {{name}} </p>

<p>Details below: </p>
<p>Age: {{ageRange}}</p>
<p>Gender: {{gender}}</p>
<p>Education level: {{edu}}</p>
<p>Ethnicity: {{ethinicity}}</p>
<p>interest: {{interest}}</p>

<p>Lead Source: {{referral}}</p>
<div style="padding: 4px;">
    Contact info:
    <div style="margin-left: 10px;">
        <p>name: {{name}}</p>
        <p>email: {{email}}</p>
    </div>
</div>
<p>Wants to recieve Emails: {{emailLetter}}</p>
<p>Wants to Volunteer: {{volunteering}}</p>

<p>Questions/message: {{message}}</p>
</div>`
export async function submit(formData: FormData): Promise<number> {
    //console.log(formData);
    try {
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const city = formData.get('city') as string
        const interest = formData.get('interest') as string
        const ageRange = formData.get('ageRange') as string;
        const gender = formData.get('gender') as string;
        const edu = formData.get('edu') as string;
        const ethinicity = formData.get('ethinicity') as string;
        const emailLetter = formData.get('emailLetter') as string;
        const volunteering = formData.get('volunteering') ? 'True' : 'False';
        const message = formData.get('message') as string;
        const referral = formData.get('referral') ? 'True' : 'False';
        let firstName, lastName = '';
        if (name.split(' ').length > 1) {
            firstName = name.split(' ')[0]
            lastName = name.split(' ')[1];
        } else {
            firstName = name.split(' ')[0]
        }
        const data: { [key: string]: string } = { name, interest, city, email, ageRange, edu, gender, message, referral, ethinicity, emailLetter, volunteering }
        console.log(data); 
        await addToSendGrid({ city, email, firstName, lastName, interest: interest })

        const response = await sendMailHtml(formData.get('email') as string,
            process.env.CONTACT_EMAIL as string,
            "Project-skip waitlist filled",

            `${template.replace(/{{(.*?)}}/g, (match, key) => data[key.trim()] || '')}`)
        return 202

    } catch (error) {
        console.log(error);
        return 500
    }


}