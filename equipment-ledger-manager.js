const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(jsonString) {
  return JSON.parse(jsonString);
}

function checkoutDevice(ledger, assetTag, borrower) {
  if (!Object.hasOwn(ledger, assetTag)) {
    return {
      ledger,
      message: `Asset Tag ${assetTag} Not Found.`,
    };
  }

  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger,
      message: `Device ${assetTag} already checked out.`,
    };
  }

  const ledgerCopy = loadLedger(serializeLedger(ledger));
  ledgerCopy[assetTag].borrower = borrower;
  ledgerCopy[assetTag].status = "CheckedOut";

  return {
    ledger: ledgerCopy,
    message: `Device ${assetTag} successfully checked out to ${borrower.name}.`,
  };
}

function checkinDevice(ledger, assetTag) {
  if (!Object.hasOwn(ledger, assetTag)) {
    return {
      ledger,
      message: `Asset Tag ${assetTag} Not Found.`,
    };
  }

  const ledgerCopy = loadLedger(serializeLedger(ledger));
  ledgerCopy[assetTag].borrower.name = "";
  ledgerCopy[assetTag].borrower.email = "";
  ledgerCopy[assetTag].dueDate = "";
  ledgerCopy[assetTag].status = "CheckedIn";

  return {
    ledger: ledgerCopy,
    message: `Device ${assetTag} has been checked in.`,
  };
}

function dateToNumber(date) {
  const [month, day, year] = date.split("/").map(Number);
  return year * 10000 + month * 100 + day;
}

function listOverdueDevices(ledger, today) {
  const overdueDevices = [];

  for (const device of Object.values(ledger)) {
    if (
      device.status === "CheckedOut" &&
      dateToNumber(device.dueDate) < dateToNumber(today)
    ) {
      overdueDevices.push(device);
    }
  }

  overdueDevices.sort(
    (a, b) => dateToNumber(a.dueDate) - dateToNumber(b.dueDate)
  );

  return overdueDevices;
}

// Tests

// 1. Successful checkout
const checkout = checkoutDevice(equipmentLedger, 2, {
  name: "Alice Brown",
  email: "alice@acme.org",
});
console.log("Checkout:", checkout.message);
console.log("Status:", checkout.ledger[2].status);
// Expected: CheckedOut

// 2. Successful check-in
const checkin = checkinDevice(equipmentLedger, 1);
console.log("Check-in:", checkin.message);
console.log("Status:", checkin.ledger[1].status);
// Expected: CheckedIn

// 3. Missing device
console.log("Missing:", checkoutDevice(equipmentLedger, 99, {}).message);
// Expected: Asset Tag 99 Not Found.

// 4. Overdue devices, oldest first
console.log(
  "Overdue:",
  listOverdueDevices(equipmentLedger, "12/1/2025").map(
    (device) => device.dueDate
  )
);
// Expected: ["10/31/2025", "11/30/2025"]

// 5. Original ledger remains unchanged
console.log("Original unchanged:", equipmentLedger[1].status, equipmentLedger[2].status);
// Expected: CheckedOut CheckedIn