let sum_ = 0;
let checkbox_ = [];

function Table_Balls() {
	  const products = Array.from(document.getElementsByClassName("price_tabel"))
	   const id = "balls";
	  products.forEach(element => {
            element.style.display = element.id === id ? 'block' : 'none'
      });
    
}


function Table_Bags() {
	  const products = Array.from(document.getElementsByClassName("price_tabel"))
	   const id = "bags";
	  products.forEach(element => {
            element.style.display = element.id === id ? 'block' : 'none'
      });
    
}

function Table_Pumps() {
	  const products = Array.from(document.getElementsByClassName("price_tabel"))
	  const id = "pumps";
	  products.forEach(element => {
            element.style.display = element.id === id ? 'block' : 'none'
      });
    
}
function Table_Nets() {
	  const products = Array.from(document.getElementsByClassName("price_tabel"))
	  const id = "nets";
	  products.forEach(element => {
            element.style.display = element.id === id ? 'block' : 'none'
      });
    
}
class Product{
	constructor(img_,id_,name_,price_ ){
		this._img = img_;
		this._id = id_;
		this._name = name_;
		this._price = price_;
	}
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

class Button_ {
	constructor(elem){
		this._elem = elem;
		elem.onclick = this.onClick.bind(this);
	}
	add(event){
		let target = event.target;
		let td_ = target.parentElement;
		let tr_ = td_.parentElement;
		let product = new Product(tr_.children[0],tr_.children[1],tr_.children[2],tr_.children[3]);
		let additional_bucket = [];
		for (let key in product) {
			additional_bucket.push(product[key].innerHTML ); // John, 30, true
		}
		let button_remove = document.createElement('button');
		let buttext = document.createTextNode("Remove");
		let atr = document.createAttribute('onclick');
		atr.value = 'Remove_product(this)';
		button_remove.appendChild(buttext);
		button_remove.setAttributeNode(atr);
		button_remove.className="btn btn-secondary btn-outline-dark button_ w-100 remove_button";
		let checkbox_buy = document.createElement("INPUT");
		checkbox_buy.setAttribute("type", "checkbox");
		checkbox_buy.style.marginLeft = "35px";
		checkbox_buy.className="mr-4";
		let art_chk = document.createAttribute('onclick');
		art_chk.value = 'checkBox_is_checked(this)';
		checkbox_buy.setAttributeNode(art_chk);
		let tr_product = document.createElement('TR');
		let td1_product = document.createElement('TD');
		td1_product.className = "align-middle";
		td1_product.innerHTML =additional_bucket[0];
		let td2_product = document.createElement('TD');
		td2_product.className = "align-middle";
		td2_product.innerHTML =additional_bucket[1];
		let td3_product = document.createElement('TD');
		td3_product.className = "align-middle";
		td3_product.innerHTML = additional_bucket[2];
		let td4_product = document.createElement('TD');
		td4_product.className = "align-middle";
		td4_product.innerHTML = additional_bucket[3];
		let td5_product = document.createElement('TD');
		td5_product.className = "align-middle";
		td5_product.appendChild(button_remove);
		insertAfter(checkbox_buy, button_remove);
		tr_product.appendChild(td1_product);
		tr_product.appendChild(td2_product);
		tr_product.appendChild(td3_product);
		tr_product.appendChild(td4_product);
		tr_product.appendChild(td5_product);
		let basket = document.getElementById('table_basket');
		basket.appendChild(tr_product);
		  
	}	
	
	onClick(event){
		let action =event.target.dataset.action;
		if(action){
			this[action](event);
		}
	};

	
}

function Remove_product(r){
	checkbox_.sort(compare);
	let tr_ = r.parentNode.parentNode;
	let su = tr_.children[3].textContent;
	for(let i = 0; i<checkbox_.length; i++){
		if(checkbox_[i] == parseInt(tr_.children[1].textContent)){
			if(i == 0){
				checkbox_.shift();
			}
			else{
				checkbox_.splice(i,i);
			}
			console.log(checkbox_);
			sum_ -=  parseInt(su);
			let s = document.getElementById('sum');
			s.innerHTML= "Sum : " + parseInt(sum_);
		}
		else{
			let s = document.getElementById('sum');
			s.innerHTML= "Sum : " + parseInt(sum_);
		}
	}
	let target = r.parentNode.parentNode.rowIndex;
	document.getElementById("table_basket").deleteRow(target);
}

function ShowBasket(){
	let s = document.getElementById('sum');
	s.innerHTML= "Sum : " + parseInt(0);
	const products = Array.from(document.getElementsByClassName("price_tabel"))
	const id = "basket";
	products.forEach(element => {
		  element.style.display = element.id === id ? 'block' : 'none'
	});
}

function CloseBasket(){
	const products = Array.from(document.getElementsByClassName("price_tabel"))
	const id = "balls";
   products.forEach(element => {
		 element.style.display = element.id === id ? 'block' : 'none'
   });
}

function checkBox_is_checked(r){
	  if (r.checked == true){
	
		let tr_ = r.parentNode.parentNode;
		let su = tr_.children[3].textContent;
		checkbox_.push(parseInt(tr_.children[1].textContent));
		console.log(checkbox_);
		sum_ +=  parseInt(su);
		let s = document.getElementById('sum');
		s.innerHTML= "Sum : " + parseInt(sum_);
	  } 
	  else if(r.checked == false){
		let tr_ = r.parentNode.parentNode;
		let su = tr_.children[3].textContent;
		for(let i = 0; i<checkbox_.length; i++){
			if(checkbox_[i] == parseInt(tr_.children[1].textContent)){
				if(i == 0){
					checkbox_.shift();
				}
				else{
					checkbox_.splice(i,i);
				}
			}
		}
		console.log(checkbox_);
		sum_ -=  parseInt(su);
		let s = document.getElementById('sum');
		s.innerHTML= "Sum : " + parseInt(sum_);
	  }	
}

new Button_(balls_table);

window.addEventListener('load', Table_Balls);

