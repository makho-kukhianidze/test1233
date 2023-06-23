// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     // JSON data is loaded and parsed, you can work with it here
//     console.log(data);

//     // Access the "data" array from the JSON
//     const dataArray = data.data;

//     // Get the <div> element
//     const jsonDataElement = document.getElementById("json-data");

//     // Check if the element exists before setting its content
//     if (jsonDataElement) {
//       // Create an array to store the formatted JSON data
//       const formattedData = dataArray.map(row => `<p>${row.join(", ")}</p>`);

//       // Set the formatted JSON data as the content of the <div> element
//       jsonDataElement.innerHTML = formattedData.join("");
//     } else {
//       console.error("Element with ID 'json-data' not found.");
//     }
//   })
//   .catch(error => {
//     // Handle any error that occurred during the fetch
//     console.error('Error:', error);
//   });





// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     // JSON data is loaded and parsed, you can work with it here
//     console.log(data);

//     // Access the "data" array from the JSON
//     const dataArray = data.data;

//     // Get the <div> element
//     const jsonDataElement = document.getElementById("json-data");

//     // Check if the element exists before setting its content
//     if (jsonDataElement) {
//       // Clear the existing content of the <div> element
//       jsonDataElement.innerHTML = "";

//       // Iterate over each row in the data array
//       dataArray.forEach(row => {
//         // Create a new <p> element for each row
//         const paragraph = document.createElement("p");
//         paragraph.textContent = row.join(", ");

//         // Append the <p> element to the <div> element
//         jsonDataElement.appendChild(paragraph);
//       });
//     } else {
//       console.error("Element with ID 'json-data' not found.");
//     }
//   })
//   .catch(error => {
//     // Handle any error that occurred during the fetch
//     console.error('Error:', error);
//   });












fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Check if the "data" object and "data.data" array exist
    if (data && data.data) {
      // JSON data is loaded and parsed, you can work with it here
      console.log(data);

      // Access the "data" array from the JSON
      const dataArray = data.data;

      // Get the <div> element
      const jsonDataElement = document.getElementById("json-data");

      // Check if the element exists before setting its content
      if (jsonDataElement) {
        // Create the table element
        const table = document.createElement("table");

        // Create the table header row
        const headerRow = document.createElement("tr");

        // Iterate over the header values and create table header cells
        data.header.forEach(headerValue => {
          const headerCell = document.createElement("th");
          headerCell.textContent = headerValue;
          headerRow.appendChild(headerCell);
        });

        // Append the header row to the table
        table.appendChild(headerRow);

        // Iterate over each row in the data array and create table rows
        dataArray.forEach(rowData => {
          const row = document.createElement("tr");

          // Iterate over the values in the current row and create table cells
          rowData.forEach(cellValue => {
            const cell = document.createElement("td");
            cell.textContent = cellValue;
            row.appendChild(cell);
          });

          // Append the row to the table
          table.appendChild(row);
        });

        // Append the table to the <div> element
        jsonDataElement.appendChild(table);
      } else {
        console.error("Element with ID 'json-data' not found.");
      }
    } else {
      console.error("Invalid JSON data format.");
    }
  })
  .catch(error => {
    // Handle any error that occurred during the fetch
    console.error('Error:', error);
  });