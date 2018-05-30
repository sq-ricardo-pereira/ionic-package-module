import { NgModule } from '@angular/core';
import { TesteComponent } from './components/teste-component';
import { TesteProvider } from './providers/teste-provider';
var TesteModule = (function () {
    function TesteModule() {
    }
    TesteModule.forRoot = function () {
        return {
            ngModule: TesteModule,
            providers: [TesteProvider]
        };
    };
    TesteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TesteComponent
                    ],
                    exports: [
                        TesteComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    TesteModule.ctorParameters = function () { return []; };
    return TesteModule;
}());
export { TesteModule };
//# sourceMappingURL=teste.module.js.map