import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './components/delete/delete.component';
import { GetAllComponent } from './components/get-all/get-all.component';
import { GetComponent } from './components/get/get.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    // route http://localhost:4200/ for HomeComponent
    path: 'game',
    component: HomeComponent,
  },
  {
    // route http://localhost:4200/getAll for GetAllComponent
    path: 'game/getAll',
    component: GetAllComponent,
  },
  {
    // route http://localhost:4200/get for GetComponent
    path: 'game/get',
    component: GetComponent,
  },
  {
    // route http://localhost:4200/post for PostComponent
    path: 'game/post',
    component: PostComponent,
  },
  {
    // route http://localhost:4200/delete for DeleteComponent
    path: 'game/delete',
    component: DeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
