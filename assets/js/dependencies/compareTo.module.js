// A directive to compare passwords in a form by K. Scott Allen
// http://odetocode.com/blogs/scott/archive/2014/10/13/confirm-password-validation-in-angularjs.aspx
angular.module('compareTo', []);
angular.module('compareTo').directive('compareTo', function compareTo() {
  return {
    require: 'ngModel',
    scope: {
      otherModelValue: '=compareTo'
    },
    link: function(scope, element, attributes, ngModel) {

      ngModel.$validators.compareTo = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch('otherModelValue', function() {
        ngModel.$validate();
      });
    }
  };
});
