let prices = [100, 300, 150, 100,50, 25,200, 150, 200];
let time = 0;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  function compare(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0; 
    if (a < b) return -1; 
  }
  function IsUnical(a,b){
    let unical = [];
    unical = [...new Set([...a, ...b])];
    return unical;
  }

function count_(){
    let count = getRandomInt(0,10);
    return count;
}


function massive_of_number_product_for_sale(a){
    let massive_sale = [];
    for(let i = 0; i<a; i++){
        massive_sale.push(getRandomInt(1,11));
    }
    massive_sale.sort(compare);
    return massive_sale;
}


function table(){
    let table = document.getElementById('balls_table');
    return table;
}


const table_ = table();

function Reload_Product(){
    clearTimeout(timerId1);
    for(let z = 0; z<table_.rows.length; z++){
        if(z==0){
            let td = table_.rows[z].cells[3];
          
            let buttext = document.createTextNode("Prices");
            td.innerHTML = buttext.textContent;
            td.className = "align-middle";
        }
        else{
            let td = table_.rows[z].cells[3];
            let s = prices[z-1];
            let buttext = document.createTextNode(s);
            td.innerHTML = parseInt(buttext.textContent)+"$";
            td.className = "align-middle";
        }
    }  
   
}


function SetSales(a){ 
    time++;
    let count = count_();
    let massive_sale = massive_of_number_product_for_sale(count);
    let additiona_m = massive_of_number_product_for_sale(count);
    let unical = IsUnical(massive_sale,additiona_m);
    unical.sort(compare);
    for(let z = 0; z<table_.rows.length; z++){
        if(z==0){
            let td = table_.rows[z].cells[3];
            let buttext = document.createTextNode("Prices");
            td.innerHTML = buttext.textContent;
            td.className = "align-middle";
        }
        else{
            let td = table_.rows[z].cells[3];
            let s = prices[z-1];
            let buttext = document.createTextNode(s);
            td.innerHTML = parseInt(buttext.textContent)+"$";
            td.className = "align-middle";
        }
    }  
    for(let z = 0; z<unical.length; z++){
        for(let i = 0; i<prices.length; i++){
            if(unical[z]==i){
                let td = table_.rows[unical[z]].cells[3];
                let s = prices[i-1]-((prices[i-1]*a)/100);
                let buttext = document.createTextNode(s);
                td.innerHTML = parseInt(buttext.textContent)+"$ / " + a+"%";
                td.className = "green align-middle";
             }
        }
    }  
   
    
}





function sales(){
   let sale = 0;
   sale = getRandomInt(0,99);   
   return sale;
}

function timer(){
    if(time > 0){
        time = 0;
        Reload_Product();
    }
   else{
       SetSales(sales());
   }
   
}

let timerId = setInterval(() => timer(),20000);