/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { NavLink } from "react-router-dom";

const ReposNav = () => (
  <div css={styles} className="reposNav">
    <NavLink activeClassName="active" to="/overview">
      Overview
    </NavLink>
    <NavLink activeClassName="active" to="/repos">
      Repos
    </NavLink>
    <NavLink activeClassName="active" to="/followers">
      Followers
    </NavLink>
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  color: #24292e;
  border-bottom: 1px solid #d1d5da;
  a {
    padding: 0 20px 17px 20px;
    text-decoration: none;
    display: block;
    &.active {
      border-bottom: 2px solid orange;
      color: #0366d6;
    }
  }
`;

export default ReposNav;
