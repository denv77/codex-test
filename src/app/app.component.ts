import { Component } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout>
      <nb-layout-column>
        <router-outlet />
      </nb-layout-column>
    </nb-layout>
  `,
  standalone: true,
  imports: [NbLayoutModule, RouterOutlet],
})
export class AppComponent {}
