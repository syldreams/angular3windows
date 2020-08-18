import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-deux',
  templateUrl: './page-deux.component.html',
  styleUrls: ['./page-deux.component.css']
})
export class PageDeuxComponent implements OnInit {
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
