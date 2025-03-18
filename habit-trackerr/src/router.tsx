import React from 'react';
import {
  createRouter,
  RouterProvider,
  Outlet,
  createRootRoute,
  createRoute,
  createBrowserHistory,
} from '@tanstack/react-router';
import HabitTracker from './routes/HabitTracker';

// Shared layout component
function Root() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Shared layout or navigation can go here */}
      <Outlet />
    </div>
  );
}

// Define the route tree using createRoute
const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HabitTracker,
});

// Register the routes
const routeTree = rootRoute.addChildren([indexRoute]);

// Create the router with the route tree and a browser history implementation
export const router = createRouter({
  routeTree,
  history: createBrowserHistory(),
});

// Don't forget to include a component to render the router
export function App() {
  return <RouterProvider router={router} />;
}