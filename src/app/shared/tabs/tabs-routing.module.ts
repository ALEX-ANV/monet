import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pages/films/films.module').then(m => m.FilmsPageModule)
          }
        ]
      },
      {
        path: 'serials',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pages/serials/serials.module').then(m => m.SerialsPageModule)
          }
        ]
      },
      {
        path: 'games',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../../pages/games/games.module').then(m => m.GamesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/films',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
