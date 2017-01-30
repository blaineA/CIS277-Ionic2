import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Teams} from '../pages/pages';

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  itemTapped(){
    this.navCtrl.push(Teams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

}
