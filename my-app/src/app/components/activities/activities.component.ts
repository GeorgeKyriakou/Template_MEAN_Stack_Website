import { Component } from '@angular/core'
import {ActivityService} from '../../services/activities/activities.service'

@Component({
  moduleId: module.id,
  selector: 'activities',
  templateUrl: 'activities.component.html',
  styleUrls: ['activities.component.css'],
  providers: [ActivityService]
})

export class ActivitiesComponent  {
        activities: any
        temp:any
        check: any
        attrs: string[] =["--"]
        filters: string[] = ['Location', 'Category','Provider' ]
        filterBy: string

    constructor (public activityService:ActivityService){
     this.getAlltActs()
     .then(response =>{
       this.activities = response
       this.temp = this.activities
       console.log(this.activities)
     })
  }

  getAlltActs(){
    return new Promise(resolve =>{
      this.activityService.getAll().subscribe(res =>{
        resolve(res)
    })
   })
  }

  filterBox(value:any){
    this.filterBy = value
    switch(value){
      case 'Filter by...':{
        this.attrs= ['--']
        this.filterActsBy('--')
        break;
      }
      case 'Location':{
        this.attrs = this.activities.map((a:any) =>a.location)
        this.attrs = this.unique(this.attrs)
        break;
      }
      case 'Category':{
        this.attrs = this.activities.map((a:any) =>a.category)
        this.attrs = this.unique(this.attrs)
        break;
      }
      case 'Provider':{
        this.attrs = this.activities.map((a:any) =>a.provname)
        this.attrs = this.unique(this.attrs)
        break;
      }
    }
  }

      unique = (a:any)=> {
      let seen = {}
      return a.filter((n:any)=>seen.hasOwnProperty(n)? false: seen[n]= true)
    }

  filterActsBy(value:any){
    this.temp = this.activities
    switch(this.filterBy){
    case 'Location':{
       this.temp = this.temp.filter(function(b:any){return b.location === value})
       break
    }
    case 'Category':{
       this.temp = this.temp.filter(function(b:any){return b.category === value})
       break
    }
    case 'Provider':{
       this.temp = this.temp.filter(function(b:any){return b.provname === value})
       break
    }
    default :{
      break
    }

  }

}
}
