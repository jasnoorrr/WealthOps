import { Component } from '@angular/core';

interface ServiceTicket {
  id: string;
  title: string;
  linkedIncident: string;
  category: string;
  priority: 'P1' | 'P2' | 'P3' | 'P4';
  status: 'Open' | 'In Progress' | 'Pending' | 'Resolved';
  assignmentGroup: string;
  assignee: string;
  createdAt: string;
  sla: string;
}

@Component({
  selector: 'app-service-tickets',
  imports: [],
  templateUrl: './service-tickets.html',
  styleUrl: './service-tickets.scss'
})
export class ServiceTickets {

  selectedTicketId = 'SR-20418';

  tickets: ServiceTicket[] = [
    {
      id: 'SR-20418',
      title: 'Investigate Pricing Feed Connectivity',
      linkedIncident: 'INC-10024',
      category: 'Application Support',
      priority: 'P1',
      status: 'In Progress',
      assignmentGroup: 'Market Data Support',
      assignee: 'Alex Chen',
      createdAt: '10:36 AM',
      sla: '42m remaining'
    },
    {
      id: 'SR-20417',
      title: 'Review Portfolio Sync Performance',
      linkedIncident: 'INC-10023',
      category: 'Performance',
      priority: 'P2',
      status: 'Open',
      assignmentGroup: 'Investment Operations',
      assignee: 'Unassigned',
      createdAt: '09:22 AM',
      sla: '2h 18m remaining'
    },
    {
      id: 'SR-20416',
      title: 'Resolve Client Reporting Failure',
      linkedIncident: 'INC-10022',
      category: 'Application Support',
      priority: 'P2',
      status: 'Pending',
      assignmentGroup: 'Reporting Support',
      assignee: 'Sarah Patel',
      createdAt: '08:55 AM',
      sla: '1h 34m remaining'
    },
    {
      id: 'SR-20415',
      title: 'Authentication Latency Review',
      linkedIncident: 'INC-10021',
      category: 'Infrastructure',
      priority: 'P3',
      status: 'Resolved',
      assignmentGroup: 'Platform Support',
      assignee: 'Daniel Kim',
      createdAt: '07:31 AM',
      sla: 'Completed'
    }
  ];

  get selectedTicket(): ServiceTicket {
    return (
      this.tickets.find(ticket => ticket.id === this.selectedTicketId)
      ?? this.tickets[0]
    );
  }

  selectTicket(id: string): void {
    this.selectedTicketId = id;
  }
}