import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
