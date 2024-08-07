import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Avatar,
  Typography,
  Button,
} from "@mui/material";

import React from "react";

const OrderTable = () => {
  const recentOrders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
      avatar: "url_to_avatar",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48965786",
      amount: "$305.02",
      status: "Delivered",
      avatar: "url_to_avatar",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78985215",
      amount: "$45.88",
      status: "Cancelled",
      avatar: "url_to_avatar",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
      avatar: "url_to_avatar",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
      avatar: "url_to_avatar",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
      avatar: "url_to_avatar",
    },
  ];

  const statusStyles = {
    Delivered: { backgroundColor: "rgba(76, 175, 80, 0.1)", color: "green" },
    Cancelled: { backgroundColor: "rgba(244, 67, 54, 0.1)", color: "red" },
    Pending: { backgroundColor: "rgba(255, 152, 0, 0.1)", color: "orange" },
  };

  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: "#2c2c3d",
        color: "white",
        maxWidth: "855px",
        maxHeight: "550px",
        margin: "2px",
        marginTop: "17px",
        marginLeft: "9px",
        borderRadius: "6px",
      }}
    >
      <Typography style={{ color: "white", padding: "10px" }} variant="h6">
        Recent Orders
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "white" }}>Customer</TableCell>
            <TableCell style={{ color: "white" }}>Order No.</TableCell>
            <TableCell style={{ color: "white" }}>Amount</TableCell>
            <TableCell style={{ color: "white" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentOrders.map((order) => (
            <TableRow key={order.orderNo}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar src={order.avatar} alt={order.customer} />
                  <Typography style={{ marginLeft: "10px", color: "white" }}>
                    {order.customer}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell style={{ color: "white" }}>{order.orderNo}</TableCell>
              <TableCell style={{ color: "white" }}>{order.amount}</TableCell>
              <TableCell>
                <Button
                  style={{
                    ...statusStyles[order.status],
                    textTransform: "none",
                    borderRadius: "16px",
                  }}
                >
                  {order.status}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
