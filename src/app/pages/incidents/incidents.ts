import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
export class Incidents implements OnInit {

  selectedIncidentId = '';

  incidents: Incident[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Incident[]>(
        'https://wealthops-api-eqb4h0bva9fue3d5.canadacentral-01.azurewebsites.net/api/incidents'
      )
      .subscribe({
        next: (data) => {
          this.incidents = data;

          if (data.length > 0) {
            this.selectedIncidentId = data[0].id;
          }
        },
        error: (error) => {
          console.error('Failed to load incidents from WealthOps API', error);
        }
      });
  }

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