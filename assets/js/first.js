    fetch('./assets/js/json/data.json') // 1. მივწვდით data.json ფაილს! ამ js ფაილიდან ჯერ მიდის index.html ში და იქედან იღებს მისამართს და წვდება json - ს!
      .then(response => response.json())
      .then(Mydata => { // 2. ამოვიღეთ მთლიანი მონაცემები data.json - იდან და სახელი დავარქვი Mydata! 
        const personalInformation = Mydata.data; // შევქმენი ცვლადი სახელწოდებით personalInformation - და გადავეცი იმ ჯსონსში პერსონალური ინფორმაციის მქონე ობიექტიდს - data! 
                                    //  Mydata.data - ეს ნიშნავს რომ მთიალინი data.json - ის მონაცემებიდან ამოვიღე მასში არსებული data (პერსონალური ინფორმაციის მატარებელი ინფო)





        // Create the table
        function createTable(Mydata) {
          var table = document.createElement("table");
          var thead = document.createElement("thead");
          var tbody = document.createElement("tbody");

          // Create table header
          var headerRow = document.createElement("tr");
          // Change the header names here
          var headerNames = ["სახელი", "პროფესია", "დაბადების ადგილი",'ზიპ კოდი', "კარიერის დაწყება", "სასურველი ხელფასი"]; // Example header names
          headerNames.forEach(function(headerName) {
            var th = document.createElement("th");
            th.textContent = headerName;
            headerRow.appendChild(th);
          });
          thead.appendChild(headerRow);

          // Create table rows
          Mydata.forEach(function(obj) {
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
        tableContainer.appendChild(createTable(personalInformation));
      })
      .catch(error => {
        // Handle any error that occurred during the fetch
        console.error('Error:', error);
      });