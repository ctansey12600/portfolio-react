import Home from "../Main/Home/Home";
import About from "../Main/About/About";
import Portfolio from "../Main/Portfolio/Portfolio";
import Resume from "../Main/Resume/Resume";
import Blog from "../Main/Blog/Blog";
import Contact from "../Main/Contact/Contact";
import Websites from "../Main/Portfolio/Websites/Websites";
import Graphics from "../Main/Portfolio/Graphics/Graphics";
import WebsiteProject from "../Main/Portfolio/Websites/WebsiteProject";
import GraphicProject from "../Main/Portfolio/Graphics/GraphicProject";

const routes = [
  { path: "/", name: "Home", Component: Home, pages: [] },
  { path: "/about", name: "About", Component: About, pages: [] },
  {
    path: "/portfolio",
    name: "Portfolio",
    Component: Portfolio,
    pages: [
      {
        path: "/websites",
        name: "Website Design",
        Component: Websites,
        pages: [{ path: "/project", Component: WebsiteProject }],
      },
      {
        path: "/graphics",
        name: "Graphic Design",
        Component: Graphics,
        pages: [
          {
            path: "/project",
            Component: GraphicProject,
          },
        ],
      },
    ],
  },
  { path: "/resume", name: "Resume", Component: Resume, pages: [] },
  { path: "/blog", name: "Blog", Component: Blog, pages: [] },
  { path: "/contact", name: "Contact", Component: Contact, pages: [] },
];

const footerRoutes = [
  {
    path: "/",
    name: "Casey Tansey",
    Component: Home,
    pages: [
      { path: "/about", name: "About Me", Component: About },
      { path: "/resume", name: "Resume", Component: Resume },
      { path: "/blog", name: "Blog", Component: Blog },
    ],
  },
  {
    path: "/portfolio/websites",
    name: "Website Portfolio",
    Component: Websites,
    pages: [
      {
        path: "/portfolio/websites/project/1",
        name: "Most Recent",
        Component: WebsiteProject,
      },
      {
        path: "/portfolio/websites/project/1",
        name: "My Favorite",
        Component: WebsiteProject,
      },
      { path: "/portfolio/websites", name: "All", Component: Websites },
    ],
  },
  {
    path: "/portfolio/graphics",
    name: "Graphic Portfolio",
    Component: Graphics,
    pages: [
      {
        path: "/portfolio/graphics/project/1",
        name: "Most Recent",
        Component: GraphicProject,
      },
      {
        path: "/portfolio/graphics/project/1",
        name: "My Favorite",
        Component: GraphicProject,
      },
      { path: "/portfolio/graphics", name: "All", Component: Graphics },
    ],
  },
];
export { routes, footerRoutes };
