import React from "react";

import Tobi from "../assets/lorbarh.jpg";
import IconShare from "../assets/Iconshare.jpg";
import Button from "./Helpers/Button";
import Camera from "../assets/Icon.jpg";
const Profile = () => {
  return (
    <div className="profile">
      <div className="iconshare">
        <img src={IconShare} />
      </div>
      <div className="profile-flex">
        <img src={Tobi} id="profile__img" />
        <img src={Camera} className="icon" />
      </div>
      <div>
        <h2>Alawoki Oluwatobi</h2>
      </div>
      <Button>
        <a href="https://twitter.com/Lorbarh_" target="_blank" id="twitter">
          Twitter
        </a>
        <a
          className="hidden"
          href="https://slack.com/Lorbarh_"
          target="_blank"
          id="slack"
        >
          Slack
        </a>
      </Button>
    </div>
  );
};

export default Profile;
