import { Component, Input } from '@angular/core';
import { Reward } from '../../interfaces/reward.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reward-card',
  imports: [CommonModule],
  templateUrl: './reward-card.component.html',
  styleUrl: './reward-card.component.scss'
})
export class RewardCardComponent {
  @Input() reward!: Reward;
}
