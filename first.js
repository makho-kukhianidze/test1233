fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // JSON data is loaded and parsed, you can work with it here
    console.log(data);

    // Get the <p> element
    var jsonDataElement = document.getElementById("json-data");

    // Set the JSON data as the text content of the <p> element
    jsonDataElement.textContent = JSON.stringify(data);
  })
  .catch(error => {
    // Handle any error that occurred during the fetch
    console.error('Error:', error);
  });