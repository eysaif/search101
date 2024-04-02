import { AppHttpService } from './../../services/appHttpService';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Constants } from 'src/app/utils/constant';

@Component({
  selector: 'app-seedr',
  templateUrl: './seedr.component.html',
  styleUrls: ['./seedr.component.scss'],
})
export class SeedrComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  isLoading: boolean = false;

  submitForm(): void {
    if (this.validateForm.valid) {
      const {
        password = null,
        userName = null,
        magnet = '',
      } = { ...this.validateForm.value };
      localStorage.setItem('pwd', password);
      localStorage.setItem('usr', userName);
      this.saveData({ usr: userName, pwd: password, magnet: magnet });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: UntypedFormBuilder,
    private appService: AppHttpService,
    private message: NzMessageService
  ) {}

  saveData(data: any) {
    this.isLoading = true;
    const URL = Constants.SEEDR_API_URL + `seedr/add`;
    this.appService.postData(URL, data).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.message.create('success', `Magnet Added Successfuly!`);
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
        this.message.create('error', `Somthing Went Wrong. `);
      }
    );
  }
  ngOnInit(): void {
    const pwd = localStorage.getItem('pwd') || null;
    const usr = localStorage.getItem('usr') || null;
    this.validateForm = this.fb.group({
      magnet: [null, [Validators.required]],
      userName: [usr, [Validators.required]],
      password: [pwd, [Validators.required]],
    });
  }
 
}
