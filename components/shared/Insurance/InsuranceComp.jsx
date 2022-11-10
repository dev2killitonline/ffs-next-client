import Link from "next/link";
import React, { useState, useEffect } from "react";

function InsuranceComp() {
  return (
    <section className="insurance-comp__container format-text">
      <h2 className="txt-primary">Insurance: We Make It Easy</h2>
      <Link href="/insurance">
        <a className="insurance-comp__link">
          <img
            src="/images/webp/insurance-logos-compressed.webp"
            alt="Insurance Logos"
          />
          <p>
            Property damage claims can be confusing, especially if it's your
            first time. Luckily you have us. We navigate insurance claims
            everyday. Our team can walk you through everything from creating a
            claim to submitting for payment.
          </p>
          <p>
            We’re licensed, insured, and experienced. Those are the most
            important things your insurance carrier will be looking for in a
            restoration company. We are able to work with every major carrier
            and even the small ones too.
          </p>
          <p>
            In the case your loss is not covered, we are able to provide
            affordable payment plans to work within your budget.
          </p>
        </a>
      </Link>
    </section>
  );
}

export default InsuranceComp;
