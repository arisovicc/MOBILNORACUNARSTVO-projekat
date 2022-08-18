import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsPage } from './films.page';


const routes: Routes = [
  {
    path: 'tabs', //ako smo ukucali films/tabs on ce videti aha nemam nista dalje 23 linija koda vodi me na films/tabs/istrazi
    //ovde podesavamo child rute za FilmsPage
    component: FilmsPage, 
    children: [

      {
        path: 'istrazi',
        loadChildren: () => import('./istrazi/istrazi.module').then( m => m.IstraziPageModule)
      },
      {
        path: 'gledajkasnije',
        loadChildren: () => import('./gledajkasnije/gledajkasnije.module').then( m => m.GledajkasnijePageModule)
      },

      {
        path: '', //kad se ukuca films tabs ti ucitaj ovu istrazi
        redirectTo: '/films/tabs/istrazi',
        pathMatch: 'full'
      },

    ]
  },

  { //kad se ukuca samo films i posle prazno vodi me na films tabs istrazi
    path: '',
    redirectTo: '/films/tabs/istrazi',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsPageRoutingModule {}
