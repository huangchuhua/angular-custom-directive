import {Directive,ElementRef,Renderer} from "@angular/core";

@Directive({
    selector:'[waterMark]',//用[]表示属性
})
export class WaterMarkDirective{
    constructor(el:ElementRef,render:Renderer){
        let count = '13422228888';

        let canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 150;
        canvas.setAttribute('id', 'canvasId');
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.shadowColor = '#666';
        ctx.font = '20px Arial';
        ctx.fillStyle = '#999';
        ctx.rotate(-20 * Math.PI / 180);
        ctx.fillText(count, 20, 100);
        
        let imageUrl = canvas.toDataURL("image/png");
        render.setElementStyle(el.nativeElement,"background",`url(${imageUrl}) repeat`);//自定义指令，改变元素背景
    }
}