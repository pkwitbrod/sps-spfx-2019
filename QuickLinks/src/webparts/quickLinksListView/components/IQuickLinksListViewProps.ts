import { PageContext } from "@microsoft/sp-page-context";
import { SPHttpClient } from "@microsoft/sp-http";

export interface IQuickLinksListViewProps {
  description: string;
  numberOfLinks: number;
  listName: string;
  context: PageContext;
  httpClient: SPHttpClient;
}
