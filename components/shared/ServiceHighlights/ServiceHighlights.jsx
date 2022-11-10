export default function ServiceHighlights() {
  return (
    <section className="service-highlights__container">
      <div className="service-highlights__content">
        <figure className="service-highlights__card">
          <img
            alt="Service Highlights"
            className="service-highlights__card__icon"
            src="/images/icons/cert-black.svg"
          />
          <div>
            <h3 className="service-highlights__card__title">
              IICRC & EPA Certified
            </h3>
            <p className="service-highlights__card__text">
              Officially licensed by the Institute of Inspection Cleaning and
              Restoration Certification as well as the EPA. We have the know-how
              to get it done right.
            </p>
            {/* <button className="btn--fluid bt-secondary">Learn More</button> */}
          </div>
        </figure>
        <figure className="service-highlights__card">
          <img
            alt="Service Highlights"
            className="service-highlights__card__icon"
            src="/images/icons/bill-black.svg"
          />
          <div>
            <h3 className="service-highlights__card__title">
              Easy Billing Process
            </h3>
            <p className="service-highlights__card__text">
              We use industry standard pricing with Xactimate to generate your
              invoice and make it easy to send off to your insurance for
              payment.
            </p>
            {/* <button className="btn--fluid bt-secondary">Click Me</button> */}
          </div>
        </figure>
        <figure className="service-highlights__card">
          <img
            alt="Service Highlights"
            className="service-highlights__card__icon"
            src="/images/icons/emergency-black.svg"
          />
          <div>
            <h3 className="service-highlights__card__title">
              24 Hour Emergency Response
            </h3>
            <p className="service-highlights__card__text">
              Emergencies happen at all hours. We respond 24/7 across East Idaho
              and Western Wyoming. We’re at your door before you know it.
            </p>
            {/* <button className="btn--fluid bt-secondary">More</button> */}
          </div>
        </figure>
      </div>
    </section>
  );
}
