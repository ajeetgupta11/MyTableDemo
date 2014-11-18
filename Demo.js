// To define a module
var app = angular.module("app", []);

// To define a factory
// We can share this data within multiple controller
app.factory('CommonFactory', function() {
    var employee=[
        {Name: "Amay", Location: "India", DateOfBirth: 'O1 feburary 1991', DateOfJoining: '02 February 2012'},
        {Name: "Ajeet", Location: "Canada", DateOfBirth: 'O1 March 1992', DateOfJoining: '03 February 2013'},
        {Name: "Shan", Location: "Australia", DateOfBirth: 'O5 Aprail 1993', DateOfJoining: '04 February 2014'},
        {Name: "Chandu", Location: "China", DateOfBirth: 'O6 June 1992', DateOfJoining: '05 February 2009'},
        {Name: "Vivek", Location: "New Zealand", DateOfBirth: 'O2 feburary 1989', DateOfJoining: '06 February 2010'}
    ]
    return employee;
});

// To define a controller
app.controller('TestCtrl', function($scope, CommonFactory) {
    $scope.user = {};
    $scope.showEdit = false;
    $scope.showAdd = true;
    $scope.showSave =false;
    $scope.model = {
        employee:  CommonFactory,
        selected: {}
    };

//To get a data from factory to a controller
    $scope.data = CommonFactory;

    console.log("I have data comes from factory");

    $scope.getMyTemplate = function (contact) {
        if (contact.Name === $scope.model.selected.Name || contact.Name === "") return 'edit';
        else return 'display';
    };

    $scope.EditTable = function (contact) {
        $scope.model.selected = angular.copy(contact);
    };

    $scope.updateTable = function (idx) {
        console.log("I will save the contact");
        $scope.model.employee[idx] = angular.copy($scope.model.selected);
        $scope.resetAll();
    };

    $scope.SaveRow = function () {
        if (Object.getOwnPropertyNames($scope.user).length > 0){
            $scope.model.employee.push({Name:$scope.user.name,Location:$scope.user.location, DateOfBirth:$scope.user.dob,DateOfJoining: $scope.user.doj});
            $scope.showEdit = false;
            $scope.showAdd = true;
            $scope.showSave =false;
        } else {
            alert("First enter some value");
        }
    }
    $scope.showEditOption = function() {
        $scope.showEdit = true;
        $scope.showAdd = false;
        $scope.showSave =true;
    }



    $scope.resetAll = function () {
        $scope.model.selected = {};
    };

    $scope.removeRow = function(index) {
        console.log("I m going to remove the row......");
        $scope.model.employee.splice(index, 1);
    }

});
