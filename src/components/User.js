/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const User = ({ user, profileOne }) => (
  <div css={styles} className="user">
    {profileOne && (
      <div className="userContainer">
        <div className="imgContainer">
          <img src={profileOne.avatar_url} alt="user" />
        </div>
        <div className="userRow">
          <div className="userInfo">
            {profileOne.name && <h2>{profileOne.name}</h2>}
            {profileOne.login && <p>{profileOne.login}</p>}
          </div>
          {profileOne.bio && (
            <div className="userDesc">
              <p> {profileOne.bio}</p>
            </div>
          )}
          <div className="userLinks">
            {profileOne.location && (
              <p>
                <i className="fas fa-map-marker-alt fa-sm"></i>
                {profileOne.location}
              </p>
            )}
            {profileOne.blog && (
              <a
                href={`https://${profileOne.blog}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-link fa-sm"></i>
                {profileOne.blog}
              </a>
            )}
          </div>
        </div>
      </div>
    )}
    {user && (
      <div className="userContainer">
        <div className="imgContainer">
          <img src={user.avatar_url} alt="user" />
        </div>
        <div className="userRow">
          <div className="userInfo">
            {user.name && <h2>{user.name}</h2>}
            {user.login && <p>{user.login}</p>}
          </div>
          {user.bio && (
            <div className="userDesc">
              <p>{user.bio}</p>
            </div>
          )}
          <div className="userLinks">
            {user.location && (
              <p>
                <i className="fas fa-map-marker-alt fa-sm"></i>
                {user.location}
              </p>
            )}
            {user.blog && (
              <a
                href={`https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-link fa-sm"></i>
                {user.blog}
              </a>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 300px;
  .userContainer {
    .imgContainer {
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .userRow {
      overflow: hidden;
      .userInfo {
        padding: 14px 0;
      }
      .userDesc {
        p {
          margin: 20px 0;
          word-wrap: break-word;
        }
      }
      .userLinks {
        padding: 14px 0;
        i {
          margin-right: 14px;
          color: #0366d6;
        }
        a {
          text-decoration: none;
          display: inline-block;
          color: #0366d6;
          padding: 6px 0 0 0;
          transition: color 400ms ease-in-out;
          word-wrap: break-word;
          &:hover {
            color: #0a4a92;
          }
        }
      }
    }
  }
  @media (max-width: 670px) {
    .userContainer {
      display: flex;
      justify-content: space-between;
      .imgContainer {
        width: 100%;
        max-width: 40%;
        height: 150px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .userRow {
        width: 100%;
        max-width: 56%;
        .userInfo,
        .userLinks {
          padding: 0;
        }
        .userDesc {
          p {
            margin: 12px 0;
          }
        }
      }
    }
  }
  @media (min-width: 671px) and (max-width: 989px) {
    .userContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .imgContainer {
        width: 100%;
        max-width: 40%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .userRow {
        width: 100%;
        max-width: 55%;
        .userInfo,
        .userLinks {
          padding: 0;
        }
      }
    }
  }
  @media (max-width: 989px) {
    max-width: 100%;
  }
  @media (min-width: 990px) and (max-width: 1200px) {
    .userContainer {
      .userRow {
        .userDesc {
          p {
            font-size: 13px;
          }
        }
      }
    }
  }
  @media (min-width: 990px) and (max-width: 1250px) {
    max-width: 26%;
  }
`;

export default User;
