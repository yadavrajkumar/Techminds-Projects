app.provider("customerProvider",function(){
    

    var customer_Data = {
                       
                       customerId : 101,
                       customerName : "John",
                       salary : 5000 
                     }


         this.$get=function(){

         	return customer_Data;

         }
                   
	                      

})