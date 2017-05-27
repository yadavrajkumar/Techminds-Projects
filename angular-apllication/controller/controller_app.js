

employee_Data.
controller("employee_Controller",
           
               
	["$scope",
	
	/*"customer_Provider",

     "value_Org_Code",
      
      "const_Org_Name",
           
           "product_Service", 

           "factory_Organization",
*/
            

           
            
	 function($scope /*,
	 	      customer_Provider,
	 	      value_Org_Code,
	 	      const_Org_Name ,
	 	      product_Service,
	 	      factory_Organization */
	 	      ){
		//$scope.message = "Hi.. This is a controller"
		/*$scope.custId = customer_Provider.customerId
		$scope.custName = customer_Provider.customerName
        $scope.organizationId=value_Org_Code
         $scope.organizationName=const_Org_Name
         $scope.orgAddress=factory_Organization.organizationAddress
         $scope.site=factory_Organization.domain
        $scope.pId = product_Service.productId
        $scope.productData=product_Service.getProductDetails()
*/
	 $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
		

}])



/*employee_Data.directive("w3TestDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});*/