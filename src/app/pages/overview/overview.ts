import { Component } from '@angular/core';

interface Incident {
  id: string;
  title: string;
  service: string;
  severity: 'High' | 'Medium' | 'Low';
  status: 'In Progress' | 'Investigating' | 'Resolved';
  createdAt: string;
}

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.scss'
})
export class Overview {

  incidents: Incident[] = [
    {
      id: 'INC-10024',
      title: 'Pricing Data Feed Failure',
      service: 'Pricing Service',
      severity: 'High',
      status: 'In Progress',
      createdAt: '10:32 AM'
    },
    {
      id: 'INC-10023',
      title: 'Portfolio Sync Delay',
      service: 'Portfolio Service',
      severity: 'Medium',
      status: 'Investigating',
      createdAt: '09:15 AM'
    },
    {
      id: 'INC-10022',
      title: 'Report Generation Error',
      service: 'Reporting Service',
      severity: 'High',
      status: 'In Progress',
      createdAt: '08:47 AM'
    }
  ];

}