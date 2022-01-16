import React from "react";
import { Step, StepLabel, Stepper } from "@material-ui/core";
import useStyles from "../utils/styles";

export default function CheckoutWizard({ activeStep = 0 }) {
  const classes = useStyles();
  return (
    <Stepper
      activeStep={activeStep}
      className={classes.transparentBackgroud}
      alternativeLabel
    >
      {["Login", "Shipping Address", "Payment Method", "Place Order"].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}
