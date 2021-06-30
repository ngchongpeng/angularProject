import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';


const routes: Routes = [
  {
    // path: '', redirectTo: '/assignments/users', pathMatch: 'prefix'
    path: '', component: TestComponent
  },
  {
    path: 'insights', loadChildren: () => import('./insights/insights.module').then(m => m.InsightsModule)
  },
  {
    path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
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
    path: 'assignments', loadChildren: () => import('./assignments/assignments.module').then(m => m.AssignmentsModule)
  },
  {
    path: 'final', loadChildren: () => import('./final/final.module').then(m => m.FinalModule)
  },
  {
    path: 'signup', component: ListOfRegisteredUsersComponent
  },
  // {
  //   path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  // },
  {
    path: 'unauthorized', component: UnauthorizedComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },
  // {
  //   path: 'careers', component: CareersComponent
  // },
  // {
  //   path: 'industries', component: IndustriesComponent, canActivate: [Login]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
