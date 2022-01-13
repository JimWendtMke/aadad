import { Injectable } from '@angular/core';

import { MiscellaneousList, EnumerationIgnore, TypealiasIgnore, VariableIgnore } from '../constants'
import docsJSON from '../assets/documentation.json';

/**
 * @ignore
 */
@Injectable({
  providedIn: 'root'
})
export class DocsService {

  docsData: any;
  demoComponents: any;

  /**
  * Preload all of the lists with the available applications we are supporting
  */
  componentList: string[] = [];
  directiveList: string[] = [];
  interfaceList: string[] = [];
  pipeList: string[] = [];
  serviceList: string[] = [];
  /**
  * Preload Miscellaneous list with documented systems 
  */
  miscellaneousList: any = MiscellaneousList;

  /**
  * Setup items that should not show in documentation 
  */
  variableIgnore: string[] = VariableIgnore;
  typealiasIgnore: string[] = TypealiasIgnore;
  enumerationIgnore: string[] = EnumerationIgnore;

  constructor( ) {}

  getDocumentation() {
    this.docsData = docsJSON;
    this.cleanRawDescriptions(docsJSON);
    this.loadLists();
  }
  /** 
  * Recursive function strip leading and trailing new line(s) 
  */
  cleanRawDescriptions(data) {
    for (let prop in data) {
      if (typeof(data[prop]) === "object" && data[prop] !== null) {
        this.cleanRawDescriptions(data[prop]);
      } else {
        if (prop === "rawdescription" && data[prop]) {
          /**
          * Leading new line(s)
          */
          while (data[prop].search(/^\n/) !== -1) {
            data[prop] = data[prop].replace(/^\n/, '');
          }
          /**
          * Trailing new line(s)
          */
          while (data[prop].search(/\n$/) !== -1) {
            data[prop] = data[prop].replace(/\n$/, '');
          }
        }
      }
    }
  }

  loadLists() {
    this.docsData.components.map(item => {
      this.componentList.push(item.name);
    });
    this.docsData.directives.map(item => {
      this.directiveList.push(item.name);
    });
    this.docsData.interfaces.map(item => {
      this.interfaceList.push(item.name);
    });
    this.docsData.pipes.map(item => {
      this.pipeList.push(item.name);
    });
    this.docsData.injectables.map(item => {
      this.serviceList.push(item.name);
    });
  }

  getComponentDataByName(name) {
    return this.docsData.components.find((item) => item.name === name);
  }

  /**
   * 
   * @param type 'component' | 'interface'
   * @param name Name of the object to search
   * @returns Array of interfaces with data
   */
  getInterfacesFromObject(type, name) {
    let objectJSON: any;
    const importedInterfaces: any = [];
    if (type === 'component') {
      objectJSON = this.getComponentDataByName(name);
    } else if (type === 'interface') {
      objectJSON = this.getInterfaceDataByName(name);
    } else {
      return importedInterfaces;
    }

    objectJSON.inputsClass.find((item) => {
      if (item.type.search('<') !== -1) {
        return false;
      }
      if (item.type === 'string' || item.type === 'number' || item.type === 'boolean') {
        return false;
      }
      item.type = item.type.replace(/\[\]/, '');
      if (importedInterfaces.indexOf(item.type) === -1) {
        importedInterfaces[item.type] = this.getInterfaceDataByName(item.type)
      }
      return;
    });
    return importedInterfaces.sort() || [];

  }

  getDirectiveDataByName(name) {
    return this.docsData.directives.find((item) => item.name === name);
  }

  getInterfaceDataByName(name) {
    return this.docsData.interfaces.find((item) => item.name === name);
  }

  getServiceDataByName(name) {
    return this.docsData.injectables.find((item) => item.name === name);
  }

  getMiscellaneousDataByType(target, type) {
    const items: any = [];
    const location: string = this.miscellaneousList.find((item) => item.name === target).location;
    this.docsData.miscellaneous[type].map(item => {
      if (item.file.search(location) !== -1) {
        switch (type) {
          case 'variables':
            if (this.variableIgnore.indexOf(item.name) === -1) {
              items.push(item);
            }
            break;
          case 'typealiases':
            if (this.typealiasIgnore.indexOf(item.name) === -1) {
              items.push(item);
            }
            break;
          case 'enumerations':
            if (this.enumerationIgnore.indexOf(item.name) === -1) {
              items.push(item);
            }
            break;
        }
      }
    });
    return items;
  }

  setDemoComponents(demos) {
    this.demoComponents = demos;
  }

  getDemoComponentByName(name) {

    
    return null;
    return this.demoComponents[name] || null;
  }

  canNavigate(type, name) {
    /**
    * Catches home pages
    */
    if (this.miscellaneousList.find((item) => item.name === name)) {
      return true;
    }
    switch (type) {
      case 'components':
        return this.componentList.indexOf(name) !== -1;
      case 'directives':
        return this.directiveList.indexOf(name) !== -1;
      case 'interfaces':
        return this.interfaceList.indexOf(name) !== -1;
      case 'pipes':
        return this.pipeList.indexOf(name) !== -1;
      case 'services':
        return this.serviceList.indexOf(name) !== -1;
      case 'miscellaneous':
        return this.miscellaneousList.indexOf(name) !== -1;
    }
    return false;
  }
  
}
