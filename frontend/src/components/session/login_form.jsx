import React from 'react';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/home');
      this.setState({errors: nextProps.errors})
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
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
      <div id='login-page'>
        <img src="https://raw.githubusercontent.com/KevinHJo/aqua-log/main/frontend/public/assets/images/sebastian-pena-lambarri-poly_hmhwJs-unsplash.jpg" alt="" />
        <form onSubmit={this.handleSubmit} id='session-form'>
          <h1>Login</h1>

          {this.renderErrors()}
          
          <div className='form-input'>
            <label htmlFor='username'>Username: </label>
            <input type="text"
              name='username'
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            /> 
          </div>
          
          <div className='form-input'>
            <label htmlFor='email'>Email: </label>
            <input type="text"
              name='email'
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
          </div>

          <div className='form-input'>
            <label htmlFor='password'>Password: </label>
            <input type="password"
              name='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
          </div>

          <input id='session-form-submit' type="submit" value="Login"/>
        </form>
      </div>
      
    );
  }
}

export default withRouter(LoginForm);