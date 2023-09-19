
import client from '@mailchimp/mailchimp_marketing'
client.setConfig({
    apiKey: `${process.env.MAILCHIMP_API_KEY}`,
    server: `${process.env.MAILCHIMP_PREFIX}`,
});

export type AddToMarketingDTO = { firstName: string, lastName: string, email: string, city: string }


export async function addToMailChimp({ email, firstName, lastName, city }: AddToMarketingDTO) {
    try {
        let res = await client.lists.getListMember(`${process.env.MAILCHIMP_LIST_ID}`, email)

        res = await client.lists.updateListMember(`${process.env.MAILCHIMP_LIST_ID}`, email, { merge_fields: { FNAME: firstName, LNAME: lastName, CITY: city } })


    } catch (error) {

        console.log(error)
        let res = await client.lists.addListMember(`${process.env.MAILCHIMP_LIST_ID}`, { email_address: email, email_type: 'text', status: 'subscribed', merge_fields: { FNAME: firstName, LNAME: lastName, CITY: city } })

    } finally {

    }

}