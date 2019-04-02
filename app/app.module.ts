//根模块文件

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

//引入根组件
import {AppComponent} from "./app.component";
//引入自定义指令
import {HighlightDirective} from "./highlight.directive";
//引入服务模块
import {LoggerService} from "./logger.service";
//引入子组件页面
import {ChildComponent} from "./child.component";

import { WaterMarkDirective } from "./waterMark.directive";

//配置根模块
@NgModule({
    imports: [BrowserModule, FormsModule],//BrowserModule--处理浏览器应用逻辑，应用的启动
    declarations: [AppComponent, HighlightDirective, ChildComponent, WaterMarkDirective],//把根组件、其他组件封装到模块里面
    providers: [LoggerService],
    bootstrap:[AppComponent]
})

export class AppModule{}