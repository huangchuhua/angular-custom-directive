import {Directive,ElementRef,Renderer} from "@angular/core";

@Directive({
    selector:'[highlight]',//用[]表示属性
})
export class HighlightDirective{
    constructor(el:ElementRef,render:Renderer){
        render.setElementStyle(el.nativeElement,"backgroundColor","yellowgreen");//自定义指令，改变元素背景色
    }
}