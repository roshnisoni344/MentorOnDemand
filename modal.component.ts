import { Component, Input, OnInit } from "@angular/core";

@Component({
selector: "my-app",
templateUrl: "./modal.component.html",
})
export class ModalComponent implements OnInit {
	@Input() errorMsg : any;
	@Input() inputdisplay : any;
	displayStyle = "none";
constructor() {}

ngOnInit() {
	this.displayStyle = this.inputdisplay;
}



openPopup() {
	this.displayStyle = "block";
}
closePopup() {
	this.displayStyle = "none";
}
}
