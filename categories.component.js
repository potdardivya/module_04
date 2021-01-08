(function () {
'use strict';

angular.module('data')
.component('menuApp', {
  templateUrl: 'categories.template.html',
  bindings: {
    items: '<'
  }
});

})();