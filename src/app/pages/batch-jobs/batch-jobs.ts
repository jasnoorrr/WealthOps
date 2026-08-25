import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
export class BatchJobs implements OnInit {

  jobs: BatchJob[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<BatchJob[]>('http://localhost:8080/api/batch-jobs')
      .subscribe({
        next: (data) => {
          this.jobs = data;
        },
        error: (error) => {
          console.error('Failed to load batch jobs', error);
        }
      });
  }
}