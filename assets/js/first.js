fetch('./assets/js/json/data.json') // 1. მივწვდი data.json ფაილს! ამ js ფაილიდან ჯერ მიდის index.html ში და იქედან იღებს მისამართს და წვდება json - ს!
  .then(response => response.json())
  .then(Mydata => { // 2. ამოვიღე მთლიანი მონაცემები data.json - იდან და სახელი დავარქვი Mydata! 


    const personalInformation = Mydata.data; // შევქმენი ცვლადი სახელწოდებით personalInformation - და გადავეცი იმ ჯსონსში პერსონალური ინფორმაციის მქონე ობიექტიდს - data! 
    //  Mydata.data - ეს ნიშნავს რომ მთიალინი data.json - ის მონაცემებიდან ამოვიღე მასში არსებული data (პერსონალური ინფორმაციის მატარებელი ინფო)


    function createTable(Mydata) { // შევქმენი ფუნქცია და პარამეტრად გადავეცი მთლიანი მონაცემები data.json - იდან რაც ამოვიღეთ და-fetch - ვით!
      // ვქმნი table - ს (tag - ებს) js - დან! table - შედგება ოთხი კომპონენტისგან: 1) table - მთლიანი ცხრილი; 2) thead დაჯგუფება; 3) tbody -  დაჯგუფება; 4) tfoot დაჯგუფება.
      var table = document.createElement("table"); // 1) <table> ტეგი - მთლიანი ცხრილი (table)
      var thead = document.createElement("thead"); // 2) <thead> ტეგი გამოიყენება HTML table header - ის  content - ის დასაჯგუფებლად. (header)
      var tbody = document.createElement("tbody"); // 3) <tbody> ტეგი გამოიყენება HTML table table - ის  content - ის დასაჯგუფებლად. (body)
      var tfoot = document.createElement("tfoot"); // 4) <tfoot> ტეგი გამოიყენება HTML table footer - ის  content - ის დასაჯგუფებლად. (footer)


      // ვქმნი საჩვენებელ ნიმუშს (რომელიც ამოიღებს მხოლოდ ორ მონაცემს) , როგორი იქნება html - ში, და-fetch - ვით ამოღებული const personalInformation = Mydata.data - ს ინფორმაცია!

      /*
      <table>

        <thead> -------------- <thead> ტეგი გამოიყენება HTML table header - ის  content - ის დასაჯგუფებლად. (ტეგის დასაწყისი)
                <tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასაწყისი)
                        <th>სახელი</th>             ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
                        <th>პროფესია</th>           ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
                        <th>დაბადების ადგილი</th>  ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
                        <th>ზიპ კოდი</th>           ---------------- th ნიშნავს:  table header - ცხრილის სათაურს!  
                        <th>კარიერის დაწყება</th>    ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
                        <th>ხელფასი</th>            ----------------- th ნიშნავს:  table header - ცხრილის სათაურს! 
                </tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასასრული)
        </thead> --------------- <thead> ტეგი გამოიყენება HTML table header - ის  content - ის დასაჯგუფებლად. (ტეგის დასასრული)

        <tbody> -------------- <tbody> ტეგი გამოიყენება HTML table table - ის  content - ის დასაჯგუფებლად. (ტეგის დასაწყისი)
                <tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასაწყისი)
                        <td>Tiger Nixon</td>         ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                        <td>System Architect</td>    ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                        <td>Edinburgh</td>           ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                        <td>5421</td>                ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                        <td>2011/04/25</td>          ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                        <td>Ger$320,800</td>         ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                </tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასასრული)

                <tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასაწყისი)
                        <td>Garrett Winters</td>     ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                        <td>Accountant</td>          ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                        <td>Tokyo</td>               ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                        <td>8422</td>                ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                        <td>2011/07/25</td>          ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                        <td>$170,750</td>            ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                </tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასასრული)
        <tbody> -------------- <tbody> ტეგი გამოიყენება HTML table table - ის  content - ის დასაჯგუფებლად. (ტეგის დასასრული)


        <tfoot>
                <tr>  ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასაწყისი)
                        <td colspan="6" style="text-align:center">სტატუსი: აქტიურია!</td> ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
                </tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასასრული)
        </tfoot>

      </table>

 
    მივიღებთ ამას:
    ------------------------------------------------------------------------------------------------------------------------
    სახელი	            პროფესია	დაბადების        ადგილი	ზიპ     კოდი	       კარიერის დაწყება	       სასურველი ხელფასი   ------------ thead
    ------------------------------------------------------------------------------------------------------------------------
    Tiger Nixon   	      System Architect	         Edinburgh	     5421	            2011/04/25	           Ger$320,800       ------------ tbody - tr
    Garrett Winters	         Accountant	               Tokyo	       8422	            2011/07/25	            $170,750         ------------ tbody - tr
    ------------------------------------------------------------------------------------------------------------------------
                                                         სტატუსი: აქტიურია!                                                   ------------ tfoot 
    ------------------------------------------------------------------------------------------------------------------------
    
    დამატებითი ინფორმაცია: 
    1)<th colspan="2">Name</th> - ნიშნავს რომ ორ სვეტზე გადაიწევა name - ი გვერდულად!
    <th rowspan="2">Phone</th> - ნიშნავს რომ ორ სვეტზე გადაიწევა Phone - ი შვეულად ზემოთ ან ქვემთ!
    2) table, thead, tbody, tfoot - გამოიყენება ერთად და დიდი ინფორმაციის შესატანად არის რეკომენდირებული!
    */








      // ვქმნი ცვლადს და მასში გადავცემ ჯსდან შექმნილ tr tag- ს (tr ნიშნავს:  table row - ცხრილის მწკრივს!)
      var headerRow = document.createElement("tr");

      // შევქმენი ცვლადი headerNames და გადავეცი მასივი, რომლითაც შეივსება table - ის  th - ი (th ნიშნავს:  table header - ცხრილის სათაურს!)
      var headerNames = ["სახელი", "პროფესია", "დაბადების ადგილი", 'ზიპ კოდი', "კარიერის დაწყება", "სასურველი ხელფასი"];


      // ცვლადი headerNames - ს ვციკლავთ და ვიღებთ მასივის ელემენტებს (სათაურებს)
      headerNames.forEach(function (headerName) { // headerNames ის ციკლირებულ data - ს გადავცემ ფუნქციის პარამეტრს - headerName - და უკვე მასში არსევული  data არის ციკლირებული!

        // ვქმნი th ცვლადს და მასში გადავცემ ჯსდან შექმნილ th tag- ს (th ნიშნავს:  table header - ცხრილის სათაურს!)
        var th = document.createElement("th");

        // th ში ტექსტად გადავეცი - ციკლირებული data - სათაურები რომელშიც გვეწერა (headerNames მასივიდან ამოღებული)
        th.textContent = headerName;
        
        // headerRow - შვილი გავხადე th - რომელშიც უკვე არის მოქცეული headerNames მასივიდან ამოღებული ინფორმაცია, რომელიც თავის მხრივ მოთავსდა th - ში!
        headerRow.appendChild(th);



// მივიღებთ ამას!
//      <tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასაწყისი)
//         <th>სახელი</th>             ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
//         <th>პროფესია</th>           ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
//         <th>დაბადების ადგილი</th>  ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
//         <th>ზიპ კოდი</th>           ---------------- th ნიშნავს:  table header - ცხრილის სათაურს!  
//         <th>კარიერის დაწყება</th>    ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
//         <th>სასურველიხელფასი</th>  ----------------- th ნიშნავს:  table header - ცხრილის სათაურს! 
//      </tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასასრული)
      });



      // thead - ის შვილი გავხადე headerRow!
      thead.appendChild(headerRow);

// მივიღებთ ამას!
//    <thead> -------------- <thead> ტეგი გამოიყენება HTML table header - ის  content - ის დასაჯგუფებლად. (ტეგის დასაწყისი)
//       <tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასაწყისი)
//               <th>სახელი</th>             ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
//               <th>პროფესია</th>           ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
//               <th>დაბადების ადგილი</th>  ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
//               <th>ზიპ კოდი</th>           ---------------- th ნიშნავს:  table header - ცხრილის სათაურს!
//               <th>კარიერის დაწყება</th>    ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
//               <th>ხელფასი</th>            ----------------- th ნიშნავს:  table header - ცხრილის სათაურს!
//       </tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასასრული)
//    </thead> --------------- <thead> ტეგი გამოიყენება HTML table header - ის  content - ის დასაჯგუფებლად. (ტეგის დასასრული)








      // thead - უკვე შექმნილია, ახლა გვჭირდება tbody - ის შექმნა!

      // იგივე ლოგიკაა რაც thead - ზე გავაკეთეთ!
      Mydata.forEach(function (obj) { // data.json დან ვიღებთ მთლიან ინფორმაციას , და ციკლში ვატარებთ და გადავცემთ პარამეტრში სახელწოდებით obj - ს ! 
 
        var row = document.createElement("tr"); // ვქმნით tr tag - ს და გადავცემთ row - ცვლადს!


        Object.keys(obj).forEach(function (key) { // ვციკლავთ მეორედ obj - ს - თანმიმდევრობით რომ წამოიღოს პერსონალის ინფორმაცია! ციკლის ციკლი!



          var cell = document.createElement("td"); // ვქმნით td tag - ს და გადავცემთ cell - ცვლადს!



          cell.textContent = obj[key]; // cell - ს (td - ს) ტექსტად გადავცემთ Mydata - ს ინფორმაციას , მიჯრით დალაგებულს!

          row.appendChild(cell); // row - ს (tr - ს) შვილად ვაქცევ cell - ს (td - ს) 


          // მივიღებთ ამას!
          // <tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასაწყისი)
          //       <td>Tiger Nixon</td>         ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
          //       <td>System Architect</td>    ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
          //       <td>Edinburgh</td>           ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
          //       <td>5421</td>                ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
          //       <td>2011/04/25</td>          ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
          //       <td>Ger$320,800</td>         ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
          // </tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასასრული)
        });

        tbody.appendChild(row); // tbody - ის შვილად ვაქცევ row !
        tbody.appendChild(row); // tbody - ის შვილად ვაქცევ row !
        
        // მივიღებთ ამას!
        // <tbody> -------------- <tbody> ტეგი გამოიყენება HTML table table - ის  content - ის დასაჯგუფებლად. (ტეგის დასაწყისი)
        //         <tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასაწყისი)
        //                 <td>Tiger Nixon</td>         ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
        //                 <td>System Architect</td>    ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
        //                 <td>Edinburgh</td>           ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
        //                 <td>5421</td>                ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
        //                 <td>2011/04/25</td>          ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
        //                 <td>Ger$320,800</td>         ----------------- td ნიშნავს:  table data - ცხრილის მონაცემს!
        //         </tr> ----------------- tr ნიშნავს:  table row - ცხრილის მწკრივს! (ტეგის დასასრული)
        // <tbody> -------------- <tbody> ტეგი გამოიყენება HTML table table - ის  content - ის დასაჯგუფებლად. (ტეგის დასასრული)



      });





  // Create table footer row and cell
  var footerRow = document.createElement("tr");
  var footerCell = document.createElement("td");

  footerCell.style.textAlign = "center";
  footerCell.textContent = "სტატუსი: აქტიურია!";
  footerRow.appendChild(footerCell);
  tfoot.appendChild(footerRow);














      // table - ის შვილად ვაქციე thead და tbody!
      table.appendChild(thead);
      table.appendChild(tbody);
      table.appendChild(tfoot);

      return table; // დააბრუნებს შედეგს ანუ ცხრილს!!
    }

    // tableContainer ცვლადში გადავეცი div - ის  id!
    var tableContainer = document.getElementById("tableContainer");

    // div - ის id - ში გადავეცით მთლიანი ფუნქცია რომელიც ზემოთ შევქმენით და ფუნქცხიას პარამეტრად გავატანე პერსონალური მონაცემები!
    tableContainer.appendChild(createTable(personalInformation));

  })


  .catch(error => { // თუ ინფო არ დაბრუნდა ამოარტყამს ერორს!
    console.error('Error:', error);
  });