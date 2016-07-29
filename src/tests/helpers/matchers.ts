//These are custom helper functions which add matchers to jasmine to assist with testing
beforeEach(() => {
  jasmine.addMatchers({

    toHaveText: function() {
      return {
        compare: function(actual, expectedText) {
          var actualText = actual.textContent;
          return {
            pass: actualText == expectedText,
            get message() { return 'Expected ' + actualText + ' to equal ' + expectedText; }
          };
        }
      };
    },

    toContainText: function() {
      return {
        compare: function(actual, expectedText) {
          var actualText = actual.textContent;
          return {
            pass: actualText.indexOf(expectedText) > -1,
            get message() { return 'Expected ' + actualText + ' to contain ' + expectedText; }
          };
        }
      };
    }
  });
});
