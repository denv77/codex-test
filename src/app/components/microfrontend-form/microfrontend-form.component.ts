import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { MicrofrontendService } from '../../services/microfrontend.service';

@Component({
  selector: 'app-microfrontend-form',
  templateUrl: './microfrontend-form.component.html',
  styleUrls: ['./microfrontend-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NbButtonModule, NbCardModule, NbInputModule],
})
export class MicrofrontendFormComponent {
  form = this.fb.nonNullable.group({
    remoteName: ['', Validators.required],
    exposedModule: ['', Validators.required],
    displayName: ['', Validators.required],
    icon: [''],
    routePath: ['', Validators.required],
    ngModuleName: ['', Validators.required],
    active: [false],
  });

  constructor(private fb: FormBuilder, private service: MicrofrontendService) {}

  submit() {
    if (this.form.valid) {
      this.service.add(this.form.getRawValue());
    }
  }
}
