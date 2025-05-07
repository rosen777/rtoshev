import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
import { object, string } from "yup";
import { Button } from "../../components/Button";
import { Chart } from "../../components/Chart";
import { MiniCards } from "../../components/MiniCards";

type gridDataType = {
  title: string;
  description: string;
}[];

type Values = {
  firstName: string;
  lastName: string;
  email: string;
};

type chartDataType = {
  quarter: number;
  visitors: number;
  fill: string;
  label: string;
  image: string;
};

type chartDataArrayType = chartDataType[];

const Home = () => {
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

  const cardData = [
    {
      title: "title1",
      description: "description1",
      action: "action1",
    },
    {
      title: "title2",
      description: "description2",
      action: "action2",
    },
    {
      title: "title3",
      description: "description3",
      action: "action3",
    },
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

  const chartData: chartDataArrayType = [
    {
      quarter: 1,
      visitors: 2000000,
      fill: "#61DAFB",
      label: "⚛️",
      image: "/assets/react.svg",
    },
    {
      quarter: 2,
      visitors: 1500000,
      fill: "#EC7211",
      label: "AWS",
      image: "/assets/aws.png",
    },
    {
      quarter: 3,
      visitors: 1000000,
      fill: "#79A643",
      label: "🛒",
      image: "/assets/shopify.png",
    },
    {
      quarter: 4,
      visitors: 400000,
      fill: "#61DAFB",
      label: "⚛️",
      image: "/assets/react.svg",
    },
    {
      quarter: 5,
      visitors: 200000,
      fill: "#026E00",
      label: "🥬",
      image: "/assets/node.svg",
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

  console.log(`chartData: ${JSON.stringify(chartData)}`);

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
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center">
        {cardData.map((card, index) => (
          <Grid size={{ sm: 12, md: 4, lg: 4 }}>
            <MiniCards
              title={card.title}
              description={card.description}
              actionText={card.action}
            />
          </Grid>
        ))}
      </Grid>
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
                <Button
                  type="submit"
                  variant="accent"
                  text="Submit"
                  color="info"
                />
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
