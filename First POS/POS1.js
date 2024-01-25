/*window.open("recipt_printer.html");
window.open("recipt_printer.html");
window.open("recipt_printer.html");*/

function saveStaticDataToFile() {
  // This variable stores all the data.
  let data = '';

  all_day_customers = JSON.parse(localStorage.getItem('all_day_customers'));

  all_day_customers.forEach(customer => {
    data += 'Customer # ' + String(customer[0].customer_count) + ' \n';
    customer[1].bill.forEach(myitem =>{
      data += `${myitem[1]} x ${myitem[0]}(SAR ${myitem[2]}) = SAR ${myitem[3]}\n`;
    })
    data += `Total Bill = SAR ${customer[2].total_bill}\n`;
    data += `Amount Paid = SAR ${customer[3].amountPaid}\n`;
    data += `Discount = SAR ${customer[4].discount}\n`;
    data += `Balance = SAR ${customer[5].balance}\n\n`;
  })

  data += `Total Sale = SAR ${totalSales}\n`;
  data += `Total Products Sold = ${totalProductSold}\n`;
  data += `Total Discount = SAR ${totalDiscount}\n`;
  myArray.forEach(sale => {
    data += `${sale.sold} X ${sale.name}(SAR ${sale.price}) Sold = SAR ${Number(sale.sold) * Number(sale.price)}\n`;
  })

  data += '\n\n';




// Convert the text to BLOB.
const textToBLOB = new Blob([data], { type: 'text/plain' });
const sFileName = 'results.txt';	   // The file to save the data.

let newLink = document.createElement("a");
newLink.download = sFileName;

if (window.webkitURL != null) {
  newLink.href = window.webkitURL.createObjectURL(textToBLOB);
}
else {
  newLink.href = window.URL.createObjectURL(textToBLOB);
  newLink.style.display = "none";
  document.body.appendChild(newLink);
}

newLink.click(); 
}

let menu12 = document.getElementById('menu');

let totalSales = 0;
let totalProductSold = 0;
let totalDiscount = 0;
let netIncome = 0;



let myArray = [];


function someFunc() {
  let str = '';

  let x = new XMLHttpRequest();
  x.open('GET', 'data.txt', false);    // "false" for synchronous
  x.onreadystatechange = function () {
    if (x.readyState === 4) {
      switch (x.status) {
        case 200:
          str += x.responseText.trim();
          break;

        default:
          return '';   // Or something
          break;
      }
    }
  }
  x.send();



  return str;
}

// let abc = someFunc();

// let myData = abc.split(';');
// let i = 1;
// localStorage.clear();
// myData.forEach(data2 => {
  
//   let data_products = data2.split(',');
//   let product_list = { name: `${data_products[0]}`, image_link: `${data_products[1]}`, id: i, price: Number(`${data_products[2]}`), sold: Number(`${data_products[3]}`), stock: Number(`${data_products[4]}`), details: `${data_products[5]}` };
//   myArray.push(product_list);
//   //console.log(" ");
//   //console.log(product_list.name, product_list.image_link, product_list.id, product_list.price, product_list.sold, product_list.stock, product_list.details);
  

//   localStorage.setItem(`name${i}`, `${data_products[0]}`);
//   localStorage.setItem(`image_link${i}`, `${data_products[1]}`);
//   localStorage.setItem(`id${i}`, i);
//   localStorage.setItem(`price${i}`, Number(`${data_products[2]}`));
//   localStorage.setItem(`sold${i}`, Number(`${data_products[3]}`));
//   localStorage.setItem(`stock${i}`, Number(`${data_products[4]}`));
//   localStorage.setItem(`details${i}`, `${data_products[5]}`);
  
//   i += 1;


// });

let ids = JSON.parse(localStorage.getItem('available_ids'));

let max_id = Number(localStorage.getItem('max_id'));



for (i of ids){
  let name12 = localStorage.getItem(`name${i}`);
  let image_link12 = localStorage.getItem(`image_link${i}`);
  let price12 = localStorage.getItem(`price${i}`);
  let sold12 = localStorage.getItem(`sold${i}`);
  let stock12 = localStorage.getItem(`stock${i}`);
  let details12 = localStorage.getItem(`details${i}`);

  let product_list = { name: name12, image_link: image_link12, id: i, price: Number(price12), sold: Number(sold12), stock: Number(stock12), details: details12 };
  myArray.push(product_list);
  
}


let info = null;

max_id = myArray.length;
let customer_count = localStorage.getItem("customer_count");
let bill = [];
let actual_quantity = 1;

let all_day_customers = JSON.parse(localStorage.getItem('all_day_customers'));
let thisCustomer = [];


myArray.forEach(data => {
  menu12.innerHTML += `<div id="${data['id']}" class="item" data-bs-toggle="popover" title="ID :  ${data['id']}" data-bs-content=" " value="${data['name']}"><div class='col'><div class="card" style="height:290px; width: 290px;">
        <div class="card-image">
        <img src="${data['image_link']}" style="height:200px; width: 290px;"></a>
        </div>
        <div class="card-content">   
        <div class="container"><pre><h3 style="text-align: center;" id='name${data['id']}'>${data['name']}</h3><span style="text-align: left; color:red;" id='stock${data['id']}'>${String(data['stock'])}</span> <h6 style="text-align: right" id='price${data['id']}'>${"                      SAR " + String(data['price'])}</h6></pre></div><div class="card-action"></a></div>
        </div>
        </div>
        </div></div>`
});


let items = document.querySelectorAll('.item');
items.forEach(item => {
  item.onclick = () => {
    console.log(item.id)
    let product_data = null;
    myArray.forEach(data => { if (item.id == data['id']) { product_data = data } })
    let quantity = null;
    

    quantity = prompt(`1 ${product_data['name']} selected, please input a number if more than 1 is ordered`);
    if (quantity !== null && quantity !== undefined) { actual_quantity = Number(quantity) };
    if (actual_quantity == 0) { actual_quantity = 1 };

    let amount = actual_quantity * product_data['price'];


    // Add and commit the following details into a database and also in a text file for each customer
    let details = [product_data['name'], actual_quantity, product_data['price'], amount];
    bill.push(details);

    product_data['stock'] -= actual_quantity;
    product_data['sold'] += actual_quantity;

    localStorage.setItem(`stock${item.id}`, product_data['stock']);
    localStorage.setItem(`sold${item.id}`, product_data['sold']);

    let c = Number(item.id) - 1;

    myArray[c].stock = product_data['stock'];
    myArray[c].sold = product_data['sold'];


    

    let updator = document.getElementById(`stock${product_data['id']}`);
    updator.innerText = product_data['stock'];





  }
})

const amountInput = document.getElementById('amount')
const discountInput = document.getElementById('discount')
const balanceInput = document.getElementById('balance')
const modal2 = document.getElementById('modal-body2');
document.getElementById("discount").defaultValue = 0;
let table = document.getElementById("checkout_table");
let amountPaid = 0;
let discount = 0;
let total_bill = 0;

function checkout() {
  total_bill = 0
  customer_count = Number(localStorage.getItem("customer_count"));
  customer_count += 1;
  localStorage.setItem("customer_count", customer_count);



  let content = '';
  let count = 1;
  bill.forEach(product => {
    console.log(product[0], product[1], product[2], product[3]);
    total_bill += Number(product[3]);
    content += `<tr>
            <th scope="row">${count}</th>
            <td>${product[0]}</td>
            <td>${product[1]}</td>
            <td>${product[2]}</td>
            <td>${product[3]}</td>
          </tr>`
    count += 1
  });

  console.log({ total_bill });
  content += `<tr>
        <th scope="row"> </th>
        <td> </td>
        <td><h4>Total Amount</h4></td>
        <td><h4>${total_bill}</h4></td>
        <td> </td>
        
      </tr>`


  table.innerHTML = content;
  totalProductSold += (count - 1);
  totalSales += total_bill;

  thisCustomer.push({customer_count}, {bill}, {total_bill});





}

let payoutBtn = document.getElementById("payoutBtn");
payoutBtn.onclick = () => {
  amountPaid = Number(amountInput.value);

  




  try {
    discount = Number(discountInput.value);
  }
  catch (err) {
    discount = 0;
  }

  console.log(amountPaid);
  console.log({ discount });

  



  total_bill -= discount;

  totalDiscount += discount;

  console.log({ total_bill });

  const balance = amountPaid - total_bill;

  thisCustomer.push({amountPaid}, {discount}, {balance});

  all_day_customers.push(thisCustomer);

  localStorage.setItem("all_day_customers", JSON.stringify(all_day_customers));

  let okay_btn = document.getElementById('okay');

  if (balance < 0) {

    modal2.innerHTML = `<div class="container">
        <h1 id='balance' style="text-align: center; font-family: 'Times New Roman', Times, serif; background-color: red; color: antiquewhite; border-radius: 1cm;">Amount paid must be greater than the bill otherwise add some discount amount</h1>
      </div>`

    okay_btn.onclick = () => {
      alert("Please Click the CHECKOUT button and enter a valid AMOUNT to proceed or enter a discount value")
    };


  } else {
    modal2.innerHTML = `<div class="container">
        <h1 id='balance' style="text-align: center; font-family: 'Times New Roman', Times, serif; background-color: forestgreen; color: antiquewhite; border-radius: 1cm;">Balance : ${balance}</h1>
      </div>`
    okay_btn.onclick = () => {



      bill = []
      amountPaid = 0;
      discount = 0;
      total_bill = 0;
      modal2.innerHTML = '<div> </div>';
      table.innerHTML = '<div> </div>';
      amountInput.value = '';
      discountInput.value = 0;
      thisCustomer = [];



    };
  }
}

let id = null;
let modal4 = document.getElementById('modal-body4');
let modal5 = document.getElementById('modal-body5');

let modal4_footer = document.getElementById('modal-footer4');
let modal5_footer = document.getElementById('modal-footer5');

let proceed_btn4 = document.getElementById("proceed-button4");
let proceed_btn5 = document.getElementById("proceed-button5");

let id_input1 = document.getElementById("inputGroup-sizing-lg4");
let id_input2 = document.getElementById("inputGroup-sizing-lg5");

proceed_btn4_onclick = () => {
  console.log("button proceed 4 working fine");

  id = id_input1.value - 1;

  let myObject = myArray[id];
  console.log({ id });

  if (id < max_id) {
    modal4.innerHTML = `<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputName42" value="${myObject.name}">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Price</label>
    <input type="number" class="form-control" id="inputName422" value="${myObject.price}">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Image Link</label>
    <input type="text" class="form-control" id="inputImage2" value="${myObject.image_link}">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Details</label>
    <input type="text" class="form-control" id="inputDetails2" value="${myObject.details}">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Stock</label>
    <input type="number" class="form-control" id="inputStock2" value="${myObject.stock}">
  </div>
  
</form>`
    modal4_footer.innerHTML = `<button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="remove_item()">Remove</button>`

  }
}




proceed_btn5_onclick = () => {
  console.log("button proceed 5 working fine");

  id = id_input2.value - 1;
  console.log({ id });
  let myObject = myArray[id];

  if (id < max_id) {
    modal5.innerHTML = `<form class="row g-3">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Name</label>
      <input type="text" class="form-control" id="inputName43" value="${myObject.name}">
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Price</label>
      <input type="number" class="form-control" id="inputName433" value="${myObject.price}">
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Image Link</label>
      <input type="text" class="form-control" id="inputImage3" value="${myObject.image_link}">
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">Details</label>
      <input type="text" class="form-control" id="inputDetails3" value="${myObject.details}">
    </div>
    <div class="col-md-6">
      <label for="inputCity" class="form-label">Stock</label>
      <input type="number" class="form-control" id="inputStock3" value="${myObject.stock}">
    </div>
    
  </form>`

    modal5_footer.innerHTML = `<button type="button" class="btn btn-info" data-bs-dismiss="modal" onclick="save_changes_edit()">Save Changes</button>`
  }
}

const proceed_add = () => {
  let name_add = document.getElementById('inputName4').value;
  let image_link_add = document.getElementById('inputImage').value;
  let price_add = document.getElementById('inputPrice4').value;
  let details_add = document.getElementById('inputDetails').value;
  let stock_add = document.getElementById('inputStock').value;

  let id_now = String(Number(localStorage.getItem('max_id')) + 1 );


  localStorage.setItem(`name${id_now}`, name_add );
  localStorage.setItem(`image_link${id_now}`, image_link_add);
  localStorage.setItem(`price${id_now}`, price_add );
  localStorage.setItem(`stock${id_now}`, stock_add );
  localStorage.setItem(`details${id_now}`, details_add );

  localStorage.setItem("max_id", id_now);

  let ids2 = JSON.parse(localStorage.getItem('available_ids'));
  ids2.push(Number(id_now));
  localStorage.setItem("available_ids", JSON.stringify(ids2));

  location.reload();

};

const proceed_remove = () => {
  modal4.innerHTML = `<div class="input-group input-group-lg">
  <span class="input-group-text" >ID</span>
  <input type="number" id="inputGroup-sizing-lg4" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Enter ID of Product to be removed here">
</div>
<br>
<br>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-info" type="button" id="proceed-button4" onclick="proceed_btn4_onclick()">Proceed</button>
</div>`

  modal4_footer.innerHTML = '<div></div>'
};

const proceed_edit = () => {
  modal5.innerHTML = `<div class="input-group input-group-lg">
  <span class="input-group-text" >ID</span>
  <input type="number" id="inputGroup-sizing-lg5" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Enter ID of Product to be edited here">
</div>
<br>
<br>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-info" type="button" id="proceed-button5" onclick="proceed_btn5_onclick()">Proceed</button>
</div>`

  modal5_footer.innerHTML = '<div></div>'
};


netIncome = totalSales - totalDiscount;

console.log({ netIncome });

console.log(all_day_customers);



const save_changes_edit = () => {
  let name_edit = document.getElementById('inputName43').value;
  let image_link_edit = document.getElementById('inputImage3').value;
  let price_edit = document.getElementById('inputName433').value;
  let details_edit = document.getElementById('inputDetails3').value;
  let stock_edit = document.getElementById('inputStock3').value;

  id = String(Number(id) + 1);

  localStorage.setItem(`name${id}`, name_edit );
  localStorage.setItem(`image_link${id}`, image_link_edit);
  localStorage.setItem(`price${id}`, price_edit );
  localStorage.setItem(`stock${id}`, stock_edit );
  localStorage.setItem(`details${id}`, details_edit );

  location.reload();
  proceed_edit();
};


const remove_item = () => {
  let name_edit = document.getElementById('inputName42').value;
  let image_link_edit = document.getElementById('inputImage2').value;
  let price_edit = document.getElementById('inputName422').value;
  let details_edit = document.getElementById('inputDetails2').value;
  let stock_edit = document.getElementById('inputStock2').value;

  id = String(Number(id) + 1);

  localStorage.removeItem(`name${id}`);
  localStorage.removeItem(`image_link${id}`);
  localStorage.removeItem(`price${id}`);
  localStorage.removeItem(`stock${id}`);
  localStorage.removeItem(`details${id}`);

  let ids3 = JSON.parse(localStorage.getItem('available_ids'));
  for (i in ids3){
    if (ids3[i] == id){
      ids3.splice(i, 1);
    }
  }
  localStorage.setItem("available_ids", JSON.stringify(ids3));

  location.reload();
  proceed_remove();
};


const generate_results = () => {
  
};

let results_btn = document.getElementById('generate_results');
results_btn.onclick = () => {
  saveStaticDataToFile()
  localStorage.setItem(`all_day_customers`, JSON.stringify([]));
}








/* The End */









/* {name: 'Chicken Biryani', image_link: 'images/biryani.png', id: 1, price: 20, sold:0, stock: 50, details: 'Spicy Biryani with Potato and chicken' },
    {name: 'French Fries', image_link: 'images/french fries.png', id: 2, price: 10, sold:0, stock: 80, details: 'Tasty and spicy French Fries' },
    {name: 'Daal Roti', image_link: 'images/daal roti.png', id: 3, price: 20, sold:0, stock: 50, details: 'Delicious Daal with fresh roti from tandoor' },
    {name: 'Curry / Salan', image_link: 'images/curry.png', id: 4, price: 20, sold:0, stock: 50, details: 'Spicy and delicious curry' },
    {name: 'Beef Steak', image_link: 'images/steak.png', id: 5, price: 50, sold:0, stock: 20, details: 'Fresh and Tender Beef steak' },
    {name: 'burger', image_link: 'images/burger.png', id: 6, price: 25, sold:0, stock: 65, details: 'Delicious double patty beef burger' },
    {name: 'Mix Food Platter', image_link: 'images/mix food.png', id: 7, price: 100, sold:0, stock: 5, details: 'Mix BarBQ served with a platter of Rice' },
    {name: 'Teleteg', image_link: 'images/teleteg.png', id: 8, price: 10, sold:0, stock: 50, details: 'Dine in addon' },
    {name: 'Top Bar 1', image_link: 'images/top bar 1.png', id: 9, price: 12, sold:0, stock: 52, details: 'Nothing to show up' },
    {name: 'Top Bar 2', image_link: 'images/top bar 2.png', id: 10, price: 15, sold:0, stock: 50, details: 'Nothing to show up' },
    {name: 'Top Bar 3', image_link: 'images/top bar 3.png', id: 11, price: 18, sold:0, stock: 55, details: 'Nothing to show up' },
    {name: 'logo', image_link: 'images/121212.jpeg', id: 12, price: 10, sold:0, stock: 50, details: 'Just Kidding' } */

