/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from "./Container";

const Form = ({
  search,
  setSearch,
  setUser,
  setRepos,
  setFollowers,
  setOverview,
  setProfileOne,
  setProfileTwo,
  setProfileThree,
  setProfileFour,
}) => {
  const history = useHistory();

  const getSearch = (e) => {
    e.preventDefault();
    getData();
    getOverview();
    getRepos();
    getFollowers();
    setSearch("");
    setProfileOne(null);
    setProfileTwo(null);
    setProfileThree(null);
    setProfileFour(null);
  };

  const myProfile = async () => {
    const responseOne = await fetch("https://api.github.com/users/h3h394");
    const dataOne = await responseOne.json();
    setProfileOne(dataOne);
    const responseTwo = await fetch(
      "https://api.github.com/users/h3h394/repos"
    );
    const dataTwo = await responseTwo.json();
    setProfileTwo(dataTwo);
    const responseThree = await fetch(
      "https://api.github.com/users/h3h394/repos?per_page=8&sort=asc"
    );
    const dataThree = await responseThree.json();
    setProfileThree(dataThree);
    const responseFour = await fetch(
      "https://api.github.com/users/h3h394/followers"
    );
    const dataFour = await responseFour.json();
    setProfileFour(dataFour);
  };

  useEffect(() => {
    myProfile();
    history.push("/overview");
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();
      if (data.message === "Not Found") {
        setUser(null);
        setRepos(null);
        setFollowers(null);
        setOverview(null);
      } else {
        setUser(data);
      }
    } catch (error) {
      setUser(null);
    }
  };

  const getRepos = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${search}/repos`);
      const data = await res.json();
      setRepos(data);
    } catch {
      setRepos(null);
    }
  };

  const getOverview = async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${search}/repos?per_page=8&sort=asc`
      );
      const data = await res.json();
      setOverview(data);
    } catch {
      setOverview(null);
    }
  };

  const getFollowers = async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${search}/followers`
      );
      const data = await res.json();
      setFollowers(data);
    } catch {
      setFollowers(null);
    }
  };

  return (
    <nav css={styles}>
      <Container>
        <form onSubmit={getSearch}>
          <input
            autoFocus={true}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for a user..."
          />
        </form>
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  padding: 14px 0;
  background: #0366d6;
  form {
    input {
      padding: 14px;
      border: none;
      border-radius: 4px;
      outline: none;
      background: #142b44;
      color: orange;
      width: 100%;
      max-width: 300px;
      &::placeholder {
        color: orange;
      }
    }
  }
`;

export default Form;
