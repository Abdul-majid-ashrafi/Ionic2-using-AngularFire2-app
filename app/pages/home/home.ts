import {Page} from 'ionic-angular';
import {AngularFire} from 'angularfire2';

import {Observable} from 'rxjs/Observable';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
   videoItems: Observable<any[]>;
    constructor(public af:AngularFire){
      this.videoItems=af.list('female/')
    }
}
