import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	required: string = 'field is required';
	feedbackForm: FormGroup;
	result: boolean = false;
	
	email: string;
	message: string;
	home: string;
	work: string;

	constructor(private fb: FormBuilder) {
		this.feedbackForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			message: ['', Validators.required],
			phone: this.fb.group({
				home: new FormControl(''),
				work: new FormControl('')
			})
		}); 
	}

	ngOnInit() { }

	submit(): void {
		const values = this.feedbackForm.value;
		this.result = true;
		this.email = values.email;
		this.message = values.message;
		this.home = values.phone.home;
		this.work = values.phone.work;
	}


}
