import React from 'react'
import ComingSoonPage from "@/components/shared/CTAHero";
import WaitListForm from "@/components/shared/WaitListForm";
import { getCities } from "@/lib/externalRequest/mailChimp";

async function JoinWaitList() {
  const cities = await getData() as Array<string>;
  return (
    <>
      <ComingSoonPage
        image="/Vision.png"
        title={"Project Skip"}
        subtitle="Join Us and Explore Limitless Possibilities in Technology, Tailored for you."
        form={<WaitListForm cities={cities}></WaitListForm>}
      />
    </>
  )
}


async function getData() {
  try {
    const choices = await getCities();

    return choices
  } catch (error) {
    console.log(error)
    return ['Denver', 'Atlanta', 'Remote']
  }
}

export default JoinWaitList