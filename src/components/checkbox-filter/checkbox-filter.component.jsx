import React from 'react';
import Form from 'react-bootstrap/Form';
import './checkbox-filter.styles.scss';

const CheckBoxFilter = ({className}) => {
  return (
    <div className={`checkbox-filter-container ${className}`}>
      <h1>Filters</h1>
      <Form className='form-container'>
        <Form.Group className="mb-3 form-content" controlId="filterBranches">
          <Form.Label className='form-header'>Branches</Form.Label>
          <Form.Check type="checkbox" label="All" />
          <Form.Check type="checkbox" label="Current" />
          <Form.Check type="checkbox" label="Specific Selection" />
        </Form.Group>
        <Form.Group className="mb-3 form-content" controlId="filterBrand">
          <Form.Label className='form-header'>Brand</Form.Label>
          <Form.Check type="checkbox" label="All" />
          <Form.Check type="checkbox" label="Secific Selection" />
        </Form.Group>
        <Form.Group className="mb-3 form-content" controlId="filterSearchIn">
          <Form.Label className='form-header'>Search In</Form.Label>
          <Form.Check type="checkbox" label="Marchant Part Number" />
          <Form.Check type="checkbox" label="Branch Part Nubmber" />
          <Form.Check type="checkbox" label="Designation" />
          <Form.Check type="checkbox" label="Attributes" />
        </Form.Group>
    </Form>
    </div>
  );
};

export default CheckBoxFilter;