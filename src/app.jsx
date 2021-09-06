import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainContent from './components/mail-content';
import Sidebar from './components/sidebar';
import POLLS from './data/polls';
class App extends Component {
    render() {
        return (
            <Container className="my-5">
                <Row>
                    <Col md={4}>
                        <Sidebar />
                    </Col>
                    <Col md={8}>
                        <MainContent />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
