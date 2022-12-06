import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function AnimeDetail() {
  return (
    <div>
      <Row>
        <Col>
          <Card className="mb-3" style={{ color: "pink" }}>
            <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/MOREmoji_uwu.svg/512px-MOREmoji_uwu.svg.png"></Card.Img>
          </Card>
        </Col>

        <Col>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>yo</Card.Title>
              <Card.Text>yo</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AnimeDetail;
