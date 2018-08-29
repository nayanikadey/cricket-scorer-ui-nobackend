import React from 'react';
import { Table, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const generateHeaders = headers =>
  headers.map(header => (
    <th className="right-borders">{header}</th>
  ));

export const renderTableRows = dataValues =>
  dataValues.map(sinagleRow => (
    <tr>{sinagleRow.map(data => (<td className={data.className}>{data.value}</td>))}</tr>
  ));


const StatsDetails = props => (
  <div>
    <Row>
      <Col>
        <h6>{props.tableHeader}</h6>
      </Col>
    </Row>
    <Row>
      <Col>
        <Table striped className="side-borders" size="sm">
          <thead className="dark-table-header">
            <tr>
              {generateHeaders(props.StatsHeader)}
            </tr>
          </thead>
          <tbody>
            {renderTableRows(props.getDatatoRender(props))}
          </tbody>
        </Table>
      </Col>
    </Row>
  </div>
);

StatsDetails.propTypes = {
  tableHeader: PropTypes.string.isRequired,
  StatsHeader: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
  getDatatoRender: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export { StatsDetails };
