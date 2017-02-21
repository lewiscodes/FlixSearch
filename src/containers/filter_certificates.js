import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { getCertificates, addSelectedCertificate } from '../actions/actions_filter';
import RadioButton from '../components/radiobutton';

class FilterCertificates extends Component {

  componentWillMount = () => {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    document.body.classList.add('backgroundImage' + randomNumber);
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
        <div className="radiobuttons certificates">
          <RadioButton
            mainClass="certificate"
            name="All"
            key="All"
            changeEvent={this.certificateEvent}
          />
          {this.props.allCertificates.map((item) => {
            return (
              <RadioButton
                mainClass="certificate"
                name={item.certification}
                key={item.certification}
                changeEvent={this.certificateEvent}
              />
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
        <Link className="nextButton" to="/filter/genres">Next</Link>
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
