import React from 'react';
import ReactDOM from 'react-dom';

const Results = (props) => {
  return (
    <div>
      <ul>
        <li>{props.results}</li>
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
