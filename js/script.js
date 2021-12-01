// alert('testing')
let app = angular.module('MyApp', []);
app.controller('MyCtrl', ($scope, $http, $httpParamSerializerJQLike) => {
    // this is controller
    $scope.stern = 'welchen film findest du am liebsten ?';
    $scope.user = {};
    $scope.changeValue = () => {
        $scope.stern = 'mir gefaellt den Film ..Maya Fuchs.. am liebsten.';
    }

    console.log('app loaded');

    $scope.submitRegisterForm = () => {

        // https://docs.angularjs.org/api/ng/service/$http
        // https://docs.angularjs.org/api/ng/service/$httpParamSerializerJQLike to submit POST data as url encoded
        console.log($scope.user);
        const req = {
            method: 'POST',
            url: 'http://localhost:3000/register',
            data: $httpParamSerializerJQLike($scope.user),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        $http(req)
            .then((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            })
    }
});