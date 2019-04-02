import {Component,OnInit} from "@angular/core";
//导入服务
import {LoggerService} from "./logger.service";

@Component({
    selector:'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent implements OnInit{
    //声明变量
    private greeting:string;
    private isShowMore:boolean;
    private msgToChild:string;
    private msgFromChild:string;//子组件传来的数据

    constructor(private logger:LoggerService){//获得loggerService服务实例

    }
    ngOnInit(){
        //组件初始化时赋值变量
        this.greeting="angular2";
        this.msgToChild="message from parent";
        //使用服务
        this.logger.debug('组件已经完成初始化');

    }
    receive(msg:string){
        this.msgFromChild=msg;
    }
}