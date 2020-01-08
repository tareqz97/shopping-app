import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.css']
})
export class BreadcrumpComponent implements OnInit {

  constructor(private _router: Router ,private _activeRoute: ActivatedRoute) { }
  breadcrumbList = [];
  name;
  id;
  ngOnInit() {
    this.listenRouting();
  }
  listenRouting(){
    let routerUrl;
    let routerList: Array<any>;
    // this._router.events.subscribe((router: any) => {
    //   routerUrl = router.urlAfterRedirects
    //   if(routerUrl && typeof routerUrl === 'string'){
    //     this.breadcrumbList.length = 0;
    //     routerList = routerUrl.slice(1).split('/');
    //     console.log(routerList)
    //     routerList.forEach((router,index) =>{
    //       this.breadcrumbList.push({
    //         name : router[0]
    //       })
    //     })
    //   }
      
    // });
    this._activeRoute.snapshot.url.forEach((o,i)=>{
      this.pushBreadcrump(o.path,o.path);
      console.log(o);
    })
    this._activeRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
  pushBreadcrump(name,path){
    this.breadcrumbList.push({
      name : name,
      path : this.getPath(path)
    })
  }
  getPath(path){
    switch(path){
      case 'prodects' :
        return '/admin/prodects';
    }
  }
}
