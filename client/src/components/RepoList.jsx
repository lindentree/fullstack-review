import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List </h4>
    There are {props.repos.length} repos. 
    
    <div>
      {props.repos.map((repo, index) =>
        <span key={index}> {repo.url}
        </span>
      )} 
    </div>

  </div>



)

export default RepoList;