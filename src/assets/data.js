import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import PortfolioPage from "../components/pages/portfolio/PortfolioPage";
import ResumePage from "../components/pages/ResumePage";
import BlogPage from "../components/pages/BlogPage";
import ContactPage from "../components/pages/ContactPage";
import WebDevPage from "../components/pages/portfolio/WebDevPage";
import GraphicDesignPage from "../components/pages/portfolio/GraphicDesignPage";
import WProjectPage from "../components/pages/portfolio/WProjectPage";
import GProjectPage from "../components/pages/portfolio/GProjectPage";

const routes = [
  { path: "/", name: "Home", Component: HomePage, pages: [] },
  { path: "/about", name: "About", Component: AboutPage, pages: [] },
  {
    path: "/portfolio",
    name: "Portfolio",
    Component: PortfolioPage,
    pages: [
      {
        path: "/websites",
        name: "Website Design",
        shortName: "Websites",
        Component: WebDevPage,
        pages: [{ path: "/project", Component: WProjectPage }],
      },
      {
        path: "/graphics",
        name: "Graphic Design",
        shortName: "Graphics",
        Component: GraphicDesignPage,
        pages: [
          {
            path: "/project",
            Component: GProjectPage,
          },
        ],
      },
    ],
  },
  { path: "/resume", name: "Resume", Component: ResumePage, pages: [] },
  { path: "/blog", name: "Blog", Component: BlogPage, pages: [] },
  { path: "/contact", name: "Contact", Component: ContactPage, pages: [] },
];

const footerRoutes = [
  {
    path: "/",
    name: "Casey Tansey",
    Component: HomePage,
    pages: [
      { path: "/about", name: "About Me", Component: AboutPage },
      { path: "/resume", name: "Resume", Component: ResumePage },
      { path: "/blog", name: "Blog", Component: BlogPage },
    ],
  },
  {
    path: "/portfolio/websites",
    name: "Website Portfolio",
    Component: WebDevPage,
    pages: [
      {
        path: "/portfolio/websites/project/1",
        name: "Most Recent",
        Component: WProjectPage,
      },
      {
        path: "/portfolio/websites/project/1",
        name: "My Favorite",
        Component: WProjectPage,
      },
      { path: "/portfolio/websites", name: "All", Component: WebDevPage },
    ],
  },
  {
    path: "/portfolio/graphics",
    name: "Graphic Portfolio",
    Component: GraphicDesignPage,
    pages: [
      {
        path: "/portfolio/graphics/project/1",
        name: "Most Recent",
        Component: GProjectPage,
      },
      {
        path: "/portfolio/graphics/project/1",
        name: "My Favorite",
        Component: GProjectPage,
      },
      {
        path: "/portfolio/graphics",
        name: "All",
        Component: GraphicDesignPage,
      },
    ],
  },
];
export { routes, footerRoutes };
