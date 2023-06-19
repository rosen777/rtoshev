import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MaterialButton from "@mui/material/Button";
import { buttonVariants } from "../../components/types";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styles from "./style.module.css";
import { ImageSlider } from "../../components/ImageSlider";
import { ImageSection } from "../../components/ImageSection";
import { Accordion } from "../../components/Accordion";
import { portfolioData } from "../../utils/portfolioData";
import "./Home.css";
import { useDarkMode } from "../../ThemeHandler";
import { darkTheme, lightTheme } from "../../styles/Theme";
import { Tabs } from "../../components/Tabs";
import { GridSection } from "../../components/GridSection";
import { Footer } from "../../components/Footer";
import { FormInput } from "../../components/FormInput";
import { Form, Formik, FormikProps } from "formik";
import { object, string, number, date, InferType } from "yup";
import { Button } from "../../components/Button";
import { Chart } from "../../components/Chart";
import { ChartDataPoint } from "global";
// import useTheme, { themes } from "../../ThemeContext";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

type gridDataType = {
  title: string;
  description: string;
}[];

type Values = {
  firstName: string;
  lastName: string;
  email: string;
};

const Home = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputRows, setInputRows] = useState(1);

  // const { theme, setTheme } = useTheme();
  const slides = [
    { url: "/assets/slider_placeholder.jpg", title: "Beach" },
    { url: "/assets/slider_placeholder_2.png", title: "Beach" },
    { url: "/assets/slider_placeholder.jpg", title: "Beach" },
    { url: "/assets/slider_placeholder_2.png", title: "Beach" },
  ];

  const gridData: gridDataType = [
    {
      title: "Title #1",
      description: "Description #1",
    },
    {
      title: "Title #2",
      description: "Description #2",
    },
    {
      title: "Title #3",
      description: "Description #3",
    },
  ];

  const chartData: ChartDataPoint[] = [
    {
      quarter: 1,
      visitors: 2000000,
      fill: "#61DAFB",
      label: "⚛️",
    },
    {
      quarter: 2,
      visitors: 1500000,
      fill: "#EC7211",
      label: "AWS",
    },
    {
      quarter: 3,
      visitors: 1000000,
      fill: "#79A643",
      label: "🛒",
    },
    {
      quarter: 4,
      visitors: 400000,
      fill: "#61DAFB",
      label: "⚛️",
    },
    {
      quarter: 5,
      visitors: 200000,
      fill: "#026E00",
      label: "🥬",
    },
  ];

  const contactFormSchema = object({
    firstName: string()
      .min(2, "First name must be at least 2 characters")
      .required(),
    lastName: string()
      .min(2, "Last name must be at least 2 characters")
      .required(),
    email: string().email(),
  });

  const submitContactForm = (values: any) => {
    console.log(values);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      style={{
        width: "100%",
        backgroundColor: darkMode
          ? darkTheme.palette.primary.main
          : lightTheme.palette.primary.main,
      }}>
      <div>
        <ImageSlider slides={slides} />
      </div>
      <div>
        <ImageSection
          sectionDescription={"Lorem ipsum dolor sit amet, consectetur adipis"}
        />
      </div>
      <div className="accordion_container">
        <Accordion data={portfolioData} />
      </div>
      <div>
        <Tabs
          title="Portfolio Tabs"
          tabs={[
            {
              name: "Tab1",
              content: (
                <div>
                  <Chart data={chartData} />
                </div>
              ),
            },
            { name: "Tab2", content: <div>Tab 2</div> },
          ]}
        />
      </div>
      <div>
        <GridSection gridData={gridData} />
      </div>
      <div className="contact-form">
        <Formik
          initialValues={initialValues}
          validationSchema={contactFormSchema}
          onSubmit={(values, actions) => {
            submitContactForm(values);
          }}>
          {(props: FormikProps<Values>) => (
            <Form>
              <FormInput
                label="Name"
                placeholder="Enter your email address"
                name="firstName"
              />
              <FormInput
                label="Email"
                placeholder="Enter your email address"
                name="email"
                type="email"
              />
              <FormInput
                label="Message"
                placeholder="Enter your message"
                name="message"
                multiline
              />
              <div className="submit-btn">
                <Button type="submit" text="Submit" color="info" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Box>
  );
};

export default Home;
