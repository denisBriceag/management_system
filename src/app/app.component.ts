import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { authAnimation } from './shared/animations/authanimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [authAnimation],
})
export class AppComponent {
  public prepareRoute(outlet: RouterOutlet): RouterOutlet {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData['state']
    );
  }

  // public getState(outlet: RouterOutlet): RouterOutlet {
  //   return outlet.activatedRouteData['state'];
  // }
}
