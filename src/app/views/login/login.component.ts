import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from 'ng4-social-login';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  providers: [AuthService]
})
export class LoginComponent {
  public user: any = SocialUser;
  LoginFrom: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private socialService: AuthService) {
    this.LoginFrom = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  onSubmit(LoginForm) {
    console.log("LoginForm", LoginForm);

  }
  RegisterPage() {
    this.router.navigate(["/register"])
  }

  // facebookLogin code
  facebookLogin() {
    this.socialService.signIn(FacebookLoginProvider.PROVIDER_ID).then(fbData => {
      this.user = fbData;
    })
  }
  // googleLogin code
  googleLogin() {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(gglData => {
      this.user = gglData;
    })
  }
  // linkedIndLogin code
  linkedIndLogin() {
    this.socialService.signIn(LinkedinLoginProvider.PROVIDER_ID).then(linkedData => {
      this.user = linkedData;
    })
  }


}
