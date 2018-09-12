import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'
import GetDerivedStateFromProps from './GetDerivedStateFromProps'
import GetSnapshotBeforeUpdate from './GetSnapshotBeforeUpdate'

class App extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/derived">getDerivedStateFromProps</Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/snapshot">getSnapshotBeforeUpdate</Link>
        </p>
        <hr />
        <Router>
          <GetDerivedStateFromProps path="derived" />
          <GetSnapshotBeforeUpdate path="snapshot" />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
