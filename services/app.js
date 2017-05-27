var app = angular.module("serviceModule",[]);



app.controller("serviceController",
	[
	"$scope",
	/*"customerProvider",
	"customerService",
	"organizationDetails",
	"organizationName",
	"organizationCode",
*/
	                 function($scope/*,
	                 	      cutomerProvider,
	                 	      customerService,
	                 	      organizationDetails,
	                 	      organizationName,
	                 	      organizationCode*/){
	                 $scope.message="hii hr u"

                        //console.log(cutomerProvider.$get())
                        //console.log(cutomerProvider.customerId)
                        /*$scope.organization=organizationName.organizationName;
                        $scope.organizationId=organizationCode.organizationCode;*/
                       // $scope.organizationAddress=organizationDetails.organizationAddress;
                        //$scope.organizationWebsite=organizationDetails.orgWebsite;
                        //$scope.customerId=cutomerProvider.customerId;
                        //$scope.customerName=cutomerProvider.customerName;
                        //$scope.salary=cutomerProvider.salary; 
                        //$scope.productId=customerService.productId;                       $scope.productId=organizationId;
                        //$scope.productName=customerService.productName;
                        //$scope.productPrize=customerService.prize;
                        
                        

}])