import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavigationItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  navigationItems: NavigationItem[] = [
    {
      label: 'Overview',
      route: '/overview',
      icon: '⌂'
    },
    {
      label: 'Batch Jobs',
      route: '/batch-jobs',
      icon: '▦'
    },
    {
      label: 'Incidents',
      route: '/incidents',
      icon: '!'
    },
    {
      label: 'Service Tickets',
      route: '/service-tickets',
      icon: '▤'
    },
    {
      label: 'Access Review',
      route: '/access-review',
      icon: '✓'
    },
    {
      label: 'Reports',
      route: '/reports',
      icon: '▥'
    }
  ];
}