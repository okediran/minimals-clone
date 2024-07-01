// types.ts

// Define routes as string literals
export type RouteName =
  | 'dashboard'
  | 'customers'
  | 'analytics'
  | 'commerce'
  | 'crypto'
  | 'settings'
  | 'customerscreate'
  | 'products'
  | 'productscreate'
  | 'orders'
  | 'orderscreate'
  | 'invoices'
  | 'invoicescreate'
  | 'jobs'
  | 'jobscreate'
  | 'logistics'
  | 'fleet'
  | 'blog'
  | 'blogcreate'
  | 'socialprofile'
  | 'socialfeed'
  | 'academy'
  | 'file'
  | 'chat'
  | 'calendar'
  | 'inbox'
  | 'tasks';

// SLUGS object with routes
const SLUGS: Record<RouteName, string> = {
  // Public routes
  dashboard: '/dashboard',
  customers: '/dashboard/customers',
  analytics: '/dashboard/analytics',
  commerce: '/dashboard/e-commerce',
  crypto: '/dashboard/crypto',
  products: '/dashboard/products',
  orders: '/dashboard/orders',
  jobs: '/dashboard/jobs',
  invoices: '/dashboard/invoices',
  blog: '/dashboard/blog',
  
  // Settings
  settings: '/dashboard/settings/account',

  // Creation routes
  customerscreate: '/dashboard/customers/create',
  productscreate: '/dashboard/products/create',
  orderscreate: '/dashboard/orders/create',
  invoicescreate: '/dashboard/invoices/create',
  jobscreate: '/dashboard/jobs/create',
  blogcreate: '/dashboard/blog/create',

  // Additional sections
  logistics: '/dashboard/logistics',
  fleet: '/dashboard/fleet',
  socialprofile: '/dashboard/social/profile',
  socialfeed: '/dashboard/social/feed',
  academy: '/dashboard/academy',
  file: '/dashboard/file-storage',
  chat: '/dashboard/chat',
  calendar: '/dashboard/calendar',
  inbox: '/dashboard/mail/inbox',
  tasks: '/dashboard/tasks',
};

export default SLUGS;
