import React from "react";
import "./Choose.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PublicIcon from "@mui/icons-material/Public";
import { Box, Typography, Paper } from "@mui/material";
import img from "../asset/choose-img.png";

const benefits = [
  "Personalized Service",
  "Destination Knowledge",
  "Hassle-Free Planning",
  "24/7 Support",
  "Customer Satisfaction Guaranteed",
];

const features = [
  {
    icon: <SecurityIcon style={{ color: '#007BFF', fontSize: '40px' }} />,
    title: 'Excellent Security',
    description: 'Share the core values and principles that drive your tripBuddy company. Emphasize a commitment to customer.'
  },
  {
    icon: <AttachMoneyIcon style={{ color: '#007BFF', fontSize: '40px' }} />,
    title: 'Cost Efficiency',
    description: 'Share the core values and principles that drive your tripBuddy company. Emphasize a commitment to customer.'
  },
  {
    icon: <PublicIcon style={{ color: '#007BFF', fontSize: '40px' }} />,
    title: 'World Wide Route',
    description: 'Share the core values and principles that drive your tripBuddy company. Emphasize a commitment to customer.'
  }
];

const Choose = () => {
  return (
    <div className="choose">
      <div className="title-section-left">
        <p className="title">why choose us</p>
        <h1>Your Ultimate Travel Partner</h1>
        <p>
          Choose us for an unparalleled travel experience tailored to your
          desires. With our commitment to excellence, extensive destination
          knowledge, and personalized service.
        </p>

        <Box>
          {benefits.map((benefit, index) => (
            <Box key={index} display="flex" alignItems="center" mb={2.5}>
              <CheckCircleIcon
                style={{ color: "#007BFF", marginRight: "8px" }}
              />
              <Typography>{benefit}</Typography>
            </Box>
          ))}
        </Box>
      </div>

      <div className="title-section-mid">
        <img src={img} alt="Choose Us"/>
      </div>

      <div className="title-section-right">
        {features.map((feature, index) => (
          <Paper key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', padding: '16px' }}>
            <Box style={{ marginRight: '16px' }}>
              {feature.icon}
            </Box>
            <Box>
              <Typography variant="h6" component="div" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {feature.description}
              </Typography>
            </Box>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Choose;
