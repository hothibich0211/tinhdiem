function Save() {	
  localStorage.setItem('listProduct', JSON.stringify(product));	
}	
  //lấy sản phẩm	
function load() {	
  product = JSON.parse(localStorage.getItem('listProduct'));	
}	
  //xuất sản phẩm ra html	
if (localStorage.getItem('listProduct') != null) {	
  load();	
}	
var listLocal = function() {	
for (var i in product) {	
  var data = JSON.parse(JSON.stringify(product[i]));	  
  var listproduct = '<div class="col-3">';	
  listproduct += '<div class="card product p-2" styte="width:auto">';	
  listproduct +=	'<img class="card-img-top" src="' + data.img + '" alt="...">';	
  listproduct +=	'<div class="card-title product-title text-center h5" > '+	data.name + '	</div>';	
  listproduct +=	'<div class="price text-center h6"> '+ data.price + '₫</div>';	
  listproduct +=	'<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +	data.id +	'" data-name="' +	data.name +	'" data-img=" '+	data.img +	' " data-price="' +	data.price +'	" onclick="tks()">';	
  listproduct += '<a>';	
  listproduct += '<i class="fas fa-cart-plus"></i>';	
  listproduct += '</a>';	
  listproduct += '</span>';	
  listproduct += '</div>';	
  listproduct += '</div>';	     
  document.getElementById('banchay').innerHTML += listproduct;	
  }	
  Save();	
};	
  listLocal();	
  localStorage.clear();	


// var data=localStorage.getItem("listProduct")? JSON.parse(localStorage.getItem("listProduct")):[]
// var addProduct = function () {
//   var A=document.getElementById("name")
//   var B=document.getElementById("img")
//   var C=document.getElementById("price")

//   var mang={
//     AA:A,
//     BB:B,
//     CC:C
//   }
//   data.push(mang)
//   localStorage.setItem("listProduct",JSON.stringify(data))



//   // var Product = {
//   //     id: 'SP' + parseInt(product.length +1),
//   //     name: document.getElementById('name').value,
//   //     img: document.getElementById('img').value,
//   //     price: document.getElementById('price').value};
//   // product.push(Product);
//   // localStorage.setItem('listProduct',JSON.stringify(product));
//   // window.location.reload();

//   }

  var addProduct = function(){
    var Product ={
      id: 'SP' + parseInt(product.length +1),
      name: document.getElementById('name').value,
      img: document.getElementById('img').value,
      price: document.getElementById('price').value,
    };
    product.push(Product);
    localStorage.setItem('listProduct', JSON.stringify(product));
    window.location.reload();
  }


var productAdmin =function () {
  var listproduct1='';
  for (var i in product) {
      var data=JSON.parse(JSON.stringify(product[i]));
      var listproduct1 ='</tr>';
      listproduct1 ='<td>' +data.id +'</td>';
      listproduct1 ='<td>' +data.name +'</td>';
      listproduct1 ='<td><img src="../img"'+data.img+'"alt=" " style=width:50px" + </td>';
      listproduct1 ='<td>' +data.price +'</td>';
      listproduct1 ='<td> <button onclick="updateProductc (' + i+') " class="btn btn-outline-danger" date-toggle="modal" data-target="#updateProduct">' + '</td>';
      listproduct1+='<td><button onclick="deleteProduct" (' + i + ') " class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
      listproduct1+='</tr>';
      document.getElementById('product-admin').innerHTML+=listproduct1;
  }
};
//Xóa sản phẩm
var deleteProduct=function() {
  product.splice(i,1);
  localStorage.setItem('listProduct',JSON.stringify(product));
  window.location.reload();
};

// Sửa sản phẩm
var updateProductc = function(i){
  var k = product[i];
  document.getElementById('idd').value = k.id;
  document.getElementById('named').value =k.name;
  document.getElementById('imgd').value = k.img;
  document.getElementById('priced').value =k.price;
  document.getElementById('idd').setAttribute('disabled','disabled');
  document.getElementById('submitUpdate').innerHTML ='<button class ="btn btn-outline-danger mt-3" onclick="submitUpdate('+i+')">Đồng ý</button>';
};

var submitUpdate =function(i){
  var k = product[i];
  k.id = document.getElementById('idd').value;
  k.name = document.getElementById('named').value;
  k.img = document.getElementById('imgd').value;
  k.price = document.getElementById('priced').value;
  localStorage.setItem('listProduct',JSON.stringify(product));
  window.location.reload();
};
