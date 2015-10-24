//import {computedFrom} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {Router} from 'aurelia-router';

export class Welcome {
  static inject() { return [Router,Validation]; }

  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'Neha';
  lastName = 'Abrol';
  previousValue = this.fullName;
  error = " ";


 constructor(router,validation) {

   this.theRouter = router;
   this.validation = validation.on(this)
    .ensure('firstName')
      .isNotEmpty();

 }

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corrresponding import above.
  //@computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {

    this.validation.validate() //the validate will fulfil when validation is valid, and reject if not
      .then((isValid) => {
         this.heading = this.heading + this.fullName;
         setTimeout(
           () =>  {this.theRouter.navigate("users");},
            5000);
     },()=>{
      this.error = "Fisrt Name cannot be blank";
      setTimeout(
      () => { this.error =" " ; },
      5000);
    });

  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}