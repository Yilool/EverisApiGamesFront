import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Games } from 'src/app/class/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  gameFormContent: FormGroup;
  game: Games;
  loading: boolean

  constructor(private gamesServices: GamesService, private formBuild: FormBuilder) {
    this.game = {
      title: null,
      relDate: null,
      category: null,
    };
    this.loading = true;
  }

  ngOnInit(): void {
    this.gameFormContent = this.formBuild.group({
      id: ['']
    })
  }

  public async onGet() {
    let id = this.gameFormContent.get('id').value
    this.game = await this.gamesServices.getGame(id);
    this.loading = false;
    this.gameFormContent.reset();
  }
}
