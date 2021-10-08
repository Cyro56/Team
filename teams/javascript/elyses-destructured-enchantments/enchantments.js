/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  return deck.shift() //o método .shift() retorna e remove o primeiro elemento de um array, esse método modifica o array original
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  var reduceList = deck.shift()
  return deck.shift()            //tive que reduzir o tamanho da lista par usar o método .shift() para retornar o segundo item do array original por exigência do exercício
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  var firstNumber = deck.shift()
  deck.splice(1,0,firstNumber)
  return deck 
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  const[a,...items] = deck
  return [a, items]
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  const FACE_CARDS = ['jack', 'queen', 'king'];
  deck[0] = deck[0]                             //Afirmando o óbvio para q a lista vazia tenha o valor "undefined" atribuído á posição 0
  deck.splice(1,0,...FACE_CARDS)
  return deck

}
