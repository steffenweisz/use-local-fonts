import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: ` <router-outlet /> `,
  styles: [],
  imports: [RouterOutlet, WelcomeComponent],
})
export class AppComponent {}
