import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

export default () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Dashboard />
  </Suspense>
);
