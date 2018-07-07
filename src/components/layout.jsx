import React from 'react';
import {Row, Col, Card} from 'reactstrap';

/**
 * Renders as a horizontal line, with a fairly tall margin on top and bottom
 */
export const Divider = function (props) {
  return (
    <Row>
      <Col style={{ paddingTop: '1em' }} sm="12" md={{ size: 8, offset: 2 }}>
        <Card style={{ margin: '2em' }}>
        </Card>
      </Col>
    </Row>
  )
}

/**
 * Centers children in the screen.
 */
export const Centered = function (props) {
  return (
    <Row>
      <Col style={{ paddingTop: '1em' }} sm="12" md={{ size: 8, offset: 2 }}>
        {props.children}
      </Col>
    </Row>
  )
}