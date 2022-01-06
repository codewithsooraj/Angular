import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ErrorComponent } from './error/error.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
{path:"table",component:TableComponent},
{path:"data",component:DataComponent},
{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
