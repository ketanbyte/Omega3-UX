import React, { Component } from 'react'

export default class Badges extends Component {
  render() {
    return (
        <div>
            <button type="button" className="btn btn-primary position-relative">
  Inbox
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
        </div>


    )
  }
}