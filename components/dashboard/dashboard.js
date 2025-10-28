import React from "react";
import "./../../app/globals.css";
import "./dashboard.css";
import Image from "next/image";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Image src='/icon.svg' width={40} height={40} alt="Logo" />
        <p className="cati">CATI</p>
      </div>
      <div className="dashboard-body">
        
        <div className="main-navigation">
          <p className="light-text">MAIN NAVIGATION</p>
          <div className="nav-items">
            <div className="nav-item selected">
              <Image src='/dashboard.svg' width={20} height={20} alt="Logo" />
              <p>Dashboard</p>
            </div>
            <div className="nav-item">
              <Image src='/dashboard.svg' width={20} height={20} alt="Logo" />
              <p>Stocks</p>
            </div>
            <div className="nav-item">
              <Image src='/dashboard.svg' width={20} height={20} alt="Logo" />
              <p>Backtesting</p>
            </div>
            <div className="nav-item">
              <Image src='/dashboard.svg' width={20} height={20} alt="Logo" />
              <p>Trading Signals</p>
            </div>
            <div className="nav-item">
              <Image src='/dashboard.svg' width={20} height={20} alt="Logo" />
              <p>History</p>
            </div>
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
