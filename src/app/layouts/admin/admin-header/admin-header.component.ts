import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  isCollapsed = false;
  @Output() isCollapsedEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  sendIsCollapsed() {
    this.isCollapsed = !this.isCollapsed
    this.isCollapsedEvent.emit(this.isCollapsed);
  }
}
