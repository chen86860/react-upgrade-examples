import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
    }
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    setTimeout(() => {
      const list = [...Array(100).keys()]
      this.setState(prevState => ({
        list: prevState.list.concat(list),
      }))
    }, 200)
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <ScrollingList list={list} />
        <hr />
        <code>
          With the getSnapshotBeforeUpdate method help, the scroll position can run to the bottom of
          the scroll box.
        </code>
      </div>
    )
  }
}

class ScrollingList extends Component {
  constructor(props) {
    super(props)
    this.listRef = React.createRef()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current
      return list.scrollHeight - list.scrollTop
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current
      list.scrollTop = list.scrollHeight - snapshot
    }
  }
  render() {
    const { list } = this.props
    return (
      <div>
        <h1>React New Lifecycle - getDerivedStateFromProps</h1>
        <div
          ref={this.listRef}
          style={{
            height: '500px',
            overflow: 'scroll',
            border: '1px solid #eee',
          }}
          onScroll={this.handleScroll}
        >
          {Array.isArray(list) &&
            list.map((item, index) => (
              <p
                style={{
                  backgroundColor: index % 2 === 0 ? '#ddd' : '#fff',
                }}
                key={index}
              >
                {item}
              </p>
            ))}
        </div>
      </div>
    )
  }
}
