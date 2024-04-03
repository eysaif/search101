import { Injectable } from '@angular/core';

interface UserCred {
  usr: string | null;
  pwd: string | null;
}
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getLocalUserCredentials(): UserCred {
    const pwd = localStorage.getItem('pwd') || null;
    const usr = localStorage.getItem('usr') || null;
    return { pwd, usr };
  }
}
