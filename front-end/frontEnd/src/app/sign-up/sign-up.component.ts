import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']

})
export class SignUpComponent {
  constructor(private http:HttpClient){

  }
  onpharmacycreate(crendtial:{fname:string,lname:string,uname:string,email:string,phone:number,phname:string,loname:string}){
    console.log(crendtial)
    // this.http.post('https://localhost300/crendtial.josn',crendtial).subscribe((res)=>{
    //   console.log(res)

    // })

  }


}
