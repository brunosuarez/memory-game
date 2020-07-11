/*
Tentativa de criar um service para que o nome do usuário(a) fosse criado no ato de entrada no jogo
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../components/initial/players'

@Injectable({
  providedIn: 'root'
})

export class PlayerService{

  private apiUrl: 'http://localhost:3001/players'

  constructor(private http: HttpClient) { }

  create(player: Player){
    return this.http.post<Player>(this.apiUrl, player)
  }

}
