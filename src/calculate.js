var price = new Array();
	price[""]= 0;
	price["large"]= 7.00;
	price["xl"]= 9.00;
	price["supersize"]= 17.50;

function getBurritos(total){
	//Declare variables
	var total = 0;
	var theform = document.forms["foodform"];
	var numburritos = theform.elements["bsize"];
	var quantity = theform.elements["quantity"].value;
	var discount = theform.elements["code"].value;

	if (price[numburritos.value] == 17.5) {
    alert("This burrito is EXTREMELY big!");
  	
	}
	  else if (discount == 0){
		total = total * .10 - total;
	  }

	total = price[numburritos.value] * quantity;
	return document.getElementById("finaltotal").innerHTML ="&euro;"+total;

	
	
}

