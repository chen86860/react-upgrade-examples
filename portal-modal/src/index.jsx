import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }
  handleOpen = () => {
    this.setState({
      visible: true,
    })
  }
  handleClose = () => {
    this.setState({
      visible: false,
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOpen}>Open</button>
        <Modal visible={this.state.visible} onClose={this.handleClose}>
          <Child />
        </Modal>
      </div>
    )
  }
}

class Child extends React.Component {
  render() {
    return <div>Hello Modal!</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
