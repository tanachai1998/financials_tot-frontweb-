import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SectorComponent } from './components/sector/sector.component';
import { RegulationComponent } from './components/regulation/regulation.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Sector1Component } from './components/sector/sector1/sector1.component';
import { Sector2Component } from './components/sector/sector2/sector2.component';
import { Sector3Component } from './components/sector/sector3/sector3.component';
import { Sector4Component } from './components/sector/sector4/sector4.component';
import { Sector5Component } from './components/sector/sector5/sector5.component';

import { StructureComponent } from './components/about-us/structure/structure.component';
import {AboutUsSec1Component} from './components/sector/sector1/about-us-sec1/about-us-sec1.component'
import { ContactSector5Component } from './components/sector/sector5/contact-sector5/contact-sector5.component';
import { About5Component } from './components/sector/sector5/about5/about5.component';
import { Reg5Component } from './components/sector/sector5/reg5/reg5.component';
import { RegContentComponent } from './components/regulation/reg-content/reg-content.component';
import { Information1Component } from './components/sector/sector1/information1/information1.component';
import { Reg3Component } from './components/sector/sector3/reg3/reg3.component';
import { AboutSec3Component } from './components/sector/sector3/about-sec3/about-sec3.component';
import { About4Component } from './components/sector/sector4/about4/about4.component';
import { About2Component } from './components/sector/sector2/about2/about2.component';
import {Inforsec2Component} from './components/sector/sector2/inforsec2/inforsec2.component';
import { Metricsec2Component } from './components/sector/sector2/metricsec2/metricsec2.component';
import { Reportsec2Component } from './components/sector/sector2/reportsec2/reportsec2.component';
import { Infor31Component } from './components/sector/sector3/infor31/infor31.component';
import { Infor32Component } from './components/sector/sector3/infor32/infor32.component';
import { Infor33Component } from './components/sector/sector3/infor33/infor33.component';
import { SupplierResolver } from './pipes/suppliers.resolver';
import { DocumentComponent } from './components/document/document.component';
import { CategoryComponent } from './components/category/category.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'sector',
    component: SectorComponent,
  },
  {
    path: 'regulation/:id',
    component: RegulationComponent,
  },
  {
    path: 'regulation/category/:id',
    component: CategoryComponent,
  },
  {
    path: 'regulation/category/document/:id',
    component: DocumentComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'sector/sector1',
    component: Sector1Component,
    resolve: { message: SupplierResolver }
  },
  {
    path: 'sector/sector2',
    component: Sector2Component,
  },
  {
    path: 'sector/sector3',
    component: Sector3Component,
  },
  {
    path: 'sector/sector4',
    component: Sector4Component,
  },
  {
    path: 'sector/sector5',
    component: Sector5Component,
  },
  
  {
    path: 'about-us/structure',
    component: StructureComponent,
  },
  {
    path:'sector/sector1/about-us-sec1',
    component: AboutUsSec1Component,
  },
  {
    path:'sector/sector5/contact-sector5',
    component: ContactSector5Component  ,
  },
  {
    path:'sector/sector5/about5',
    component: About5Component,
  },
  {
    path:'sector/sector5/reg5',
    component: Reg5Component,
  },
  {
    path:'regulation/reg-content',
    component: RegContentComponent,
  },
  {
    path:'sector/sector1/information1',
    component: Information1Component, 
  },
  {
    path:'sector/sector3/reg3',
    component: Reg3Component,
  },
  {
    path:'sector/sector3/about-sec3',
    component: AboutSec3Component,
  },
  {
    path:'sector/sector2/about2',
    component: About2Component,
  },
  {
    path:'sector/sector4/about4',
    component: About4Component,
  },
  {
    path:'sector/sector2/inforsec2',
    component: Inforsec2Component,
  },
  {
    path:'sector/sector2/metricsec2',
    component :Metricsec2Component,
  },
  {
    path:'sector/sector2/reportsec2',
    component:Reportsec2Component,
  },
  {
    path:'sector/sector3/info31',
    component:Infor31Component,
  },
  {
    path:'sector/sector3/info32',
    component:Infor32Component,
  },
  {
    path:'sector/sector3/info33',
    component:Infor33Component,
  },
  {
    // หมายถึง page not found back to home page
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
