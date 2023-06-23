

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // JSON data is loaded and parsed, you can work with it here
    console.log(data);
    
    // Get the container element where you want to add the table
    var container = document.getElementById("table-container");

    // Create the table element
    var table = document.createElement("table");

    // Create the table header
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    // Extract the column headers from the first object in the JSON data
    var headers = Object.keys(data[0]);

    // Create table header cells
    headers.forEach(function(header) {
      var th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });

    // Append the header row to the table header
    thead.appendChild(headerRow);

    // Append the table header to the table
    table.appendChild(thead);

    // Create the table body
    var tbody = document.createElement("tbody");

    // Create table rows and cells for each object in the JSON data
    data.forEach(function(item) {
      var row = document.createElement("tr");

      // Create cells for each property in the object
      headers.forEach(function(header) {
        var cell = document.createElement("td");
        cell.textContent = item[header];
        row.appendChild(cell);
      });

      // Append the row to the table body
      tbody.appendChild(row);
    });

    // Append the table body to the table
    table.appendChild(tbody);

    // Append the table to the container element
    container.appendChild(table);
  })
  .catch(error => {
    // Handle any error that occurred during the fetch
    console.error('Error:', error);
  });