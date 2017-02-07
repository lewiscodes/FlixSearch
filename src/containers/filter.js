import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCertificate } from '../actions/actions_filter';

class Filter extends Component {
  constructor(props) {
    super(props)

    this.state = { availableCertificates: ["U", "PG", "12A", "15", "18"] }
  }

  certificateEvent(event, certificate) {
    console.log(event.target.checked);
    console.log(certificate);
  }

  renderCertificates() {
    return (
      <form>
      <h2>Certificate</h2>
        {this.state.availableCertificates.map((certificate) => {
          return (
            <input
              key={certificate}
              type="checkbox"
              onChange={(event) => {this.certificateEvent(event, certificate)}}>
            {certificate}</input>
          )
        })}
      </form>
    )
  }

  render() {
    return (
      <div>
        {this.renderCertificates()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCertificate }, dispatch)
}

function mapStateToProps(state) {
  return { certificates: state.filterReducer.certificates }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
