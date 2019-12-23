import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'new', component: UserNewComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
