import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const TextInput = React.forwardRef((props, ref) => (
  <input type="text" placeholder="Hello to forwardRef" ref={ref} />
))
const inputRef = React.createRef()

class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  handleSubmit = event => {
    event.preventDefault()
    alert('input value is:' + inputRef.current.value)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
