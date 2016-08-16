import * as $ from 'jquery';

export class GameInfoService {
  gameNameElement: JQuery;
  constructor() {
    this.gameNameElement = $('#now-playing-name');
    console.log(this.gameNameElement);
  }

  listen() {
    console.log('listening');
    $('#refresh-button').click(() => overwolf.games.getRunningGameInfo((data) => this.updateData(data)));
  }

  private updateData(data: GameInfo) {
    console.log('game info', data);
    let gameName = data ? data.title : 'No game running';
    this.gameNameElement.text(gameName);
  }
}
