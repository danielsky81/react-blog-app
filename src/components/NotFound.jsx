import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oups</h2>
      <p>That page cannot be found</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  )
}

export default NotFound
