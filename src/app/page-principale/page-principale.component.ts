import { Component, OnInit } from '@angular/core';

let nameParts: string[];

@Component({
  selector: 'app-page-principale',
  templateUrl: './page-principale.component.html',
  styleUrls: ['./page-principale.component.css']
})
export class PagePrincipaleComponent implements OnInit {
  rows = [];
  mapLink = '';
  lienPage3 = '';
  messages = [];
  map;
  page3;

  constructor() { }

  ngOnInit(): void {
    this.mapLink = window.location.href.replace(/pagePrincipale$/, 'pageDeux');
    this.lienPage3 = window.location.href.replace(/pagePrincipale$/, 'pageTrois');
    this.generateRows();
  }

  openMap() {
    this.map = window.open(this.mapLink, 'Map', 'width=1300,height=700'); 
    
    window.addEventListener('message', this.receiveMessage.bind(this));
    return false;
  }

  ouvrirPage3() {
    this.page3 = window.open(this.lienPage3, 'Page3', 'width=1300,height=700');
    
    window.addEventListener('message', this.receiveMessage.bind(this));
    return false;
  }

  sendMessage() {
    console.log("To send message");
    this.map && this.map.postMessage('HI THERE', '*');
    this.page3 && this.page3.postMessage('HI THERE', '*');
  }

  private receiveMessage(event) {
    console.log('Got message', event);
    this.messages.push(event.data);
  }

  private generateRows(num = 3) {
    this.rows = new Array(num)
      .fill(1)
      .map(() => this.getRandomRow())
  }

  private getRandomRow() {
    const name = this.getValue();
    const value = `${this.getValue()}: ${this.getValue()} - ${this.getValue()}`;
    return {
      name,
      value,
    }
  }

  private getValue() {
      const idx = Math.floor(Math.random() * nameParts.length);
      return nameParts[idx]
  }

}

nameParts = `Hi Zlatko,
Best wishes`
.split(/\s+/)