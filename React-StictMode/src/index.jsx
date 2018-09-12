import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
    }
  }
  componentDidMount() {
    fetch('https://api.thecatapi.com/v1/images/search?format=json')
      .then(res => res.json())
      .then(images => {
        if (!Array.isArray(images) || images.length === 0) return
        const { url } = images[0]
        this.setState({
          url,
        })
      })
  }
  render() {
    const { url } = this.state
    return (
      <div>
        <React.StrictMode>
          <h1>React Strict Mode</h1>
          <Cat url={url} />
          <hr />
          <code>In the Chrome Dev Tools console, it will send a warning.</code>
        </React.StrictMode>
      </div>
    )
  }
}

class Cat extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    const { url } = nextProps
    if (typeof url === 'string' && url !== '') {
      console.log('The image url of the cat is: ', url)
    }
  }
  render() {
    const { url } = this.props
    if (typeof url !== 'string' || url === '') return null
    return <img src={url} alt="cat" />
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <React.StrictMode>
          <ComponentA />
        </React.StrictMode>
      </div>
    )
  }
}

export default App
