fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // JSON data is loaded and parsed, you can work with it here
    console.log(data);

    // Access the "data" array from the JSON
    const dataArray = data.data;

    // Get the <p> element
    const jsonDataElement = document.getElementById("json-data");

    // Check if the element exists before setting its text content
    if (jsonDataElement) {
      // Create an array to store the formatted JSON data
      const formattedData = [];

      // Iterate over the nested arrays and access the individual values
      dataArray.forEach(row => {
        formattedData.push(row.join(", "));
      });

      // Set the JSON data as the text content of the <p> element
      jsonDataElement.textContent = formattedData.join("<br>");
    } else {
      console.error("Element with ID 'json-data' not found.");
    }
  })
  .catch(error => {
    // Handle any error that occurred during the fetch
    console.error('Error:', error);
  });