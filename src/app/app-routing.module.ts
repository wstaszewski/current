import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BenchmarksComponent } from './components/benchmarks/benchmarks.component';
import { CurrentConfigComponent } from './components/current-config/current-config.component';
import { HistoryComponent } from './components/history/history.component';
import { PerformanceComponent } from './components/performance/performance.component';

const routes: Routes = [
  { path: '', redirectTo: '/current', pathMatch: 'full' },
  { path: 'current', component: CurrentConfigComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'benchmarks', component: BenchmarksComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }