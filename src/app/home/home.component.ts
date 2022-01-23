import { DataapigetService } from './../services/dataapiget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-wise',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class StateWiseComponent {

  data: any;
  constructor(serviceobj: DataapigetService) {
    serviceobj.getresponse().subscribe(Response => {
      this.data = Response;
    })
  }

}
