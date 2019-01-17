import * as React from 'react';
import styles from './QuickLinksListView.module.scss';
import { IQuickLinksListViewProps } from './IQuickLinksListViewProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class QuickLinksListView extends React.Component<IQuickLinksListViewProps, {}> {
  public render(): React.ReactElement<IQuickLinksListViewProps> {
    return (
      <div className={ styles.quickLinksListView }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <p className={ styles.description }>{ this.props.listName }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
