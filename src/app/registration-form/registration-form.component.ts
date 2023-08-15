import { Component, ViewEncapsulation } from '@angular/core';
import { Customer } from 'src/interface/customer.interface';
import { LanguageService } from '../language.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  
  constructor(private fb: FormBuilder, public languageService: LanguageService) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      preferredLanguage: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      console.log(formData);
    }
  }

  onLanguageChange(event: Event): void {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    this.languageService.selectedLanguage = selectedLanguage;
  }
}
