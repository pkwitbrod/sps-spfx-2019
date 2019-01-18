import * as React from 'react';
import styles from './QuickLinksListView.module.scss';
import { IQuickLinksListViewProps } from './IQuickLinksListViewProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ISPLinkList from '../../Interfaces/ISharePointLinkListItem';

import {
  SPHttpClient,
  SPHttpClientResponse   
 } from '@microsoft/sp-http';


import MockHttpClient from '../../Services/MockHttpService';
import { SharepointLinkListService } from '../../Services/SharepointLinkListService';

//State defaults to type object but we want a bit more than that so let's make an interface
export interface IQuickLinksState{
  QuickLinkEnvironMent: string;
  QuickLinkNumberOfLinks: number;
  HelpfulLinks: ISPLinkList[];
  ListName: string;
}

export default class QuickLinksListView extends React.Component<IQuickLinksListViewProps, IQuickLinksState> {

  
  constructor(props: IQuickLinksListViewProps, state: IQuickLinksState){
    super(props);
    const defaultEnvironment: string = "Local Workbench";
    const defaultNumber: number = 5;
    const defaultItem: ISPLinkList[] = [{Title: "Google", Url: "http://www.google.com", Id: 1 } as ISPLinkList]; 

    this.state = {
      QuickLinkEnvironMent: defaultEnvironment,
      QuickLinkNumberOfLinks: defaultNumber,
      HelpfulLinks: defaultItem,
      ListName: null
    };

  }

  public componentWillMount(){ 
    this.setState({QuickLinkEnvironMent: this.props.context.web.title});
  }

  public componentDidMount(){
     this._loadListItems();
  }


  public componentDidUpdate(previousProps: IQuickLinksListViewProps, previousState: IQuickLinksState ): void{
    console.log(this.props);
    if(previousState.QuickLinkNumberOfLinks !== this.props.numberOfLinks && this.props.numberOfLinks !== undefined){
      this.setState({QuickLinkNumberOfLinks: this.props.numberOfLinks});
    }

    if(previousState.ListName !== this.props.listName){
      this.setState({ListName: this.props.listName});
      this._loadListItems();
    }
   }

  public render(): React.ReactElement<IQuickLinksListViewProps> {

    const links: JSX.Element[] = this.state.HelpfulLinks.map((item: ISPLinkList, i: number): JSX.Element => {
      if (i < this.state.QuickLinkNumberOfLinks) {
        return (
          <li key={item.Id}><a href={item.Url} target='_blank'>{item.Title}</a></li>
        );
      }
    });


    return (
      <div className={ styles.quickLinksListView }>
        <div className={ styles.container }>
        <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Helpful Links!</span>
              {this._statusElement(this.props)}
              <p className="ms-font-l ms-fontColor-white">Below is a list of links you can use to learn more about the SharePoint Framework</p>
              <p className="ms-font-l ms-fontColor-white">Environment from props: {this.props.context.web.title}</p>
              <ul className={styles.customList}>
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _getMockListData(): Promise<ISPLinkList[]> {
    return MockHttpClient.getListItems()
      .then((data: ISPLinkList[]) => {
        var listData: ISPLinkList[] = data;
        return listData;
      }) as Promise<ISPLinkList[]>;
  }

  private _statusElement(props: IQuickLinksListViewProps): JSX.Element {
    if(this._listNotConfigured(props)){
      return (<p className="ms-font-xl ms-fontColor-red">List not configured</p>);
    }else{
      return (<p className="ms-font-xl ms-fontColor-red"></p>);
    }
  }

    private _listNotConfigured(props: IQuickLinksListViewProps): boolean {
      return props.listName === undefined ||
        props.listName === null ||
        props.listName.length === 0;
    }

    private async _loadListItems(){
      if (this.state.QuickLinkEnvironMent === "Local Workbench") {
        const listItems = await this._getMockListData();
        this.setState({HelpfulLinks: listItems});
      }else{
        if(!this._listNotConfigured(this.props)){
          const sharepointClient = new SharepointLinkListService(this.props.listName, this.props.context.web.absoluteUrl, this.props.httpClient);   
          const items = await sharepointClient.getItems();
          this.setState({HelpfulLinks: items});
        }
      }
    }


}
