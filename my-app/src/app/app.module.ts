import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


import {AppComponent}  from './app.component';
import {PageNotFoundComponent} from './components/pageNotFound/pageNotFound.component';
import {HomeComponent} from './components/home/home.component';
import {ActivitiesComponent} from './components/activities/activities.component'
import {DetailsComponent} from './components/details/details.component'
import {CommentListComponent} from './components/commentlist/addComment.component'
import {BookComponent} from './components/bookNow/bookNow.component'

const appRoutes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'activities',  children: [
      { path: '', component:ActivitiesComponent},
      { path: ':details',component: DetailsComponent },
      { path: ':details/bookNow',component: BookComponent },
      ]} ,
  {path: '**', component: PageNotFoundComponent},
  ];

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,
                  RouterModule.forRoot(appRoutes), ],

  declarations: [ AppComponent,HomeComponent,
                  ActivitiesComponent ,PageNotFoundComponent,
                  DetailsComponent,CommentListComponent, BookComponent],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
