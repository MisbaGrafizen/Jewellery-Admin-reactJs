import React, { Fragment, useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import H3 from '../Headings/H3Element';


import SvgIcon from '../../Component/Common/Component/SvgIcon';

const Breadcrumbs = (props) => {
  // const { layoutURL } = useContext(CustomizerContext);
  return (
    <Fragment>
      {/* <Container fluid={true}>
        <div className='page-title'>
          <Row>
            <Col xs='6'>
              <H3>{props.mainTitle}</H3>
            </Col>
            <Col xs='6'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>

                    <SvgIcon iconId='stroke-home' />

                </li>
                <li className='breadcrumb-item'>{props.parent}</li>
                {props.subParent ? <li className='breadcrumb-item'>{props.subParent}</li> : ''}
                <li className='breadcrumb-item active'>{props.title}</li>
              </ol>
            </Col>
          </Row>
        </div>
      </Container> */}
    </Fragment>
  );
};

export default Breadcrumbs;
