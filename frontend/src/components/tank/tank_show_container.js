import { connect } from 'react-redux';
import TankShow from './tank_show';
import { fetchTank } from '../../actions/tank_actions';
import { fetchTankLogs } from '../../actions/log_actions';


const mSTP = (state, ownProps) => {
  return {
    tankId: ownProps.match.params.tankId,
    tank: state.entities.tanks[ownProps.match.params.tankId],
    logs: Object.values(state.entities.logs)
  };
}

const mDTP = (dispatch) => ({
  fetchTank: tankId => dispatch(fetchTank(tankId)),
  fetchTankLogs: tankId => dispatch(fetchTankLogs(tankId))
});

export default connect(mSTP, mDTP)(TankShow);