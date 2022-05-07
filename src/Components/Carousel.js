import { useEffect, useState } from "react";
import {
  Box,
  Button,
  MobileStepper,
  Typography,
  useTheme,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(0);

  const data = [
    {
      url: "https://bit.ly/3F5HDD7",
      prod: "Watch",
      price: 999,
    },
    {
      url: "https://bit.ly/3F5HDD7",
      prod: "Watch",
      price: 999,
    },
    {
      url: "https://bit.ly/3F5HDD7",
      prod: "Watch",
      price: 999,
    },
    {
      url: "https://bit.ly/3F5HDD7",
      prod: "Watch",
      price: 999,
    },
    {
      url: "https://bit.ly/3F5HDD7",
      prod: "Watch",
      price: 999,
    },
    {
      url: "https://bit.ly/3F5HDD7",
      prod: "Watch",
      price: 999,
    },
    {
      url: "https://bit.ly/3F5HDD7",
      prod: "Watch",
      price: 999,
    },
    {
      url: "https://bit.ly/3F5HDD7",
      prod: "Watch",
      price: 999,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    setCarouselHeight(document.querySelector(".carousel").offsetHeight - 100);
  }, []);

  return (
    <Box sx={{ height: "5in", width: "100%", pt: 5, mb: 3 }}>
      <Box className="carousel" sx={{ height: "100%", width: "100%" }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {data.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: `${carouselHeight}px`,
                    width: "100%",
                    display: "block",
                    overflow: "hidden",
                  }}
                  src={step.url}
                  alt={step.prod}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            textAlign: "start",
            color: teal[600],
            mt: 1,
            mb: 1,
          }}
        >
          <Typography>{data[activeStep].prod}</Typography>
          <Typography>Rs. {data[activeStep].price}</Typography>
        </Box>
        <MobileStepper
          steps={data.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === data.length - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
