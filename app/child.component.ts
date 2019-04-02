import {Component,OnInit,Input,Output,EventEmitter} from "@angular/core";

@Component({
    selector:"child",
    templateUrl:"app/child.component.html"
})
export class ChildComponent implements OnInit{
    //用@Input来修饰message变量
    @Input() private message:string;
    @Output() private outer=new EventEmitter<string>();//初始化outer事件对象，类型为string
    constructor(){}
    ngOnInit(){}
    sendToParent(){//发送消息的方法
        this.outer.emit('message from child');
    }
}