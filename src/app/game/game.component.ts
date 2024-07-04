import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor() {
    this.game = new Game();
  }

  ngOnInit(): void {
    this.newGame();
    console.log(this.game);

  }

  newGame() {
    this.game = new Game();
  }

  pickCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() as string;;
      this.pickCardAnimation = true;
      this.game.playedCards.push(this.currentCard);
      console.log('New Card:' + this.currentCard);
      console.log('Game is', this.game);

      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1500);
    }
  }
}
