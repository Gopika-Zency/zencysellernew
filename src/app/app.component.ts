import { Component } from '@angular/core';
import { HeaderComponent } from "./components/components/header/header.component";
import { FooterComponent } from "./components/components/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FooterComponent,RouterModule]
})
export class AppComponent {
  title = 'zencyang';
}
