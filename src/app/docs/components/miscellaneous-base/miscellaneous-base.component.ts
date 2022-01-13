import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs';

import { CocoaDocsService } from '../../services/docs.service';
import { EnumerationColumns } from '../../constants';

/**
 * @ignore
 */
@Component({
  selector: 'docs-miscellaneous-base',
  templateUrl: './miscellaneous-base.component.html',
  styleUrls: ['../../assets/styles/base-styles.scss']
})
export class CocoaDocsMiscellaneousBaseComponent implements OnInit, OnDestroy {

  navigation: Subscription;
  target: string = '';

  variableItems: any = [];
  typealiasItems: any = [];
  enumerationItems: any = [];
  enumerationColumns: any[] = EnumerationColumns;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private docsService: CocoaDocsService
  ) {
    this.navigation = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.route.params.subscribe(params => {
          this.target = params.target;
        });
      }
    });
  }

  ngOnInit(): void {
    this.setVariableData();
    this.setTypeAliasData();
    this.setEnumerationData();
  }

  setVariableData() {
    this.variableItems = this.docsService.getMiscellaneousDataByType(this.target, 'variables'); 
  }

  setTypeAliasData() {
    this.typealiasItems = this.docsService.getMiscellaneousDataByType(this.target, 'typealiases');
  }

  setEnumerationData() {
    this.enumerationItems = this.docsService.getMiscellaneousDataByType(this.target, 'enumerations');
  }

  ngOnDestroy() {
    this.navigation.unsubscribe();
  }

}
