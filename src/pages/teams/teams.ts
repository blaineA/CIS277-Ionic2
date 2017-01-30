import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../pages/pages';
import { TeamDetailPage } from '../pages/pages';
/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }

  itemTapped(){
    this.navCtrl.push(TeamDetailPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

}
