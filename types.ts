
export interface SubTopic {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface MainCategory {
  id: string;
  title: string;
  topics: SubTopic[];
  gradient: string;
  icon: string;
}

export enum ViewMode {
  LANDING = 'LANDING',
  HOME = 'HOME',
  TOPIC = 'TOPIC',
  DETAIL = 'DETAIL'
}
