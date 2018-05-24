import { NgModule, ModuleWithProviders } from '@angular/core';
import { TesteComponent } from './components/teste-component';
import { TesteProvider } from './providers/teste-provider';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    declarations: [
        // declare all components that your module uses
        TesteComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        TesteComponent
    ]
})
export class TesteModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TesteModule,
            providers: [TesteProvider]
        };
    }
}