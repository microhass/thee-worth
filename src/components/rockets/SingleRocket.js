import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { rocketActions } from '../../redux/rockets/rocketSlice';
import classes from './rockets.module.css';

const SingleRocket = ({ rocket }) => {
  const {
    id, name, description, image, reserved,
  } = rocket;
  const dispatch = useDispatch();

  const toggleReservation = () => {
    dispatch(rocketActions.toggleRocketReservation(id));
  };

  return (
    <div className={classes.rocket}>
      <div className={classes.image}>
        <img src={image} alt={name} />
      </div>
      <div className="rocket-desc">
        <h3 className={classes.title}>{name}</h3>
        <p className={classes.description}>
          {reserved && (
            <span className={classes.badge}>Reserved </span>
          )}
          {description}
        </p>

        {reserved ? (
          <button
            type="button"
            title="Cancel Reservation"
            onClick={toggleReservation}
            className={classes.cancel}
          >
            cancel reservation
          </button>
        ) : (
          <button
            type="button"
            title="Reserve Rocket"
            onClick={toggleReservation}
            className={classes.reserve}
          >
            reserve rocket
          </button>
        )}
      </div>
    </div>
  );
};

SingleRocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};

SingleRocket.defaultProps = {
  rocket: {
    id: 1,
    image: '',
    name: 'rocket',
    description: '',
    reserved: false,
  },
};

export default SingleRocket;
