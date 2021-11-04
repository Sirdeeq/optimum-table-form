import React from 'react';
import { Col, FormGroup, Label, Input, Row } from "reactstrap";


export default function CustomInput(props) {
  return (
    <div>
       <Row>
        <FormGroup>
          <Label>{props.title}</Label>
          <Input
            type="text"
          />
        </FormGroup>
      </Row>
    </div>
  )
}
