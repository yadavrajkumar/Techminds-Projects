employee_Data.provider("customer_Provider",function(){
    

    var customer_Data = {
                       
                       customerId : 101,
                       customerName : "John",
                  
                     }


         this.$get=function(){

         	return customer_Data;

         }
                   
	                      

})