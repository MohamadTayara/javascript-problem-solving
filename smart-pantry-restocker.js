const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: -4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  const rows = [];
  const data = [];
  let exists = false;
  for (let i = 0; i < rawData.length; i++) {
    rows.push(rawData[i].split("|"));
  }
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j].sku === rows[i][0]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      data.push({
        sku: rows[i][0],
        name: rows[i][1],
        qty: Number(rows[i][2]),
        expires: rows[i][3],
        zone: rows[i][4] || "general",
      });
    }

    exists = false;
  }

  return data;
}

function planRestock(pantry, shipment) {
  let type = "";
  const item = {};
  const action = [];
  let exists = false;

  for (let i = 0; i < shipment.length; i++) {
    if (shipment[i].qty <= 0) {
      type = "discard";
    } else {
      for (let j = 0; j < pantry.length; j++) {
        if (pantry[j].sku == shipment[i].sku) {
          exists = true;
          break;
        }
      }
      type = exists ? "restock" : "donate";
    }
    exists = false;

    action[i] = {
      type: type,
      item: shipment[i],
    };
  }
  return action;
}

function groupByZone(actions) {
  const grouped = {};

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone;

    if (!grouped[zone]) grouped[zone] = [];

    grouped[zone].push(action);
  }

  return grouped;
}

const actions = [
  {
    type: "restock",
    item: { sku: "A10", name: "Tomatoes", qty: 5, zone: "fridge" },
  },
  {
    type: "donate",
    item: { sku: "B21", name: "Bananas", qty: 10, zone: "general" },
  },
  {
    type: "discard",
    item: { sku: "C32", name: "Eggs", qty: 0, zone: "fridge" },
  },
  {
    type: "discard",
    item: { sku: "E54", name: "Peppers", qty: -1, zone: "general" },
  },
];

function clonePantry(pantry){
  const pantryCopy = JSON.parse(JSON.stringify(pantry));

  return pantryCopy;
}


const pantryCopy = clonePantry(pantry);

const shipment = parseShipment(rawData);

const restockActions = planRestock(pantryCopy, shipment);

const groupedActions = groupByZone(restockActions);

console.log(groupedActions);