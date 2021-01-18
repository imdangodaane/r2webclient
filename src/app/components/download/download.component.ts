import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadComponent implements OnInit {
  panels = [
    {
      active: true,
      name: 'Bản FULL',
      disabled: false
    },
    {
      active: true,
      disabled: false,
      name: 'Bản LITE'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
