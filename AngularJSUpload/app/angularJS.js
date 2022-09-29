var app = angular.module('app-demo', []);

app.run(function($rootScope) {

});

app
    .directive('ngUpimage', ['$parse', 
        function($parse) {
            function fn_especial(scope, element, attrs) {
                var onChange = $parse(attrs.ngUpimage);
                element.on('change', function (event) {
                    onChange(scope, { $files: event.target.files});
                });
            }
            return {
                link: fn_especial 
            };
    }])
    .controller('DemoController', [
        '$scope',
        '$rootScope',
        '$http',
    function($scope, $rootScope, $http) {
        $scope.conectado = function($files) {
            console.log("llega");
            console.log($files)
        };
    }
]);