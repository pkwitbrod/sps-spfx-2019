import { SPHttpClient, SPHttpClientConfiguration } from '@microsoft/sp-http';



import ISPLinkList from '../Interfaces/ISharePointLinkListItem';
import SPHttpClientResponse from "@microsoft/sp-http/lib/spHttpClient/SPHttpClientResponse";
import { tasks } from '@microsoft/teams-js';




export class SharepointLinkListService {
    
      constructor(private _listName: string, private _siteUrl: string, private _httpClient: SPHttpClient) {
          
      }
    
      public getItems(): Promise<ISPLinkList[]> {
        return this._getItems();
      }
    

      private async _getItems(): Promise<ISPLinkList[]> {
        const queryString: string = `?$select=Id,Title,Url`;
        const url: string = `${this._siteUrl}/_api/lists/getbytitle('${this._listName}')/items${queryString}`;
        console.log("here");    
        const items = await this._httpClient.get(url, SPHttpClient.configurations.v1);
        
        return await items.json().then((listItems: {value: ISPLinkList[]}) => {
            return listItems.value.map((task: ISPLinkList) => {
                return task;
            })
        });
      }   
    }