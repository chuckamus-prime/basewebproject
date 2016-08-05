import { ElementRef, AfterViewInit, AfterViewChecked, OnInit, OnDestroy, DoCheck, EventEmitter, Renderer, IterableDiffers, QueryList, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { Column } from '../column/column';
import { LazyLoadEvent } from '../common';
import { SortMeta } from '../common';
import { DomHandler } from '../dom/domhandler';
import { Subscription } from 'rxjs/Subscription';
export declare class DTRadioButton {
    checked: boolean;
    onClick: EventEmitter<any>;
    handleClick(event: any): void;
}
export declare class DTCheckbox {
    checked: boolean;
    disabled: boolean;
    onChange: EventEmitter<any>;
    handleClick(event: any): void;
}
export declare class DataTable implements AfterViewChecked, AfterViewInit, OnInit, DoCheck, OnDestroy {
    private el;
    private domHandler;
    private renderer;
    value: any[];
    paginator: boolean;
    rows: number;
    totalRecords: number;
    pageLinks: number;
    rowsPerPageOptions: number[];
    responsive: boolean;
    stacked: boolean;
    selectionMode: string;
    selection: any;
    selectionChange: EventEmitter<any>;
    editable: boolean;
    onRowClick: EventEmitter<any>;
    onRowSelect: EventEmitter<any>;
    onRowUnselect: EventEmitter<any>;
    onRowDblclick: EventEmitter<any>;
    onHeaderCheckboxToggle: EventEmitter<any>;
    onContextMenuSelect: EventEmitter<any>;
    filterDelay: number;
    lazy: boolean;
    onLazyLoad: EventEmitter<any>;
    resizableColumns: boolean;
    columnResizeMode: string;
    onColResize: EventEmitter<any>;
    reorderableColumns: boolean;
    onColReorder: EventEmitter<any>;
    scrollable: boolean;
    scrollHeight: any;
    scrollWidth: any;
    headerRows: any;
    footerRows: any;
    style: any;
    styleClass: string;
    globalFilter: any;
    sortMode: string;
    sortField: string;
    sortOrder: number;
    multiSortMeta: SortMeta[];
    contextMenu: any;
    csvSeparator: string;
    emptyMessage: string;
    paginatorPosition: string;
    expandedRows: any[];
    onEditInit: EventEmitter<any>;
    onEditComplete: EventEmitter<any>;
    onEdit: EventEmitter<any>;
    onEditCancel: EventEmitter<any>;
    onPage: EventEmitter<any>;
    onSort: EventEmitter<any>;
    onFilter: EventEmitter<any>;
    header: any;
    footer: any;
    expandableRows: boolean;
    onRowExpand: EventEmitter<any>;
    onRowCollapse: EventEmitter<any>;
    rowExpansionTemplate: TemplateRef<any>;
    private dataToRender;
    private first;
    private page;
    private filterTimeout;
    private filters;
    private filteredValue;
    private columns;
    private columnsUpdated;
    private stopSortPropagation;
    private sortColumn;
    private percentageScrollHeight;
    private scrollBody;
    private scrollHeader;
    private scrollHeaderBox;
    private bodyScrollListener;
    private headerScrollListener;
    private resizeScrollListener;
    private columnResizing;
    private lastPageX;
    private documentColumnResizeListener;
    private documentColumnResizeEndListener;
    private resizerHelper;
    private resizeColumn;
    private reorderIndicatorUp;
    private reorderIndicatorDown;
    private draggedColumn;
    private tbody;
    differ: any;
    globalFilterFunction: any;
    preventBlurOnEdit: boolean;
    columnsSubscription: Subscription;
    constructor(el: ElementRef, domHandler: DomHandler, differs: IterableDiffers, cols: QueryList<Column>, renderer: Renderer, changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    resolveFieldData(data: any, field: string): any;
    updatePaginator(): void;
    paginate(event: any): void;
    updateDataToRender(datasource: any): void;
    sort(event: any, column: Column): void;
    sortSingle(): void;
    sortMultiple(): void;
    multisortField(data1: any, data2: any, multiSortMeta: any, index: any): any;
    addSortMeta(meta: any): void;
    isSorted(column: Column): boolean;
    getSortOrder(column: Column): number;
    handleRowClick(event: any, rowData: any): void;
    selectRowWithRadio(rowData: any): void;
    toggleRowWithCheckbox(event: any, rowData: any): void;
    toggleRowsWithCheckbox(event: any): void;
    onRowRightClick(event: any, rowData: any): void;
    rowDblclick(event: any, rowData: any): void;
    isSingleSelectionMode(): boolean;
    isMultipleSelectionMode(): boolean;
    findIndexInSelection(rowData: any): number;
    isSelected(rowData: any): boolean;
    allSelected: boolean;
    onFilterKeyup(value: any, field: any, matchMode: any): void;
    filter(): void;
    hasFilter(): boolean;
    onFilterInputClick(event: any): void;
    filterConstraints: {
        startsWith(value: any, filter: any): boolean;
        contains(value: any, filter: any): boolean;
        endsWith(value: any, filter: any): boolean;
    };
    switchCellToEditMode(element: any, column: Column, rowData: any): void;
    switchCellToViewMode(element: any, column: Column, rowData: any, complete: boolean): void;
    onCellEditorKeydown(event: any, column: Column, rowData: any): void;
    findCell(element: any): any;
    initResizableColumns(): void;
    initColumnResize(event: any): void;
    onColumnResize(event: any): void;
    onColumnResizeEnd(event: any): void;
    fixColumnWidths(): void;
    onColumnDragStart(event: any): void;
    onColumnDragover(event: any): void;
    onColumnDragleave(event: any): void;
    onColumnDrop(event: any): void;
    initColumnReordering(): void;
    findParentHeader(element: any): any;
    initScrolling(): void;
    calculateScrollbarWidth(): number;
    hasFooter(): boolean;
    isEmpty(): boolean;
    createLazyLoadMetadata(): LazyLoadEvent;
    toggleRow(row: any): void;
    findExpandedRowIndex(row: any): number;
    isRowExpanded(row: any): boolean;
    reset(): void;
    visibleColumns(): Column[];
    exportCSV(): void;
    ngOnDestroy(): void;
}
