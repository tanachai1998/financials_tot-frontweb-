import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegulationComponent } from './components/regulation/regulation.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SectorComponent } from './components/sector/sector.component';
import { Sector1Component } from './components/sector/sector1/sector1.component';
import { Sector2Component } from './components/sector/sector2/sector2.component';
import { Sector3Component } from './components/sector/sector3/sector3.component';
import { Sector4Component } from './components/sector/sector4/sector4.component';
import { Sector5Component } from './components/sector/sector5/sector5.component';

import { StructureComponent } from './components/about-us/structure/structure.component';
import { AboutUsSec1Component } from './components/sector/sector1/about-us-sec1/about-us-sec1.component';

import { Header1Component } from './components/sector/sector1/header1/header1.component';
import { Header5Component } from './components/sector/sector5/header5/header5.component';
import { ContactSector5Component } from './components/sector/sector5/contact-sector5/contact-sector5.component';
import { About5Component } from './components/sector/sector5/about5/about5.component';
import { Reg5Component } from './components/sector/sector5/reg5/reg5.component';
import { RegContentComponent } from './components/regulation/reg-content/reg-content.component';
import { Information1Component } from './components/sector/sector1/information1/information1.component';
import { Reg3Component } from './components/sector/sector3/reg3/reg3.component';
import { HttpClientModule } from "@angular/common/http";
import { AboutSec3Component } from './components/sector/sector3/about-sec3/about-sec3.component';
import { About4Component } from './components/sector/sector4/about4/about4.component';
import { About2Component } from './components/sector/sector2/about2/about2.component';
import { NewsComponent } from './components/news/news.component';
import { Inforsec2Component } from './components/sector/sector2/inforsec2/inforsec2.component';
import { Metricsec2Component } from './components/sector/sector2/metricsec2/metricsec2.component';
import { Reportsec2Component } from './components/sector/sector2/reportsec2/reportsec2.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { Infor31Component } from './components/sector/sector3/infor31/infor31.component';
import { Infor32Component } from './components/sector/sector3/infor32/infor32.component';
import { Infor33Component } from './components/sector/sector3/infor33/infor33.component';
import { SupplierResolver } from './pipes/suppliers.resolver';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    RegulationComponent,
    ContactUsComponent,
    SectorComponent,
    Sector1Component,
    Sector2Component,
    Sector3Component,
    Sector4Component,
    Sector5Component,

    StructureComponent,
    Sector1Component,
    AboutUsSec1Component,

    Header1Component,
    Header5Component,
    ContactSector5Component,
    About5Component,
    Reg5Component,
    RegContentComponent,
    Information1Component,
    Reg3Component,
    AboutSec3Component,
    About4Component,
    About2Component,
    NewsComponent,
    Inforsec2Component,
    Metricsec2Component,
    Reportsec2Component,
    AboutusComponent,
    Infor31Component,
    Infor32Component,
    Infor33Component,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [SupplierResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
