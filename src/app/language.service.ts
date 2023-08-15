import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  selectedLanguage: string = 'english';

  translations = {
    english: {
      fullName: 'Full Name',
      preferredLanguage: 'Preferred Language',
      phoneNumber: 'Phone Number',
      registerButton: 'Register',
    },
    russian: {
      fullName: 'Полное имя',
      preferredLanguage: 'Предпочитаемый язык',
      phoneNumber: 'Номер телефона',
      registerButton: 'Зарегистрироваться',
    },
  };

  getTranslations(): any {
    return this.translations;
  }
}
