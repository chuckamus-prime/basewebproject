System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuoteService;
    return {
        setters:[],
        execute: function() {
            QuoteService = (function () {
                function QuoteService() {
                    this.quote = "The Real Deal";
                }
                QuoteService.prototype.getQuote = function () {
                    return this.quote;
                };
                return QuoteService;
            }());
            exports_1("QuoteService", QuoteService);
        }
    }
});
//# sourceMappingURL=quote.service.js.map