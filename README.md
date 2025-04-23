# Contacts Application

A React-based contacts management application built with TypeScript and Vite.

## Installation Guide

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/nimnaherath/react-contact-app
cd contacts
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
contacts/
├── eslint.config.js       # ESLint configuration
├── index.html             # Root HTML file
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── public/                # Public assets
│   └── vite.svg
└── src/                   # Source code
    ├── App.tsx            # Main application component
    ├── main.tsx           # Application entry point
    ├── assets/            # Static assets
    ├── components/        # Reusable UI components
    │   └── ContactCard.tsx
    ├── domain/            # Domain logic (Clean Architecture)
    │   └── contacts/
    │       ├── collections/      # Data collections
    │       │   └── ContactCollection.ts
    │       ├── contracts/        # Interface definitions
    │       │   └── ContactRepositoryContract.ts
    │       ├── interactors/      # Use cases
    │       │   ├── CreateContactIntercator.ts
    │       │   ├── GetAllContactIntercator.ts
    │       │   └── requests/
    │       │       └── ContactRequest.ts
    │       ├── models/           # Domain models
    │       │   └── contact.ts
    │       └── repositories/     # Data access
    │           └── ContactRepository.ts
    └── pages/             # Application pages/views
        ├── CreateContact.tsx
        └── ListContacts.tsx
```

## Architecture

This project follows Clean Architecture principles, separating the codebase into:

- **Domain Layer**: Contains business logic, entities, use cases (interactors)
- **Data Layer**: Repositories for data access
- **Presentation Layer**: React components, pages, and UI logic

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Technologies Used

- React
- TypeScript
- Vite
- Clean Architecture
