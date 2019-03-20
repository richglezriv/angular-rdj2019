import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { ProfileService } from "../profile.service";

enum ClientType {
  String = 0,
  Numeric = 1
}

@Component({
  selector: 'app-profile-detail',
  templateUrl: 'app-profile-detail.component.html'
})
export class AppProfileDetailComponent implements OnInit {

  private profile: any;

  constructor(public profileService: ProfileService) {
  }

  profileForm: FormGroup;

  ngOnInit() {

    const metadata = [
      { propertyName: 'name', clientType: ClientType.String },
      { propertyName: 'lastName', clientType: ClientType.String },
      { propertyName: 'phone', clientType: ClientType.String },
      { propertyName: 'mobile', clientType: ClientType.String },
      { propertyName: 'email', clientType: ClientType.String },
    ];
    let formControls: { [key: string]: AbstractControl } = {};
    metadata.map(m => m.propertyName)
      .forEach(m => formControls[m] = new FormControl());
    this.profileForm = new FormGroup(formControls);

    this.profileService.selectedProfile$
      .pipe(filter(p => p != null))
      .subscribe(p => {
        this.profile = p;
        console.log(this.profile);
        metadata.map(m => m.propertyName)
          .forEach(m => this.profileForm.controls[m].setValue(this.profile[m].toString()));
      });
      //this.profileForm.controls['email'].setValue('mymail@gmial.com');
    // {"id":353,"profileNumber":"RDJCH-BSA054227B","name":"JESUS ANTONIO ","lastName":"AMEZCUA PALOMARES ","phone":"Casa 589.46.31","mobile":null,"email":null,"streetId":15,"placeTypeId":2,"apple":"54","lot":"105","interiorNo":null,"exteriorNo":"227B","status":"Debe desde FEBRUARY/2019 hasta MARCH/2019","lastPayment":{"id":35043,"reference":"","paymentType":"Quote","year":"2019","period":"Jan a Jan del 2019, ","amount":500.0000,"paymentDate":"2019-01-18T00:00:00","currentStatus":"Debe desde FEBRUARY/2019 hasta MARCH/2019"},"payments":null,"notes":[{"id":258,"note":"CASA: Antecedente en expediente de Nov.2012. Sólo falta comp. De Ago.2015 (Colono dice ya haberlo traído). Adeuda Mayo 2016","creationDate":"2016-05-04T11:36:00","profileId":353,"profileNoteType":0},{"id":718,"note":"Rbo 1927","creationDate":"2016-06-06T13:45:00","profileId":353,"profileNoteType":0},{"id":2206,"note":"Rbo 2030","creationDate":"2016-07-15T12:51:00","profileId":353,"profileNoteType":0},{"id":3218,"note":"Rbo 2093","creationDate":"2016-08-10T21:55:00","profileId":353,"profileNoteType":0},{"id":11424,"note":"Pago con tarj. cred. 4475 el dia 14.01.17","creationDate":"2017-02-16T12:18:00","profileId":353,"profileNoteType":0},{"id":11425,"note":"Paga con tarj. cred. 4475 Bancomer.","creationDate":"2017-02-16T12:23:00","profileId":353,"profileNoteType":0},{"id":13478,"note":"Pago con tarjeta credito 4475","creationDate":"2017-03-14T12:51:00","profileId":353,"profileNoteType":0},{"id":16493,"note":"Paga con tarj. credito 4475 Bancomer.","creationDate":"2017-04-20T13:07:00","profileId":353,"profileNoteType":0},{"id":18506,"note":"tarjj. cred. 4475 bancomer","creationDate":"2017-05-17T12:30:00","profileId":353,"profileNoteType":0},{"id":18662,"note":"tarj. credito 4475 bancomer.","creationDate":"2017-06-16T12:11:00","profileId":353,"profileNoteType":0},{"id":21684,"note":"Tarj.  crédito 4475 bancomer.","creationDate":"2017-07-21T13:56:00","profileId":353,"profileNoteType":0},{"id":21685,"note":"tarj. crédito 4475 bancomer","creationDate":"2017-07-21T13:59:00","profileId":353,"profileNoteType":0},{"id":23682,"note":"tarjeta de crédito 4475 bancomer,.","creationDate":"2017-08-17T12:39:00","profileId":353,"profileNoteType":0},{"id":24693,"note":"tarjeta crédito 4475 bancomer.","creationDate":"2017-09-18T12:56:00","profileId":353,"profileNoteType":0},{"id":25744,"note":"tarj. cred. 4475 bancomer.","creationDate":"2017-10-17T11:37:00","profileId":353,"profileNoteType":0},{"id":30785,"note":"tarjeta credtio 4475 bancomer.","creationDate":"2017-12-18T13:55:00","profileId":353,"profileNoteType":0},{"id":31965,"note":"pago con tarjeta de credito terminacion 4475 visa bancomer ","creationDate":"2018-01-22T12:29:00","profileId":353,"profileNoteType":0},{"id":32072,"note":"tarjeta débito 8160 hsbc","creationDate":"2018-02-21T09:39:00","profileId":353,"profileNoteType":0},{"id":32152,"note":"Boulevard el salto Esquina con prol. Naolinco. Colono al corriente. Recibos anteriores como Prolongación Naolinco pero se requirió corrección de domicilio (presentó pago de predial con el domicilio correcto).","creationDate":"2018-03-14T12:28:00","profileId":353,"profileNoteType":0},{"id":32170,"note":"tarjeta crédito 4475 bancomer este recibo cancela y sustituye al 0245 del 21.03.18","creationDate":"2018-03-21T12:10:00","profileId":353,"profileNoteType":0},{"id":32228,"note":"tarjeta crédito 4475 bancomer","creationDate":"2018-04-24T11:51:00","profileId":353,"profileNoteType":0},{"id":32289,"note":"tarjeta débito 8160 hsbc","creationDate":"2018-05-21T12:54:00","profileId":353,"profileNoteType":0},{"id":32401,"note":"tarjeta débito 8160 hsbc","creationDate":"2018-07-20T13:26:00","profileId":353,"profileNoteType":0},{"id":33448,"note":"tarj. crédito 4475 ","creationDate":"2018-08-22T13:13:00","profileId":353,"profileNoteType":0}],"streetName":"Boulevard el Salto"}
  }
}