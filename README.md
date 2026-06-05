# Integration Health Dashboard

## 1. Project Definition and Product Proposal

### 1.1 Project Name
Integration Health Dashboard

### 1.2 Project Idea
This project is a small web-based dashboard prototype designed to help integration support users monitor the health of software interfaces using mock data.

### 1.3 Problem Statement
Integration support teams often need to monitor multiple APIs, file transfers and system interfaces. When issues occur, it can be time-consuming to identify which interface is failing, what the current status is, and what action may be required. This project proposes a simple dashboard that presents interface health information in one place.

### 1.4 Target Users
The primary users are integration support engineers or live service engineers who need a quick overview of interface health during daily checks or incident investigation.

### 1.5 Proposed Solution
The proposed solution is an MVP dashboard that displays interface status information using mock data. The dashboard will include summary cards, an interface table, search, status filtering and a details panel for selected interfaces.

### 1.6 MVP Scope
The MVP will include:
- summary cards showing total, healthy, warning and failed interfaces
- a table of interfaces
- search by interface name
- filtering by status
- a details panel with an error message and suggested action
- automated tests for core logic
- CI/CD pipeline and production deployment

### 1.7 Out of Scope
The MVP will not connect to any real employer, client or production systems. It will not use live logs, real interface names, real endpoint URLs or confidential data. All data will be fictional and stored as mock JSON data.

### 1.8 Success Criteria
The MVP will be considered successful if a user can:
- quickly identify failed or warning interfaces
- search for a specific interface
- filter interfaces by status
- open details for an interface
- understand the suggested action for a problem
- access the deployed prototype through a production environment

### 1.9 Project Status
This document represents the initial project definition and will be updated as the MVP is designed, implemented, tested and deployed.

### 2. Requirements
The requirements for the Integration Health Dashboard were defined from the perspective of an integration support user who needs a quick and clear view of interface health. The MVP focuses on presenting mock monitoring data in a simple dashboard, allowing the user to identify failed or warning interfaces, search for a specific interface and view basic details about a selected item.

The requirements are intentionally limited to the scope of an MVP. This helps keep the project realistic, testable and suitable for delivery within the assessment timeframe.
### 2.1 Functional Requirements

| ID | Requirement | Description | Priority |
|---|---|---|---|
| FR1 | View dashboard summary | The user should be able to view summary cards showing the total number of interfaces and the number of healthy, warning and failed interfaces. | Must have |
| FR2 | View interface list | The user should be able to view a table containing mock interface records. | Must have |
| FR3 | Search interfaces | The user should be able to search for an interface by name. | Must have |
| FR4 | Filter by status | The user should be able to filter interfaces by status, such as Healthy, Warning or Failed. | Must have |
| FR5 | View interface details | The user should be able to select an interface and view additional details, including status, last run time, error message and suggested action. | Must have |
| FR6 | Display empty state | The application should display a clear message when no interfaces match the current search or filter. | Should have |
| FR7 | Reset filters | The user should be able to clear the current search and filter criteria. | Should have |

### 2.2 Non-Functional Requirements

| ID | Requirement | Description | Priority |
|---|---|---|---|
| NFR1 | Usability | The interface should be simple, readable and suitable for a support user who needs to identify issues quickly. | Must have |
| NFR2 | Accessibility | The UI should use clear labels, readable text, logical heading structure and keyboard-friendly controls. | Must have |
| NFR3 | Security and confidentiality | The MVP must use fictional mock data only and must not connect to real employer, client or production systems. | Must have |
| NFR4 | Maintainability | The code should be organised into reusable components and utility functions. | Must have |
| NFR5 | Testability | Core logic, including status counting, searching and filtering, should be covered by automated tests. | Must have |
| NFR6 | Deployability | The application should be deployable to a production environment using a CI/CD pipeline. | Must have |
| NFR7 | Performance | The MVP should load quickly when using the small mock dataset included in the project. | Should have |

### 2.3 Assumptions

The following assumptions apply to this MVP:

- The application will use mock JSON data only.
- The dashboard is designed for demonstration and learning purposes.
- The primary user is an integration support engineer or similar technical support user.
- The MVP will run as a web application in a browser.
- The first version will not require user authentication.
- The first version will not include a live backend or database.
- The project will focus on front-end functionality, testing, documentation and CI/CD.

### 2.4 Constraints

The project has the following constraints:

- No real employer, client or production data will be used.
- No real interface names, endpoint URLs, logs or incident records will be included.
- The MVP must remain small enough to complete within the assessment timeframe.
- The application must include a user interface.
- The project must be documented through the README file.
- The project must use GitHub issues, branches and pull requests to show incremental development.
- The project must include automated testing and a CI/CD pipeline.

### 2.5 Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Scope becomes too large | The MVP may not be completed on time. | Keep the first version limited to dashboard summary, table, search, filter and details panel. |
| Use of sensitive information | The project could create confidentiality or security concerns. | Use fictional mock data only and avoid real system names, logs, endpoints or client data. |
| Testing is added too late | TDD requirement may not be demonstrated clearly. | Write tests for utility functions before implementing or finalising the logic. |
| CI/CD setup takes longer than expected | Deployment may be delayed. | Use a simple GitHub Actions workflow and deploy to GitHub Pages or Netlify. |
| UI becomes difficult to use | The dashboard may not meet user needs. | Use a simple Figma prototype and perform basic usability and accessibility checks. |

### 2.6 MVP Acceptance Criteria

The MVP will be accepted as complete when:

- The user can view a dashboard summary of interface health.
- The user can view a table of mock interface records.
- The user can search for an interface by name.
- The user can filter interfaces by status.
- The user can select an interface and view details.
- The application uses fictional mock data only.
- Core logic is covered by automated tests.
- The application is deployed to a production environment.
- The README includes user and technical documentation.

## 3. Project Planning

The project is planned using a Kanban workflow in GitHub Projects. This approach was selected because the MVP is small, iterative and suitable for incremental delivery through issues, branches and pull requests.

The Kanban board is used to visualise the status of each task and to support a controlled development process. Each major feature or documentation activity is represented as a GitHub issue. Work is completed on separate branches and merged into the main branch using pull requests.

### 3.1 Kanban Workflow

| Column | Purpose |
|---|---|
| Backlog | Tasks identified for the MVP but not yet ready to start |
| To Do | Tasks ready to be started |
| In Progress | Tasks currently being worked on |
| In Review | Tasks waiting for review or pull request merge |
| Done | Completed tasks |

### 3.2 Milestone

The main milestone for this project is `MVP v1.0`.

This milestone represents the first working version of the Integration Health Dashboard. It includes the core dashboard features, mock data, search, filtering, details panel, automated tests, CI/CD pipeline, production deployment and documentation.

### 3.3 Planned MVP Issues

| Issue | Purpose |
|---|---|
| Set up React Vite project structure | Create the initial front-end application structure |
| Create mock interface data | Add fictional data for dashboard development and testing |
| Implement status summary logic with tests | Use TDD to develop the logic for status counts |
| Build dashboard summary cards | Display total, healthy, warning and failed interface counts |
| Build interface table | Display the mock interface records in a readable table |
| Add search functionality with tests | Allow users to search for interfaces by name |
| Add status filtering with tests | Allow users to filter records by interface status |
| Build interface details panel | Show detailed information for a selected interface |
| Add accessibility and usability improvements | Improve readability, accessibility and basic UX quality |
| Configure CI pipeline | Run automated tests through GitHub Actions |
| Deploy MVP to production environment | Make the MVP available through a production deployment |
| Complete user and technical documentation | Complete README documentation for users and developers |

### 3.4 Development Workflow

The development workflow for the project follows these steps:

1. Create or select a GitHub issue.
2. Move the issue into `In Progress`.
3. Create a feature branch from `main`.
4. Implement the required change.
5. Commit the change with a clear message.
6. Push the branch to GitHub.
7. Open a pull request.
8. Move the issue into `In Review`.
9. Merge the pull request after checking the changes.
10. Move the issue into `Done`.

This workflow supports traceability because each feature can be linked back to an issue and pull request.

### 3.5 Planning Rationale

Kanban was selected because it supports a simple and visible flow of work. For this MVP, the aim is not to use a heavy project management method but to show that the work can be planned, prioritised and delivered incrementally. The board also helps control scope, which is important because the project must remain small enough to complete within the assessment timeframe.

## 4. UX Design and Prototype

The UX design for the Integration Health Dashboard was created before implementation to define the structure of the MVP and reduce the risk of building an unclear or overloaded interface. The prototype focuses on the main workflow of an integration support user who needs to identify interface issues quickly.

### 4.1 Target User

The target user is an integration support engineer or live service engineer. This user needs a clear view of interface health during daily checks, release support or incident investigation.

### 4.2 User Goal

The main user goal is to quickly identify which interfaces are healthy, which require attention and which have failed. The user should also be able to search for a specific interface, filter the interface list and view basic details about a selected item.

### 4.3 User Flow

The main user flow is:

1. The user opens the dashboard.
2. The user reviews the summary cards.
3. The user searches or filters the interface list.
4. The user selects an interface.
5. The user reviews the details, error message and suggested action.
6. The user returns to the dashboard.

### 4.4 Prototype Screens

The Figma prototype includes the following screens:

| Screen | Purpose |
|---|---|
| Dashboard Overview | Shows summary cards, search, status filter and interface table |
| Interface Details | Shows detailed information about a selected interface |
| Empty State | Shows a message when no records match the current search or filter |

### 4.5 UX Design Decisions

The dashboard uses summary cards at the top because support users need to understand the overall health position quickly. The interface table is placed underneath the summary because it provides the detailed records behind the summary numbers.

Search and filtering are placed above the table because they are the main controls used to reduce the number of visible records. The details screen is kept simple and focused on operational information: status, type, last run time, error message and suggested action.

The design avoids real employer or client data. All interface names and examples in the prototype are fictional.

### 4.6 Figma Prototype

Figma prototype link:

(https://www.figma.com/design/3skk9jFy2yVn7iiYblW9qp/Integration-Health-Dashboard-UX-Prototype?node-id=2-3&t=3JpahDibAjDNBErg-1)

### 4.7 Prototype Screenshots

#### Dashboard Overview

![Dashboard Overview](docs/images/dashboard-overview.png)

#### Interface Details

![Interface Details](docs/images/interface-details.png)

#### Empty State

![Empty State](docs/images/empty-state.png)

## 5. Project Setup

The MVP was set up as a React application using Vite. React was selected because it supports a component-based approach to building user interfaces, while Vite provides a fast and lightweight development environment suitable for a small front-end prototype.

This setup stage created the initial application structure and confirmed that the project can run locally before adding the main dashboard features.

### 5.1 Technology Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Front-end build tool and development server |
| CSS | Styling the MVP interface |
| GitHub | Source control, issues and pull requests |
| GitHub Projects | Kanban-based project planning |

### 5.2 Initial Project Structure

The initial project structure includes dedicated folders for components, mock data, utility logic and tests.

```text
src/
  components/
  data/
  utils/
  tests/
```

### 5.3 Running the Project Locally

To run the project locally, the user needs to install the project dependencies and start the Vite development server.

```bash
npm install
npm run dev
```

The development server runs locally using Vite. The first setup version displays a placeholder dashboard page confirming that the MVP structure has been created.

### 5.4 Setup Verification

The setup was verified by running the application locally and checking that the browser displayed the initial dashboard placeholder page.

The placeholder page includes:

- the project title
- a short description of the dashboard purpose
- a visible mock data notice
- confirmation that the MVP setup is complete

### 5.5 Setup Decision

At this stage, the project does not include live data, authentication, backend services or production integrations. This decision keeps the MVP small and avoids confidentiality or security risks.

The application will use fictional mock data only. The next stage will add mock interface records that can be used to build and test the dashboard features.