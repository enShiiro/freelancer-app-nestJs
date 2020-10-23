import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RegistrationComponent } from './views/registration/registration.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FreelancerDetailsCardComponent } from './shared/modules/freelancer-details-card/freelancer-details-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { DashboardStateModel } from './store/dashboard/dashboard.state';
import { DashboardService } from './store/dashboard/dashboard.service';
import { StoreModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserUpdateModalComponent } from './shared/modules/user-update-modal/user-update-modal.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    FreelancerDetailsCardComponent,
    UserUpdateModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    FlexLayoutModule,
    StoreModule,
    MatDialogModule


  ],
  exports: [UserUpdateModalComponent],
  entryComponents: [UserUpdateModalComponent],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
