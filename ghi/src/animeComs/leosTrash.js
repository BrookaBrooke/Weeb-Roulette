import React from "react";
import { Container, Carousel, Card } from "react-bootstrap";

export const LeosTrash = () => {
  return (
    <Container className="card-carousel">
      <Carousel>
        <Carousel.Item>
          <div style={{ display: "flex" }}>
            <span className="m-2" style={{ width: "100%" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="First slide"
                  />
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                    saepe praesentium magni ratione inventore consequatur facere
                    possimus quo placeat nisi. Et quo odit aspernatur atque nisi
                    quos impedit. Perspiciatis, odio?
                  </Card.Text>
                </Card.Body>
              </Card>
            </span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex" }}>
            <span className="m-2" style={{ width: "100%" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="First slide"
                  />
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                    saepe praesentium magni ratione inventore consequatur facere
                    possimus quo placeat nisi. Et quo odit aspernatur atque nisi
                    quos impedit. Perspiciatis, odio?
                  </Card.Text>
                </Card.Body>
              </Card>
            </span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex" }}>
            <span className="m-2" style={{ width: "100%" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="First slide"
                  />
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                    saepe praesentium magni ratione inventore consequatur facere
                    possimus quo placeat nisi. Et quo odit aspernatur atque nisi
                    quos impedit. Perspiciatis, odio?
                  </Card.Text>
                </Card.Body>
              </Card>
            </span>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default LeosTrash;
