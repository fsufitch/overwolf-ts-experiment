/// <reference path="../../typings/index.d.ts" />
/// <reference path="../custom_typings/index.d.ts" />

import * as $ from 'jquery';

import { GameInfoService } from './game-info';

function bootstrapMainWindow() {
  let mainWindowHtml = require('../html/main_window.html');
  $('body').html(mainWindowHtml);
}

$(() => {
  bootstrapMainWindow();
  new GameInfoService().listen();
});
