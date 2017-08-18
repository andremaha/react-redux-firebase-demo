import _ from 'lodash'
import React, { Component } from 'react'

export default class Invite extends Component {

  constructor() {
    super();

    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    this.props.onGetInvite()
  }

  renderGuests() {

    const { guests }  = this.props.invite

    if (!guests) {
      return(
        ''
      )
    }

    return (
      <ul>
        {
          _.map(guests, (guest, key) => {
            return <li key={ key }>{ guest.name }</li>
          })
        }
      </ul>
    )
  }

  render() {
    const { agenda, host } = this.props.invite

    return (
      <div>
        <h1>{ agenda }</h1>
        <h2>{ host }</h2>
          { this.renderGuests() }
        <h3>Join?</h3>
        <input
          type="text"
          value={ this.state.name }
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={
            () => {
              this.props.onAddToInvite(this.state.name)
              this.setState({ name: '' })
            }
          }
        >
          I am coming!
        </button>
      </div>


  )
  }

}