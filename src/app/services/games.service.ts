import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from '../class/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  // Game entity-class CRUD path
  private gameRoute: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.gameRoute = 'http://localhost:8080/games';
  }

  // Create Games
  public postGame(game: Games): Observable<Games> {
    return this.http.post<Games>(this.gameRoute, game, this.httpOptions);
  }

  // Read All Games
  public async getAllGames(): Promise<any> {
    let games = await this.http.get(this.gameRoute).toPromise();

    return games;
  }

  // Read Game
  public async getGame(id: number): Promise<any> {
    return await this.http.get<Games>(this.gameRoute + "/" + id).toPromise();
  }

  // Delete Game
  public deleteGame(id: number): Observable<Games> {
    let game: any = this.http.delete(this.gameRoute + "/" + id, { responseType: 'text' });

    return game;
  }
}
