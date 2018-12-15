import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  getInfo () {
    axios.get('http://localhost:1128/repos')
    .then(response => {
      console.log(response)
    })

  }

  search (term) {
    $.post('http://localhost:1128/repos', {term})
    // TODO
  }

  render () {
    return (<div>
      {this.getInfo()}
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));