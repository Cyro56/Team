// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { listeners } from "process";

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  var total = 0;
  for(var i = 0; i < birdsPerDay.length; i++){
    total += birdsPerDay[i]
  }
  return total
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  var totals = 0;
  for(var i = 7*(week-1); i < 7*week; i++){
    totals += birdsPerDay[i]    
  }
  return totals
  }

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */

export function fixBirdCountLog(birdsPerDay) {
 
  for(var i=0; i < birdsPerDay.length ; i++){
    if(i %2 == 0){
      birdsPerDay[i] += 1    
           
    }
      
      
  }
    
  return birdsPerDay
}



