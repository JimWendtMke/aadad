import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

import { Subscription } from 'rxjs';

import  { DocsService } from '../../services/docs.service';
import { InputColumns, InterfaceColumns, OutputColumns, PropertiesColumns } from '../../constants';

/**
 * @ignore
 */
@Component({
  selector: 'docs-component-base',
  templateUrl: './component-base.component.html',
  styleUrls: ['../../assets/styles/base-styles.scss']
})
export class DocsComponentBaseComponent implements OnInit, OnDestroy {

  @ViewChild('demoTab', { read: ViewContainerRef, static: true }) demoTab;
  @ViewChild('exampleSelect') exampleSelect;
  

  dropdownItems: any = [];
  selectedItem: any;

  rowHeight: string;
  navigation: Subscription;
  target: string;
  targetJSON: any;
 
  targetDemoComponent: any;
  targetDemoInstance: any;
  targetDemoJSON: any;
  targetDemoData: any;
  targetDemoSource: any;
  targetDemoTemplate: string = '';

  deprecated: boolean = false;
  deprecationMessage: string = '';

  sourceCode: string = '';
  styleUrlsData: Array<{}> = [];

  inputCaption: string;
  inputItems: any = [];
  inputColumns: any[] = InputColumns;
  inputFooter: boolean;
  inputEmptyText: string;
  inputSummaryText: string;

  outputCaption: string;
  outputItems: any = [];
  outputColumns: any[] = OutputColumns;
  outputFooter: boolean;
  outputEmptyText: string;
  outputSummaryText: string;

  propertiesCaption: string;
  propertiesItems: any = [];
  propertiesColumns: any[] = PropertiesColumns;
  propertiesFooter: boolean;
  propertiesEmptyText: string;
  propertiesSummaryText: string;

  interfaceCaption: string;
  interfaceItems: string[] = [];
  interfaceColumns: any[] = InterfaceColumns;

  languages: string[] = ['typescript'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public viewContainer: ViewContainerRef,
    public componentFactoryResolver: ComponentFactoryResolver,
    private clipboard: Clipboard,
    private docsService: DocsService
  ) {
    this.navigation = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.route.params.subscribe(params => {
          this.target = params['target'];
          this.targetJSON = this.docsService.getComponentDataByName(this.target);

          /**
          * The following is the start of all docs on one page. Not currently working
          */
          this.interfaceItems = this.docsService.getInterfacesFromObject('component', this.target);

          this.setComponentData();
        });
      }
    });
  }

  ngOnInit() { }


  setComponentData() {
    /**
    * Get entire json object for the target component
    */
    this.targetJSON = this.docsService.getComponentDataByName(this.target);

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
    this.targetDemoData = '';
    this.dropdownItems = [];
    this.selectedItem = {};

    if (this.targetDemoComponent) {
      const contentFactory = this.componentFactoryResolver.resolveComponentFactory(this.targetDemoComponent.demo);
      this.targetDemoInstance = this.demoTab.createComponent(contentFactory, 0);
      this.dropdownItems = this.targetDemoInstance.instance.dropdownItems || [];
      this.selectedItem = this.dropdownItems[0];
      if (this.exampleSelect) {
        this.exampleSelect.value = '';
      }
      if (this.targetDemoInstance.instance.examples) {
        this.targetDemoData = JSON.stringify(this.targetDemoInstance.instance.examples[0], undefined, 2);
      }
    }
    this.rowHeight = 'sm';
    /**
    * Input items table data of documentation tab
    */
    this.inputCaption = 'Input Items';
    this.inputItems = this.targetJSON.inputsClass;
    this.inputFooter = false;
    this.inputEmptyText = 'None';
    this.inputSummaryText = '';
    /**
    * Ouput items table data of documentation tab
    */
    this.outputCaption = 'Output Items';
    this.outputItems = this.targetJSON.outputsClass;
    this.outputFooter = false;
    this.outputEmptyText = 'None';
    this.outputSummaryText = '';

    /**
    * Properties items table data of documentation tab
    */
    this.propertiesCaption = 'Properties/Methods';
    this.propertiesItems = this.targetJSON.propertiesClass;
    this.propertiesFooter = false;
    this.propertiesEmptyText = 'None';
    this.propertiesSummaryText = '';

    /**
    * Data for source code tab
    */
    this.sourceCode = this.targetJSON.sourceCode;

    /**
    * Data for styles tab
    */
    this.styleUrlsData = this.targetJSON.styleUrlsData;
    this.styleUrlsData.map(style => {
      style['styleUrl'] = style['styleUrl'].replace(/^\.\//, '');
    })
  }

  changeExampleData($event) {
    const selected = parseInt($event.value, 10);
    this.selectedItem = this.targetDemoInstance.instance.dropdownItems[selected];
    this.targetDemoInstance.instance.example = this.targetDemoInstance.instance.examples[selected];
    this.targetDemoData = JSON.stringify(this.targetDemoInstance.instance.examples[selected], undefined, 2);
    if (this.targetDemoInstance.instance.sendMessage) {
      this.targetDemoInstance.instance.sendMessage();
    }
  }

  copyToClipboard(text) {
    this.clipboard.copy(text);
  }

  ngOnDestroy() {
    this.navigation.unsubscribe();
  }

}
