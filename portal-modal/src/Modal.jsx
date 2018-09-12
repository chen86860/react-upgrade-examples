import React from 'react'
import ReactDOM from 'react-dom'
const modalRoot = document.querySelector('#modal')

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    modalRoot.appendChild(this.el)
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }
  handleClose = () => [this.props.onClose && this.props.onClose()]
  render() {
    const { visible } = this.props
    if (!visible) return null

    return ReactDOM.createPortal(
      <div
        style={{
          backgroundColor: 'rgb(245, 245, 245)',
          width: '800px',
          height: '500px',
          margin: '0 auto',
          border: '1px solid rgb(204, 204, 204)',
          position: 'relative',
        }}
      >
        {this.props.children}
        <span
          style={{
            position: 'absolute',
            right: '20px',
            top: '20px',
            cursor: 'pointer',
          }}
          onClick={this.handleClose}
        >
          [x]
        </span>
      </div>,

      this.el
    )
  }
}
