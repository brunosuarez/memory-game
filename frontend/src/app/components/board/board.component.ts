import { Component, OnInit } from '@angular/core';
import arrayCards from './cards';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cards = []

  private card1
  private card2
  public score = 0
  public round = 0

  constructor() { }

  ngOnInit(): void {
    this.cards = arrayCards
    this.cards.sort(() => Math.random() - 0.5)
  }

  showCard(card){
    if(card.point) return

    card.showCard = !card.showCard

    if(!this.card1){
      this.card1 = card
      return 
    }

    if(!this.card2){
      this.card2 = card
      this.checkPar() 
      this.countRound()
    }
  }

  checkPar(){
    console.log(this.card1, this.card2)
    if(this.card1.nome == this.card2.nome){
      this.countPoint()
      return
    }
    this.turnCard()
  }

  turnCard(){
    this.card1 = null;
    this.card2 = null;
    setTimeout(() => {
      this.cards.forEach(card => {
        card.showCard = card.point
      })
    },500)
  }

  countPoint(){
    this.card1.point = true
    this.card2.point = true
    this.turnCard()
    this.score++
    if(this.score == 10){
      alert('Você venceu usando' + `${this.round}` + ' rodadas, Parabéns!')
    }
  }

  countRound(){
    this.round++
  }

  resetGame(){
    this.round = 0, 
    this.score = 0,
    this.cards.forEach(card => {
      card.showCard = false
      card.point = false
    })
    this.cards.sort(() => Math.random() - 0.5)
  }
}
