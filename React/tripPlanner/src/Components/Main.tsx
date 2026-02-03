import {
  // DropdownItem,
  // DropdownButton,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  // FormText,
  FormSelect,
  FormCheck,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import type IOrderData from "../Interfaces/IOrderData";

function Main({
  listOfTrips,
  mealOptions,
}: {
  listOfTrips: string[];
  mealOptions: string[];
}) {
  const [orderData, setOrderData] = useState<IOrderData>({
    placeToGo: listOfTrips[0] ?? "",
    numberOfPeople: 1,
    travelingByThemselves: false,
    mealPreference: mealOptions,
    remarks: "",
    address: "",
  });
  return (
    <>
      <Form>
        <FormGroup className="mb-3">
          <FormLabel>Place to go</FormLabel>
          <FormSelect
            value={orderData.placeToGo}
            onChange={(e) =>
              setOrderData((prev) => ({
                ...prev,
                placeToGo: e.target.value,
              }))
            }
          >
            <option value="">Select a trip</option>
            {listOfTrips.map((trip, index) => (
              <option key={index} value={trip}>
                {trip}
              </option>
            ))}
          </FormSelect>
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Number of people</FormLabel>
          <FormControl
            type="number"
            value={orderData.numberOfPeople}
            onChange={(e) =>
              setOrderData((prev) => ({
                ...prev,
                numberOfPeople: Number(e.target.value),
              }))
            }
          />
        </FormGroup>

        <FormGroup>
          <Form className="mb-3">
            <FormCheck
              id="own-transport"
              label="Please tick this box if travelling by your own means of transport"
              onChange={(e) => {
                setOrderData((prev) => ({
                  ...prev,
                  travelingByThemselves: e.target.checked,
                }));
              }}
            />
          </Form>
        </FormGroup>

        <FormGroup className="mb-3">
          <div className="mb-2 fw-bold">Please mark your meal preference:</div>

          {mealOptions.map((option, index) => (
            <FormCheck
              key={index}
              type="radio"
              name="mealPreference"
              label={option}
              checked={orderData.mealPreference[0] === option}
              onChange={() =>
                setOrderData((prev) => ({
                  ...prev,
                  mealPreference: [option],
                }))
              }
            />
          ))}
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Remarks for the organizer</FormLabel>
          <FormControl
            value={orderData.remarks}
            onChange={(e) =>
              setOrderData((prev) => ({
                ...prev,
                remarks: e.target.value,
              }))
            }
          />
        </FormGroup>

        <FormGroup as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Address for sending offer:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              value={orderData.address}
              onChange={(e) =>
                setOrderData((prev) => ({
                  ...prev,
                  address: e.target.value,
                }))
              }
            />
          </Col>
        </FormGroup>
      </Form>
      <Button /* just for testing onClick={() => console.log(orderData)}*/>
        Send an order
      </Button>
    </>
  );
}

export default Main;
