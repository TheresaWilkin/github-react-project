import React from 'react';
import ReactDOM from 'react-dom';

const Results = (props) => {
  let reposList = props.repos.map(repo => {
    return <li>{props.user.username} {repo.name} </li>
  });
  return (
    <div>
      <ul>
          {reposList}
      </ul>
    </div>
  );
};

export default Results;

/*
For each repo:
  Repo name w/ link
  Repo description
  Date created
  Number of forks & issues
  # of watchers & stargazers
*/
