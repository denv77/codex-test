import { Injectable, signal } from '@angular/core';
import { Microfrontend } from '../models/microfrontend';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  private microfrontendsSignal = signal<Microfrontend[]>([]);

  get microfrontends$(): Observable<Microfrontend[]> {
    return this.microfrontendsSignal.asObservable();
  }

  add(mf: Microfrontend) {
    const list = this.microfrontendsSignal();
    this.microfrontendsSignal.set([...list, mf]);
  }

  update(index: number, mf: Microfrontend) {
    const list = this.microfrontendsSignal();
    list[index] = mf;
    this.microfrontendsSignal.set([...list]);
  }
}
