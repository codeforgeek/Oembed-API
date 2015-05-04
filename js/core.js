app.controller('status_controller',function($scope,$http,$sce){

  $scope.add_status=function(){
	var url=$scope.status_box;
	var request = $http({
	    method: "post",
	    url: "/get_meta",
	    data: {
		data: url
	    },
	    headers: { 'Content-Type': 'application/json' }
	});

	/* Check whether the HTTP Request is successful or not. */
	request.success(function (data) {
		if(data.error) {
			$scope.response_data = $sce.trustAsHtml(data.link);
		} else {	
			$scope.response_data = $sce.trustAsHtml("<h3>"+data.title+"</h3>" + data.html);
		}
	});
    };
});
