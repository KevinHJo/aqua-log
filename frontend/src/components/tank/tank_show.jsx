import React from 'react';

class TankShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logType: '',
      value: '',
      tank: this.props.tankId,
      user: this.props.currentUser.id,
      date: new Date().toISOString().slice(0, 10),
      modal: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderTank = this.renderTank.bind(this);
    this.sendToLog = this.sendToLog.bind(this);
    this.toggleCreateLogForm = this.toggleCreateLogForm.bind(this)
  }

  componentDidMount() {
    if (!this.props.tank) {
      this.props.fetchTank(this.props.tankId)
    }

    this.props.fetchTankLogs(this.props.tankId)
  }

  handleSubmit() {
    debugger
    this.props.createLog({
      logType: this.state.logType,
      value: this.state.value,
      tank: this.state.tank,
      user: this.state.user,
      date: new Date(this.state.date),
    });

    this.setState({
      logType: '',
      value: '',
      tank: this.props.tankId,
      user: this.props.currentUser.id,
      date: new Date().toISOString().slice(0, 10),
      modal: false
    })
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  sendToLog(logId) {
    this.props.history.push(`/logs/${logId}`);
  }

  toggleCreateLogForm() {
    this.setState({modal: !this.state.modal})
  }

  renderCreateLogForm() {
    if (this.state.modal) {
      return (
        <div id='create-tank-form-container'>
          <form id='create-tank-form' onSubmit={this.handleSubmit}>
            <label htmlFor='logType'>Value: </label>
            <select name='logType' onChange={this.update('logType')} defaultValue="">
              <option className='disabled-option' value="" disabled>Select a Parameter</option>
              <option value="temperature">Temperature</option>
              <option value="ammonia">Ammonia</option>
              <option value="nitrite">Nitrite</option>
              <option value="nitrate">Nitrate</option>
              <option value="pH">pH</option>
              <option value="salinity">Salinity</option>
              <option value="alkalinity">Alkalinity</option>
              <option value="phosphate">Phosphate</option>
              <option value="calcium">Calcium</option>
              <option value="magnesium">Magnesium</option>
              <option value="iodine">Iodine</option>
              <option value="strontium">Strontium</option>
            </select>

            <label htmlFor='value'>Value: </label>
            <input type="number"
              name='value'
              step='any'
              value={this.state.value}
              min='0'
              max='200'
              placeholder='Input a value'
              onChange={this.update('value')}
            />

            <label htmlFor='date'>Date: </label>
            <input type="date" 
              name='date'
              value={this.state.date}
              onChange={this.update('date')}
            />

            <input type="submit" value='Create Log'/>
          </form>
        </div>
      )
    } else {
      return null
    }
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
        <div id='tank-show-page'>
          <h1 id='tank-show-name'>{this.props.tank.name}</h1>

          {this.renderCreateLogForm()}

          <ul id='tank-log-list'>
            <h2>Logs</h2>
            {this.props.logs.map( log => {
              return (
                <li key={`log-${log._id}`} className='tank-log-list-item' onClick={() => this.sendToLog(log._id)}>
                  <p>{new Date(log.date).toLocaleDateString(undefined, dateOptions)} - {new Date(log.date).toLocaleTimeString([], timeOptions)}</p>
                </li>
              )
            })}
          </ul>

          <button onClick={this.toggleCreateLogForm}>Create New Log</button>
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