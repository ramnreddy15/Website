import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


class Sponsors extends Component {
  render() {
    return (
      <div>
      <div style={{
        position: "absolute",
        left: "20%",
        top: "35%",
        transform: "translate(-50%, -50%)"
      }}>
        <h1><b>Gold</b></h1>
        <Card style={styles.goldCard}>
          <CardContent>
            <img src="https://i.mydramalist.com/qOmWQc.jpg" width= "200"  height="225" />
            <p><b>Some Company</b></p>
          </CardContent>
        </Card>
      </div>
        <h1><b>Silver</b></h1>
        <h1><b>Bronze</b></h1>
      </div>
      );
  }
}

const styles = {
  goldCard: {
    width: 232,
    height: 275,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 3px 6px -3px rgba(0,0.3,.3,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    background: "#ffffff",
    borderRadius: 4
  }
};

export default Sponsors;