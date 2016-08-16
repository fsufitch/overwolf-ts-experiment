
interface GameInfo {
  isInFocus: boolean;
  isRunning: boolean;
  allowsVideoCapture: boolean;
  title: string;
  id: number;
  width: number;
  height: number;
  logicalWidth: number;
  logicalHeight: number;
  renderers: string[];
  detectedRenderer: string;
  executionPath: string;
  sessionId: string;
  commandLine: string;
}

interface GameInfoChangeData {
  gameInfo: GameInfo;
  resolutionChanged: boolean;
  focusChanged: boolean;
  runningChanged: boolean;
  gameChanged: boolean;
}

declare interface OverwolfGames {
  getRunningGameInfo(cb: (gameInfo: GameInfo) => void): void;
}
