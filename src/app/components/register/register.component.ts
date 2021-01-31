import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    }
    if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  constructor(
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private registerService: RegisterService,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      gender: ['M', [Validators.required]],
      birthdate: [new Date(946684800000), [Validators.required]],
      agree: [true],
    });
  }

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    console.log(this.validateForm.value);

    this.registerService.registerUser({
      userid: this.validateForm.value['username'],
      userPass: this.validateForm.value['password'],
      sex: this.validateForm.value['gender'],
      birthdate: this.validateForm.value['birthdate']?.toISOString() || new Date().toISOString(),
    }).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      },
    );
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(
      type,
      title,
      message,
    );
  }
}
