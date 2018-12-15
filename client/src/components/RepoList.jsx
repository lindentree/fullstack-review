import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List </h4>
    There are {props.repos.length} repos. 
    
    <div className="container">
      {props.repos.map((repo, index) =>
        <span key={index}> 
        {repo.user}: <a href={repo.url}> {repo.repo_name} </a>
        </span>
      )} 
    </div>

  </div>



)

export default RepoList;