


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // JSON data is loaded and parsed, you can work with it here
    console.log(data);
  })
  .catch(error => {
    // Handle any error that occurred during the fetch
    console.error('Error:', error);
  });