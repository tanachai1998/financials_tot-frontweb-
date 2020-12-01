import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { MessageService } from 'src/app/sevices/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  nav = [
    {
      name: "sector1",
      data: [
        {
          name: 'หน้าแรก',
          url: 'home',
          style: "text-decoration: none;"
        },
        {
          name: 'เกี่ยวกับเรา',
          url: 'about-us',
          style: "text-decoration: none;"

        },
        {
          name: 'ส่วนงาน',
          url: 'sector',
          style: "text-decoration: none;"

        },
        {
          name: 'คำสั่ง/ระเบียบ',
          url: 'regulation',
          style: "text-decoration: none;"

        },
        {
          name: 'ติดต่อเรา',
          url: 'contact-us',
          style: "text-decoration: none;"

        },

      ]
    },
    {
      name: 'sector2',
      data: [
        {
          name: 'หน้าแรก2',
          url: '',
          style: "text-decoration: none;"
        },
        {
          name: 'เกี่ยวกับเรา',
          url: 'about-us',
          style: "text-decoration: none;"

        },
        {
          name: 'ส่วนงาน',
          url: 'sector',
          style: "text-decoration: none;"

        },
        {
          name: 'คำสั่ง/ระเบียบ',
          url: 'regulation',
          style: "text-decoration: none;"

        },
        // {
        //   name:'ติดต่อเรา',
        //   url:'contact-us',
        //   style :"text-decoration: none;"

        // },

      ]
    }
  ]
  // navsector1 = [
  //   {
  //     name: 'หน้าแรกd',
  //     url: '',
  //     style: "text-decoration: none;"
  //   },
  //   {
  //     name: 'เกี่ยวกับเรา',
  //     url: 'about-us',
  //     style: "text-decoration: none;"

  //   },
  //   {
  //     name: 'ส่วนงาน',
  //     url: 'sector',
  //     style: "text-decoration: none;"

  //   },
  //   {
  //     name: 'คำสั่ง/ระเบียบ',
  //     url: 'regulation',
  //     style: "text-decoration: none;"

  //   },
  //   {
  //     name: 'ติดต่อเรา',
  //     url: 'contact-us',
  //     style: "text-decoration: none;"

  //   },

  // ]
  navsector1 = [
    {
      name: 'หน้าแรกD',
      url: '',
      style: "text-decoration: none;"
    },
    {
      name: 'เกี่ยวกับเรา',
      url: 'about-us',
      style: "text-decoration: none;"

    },
    {
      name: 'ส่วนงาน',
      url: 'sector',
      style: "text-decoration: none;"

    },
    {
      name: 'คำสั่ง/ระเบียบ',
      url: 'regulation',
      style: "text-decoration: none;"

    },
    // {
    //   name:'ติดต่อเรา',
    //   url:'contact-us',
    //   style :"text-decoration: none;"

    // },

  ]
  new_nav: any[] = []
  page_name: string;
  fixnav: any[] = []
  activateRoute: any
  name = '';
  showSidebar$: Observable<any>;
  private defaultShowSidebar = true;
  name_nav: any[] = [];
  subscription: Subscription;
  constructor(private route: ActivatedRoute, private router: Router,
    private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(name_nav => {
      console.log('name_nav', name_nav, this.router.url.replace('/', ''));
      let url = this.router.url.replace('/', '')
      if (name_nav ) {
        this.new_nav = this.nav.find(res => res.name == name_nav.navname).data
      } else {
        // clear messages when empty message received

        this.new_nav = this.navsector1
      }
    });
  }
  sendMessage(name: string): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(name);
  }

  ngOnInit(): void {
    this.sendMessage('sector1');
    // this.showSidebar$ = this.router.events.pipe(
    //   filter(e => e instanceof NavigationEnd),
    //   map(() => this.activateRoute),
    //   map(route => {
    //     while (route.firstChild) {
    //       route = route.firstChild;
    //     }
    //     return route;
    //   }),
    //   mergeMap(route => route.data),
    //   // map((data: any) => data.hasOwnProperty('showSidebar') ? data.nav_name : this.defaultShowSidebar),
    //   map((data: any) => this.nav.find(res => res.name == data.nav_name)),
    // )
    // this.showSidebar$.pipe(map(res =>
    //   console.log(res)
    // ))
    // console.log('this.showSidebar$', this.showSidebar$.subscribe(res => {
    //   console.log('in sub ', res);
    // }));

    // let router_mapper = this.router.getCurrentNavigation()
    // this.name = (router_mapper && router_mapper.extras) ?
    //   router_mapper.extras.state.route_name : null;
    // // observable way
    // this.route.paramMap.subscribe(params => {
    //   console.log("params.get('id')", params.get('id'));
    //   this.page_name = params.get('id');
    // });

    this.fixnav = this.nav

    // if(this.fixnav == "sector1")
    // {
    //   this.fixnav = this.navsector1
    // }
    // this.nav = this.navsector1
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
