
// import client from '@mailchimp/mailchimp_marketing'
// client.setConfig({
//     apiKey: `${process.env.MAILCHIMP_API_KEY}`,
//     server: `${process.env.MAILCHIMP_PREFIX}`,
// });

// const mailingListId = process.env.MAILCHIMP_LIST_ID
// export type AddToMarketingDTO = { firstName: string, lastName: string, email: string, city: string }


// export async function addToMailChimp({ email, firstName, lastName, city }: AddToMarketingDTO) {
//     try {
//         let res = await client.lists.getListMember(`${mailingListId}`, email)
//         res = await client.lists.updateListMember(`${mailingListId}`, email, { merge_fields: { FNAME: firstName, LNAME: lastName, CITY: city } })


//     } catch (error) {

//         let res = await client.lists.addListMember(`${mailingListId}`, { email_address: email, email_type: 'text', status: 'subscribed', merge_fields: { FNAME: firstName, LNAME: lastName, CITY: city } })

//     }

// }
// export async function getCities() {
//     let res = await client.lists.getListMergeFields(`${mailingListId}`) as client.lists.MergeFieldSuccessResponse

//     for (const field of res.merge_fields) {
//         if (field.tag === 'CITY') return field.options.choices
//     }
// }