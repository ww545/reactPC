import React from 'react';
import { Row, Col } from 'antd';
import Chart01 from '../../content/chart/chart01'
import './index.css';

 class Charts extends React.Component{
     render(){

         return(
             <div className="gutter-example">
                 <Chart01></Chart01>
                 <Row gutter={6}>
                     <Col className="gutter-row" span={6}>
                         <div className="gutter-box">col-6</div>
                     </Col>
                     <Col className="gutter-row" span={6}>
                         <div className="gutter-box">col-6</div>
                     </Col>
                     <Col className="gutter-row" span={6}>
                         <div className="gutter-box">col-6</div>
                     </Col>
                     <Col className="gutter-row" span={6}>
                         <div className="gutter-box">col-6</div>
                     </Col>
                 </Row>
                 <Row gutter={24}>
                     <Col className="gutter-row" span={24}>

                     </Col>
                 </Row>
             </div>
         )
     }
 }

export default Charts;