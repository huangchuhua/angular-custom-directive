import "reflect-metadata";//动态引导需要依赖的库
import "zone.js";//用来捕获浏览器的异步特性，angular2的变化检测机制
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

//在浏览中启动应用（动态引导）
platformBrowserDynamic().bootstrapModule(AppModule)
.then(success=>console.log("Bootstrap success"))
.catch(error=>console.log(error))