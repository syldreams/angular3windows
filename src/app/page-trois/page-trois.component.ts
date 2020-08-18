import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-trois',
  templateUrl: './page-trois.component.html',
  styleUrls: ['./page-trois.component.css']
})
export class PageTroisComponent implements OnInit {

  messages = [];
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  handleMessage(event) {
    console.log('Got msg', event);
    this.messages.push(event.data);
  }
  sendMessage() {
    window.opener.postMessage(new Date().toISOString(), '*');
  }

}
