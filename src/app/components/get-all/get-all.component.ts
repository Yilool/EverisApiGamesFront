import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Games } from 'src/app/class/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  games: Games[];
  loading: boolean

  constructor (private gameService: GamesService) {
    this.loading = true;
  }

  async ngOnInit() {
    this.games = await this.gameService.getAllGames();

    this.loading = false;
  }
}
