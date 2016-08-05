import { ElementRef, OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, Renderer, EventEmitter, TemplateRef, IterableDiffers } from '@angular/core';
import { SelectItem } from '../common';
import { DomHandler } from '../dom/domhandler';
import { ControlValueAccessor } from '@angular/forms';
export declare class Dropdown implements OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, ControlValueAccessor {
    private el;
    private domHandler;
    private renderer;
    options: SelectItem[];
    onChange: EventEmitter<any>;
    scrollHeight: string;
    filter: boolean;
    style: any;
    styleClass: string;
    disabled: boolean;
    autoWidth: boolean;
    required: boolean;
    itemTemplate: TemplateRef<any>;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer, differs: IterableDiffers);
    selectedOption: SelectItem;
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    optionsToDisplay: SelectItem[];
    hover: boolean;
    focus: boolean;
    differ: any;
    private panelVisible;
    private documentClickListener;
    private optionsChanged;
    private panel;
    private container;
    private itemsWrapper;
    private initialized;
    private selfClick;
    private itemClick;
    private hoveredItem;
    private selectedOptionUpdated;
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    label: string;
    onItemClick(option: any): void;
    ngAfterViewChecked(): void;
    writeValue(value: any): void;
    updateSelectedOption(val: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    updateDimensions(): void;
    onMouseenter(event: any): void;
    onMouseleave(event: any): void;
    onMouseclick(event: any, input: any): void;
    show(panel: any, container: any): void;
    hide(): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onKeydown(event: any): void;
    findListItem(element: any): any;
    findOptionIndex(val: any, opts: SelectItem[]): number;
    findOption(val: any, opts: SelectItem[]): SelectItem;
    onFilter(event: any): void;
    ngOnDestroy(): void;
}
