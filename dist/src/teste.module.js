import { NgModule } from '@angular/core';
import { TesteComponent } from './components/teste-component';
import { TesteProvider } from './providers/teste-provider';
import { IonicModule } from 'ionic-angular';
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
                    imports: [
                        IonicModule
                    ],
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