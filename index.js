const productname = document.getElementById("productname");
const productnumber = document.getElementById("productnumber");
const productunitprice = document.getElementById("productunitprice");
const produproductunitpricectcopmlete =
  document.getElementById("productcopmlete");
const domoshoplist = document.getElementById("domoshoplist");
const list = document.getElementById("list");
const inpsearch = document.getElementById("inpsearch");
const array = document.getElementById("array")
const notarray = document.getElementById("notarray")
let shoplist = [];

let result = "";

const updateInput = () => {
  let filter = shoplist.filter((item) => {
    return item.text.includes(inpsearch.value);
  });
 let doneArray = shoplist.filter((item)=>{
   return item.done === true 
 }
 );

 array.innerHTML=doneArray.length
 let notdoneArray = shoplist.filter((item)=>{
  return item.done === false
}
);




notarray.innerHTML=notdoneArray.length
 console.log("doneArray",doneArray.length);
 console.log("notdoneArray",notdoneArray.length);
  result = "";

  // shoplist.push(productname.value)
  //  console.log(shoplist);

  for (let i = 0; i < filter.length; i++) {
    result += `
         <div class="asli">
         <div class="button">
       
         <img src="download.jpg" class="doneitem"onclick="deleteitem(${i})" >
         <img src="download.png" class="doneitem" onclick="doneitem(${i})" >
         
         </div>
         <div class="item">
       <p class="${donecss(i)}">${
      shoplist[i].productnumber * shoplist[i].productunitprice
    }</p>
       <p  class="${donecss(i)}">${shoplist[i].productnumber}</p>
       <h3 class="${donecss(i)}">${filter[i].text}</h3>
    </div>
    </div>
    `;
  }
  
  domoshoplist.innerHTML = result;
  console.log(shoplist);
};

const updateinputsearch = () => {};

const updateproductcopmlete = () => {
  const obj = {
    text: productname.value,
    productnumber: productnumber.value,
    productunitprice: productunitprice.value,
    done: false,
  };
  if (productname.value==='') {
    alert("نام محصول را وارد کنید")
  } else if  (productnumber.value===''){
    alert("تعداد محصول را وارد کنید")
  } else if (productunitprice.value==='') {
    alert("قیمت واحد محصول را وارد کنید")
  } else {
    shoplist.push(obj);
  }
  
  
  productname.value = "";
  productnumber.value = "";
  productunitprice.value = "";
  console.log(obj);

  updateInput();
};

const deleteitem = (i) => {
  shoplist.splice(i, 1);

  updateInput();
};

const doneitem = (i) => {
  shoplist[i].done = !shoplist[i].done;
  console.log(shoplist[i].done);
  updateInput();
  console.log(shoplist);
};

const donecss = (i) => {
  console.log(shoplist);
  if (shoplist[i].done === true) {
    return "doneitem";
  } else {
    return "";
  }
};
