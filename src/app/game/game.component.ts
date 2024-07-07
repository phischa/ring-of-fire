import { Component, OnInit, inject, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Game } from '../../models/game';
import { PlayerComponent } from '../../app/player/player.component';
import { GameInfoComponent } from '../../app/game-info/game-info.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, GameInfoComponent, MatButtonModule, MatIconModule,],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;
  readonly dialog = inject(MatDialog);

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
      this.currentCard = this.game.stack.pop() as string;
      this.pickCardAnimation = true;
      this.game.playedCards.push(this.currentCard);
      console.log('New Card:' + this.currentCard);
      console.log('Game is', this.game);
      this.currentPlayer();

      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1500);
    }
  }

  currentPlayer() {
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}
