import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      user: this.props.currentUser.id,
      modal: false
    }

    this.sendToTank = this.sendToTank.bind(this);
    this.toggleCreateTank = this.toggleCreateTank.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserTanks(this.props.currentUser.id)
  }

  sendToTank(tankId) {
    this.props.history.push(`/tanks/${tankId}`);
  }

  toggleCreateTank() {
    this.setState({modal: !this.state.modal});
  }

  updateName(e) {
    this.setState({name: e.currentTarget.value})
  }

  handleSubmit() {
    this.props.createTank(this.state)
    this.setState({
      name: '',
      modal: false
    })
  }

  renderCreateTankForm() {
    // debugger
    if (this.state.modal) {
      return (
        <div id='create-tank-form'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='name'>Name: </label>
              <input type="text"
                name='name'
                value={this.state.name}
                onChange={this.updateName.bind(this)}
                placeholder='Input Tank Name Here'
              />
          </form>
        </div>
        
      )
    } else {
      return null
    }
  }
  
  render() {
    return (
      <div id='home-page'>
        <h1 id='home-page-header'>Welcome {this.props.currentUser.username}!</h1>
        
        {this.renderCreateTankForm()}

        <ul className='home-tank-list'>
          <h2>Your Tanks:</h2>
          {this.props.userTanks.map( tank => {
            return <li key={`tank-${tank._id}`} className='home-tank-list-item' onClick={() => this.sendToTank(tank._id)}>{tank.name}</li>
          })}
        </ul>
        <button onClick={this.toggleCreateTank}>Add a Tank</button>
      </div>
    );
  }
}

export default HomePage