import { Component } from '@angular/core';
import { User } from 'src/models/User';
import { EnrollmentService } from 'src/services/enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven Form';
  topics = ['Angular', 'React', 'Vue'];
  user = new User('Bob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMessage;

  constructor(private enrollmentService: EnrollmentService) { }
  
  validateTopic(value) {
    if (value === 'default')
      this.topicHasError = true;
    else
      this.topicHasError = false;
  }

  onSubmit() {
    this.submitted = true;
    this.enrollmentService.enroll(this.user).subscribe(data => {
      console.log('Success!', data);
    }, error => {
        console.log('Error!', error);
        this.errorMessage = error.statusText;
    });
  }
}
