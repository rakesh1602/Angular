import { Injectable } from '@angular/core';
import{ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toaster: ToastrService) { }

  showSucces(message: string | undefined, title: string | undefined){
    this.toaster.success(message, title)
   
  }

  showError(message: string | undefined, title: string | undefined){
    this.toaster.error(message, title)
  }
}
