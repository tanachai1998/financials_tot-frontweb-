import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/sevices/message.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  constructor(private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {


    this.sendMessage('sector');
  }

  navigate(route, name) {
    console.log('in navigate');
    this.sendMessage(name)
    // this.router.navigate(['other']);
    this.router.navigate(['sector', route])
  }

  sendMessage(name: string): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(name);
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }
}



