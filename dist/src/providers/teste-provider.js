import { Injectable } from '@angular/core';
var TesteProvider = (function () {
    function TesteProvider() {
    }
    TesteProvider.prototype.reasonToJoin = function () {
        return 'Teste de plugin ionic!';
    };
    TesteProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TesteProvider.ctorParameters = function () { return []; };
    return TesteProvider;
}());
export { TesteProvider };
//# sourceMappingURL=teste-provider.js.map