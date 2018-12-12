import { RouterModule, Routes } from '@angular/router';

import {AppComponent}  from './app.component';
import {PageNotFoundComponent} from './components/pageNotFound/pageNotFound.component';
import {HomeComponent} from './components/home/home.component';
import {ActivitiesComponent} from './components/activities/activities.component'
import {DetailsComponent} from './components/details/details.component'
import {CommentListComponent} from './components/commentlist/addComment.component'


const appRoutes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'activities',  children: [
      { path: '', component:ActivitiesComponent},
      { path: ':details',component: DetailsComponent },
      ]} ,
  {path: '**', component: PageNotFoundComponent},
  ];

  export  const APP_ROUTES_PROVIDER =[RouterModule.forRoot(appRoutes)]
