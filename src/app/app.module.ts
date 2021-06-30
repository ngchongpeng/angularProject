import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { BrowserModule } from '@angular/platform-browser';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { CustomLoopDirective } from './_directives/custom-loop.directive';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './_directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { IndustriesComponent } from './industries/industries.component';
import { InsightsModule } from './insights/insights.module';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { LoginComponent } from './login/login.component';
import { ChangeDetectorRef, NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RotateAnimationDirective } from './_directives/rotate-animation.directive';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesModule } from './services/services.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SliderComponent } from './slider/slider.component';
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';
import { UserDataDisplayComponent } from './user-data-display/user-data-display.component';
import { TestComponent } from './test/test.component';
import { AsyncPipe } from '@angular/common';
import { Provider } from '@angular/core';
import { authInterceptorProviders } from './_helpers/auth-interceptor.service';
// import { ChartsModule,ThemeService } from 'ng2-charts';


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
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    AssignmentsModule,
    HttpClientModule,
    InsightsModule,
    // ChartsModule,
  ],
  providers: [
    UnsavedChangesGuard,
    AsyncPipe,
    ChangeDetectorRef as Provider,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
