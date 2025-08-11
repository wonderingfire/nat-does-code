import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LandingPage } from './components/landing-page/landing-page';

@Component({
  selector: 'app-root',
  imports: [MatFormFieldModule, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('nat-does-code');
}
