const fs = require("fs");
const path = require("path");
const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors("*"));
app.use("/public", express.static("public"));

// Path to customers file
const customersFilePath = path.join(__dirname, "customers.json");

// Helper to read customers from file
const readCustomers = () => {
  if (!fs.existsSync(customersFilePath)) {
    fs.writeFileSync(customersFilePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(customersFilePath, "utf-8");
  return JSON.parse(data);
};

// Helper to write customers to file
const writeCustomers = (data) => {
  fs.writeFileSync(customersFilePath, JSON.stringify(data, null, 2));
};

// Add a new customer
app.post("/customers", (req, res) => {
  const customers = readCustomers();
  const newCustomer = req.body;
  newCustomer.id = customers.length
    ? customers[customers.length - 1].id + 1
    : 1;
  customers.push(newCustomer);
  writeCustomers(customers);
  res.status(201).json(newCustomer);
});

// Get all customers
app.get("/customers", (req, res) => {
  const customers = readCustomers();
  res.json(customers);
});

// Path to pins file
const pinsFilePath = path.join(__dirname, "pins.json");

// Helper to read pins from file
const readPins = () => {
  if (!fs.existsSync(pinsFilePath)) {
    fs.writeFileSync(pinsFilePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(pinsFilePath, "utf-8");
  return JSON.parse(data);
};

// Helper to write pins to file
const writePins = (data) => {
  fs.writeFileSync(pinsFilePath, JSON.stringify(data, null, 2));
};

// Set up storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public")); // Store images in the public folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  },
});

const upload = multer({ storage });

// Add a new pin with image upload
app.post("/pins", upload.single("image"), (req, res) => {
  const pins = readPins();
  const newPin = req.body;
  newPin.image = req.file ? `/public/${req.file.filename}` : null; // Store image path
  newPin.id = pins.length ? pins[pins.length - 1].id + 1 : 1;
  pins.push(newPin);
  writePins(pins);
  res.status(201).json(newPin);
});

// Get all pins with collaborator details
app.get("/pins", (req, res) => {
  const pins = readPins();
  const customers = readCustomers();

  const pinsWithCollaborators = pins.map((pin) => {
    const collaborators = customers.filter((customer) =>
      pin.collaboratory.includes(String(customer.id))
    );
    return { ...pin, collaborators }; // Include collaborators in the pin object
  });

  res.json(pinsWithCollaborators);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
