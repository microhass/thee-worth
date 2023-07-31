import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketSlice';
import SingleRocket from './SingleRocket';
import classes from './rockets.module.css';

const Rocket = () => {
  const dispatch = useDispatch();

  const { rockets, isLoading } = useSelector(
    (state) => state.rockets,
  );

  useEffect(() => {
    if (rockets?.length !== 0) return;
    dispatch(fetchRockets());
  }, [dispatch, rockets?.length]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <section className={classes.rockets}>
      {rockets.map((rocket) => (
        <SingleRocket key={rocket.id} rocket={rocket} />
      ))}
    </section>
  );
};

export default Rocket;
