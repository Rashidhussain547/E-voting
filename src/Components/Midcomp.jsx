import React from "react";
import img1 from "../Assets/Images/think.jpg";
import "./Midcomp.css";

const Midcomp = () => {
  return (
    <>
      <div className="vision-mission" data-aos="fade-right">
        <div className="vm-content">
          <div className="vm-img">
            <img src={img1} />
          </div>
          <div className="vm-text">
            <div className="ourMission">
              <h2>Platform</h2>
              <h3>Voting platform</h3>
              <div className="inner-text-vm">
                Web app-based voting platform. Send eligible voters to a
                personalized voting website, without having to download an
                online voting app.
              </div>
            </div>

            <div className="ourVision">
              <h2>Votes</h2>
              <h3>Cast votes</h3>
              <div className="inner-text-vm">
                A pleasant way to cast votes. Your voters deserve a fair and
                easy to use voting website, accessible from any device.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Midcomp;
