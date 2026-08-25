import { Routes } from '@angular/router';

import { Overview } from './pages/overview/overview';
import { BatchJobs } from './pages/batch-jobs/batch-jobs';
import { Incidents } from './pages/incidents/incidents';
import { ServiceTickets } from './pages/service-tickets/service-tickets';
import { AccessReview } from './pages/access-review/access-review';
import { Reports } from './pages/reports/reports';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: Overview
  },
  {
    path: 'batch-jobs',
    component: BatchJobs
  },
  {
    path: 'incidents',
    component: Incidents
  },
  {
    path: 'service-tickets',
    component: ServiceTickets
  },
  {
    path: 'access-review',
    component: AccessReview
  },
  {
    path: 'reports',
    component: Reports
  },
  {
    path: '**',
    redirectTo: 'overview'
  }
];