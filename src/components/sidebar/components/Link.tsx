/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
// chakra imports

export const SidebarLink = (props: { route: RoutesType }): JSX.Element => {
  // Chakra color mode
  let location = useLocation();

  const { route } = props;

  const isActiveRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  return (
    <Link to={route.layout + "/" + route.path}>
      <div className="relative mb-[1rem] flex hover:cursor-pointer">
        <li className="my-[3px] flex cursor-pointer items-center px-8">
          <span
            className={`${
              isActiveRoute(route.path) === true
                ? "font-bold text-brand-500 dark:text-white"
                : "font-medium text-gray-600"
            }`}
          >
            {route.icon ? route.icon : <DashIcon />}
          </span>
          <p
            className={`leading-1 ml-4 flex ${
              isActiveRoute(route.path) === true
                ? "font-bold text-navy-700 dark:text-white"
                : "font-medium text-gray-600"
            }`}
          >
            {route.name}
          </p>
        </li>
        {isActiveRoute(route.path) ? (
          <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
        ) : null}
      </div>
    </Link>
  );
};

export default SidebarLink;
