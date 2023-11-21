import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TextLogo from "assets/custom/TextLogo.svg";
import WaveFooter from "assets/custom/WaveFooter.svg";
import routes from "routes";

export default function StartPage(props: { [x: string]: any }) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes: RoutesType[]): string | boolean => {
    let activeRoute = "Main";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };

  const getRoutes = (routes: RoutesType[]): any => {
    return routes.map((prop, key) => {
      if (prop.layout === "/start") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="container flex h-fit w-fit flex-col">
        <img
          className="w-[429.2px] items-center justify-center"
          src={TextLogo}
          alt="Health_Mate_TextLogo"
        />
        <button className="mt-[46px] h-[93px] rounded-xl bg-brand-400 px-4 py-3 text-2xl font-bold text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          시작하기
        </button>
      </div>
      <img
        className="absolute bottom-0 w-screen"
        src={WaveFooter}
        alt="Health_Mate_TextLogo"
      />
    </div>
  );
}
