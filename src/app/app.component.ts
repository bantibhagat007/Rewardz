import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core/shared/header/header.component';
import { FooterComponent } from './core/shared/footer/footer.component';
import { RewardListComponent } from './core/components/reward-list/reward-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, FooterComponent, RewardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sample';

  constructor() { }

}
