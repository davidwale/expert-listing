import type { ChartDataItem, Transaction, SiteVisitSlide, ClickedSlide, WatchlistedSlide } from '../types/dashboard';

export const chartDatasets: Record<string, ChartDataItem[]> = {
  '1 Week': [
    { name: 'Mon', blue: 15, green: 10, orange: 8, purple: 5, red: 2 },
    { name: 'Tue', blue: 25, green: 18, orange: 12, purple: 8, red: 4 },
    { name: 'Wed', blue: 40, green: 30, orange: 22, purple: 14, red: 8 },
    { name: 'Thu', blue: 30, green: 22, orange: 16, purple: 10, red: 5 },
    { name: 'Fri', blue: 50, green: 35, orange: 28, purple: 18, red: 10 },
    { name: 'Sat', blue: 20, green: 15, orange: 10, purple: 6, red: 3 },
    { name: 'Sun', blue: 18, green: 12, orange: 9, purple: 4, red: 2 },
  ],
  '1 Month': [
    { name: 'W1', blue: 30, green: 20, orange: 15, purple: 10, red: 5 },
    { name: 'W2', blue: 45, green: 32, orange: 24, purple: 16, red: 8 },
    { name: 'W3', blue: 25, green: 18, orange: 12, purple: 8, red: 4 },
    { name: 'W4', blue: 60, green: 40, orange: 30, purple: 20, red: 12 },
  ],
  '1 Year': [
    { name: 'Jan', blue: 35, green: 25, orange: 15, purple: 10, red: 5 },
    { name: 'Feb', blue: 12, green: 28, orange: 18, purple: 8, red: 6 },
    { name: 'Mar', blue: 25, green: 15, orange: 10, purple: 12, red: 7 },
    { name: 'Apr', blue: 20, green: 38, orange: 15, purple: 20, red: 10 },
    { name: 'May', blue: 15, green: 35, orange: 20, purple: 18, red: 8 },
    { name: 'Jun', blue: 45, green: 30, orange: 25, purple: 10, red: 15 },
    { name: 'Jul', blue: 25, green: 20, orange: 15, purple: 12, red: 8 },
    { name: 'Aug', blue: 35, green: 25, orange: 20, purple: 15, red: 10 },
    { name: 'Sep', blue: 32, green: 22, orange: 18, purple: 14, red: 9 },
  ],
};

export const altChartDataset: ChartDataItem[] = [
  { name: 'Oct', blue: 40, green: 28, orange: 20, purple: 12, red: 6 },
  { name: 'Nov', blue: 48, green: 36, orange: 26, purple: 16, red: 8 },
  { name: 'Dec', blue: 55, green: 42, orange: 32, purple: 22, red: 11 },
];

export const siteVisitSlides: SiteVisitSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    title: 'TOTAL SITE VISITS',
    value: '11k',
    subtitle: 'Commercial HQ Tower'
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    title: 'TOTAL SITE VISITS',
    value: '18.4k',
    subtitle: 'Victoria Island Hub'
  }
];

export const clickedSlides: ClickedSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    title: 'MOST CLICKED',
    name: 'Urban Prime Plaza Premiere',
    location: 'Ikoyi, Lagos',
    clicks: '40k'
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    title: 'MOST CLICKED',
    name: 'Eko Atlantic Luxury Suite',
    location: 'Victoria Island, Lagos',
    clicks: '34.2k'
  }
];

export const watchlistedSlides: WatchlistedSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    title: 'MOST WATCHLISTED',
    name: 'Urban Prime Plaza Premiere',
    location: 'Ikoyi, Lagos',
    watchlistCount: 20000
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    title: 'MOST WATCHLISTED',
    name: 'Pinecrest Ridge Residence',
    location: 'Lekki Phase 1, Lagos',
    watchlistCount: 15400
  }
];

export const transactionsList: Transaction[] = [
  { id: 'TXN-9021', user: 'Chidi Okafor', type: 'Listing Fee', amount: '₦250,000.00', status: 'Completed', date: 'Sep 28, 2022' },
  { id: 'TXN-9022', user: 'Amina Bello', type: 'Subscription Renewal', amount: '₦50,000.00', status: 'Completed', date: 'Sep 27, 2022' },
  { id: 'TXN-9023', user: 'David Smith', type: 'Rider Payout', amount: '₦1,200,000.00', status: 'Pending', date: 'Sep 26, 2022' },
  { id: 'TXN-9024', user: 'Grace Emmanuel', type: 'Agent Commission', amount: '₦450,000.00', status: 'Completed', date: 'Sep 25, 2022' },
  { id: 'TXN-9025', user: 'Tunde Bakare', type: 'Developer Verification', amount: '₦100,000.00', status: 'Failed', date: 'Sep 24, 2022' },
];
