/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./Container";
import User from "./User";
import ReposContainer from "./ReposContainer";
import ReposNav from "./ReposNav";
import Form from "./Form";

const Hero = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [overview, setOverview] = useState(null);
  const [search, setSearch] = useState("");
  const [profileOne, setProfileOne] = useState(null);
  const [profileTwo, setProfileTwo] = useState(null);
  const [profileThree, setProfileThree] = useState(null);
  const [profileFour, setProfileFour] = useState(null);

  return (
    <section css={styles} className="hero">
      <Router>
        <Form
          setUser={setUser}
          search={search}
          setSearch={setSearch}
          setRepos={setRepos}
          setFollowers={setFollowers}
          setOverview={setOverview}
          setProfileOne={setProfileOne}
          setProfileTwo={setProfileTwo}
          setProfileThree={setProfileThree}
          setProfileFour={setProfileFour}
        />
        <Container>
          <User user={user} profileOne={profileOne} />
          <div className="wrapper">
            <ReposNav />
            <ReposContainer
              repos={repos}
              overview={overview}
              followers={followers}
              profileFour={profileFour}
              profileTwo={profileTwo}
              profileThree={profileThree}
            />
          </div>
        </Container>
      </Router>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .container {
    &:not(:first-child) {
      margin: auto;
      display: flex;
      justify-content: space-between;
      .wrapper {
        width: 100%;
        max-width: 800px;
      }
    }
  }
  .noUser {
    color: red;
    font-size: 30px;
    font-weight: 500;
    line-height: 1;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 989px) {
    .container {
      &:not(:first-child) {
        padding: 30px 0;
        flex-direction: column;
        .wrapper {
          max-width: 100%;
          margin: 50px 0 0 0;
        }
      }
    }
  }
  @media (min-width: 990px) and (max-width: 1250px) {
    .container {
      &:not(:first-child) {
        .wrapper {
          max-width: 70%;
        }
      }
    }
  }
`;

export default Hero;
