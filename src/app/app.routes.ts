import { Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" }, //default route
  { path: "welcome", component: WelcomeComponent },
  { path: "**", component: PageNotFoundComponent },
];
