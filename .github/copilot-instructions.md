# Copilot Instructions - SimpleBar Web (Carta Online)

## Project Overview

Multi-tenant digital menu web app built with **React 18 + TypeScript + Vite + Tailwind CSS v4**. Displays restaurant products/categories by tenant and branch via dynamic URL routing (`/:tenant_path/:branch_path`). Uses Redux Toolkit with custom middleware pattern for API communication.

## Architecture

### State Management (Redux Toolkit)

**Critical Pattern**: Actions with empty reducers + middleware interceptors for all API calls.

```tsx
// 1. Define action with empty reducer in slice (e.g., productSlice.ts)
get_products(_state, _action: PayloadAction<GetProductPayload>) {} // empty

// 2. Middleware intercepts and handles API call (product-middlewares.ts)
if (action.type === 'products/get_products') {
  const { path, setIsLoading } = action.payload;
  await executeApiCall(setIsLoading, () => fetchData(...), dispatch,
    (response) => dispatch(set_products(response.data.items))
  );
}

// 3. Dispatch from components using typed hooks
const dispatch = useAppDispatch();
dispatch(get_products({ path: `${tenant}/${branch}?limit=100`, setIsLoading }));
```

**Slices** (`src/redux/slices/`): `ui`, `cart`, `categories`, `products`  
**Middlewares** (`src/redux/middlewares/`): Register in `store.ts` middlewares array  
**Store setup**: Disables `serializableCheck` for Redux - see `src/redux/store.ts`

### API Communication

**All API calls flow through this chain**:

1. `fetchData(path, method, body)` in `src/services/fetchData.ts` - base fetch with headers
2. `executeApiCall()` in `src/services/executeApiCall.ts` - wraps API calls with:
    - Loading state management via `setIsLoading` callback
    - Error handling via `uiModal()` dispatch
    - 401 auto-logout: `localStorage.clear()` + redirect to `/`
3. Response type: `ResponseApiDing<T>` with `{ error, code, message, data }`

**Headers injected by `fetchData`**:

- `access`: from `VITE_S3_ACCESS_KEY` env var
- `Authorization`: `Bearer ${token}` (optional)
- `Content-Type: application/json`

**Environment variables** (required in `.env`):

- `VITE_API_BASE_URL` - API base URL
- `VITE_S3_ACCESS_KEY` - Access key for headers
- `VITE_SERVER_SECRET` - Secret for `Encrypter` class

### Routing & Multi-tenancy

Dynamic tenant/branch via URL params (`useParams()` from `react-router-dom`):

```tsx
// routes.tsx structure
'/:tenant_path' → MenuWelcome
  '/:branch_path' → Dash (main product view)

// Usage in components
const { tenant_path, branch_path } = useParams();
dispatch(get_products({ path: `${tenant_path}/${branch_path}` }));
```

### Component Organization

**Always import from barrel exports**: `src/components/index.ts`

```tsx
import { Button, Card, Input, PricingSection } from '@/components';
```

**Layout system** at `src/components/layout/`:

- Wraps pages via `LayoutView` component
- Navbar, Sidebar components with responsive behavior
- Theme toggle via `ThemeProvider` context

**Pricing components** (`src/components/pricing/`):

- See dedicated README at `src/components/pricing/README.md`
- Pattern: `PricingSection` → multiple `PricingCard` → `PriceDisplay` + `FeatureList`

### Shopping Cart Pattern

Cart state persists to `localStorage` automatically via slice reducers:

```tsx
// cartSlice.ts - all mutations sync to localStorage
addOrUpdateProduct(state, action) {
  // ...update state
  localStorage.setItem('cart_state', JSON.stringify(state.cartProducts));
}
```

Init cart from storage on app load via `src/common/helpers/dataInit.ts`

## Styling Conventions

### Tailwind CSS v4

**Dark mode**: Uses `class` strategy - always add `dark:` variants

```tsx
<div className="bg-white text-gray-700 dark:bg-neutral-900 dark:text-gray-200">
```

**Custom theme colors** (`tailwind.config.js`):

- `primary`: #0e6fff (brand blue)
- `secondary`: #7752eb (brand purple)
- Structured colors: `background.{light|dark}`, `surface.{light|dark}`, `card.{light|dark}`, etc.

**Theme switching**: `useThemeContext()` hook from `src/common/contexts/ThemeContext.tsx`

**Icons**: Use **Lucide React** exclusively (`lucide-react` package)

### Button Component Variants

Standard variants in `Button.tsx`:

- Solid: `primary`, `secondary`, `danger`, `success`
- Outline: `primary-outline`, `danger-outline`, `secondary-outline`, `success-outline`
- Plain (no bg): `plain`, `plain-primary`, `plain-danger`, `plain-success`, `plain-secondary`

Size prop: `Size` type from `src/types/ui.ts` (`'sm' | 'md' | 'lg'`)

## Critical Patterns

### Modal System

Centralized via `uiSlice` - all alerts/errors use this:

```tsx
dispatch(uiModal({
  modalFor: 'message',
  typeMsg: 'error' | 'success' | 'warning',
  msg: 'Error code or message',
  msgTitle?: 'Custom title'
}));
```

Modal state auto-managed in `src/components/modal/ModalMessage.tsx`

### Form State Management

Use generic `useForm<T>` hook from `src/hooks/useForm.ts`:

```tsx
const [values, handleInputChange, reset] = useForm<FormType>({
    name: '',
    email: '',
});

<Input name="email" value={values.email} onChange={handleInputChange} />;
```

### Encryption Utilities

`Encrypter` class at `src/common/class/Encrypter.ts`:

- Uses `crypto-js` with `VITE_SERVER_SECRET`
- Methods: `encrypt(data)`, `decrypt(data)`
- Returns `{ error, data }` on decrypt

## Build & Development

### Commands

```bash
npm run dev      # Vite dev server (port 5173)
npm run build    # TypeScript check + Vite build + SSR prerender
npm run lint     # ESLint
npm run preview  # Preview production build
```

### SSR Prerendering

Build process runs `scripts/prerender.mjs` to inject server-rendered HTML into `dist/index.html`:

- Uses Vite SSR mode
- Polyfills browser APIs (localStorage, window)
- Injects rendered React tree into `<div id="root">`
- SEO optimization step - preserves meta tags

### TypeScript Configuration

- App code: `tsconfig.app.json`
- Node scripts: `tsconfig.node.json`
- Types exported from `src/types/` directory

## File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `PricingCard.tsx`)
- Hooks: `camelCase.ts` with `use` prefix (e.g., `useForm.ts`)
- Slices: `kebab-case.ts` with `Slice` suffix (e.g., `product-slice.ts`)
- Middlewares: `kebab-case.ts` with `-middlewares` suffix (e.g., `product-middlewares.ts`)
- Types: `singular-noun.ts` (e.g., `product.ts`, `ui.ts`)
- Helpers: `camelCase.ts` in `src/common/helpers/`
