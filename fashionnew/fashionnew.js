// var man=[
//     {
//         id:1,
//         name:"The Cosmo (Den) ",
//         code:"TC1025011BA",
//         price:"250.000",
//         image: "https://im.uniqlo.com/global-cms/spa/res49e90cc36997d9e80d8c61003148d2e8fr.jpg" 
//     },
//     {
//         id:2,
//         name:"Ao thun ",
//         code:"TC1025111BA",
//         price:"398.000",
//         image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441596/item/goods_09_441596.jpg?width=1008&impolicy=quality_75"
//     },
//     {
//         id:1,
//         name:"Ao thun ngan tay",
//         code:"TC1025011BA",
//         price:"300.000",
//         image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/427917/item/vngoods_25_427917.jpg?width=1008&impolicy=quality_75"
//     },
//     {
//         id:1,
//         name:"T Shirt",
//         code:"TC1025011BA",
//         price:"300.000",
//         image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/422990/item/vngoods_57_422990.jpg?width=1008&impolicy=quality_75"
//     }
    
// ]
// var women=[
//     {
//         id:1,
//         name:"The Cosmo (Den) ",
//         code:"TC1025011BA",
//         price:"250.000",
//         image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450296001/item/goods_12_450296001.jpg?width=1008&impolicy=quality_75"
//     },
//     {
//         id:2,
//         name:"Váy ngắn",
//         code:"TC1025111BA",
//         price:"398.000",
//         image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450296/item/goods_09_450296.jpg?width=1008&impolicy=quality_75"
//     },
//     {
//         id:1,
//         name:"Váy",
//         code:"TC1025011BA",
//         price:"250.000",
//         image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455754/item/goods_55_455754.jpg?width=1008&impolicy=quality_75"
//     },
//     {
//         id:1,
//         name:"The Cosmo (Den) ",
//         code:"TC1025011BA",
//         price:"300.000",
//         image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455838/item/goods_61_455838.jpg?width=1008&impolicy=quality_75"
//     }
// ];
function listProducts(){
    for (let i=0; i<=man.length-1;i++){
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">'
        demo += '<img src="'+man[i].image+'" class="card-img-top" alt="...">'
        demo += '<div class="card-body">';
        demo += '<h5 class="">'+man[i].name+'</h5>';
        demo += '<p class="card-text"> '+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }

    for (let i=0; i<=man.length-1;i++){
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">'
        demo += '<img src="'+women[i].image+'" class="card-img-top" alt="...">'
        demo += '<div class="card-body">';
        demo += '<h5 class="">'+women[i].name+'</h5>';
        demo += '<p class="card-text"> '+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    }
}