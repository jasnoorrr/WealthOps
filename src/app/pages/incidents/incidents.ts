import { Component } from '@angular/core';

interface Incident {
  id: string;
  title: string;
  service: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Open' | 'Investigating' | 'In Progress' | 'Resolved';
  assignedTo: string;
  createdAt: string;
  description: string;
}

@Component({
  selector: 'app-incidents',
  imports: [],
  templateUrl: './incidents.html',
  styleUrl: './incidents.scss'
})
export class Incidents {

  selectedIncidentId = 'INC-10024';

  incidents: Incident[] = [
    {
      id: 'INC-10024',
      title: 'Pricing Data Feed Failure',
      service: 'Pricing Service',
      severity: 'High',
      status: 'In Progress',
      assignedTo: 'Market Data Support',
      createdAt: '10:32 AM',
      description: 'Scheduled pricing import failed after repeated upstream connection timeouts.'
    },
    {
      id: 'INC-10023',
      title: 'Portfolio Sync Delay',
      service: 'Portfolio Service',
      severity: 'Medium',
      status: 'Investigating',
      assignedTo: 'Investment Operations',
      createdAt: '09:15 AM',
      description: 'Portfolio synchronization exceeded the expected processing window.'
    },
    {
      id: 'INC-10022',
      title: 'Report Generation Error',
      service: 'Reporting Service',
      severity: 'High',
      status: 'Open',
      assignedTo: 'Reporting Support',
      createdAt: '08:47 AM',
      description: 'Scheduled client report generation terminated before completion.'
    },
    {
      id: 'INC-10021',
      title: 'Authentication Latency',
      service: 'Identity Service',
      severity: 'Low',
      status: 'Resolved',
      assignedTo: 'Platform Support',
      createdAt: '07:26 AM',
      description: 'Authentication requests experienced elevated response times.'
    }
  ];

  get selectedIncident(): Incident {
    return (
      this.incidents.find(
        incident => incident.id === this.selectedIncidentId
      ) ?? this.incidents[0]
    );
  }

  selectIncident(id: string): void {
    this.selectedIncidentId = id;
  }

}