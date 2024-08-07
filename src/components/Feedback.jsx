import { CardContent, Typography, Avatar } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

const Feedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      feedback:
        "The food was excellent and so was the service. I had mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
      rating: 4,
      avatar: "https://example.com/avatar1.jpg",
    },
    {
      name: "Dianne Russell",
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
      rating: 5,
      avatar: "https://example.com/avatar2.jpg",
    },
    {
      name: "Devon Lane",
      feedback:
        "Normally, wings are wings, but theirs are lean, meaty, and tender, and whatever. We enjoy eating chicken so much so that we visit KFC every now and then whenever we are free.",
      rating: 4,
      avatar: "https://example.com/avatar3.jpg",
    },
  ];

  return (
    <div className="bg-[#2c2c3d] rounded-lg ml-7 m-5 px-2 py-2 overflow-y-auto " style={{maxHeight:"548px", width:{xs: 400 ,lg:350} }}>
      <Typography variant="h6" className="text-white" sx={{paddingLeft:'12px'}} >
        Customer's Feedback
      </Typography>
      <div>
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            style={{ backgroundColor: "#2c2c3d", color: "white" }}
            className="mb-4"
          >
            <CardContent className="flex  flex-col items-start">
              <Avatar
                src={feedback.avatar}
                alt={feedback.name}
                className="mr-4"
              />
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{
                    color: "white",
                    display: "inline",
                    verticalAlign: "middle",
                  }}
                >
                  {feedback.name}
                </Typography>
              <Box>
                <Typography variant="body2"  gutterBottom style={{ color: "white" }}>
                  {"⭐".repeat(feedback.rating)}
                </Typography>
                <Typography variant="body2"  gutterBottom style={{ color: "white" }}>
                  {feedback.feedback}
                </Typography>
              </Box>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
