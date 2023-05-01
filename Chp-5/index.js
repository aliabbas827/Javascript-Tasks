const tableData = [  ["John", "Doe", 25, "male"],
  ["Jane", "Smith", 32, "female"],
  ["Bob", "Johnson", 45, "male"]
];

const table = tableData.createElement("table");

for (let i = 0; i < tableData.length; i++) {
  const row = tableData.createElement("tr");
  
  for (let j = 0; j < tableData[i].length; j++) {
    const cell = tableData.createElement("td");
    cell.textContent = tableData[i][j];
    row.appendChild(cell);
  }
  
  table.appendChild(row);
}

tableData.body.appendChild(table);