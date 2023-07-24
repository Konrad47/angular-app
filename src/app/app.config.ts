import { HttpHeaders } from '@angular/common/http';

let token = '';

export function updateToken(newToken: string) {
  token = newToken;
}

export function getHttpOptions() {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  };
}
