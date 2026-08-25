import { Component } from '@angular/core';

interface ReportItem {
  name: string;
  type: string;
  period: string;
  status: 'Ready' | 'Generating';
  generatedAt: string;
}

@Component({
  selector: 'app-reports',
  imports: [],
  templateUrl: './reports.html',
  styleUrl: './reports.scss'
})
export class Reports {

  reports: ReportItem[] = [
    {
      name: 'Daily Operations Summary',
      type: 'Operations',
      period: 'Aug 24, 2026',
      status: 'Ready',
      generatedAt: '8:00 PM'
    },
    {
      name: 'Incident Performance Report',
      type: 'Incident Management',
      period: 'Last 7 Days',
      status: 'Ready',
      generatedAt: '7:45 PM'
    },
    {
      name: 'Batch Processing Health',
      type: 'Batch Operations',
      period: 'Last 24 Hours',
      status: 'Ready',
      generatedAt: '7:30 PM'
    },
    {
      name: 'Access Certification Summary',
      type: 'Access Governance',
      period: 'August 2026',
      status: 'Generating',
      generatedAt: '--'
    }
  ];

  generateReport(): void {
    alert('Operational report generation started.');
  }

  downloadReport(report: ReportItem): void {
    alert(`${report.name} downloaded successfully.`);
  }
}