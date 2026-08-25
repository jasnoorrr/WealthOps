import { Component } from '@angular/core';

interface BatchJob {
  id: string;
  name: string;
  system: string;
  status: 'Success' | 'Failed' | 'Running' | 'Queued';
  lastRun: string;
  duration: string;
  nextRun: string;
  owner: string;
}

@Component({
  selector: 'app-batch-jobs',
  imports: [],
  templateUrl: './batch-jobs.html',
  styleUrl: './batch-jobs.scss'
})
export class BatchJobs {

  jobs: BatchJob[] = [
    {
      id: 'JOB-001',
      name: 'Portfolio Sync',
      system: 'Portfolio Service',
      status: 'Success',
      lastRun: '10:00 AM',
      duration: '2m 14s',
      nextRun: '11:00 AM',
      owner: 'Investment Ops'
    },
    {
      id: 'JOB-002',
      name: 'Pricing Feed Import',
      system: 'Pricing Service',
      status: 'Failed',
      lastRun: '10:15 AM',
      duration: '48s',
      nextRun: '10:45 AM',
      owner: 'Market Data'
    },
    {
      id: 'JOB-003',
      name: 'Holdings Reconciliation',
      system: 'Reconciliation Engine',
      status: 'Running',
      lastRun: '10:25 AM',
      duration: '4m 06s',
      nextRun: '12:00 PM',
      owner: 'Operations'
    },
    {
      id: 'JOB-004',
      name: 'Client Reporting',
      system: 'Reporting Service',
      status: 'Success',
      lastRun: '09:30 AM',
      duration: '3m 42s',
      nextRun: '1:30 PM',
      owner: 'Reporting'
    },
    {
      id: 'JOB-005',
      name: 'Account Position Update',
      system: 'Account Service',
      status: 'Queued',
      lastRun: '09:00 AM',
      duration: '1m 56s',
      nextRun: '10:50 AM',
      owner: 'Client Data'
    }
  ];

}