import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { IndustriesComponent } from './industries/industries.component';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './assignments/users/users.component';
import { Login } from './_guards/login.service';
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';


const routes: Routes = [
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  },
  {
    path: 'insights', loadChildren: () => import('./insights/insights.module').then(m => m.InsightsModule)
  },
  {
    path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  // {
  //   path: 'careers', component: CareersComponent
  // },
  // {
  //   path: 'industries', component: IndustriesComponent, canActivate: [Login]
  // },
  {
    path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
    {
    path: 'login', component: LoginComponent, canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'assignments', loadChildren: () => import('./assignments/assignments.module').then(m => m.AssignmentsModule)
  },
  {
    path: 'signup', component: ListOfRegisteredUsersComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
