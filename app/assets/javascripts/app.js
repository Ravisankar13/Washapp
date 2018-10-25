function toggleFunction (x) {
 $(".li").removeClass("active");
  var $this = $("#"+x);
  var target = $this;
   $('.types').not($this).each(function(){
       var $other = $(this);
       var otherTarget = $other.data('type');
       $(otherTarget).hide();        
    });
   		//$("#button").addClass('button-clicked');
 		 $(target).toggle(); 
 		 $(this).addClass("active");


}

function invoiceFunction(sid,name,price,pid) {
	var parent = $("#"+sid);
	var child = $("#"+pid);
	//$('#'+pid).parent().parent().parent().parent().parent().find("button #pid").addClass("buttonred");
	var  item =  "<div  id = " +pid + "> <div class = 'row' id = b"+sid +"> <div  id = 'pname'><p class= 'col-md-3 name'>"+name +"</p> <p class= 'col-md-2' id = " +price + "> ₹"+ price + "</p></div> <div class= 'col-md-4'> <button  onclick ='plusminus(this)' >-</button>"+"<input class='btns' type = 'text' value= 1 >" + "<button onclick ='plusminus(this)' >+</button></div> "  +"<div class= 'col-md-1 productprice' >"+ price +"</div><div class = 'col-md-2' ><button type= 'button' class='close' aria-label = 'Close' onclick ='remove(this)'><span aria-hidden='true'>&times;</span></button></div></div></div>"  
		;
		if(sid == "invWashandfold")
	 	{
	 		//($("#invWashandfold").parent().parent().find("div #hWashandfold")).hide()
			if (!$('#'+pid).length) 
			{      
			  $("#invWashandfold").append(item); 
			  ($("#invWashandfold").parent().parent().find("div #hWashandfold")).show();	 				 			
			 	var b =0;
			 	var c = 0;
			 	var a = $("#invWashandfold").find("input").length;
			 	for(i=0 ; i < a ; i++ ){
  	 			b= b + parseInt($("#invWashandfold").find("input").get(i).value);
  	 			c= c + parseInt($("#invWashandfold").find("div .productprice").get(i).textContent);
  	 			$("#invWashandfold").parent().find("div .quan").text(b);
  	 			if (true) {}
  	 			else{
  	 			$("#invWashandfold").parent().find("div .price").text(c);}
  	 			}


			 }
		}
		else if(sid == "invWashandiron")
		{
			if (!$('#'+pid).length){
				$("#invWashandiron").append(item);
				 ($("#invWashandiron").parent().parent().find("div #hWashandiron")).show();
			 	var b =0;
			 	var c = 0;
			 	var a = $("#invWashandiron").find("input").length;
			 	for(i=0 ; i < a ; i++ ){
  	 			b= b + parseInt($("#invWashandiron").find("input").get(i).value);
  	 			c= c + parseInt($("#invWashandiron").find("div .productprice").get(i).textContent);
  	 			$("#invWashandiron").parent().find("div .quan").text(b);
  	 			if (true) {}
  	 			else{
  	 			$("#invWashandiron").parent().find("div .price").text(c);}
				}
			}
		}
		else if(sid == "invPremium")
		{
			if (!$('#'+pid).length){
			$("#invPremium").append(item);
				var b =0;
			 	var c = 0;
			 	var a = $("#invPremium").find("input").length;
			 	for(i=0 ; i < a ; i++ ){
  	 			b= b + parseInt($("#invPremium").find("input").get(i).value);
  	 			c= c + parseInt($("#invPremium").find("div .productprice").get(i).textContent);
  	 			$("#invPremium").parent().find("div .quan").text(b);
  	 			$("#invPremium").parent().find("div .price").text(c);
  	  			}

			}
		}
		else if(sid == "invDryCleaning")
		{
			if (!$('#'+pid).length){
			$("#invDryCleaning").append(item);
				 	var b =0;
			 	var c = 0;
			 	var a = $("#invDryCleaning").find("input").length;
			 	for(i=0 ; i < a ; i++ ){
  	 			b= b + parseInt($("#invDryCleaning").find("input").get(i).value);
  	 			c= c + parseInt($("#invDryCleaning").find("div .productprice").get(i).textContent);
  	 			$("#invDryCleaning").parent().find("div .quan").text(b);
  	 			$("#invDryCleaning").parent().find("div .price").text(c);
  	   			}
			}
		}
		var len1 = 0;
		var len2 = 0;
		len_ser = $("#"+sid).parent().parent().parent().find("div .quan").length ;
		for (var j = 0 ; j < len_ser; j++ ) {
		len1 = len1 + parseInt($("#"+sid).parent().parent().parent().find("div .quan").get(j).textContent);
		len2 = len2 + parseInt($("#"+sid).parent().parent().parent().find("div .price").get(j).textContent);
		}
		$("#"+sid).parent().parent().parent().find("div .total_quantity").text(len1);
		$("#"+sid).parent().parent().parent().find("div .total_price").text(len2);
}

function plusminus(obj){
	var $button = $(obj);
  	var oldValue = $button.parent().find("input").val();
  	var price = $button.parent().parent().find('p').get(1).id;
	if ($button.text() == "+") {
		var newVal = parseFloat(oldValue) + 1;
		var total_price = price*newVal;
	} else {
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
      var total_price = price*newVal;
    } else {
      newVal = 0;
    }
   }
  $button.parent().find("input").val(newVal);
  $button.parent().parent().parent().find("div .productprice").text(total_price);
  var b=0;
  var c = 0 ;	
  var id_indv = $button.parent().parent().parent().parent().parent().find('div')[1].id
  var a = $("#"+id_indv).find("input").length;


  for(i=0 ; i < a ; i++ ){
  	 b= b + parseInt($("#"+id_indv).find("input").get(i).value);
  	 c= c + parseInt($("#"+id_indv).find("div .productprice").get(i).textContent);

  	 if (id_indv == "invWashandfold" || id_indv == "invWashandiron") {
  	 $("#"+id_indv).parent().find("div .quan").text(b);
  	 $("#"+id_indv).parent().find("div .price").text(0);
  	}
  	else {
  	$("#"+id_indv).parent().find("div .quan").text(b);
  	 $("#"+id_indv).parent().find("div .price").text(c);

  	}
  	   }
  	var bca = 0;
	var abc =0;
	for (var j = 0 ; j < 4; j++ ) {
	abc = abc + parseInt($("#"+id_indv).parent().parent().parent().parent().parent().find("div .quan")[j].textContent);
	bca = bca + parseInt($("#"+id_indv).parent().parent().parent().parent().parent().find("div .price")[j].textContent);
	}	
	$("#"+id_indv).parent().parent().parent().parent().parent().find("div .total_quantity").text(abc);
	$("#"+id_indv).parent().parent().parent().parent().parent().find("div .total_price").text(bca);
}
function remove(abc) {
	var $rem = $(abc);
	
	var rem_id = $rem.parent().parent().parent().parent().parent().find("div")[1].id ;
	var qt_total = parseInt($("#"+rem_id).parent().find("div .quan").text());
	var pr_total = parseInt($("#"+rem_id).parent().find("div .price").text());
	var q = parseInt($rem.parent().parent().find("input").val());
	var p = parseInt($rem.parent().parent().parent().find("div .productprice").text()); 
	if (rem_id == "invWashandfold" || rem_id == "invWashandiron" ) {
		$("#"+rem_id).parent().find("div .quan").text(qt_total-q);
		//$("#"+rem_id).parent().find("div .price").text(0);
	}
	else{
		$("#"+rem_id).parent().find("div .quan").text(qt_total-q);
		$("#"+rem_id).parent().find("div .price").text(pr_total-p);
	
	}
	var wei1 = parseInt($rem.parent().parent().parent().parent().parent().parent().find("div#service")[0].children[0].children[1].textContent);
	var wei2 = parseInt($rem.parent().parent().parent().parent().parent().parent().find("div#service")[1].children[0].children[1].textContent);

	if(wei1 == 0)
	{
		($rem.parent().parent().parent().parent().parent().parent().find("input#wtWashandfold")[0].value)=0;
		($rem.parent().parent().parent().parent().parent().parent().find("div#hWashandfold")).hide();
	}
	if (wei2 == 0) {
		($rem.parent().parent().parent().parent().parent().parent().find("input#wtWashandiron")[0].value)=0;
		($rem.parent().parent().parent().parent().parent().parent().find("div#hWashandiron")).hide()
	}

	var bca = 0;
	var abc =0;
	$rem.parent().parent().parent().remove();
	var rm_total = parseInt($("#"+rem_id).parent().find("div .quan").text());
	if(rm_total == 0)
	{
		$("#"+rem_id).parent().find("div .price").text(0);
	}


	for (var j = 0 ; j < 4; j++ ) {
	abc = abc + parseInt($("#"+rem_id).parent().parent().parent().parent().parent().find("div .quan")[j].textContent);
	bca = bca + parseInt($("#"+rem_id).parent().parent().parent().parent().parent().find("div .price")[j].textContent);
	}	
	$("#"+rem_id).parent().parent().parent().parent().parent().find("div .total_quantity").text(abc);
	$("#"+rem_id).parent().parent().parent().parent().parent().find("div .total_price").text(bca);
	


}
function myFunction(cha){
	var $change = $(cha);
	var kgs = parseFloat($change.parent().find("input.kg")[0].value);
  	 var ex = parseInt($change.parent().parent().parent().find("div .quan")[0].textContent);
  	 var quan1 = parseFloat($change.parent().parent().parent().parent().find("div#service")[0].children[0].children[1].textContent);
  	 var qua2 = parseFloat($change.parent().parent().parent().parent().find("div#service")[1].children[0].children[1].textContent);
  	 var intl = parseFloat($change.parent().parent().parent().parent().find("input#wtWashandfold")[0].value)
  	 var intl2 = parseFloat($change.parent().parent().parent().parent().find("input#wtWashandiron")[0].value)
  	 if (ex == 0)
  	 {
  	 	alert("There are no elements");
  	 }
  	 else{
  	 var total = kgs*60; 
  	$change.parent().parent().parent().find("div .price").text(total);
  }
  	var len1 = 0;
	var len2 = 0;
	for (var j = 0 ; j < 4; j++ ) {
		len1 = len1 + parseInt($change.parent().parent().parent().parent().find("div .quan").get(j).textContent);
		len2 = len2 + parseInt($change.parent().parent().parent().parent().find("div .price").get(j).textContent);

	}
	$change.parent().parent().parent().parent().parent().find("div .total_quantity").text(len1);
	$change.parent().parent().parent().parent().parent().find("div .total_price").text(len2);
	if (intl == 0 && quan1 > 0 ) {
		($change.parent().parent().parent().parent().find("div #hWashandfold")).show();
	}
	else{
		($change.parent().parent().parent().parent().find("div #hWashandfold")).hide();
	}
	if(intl2 == 0 && qua2 > 0 ){
		($change.parent().parent().parent().parent().find("div #hWashandiron")).show();
	}
	else
	{
		($change.parent().parent().parent().parent().find("div #hWashandiron")).hide();
	}

}

function bill(bil){ 
		var $bill = $(bil);
		superbasket = [];
		var x = $bill.parent().parent().find("div #service").length;
	 	for(i=0 ; i < x ;i++)
	 		{
	 			super_items = {};
	 				var xyz = $bill.parent().parent().find("div #service")[i].children[0].children[0].textContent;
	 			 var service = "";
	 			switch(xyz) {
				    case "Washandfold":
				        service  = "standard_wash_and_fold";
				        break;
				    case "Washandiron":
				         service =  "standard_wash_and_iron";
				        break ;
				    case "Premium":
				        service = "premium";
				        break;
				    case DryCleaning:
				        service =  "dry_cleaning"  ;
				        break;
				}
	 			super_items["service_type"] = service ;	
	 		 	basket = [];
	 		 	y = $bill.parent().parent().find("div #service")[i].children[1].children.length
	 		 	for(j=0; j < y; j++){
	 		 		item = {};
	 				item["quantity"] = parseInt($bill.parent().parent().find("div #service")[i].children[1].children[j].children[0].children[1].children[1].value);
	 		 		item["id"] = null ;
	 		 		item["service_id"] = $bill.parent().parent().find("div #service")[i].children[1].children[j].id;
	 		 		basket.push(item);
	 		 		
	 			 } 
	 			 regular = { "baskets" : basket };
	 			super_items["regular"] = regular;
	 			super_items["regular"]["quantity"]= parseInt($bill.parent().parent().find("div #service")[i].children[0].children[1].textContent) ;
	 			super_items["regular"]["cost"]= parseInt($bill.parent().parent().find("div #service")[i].children[0].children[2].textContent);
	 			var wei_id = $bill.parent().parent().find("div #service")[i].children[1].id
	 			if(wei_id == "invWashandfold" || wei_id == "invWashandiron"){
	 			super_items["regular"]["weight"]=  parseFloat($bill.parent().parent().find("div #service")[i].children[2].children[1].children[0].value);
	 		 	}
	 		 	superbasket.push(super_items);
	 		 	
	 		 	 json_obj = {"super_baskets" : superbasket ,"order_id" :420  };
	 		 	
	 		 }

	 		 xhr = new XMLHttpRequest();
			var url = "http://dev.thewashapp.in/api/v1/executives/baskets";
			xhr.open("POST", url, true);
			xhr.setRequestHeader('Content-type','application/json');
			xhr.setRequestHeader('session-token', 'Bqns92aKcPTv69qxOW07iwtt');
	
			var data = JSON.stringify(json_obj);
			xhr.send(data);

 }















