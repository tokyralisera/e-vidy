# Marketplace — Instructions Claude Code

## 1. Project Overview

This project is a web marketplace developed as a 2-week Agile MVP.

The goal is to build only the essential marketplace features:

* Public product catalogue
* User authentication
* Interactive product search and filtering
* Supabase PostgreSQL database
* Seller dashboard for managing personal products

### V1 scope

The following features are explicitly OUT OF SCOPE for V1:

* Shopping cart
* Payment
* Internal messaging
* Product reviews / ratings
* Notifications

Do not implement or suggest out-of-scope features unless explicitly requested.

The project must prioritize delivering a stable MVP within the defined scope.

---

# 2. Technology Stack

## Frontend

* React
* TypeScript
* Vite
* TailwindCSS
* DaisyUI

## Backend / Database

* Supabase
* PostgreSQL
* Supabase Auth
* PostgreSQL Row Level Security (RLS)

## Deployment

* Vercel

## Version Control

* GitHub
* Git

## Project Management

* Trello

---

# 3. Current Claude Code Tools

The project currently uses the following MCP servers:

### Context7 MCP

Purpose:

* Retrieve current documentation for libraries
* Verify APIs and configuration
* Check version-specific behavior
* Avoid relying on outdated knowledge

Use Context7 when working with:

* React
* TypeScript
* Vite
* TailwindCSS
* DaisyUI
* Supabase
* PostgreSQL
* React-related libraries
* Testing libraries

When the correct API or configuration is uncertain, prefer checking the relevant documentation before implementing.

---

### Playwright MCP

Purpose:

* Interact with the application through a real browser
* Validate important user flows
* Detect UI and navigation problems
* Verify forms and interactions
* Inspect browser behavior

Use Playwright for important end-to-end flows such as:

* Signup
* Login
* Logout
* Navigation
* Product browsing
* Product search
* Product filtering
* Product creation
* Product editing
* Product deletion
* Protected routes

Do not consider a frontend feature complete only because TypeScript compiles.

---

### Storybook MCP

Purpose:

* Inspect reusable UI components
* Understand existing component variants
* Reuse existing components instead of recreating them
* Validate component behavior and visual states

Before creating a new reusable UI component, inspect existing Storybook components when relevant.

Prefer extending or composing an existing component over creating a duplicate.

---

## 4. Current Claude Code Skill

### Frontend Design

The project uses the Frontend Design skill/plugin.

It should be used when implementing or significantly modifying UI.

The goal is to produce a coherent, intentional interface rather than generic AI-generated UI.

Follow the existing project design language and DaisyUI/Tailwind conventions.

Do not introduce unnecessary visual trends merely to make the interface look "modern".

---

# 5. Development Philosophy

Claude must behave as a development assistant working inside an existing codebase, not as a standalone code generator.

Before implementing a non-trivial feature:

1. Inspect the existing project structure.
2. Inspect relevant components.
3. Search for existing implementations.
4. Inspect Storybook when UI components are involved.
5. Check relevant documentation with Context7 when necessary.
6. Understand the existing data flow.
7. Plan the smallest appropriate change.
8. Implement the feature.
9. Validate the result.
10. Fix discovered problems.

Do not immediately rewrite or restructure existing code without a clear reason.

---

# 6. Frontend Architecture

The planned frontend architecture is:

src/
├── assets/
├── components/
│   ├── common/
│   ├── auth/
│   ├── products/
│   ├── search/
│   └── dashboard/
├── pages/
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── SignupPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── SearchResultsPage.tsx
│   ├── DashboardPage.tsx
│   └── NotFoundPage.tsx
├── context/
│   └── AuthContext.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useProducts.ts
│   └── useSearch.ts
├── lib/
│   └── supabaseClient.ts
├── services/
│   ├── authService.ts
│   ├── productService.ts
│   └── searchService.ts
├── types/
│   └── index.ts
├── routes/
│   └── AppRouter.tsx
├── App.tsx
└── main.tsx

Respect this architecture unless there is a strong technical reason to change it.

If the architecture evolves during development, prefer incremental changes rather than unnecessary restructuring.

---

# 7. Component Organization

The expected responsibilities are:

### components/common

Reusable application-wide components such as:

* Navbar
* Footer
* Loader
* Button
* EmptyState

### components/auth

Authentication-related components:

* LoginForm
* SignupForm

### components/products

Product-related components:

* ProductCard
* ProductGrid
* ProductDetail

### components/search

Search-related components:

* SearchBar
* FilterPanel

### components/dashboard

Seller dashboard components:

* ProductForm
* MyProductsTable

Do not duplicate components when an existing component can be reused.

---

# 8. React Rules

Use functional React components.

Prefer small, focused components.

Separate responsibilities between:

* UI components
* hooks
* services
* context
* pages

Avoid putting excessive business logic directly inside page components.

Avoid large components that simultaneously handle:

* API communication
* complex business logic
* state management
* validation
* data transformation
* UI rendering

Prefer extracting reusable logic into hooks or services when appropriate.

Do not create abstractions prematurely.

Do not create a custom hook for trivial logic.

---

# 9. TypeScript Rules

Use TypeScript consistently.

Avoid `any` unless there is a documented technical reason.

Prefer meaningful domain types.

The main domain types include:

* Product
* Category
* Profile

API data should have appropriate types.

Do not ignore TypeScript errors.

Do not use type assertions to hide incorrect typing.

Prefer readable and maintainable types over unnecessarily complex generic types.

---

# 10. Supabase Architecture

Supabase is used for:

* PostgreSQL database
* Authentication
* Row Level Security
* Data access

The Supabase client must be initialized through:

src/lib/supabaseClient.ts

Authentication logic belongs in the authentication service/context rather than being duplicated across components.

Expected authentication services include:

* signUp
* signIn
* signOut

The global authentication state is handled by:

AuthContext.tsx

The corresponding hook is:

useAuth.ts

---

# 11. Database Model

The current database model contains:

### profiles

* id
* full_name
* avatar_url
* created_at

The profile ID is linked to Supabase Auth users.

### categories

* id
* name
* slug

### products

* id
* seller_id
* category_id
* title
* description
* price
* image_url
* created_at

Do not introduce additional entities unless required by an explicitly approved feature.

---

# 12. Supabase RLS

Security is handled through PostgreSQL Row Level Security.

Current intended rules:

### Products

Public users can read products.

Only the product owner can:

* create
* update
* delete

Ownership is determined through:

auth.uid() = seller_id

### Profiles

Profiles can be publicly read.

A profile can only be modified by its owner:

auth.uid() = id

Never bypass RLS from the frontend.

Never expose privileged Supabase credentials in client-side code.

---

# 13. Services

Data access should be centralized in services.

Expected services:

### authService.ts

* signUp
* signIn
* signOut

### productService.ts

* getAll
* getById
* getByCategory
* create
* update
* delete

### searchService.ts

* search
* filtering
* category filtering
* price filtering

Do not duplicate Supabase queries across multiple components when the same operation belongs in a service.

---

# 14. Hooks

Expected hooks include:

### useAuth

Authentication and session-related behavior.

### useProducts

Product retrieval and product-related state.

### useSearch

Search and filtering behavior.

Hooks should encapsulate reusable behavior rather than becoming large containers for unrelated business logic.

---

# 15. Routing

Routes are managed through:

src/routes/AppRouter.tsx

The application contains:

* Public routes
* Authentication routes
* Protected seller dashboard routes

Authentication-dependent pages must not be accessible without the appropriate user session.

Do not duplicate authentication checks across every component.

Centralize route protection where appropriate.

---

# 16. UI / Design Rules

The UI uses:

* TailwindCSS
* DaisyUI

Prefer existing DaisyUI components and project components before creating custom UI primitives.

The interface should be:

* Clean
* Consistent
* Responsive
* Accessible
* Easy to understand
* Appropriate for a marketplace

Avoid generic AI-generated design patterns.

Do not automatically use:

* excessive rounded cards
* excessive shadows
* unnecessary gradients
* purple gradients
* glassmorphism
* excessive badges
* excessive icons
* decorative elements without purpose

Visual decisions should support usability.

Do not redesign unrelated parts of the application when implementing a feature.

---

# 17. Responsive Design

The application must work on:

* Mobile
* Tablet
* Desktop

Use responsive TailwindCSS utilities.

Do not simply shrink a desktop layout.

Important pages must be tested at different viewport sizes.

Pay particular attention to:

* Navbar
* Product grids
* Search filters
* Product detail pages
* Dashboard tables
* Forms

---

# 18. Loading, Empty and Error States

Data-driven interfaces must properly handle:

* Loading
* Success
* Empty results
* Errors

Examples:

Product catalogue:

* loading state
* products available
* no products
* API error

Search:

* loading
* matching results
* no results
* search error

Dashboard:

* loading
* products available
* no products
* operation failure

Avoid blank screens when something goes wrong.

User-facing errors should be understandable.

---

# 19. Search

The marketplace supports interactive product search.

Search includes:

* Text search
* Category filtering
* Price filtering

Search input should use debounce where appropriate.

Search-related logic belongs primarily in:

searchService.ts

and:

useSearch.ts

Do not perform unnecessary database requests for every keystroke.

---

# 20. Seller Dashboard

The seller dashboard allows users to manage their own products.

Required operations:

* Add product
* View own products
* Edit product
* Delete product

A seller must only be able to manage products they own.

Frontend checks must not replace database RLS.

RLS remains the security boundary.

---

# 21. Forms and Validation

Authentication and product forms must validate user input.

Validation errors should be clearly communicated.

Forms should handle:

* Loading/submission state
* Validation errors
* Server errors
* Successful submission

Do not allow forms to silently fail.

---

# 22. Storybook Rules

Storybook should document reusable UI components.

When creating an important reusable component, consider creating a story for:

* Default
* Alternative variants
* Loading
* Disabled
* Empty
* Error
* Relevant edge cases

Use realistic data rather than meaningless placeholder content.

Do not create duplicate components simply because a Storybook example already exists.

Storybook examples from the initial setup are not necessarily part of the final application architecture.

---

# 23. Playwright Validation

Use Playwright MCP to validate important user journeys.

At minimum, consider testing:

1. User signup
2. User login
3. User logout
4. Browse products
5. Open product details
6. Search products
7. Apply filters
8. Access seller dashboard
9. Create a product
10. Edit a product
11. Delete a product
12. Access a protected route without authentication

When a UI feature is implemented, validate the actual browser behavior rather than assuming that the code works.

---

# 24. Documentation with Context7

Use Context7 before relying on potentially outdated API knowledge.

Especially verify:

* React APIs
* Vite configuration
* TailwindCSS
* DaisyUI
* Supabase client APIs
* Supabase Auth APIs
* Supabase RLS-related documentation
* Testing tools

Prefer the documentation matching the versions installed in package.json.

---

# 25. Git Workflow

The repository uses:

main
develop
feature/xxx

### main

Production branch.

Protected and deployed to Vercel.

### develop

Integration branch.

### feature/xxx

One branch per task.

Examples:

feature/auth-login
feature/product-search
feature/product-dashboard

Pull Requests should target:

feature/xxx → develop

A feature should be reviewed before merging.

main should only receive stable releases at the end of the appropriate mini-sprint.

---

# 26. Commit Convention

Use:

feat:
fix:
chore:
style:

Examples:

feat: add product search
feat: add seller dashboard
fix: prevent unauthorized product deletion
chore: update dependencies
style: improve product card layout

Keep commits focused.

Do not mix unrelated changes in one commit.

---

# 27. Scope Protection

This project is intentionally limited to an MVP.

Do not implement features outside the defined V1 scope unless explicitly requested.

If a requested feature appears to expand the scope significantly, explain the impact before implementing it.

Prioritize:

1. Core functionality
2. Security
3. Stability
4. Usability
5. Responsive behavior
6. Visual polish

Avoid spending development time on unnecessary features.

---

# 28. Definition of Done

A task is considered complete when:

* The functionality works locally.
* TypeScript has no blocking errors.
* There are no blocking console errors.
* Responsive behavior has been checked.
* Relevant UI states are handled.
* The implementation follows the project architecture.
* Existing components are reused when appropriate.
* Relevant tests pass.
* Important browser flows have been validated when applicable.
* The change does not introduce unnecessary dependencies.
* The change does not modify unrelated parts of the project.
* The feature is ready for code review.

---

# 29. Claude Code Workflow

For a non-trivial task, follow this process:

### Step 1 — Understand

Read the task and identify:

* Required functionality
* Existing files involved
* Possible dependencies
* Security implications
* UI implications

### Step 2 — Inspect

Inspect:

* Existing components
* Existing pages
* Hooks
* Services
* Types
* Routes
* Supabase usage
* Storybook components

### Step 3 — Verify

Use Context7 when library documentation or API behavior needs verification.

Use Storybook MCP when reusable UI components are involved.

### Step 4 — Plan

Before making large changes, provide a concise implementation plan.

### Step 5 — Implement

Make the smallest coherent change required.

Do not refactor unrelated code.

### Step 6 — Validate

Run appropriate:

* TypeScript checks
* Linting
* Tests
* Storybook validation
* Playwright browser validation

### Step 7 — Review

Check:

* Architecture
* Security
* UX
* Responsive behavior
* Error handling
* Loading states
* Empty states
* Unnecessary duplication

### Step 8 — Report

Clearly summarize:

* What changed
* What was tested
* Any remaining issue
* Any decision that requires developer approval

---

# 30. Important Rules

Never:

* Invent an existing component.
* Invent an API.
* Ignore TypeScript errors.
* Ignore failing tests.
* Bypass Supabase RLS.
* Expose Supabase privileged credentials.
* Duplicate existing components unnecessarily.
* Install dependencies without justification.
* Modify unrelated files.
* Implement out-of-scope V1 features without approval.
* Rewrite the architecture unnecessarily.
* Assume that compiling means the feature is finished.

When uncertain:

1. Inspect the codebase.
2. Check Storybook.
3. Check Context7 documentation.
4. Explain the uncertainty.
5. Choose the smallest maintainable solution.

The objective is not to generate the largest amount of code.

The objective is to deliver a clean, maintainable and functional marketplace MVP.
