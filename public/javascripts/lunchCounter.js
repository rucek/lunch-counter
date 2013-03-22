var lunchCounter = angular.module('lunchCounter', [])

lunchCounter.controller('LunchCtrl', function ($scope) {
    $scope.left = 5
    $scope.history = []
    $scope.buttonLabel = 'Zjedz!'
    $scope.buttonClass = 'btn-success'

    $scope.eat = function () {
        $scope.left--
        $scope.history.push({date: new Date()})

        if ($scope.left == 0) {
            $scope.buttonLabel = 'Doładuj kartę'
            $scope.buttonClass = 'btn-danger'
        }
    }
})