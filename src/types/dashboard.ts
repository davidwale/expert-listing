export type TabType = 'Dashboard' | 'Listings' | 'Users' | 'Request' | 'Applications' | 'Tasks';

export type TimeframeType = '1 Week' | '1 Month' | '1 Year';

export interface ChartDataItem {
  name: string;
  blue: number;
  green: number;
  orange: number;
  purple: number;
  red: number;
}

export interface Transaction {
  id: string;
  user: string;
  type: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
}

export interface SiteVisitSlide {
  image: string;
  title: string;
  value: string;
  subtitle: string;
}

export interface ClickedSlide {
  image: string;
  title: string;
  name: string;
  location: string;
  clicks: string;
}

export interface WatchlistedSlide {
  image: string;
  title: string;
  name: string;
  location: string;
  watchlistCount: number;
}
