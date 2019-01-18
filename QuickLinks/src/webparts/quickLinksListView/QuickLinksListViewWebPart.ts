import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle,
} from '@microsoft/sp-webpart-base';

import * as strings from 'QuickLinksListViewWebPartStrings';
import QuickLinksListView from './components/QuickLinksListView';
import { IQuickLinksListViewProps } from './components/IQuickLinksListViewProps';
import { SPHttpClient } from '@microsoft/sp-http';

export interface IQuickLinksListViewWebPartProps {
  description: string;
  numberOfLinks: number;
  listName: string;
  context: string;
  httpclient: SPHttpClient;
}

export default class QuickLinksListViewWebPart extends BaseClientSideWebPart<IQuickLinksListViewWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IQuickLinksListViewProps > = React.createElement(
      QuickLinksListView,
      {
        description: this.properties.description,
        numberOfLinks: this.properties.numberOfLinks,
        listName: this.properties.listName,
        context: this.context.pageContext,
        httpClient: this.context.spHttpClient,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            },
            {
              groupName: strings.ListPropertyGroup,
              groupFields:[PropertyPaneTextField('listName', {
                label: strings.ListNameDiscripton
              }),
              PropertyPaneDropdown('numberOfLinks',{
              label: 'Number Of Links',
              options: [
                { key: '1', text: '1' },
                { key: '3', text: '3' },
                { key: '5', text: '5' },
                { key: '10', text: '10' }
              ],
              selectedKey: '5',})
              ]
            }
          ]
        }
      ]
    };
  }
}
