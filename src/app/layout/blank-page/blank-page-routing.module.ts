import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankPageComponent } from './blank-page.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: BlankPageComponent,
      canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlankPageRoutingModule {}
