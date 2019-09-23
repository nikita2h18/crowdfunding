import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../../globals";
import {Comment} from "../dto/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) {
  }

  getComments(id: bigint): Observable<Comment[]> {
    return this.http.get<Comment[]>(API_URL + 'comment/' + id);
  }

  sendComment(token: string, id: bigint, comment: string): Observable<void> {
    return this.http.post<void>(API_URL + 'comment/' + id, comment,
      {
        headers: {
          token
        }
      }
    )
  }
}
