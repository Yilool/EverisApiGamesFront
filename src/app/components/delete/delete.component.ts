import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Games } from 'src/app/class/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  gameFormContent: FormGroup;
  game: Games;
  loading: boolean

  constructor(private formBuild: FormBuilder, private gameService: GamesService) {
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

  onDel() {
    let id = this.gameFormContent.get('id').value
    let res = confirm(`Are you sure to delete game with id ${id}?`)

    if (res)
      alert("Usted aceptó.");
    else
      alert("Usted no aceptó.");

    if (res) {
      this.gameService.deleteGame(id).subscribe((response) => {
        alert(`Game ${id} Delete!!!: ${response}`);
      });
      this.loading = false;
      this.gameFormContent.reset();
    } else {
      alert(`Game ${id} won´t be delete`);
    }
  }
}
