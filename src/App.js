// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Form from './Form';
import StudentCard from './StudentCard';

const App = () => {
  const [studentData, setStudentData] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (data) => {
    setStudentData(data);
    setShowForm(false);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {showForm && <Form onSubmit={handleSubmit} />}
            {!showForm && studentData && <StudentCard data={studentData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
