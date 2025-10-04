import Navigo from "navigo";
import { ErrorPage } from "../Error.js";

export function router(routes, Layout) {
  const app = document.getElementById("app");
  
  const r = new Navigo(); // ver 7 ko bỏ qua dấu / ở cuối URL, ko là error 404 

  function renderPage(PageComponent, matchData = {}) {
    const pageHTML = PageComponent(matchData); 
    app.innerHTML = Layout({
      children: pageHTML,
    });
    r.updatePageLinks(); 
  }

  routes.forEach(({ path, component }) => {
    r.on(path, (matchData) => {
      renderPage(component, matchData);
    });
  });

  r.notFound(() => {
    renderPage(ErrorPage); // Ko dùng "/" nên 404 ko hiểu @@
  });

  r.resolve();
  
  return r;
}