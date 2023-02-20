import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']

})
export class SignUpComponent {
  constructor(private http:HttpClient){ }
  onpharamacycreataion(crdenatial:{username: string,password: string,name: string,pharmacyId: number}){
    console.log(crdenatial)
     this.http.post('http://10.4.101.71:3000/employees/signup',crdenatial).subscribe((res)=>{
      console.log(res)
    })
  }

}




