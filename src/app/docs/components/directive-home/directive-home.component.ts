import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs';

/**
 * @ignore
 */
@Component({
  selector: 'docs-directive-home',
  templateUrl: './directive-home.component.html',
  styleUrls: ['../../assets/styles/base-styles.scss']
})
export class CocoaDocsDirectiveHomeComponent implements OnInit, OnDestroy {
  
  navigation: Subscription;
  target: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.navigation = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd && event.url.search('base-directive')) {
        this.route.params.subscribe(params => {
          this.target = params.target.toUpperCase();
        });
      }
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.navigation.unsubscribe();
  }

}
