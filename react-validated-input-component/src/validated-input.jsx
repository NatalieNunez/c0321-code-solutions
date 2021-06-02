import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validPassword: false,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const password = event.target.value;
    this.setState({
      value: password
    });
    if (password.length >= 8) {
      this.setState({
        validPassword: true
      });
    }
  }

  render() {
    return (
      <>
        <label>
          Password
          <input
          type="password"
          minLength="8"
          required
          onChange={this.handleChange}
          />
          <i className={`fas ${this.state.validPassword ? 'fa-check valid' : 'fa-times invalid'}`}></i>
        </label>
        <h6 id={this.state.validPassword ? 'hide' : 'show'}>{this.state.value === '' ? 'A password is required' : 'Your password is too short.'}</h6>
      </>
    );
  }

}

export default ValidatedInput;
