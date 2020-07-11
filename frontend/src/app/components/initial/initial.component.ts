import { Component, OnInit } from '@angular/core';
import { Player } from '../initial/players';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service'

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  player: Player = {
    name: '',
    points: null
  }

  constructor(private router: Router, private playerService: PlayerService) {
    
   }

  ngOnInit(): void {}

  /*Tentativa de função para criar o jogador no ato de entrada no jogo e direcionar para o board do jogo*/ 
  createPlayer(player): void{
    this.playerService.create(player).subscribe(() => this.router.navigate(['/board']))
  }
}
