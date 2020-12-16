import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Games } from 'src/app/class/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  gameFormContent: FormGroup;
  game: Games;
  loading: boolean

  constructor(private formBuild: FormBuilder, private gameService: GamesService) {
    this.game = {
      title: null,
      relDate: null,
      category: null,
      gender: null,
    };
    this.loading = true;
  }

  ngOnInit(): void {
    this.gameFormContent = this.formBuild.group({
      title: [''],
      relDate: [''],
      category: [''],
      gender: [''],
    })
  }

  onPost() {
    this.game.title = this.gameFormContent.get('title').value;
    this.game.relDate = this.gameFormContent.get('relDate').value;
    this.game.category = this.gameFormContent.get('category').value;
    this.game.gender = this.gameFormContent.get('gender').value;
    
    this.gameService.postGame(this.game).subscribe((response) => {
      alert('Juego creado!');
    });
    
    this.loading = false;
    this.gameFormContent.reset();
  }
}
