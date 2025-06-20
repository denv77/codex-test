import { Component } from '@angular/core';
import { MicrofrontendService } from '../../services/microfrontend.service';
import { Microfrontend } from '../../models/microfrontend';
import { AgGridModule } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AsyncPipe } from '@angular/common';
import { NbButtonModule, NbIconModule, NbDialogService, NbDialogModule } from '@nebular/theme';
import { Observable } from 'rxjs';
import { MicrofrontendFormComponent } from '../microfrontend-form/microfrontend-form.component';

@Component({
  selector: 'app-microfrontend-table',
  templateUrl: './microfrontend-table.component.html',
  styleUrls: ['./microfrontend-table.component.scss'],
  standalone: true,
  imports: [AgGridModule, AsyncPipe, NbButtonModule, NbIconModule, NbDialogModule, MicrofrontendFormComponent],
})
export class MicrofrontendTableComponent {
  microfrontends$: Observable<Microfrontend[]> = this.service.microfrontends$;

  columnDefs = [
    { field: 'remoteName', editable: true },
    { field: 'exposedModule', editable: true },
    { field: 'displayName', editable: true },
    { field: 'icon', editable: true },
    { field: 'routePath', editable: true },
    { field: 'ngModuleName', editable: true },
    {
      field: 'active',
      editable: true,
      cellRenderer: (params: ICellRendererParams) => (params.value ? '✅' : '❌'),
    },
  ];

  constructor(private service: MicrofrontendService, private dialog: NbDialogService) {}

  openAddDialog() {
    this.dialog.open(MicrofrontendFormComponent);
  }
}
