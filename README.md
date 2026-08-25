# WealthOps

**Cloud-Deployed Financial Technology Operations Platform**

WealthOps is a full-stack operations dashboard designed to model how technology teams in financial institutions can monitor operational incidents, service health, batch processing, and access-review workflows from a centralized interface.

The project combines an **Angular frontend** with a **Java Spring Boot REST API** and is deployed on **Microsoft Azure** with automated deployment workflows using **GitHub Actions**.

> This is an independent portfolio project created for educational and demonstration purposes. It is not affiliated with or endorsed by any financial institution.

---

## Live Application

**Frontend:** [Open WealthOps](https://gentle-moss-0104a651e.7.azurestaticapps.net)

**Backend API:** [View Incident API](https://wealthops-api-eqb4h0bva9fue3d5.canadacentral-01.azurewebsites.net/api/incidents)

---

## Features

### Incident Management

The incident dashboard provides a centralized view of operational technology incidents.

Users can:

- View active operational incidents
- Inspect incident severity and current status
- Identify the affected service
- View the assigned support team
- Review incident descriptions and timestamps
- Select individual incidents for detailed investigation

Incident information is retrieved from the deployed Spring Boot backend through REST API requests rather than being stored directly in the frontend.

### Operations Dashboard

The interface is designed around technology operations workflows and provides visibility into areas such as:

- Active incidents
- Service health
- Operational alerts
- Batch processing
- Access reviews
- Technology support workflows

### Batch Job Monitoring

WealthOps models monitoring of scheduled operational processes and batch workloads, allowing technology teams to identify processing failures and operational exceptions.

### Access Review

The platform includes an access-review workflow representing how organizations can review user access and operational permissions as part of governance and security processes.

---

## Architecture

```
                         GitHub
                           |
                           |
                    GitHub Actions
                     CI/CD Pipelines
                      /           \
                     /             \
                    v               v
          Azure Static Web Apps   Azure App Service
                    |               |
                    |               |
              Angular Frontend   Spring Boot API
                    |               ^
                    |               |
                    +---- HTTPS ----+
                       REST API
```

### Request Flow

```
User
  |
  v
Angular Application
  |
  | HTTPS REST Request
  v
Azure App Service
  |
  v
Spring Boot REST API
  |
  v
Incident Data
  |
  v
JSON Response
  |
  v
Angular Dashboard
```

---

## Tech Stack

### Frontend

- Angular
- TypeScript
- HTML
- SCSS
- Angular HttpClient

### Backend

- Java
- Spring Boot
- REST APIs
- Maven

### Cloud

- Microsoft Azure
- Azure Static Web Apps
- Azure App Service

### DevOps

- Git
- GitHub
- GitHub Actions
- CI/CD
- Automated cloud deployment

---

## REST API

The Angular frontend communicates with the deployed Spring Boot backend through REST endpoints.

### Get Incidents

```http
GET /api/incidents
```

Example response:

```json
[
  {
    "id": "INC-10024",
    "title": "Pricing Data Feed Failure",
    "service": "Pricing Service",
    "severity": "High",
    "status": "In Progress",
    "assignedTo": "Market Data Support",
    "createdAt": "10:32 AM",
    "description": "Scheduled pricing import failed after repeated upstream connection timeouts."
  }
]
```

The production API is hosted using Azure App Service.

---

## CI/CD

WealthOps uses **GitHub Actions** to automate cloud deployments.

### Frontend Pipeline

Changes pushed to the frontend trigger an automated workflow that:

1. Checks out the repository
2. Installs Node.js dependencies
3. Builds the Angular application
4. Produces the production bundle
5. Deploys the application to Azure Static Web Apps

### Backend Pipeline

Backend changes are automatically processed through a separate deployment workflow that:

1. Checks out the backend source
2. Configures the Java environment
3. Builds the application with Maven
4. Generates the Spring Boot JAR
5. Deploys the application to Azure App Service

This allows application updates to move from GitHub to the deployed Azure environment through automated CI/CD workflows.

---

## Project Structure

```text
WealthOps/
│
├── src/
│   └── app/
│       ├── pages/
│       │   ├── dashboard/
│       │   ├── incidents/
│       │   ├── batch-jobs/
│       │   └── access-review/
│       │
│       └── ...
│
├── .github/
│   └── workflows/
│
├── angular.json
├── package.json
└── README.md
```

The repository also contains the backend implementation used by the deployed Spring Boot API.

---

## Running the Frontend Locally

### 1. Clone the repository

```bash
git clone https://github.com/jasnoorrr/WealthOps.git
```

### 2. Navigate to the frontend

```bash
cd WealthOps/wealthops-frontend
```

> Depending on how the repository is cloned or organized locally, the Angular project may already be the working directory.

### 3. Install dependencies

```bash
npm install
```

### 4. Start the Angular development server

```bash
npm start
```

or:

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

---

## Running the Backend Locally

Switch to the backend branch:

```bash
git checkout backend
```

Then run:

```bash
./mvnw spring-boot:run
```

On Windows:

```bash
mvnw.cmd spring-boot:run
```

The API can then be tested through its configured local server.

---

## Deployment

### Frontend

The Angular application is deployed using:

**Azure Static Web Apps**

### Backend

The Spring Boot REST API is deployed using:

**Azure App Service — Linux / Java**

### Continuous Deployment

Both application layers use:

**GitHub Actions**

to automate build and deployment workflows.

---

## Engineering Challenges

Building WealthOps involved solving several deployment and integration challenges, including:

- Connecting a production Angular application to a cloud-hosted Spring Boot API
- Configuring Azure App Service for a Java backend
- Deploying an Angular SPA through Azure Static Web Apps
- Building separate CI/CD workflows for frontend and backend
- Resolving Node.js and Angular build-environment compatibility issues
- Handling strict TypeScript template type checking during production builds
- Configuring frontend-to-backend REST communication across separate Azure services

---

## Future Improvements

Planned improvements include:

- Persistent database-backed incident storage
- Incident creation and update workflows
- Authentication and role-based authorization
- Operational analytics and service-health metrics
- Automated incident prioritization
- Search and filtering
- Improved logging and observability
- Expanded automated testing
- Production environment configuration
- AI-assisted incident summarization and root-cause analysis

---

## Screenshots

### Operations Dashboard
<img width="944" height="500" alt="image" src="https://github.com/user-attachments/assets/7efd8115-3092-498a-a591-20a6bf5e4ec7" />

### Incident Management
<img width="944" height="498" alt="image" src="https://github.com/user-attachments/assets/411aa94f-c4a5-4556-a602-770ac98f8ad6" />


### Batch Monitoring
<img width="950" height="499" alt="image" src="https://github.com/user-attachments/assets/fed037c5-baee-4ce8-b16a-7631b0a09bae" />


### Access Review
<img width="941" height="499" alt="image" src="https://github.com/user-attachments/assets/deafd57f-8629-4c37-b1a7-97ab518f8a36" />


---

## What This Project Demonstrates

WealthOps demonstrates practical experience with:

- Full-stack application development
- REST API design and integration
- Angular frontend development
- Java and Spring Boot backend development
- Cloud application deployment
- Microsoft Azure
- GitHub Actions
- CI/CD pipelines
- Production build troubleshooting
- Frontend/backend integration
- Technology operations concepts

---

## Author

**Jasnoor K. Batra**

Computer Science Student  
University of Northern British Columbia

GitHub: [jasnoorrr](https://github.com/jasnoorrr)

---

## Disclaimer

WealthOps is an independent educational and portfolio project. Any financial-services terminology, incidents, services, teams, users, or operational scenarios shown in the application are fictional and are included solely to demonstrate software engineering and technology-operations concepts.
