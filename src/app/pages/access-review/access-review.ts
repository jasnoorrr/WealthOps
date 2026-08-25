import { Component } from '@angular/core';

interface AccessReviewItem {
  id: string;
  account: string;
  accountType: 'User' | 'Service Account' | 'Non-Personal ID';
  application: string;
  role: string;
  owner: string;
  risk: 'High' | 'Medium' | 'Low';
  status: 'Pending Review' | 'Approved' | 'Remediation Required' | 'Removed';
  lastReviewed: string;
}

@Component({
  selector: 'app-access-review',
  imports: [],
  templateUrl: './access-review.html',
  styleUrl: './access-review.scss'
})
export class AccessReview {

  selectedReviewId = 'AR-30018';

  reviews: AccessReviewItem[] = [
    {
      id: 'AR-30018',
      account: 'svc-pricing-import',
      accountType: 'Service Account',
      application: 'Pricing Service',
      role: 'Market Data Integration',
      owner: 'Market Data Support',
      risk: 'High',
      status: 'Remediation Required',
      lastReviewed: 'Aug 23, 2026'
    },
    {
      id: 'AR-30017',
      account: 'npi-reporting-batch',
      accountType: 'Non-Personal ID',
      application: 'Reporting Service',
      role: 'Report Generation',
      owner: 'Reporting Support',
      risk: 'Medium',
      status: 'Pending Review',
      lastReviewed: 'Aug 20, 2026'
    },
    {
      id: 'AR-30016',
      account: 'jdoe',
      accountType: 'User',
      application: 'Portfolio Service',
      role: 'Portfolio Analyst',
      owner: 'Investment Operations',
      risk: 'Low',
      status: 'Approved',
      lastReviewed: 'Aug 18, 2026'
    },
    {
      id: 'AR-30015',
      account: 'legacy-price-reader',
      accountType: 'Service Account',
      application: 'Pricing Service',
      role: 'Read Only Feed',
      owner: 'Platform Support',
      risk: 'High',
      status: 'Removed',
      lastReviewed: 'Aug 17, 2026'
    }
  ];

  get selectedReview(): AccessReviewItem {
    return (
      this.reviews.find(review => review.id === this.selectedReviewId)
      ?? this.reviews[0]
    );
  }

  selectReview(id: string): void {
    this.selectedReviewId = id;
  }

}