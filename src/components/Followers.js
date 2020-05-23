/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const Followers = ({ followers, profileFour }) => (
  <React.Fragment>
    {profileFour &&
      profileFour.map((profile, index) => (
        <a
          css={styles}
          key={index}
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="followers">
            <img src={profile.avatar_url} alt="profile" />
            <p>{profile.login}</p>
          </div>
        </a>
      ))}
    {followers &&
      followers.map((follow, index) => (
        <a
          css={styles}
          key={index}
          href={follow.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="followers">
            <img src={follow.avatar_url} alt="follower" />
            <p>{follow.login}</p>
          </div>
        </a>
      ))}
  </React.Fragment>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  .followers {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    img {
      width: 50px;
      height: 50px;
      display: block;
      margin-right: 34px;
      border-radius: 4px;
    }
    p {
      padding: 6px 0 0 0;
      color: #0366d6;
    }
  }
`;

export default Followers;
