import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration complete!');
    }, error => {
      console.log(`error occurred ${error}`);
    });
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
