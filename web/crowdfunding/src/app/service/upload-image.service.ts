import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(
    private http: HttpClient
  ) { }

  upload(file): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<string>(API_URL + 'upload', formData);
  }
}
