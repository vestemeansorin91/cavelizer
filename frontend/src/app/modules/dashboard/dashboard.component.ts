import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public isExpanded = true;

  @HostListener('window:resize', ['$event'])
  private onResize() {
    this.isExpanded = window.innerWidth > 820;
  }

  ngOnInit(): void {
    this.onResize();
  }
}
