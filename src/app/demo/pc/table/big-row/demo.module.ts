import {NgModule} from '@angular/core';
import {JigsawTableModule} from "jigsaw/pc-components/table/table";
import {JigsawSliderModule} from "jigsaw/pc-components/slider/index";
import {JigsawViewportModule} from "jigsaw/pc-components/viewport/viewport";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {BigRowDemoComponent} from './demo.component';

@NgModule({
    imports: [
        JigsawTableModule, JigsawSliderModule, JigsawDemoDescriptionModule, JigsawViewportModule
    ],
    declarations: [
        BigRowDemoComponent,
    ],
    exports: [BigRowDemoComponent],
})
export class BigRowDemoModule {
}
