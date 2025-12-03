# Copilot Instructions - SimpleBar Web (Carta Online)

## Project Overview

Multi-tenant digital menu web app built with **React 18 + TypeScript + Vite + Tailwind CSS v4**. Displays restaurant products/categories by tenant and branch via dynamic URL routing (`/:tenant_path/:branch_path`).

## Architecture

### State Management (Redux Toolkit)
- **Slices** at `src/redux/slices/`: `ui`, `cart`, `categories`, `products`
- **Middleware pattern** at `src/redux/middlewares/`: API calls are dispatched as actions with empty reducers (e.g., `get_products`), then intercepted by middleware to call `executeApiCall()` and dispatch result actions
- Use typed hooks from `src/redux/store.ts`: `useAppDispatch`, `useAppSelector`

```tsx
// Pattern example: dispatch action → middleware intercepts → API call → dispatch setter
dispatch(get_products({ path: `${tenant}/${branch}?limit=100`, setIsLoading }));
```

### API Communication
- **`src/services/fetchData.ts`**: Base fetch wrapper with auth headers
- **`src/services/executeApiCall.ts`**: Wrapper that handles loading state, error modals via `uiModal()`, and 401 redirects
- Response type: `ResponseApiDing<T>` with `{ error, code, message, data }`
- Environment variables: `VITE_API_BASE_URL`, `VITE_S3_ACCESS_KEY`, `VITE_SERVER_SECRET`

### Routing
Dynamic tenant/branch routing in `src/routes.tsx`:
- `/` → Landing page
- `/:tenant_path/:branch_path` → Main menu view with products

### Component Organization
- **Barrel exports** at `src/components/index.ts` - always import from here
- **Layout components** at `src/components/layout/` (Navbar, Sidebar, LayoutView)
- **Reusable pricing components** with README at `src/components/pricing/`
- Button variants: `primary`, `secondary`, `danger`, `success`, `*-outline`, `plain-*`

## Styling Conventions

### Tailwind CSS v4 + Dark Mode
- Dark mode via `class` strategy - use `dark:` prefix
- Custom colors in `tailwind.config.js`: `primary`, `secondary`, `surface`, `card`, `border`, `text`
- Theme context via `ThemeProvider` in `src/common/contexts/`

```tsx
// Pattern: always include dark mode variants
<div className="bg-white text-gray-700 dark:bg-neutral-900 dark:text-gray-200">
```

### Icon Library
Use **Lucide React** for icons (`lucide-react`)

## Key Patterns

### Custom Hooks
- `useForm<T>`: Generic form state management with `handleInputChange`
- `useTheme` / `useThemeContext`: Theme toggle functionality
- `useAppSelector` / `useAppDispatch`: Typed Redux hooks

### Modal System
Global modal via Redux `uiSlice`:
```tsx
dispatch(uiModal({ modalFor: 'message', typeMsg: 'error', msg: 'Error code' }));
```

### Component Props Pattern
- Define interface separately (e.g., `ButtonProps`, `PricingCardProps`)
- Export types from `src/types/` directory
- Use `Size` type (`'sm' | 'md' | 'lg'`) for size variants

## Commands
```bash
npm run dev      # Start Vite dev server
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## File Naming
- Components: PascalCase (e.g., `PricingCard.tsx`)
- Hooks: camelCase with `use` prefix (e.g., `useForm.ts`)
- Slices/services: kebab-case (e.g., `product-middlewares.ts`)
- Types: singular nouns (e.g., `product.ts`, `ui.ts`)
