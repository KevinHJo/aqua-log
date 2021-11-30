import React from 'react';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchUserTanks(this.props.currentUser.id)
  }

  sendToTank(tankId) {
    this.props.history.push(`/tanks/${tankId}`);
  }
  
  render() {
    return (
      <div id='home-page'>
        <h1 id='home-page-header'>Welcome {this.props.currentUser.username}!</h1>
        
        <ul className='home-tank-list'>
          <h2>Your Tanks:</h2>
          {this.props.userTanks.map( tank => {
            return <li key={`tank-${tank._id}`} className='home-tank-list-item' onClick={() => this.sendToTank(tank._id)}>{tank.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default HomePage