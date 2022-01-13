import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

import { Subscription } from 'rxjs';

import { CocoaDocsService } from '../../services/docs.service';
import { MethodsColumns, PropertiesColumns } from '../../constants';

/**
 * @ignore
 */
@Component({
  selector: 'docs-service-base',
  templateUrl: './service-base.component.html',
  styleUrls: ['../../assets/styles/base-styles.scss']
})
export class CocoaDocsServiceBaseComponent implements  OnInit, OnDestroy {

  dropdownItems: any = [];
  selectedItem: any;

  navigation: Subscription;
  target: string;
  targetJSON: any;

  deprecated: boolean = false;
  deprecationMessage: string = '';

  sourceCode: string = '';

  propertiesItems: any = [];
  propertiesColumns: any[] = PropertiesColumns;

  methodsItems: any = [];
  methodsColumns: any[] = MethodsColumns;

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public viewContainer: ViewContainerRef,
    public componentFactoryResolver: ComponentFactoryResolver,
    private docsService: CocoaDocsService
  ) {
    this.navigation = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.route.params.subscribe(params => {
          this.target = params['target'];
          this.setServiceData();
        });
      }
    });
  }


  ngOnInit() { }

  setServiceData() {
    /**
    * Get entire json object for the target component
    */
    this.targetJSON = this.docsService.getServiceDataByName(this.target);

    this.deprecated = this.targetJSON.deprecated;
    this.deprecationMessage = this.targetJSON.deprecationMessage;

    /**
    * Properties items table data of documentation tab
    */
    this.propertiesItems = this.targetJSON.properties;

    /**
    * Methods items table data of documentation tab
    */
    this.methodsItems = this.targetJSON.methods;

    /**
    * Data for source code tab
    */
    this.sourceCode = this.targetJSON.sourceCode;
    
  }

  ngOnDestroy() {
    this.navigation.unsubscribe();
  }

}
