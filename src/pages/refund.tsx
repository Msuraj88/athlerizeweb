import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

const Refund = () => {
  return (
    <>
      <Header />
      <div className="pp-page">
        <div className="inside-section">
          <h5>refund policy</h5>
          <h1>
            our{" "}
            <span>
              Cancellation and <br />
              Refund Policy
            </span>
          </h1>
          <p>
            Thank you for purchasing our course/workshop at www.athlerize.com/
            operated by WhatsInTheGame Sports and Media Private Limited.
          </p>
          <p>
            Once purchased, our courses/workshops cannot be canceled and are
            non-refundable. You may however choose to join a different batch or
            let another candidate attend the course instead of you. The
            completion certificate (if any) will only be issued once and in the
            name of the candidate attending the complete course and passing the
            required examination (if any). If the replacement batch chosen by
            the candidate has a higher fee, the candidate will have to pay the
            differential amount. If the replacement batch chosen by the
            candidate has a lower fee, a credit note will be issued to the
            candidate for the differential amount via email. This credit note
            can be utilized as part / full payment of any other course offered
            by WhatsInTheGame Sports and Media Private Limited via email
            communication from team athleriZe.
          </p>
          <p>
            If you have any additional questions or would like to request a
            batch change or candidate name transfer, feel free to contact us on
            hello@athlerize.com If a candidate fails to attend the
            course/workshop and/or examination, he/she will be marked absent and
            no replacement lectures / examinations / sessions will be provided.
            The candidate is also not eligible for a refund.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Refund;
