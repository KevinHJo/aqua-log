import React from 'react';

class TankShow extends React.Component {
  constructor(props) {
    super(props);

    this.renderTank = this.renderTank.bind(this);
    this.sendToLog = this.sendToLog.bind(this);
  }

  componentDidMount() {
    if (!this.props.tank) {
      this.props.fetchTank(this.props.tankId)
    }

    this.props.fetchTankLogs(this.props.tankId)
  }

  sendToLog(logId) {
    this.props.history.push(`/logs/${logId}`);
  }
  
  renderTank() {
    if (this.props.tank && this.props.logs) {
      const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      const timeOptions = {
        hour: '2-digit',
        minute: '2-digit'
      }

      return (
        <div>
          <h1>{this.props.tank.name}</h1>
          <ul>
            {this.props.logs.map( log => {
              return (
                <li key={`log-${log._id}`} className='home-log-list-item' onClick={() => this.sendToLog(log._id)}>
                  <p>{new Date(log.date).toLocaleDateString(undefined, dateOptions)} - {new Date(log.date).toLocaleTimeString([], timeOptions)}</p>
                </li>
              )
            })}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    return this.renderTank()
  }
}

export default TankShow;