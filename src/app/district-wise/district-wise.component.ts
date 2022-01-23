import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-district-wise',
  templateUrl: './district-wise.component.html',
  styleUrls: ['./district-wise.component.css']
})
export class DistrictWiseComponent {

  districtwisedata: any;

  url_districtwise_notgood = "https://api.covid19india.org/state_district_wise.json";
  url_districtwise_working = "https://data.covid19india.org/state_district_wise.json";

  // https://data.covid19india.org/state_district_wise.json
  responsedata: boolean = false;

  constructor(http: HttpClient) {
    http.get(this.url_districtwise_working).subscribe(response => {
      if (response) {
        this.districtwisedata = response;
        console.log(this.districtwisedata);
        this.responsedata = true;
      }
      else {
        this.responsedata = false;
      }
    });
  }


  statevalue = null;
  statedata = null;

  district: any;
  districtcasesdata: any = null;

  changeCountry(count) {
    this.statevalue = count;
    this.district = this.districtwisedata.find(con => con.state == count).districtData;
    this.statedata =
    {
      "name": this.districtwisedata.find(con => con.state == count).state,
      "confirmed": this.districtwisedata.find(con => con.state == count).confirmed,
      "active": this.districtwisedata.find(con => con.state == count).active,
      "recovered": this.districtwisedata.find(con => con.state == count).recovered,
      "deaths": this.districtwisedata.find(con => con.state == count).deaths
    };
  }

  dataprinting(nameofdistrict) {
    this.districtcasesdata = this.districtwisedata.find(con => con.state == this.statevalue).districtData.find(con => con.id == nameofdistrict);
    console.log(this.districtcasesdata);
  }

}
