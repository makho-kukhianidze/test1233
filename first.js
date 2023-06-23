fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // JSON data is loaded and parsed, you can work with it here
    console.log(data);

    // Access the "data" array from the JSON
    const dataArray = data.data;

    // Get the <div> element
    const jsonDataElement = document.getElementById("json-data");

    // Check if the element exists before setting its content
    if (jsonDataElement) {
      // Create an array to store the formatted JSON data
      const formattedData = [];

      // Iterate over the nested arrays and access the individual values
      dataArray.forEach(row => {
        const rowString = row.join(", ");
        formattedData.push(`<p>${rowString}</p>`);
      });

      // Set the formatted JSON data as the content of the <div> element
      jsonDataElement.innerHTML = formattedData.join("");
    } else {
      console.error("Element with ID 'json-data' not found.");
    }
  })
  .catch(error => {
    // Handle any error that occurred during the fetch
    console.error('Error:', error);
  });