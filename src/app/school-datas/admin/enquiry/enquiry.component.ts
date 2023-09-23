import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss'],
})
export class EnquiryComponent implements OnInit {
  enquiryData: any = [];
  constructor(private ps: CourseService, private route: Router) {}
  ngOnInit(): void {
    this.ps.getEnquiry().subscribe((data: any) => {
      console.log(data);
      this.enquiryData = data;
    });
  }
}
