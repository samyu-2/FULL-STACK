import React from 'react';
import './Studentstat.css';

const Studentstat = () => {
  return (
    <>
      <div className="student-container">
        <div className="student-form">
        <div className="form-group">
            <label>PSID :</label>
          </div>
          <div className="form-group">
            <label>TITLE :</label>
          </div>
          <div className="form-group">
            <label>STUDENTS INVOLVED :</label>
          </div>
          <div className="form-group">
            <label >IN-CHARGE FACULTIES :</label>
          </div>
          <div className="form-group">
            <label >SKILL SET :</label>
          </div>
          <div className="form-group">
            <label >DOMAIN :</label>
          </div>
          <div className="form-group">
            <label >CATEGORY :</label>
          </div>
          <div className="form-group">
            <label >STATUS :</label>
          </div>
          <div className="form-group">
            <label >GIT LINK :</label>
          </div>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="SEARCH STUDENT NAME" />
      </div>
    </>
  );
};

export default Studentstat;
