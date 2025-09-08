# ZetuBridge - Educational Apps Hub

## Overview

ZetuBridge is an educational web application that serves as a central hub for downloading and discovering educational apps, primarily focused on Kenya Medical Training College (KMTC) students. The platform currently features MED-A, an Android app designed to help medical students access past exam papers, 3D anatomy models, and educational videos.

## System Architecture

### Full-Stack Architecture
- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js with TypeScript running on Node.js
- **Styling**: Tailwind CSS with custom theming and animations
- **Component Library**: Radix UI components via shadcn/ui
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Configured for production with build scripts

### Directory Structure
```
├── client/          # React frontend application
├── server/          # Express backend application
├── shared/          # Shared TypeScript schemas and types
├── migrations/      # Database migration files
└── attached_assets/ # Static assets and requirements
```

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for lightweight client-side routing
- **State Management**: React Query for server state and local useState for component state
- **Authentication**: Custom auth hook with localStorage persistence
- **UI Components**: Comprehensive UI component library based on Radix UI
- **Responsive Design**: Mobile-first approach with bottom navigation
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **RESTful API**: Express.js with TypeScript
- **Authentication**: Email/password authentication with bcrypt password hashing
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Session Management**: In-memory storage with plans for database persistence
- **Error Handling**: Centralized error handling middleware
- **Development Tools**: Hot reloading with Vite integration

### Database Schema
```sql
users table:
- id (serial, primary key)
- name (text, not null)
- email (text, unique, not null)
- password (text, not null)
- created_at (timestamp, default now)
```

## Data Flow

1. **User Registration/Login**: Frontend sends credentials to `/api/auth/register` or `/api/auth/login`
2. **Authentication**: Backend validates credentials and returns user data (excluding password)
3. **Client Storage**: User data is stored in localStorage for persistence
4. **Protected Routes**: Auth state is checked before accessing protected content
5. **API Requests**: All API calls include proper error handling and loading states

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: UI component primitives
- **framer-motion**: Animation library
- **bcryptjs**: Password hashing
- **wouter**: Lightweight routing

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Inter and Poppins font families
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class names

### Development Tools
- **TypeScript**: Type safety across the stack
- **Vite**: Build tool and development server
- **ESBuild**: Production bundling
- **Replit Plugins**: Development environment integration

## Deployment Strategy

### Build Process
1. **Frontend Build**: `vite build` compiles React app to `dist/public`
2. **Backend Build**: `esbuild` bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations handle schema changes
4. **Environment**: Production mode serves static files and API

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment mode (development/production)
- `FIREBASE_CONFIG`: Future Firebase integration (currently unused)

### Deployment Commands
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run db:push`: Apply database schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 07, 2025. Initial setup