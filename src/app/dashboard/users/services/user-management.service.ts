import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private titleSubject: BehaviorSubject<string> = new BehaviorSubject("Create");
  private readonly currentTitle: Observable<string> = this.titleSubject.asObservable();

  constructor() { }

  setCurrentTitle(title: string) {
    this.titleSubject.next(title);
  }
}
