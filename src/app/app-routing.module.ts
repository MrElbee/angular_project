import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SecondPageComponent } from './small-layout/second-page/second-page.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent,
}, {
  path: 'second',
  component: SecondPageComponent, // should be your new component
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}