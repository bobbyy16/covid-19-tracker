import { DataapigetService } from './../services/dataapiget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.css']
})
export class StateWiseComponent {

  data:any;
  constructor(serviceobj : DataapigetService){
      serviceobj.getresponse().subscribe(Response =>{
        this.data = Response;
      })
  }

}
