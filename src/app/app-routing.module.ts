import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TitlePageComponent} from "./components/title-page/title-page.component";
import {TodosComponent} from "./components/todos/todos.component";
import {LocalStorageGuard} from "./guards/local-storage.guard";

const routes: Routes = [
  {
    path: '',
    component: TitlePageComponent
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [LocalStorageGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
