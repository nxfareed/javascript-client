import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Math from "../../components/Math/Math";
import theme from "../../theme";
import { Typography } from "@material-ui/core";

export default class CalculatorDemo extends React.Component {
  Result() {
    let { result } = this.state;
    result = "";
    this.setState({ result });
  }

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Typography>
            <Math first={7} second={4} operator="+" />
            <Math first={7} second={3} operator="-" />
            <Math first={5} second={18} operator="*" />
            <Math first={0} second={0} operator="/" />
            <Math first={3} second={5} operator="+">
              {(first, second, result) => (
                <p>
                  Sum of {first} and {second} is equal to {result}{" "}
                </p>
              )}
            </Math>
            {/* <ThemeProvider theme={theme}>
          <Typography> */}
            <Math first={5} second={4} operator="+">
              {(first, second, result) => (
                <p>
                  Sum of {first} and {second} is equal to {result}{" "}
                </p>
              )}
            </Math>
          </Typography>
        </ThemeProvider>
      </>
    );
  }
}
