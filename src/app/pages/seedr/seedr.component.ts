import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seedr',
  templateUrl: './seedr.component.html',
  styleUrls: ['./seedr.component.scss']
})
export class SeedrComponent implements OnInit {

  validateForm!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const { password = null, userName =null} = { ...this.validateForm.value}
      localStorage.setItem("pwd", password);
      localStorage.setItem("usr", userName);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    const pwd = localStorage.getItem("pwd") || null;
    const usr = localStorage.getItem("usr") || null;
    this.validateForm = this.fb.group({
      mangnet: [null, [Validators.required]],
      userName: [usr, [Validators.required]],
      password: [pwd, [Validators.required]],
    });
    
  }

}
