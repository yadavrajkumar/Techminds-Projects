employee_Data.service("product_Service",
	function(){

 var product_Data = {
                       
                       productId : 101,
                       productName : "SAMSUNG",
                       prize : 5000 
                     }


this.getProductDetails = function(){

	return product_Data
}

})