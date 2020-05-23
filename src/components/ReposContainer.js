/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Route } from "react-router-dom";
import Repos from "./Repos";
import Overview from "./Overview";
import Followers from "./Followers";

const ReposContainer = ({
  repos,
  overview,
  followers,
  profileFour,
  profileTwo,
  profileThree,
}) => (
  <div css={styles} className="reposContainer">
    <Route path="/overview">
      <Overview overview={overview} profileThree={profileThree} />
    </Route>
    <Route path="/repos">
      <Repos repos={repos} profileTwo={profileTwo} />
    </Route>
    <Route path="/followers">
      <Followers followers={followers} profileFour={profileFour} />
    </Route>
  </div>
);

const styles = css`
  width: 100%;
  overflow: auto;
  height: 680px;
  max-height: 680px;
  &::-webkit-scrollbar {
    width: 1em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #142b44;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    background: #3e556f;
    outline: 1px solid slategrey;
    border-radius: 50px;
  }
  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    &::-webkit-scrollbar {
      width: 8px;
    }
    a {
      max-width: 94%;
      margin: 0 auto;
    }
  }
`;

export default ReposContainer;
