import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [


  {
    path: 'films', //ako ukucamo films otvorice nam se films
    loadChildren: () => import('./films/films.module').then( m => m.FilmsPageModule),
    canLoad: [AuthGuard] 
    //loadChildern se koristi jer koristimo koncept lazy loading to znaci da se kod
    //modula neke komponente ucitava samo kada je to potrebno tj kada korisnik pristupi stranici tad se ucita 
  },

  {
    path: '', //ako se ukuca samo ono localhost:8100 on nas vodi na films
    redirectTo: 'films', //redirekciju sa home prebacujemo na films jer smo obrisali home stranicu
    pathMatch: 'full'
  },

  {
    path: 'zanrovi',
    loadChildren: () => import('./zanrovi/zanrovi.module').then( m => m.ZanroviPageModule),
    canLoad: [AuthGuard] 
  },
  {
    path: 'log-in',
    loadChildren: () => import('./auth/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) 
    //preloadingStrategy koja pomaze kada korisnik nije aktivan na stranici, on koristi tu 
    //neaktivnost da preuzme ostale module tako da se to odvija u pozadini, pa ce to ubrzati nasu aplikaciju
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
