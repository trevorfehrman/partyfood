import React, { useEffect } from 'react';
import server from '../utils/server';

const Party = ({
  match: {
    params: { id }
  }
}) => {
  useEffect(() => {
    server
      .get(`/parties/${id}`)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }, [id]);

  return <div>{id}</div>;
};

export default Party;
