import Style from "./Style/Card.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
export default function ACard({title, data=0, total=0}){
    return(
    <div>
        <Card className={Style.size}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>LAST 30 DAYS PROGRESS</Card.Title>
          <Card.Text>
          <CircularProgressbar className={Style.progressbar} value={data} text={`${data}%`} />
          </Card.Text>
          <h5>TOTAL</h5>
          {total}
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
    );     
}