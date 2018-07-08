import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { PatientHistoryComponent } from './views/patient-history/patient-history.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReviewPatientComponent } from './shared/review-patient/review-patient.component';
import { DetailHistoryPatientComponent } from './shared/detail-history-patient/detail-history-patient.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { RegistryPatientComponent } from './views/registry-patient/registry-patient.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

/* const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
 */

const appRoutes: Routes = [
  { path: 'patient-history', component: MainComponent },
  { path: 'form-patient', component: RegistryPatientComponent },
  /* { path: 'hero/:id',      component: HeroDetailComponent }, */
/*   {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  }, */
  { path: '',
    redirectTo: '/patient-history',
    pathMatch: 'full'
  },
  { path: '**', component: MainComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PatientHistoryComponent,
    FooterComponent,
    ReviewPatientComponent,
    DetailHistoryPatientComponent,
    HeaderComponent,
    RegistryPatientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    MatTabsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatAutocompleteModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
