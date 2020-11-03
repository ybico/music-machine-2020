import '../imports/api/musicMachine.js';

// MusicMachine.remove({});
if (MusicMachine.find().count() === 0) {
  MusicMachine.insert({slide: 50, startdac: 0, dance: 0, dreams: 0, dubstep: 0, endlessmotion: 0, erf: 0, 
  	house: 0, moose: 0, popdance: 0, scifi: 0, summer: 0,});
}
