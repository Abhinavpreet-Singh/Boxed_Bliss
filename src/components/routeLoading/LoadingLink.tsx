"use client";

import Link from "next/link";
import React from "react";
import { useRouteLoading } from "@/components/routeLoading/RouteLoadingProvider";

type LoadingLinkProps = React.ComponentProps<typeof Link> & {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function LoadingLink({
  onClick,
  ...props
}: LoadingLinkProps) {
  const { startNavigation } = useRouteLoading();

  return (
    <Link
      {...props}
      onClick={(e) => {
        startNavigation();
        onClick?.(e);
      }}
    />
  );
}

