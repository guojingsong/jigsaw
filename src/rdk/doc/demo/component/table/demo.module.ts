import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TableBasicDemoComponent} from "./basic/basic";
import {TableRendererDemoComponent} from "./renderer/renderer";
import {RdkTableModule, DefaultCellRenderer} from "../../../../component/table/table";
import {
    TableHeadDefault,
    TableCellDefault,
    TableHeadCheckbox,
    TableCellCheckbox,
    TableCellOption,
    TableHeadOption,
    TableCellNum,
    TableHeadNum,
    TableCellEditor
} from "../../../../component/table/table-renderer";
import {TableCheckboxService} from "../../../../component/table/table-service";
import {TableHeadSelect, TableHeadIcon} from "./renderer/table-renderer";
import {RdkSelectModule} from "../../../../component/select/select";
import {RdkCheckBoxModule} from "../../../../component/checkbox/index";
import {RdkPaginationModule} from "../../../../component/pagination/pagination";
import {RdkInputModule} from "../../../../component/input/input";
import {TablePerformsDemoComponent} from "./performs/performs";
import {TableHeadRender,
    TableSetHeaderRenderDemoComponent
} from "./setHeaderRender/setHeaderRender";
import {TableSetHeaderClassDemoComponent} from "./setHeaderClass/setHeaderClass";
import {TableColumnSetWidthDemoComponent} from "./setColumnWidth/setColumnWidth";
import {TableColumnSetVisibleDemoComponent} from "./setColumnVisible/setColumnVisible";
import {TableSetHeaderSortDemoComponent} from "./setHeaderSort/setHeaderSort";
import {
    JobRenderer, TableSetCellRenderDemoComponent
} from "./setCellRender/setCellRender";
import {TableSetCellClassDemoComponent} from "./setCellClass/setCellClass";
import {TableColumnGroupDemoComponent} from "./setColumnGroup/setColumnGroup";
import {TableSetCellEditableDemoComponent, MyTableCellEditor, MyTableCell} from "./setCellEditable/setCellEditable";
import {
    TableAddColumnDemoComponent, MyTableHeadOption, MyTableCellOption
} from "./addColumn/addColumn";
import {TableFixedHeadDemoComponent} from "./fixedHead/fixedHead";
import {TablePageableDemoComponent} from "./pageable/demo";
import {TableDataFromAjaxDemoComponent} from "./dataFromAjax/dataFromAjax";
import {TableScrollAmountDemoComponent} from "./scrollAmount/scrollAmount";
import {TableAddIDColumnDemoComponent} from "./addIDColumn/addIDColumn";
import {TableAddCheckboxColumnDemoComponent} from "./addCheckboxColumn/addCheckboxColumn";
import {TableDataChangeDemoComponent} from "./dataChange/dataChange";
import {RdkButtonModule} from "../../../../component/button/button";
import {TableAddIDWithPagingComponent} from "./addIDWithPaging/addIDWithPaging";

const tableDemoRoutes = [
    {
        path: '', redirectTo: 'basic', pathMatch: 'full'
    },
    {
        path: 'basic', component: TableBasicDemoComponent
    },
    {
        path: 'dataFromAjax', component: TableDataFromAjaxDemoComponent
    },
    {
        path: 'renderer', component: TableRendererDemoComponent
    },
    {
        path: 'performs', component: TablePerformsDemoComponent
    },
    {
        path: 'setColumnWidth', component: TableColumnSetWidthDemoComponent
    },
    {
        path: 'setColumnVisible', component: TableColumnSetVisibleDemoComponent
    },
    {
        path: 'setHeaderRender', component: TableSetHeaderRenderDemoComponent
    },
    {
        path: 'setHeaderClass', component: TableSetHeaderClassDemoComponent
    },
    {
        path: 'setHeaderSort', component: TableSetHeaderSortDemoComponent
    },
    {
        path: 'setCellRender', component: TableSetCellRenderDemoComponent
    },
    {
        path: 'setCellClass', component: TableSetCellClassDemoComponent
    },
    {
        path: 'setColumnGroup', component: TableColumnGroupDemoComponent
    },
    {
        path: 'setCellEditable', component: TableSetCellEditableDemoComponent
    },
    {
        path: 'addColumn', component: TableAddColumnDemoComponent
    },{
        path: 'addIDColumn', component: TableAddIDColumnDemoComponent
    },{
        path: 'addCheckboxColumn', component: TableAddCheckboxColumnDemoComponent
    },
    {
        path: 'fixedHead', component: TableFixedHeadDemoComponent
    },
    {
        path: 'pageable', component: TablePageableDemoComponent
    },
    {
        path: 'scrollAmount', component: TableScrollAmountDemoComponent
    },
    {
        path: 'dataChange', component: TableDataChangeDemoComponent
    },
    {
        path: 'addIDWithPaging', component: TableAddIDWithPagingComponent
    },
    {
        path: '**', //fallback router must in the last
        component: TableBasicDemoComponent
    }
];

@NgModule({
    declarations: [
        TableBasicDemoComponent,
        TableRendererDemoComponent,
        TablePerformsDemoComponent,
        TableFixedHeadDemoComponent,
        DefaultCellRenderer,
        TableHeadDefault,
        TableCellDefault,
        TableHeadSelect,
        TableHeadIcon,
        TableHeadCheckbox,
        TableCellCheckbox,
        TableCellOption,
        TableHeadOption,
        TableCellNum,
        TableHeadNum,
        TableCellEditor,
        TableHeadRender,
        TableColumnSetWidthDemoComponent,
        TableColumnSetVisibleDemoComponent,
        TableSetHeaderRenderDemoComponent,
        TableSetHeaderClassDemoComponent,
        TableSetHeaderSortDemoComponent,
        JobRenderer,
        TableSetCellRenderDemoComponent,
        TableSetCellClassDemoComponent,
        TableColumnGroupDemoComponent,
        MyTableCellEditor,
        MyTableCell,
        TableSetCellEditableDemoComponent,
        MyTableHeadOption,
        MyTableCellOption,
        TableAddColumnDemoComponent,
        TablePageableDemoComponent,
        TableDataFromAjaxDemoComponent,
        TableScrollAmountDemoComponent,
        TableAddIDColumnDemoComponent,
        TableAddCheckboxColumnDemoComponent,
        TableDataChangeDemoComponent,
        TableAddIDWithPagingComponent
    ],
    imports: [
        RouterModule.forChild(tableDemoRoutes),
        RdkTableModule,
        RdkSelectModule,
        RdkCheckBoxModule,
        RdkPaginationModule,
        RdkInputModule,
        RdkButtonModule
    ],
    exports: [ ],
    entryComponents: [
        DefaultCellRenderer,
        TableHeadDefault,
        TableCellDefault,
        TableHeadSelect,
        TableHeadIcon,
        TableHeadCheckbox,
        TableCellCheckbox,
        TableCellOption,
        TableHeadOption,
        TableCellNum,
        TableHeadNum,
        TableCellEditor,
        TableHeadRender,
        JobRenderer,
        MyTableCell,
        MyTableHeadOption,
        MyTableCellOption,
        MyTableCellEditor
    ]
})
export class TableDemoModule {
}
