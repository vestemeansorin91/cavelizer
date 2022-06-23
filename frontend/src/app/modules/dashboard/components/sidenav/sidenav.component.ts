import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() expanded = new EventEmitter<boolean>();
  @Input() isExpanded = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public logout() {
    this.router.navigate(['/auth']);
  }
}
