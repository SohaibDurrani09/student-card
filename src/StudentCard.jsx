// StudentCard.js
import logo from './assets/Unilogo.png'
import barcode from './assets/barcode.png'
import React from 'react';
import './StudentCard.css'; // Import CSS file

const StudentCard = ({ data }) => {
  return (
    <div className="container-fluid card-container">
      <div className="card">
        
        <div className="card-head m-2 mt-3">
            <img src={logo} alt="" className='uni-logo'/>
            <h5 className="card-title">Agricultue University Peshawar</h5>
        </div>
        
          <div className="profile-pic-container">
            {data.profilePic && typeof data.profilePic === 'string' ? (
              <img src={data.profilePic} alt="Profile" className="profile-pic" />
            ) : (
              data.profilePic && (
                <img src={URL.createObjectURL(data.profilePic)} alt="Profile" className="profile-pic" />
              )
            )}
          </div>
          <div className="card-body ">
          <p className="card-text"> <b>Name:</b> {data.name}</p>
          <p className="card-text"> <b>Roll Number:</b> {data.rollNumber}</p>
          <p className="card-text"> <b>Degree:</b> {data.degree}</p>
          <p className="card-text"> <b>Section:</b> {data.section}</p>
          <p className="card-text"> <b>Phone Number: </b>{data.phoneNumber}</p>
          <p className="card-text"> <b>Address: </b>{data.address}</p>
        </div>
        <div className='card-footer'>
        <div className='barcode'>
                <img src={barcode} alt="" />
        </div>
        <div className='footer-text'>
        <p>property of the University of Agriculture Peshawar,Pakistan. Online varification visit www.aup.edu.pk</p>
        
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
