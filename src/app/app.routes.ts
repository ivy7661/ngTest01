import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { OpenModalComponent } from './page/open-modal/open-modal.component';
import { TabsComponent } from './page/tabs/tabs.component';
import { Tab1Component } from './component/tab1/tab1.component';
import { Tab2Component } from './component/tab2/tab2.component';
import { UploadFileComponent } from './page/upload-file/upload-file.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'openModal',
    component:OpenModalComponent
  },
  {
    path:'tabs',
    component:TabsComponent,
    children:[
      {
        path:'tab1',
        component:Tab1Component
      },
      {
        path:'tab2',
        component:Tab2Component
      }
    ]
  },
  {
    path:'uploadFile',
    component:UploadFileComponent
  }
];
