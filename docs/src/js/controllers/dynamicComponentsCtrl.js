styleboxApp.controller('dynamicComponentsCtrl', function($compile, $timeout, $scope, $localStorage, $http, $templateCache) {
    var ctrl = this;
    $http.get('data/blocksData.json').success(function(response) {
        ctrl.blocksData = response;
        init();
    });
    var clearLocalStorageOnce = function() {

    };
    ctrl.complieTpl = function() {
        var myTemplate = $templateCache.get('components/block-' + ctrl.selectedBlockKeyName + '.tpl.html');
        var tpl = document.getElementById('exampleBlock__item');
        tpl.innerHTML = '';
        $compile(angular.element(tpl).html(myTemplate).contents())($scope);
    };
    ctrl.blocks = [];
    ctrl.blocksList = [];
    ctrl.selectedBlock = {};
    ctrl.selectedBlockKeyName = '';
    ctrl.selectedBlockProperties = [];
    ctrl.blocksObjects = [];
    ctrl.selectedBlockClasses = "";

    var updateSelectedObject = function() {
        ctrl.blocksList.forEach(function(block) {
            var properties = Object.keys(ctrl.blocks[block].properties);
            var blocksSelectionsList = [];
            properties.forEach(function(property) {
                blocksSelectionsList.push(ctrl.blocks[block].properties[property].prefix + ctrl.blocks[block].properties[property].defaultChoice);
            });
            ctrl.blocks[block].selectedBlockProperties = blocksSelectionsList;
        });
        ctrl.selectedBlock = ctrl.blocks[ctrl.selectedBlockKeyName];
        ctrl.selectedBlockProperties = ctrl.blocks[ctrl.selectedBlockKeyName].selectedBlockProperties;
        ctrl.selectedBlockClasses = ctrl.blocks[ctrl.selectedBlockKeyName].selectedBlockProperties.join(' ');
        ctrl.blocks[ctrl.selectedBlockKeyName] = ctrl.selectedBlock; // Overwrite changing block
    };

    function init() {
        ctrl.selectedBlockKeyName = $localStorage.selectedBlockKeyNameSelected || 'button';
        ctrl.blocks = $localStorage.blocks || ctrl.blocksData;
        $localStorage.blocks = ctrl.blocks;
        ctrl.blocksList = Object.keys(ctrl.blocks);
        ctrl.complieTpl();
        ctrl.blocksList.forEach(function(block) {
            ctrl.blocksObjects.push(block);
            var properties = Object.keys(ctrl.blocks[block].properties);
            var blocksSelectionsList = [];
            properties.forEach(function(property) {
                blocksSelectionsList.push(ctrl.blocks[block].properties[property].defaultChoice);
            });
            ctrl.blocks[block].selectedBlockProperties = blocksSelectionsList;
        });
        $scope.$watch('ctrl.selectedBlockKeyName', function() {
            $localStorage.selectedBlockKeyNameSelected = ctrl.selectedBlockKeyName;
            for (var block in ctrl.blocks) {
                ctrl.selectedBlockKeyNameProperties = ctrl.blocks[ctrl.selectedBlockKeyName].properties;
            }
        });
    }

    var updateCodeSnippet = function() {
        $timeout(function() {
            hljs.configure({
                tabReplace: ''
            });
            var tpl = document.getElementById('exampleBlock__item');
            var snippet = tpl.innerHTML
                .replace('ng-class="ctrl.joinClasses()"', '')
                .replace('ng-scope', '')
                .replace(ctrl.blocks[ctrl.selectedBlockKeyName].blockName + '--default', '')
                .replace('class=" ', 'class="')
                .replace(' class="" ', '')
                .replace('class=" " ', '')
                .replace(' "', '"')
                .replace('" >', '">')
                .replace(' ">', '">')
                .replace(' " ', '"')
                .replace('  ', ' ');
            ctrl.codeSnippet = '<pre><code class="hljs padding--xl">' + hljs.highlight('html', snippet).value + '</code></pre>';
        }, 0);
    };
    $scope.$watch('ctrl.selectedBlockKeyName', function() {
        if (ctrl.selectedBlockKeyName) {
            // console.log(ctrl.selectedBlockKeyName);
            updateSelectedObject();
            updateCodeSnippet();
        }
    }, true);
    $scope.$watch('ctrl.blocks', function() {
        if (ctrl.selectedBlockKeyName) {
            // console.log(ctrl.blocks);
            updateSelectedObject();
            updateCodeSnippet();
        }
    }, true);
});
