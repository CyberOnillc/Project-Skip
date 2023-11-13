import React from 'react'
import ComingSoonPage from "@/components/shared/CTAHero";
import WaitListForm from "@/components/shared/WaitListForm";

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

  return ['Denver', 'Atlanta', 'Remote']
}

export default JoinWaitList