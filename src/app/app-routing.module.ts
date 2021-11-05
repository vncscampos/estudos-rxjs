import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DragdropComponent } from './views/dragdrop/dragdrop.component';
import { AutocompleteComponent } from './views/autocomplete/autocomplete.component';

const routes: Routes = [
  {
    path: 'dragdrop',
    component: DragdropComponent,
    pathMatch: 'full',
  },
  {
    path: 'autocomplete',
    component: AutocompleteComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
