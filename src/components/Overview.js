/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Overview = ({ overview, profileThree }) => {
  let id = 0;

  return (
    <div css={styles} className="overviewContainer">
      {profileThree &&
        profileThree.map((profile, index) => (
          <a
            key={index}
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={"overview overview-" + ++id}>
              {profile.name && <h2>{profile.name}</h2>}
              {profile.language && (
                <p>
                  <span></span>
                  {profile.language}
                </p>
              )}
            </div>
          </a>
        ))}
      {overview &&
        overview.map((item, index) => (
          <a
            key={index}
            href={item.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={"overview overview-" + ++id}>
              {item.name && <h2>{item.name}</h2>}
              {item.language && (
                <p>
                  <span></span>
                  {item.language}
                </p>
              )}
            </div>
          </a>
        ))}
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0 0 0;
  a {
    color: #0366d6;
    text-decoration: none;
    height: 120px;
    width: 100%;
    max-width: 48%;
    margin-bottom: 20px;
    .overview {
      width: 100%;
      height: 100%;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-weight: 500;
        font-size: 20px;
      }
      p {
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
      &.overview-7,
      &.overview-8 {
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 670px) {
    flex-direction: column;
    a {
      max-width: 94%;
    }
  }
`;

export default Overview;
