import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  //we are creating model for adding form
  //nammal group vechittan model create cheyyandth
  contactFormData = this.formbuilder.group({
    username: ['', [Validators.required]],
    phonenumber: ['', [Validators.required]],
    email: ['', [Validators.required]],
    cityname: ['', [Validators.required]],
    enquiry: ['', [Validators.required]],
  });
  constructor(
    private ps: CourseService,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}
  ngOnInit(): void {}

  formDataSubmit() {
    let path = this.contactFormData.value;
    let addContactDetails = {
      username: path.username,
      phonenumber: path.phonenumber,
      email: path.email,
      cityname: path.cityname,
      enquiry: path.enquiry,
    };
    if (this.contactFormData.valid) {
      this.ps.postEnquiry(addContactDetails).subscribe((data: any) => {
        console.log('data', data);
        alert('Enquiry added successfully!! will contact you soon!!');
        this.route.navigateByUrl('');
      });
      this.contactFormData.reset();
    } else {
      alert('unable to post data!!Sorry for inconvenience');
    }
  }
}
