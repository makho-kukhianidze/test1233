fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // JSON data is loaded and parsed, you can work with it here
    console.log(data);

    // Access the "data" array from the JSON
    const dataArray = data.data;

    // Iterate over the nested arrays and access the individual values
    dataArray.forEach(row => {
      row.forEach(value => {
        console.log(value);
      });
    });
  })
  .catch(error => {
    // Handle any error that occurred during the fetch
    console.error('Error:', error);
  });