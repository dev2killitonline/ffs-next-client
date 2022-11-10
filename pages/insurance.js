import Head from "next/head";
import Page from "../components/Page";
import ContactUsComp from "../components/shared/Contact/ContactUsComp";

export default function Insurance() {
  return (
    <Page>
      <Head>
        <title>Insurance - Flood & Fire Solutions</title>
        <meta
          name="description"
          content="Flood & Fire Solutions works with all insurance providers. We make it easy to submit your invoice to insurance for payment. Have questions? Give us a call."
        />
        <link
          rel="canonical"
          href="https://floodandfiresolutions.com/insurance"
        />
      </Head>
      <div className="insurance">
        <div className="page__container">
          <article className="format-text">
            <h1>Insurance Claims in Idaho Falls</h1>
            <p>
              For most people that experience a flood, fire, or other natural
              disaster, it is likely the first time that something of this
              magnitude has ever happened to them. At Flood & Fire Solutions, we
              understand that there are a number of questions that come to mind
              as the initial shock subsides.
            </p>
            <img
              className="insurance-image"
              src="/images/webp/insurance-logos-compressed.webp"
              alt="Insurance Logos"
            />
            <h2 className="txt-burg">
              Navigating through the insurance claims process
            </h2>
            <p>
              Flood & Fire Solutions is a preferred vendor for many national and
              local insurance companies. We work with all major insurance
              providers, and can help you navigate the entire claims process
              quickly and efficiently. The following offers a general road map
              for navigating the entire process.
            </p>
            <h3>
              <span className="insurance-step-title">Step 1:</span> Mitigating
              Damage
            </h3>
            <p>
              Written in most insurance policies is a breakdown of what is
              covered and not covered. It will also state that in an emergency,
              action needs to be taken immediately to prevent any further loss.
              This provides a surety that we can start right away in saving what
              matters to you in case your insurance agent is not available or
              their office is closed.
            </p>
            <h3>
              <span className="insurance-step-title">Step 2:</span> Submit Your
              Claim
            </h3>
            <p>
              With the help of multi-certified technicians to document and care
              for your loss, our team works to submit every important piece of
              information to your insurance agents and adjusters. A claim number
              will be issued for your loss as we begin to plan our next steps in
              your individual restoration process.
            </p>
            <h3>
              <span className="insurance-step-title">Step 3:</span> Adjusters
            </h3>
            <p>
              In 1-5 days, an adjuster will show up on site to review the
              damages. At this time, we also like to speak to the adjuster to
              explain observations that we may have made. We will go over
              reasons for things we have moved, fixed, unplugged or blocked off.
            </p>
            <h3>
              <span className="insurance-step-title">Step 4:</span> Wrapping
              Everything Up
            </h3>
            <p>
              As the repairs near completion, questions about billing typically
              arise. In many cases, the costs of our services will be paid by
              your insurance provider directly. In some instances, however, your
              insurance provider may issue you a check as the property owner,
              and in those cases you will ultimately be responsible for payment
              upon completion of the work. If you have any questions about our
              services, how we work with insurance providers, or anything else
              related to the insurance process, please feel free to call us at
              (208) 521-9741.
            </p>
          </article>
          <ContactUsComp />
        </div>
      </div>
    </Page>
  );
}
