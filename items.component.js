(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();