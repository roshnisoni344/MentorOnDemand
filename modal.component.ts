import { Component, OnInit } from "@angular/core";

@Component({
selector: "my-app",
templateUrl: "./modal.component.html",
})
export class ModalComponent implements OnInit {
constructor() {}

ngOnInit() {}

displayStyle = "none";

openPopup() {
	this.displayStyle = "block";
}
closePopup() {
	this.displayStyle = "none";
}
}