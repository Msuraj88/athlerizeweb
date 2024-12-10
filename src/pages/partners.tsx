import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

export default function Partners() {
  return (
    <div>
      <Header />
      <div className="partners-page">
        <div className="header-main">
          <h1>our partners</h1>
          <p>
            Collaborating with the best to bring you to the best
          </p>
        </div>
      </div>
      <div className="partners-section">
        <h4 className="mb-24">
          league <span style={{ color: "#0089D1" }}>franchisee’s</span>
        </h4>
        <div className="partners-card">
          <div>
            <img src="/assets/images/hh.png" />
            <p style={{ color: "#0089D1", marginTop:"24px"}}>
              Hyderabad Hunters{" "}
              <span style={{ float: "right" }}>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24902 10.4988L6.08197 5.66589L1.24902 0.832947"
                    stroke="#80C4E8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </p>
            <span className="f200">
              Hyderabad Hunters is a badminton team owned by Agile Entertainment
              Pvt. Ltd. for the Premier Badminton League (PBL).
            </span>
          </div>
          <div>
            <img src="/assets/images/hbh.png" />
            <p style={{ color: "#0089D1" }}>
              Hyderabad Black Hawks
              <span style={{ float: "right" }}>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24902 10.4988L6.08197 5.66589L1.24902 0.832947"
                    stroke="#80C4E8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </p>
            <span className="f200">
              Hyderabad Hunters is a badminton team owned by Agile Entertainment
              Pvt. Ltd. for the Premier Badminton League (PBL).
            </span>
          </div>
          
        </div>
      </div>
      <div className="partners-section">
        <h4 className="mb-24">
          official fan <span style={{ color: "#0089D1" }}>clubs</span>
        </h4>
        <div className="partners-card">
          <div>
            <img src="/assets/images/oa.png" />
            <p style={{ color: "#0089D1", marginTop:"24px" }}>
              Orange Army Fan Club{" "}
              <span style={{ float: "right" }}>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24902 10.4988L6.08197 5.66589L1.24902 0.832947"
                    stroke="#80C4E8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </p>
            <span className="f200">
              The Official Fanclub of Sunrisers Hyderabad franchise of IPL (Indian Premier  League), based in Hyderabad, India.
            </span>
          </div>
          <div>
            <img src="/assets/images/hbh.png" />
            <p style={{ color: "#0089D1" }}>
              Hyderabad Black Hawks
              <span style={{ float: "right" }}>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24902 10.4988L6.08197 5.66589L1.24902 0.832947"
                    stroke="#80C4E8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </p>
            <span className="f200">
              Hyderabad Hunters is a badminton team owned by Agile Entertainment
              Pvt. Ltd. for the Premier Badminton League (PBL).
            </span>
          </div>
        </div>
      </div>
      <div className="partners-section">
        <h4 className="mb-24">
          other <span style={{ color: "#0089D1" }}>associates</span>
        </h4>
        <div className="partners-card">
          <div>
            <img src="/assets/images/blitz.png" />
            <p style={{ color: "#0089D1", marginTop:"24px" }}>
              Blitz Group{" "}
              <span style={{ float: "right" }}>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24902 10.4988L6.08197 5.66589L1.24902 0.832947"
                    stroke="#80C4E8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </p>
            <span className="f200">
              One of the top event management company based in Hyderabad, with expertise in sports events of any size.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
