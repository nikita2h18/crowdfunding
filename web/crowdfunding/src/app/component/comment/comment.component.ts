import { Component, OnInit } from '@angular/core';
import {Comment} from "../../dto/Comment";
import {CommentService} from "../../service/comment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MeProviderService} from "../../service/me-provider.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  private comments: Comment[] = [];
  private comment: string;

  constructor(
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute,
    private meProviderService: MeProviderService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.commentService.getComments(params['id'])
          .subscribe(
            (comments: Comment[]): Comment[] => {
              if (comments) {
                return this.comments = comments;
              }
            },
            () => {
              console.log("error");
            }
          );
      }
    );

  }

  sendComment() {
    this.route.params.subscribe(
      params => {
        this.commentService.sendComment(localStorage.getItem('token'), params['id'], this.comment)
          .subscribe(
            () => {
              this.ngOnInit();
            }
          )
      }
    );

  }
}
