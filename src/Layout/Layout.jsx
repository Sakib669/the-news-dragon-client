import React from 'react';
import Header from '../Pages/Home/Shared/Header/Header';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../Pages/Home/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Home/Shared/RightNav/RightNav';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col sm={6}>
                        <h2>Main Content coming</h2>
                    </Col>

                    <Col sm={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Layout;