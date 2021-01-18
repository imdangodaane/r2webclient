import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  isOpenLoginModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenLoginModal(event: any): void {
    this.isOpenLoginModal = true;
  }

  handleLoginCancel(): void {
    this.isOpenLoginModal = false;
  }

  handleLoginOk(): void {
    this.isOpenLoginModal = false;
  }
}
