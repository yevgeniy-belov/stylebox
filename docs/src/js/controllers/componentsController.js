styleboxApp.controller('componentsController', function($compile, $timeout, $scope, $localStorage, $http) {
    $http.get('data/package.json').success(function(response) {
        $scope.styleboxBower = response;
    });
    $http.get('data/components-list.json').success(function(response) {
        $scope.componentsList = response;
    });
    $http.get('data/componentsData.json').success(function(response) {
        $scope.componentsData = response;
    });
    $http.get('data/backgroundsData.json').success(function(response) {
        $scope.backgroundsData = response;
    });
    $http.get('data/colorsData.json').success(function(response) {
        $scope.colorsData = response;
    });
    $http.get('data/strings.json').success(function(response) {
        $scope.strings = response;
    });
    $http.get('data/typographyData.json').success(function(response) {
        $scope.typographyData = response;
    });
    $http.get('data/buttonsData.json').success(function(response) {
        $scope.buttonsData = response;
    });
    $http.get('data/treeData.json').success(function(response) {
        $scope.treeData = response;
    });
    $http.get('data/modularData.json').success(function(response) {
        $scope.modularData = response;
    });
    $http.get('data/reusableContentData.json').success(function(response) {
        $scope.reusableContentData = response;
    });
    $scope.kitMode = {
        selected: 'production'
    };
    $scope.kitModes = [
        'dev',
        'production',
        'compact'
    ];
    $scope.kitMode.selected = $localStorage.kitModeSelected || 'production';
    $scope.$watch('kitMode.selected', function() {
        $localStorage.kitModeSelected = $scope.kitMode.selected;
    });
    $scope.theme = {
        selected: 'mf'
    };
    $scope.themes = [
        'sketch',
        'mf',
        'mf--dark',
        'vampire'
    ];
    $scope.theme.selected = $localStorage.themeSelected || 'mf';
	if (
		$scope.theme.selected === 'sketch' ||
		$scope.theme.selected === 'mf' ||
		$scope.theme.selected === 'mf--dark' ||
		$scope.theme.selected === 'vampire'
	){
	$scope.theme.selected = $scope.theme.selected;
} else{
	$scope.theme.selected = 'mf'
}
    $scope.$watch('theme.selected', function() {
        $localStorage.themeSelected = $scope.theme.selected;
    });
    $scope.selectedItem = $scope.themes[0];
    $scope.sidenavState = '';
    $scope.toggleSidenavState = function() {
        if ($scope.sidenavState !== '') {
            $scope.sidenavState = '';
        } else {
            $scope.sidenavState = 'open';
        }
    };
    $scope.closeSidenavState = function() {
        $scope.sidenavState = '';
    };
    var compareVersions = function() {
        if ($scope.styleboxBower) {
            var oldVersion = $localStorage.version || '0';
            var newVersion = $scope.styleboxBower.version;
            if (newVersion > oldVersion) {
                $localStorage.$reset();
                $localStorage.version = newVersion;
            }
        }


    };
    compareVersions();
});
