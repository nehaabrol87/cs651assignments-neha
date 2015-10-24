System.register(['aurelia-validation', 'aurelia-router'], function (_export) {
  'use strict';

  var Validation, Router, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      Welcome = (function () {
        _createClass(Welcome, null, [{
          key: 'inject',
          value: function inject() {
            return [Router, Validation];
          }
        }]);

        function Welcome(router, validation) {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'Neha';
          this.lastName = 'Abrol';
          this.previousValue = this.fullName;
          this.error = " ";

          this.theRouter = router;
          this.validation = validation.on(this).ensure('firstName').isNotEmpty();
        }

        _createClass(Welcome, [{
          key: 'submit',
          value: function submit() {
            var _this = this;

            this.validation.validate().then(function (isValid) {
              _this.heading = _this.heading + _this.fullName;
              setTimeout(function () {
                _this.theRouter.navigate("users");
              }, 5000);
            }, function () {
              _this.error = "Fisrt Name cannot be blank";
              setTimeout(function () {
                _this.error = " ";
              }, 5000);
            });
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (this.fullName !== this.previousValue) {
              return confirm('Are you sure you want to leave?');
            }
          }
        }, {
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBCQUlhLE9BQU8sRUFvRFAsbUJBQW1COzs7Ozs7OztzQ0F2RHhCLFVBQVU7OzhCQUNWLE1BQU07OztBQUVELGFBQU87cUJBQVAsT0FBTzs7aUJBQ0wsa0JBQUc7QUFBRSxtQkFBTyxDQUFDLE1BQU0sRUFBQyxVQUFVLENBQUMsQ0FBQztXQUFFOzs7QUFTckMsaUJBVkMsT0FBTyxDQVVQLE1BQU0sRUFBQyxVQUFVLEVBQUU7Z0NBVm5CLE9BQU87O2VBR2xCLE9BQU8sR0FBRyx3Q0FBd0M7ZUFDbEQsU0FBUyxHQUFHLE1BQU07ZUFDbEIsUUFBUSxHQUFHLE9BQU87ZUFDbEIsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRO2VBQzdCLEtBQUssR0FBRyxHQUFHOztBQUtWLGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNqQixVQUFVLEVBQUUsQ0FBQztTQUVsQjs7cUJBakJXLE9BQU87O2lCQTRCWixrQkFBRzs7O0FBRVAsZ0JBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQ3ZCLElBQUksQ0FBQyxVQUFDLE9BQU8sRUFBSztBQUNoQixvQkFBSyxPQUFPLEdBQUcsTUFBSyxPQUFPLEdBQUcsTUFBSyxRQUFRLENBQUM7QUFDNUMsd0JBQVUsQ0FDUixZQUFPO0FBQUMsc0JBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztlQUFDLEVBQ3pDLElBQUksQ0FBQyxDQUFDO2FBQ1osRUFBQyxZQUFJO0FBQ0wsb0JBQUssS0FBSyxHQUFHLDRCQUE0QixDQUFDO0FBQzFDLHdCQUFVLENBQ1YsWUFBTTtBQUFFLHNCQUFLLEtBQUssR0FBRSxHQUFHLENBQUU7ZUFBRSxFQUMzQixJQUFJLENBQUMsQ0FBQzthQUNQLENBQUMsQ0FBQztXQUVKOzs7aUJBRVkseUJBQUc7QUFDZCxnQkFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDeEMscUJBQU8sT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7YUFDbkQ7V0FDRjs7O2VBekJXLGVBQUc7QUFDYixtQkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7V0FDN0M7OztlQTFCVSxPQUFPOzs7OztBQW9EUCx5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7cUJBQW5CLG1CQUFtQjs7aUJBQ3hCLGdCQUFDLEtBQUssRUFBRTtBQUNaLG1CQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDckM7OztlQUhVLG1CQUFtQiIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge2NvbXB1dGVkRnJvbX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb259IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XHJcbiAgc3RhdGljIGluamVjdCgpIHsgcmV0dXJuIFtSb3V0ZXIsVmFsaWRhdGlvbl07IH1cclxuXHJcbiAgaGVhZGluZyA9ICdXZWxjb21lIHRvIHRoZSBBdXJlbGlhIE5hdmlnYXRpb24gQXBwISc7XHJcbiAgZmlyc3ROYW1lID0gJ05laGEnO1xyXG4gIGxhc3ROYW1lID0gJ0Ficm9sJztcclxuICBwcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcclxuICBlcnJvciA9IFwiIFwiO1xyXG5cclxuXHJcbiBjb25zdHJ1Y3Rvcihyb3V0ZXIsdmFsaWRhdGlvbikge1xyXG5cclxuICAgdGhpcy50aGVSb3V0ZXIgPSByb3V0ZXI7XHJcbiAgIHRoaXMudmFsaWRhdGlvbiA9IHZhbGlkYXRpb24ub24odGhpcylcclxuICAgIC5lbnN1cmUoJ2ZpcnN0TmFtZScpXHJcbiAgICAgIC5pc05vdEVtcHR5KCk7XHJcblxyXG4gfVxyXG5cclxuICAvL0dldHRlcnMgY2FuJ3QgYmUgZGlyZWN0bHkgb2JzZXJ2ZWQsIHNvIHRoZXkgbXVzdCBiZSBkaXJ0eSBjaGVja2VkLlxyXG4gIC8vSG93ZXZlciwgaWYgeW91IHRlbGwgQXVyZWxpYSB0aGUgZGVwZW5kZW5jaWVzLCBpdCBubyBsb25nZXIgbmVlZHMgdG8gZGlydHkgY2hlY2sgdGhlIHByb3BlcnR5LlxyXG4gIC8vVG8gb3B0aW1pemUgYnkgZGVjbGFyaW5nIHRoZSBwcm9wZXJ0aWVzIHRoYXQgdGhpcyBnZXR0ZXIgaXMgY29tcHV0ZWQgZnJvbSwgdW5jb21tZW50IHRoZSBsaW5lIGJlbG93XHJcbiAgLy9hcyB3ZWxsIGFzIHRoZSBjb3JycmVzcG9uZGluZyBpbXBvcnQgYWJvdmUuXHJcbiAgLy9AY29tcHV0ZWRGcm9tKCdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnKVxyXG4gIGdldCBmdWxsTmFtZSgpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0aW9uLnZhbGlkYXRlKCkgLy90aGUgdmFsaWRhdGUgd2lsbCBmdWxmaWwgd2hlbiB2YWxpZGF0aW9uIGlzIHZhbGlkLCBhbmQgcmVqZWN0IGlmIG5vdFxyXG4gICAgICAudGhlbigoaXNWYWxpZCkgPT4ge1xyXG4gICAgICAgICB0aGlzLmhlYWRpbmcgPSB0aGlzLmhlYWRpbmcgKyB0aGlzLmZ1bGxOYW1lO1xyXG4gICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICgpID0+ICB7dGhpcy50aGVSb3V0ZXIubmF2aWdhdGUoXCJ1c2Vyc1wiKTt9LFxyXG4gICAgICAgICAgICA1MDAwKTtcclxuICAgICB9LCgpPT57XHJcbiAgICAgIHRoaXMuZXJyb3IgPSBcIkZpc3J0IE5hbWUgY2Fubm90IGJlIGJsYW5rXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICgpID0+IHsgdGhpcy5lcnJvciA9XCIgXCIgOyB9LFxyXG4gICAgICA1MDAwKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGNhbkRlYWN0aXZhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5mdWxsTmFtZSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBwZXJWYWx1ZUNvbnZlcnRlciB7XHJcbiAgdG9WaWV3KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudG9VcHBlckNhc2UoKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
