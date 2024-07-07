import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameComponent } from '../game/game.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [GameComponent, FormsModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule,
    MatDialogModule, ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = '';
  readonly dialogRef = inject(MatDialogRef<DialogAddPlayerComponent>)

  onNoClick() {
    this.dialogRef.close();
  }
}
