import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor() { }

  getMessage() {
    return "Servisten merhaba!"
  }
}
