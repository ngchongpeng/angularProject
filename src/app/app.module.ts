import { AddUserComponent } from './assignments/users/add-user/add-user.component';
import { AllUsersComponent } from './assignments/users/all-users/all-users.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { BrowserModule } from '@angular/platform-browser';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { CustomLoopDirective } from './_directives/custom-loop.directive';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './_directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { IndustriesComponent } from './industries/industries.component';
import { InsightsModule } from './insights/insights.module';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RotateAnimationDirective } from './_directives/rotate-animation.directive';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesModule } from './services/services.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SliderComponent } from './slider/slider.component';
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';
import { UserDataDisplayComponent } from './user-data-display/user-data-display.component';
import { UsersComponent } from './assignments/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    IndustriesComponent,
    CareersComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicesListComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    ListOfRegisteredUsersComponent,
    UserDataDisplayComponent,
    HighlightDirective,
    CustomLoopDirective,
    RotateAnimationDirective,
    UsersComponent,
    AddUserComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    AssignmentsModule,
    HttpClientModule,
    InsightsModule
  ],
  providers: [UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
