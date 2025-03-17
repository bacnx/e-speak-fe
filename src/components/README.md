Folder priority order:

  1. `/app`: Define page routes.
    Use the App directory to define pages and API calls.Pass logic into
    business/feature layers to avoid using "use client" across the entire page,
    which could affect async page functionality.

  2. `/business`: Page content.
    Contains feature components, where each component encapsulates the logic for its
    specific section/module. Avoid using "use client" for the entire page content.

  3. `/feature`: Sections and modules within a page.
    Contains individual modules; "use client" is allowed here when necessary.

  4. `/form`, `/modal`, `/table`: Contains forms, modals, tables, and some components
    that may leverage dynamic imports with SSR disabled (ssr: false) or Suspense
    for delayed loading. These components typically don’t require SSR. By default,
    they are automatically exported with dynamic SSR disabled.

  5. `/ui`: Small, reusable components.
    Contains small components that can be reused across feature/business components.
    The ui components should minimize the use of useEffect but may include useState
    or useMemo where appropriate.
