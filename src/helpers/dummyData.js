import faker from "faker";

export const stateNames = [
  {
    value: "West Bengal",
    label: "West Bengal",
  },
];

export const districts = [
  {
    value: "Howrah",
    label: "Howrah",
  },
  {
    value: "Kolkata",
    label: "Kolkata",
  },
];

export const licenseNumbers = [123, 124, 235, 564];

// export const inventoryColumns = [
//   { title: "Medicine Name", field: "medicineName" },
//   { title: "Qty", field: "qty", type: "numeric" },
//   { title: "Price", field: "price", type: "numeric" },
//   { title: "Total", field: "total", type: "numeric" },
//   { title: "Last Updated", field: "lastUpdated" },
// ];
// export const inventoryData = [
//   {
//     medicineName: "Aspirin",
//     qty: "25",
//     price: 20.0,
//     total: 500,
//     lastUpdated: Date.now(),
//   },
//   {
//     medicineName: "Ecord",
//     qty: "25",
//     price: 20.0,
//     total: 500,
//     lastUpdated: Date.now(),
//   },
//   {
//     medicineName: "Zonar",
//     qty: "25",
//     price: 20.0,
//     total: 500,
//     lastUpdated: Date.now(),
//   },
//   {
//     medicineName: "Paracetamol",
//     qty: "25",
//     price: 20.0,
//     total: 500,
//     lastUpdated: Date.now(),
//   },
// ];

export const reportColumns = [
  { title: "Report ID", field: "reportId" },
  { title: "Action Taken", field: "actionTaken" },
  { title: "Status", field: "status" },
];

export const reportData = [
  {
    reportId: "1",
    actionTaken: "Resolved",
    status: "Accepted",
  },

  {
    reportId: "2",
    actionTaken: "Can't be solved",
    status: "Pending",
  },
  {
    reportId: "3",
    actionTaken: "False report",
    status: "Rejected",
  },
];

export const salesData = [
  {
    name: "Jan",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "Feb",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "Mar",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "APR",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "MAY",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "JUN",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "JUl",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "AUG",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "SEP",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "OCT",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "NOV",
    sales: faker.commerce.price() * 10,
  },
  {
    name: "DEC",
    sales: faker.commerce.price() * 10,
  },
];

export const topSellersData = [
  {
    name: "Paracetamol",
    unitsSold: 200,
  },
  {
    name: "Ecord",
    unitsSold: 50,
  },
  {
    name: "Aspirin",
    unitsSold: 100,
  },
  {
    name: "Digin",
    unitsSold: 400,
  },
];
