import React from 'react';
import './Notifications.css';
import { getLatestNotifications } from './utils';

function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style ={{
          position: 'absolute',
          right: '1rem',
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotifications() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;