import { Component } from '@angular/core'
import {ActivatedRoute} from '@angular/router';
import {CommentsService} from '../../services/getComments/getComments.service'


@Component({
  moduleId: module.id,
  selector: 'comment',
  templateUrl: 'addComment.component.html',
  styleUrls: ['addComment.component.css'],
  providers: [CommentsService]
})

export class CommentListComponent  {
  activity:any
  comments: any

  constructor(private route: ActivatedRoute,private cService: CommentsService) {
    this.activity = route.snapshot.params['details']
    this.getComments(this.activity)
    .then(response =>{
      this.comments = response
        console.log(this.comments)
    })
 }

 getComments(param:String){
   return new Promise(resolve =>{
     let send = {identifier:param}
     this.cService.getCommentforActivity(send).subscribe(res =>{
       resolve(res)
     })
   })
  }



}
