import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Submitted:', formData);

      // Simulate success message
      this.successMessage = 'Thank you for contacting us! We will get back to you soon.';
      this.contactForm.reset();

      // Clear the success message after a few seconds (optional)
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    }
  }
}
