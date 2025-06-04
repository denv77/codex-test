import { Injectable, signal } from '@angular/core';
import { Microfrontend } from '../models/microfrontend';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  private microfrontendsSignal = signal<Microfrontend[]>([]);

  get microfrontends$(): Observable<Microfrontend[]> {
    return toObservable(this.microfrontendsSignal);
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
