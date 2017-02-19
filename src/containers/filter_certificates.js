import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCertificates, addSelectedCertificate } from '../actions/actions_filter';
import { Link } from 'react-router';

class FilterCertificates extends Component {

  componentWillMount = () => {
    this.props.getCertificates();
  }

  certificateEvent = (event, certificate) => {
    if (event.target.checked === true) {
      this.props.addSelectedCertificate(certificate);
    }
  }

  renderCertificates = () => {
    if (this.props.allCertificates) {
      return (
        <div className="certificates">
          <div className="certificate">
            <input
              type="radio"
              name="certificate"
              id="All"
              onChange={(event) => {this.certificateEvent(event, "All")}}
            />
            <label htmlFor="All" className="radioButton">
              <label htmlFor="All" className="radioButtonSelect"></label>
            </label>
            <label className="label" htmlFor="All">All</label>
          </div>
          {this.props.allCertificates.map((item) => {
            return (
              <div className="certificate" key={item.certification}>
                <input
                  type="radio"
                  name="certificate"
                  id={item.certification}
                  onChange={(event) => {this.certificateEvent(event, item.certification)}}
                />
                <label htmlFor={item.certification} className="radioButton">
                  <label htmlFor={item.certification} className="radioButtonSelect"></label>
                </label>
                <label className="label" htmlFor={item.certification}>{item.certification}</label>
              </div>
            );
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="filterCertificates">
        {this.renderCertificates()}
        <Link to="/filter/genres">Next</Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCertificates, addSelectedCertificate }, dispatch)
}

function mapStateToProps(state) {
  return { allCertificates: state.filterReducer.allCertificates, selectedCertificate: state.filterReducer.selectedCertificate }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCertificates);
