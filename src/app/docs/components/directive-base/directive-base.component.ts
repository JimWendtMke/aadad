import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Clipboard } from '@angular/cdk/clipboard';

import { Subscription } from 'rxjs';

import { CocoaDocsService } from '../../services/docs.service';
import { HostListenersColumns, InputColumns, MethodsColumns, OutputColumns, PropertiesColumns } from '../../constants';

/**
 * @ignore
 */
@Component({
  selector: 'docs-directive-base',
  templateUrl: './directive-base.component.html',
  styleUrls: ['../../assets/styles/base-styles.scss']
})
export class CocoaDocsDirectiveBaseComponent implements OnInit, OnDestroy {

  @ViewChild('demoTab', { read: ViewContainerRef, static: true }) demoTab;

  navigation: Subscription;
  target: string;
  targetJSON: any;
  targetDemoComponent: any;
  targetDemoInstance: any;
  targetDemoJSON: any;
  targetDemoSource: any;
  targetDemoTemplate: string = '';

  deprecated: boolean = false;
  deprecationMessage: string = '';

  sourceCode: string = '';

  inputItems: any = [];
  inputColumns: any[] = InputColumns;

  outputItems: any = [];
  outputColumns: any[] = OutputColumns;

  propertiesItems: any = [];
  propertiesColumns: any[] = PropertiesColumns;

  hostListenersItems: any = [];
  hostListenersColumns: any[] = HostListenersColumns;

  methodsItems: any = [];
  methodsColumns: any[] = MethodsColumns;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public viewContainer: ViewContainerRef,
    public componentFactoryResolver: ComponentFactoryResolver,
    private clipboard: Clipboard,
    private docsService: CocoaDocsService
  ) {
    this.navigation = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.route.params.subscribe(params => {
          this.target = params['target'];
          this.targetJSON = this.docsService.getDirectiveDataByName(this.target);
          this.setDirectiveData();
        });
      }
    });
  }

  ngOnInit() { }


  setDirectiveData() {
    /**
    * Get entire json object for the target directive
    */
    this.targetJSON = this.docsService.getDirectiveDataByName(this.target);

    /**
    * Get the target's demo component and data
    */
    this.targetDemoComponent = this.docsService.getDemoComponentByName(this.target);
    
    if (this.targetDemoComponent) {
      this.targetDemoJSON = this.docsService.getComponentDataByName(this.targetDemoComponent.name);
      this.targetDemoSource = this.targetDemoJSON.sourceCode;
      this.targetDemoTemplate = this.targetDemoJSON.templateData;
    } else {
      this.targetDemoSource = '';
      this.targetDemoTemplate = '';
    }

    this.deprecated = this.targetJSON.deprecated;
    this.deprecationMessage = this.targetJSON.deprecationMessage;

    /**
    * Placeholder for target component demo in examples tab
    */
    this.demoTab.clear();
    this.targetDemoInstance = null;

    if (this.targetDemoComponent) {
      const contentFactory = this.componentFactoryResolver.resolveComponentFactory(this.targetDemoComponent.demo);
      this.targetDemoInstance = this.demoTab.createComponent(contentFactory, 0);
    }

    /**
    * Input items table data of documentation tab
    */
    this.inputItems = this.targetJSON.inputsClass;

    /**
    * Ouput items table data of documentation tab
    */
    this.outputItems = this.targetJSON.outputsClass;

    /**
    * Properties items table data of documentation tab
    */
    this.propertiesItems = this.targetJSON.propertiesClass;

    /**
    * Method items table data of documentation tab
    */
    this.methodsItems = this.targetJSON.methodsClass;

    /**
    * Host Listenser items table data of documentation tab
    */
    this.hostListenersItems = this.targetJSON.hostListeners;

    /**
    * Data for source code tab
    */
    this.sourceCode = this.targetJSON.sourceCode;

  }

  copyToClipboard(text) {
    this.clipboard.copy(text);
  }

  ngOnDestroy() {
    this.navigation.unsubscribe();
  }

}
