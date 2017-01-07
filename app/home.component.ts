
import { Component, OnInit } from "@angular/core";
 
@Component({
    moduleId: module.id,
    selector: "home-component",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    message: string;

    // constructor(private _router: Router){

    // }
 
    ngOnInit() {
        this.message = "... and this is the HomeComponent, hello from here too!";
    }

    onBack() {
        //this._router.navigate(['/home']);
    }

    onChangeTitle(){
        this.message = "component data was changed";
    }
}