import { Component } from '@angular/core'
import {DetailsService} from '../../services/getDetails/getDetails.service'
import {CommentsService} from '../../services/getComments/getComments.service'
import {ActivatedRoute} from '@angular/router';



@Component({
  moduleId: module.id,
  selector: '',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css'],
  providers: [DetailsService,CommentsService]
})

export class DetailsComponent  {
activity: string
actDetails: any
hasData: boolean
isChecked:any
favButton:string
addC: boolean = false

    constructor(private route: ActivatedRoute,private dService: DetailsService,private cService:CommentsService) {
      this.activity = route.snapshot.params['details']
      this.isChecked = false
      this.favButton ="Add to favorites"


        this.getDetails(this.activity)
          .then(result =>{
              this.actDetails = result
              this.hasData = true
            })

        this.checkFav()
        .then(result2 =>{
          this.isChecked = result2
          let favBtn = document.getElementById('fav')
          if(this.isChecked){
              favBtn.className ="btn btn-success"
              this.favButton = "Remove from favorites"
            }else{
             favBtn.className ="btn btn-default"
          }
        })


    }

    getDetails(identifier:string){
      return new Promise(resolve => {
      let param = {param:identifier}
        this.dService.getByParam(param).subscribe(res =>{
            resolve(res[0])
          })
      })
    }

    request(){
      alert('You have booked this activity!')
    }

    checkFav(){
      let param = {identifier:this.activity}
      let favBtn = document.getElementById('fav')
      return new Promise(resolve2 => {
      this.dService.checkFavorite(param).subscribe(res =>{
        resolve2(res)
        })
      })
    }

    favorite(){
      let param = {identifier:this.activity}
      let favBtn = document.getElementById('fav')
      this.dService.markFavorite(param).subscribe(res =>{
        if(res) {
          favBtn.className ="btn btn-success"
          this.favButton = "Remove from favorites"
        }
        else {
          favBtn.className ="btn btn-default"
          this.favButton ="Add to favorites"
        }
      })
    }

    toggleComm(){
      this.addC = !this.addC
          }
    submitCommen(name:String,mail:String,comment:String){
      let param ={
        'username':name,
        'useremail':mail,
        'comment':comment,
        'identifier': this.activity
      }
      this.cService.addCommentforActivity(param).subscribe(res =>{
        alert(res.msg)
      })
    }
}

interface activity {
  provName:String
  actName: String
  category:String
  location:String
  price:String
  url:String
  details:String
}
