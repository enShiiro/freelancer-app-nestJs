import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { DashboardState } from './dashboard/dashboard.state';
import { DashboardService } from './dashboard/dashboard.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([DashboardState]),
    NgxsStoragePluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: false}),
    NgxsReduxDevtoolsPluginModule.forRoot({ })
  ],
  exports: [
    NgxsLoggerPluginModule,
    NgxsReduxDevtoolsPluginModule,
    NgxsModule
  ],
  providers: [
      DashboardService
  ]
})
export class StoreModule { }
