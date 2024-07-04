import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { GameComponent } from '../../app/game/game.component'; */

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, /* GameComponent */],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit {
  @Input() name!: string;

  constructor() {
  }

  ngOnInit(): void {

  }

}
