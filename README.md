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

## 6. Mock Interface Data

The dashboard MVP uses fictional mock data stored in a local JSON file. This data is used to simulate interface monitoring records without connecting the application to any real employer, client or production systems.

Using mock data is an important design decision for this project. It allows the MVP to demonstrate dashboard functionality, filtering, searching and status display while avoiding confidentiality, security and data protection risks.

### 6.1 Mock Data Location

The mock data is stored in:

```text
src/data/mockInterfaces.json
```

### 6.2 Data Fields

Each mock interface record contains the following fields:

| Field | Purpose |
|---|---|
| id | Unique fictional interface identifier |
| name | Fictional interface name |
| type | Interface type, such as REST, SOAP, FILE or IDoc |
| status | Current interface health status |
| lastRun | Fictional last run timestamp |
| owner | Fictional support owner or team |
| environment | Mock environment label |
| errorMessage | Error description for warning or failed records |
| suggestedAction | Suggested support action |

### 6.3 Status Values

The MVP uses three status values:

| Status | Meaning |
|---|---|
| Healthy | The interface is running normally |
| Warning | The interface requires attention but has not fully failed |
| Failed | The interface has failed and requires investigation |

### 6.4 Data Safety

No real employer, client or production information is used in the mock dataset. The interface names, errors, timestamps, owners and environments are fictional and created only for the purpose of this assessment project.

This keeps the MVP suitable for public demonstration and avoids exposing confidential operational information.

## 7. Status Summary Logic and TDD

This stage introduced the first tested logic for the Integration Health Dashboard. The purpose of the logic is to calculate a summary of interface health statuses from the mock interface dataset.

The status summary will later be used by the dashboard cards to show the total number of interfaces and the number of healthy, warning and failed records.

### 7.1 TDD Approach

A Test Driven Development approach was used for the status summary logic. The expected behaviour was defined in tests before finalising the implementation.

The tests cover the following scenarios:

| Test Scenario | Expected Result |
|---|---|
| Empty interface list | Returns zero for total, healthy, warning and failed |
| Mixed interface statuses | Correctly counts Healthy, Warning and Failed records |
| Unknown status value | Includes the item in total but does not add it to known status counts |

### 7.2 Utility Function

The status summary logic is stored in:

```text
src/utils/interfaceUtils.js
```

The test file is stored in:

```text
src/tests/interfaceUtils.test.js
```

### 7.3 Running the Tests

The tests can be run locally using:

```bash
npm test
```

### 7.4 TDD Result

The initial test run failed because the utility function had not yet been implemented. After creating the `getStatusSummary` function, the tests passed successfully.

This demonstrates a small but clear use of TDD within the MVP. The logic is tested separately from the user interface, which makes it easier to maintain and reuse in later dashboard components.

### 7.5 Test Evidence

The screenshots below show the TDD process used for the status summary logic. The first screenshot shows the test failing before the implementation was completed. The second screenshot shows the same test suite passing after the `getStatusSummary` function was implemented.

#### Failed Test Run

![Failed status summary test](docs/images/status-summary-test-failed.png)

#### Passed Test Run

![Passed status summary test](docs/images/status-summary-test-passed.png)

## 8. Dashboard Summary Cards

This stage introduced the first visible dashboard feature in the React MVP. The application now imports the fictional mock interface data and uses the `getStatusSummary` utility function to calculate the number of total, healthy, warning and failed interfaces.

The purpose of the summary cards is to give the support user a quick overview of the current interface health position before they review the detailed interface list.

### 8.1 Implementation

A reusable `SummaryCard` component was created and stored in:

```text
src/components/SummaryCard.jsx
```

The dashboard imports mock interface records from:

```text
src/data/mockInterfaces.json
```

The status counts are calculated using:

```text
src/utils/interfaceUtils.js
```

### 8.2 Summary Cards

The dashboard displays four summary cards:

| Card | Purpose |
|---|---|
| Total Interfaces | Shows the total number of mock interface records |
| Healthy | Shows interfaces currently running normally |
| Warning | Shows interfaces that require attention |
| Failed | Shows interfaces that have failed and require investigation |

### 8.3 UI Evidence

The screenshot below shows the dashboard summary cards implemented in the React MVP.

![Dashboard summary cards](docs/images/dashboard-summary-cards.png)

### 8.4 Design Decision

The summary cards are placed at the top of the dashboard because they provide the fastest way for the user to understand the overall monitoring position. This matches the UX prototype and supports the main user goal of quickly identifying whether there are failed or warning interfaces.

## 9. Interface Table

This stage added the main interface table to the React MVP. The table displays the fictional interface monitoring records stored in the local mock JSON file.

The purpose of the table is to give the support user a more detailed view of the records behind the dashboard summary cards.

### 9.1 Implementation

A reusable `InterfaceTable` component was created and stored in:

```text
src/components/InterfaceTable.jsx
```

The component receives the mock interface records as a prop and renders them in a table.

The table displays the following fields:

| Field | Purpose |
|---|---|
| Interface Name | Shows the fictional interface name and interface ID |
| Type | Shows the interface type, such as REST, SOAP, FILE or IDoc |
| Status | Shows the current health status using a visual badge |
| Last Run | Shows the fictional last run timestamp |
| Owner | Shows the fictional support owner or team |

### 9.2 UI Evidence

The screenshot below shows the implemented interface table in the React MVP.

![Interface table](docs/images/interface-table.png)

### 9.3 Design Decision

The interface table is placed below the summary cards because the cards provide a quick overview, while the table provides the detailed records needed for investigation.

Status values are displayed as visual badges to help the user quickly identify healthy, warning and failed records. This supports the main user goal of identifying problem interfaces quickly.

## 10. Search Functionality and Tests

This stage added search functionality to the Integration Health Dashboard MVP. The user can now search fictional interface records by interface name, and the interface table updates based on the search term.

The search feature supports the main user goal because a support user may need to find a specific interface quickly during daily checks or issue investigation.

### 10.1 TDD Approach

The search logic was developed with automated tests. The tests define the expected behaviour before the search feature is used in the user interface.

The search tests cover the following scenarios:

| Test Scenario | Expected Result |
|---|---|
| Empty search term | Returns all interface records |
| Matching search term | Returns matching interface records |
| Lowercase search term | Search is case-insensitive |
| No matching search term | Returns an empty list |

### 10.2 Implementation

The search logic is stored in:

```text
src/utils/interfaceUtils.js
```

The test file is stored in:

```text
src/tests/interfaceUtils.test.js
```

The dashboard uses a controlled React search input in:

```text
src/App.jsx
```

The search function filters the mock interface records by interface name. If no records match the search term, the MVP displays an empty state message and a clear search button.

### 10.3 Test Evidence

The screenshots below show the search logic test before and after implementation.

#### Failed Search Test

![Failed search test](docs/images/search-test-failed.png)

#### Passed Search Test

![Passed search test](docs/images/search-test-passed.png)

### 10.4 UI Evidence

The screenshot below shows the search input working in the React MVP.

![Search functionality](docs/images/search-functionality.png)

### 10.5 Design Decision

The search input is placed above the interface table because it controls which records are displayed. The search is case-insensitive to make the feature easier to use. An empty state was added so that the user understands why no records are displayed when the search term does not match any interface.

## 11. Status Filtering and Tests

This stage added status filtering to the Integration Health Dashboard MVP. The user can now filter the fictional interface records by health status, including Healthy, Warning and Failed. The user can also return to the full list by selecting All statuses.

The status filter supports the main user goal because support users often need to focus quickly on failed or warning interfaces during daily checks or incident investigation.

### 11.1 TDD Approach

The filtering logic was developed with automated tests. The tests define the expected behaviour for filtering records by status before the filter is used in the user interface.

The filtering tests cover the following scenarios:

| Test Scenario | Expected Result |
|---|---|
| All selected | Returns all interface records |
| Healthy selected | Returns only healthy records |
| Warning selected | Returns only warning records |
| Failed selected | Returns only failed records |
| Unknown status selected | Returns an empty list |

### 11.2 Implementation

The filter logic is stored in:

```text
src/utils/interfaceUtils.js
```

The test file is stored in:

```text
src/tests/interfaceUtils.test.js
```

The dashboard uses a controlled React select field in:

```text
src/App.jsx
```

The search and status filter work together. The application first applies the search term and then applies the selected status filter to the search results.

### 11.3 Test Evidence

The screenshots below show the filter logic test before and after implementation.

#### Failed Filter Test

![Failed status filter test](docs/images/status-filter-test-failed.png)

#### Passed Filter Test

![Passed status filter test](docs/images/status-filter-test-passed.png)

### 11.4 UI Evidence

The screenshot below shows the status filter working in the React MVP.

![Status filtering](docs/images/status-filtering.png)

### 11.5 Design Decision

The status filter is placed next to the search input because both controls are used to reduce the table results. This layout makes the filtering workflow simple and visible to the user.

The filter includes an All statuses option so the user can easily return to the full dataset without reloading the page. The empty state also uses a clear filters button to help the user recover when no results match the selected search and filter combination.

## 12. Interface Details Panel

This stage added an interface details panel to the React MVP. The user can now select a fictional interface record from the table and view more detailed operational information about that interface.

The details panel supports the main user workflow because a support user often needs to move from a high-level monitoring view into more specific information about a failed or warning interface.

### 12.1 Implementation

A reusable `InterfaceDetails` component was created and stored in:

```text
src/components/InterfaceDetails.jsx
```

The `InterfaceTable` component was updated to include a `View Details` action for each row. When the user selects a row, the selected interface record is stored in React state inside:

```text
src/App.jsx
```

The details panel displays the following information:

| Field | Purpose |
|---|---|
| Interface name | Shows the selected fictional interface name |
| Interface ID | Shows the selected fictional interface identifier |
| Type | Shows the interface type |
| Status | Shows the current health status |
| Last Run | Shows the fictional last run timestamp |
| Owner | Shows the fictional support owner or team |
| Environment | Shows the mock environment label |
| Error Message | Shows the fictional error message |
| Suggested Action | Shows the suggested operational action |

### 12.2 UI Evidence

The screenshot below shows the details panel after selecting an interface from the table.

![Interface details panel](docs/images/interface-details-panel.png)

### 12.3 Design Decision

The details panel is placed above the table so that the selected interface information is immediately visible after the user clicks `View Details`. This keeps the interaction simple and avoids navigating away from the dashboard.

The panel also includes an empty state before selection. This helps the user understand what the panel is for and reduces confusion when no interface has been selected yet.

## 13. Accessibility and Usability Improvements

This stage focused on improving the accessibility and usability of the Integration Health Dashboard MVP. The aim was to make the interface clearer, easier to use and more suitable for basic keyboard and accessibility checks.

### 13.1 Accessibility Improvements

The following accessibility improvements were made:

| Improvement | Purpose |
|---|---|
| Clear labels for controls | Search and status filter controls have visible labels |
| Accessible table caption | The interface table includes a caption for screen reader context |
| Button aria-labels | Table action buttons provide clearer context for selected records |
| Visible focus styles | Keyboard users can see which control is currently focused |
| Results count | The user can see how many records are displayed after search and filtering |
| Live region | The results count updates using `aria-live` |

### 13.2 Usability Improvements

The following usability improvements were made:

| Improvement | Purpose |
|---|---|
| Results count | Helps the user understand the effect of search and filtering |
| Clear control layout | Search and status filter are grouped together above the table |
| Empty state message | Helps the user recover when no records match the current criteria |
| Clear button text | Actions such as View Details and Clear Filters are easy to understand |

### 13.3 Manual Checks

The MVP was checked manually for the following:

| Check | Result |
|---|---|
| Search input has a visible label | Passed |
| Status filter has a visible label | Passed |
| Buttons have clear action text | Passed |
| Keyboard tab navigation works across controls | Passed |
| Focus outline is visible | Passed |
| Empty state is understandable | Passed |
| Table has a caption | Passed |

### 13.4 UI Evidence

The screenshot below shows the updated dashboard interface with the results count and improved controls.

![Accessibility and usability improvements](docs/images/accessibility-usability-improvements.png)

### 13.5 Lighthouse Evidence

A basic Lighthouse accessibility check was completed using Chrome DevTools.

![Lighthouse accessibility check](docs/images/lighthouse-accessibility-check.png)

### 13.6 Reflection

The improvements made in this stage are small but important. The dashboard is still a prototype, but the changes make it easier to use and more understandable. Adding labels, focus styles and a results count also supports users who navigate with a keyboard or need clearer feedback from the interface.

This stage also helped confirm that accessibility should not be treated as something added only at the end. Even simple MVP features need to be designed and tested with usability and accessibility in mind.

## 14. CI Pipeline with GitHub Actions

This stage added a Continuous Integration pipeline using GitHub Actions. The purpose of the pipeline is to automatically check the quality of the project whenever code is pushed or a pull request is opened against the `main` branch.

The CI pipeline supports the project workflow because it helps confirm that automated tests pass and that the React application can be built successfully before changes are merged.

### 14.1 Workflow Location

The GitHub Actions workflow is stored in:

```text
.github/workflows/ci.yml
```

### 14.2 Pipeline Triggers

The workflow runs on:

| Trigger | Purpose |
|---|---|
| Push to main | Checks changes added directly to the main branch |
| Pull request to main | Checks changes before they are merged |

### 14.3 Pipeline Steps

The CI pipeline performs the following steps:

| Step | Purpose |
|---|---|
| Checkout repository | Downloads the repository content into the runner |
| Set up Node.js | Prepares the Node.js environment |
| Install dependencies | Installs dependencies using `npm ci` |
| Run automated tests | Runs the Vitest test suite |
| Run production build | Confirms the Vite application can be built |

### 14.4 CI Command Summary

The workflow runs the following commands:

```bash
npm ci
npm test -- --run
npm run build
```

### 14.5 CI Evidence

The screenshot below shows the GitHub Actions CI workflow running successfully.

![GitHub Actions CI pipeline](docs/images/github-actions-ci-pipeline.png)

### 14.6 Design Decision

GitHub Actions was selected because the project is already managed in GitHub using issues, branches and pull requests. Keeping the CI pipeline in the same platform makes the workflow easier to manage and provides visible evidence that tests and builds are checked automatically.

The pipeline is intentionally simple because this MVP is a small front-end prototype. However, it still demonstrates an important software engineering practice: changes should be checked automatically before being accepted into the main branch.

## 15. Production Deployment

This stage deployed the Integration Health Dashboard MVP to a production environment using GitHub Pages.

The purpose of the deployment is to make the MVP accessible through a public URL and to demonstrate that the project can be built and released outside the local development environment.

### 15.1 Deployment Platform

The MVP was deployed using GitHub Pages.

GitHub Pages was selected because the project is already hosted in GitHub and the MVP is a static front-end React application built with Vite.

### 15.2 Deployment Configuration

The deployment uses the following configuration:

| Item | Configuration |
|---|---|
| Build tool | Vite |
| Deployment package | gh-pages |
| Build output folder | dist |
| Deployment branch | gh-pages |
| Production environment | GitHub Pages |

### 15.3 Deployment Scripts

The following scripts were added to `package.json`:

```bash
npm run build
npm run deploy
```

The `predeploy` script runs the production build before deployment. The `deploy` script publishes the `dist` folder to GitHub Pages.

### 15.4 Production URL

Production deployment link:

```text
https://orzel83.github.io/integration-health-dashboard/
```

### 15.5 Deployment Evidence

The screenshot below shows the MVP running in the production environment.

![Production deployment](docs/images/production-deployment.png)

### 15.6 Deployment Decision

GitHub Pages was suitable for this MVP because the application does not require a backend, database or authentication. The deployment is intentionally simple, but it still demonstrates that the application can be built and released to a production environment.

This also supports the assessment requirement to include a CI/CD pipeline with at least one production environment.

## 16. User Documentation

This section explains how a user can access and use the Integration Health Dashboard MVP. The dashboard is designed for a support user who needs to review fictional interface health records quickly and identify records that may require attention.

The MVP uses mock data only. It does not connect to any real employer, client or production systems.

### 16.1 Accessing the Dashboard

The dashboard can be accessed through the production deployment link:

```text
https://orzel83.github.io/integration-health-dashboard/
```

The application can also be run locally by a developer, but normal users should use the deployed version.

### 16.2 Dashboard Overview

When the user opens the dashboard, the main page shows:

| Area | Purpose |
|---|---|
| Summary cards | Gives a quick overview of interface health |
| Search input | Allows the user to search for an interface by name |
| Status filter | Allows the user to filter records by status |
| Results count | Shows how many records are currently displayed |
| Details panel | Shows more information about a selected interface |
| Interface table | Lists the fictional interface monitoring records |

### 16.3 Summary Cards

The summary cards are displayed at the top of the dashboard.

| Card | Meaning |
|---|---|
| Total Interfaces | Total number of fictional interface records |
| Healthy | Interfaces currently shown as working normally |
| Warning | Interfaces that may require attention |
| Failed | Interfaces that have failed and require investigation |

The summary cards help the user understand the overall interface health position before reviewing the detailed table.

### 16.4 Searching for an Interface

The user can search for an interface by typing into the `Search interface` field.

Example:

```text
Payment
```

The table will update and show only interface records where the name matches the search term.

The search is case-insensitive, so searching for:

```text
finance
```

will still find:

```text
Finance Posting Interface
```

### 16.5 Filtering by Status

The user can use the `Status filter` dropdown to filter records by health status.

Available options are:

| Option | Result |
|---|---|
| All statuses | Shows all records |
| Healthy | Shows only healthy records |
| Warning | Shows only warning records |
| Failed | Shows only failed records |

The status filter can be used together with the search field.

### 16.6 Viewing Interface Details

Each row in the interface table includes a `View Details` button.

When the user clicks `View Details`, the details panel updates and shows more information about the selected interface, including:

| Field | Description |
|---|---|
| Interface name | Name of the selected fictional interface |
| Interface ID | Fictional identifier |
| Type | Interface type, such as REST, SOAP, FILE or IDoc |
| Status | Current fictional health status |
| Last Run | Fictional last run timestamp |
| Owner | Fictional support owner |
| Environment | Mock environment label |
| Error Message | Fictional error message |
| Suggested Action | Suggested support action |

The user can clear the selected interface by clicking `Clear Selection`.

### 16.7 Empty State

If the search and filter combination does not match any records, the dashboard displays an empty state message.

The empty state explains that no records were found and gives the user a way to clear the selected criteria.

The user can click:

```text
Clear Filters
```

This resets the search field and status filter.

### 16.8 Example User Workflow

A typical user workflow is:

1. Open the dashboard.
2. Review the summary cards.
3. Use the status filter to show only failed records.
4. Use search to find a specific interface if needed.
5. Click `View Details` on a record.
6. Review the error message and suggested action.
7. Clear the selection or filters when finished.

### 16.9 User Data and Safety

The dashboard uses fictional data only. It does not show real system logs, endpoint URLs, production records, client information or employer data.

This makes the MVP safe for demonstration and assessment purposes.

## 17. Technical Documentation

This section explains how the Integration Health Dashboard MVP is structured, installed, tested, built and deployed. It is intended for a developer or technical reviewer who wants to understand how the project works.

The application is a front-end React MVP built with Vite. It uses fictional mock data only and does not connect to any real employer, client or production systems.

### 17.1 Technology Stack

| Technology | Purpose |
|---|---|
| React | Builds the user interface using reusable components |
| Vite | Provides the development server and production build process |
| JavaScript | Implements application logic |
| CSS | Styles the dashboard interface |
| JSON | Stores fictional mock interface records |
| Vitest | Runs automated tests for utility logic |
| GitHub | Hosts source code, issues, pull requests and project planning |
| GitHub Actions | Runs the CI pipeline |
| GitHub Pages | Hosts the production deployment |

### 17.2 Project Structure

The main project structure is:

```text
integration-health-dashboard/
  .github/
    workflows/
      ci.yml
  docs/
    images/
  src/
    components/
      InterfaceDetails.jsx
      InterfaceTable.jsx
      SummaryCard.jsx
    data/
      mockInterfaces.json
    tests/
      interfaceUtils.test.js
    utils/
      interfaceUtils.js
    App.css
    App.jsx
    index.css
    main.jsx
  package.json
  vite.config.js
  README.md
```

### 17.3 Key Source Files

| File | Purpose |
|---|---|
| `src/App.jsx` | Main application component and state management |
| `src/App.css` | Main styling for the dashboard |
| `src/components/SummaryCard.jsx` | Reusable component for dashboard summary cards |
| `src/components/InterfaceTable.jsx` | Displays the fictional interface records in a table |
| `src/components/InterfaceDetails.jsx` | Displays details for the selected interface |
| `src/data/mockInterfaces.json` | Stores fictional mock interface monitoring data |
| `src/utils/interfaceUtils.js` | Contains utility logic for summary counts, search and status filtering |
| `src/tests/interfaceUtils.test.js` | Contains automated tests for utility functions |
| `.github/workflows/ci.yml` | Defines the GitHub Actions CI pipeline |
| `vite.config.js` | Contains Vite configuration, including GitHub Pages base path |

### 17.4 Local Setup

To run the project locally, clone the repository and install dependencies.

```bash
git clone https://github.com/Orzel83/integration-health-dashboard
cd integration-health-dashboard
npm install
```

Replace `https://github.com/Orzel83/integration-health-dashboard` with the actual GitHub repository URL.

### 17.5 Running the Development Server

Start the local development server with:

```bash
npm run dev
```

Vite will provide a local URL, usually:

```text
http://localhost:5173/
```

Open this URL in a browser to view the dashboard locally.

### 17.6 Running Automated Tests

The project uses Vitest for automated testing.

To run tests locally:

```bash
npm test
```

To run tests once without watch mode, use:

```bash
npm test -- --run
```

The automated tests currently cover:

| Function | Test Coverage |
|---|---|
| `getStatusSummary` | Empty list, mixed statuses, unknown statuses |
| `searchInterfaces` | Empty search, matching search, case-insensitive search, no match |
| `filterInterfacesByStatus` | All, Healthy, Warning, Failed and unknown status |

### 17.7 Production Build

To create a production build, run:

```bash
npm run build
```

This creates a `dist` folder containing the built static application.

The `dist` folder is not intended to be edited manually.

### 17.8 Previewing the Production Build

After building the project, the production build can be previewed locally with:

```bash
npm run preview
```

This helps confirm that the production build works before deployment.

### 17.9 CI Pipeline

The project uses GitHub Actions for continuous integration.

The workflow file is stored in:

```text
.github/workflows/ci.yml
```

The CI pipeline runs automatically when:

| Trigger | Description |
|---|---|
| Push to `main` | Checks changes added to the main branch |
| Pull request to `main` | Checks changes before they are merged |

The CI pipeline performs:

```bash
npm ci
npm test -- --run
npm run build
```

This means the project dependencies are installed cleanly, automated tests are run, and the production build is checked.

### 17.10 Deployment

The project is deployed to GitHub Pages.

The deployment uses:

| Item | Value |
|---|---|
| Deployment package | `gh-pages` |
| Build output folder | `dist` |
| Deployment branch | `gh-pages` |
| Production platform | GitHub Pages |

Deployment can be run with:

```bash
npm run deploy
```

The `predeploy` script runs the production build before deployment. The `deploy` script publishes the `dist` folder to the `gh-pages` branch.

### 17.11 Configuration Notes

The Vite configuration file includes a `base` value for GitHub Pages deployment.

Example:

```javascript
base: '/integration-health-dashboard/'
```

This value must match the repository name. If the repository name changes, the base path must also be updated.

### 17.12 Data and Security Notes

The MVP uses fictional mock data only.

The project does not include:

| Not Included | Reason |
|---|---|
| Real production logs | Avoids confidentiality risk |
| Real endpoint URLs | Avoids exposing system details |
| Real client data | Avoids data protection issues |
| Authentication | Out of scope for the MVP |
| Backend services | Out of scope for the MVP |
| Live monitoring integration | Out of scope for the MVP |

This design keeps the MVP safe for demonstration, assessment and public repository use.

### 17.13 Known Technical Limitations

The MVP has the following technical limitations:

| Limitation | Explanation |
|---|---|
| Static mock data | Data does not update in real time |
| No backend | The application cannot retrieve live monitoring data |
| No user authentication | All users see the same prototype view |
| No persistent user actions | Selected interface and filters reset after page refresh |
| Limited test coverage | Tests focus on utility logic rather than full UI rendering |

These limitations are acceptable for the MVP because the purpose is to demonstrate the software engineering process, UI prototype, testing, CI/CD and documentation.