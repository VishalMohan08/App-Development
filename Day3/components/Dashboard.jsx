import React from 'react';

import '../assets/css/Dashboard.css';

const Dashboard = () => {

 

  return (
    <div className="dashboard-container">
      {}
      <div className="navbar">
        <ul>
          <li>
            <a href="#organization">Events</a>
          </li>
          <li>
            <a href="#volunteer">about</a>
          </li>
        </ul>
      </div>

      {}
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <a href="dashboard">Dashboard</a>
          </li>
          <li>
            <a href="myprofile">My Profile</a>
          </li>
          <li>
            <a href="messages">Messages</a>
          </li>
        </ul>
      </div>

      {}
      <div className="main-content">
			  <ul class="grid-wrapper">
				  <li>Event 1
              
          </li>
				  <li>Event 2</li>
				  <li>Event 3</li>
          <li>Event 4</li>
          <li>Event 5</li>
          <li>Event 6</li>
			  </ul>
		  </div>
	
      {}
      <footer className="footer">
        &copy; 2023 Your Organization Name
      </footer>
    </div>
  );
};

export default Dashboard;
