var styleboxApp = angular.module('styleboxApp', [
    'templates',
    'ngSanitize',
    'ngStorage',
    'ngclipboard',
    'ui.router',
    'hljs'
]);

styleboxApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
        $stateProvider
            .state('components', {
                url: '/components/:component',
                views: {
                    'sidenav@': {
                        templateUrl: 'main/sidenav.tpl.html'
                    },
                    'content@': {
                        templateUrl: 'main/components.tpl.html',
                        controller: 'componentsCtrl'
                    }
                }
            });
        $stateProvider
            .state('typographyMap', {
                url: '/typography-map',
                views: {
                    'sidenav@': {
                        templateUrl: 'main/sidenav.tpl.html'
                    },
                    'content@': {
                        templateUrl: 'main/typography-map.tpl.html',
                        controller: 'componentsCtrl'
                    }
                }
            });
        $stateProvider
            .state('dynamicBlock', {
                url: '/dynamic-block',
                views: {
                    'sidenav@': {
                        templateUrl: 'main/sidenav.tpl.html'
                    },
                    'content@': {
                        templateUrl: 'main/dynamic-block.tpl.html',
                        controller: 'dynamicComponentsCtrl'
                    }
                }
            });
        $stateProvider
            .state('allComponents', {
                url: '/allComponents',
                views: {
                    'sidenav@': {
                        templateUrl: 'main/sidenav.tpl.html'
                    },
                    'content@': {
                        templateUrl: 'main/allComponents.tpl.html',
                        controller: 'componentsCtrl'
                    }
                }
            })

        .state('home', {
                url: '/home',
                views: {
                    'sidenav@': {
                        templateUrl: 'main/sidenav.tpl.html'
                    },
                    'content@': {
                        templateUrl: 'main/home.tpl.html',
                        controller: 'componentsCtrl'
                    }
                }
            })
            .state('gettingStarted', {
                url: '/gettingStarted',
                views: {
                    'sidenav@': {
                        templateUrl: 'main/sidenav.tpl.html'
                    },
                    'content@': {
                        templateUrl: 'main/getting-started.tpl.html',
                        controller: 'componentsCtrl'
                    }
                }
            })
            .state('learn', {
                url: '/learn',
                views: {
                    'sidenav@': {
                        templateUrl: 'main/sidenav.tpl.html'
                    },
                    'content@': {
                        templateUrl: 'main/learn.tpl.html',
                        controller: 'componentsCtrl'
                    }
                }
            });
    })
    .controller('componentsCtrl', function($scope, $stateParams, $http) {
        $scope.currentCategory = $stateParams.component;
        $scope.setCurrentCategory = function setCurrentCategory(category) {
            $scope.currentCategory = category;
        };
    });
