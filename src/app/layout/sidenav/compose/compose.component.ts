import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {
  constructor(private notifyService: NotificationService, private _snackBar:MatSnackBar) {}

  showToasterSuccess() {
    this.notifyService.showSucces('Mail send succesfully !!', '');
  }

  showToasterError() {
    this.notifyService.showError('Mail Discarded', '');
  }

  openSnackBar(){
    this._snackBar.open('Mail Send Succesfully !!', 'Undo')
  }

  errorSnackBar(){
    this._snackBar.open('Message Discarded !!', 'Undo')

  }


  

  ngOnInit(): void {}
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  matlabel = [
    {
      label: 'TO',
    },
    {
      label: 'CC',
    },
    {
      label: 'BCC',
    },
  ];

  button = [
    {
      icon: 'fa fa-bold',
    },

    {
      icon: 'fa fa-italic',
    },
    {
      icon: 'fa fa-underline',
    },
    {
      icon: 'fa fa-align-left',
    },
    {
      icon: 'fa fa-align-right',
    },
    {
      icon: 'fa fa-align-center',
    },
    {
      icon: 'fa fa-align-justify',
    },
    {
      icon: 'fa fa-trash-o',
    },
    {
      icon: 'fa fa-paperclip',
    },
  ];
}
