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

export const inventoryColumns = [
  { title: "Medicine Name", field: "medicineName" },
  { title: "Qty", field: "qty", type: "numeric" },
  { title: "Price", field: "price", type: "numeric" },
  { title: "Total", field: "total", type: "numeric" },
  { title: "Last Updated", field: "lastUpdated" },
];
export const inventoryData = [
  {
    medicineName: "Aspirin",
    qty: "25",
    price: 20.0,
    total: 500,
    lastUpdated: Date.now(),
  },
  {
    medicineName: "Ecord",
    qty: "25",
    price: 20.0,
    total: 500,
    lastUpdated: Date.now(),
  },
  {
    medicineName: "Zonar",
    qty: "25",
    price: 20.0,
    total: 500,
    lastUpdated: Date.now(),
  },
  {
    medicineName: "Paracetamol",
    qty: "25",
    price: 20.0,
    total: 500,
    lastUpdated: Date.now(),
  },
];

export const reportColumns = [
  { title: "Report ID", field: "reportId" },
  { title: "Action Taken", field: "actionTaken" },
  { title: "Status", field: "status" },
];

export const reportData = [
  {
    reportId: "213jka213shf312",
    actionTaken: "Resolved",
    status: "Accepted",
  },

  {
    reportId: "298gfha213shf312",
    actionTaken: "Can't be solved",
    status: "Pending",
  },
  {
    reportId: "298gfha213shf312",
    actionTaken: "False report",
    status: "Rejected",
  },
];

export const chartData = [
  {
    name: "Jan",
    sales: 4000,
  },
  {
    name: "Feb",
    sales: 3000,
  },
  {
    name: "Mar",
    sales: 5000,
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
