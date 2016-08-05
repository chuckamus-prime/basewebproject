import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { SelectItem } from '../common';
import { DomHandler } from '../dom/domhandler';
import { ControlValueAccessor } from '@angular/forms';
export declare class Listbox implements ControlValueAccessor {
    private el;
    private domHandler;
    options: SelectItem[];
    multiple: boolean;
    style: any;
    styleClass: string;
    disabled: string;
    onChange: EventEmitter<any>;
    itemTemplate: TemplateRef<any>;
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    valueChanged: boolean;
    hoveredItem: any;
    constructor(el: ElementRef, domHandler: DomHandler);
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    onOptionClick(event: any, option: any): void;
    onOptionClickSingle(event: any, option: any): void;
    onOptionClickMultiple(event: any, option: any): void;
    isSelected(option: SelectItem): boolean;
    findIndex(option: SelectItem): number;
}
