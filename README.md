# Ticket Management System

An Angular dashboard for creating and managing support tickets. The app includes a server status widget, traffic overview, reusable dashboard cards, and a simple ticket workflow where new tickets can be submitted, expanded, and marked as completed.

## Features

- Create support tickets with a title and request text
- View submitted tickets in a dashboard panel
- Expand tickets to read their details
- Mark open tickets as completed
- Visual open/closed ticket status indicators
- Server status widget with changing status state
- Traffic summary widget
- Reusable button, control, and dashboard item components
- Angular standalone component architecture

## Tech Stack

- Angular 18
- TypeScript
- CSS
- Angular Forms
- Angular standalone components

## Project Structure

```text
src/
  app/
    dashboard/
      dashboard-item/      Reusable dashboard card wrapper
      server-status/       Server status widget
      traffic/             Traffic widget
      tickets/             Ticket list, ticket item, and new ticket form
    header/                App header
    shared/
      button/              Reusable button component/directive
      control/             Reusable form control wrapper
    app.component.*        Root dashboard shell
  main.ts                  Application bootstrap
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/assemmohamed1677/ticket-managment-system.git
cd ticket-managment-system
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:4200/
```

## Build

```bash
npm run build
```

The production build is generated in:

```text
dist/cmp-deep-dive
```

## Tests

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

## Recent Improvements

- Added a smoke test so the test command has a valid spec file
- Blocked empty ticket submissions
- Removed debug console logging from the ticket form
- Typed the ticket completion event
- Made ticket completion safer if an ID is not found
- Replaced a broken submit icon character with an ASCII arrow

## Author

Assem Mohamed
