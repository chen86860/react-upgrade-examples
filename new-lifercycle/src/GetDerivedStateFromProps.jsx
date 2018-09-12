import React, { Component } from 'react'

export default class GetDerivedStateFromProps extends Component {
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
        <h1>React New Lifecycle - getDerivedStateFromProps</h1>
        <Cat url={url} />
        <hr />
        <code>
          The image of cat url is from state, see the static method called getDerivedStateFromProps
          to detail.
        </code>
      </div>
    )
  }
}

class Cat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { url } = nextProps
    if (typeof url === 'string' && url !== '') {
      return {
        ...prevState,
        url,
      }
    }
    return null
  }
  render() {
    const { url } = this.state
    if (typeof url !== 'string' || url === '') return null
    return <img src={url} alt="cat" />
  }
}
