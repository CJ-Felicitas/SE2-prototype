var app = angular.module('liveApp', []);

app.controller('liveController', function($scope, $http){

    $scope.formData = {};
    $scope.addData = {};
    $scope.success = false;

    $scope.getTemplate = function(data){
        if (data.staff_id === $scope.formData.staff_id)
        {
            return 'edit';
        }
        else
        {
            return 'display';
        }
    };

    $scope.fetchData = function(){
        $http.get('scripts/staff_select.php').success(function(data){
            $scope.namesData = data;
        });
    };

    $scope.insertData = function(){
        $http({
            method:"POST",
            url:"scripts/staff_insert.php",
            data:$scope.addData,
        }).success(function(data){
            $scope.success = true;
            $scope.successMessage = data.message;
            $scope.fetchData();
            $scope.addData = {};
        });
    };

    $scope.showEdit = function(data) {
        $scope.formData = angular.copy(data);
    };

    $scope.editData = function(){
        $http({
            method:"POST",
            url:"scripts/staff_edit.php",
            data:$scope.formData,
        }).success(function(data){
            $scope.success = true;
            $scope.successMessage = data.message;
            $scope.fetchData();
            $scope.formData = {};
        });
    };

    $scope.reset = function(){
        $scope.formData = {};
    };

    $scope.closeMsg = function(){
        $scope.success = false;
    };

    $scope.deleteData = function(staff_id){
        if(confirm("Are you sure you want to remove it?"))
        {
            $http({
                method:"POST",
                url:"scripts/staff_delete.php",
                data:{'staff_id':staff_id}
            }).success(function(data){
                $scope.success = true;
                $scope.successMessage = data.message;
                $scope.fetchData();
            }); 
        }
    };

});
