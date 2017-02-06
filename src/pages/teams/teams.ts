import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../pages';
import { TeamHomePage } from '../pages';
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

  teams = [
          { id: 1, name: 'HC Elite' },
          { id: 2, name: 'Team Takeover' },
          { id: 3, name: 'DC Thunder' }
      ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }

  itemTapped($event, team){
    this.navCtrl.push(TeamHomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

}
