 fetch('data.json')
 .then(response => response.json())
 .then(data => {

   console.log(data);


   const dataArray = data.data;

   // Get the <div> element for JSON data
   const jsonDataElement = document.getElementById("json-data");

   // Check if the element exists before setting its content
   if (jsonDataElement) {
     // Clear the existing content of the <div> element
     jsonDataElement.innerHTML = "";

     // Iterate over each row in the data array
     dataArray.forEach(row => {
       // Create a new <p> element for each row
       const paragraph = document.createElement("p");
       paragraph.textContent = row.join(", ");

       // Append the <p> element to the <div> element
       jsonDataElement.appendChild(paragraph);
     });
   } else {
     console.error("Element with ID 'json-data' not found.");
   }

   // Create the table
   function createTable(data) {
     var table = document.createElement("table");
     var thead = document.createElement("thead");
     var tbody = document.createElement("tbody");

     // Create table header
     var headerRow = document.createElement("tr");
     Object.keys(data[0]).forEach(function(key) {
       var th = document.createElement("th");
       th.textContent = key;
       headerRow.appendChild(th);
     });
     thead.appendChild(headerRow);

     // Create table rows
     data.forEach(function(obj) {
       var row = document.createElement("tr");
       Object.keys(obj).forEach(function(key) {
         var cell = document.createElement("td");
         cell.textContent = obj[key];
         row.appendChild(cell);
       });
       tbody.appendChild(row);
     });

     // Append thead and tbody to the table
     table.appendChild(thead);
     table.appendChild(tbody);

     return table;
   }

   // Get the container element and append the table
   var tableContainer = document.getElementById("tableContainer");
   tableContainer.appendChild(createTable(dataArray));
 })
 .catch(error => {
   // Handle any error that occurred during the fetch
   console.error('Error:', error);
 });