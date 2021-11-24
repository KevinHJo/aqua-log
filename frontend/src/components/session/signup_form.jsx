import React from 'react';
import {withRouter} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
      this.setState({errors: nextProps.errors})
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.password === this.state.password2) {
      let user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      };

      this.props.signup(user, this.props.history);
    } else {
      debugger
      this.setState({errors: 'somethin'})
    }
    
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id='session-form'>
        {this.renderErrors()}
        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          placeholder="Username"
        />

        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          placeholder="Email"
        />

        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
          placeholder="Password"
        />
        
        <input type="password"
          value={this.state.password2}
          onChange={this.update('password2')}
          placeholder="Confirm Password"
        />

        <input type="submit" value="Signup"/>
      </form>
    );
  }
}

export default withRouter(SignupForm);