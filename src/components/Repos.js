/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const Repos = ({ repos, profileTwo }) => (
  <React.Fragment>
    {profileTwo &&
      profileTwo.map((profile, index) => (
        <a
          css={styles}
          key={index}
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="repos">
            {profile.name && <p>{profile.name}</p>}
            <div className="repoInfo">
              {profile.language && (
                <p>
                  <span></span>
                  {profile.language}
                </p>
              )}
              {profile.updated_at && <p>{profile.updated_at}</p>}
            </div>
          </div>
        </a>
      ))}
    {repos &&
      repos.map((repo, index) => (
        <a
          css={styles}
          key={index}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="repos">
            {repo.name && <p>{repo.name}</p>}
            <div className="repoInfo">
              {repo.language && (
                <p>
                  <span></span>
                  {repo.language}
                </p>
              )}
              {repo.updated_at && <p>{repo.updated_at}</p>}
            </div>
          </div>
        </a>
      ))}
  </React.Fragment>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid #e1e4e8;
  }
  .repos {
    width: 100%;
    padding: 20px 0;
    > p {
      color: #0366d6;
    }
    .repoInfo {
      display: flex;
      padding: 16px 0 0 0;
      p {
        color: #586069;
        font-size: 14px;
        display: flex;
        align-items: center;
        span {
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: yellow;
          color: yellow;
          margin-right: 8px;
        }
      }
    }
  }
`;

export default Repos;
