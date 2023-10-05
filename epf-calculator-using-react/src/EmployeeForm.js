import React from 'react';

const EmployeeForm = ({ basicSalary, da, handleInputChange }) => {
  return (
    <div className="employee-form">
      <h2>Employee Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="basicSalary">Basic Salary:</label>
          <input
            type="number"
            id="basicSalary"
            name="basicSalary"
            value={basicSalary}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="da">Dearness Allowance (DA):</label>
          <input
            type="number"
            id="da"
            name="da"
            value={da}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
