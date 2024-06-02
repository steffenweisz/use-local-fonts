import { Component } from '@angular/core';

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>welcome works!</p>
  `,
  styles: ``,
})
export class WelcomeComponent {
  title = "use-local-fonts";
}
