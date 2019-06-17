import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { PortService } from '../../services';
import { Port } from '../../types';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  ports: Port[];
  port: Port;

  constructor(
    private portService: PortService
  ) { }

  ngOnInit() {
    this.ports = this.portService.getPorts();
  }
}
