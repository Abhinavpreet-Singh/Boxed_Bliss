"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

type RouteLoadingContextValue = {
  isNavigating: boolean;
  startNavigation: () => void;
};

const RouteLoadingContext = createContext<RouteLoadingContextValue | null>(null);

export function RouteLoadingProvider({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);

  const startNavigation = useCallback(() => {
    setIsNavigating(true);
  }, []);

  useEffect(() => {
    if (!isNavigating) return;
    const t = window.setTimeout(() => setIsNavigating(false), 1100);
    return () => window.clearTimeout(t);
  }, [isNavigating]);

  const value = React.useMemo(
    () => ({
      isNavigating,
      startNavigation,
    }),
    [isNavigating, startNavigation],
  );

  return (
    <RouteLoadingContext.Provider value={value}>{children}</RouteLoadingContext.Provider>
  );
}

export function useRouteLoading() {
  const ctx = useContext(RouteLoadingContext);
  if (!ctx) throw new Error("useRouteLoading must be used within RouteLoadingProvider");
  return ctx;
}

