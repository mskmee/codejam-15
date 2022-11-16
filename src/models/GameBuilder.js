import {CreatorElements} from "@models/CreatorElements";
import {MenuButton} from "@models/MenuButton";
import {GameField} from "@models/GameField";
import {GameData} from "@models/GameData";
import {MusicPlayer} from "@models/MusicPlayer";
import {Menu} from "@models/Menu";
import {MatrixCreator} from "@models/MatrixCreator";
import {PopUp} from "@models/PopUp";
import {OptionsModel} from "@models/OptionsModel";
import {ScoreBoard} from "@models/ScoreBoard";

export class GameBuilder extends CreatorElements{
    constructor(matrixLength) {
        super(document.body, 'div', '', "main__window");
        this.gameOptions = new OptionsModel(matrixLength);
        this.menuButton = new MenuButton(this.element, this.openMenu);
        this.matrixCreator = new MatrixCreator(this.gameOptions.matrixLength, this.gameOptions.matrix)
        this.audio = new MusicPlayer(this.element, this.gameOptions);
        this.gameData = new GameData(this.element, this.gameOptions.timerCount, this.gameOptions.movesCount);
        this.gameField = new GameField(this.element, this.matrixCreator.matrix, this.matrixCreator.matrixComplete,
            this.gameData, this.audio);
        const mainMenuData = ["New game", "Save", "Load", "Music", "Game mode", "Score board", "Close menu"];
        this.menu = new Menu(this.element, mainMenuData, (e) => this.menuLogic(e));
    }

    openMenu = () => {
        if(!this.menu.option.classList.contains("_active")){
            clearInterval(this.gameField.t)
            this.menu.option.classList.add("_active")
            this.createSubMenu();
        }else{
            this.menu.option.classList.remove("_active");
            if(this.timerOn){
                this.gameField.gameData.time = this.gameField.gameData.timeForSave;
                this.gameField.t = this.timer();
            }
        }
        this.audio.menuSoundStart();
    }

    createSubMenu = () => {
        const musicOptions = ["Sound", "Music", "Main menu"];
        const gameOptionsChoose = ["3x3", "4x4", "5x5", "6x6", "7x7", "8x8", "Main menu"];
        this.subMenuMusicOptions = new Menu(this.element, musicOptions,
            (e) => this.initSubMenuLogic(e, this.subMenuMusicOptions), "menu__sub__list");
        this.subMenuGameOptions = new Menu(this.element, gameOptionsChoose,
            (e) => this.initSubMenuLogic(e , this.subMenuGameOptions), "menu__sub__list");
        this.subMenuScoreBoard = new ScoreBoard (this.gameOptions.getWinners(),
            (e) => {
                this.menu.option.style.opacity = '1';
                this.subMenuScoreBoard.table.classList.remove('_active');
            });
    }

    initSubMenuLogic = (e, thisOption) => {
        switch (e.target.textContent.toLowerCase()){
            case "sound":
                this.gameOptions.soundPlay = !this.gameOptions.soundPlay;
                if(this.gameOptions.soundPlay){
                    new PopUp('sound turn on');
                }else{
                    new PopUp('sound turn off');
                }
                break
            case "music":
                this.gameOptions.musicPlay = !this.gameOptions.musicPlay;
                if(this.gameOptions.musicPlay){
                    new PopUp('music turn on');
                    this.audio.musicStart();
                }else{
                    new PopUp('music turn off');
                    this.audio.musicStopPlay();
                }
                break
            case "3x3":
                this.changeGameMode("3x3")
                break
            case "4x4":
                this.changeGameMode("4x4")
                break
            case "5x5":
                this.changeGameMode("5x5")
                break
            case "6x6":
                this.changeGameMode("6x6")
                break
            case "7x7":
                this.changeGameMode("7x7")
                break
            case "8x8":
                this.changeGameMode("8x8")
                break
            default:
                if(thisOption.option.classList.contains("_active")){
                    thisOption.option.classList.remove("_active");
                    this.menu.option.style.opacity = "1";
                }
        }
        this.audio.menuSoundStart();
    }

    menuLogic = (e) => {
        switch (e.target.textContent.toLowerCase()){
            case "load":
                const obj = this.gameOptions.getSaveGame();
                if(obj){
                    this.gameData.element.remove();
                    this.gameField.element.remove();
                    this.gameData = new GameData(this.element, +obj.timer, +obj.moves);
                    this.gameField = new GameField(this.element, obj.matrix, obj.complete,
                        this.gameData, this.audio);
                    new PopUp('game was loaded')
                }else{
                    new PopUp("can't find you game, try to clear local storage and save again")
                }
                break;
            case "save":
                const saveGame = new OptionsModel(this.matrixCreator.matrix.length, this.matrixCreator.matrix,
                    this.matrixCreator.matrixComplete, this.gameField.gameData.timeForSave, this.gameData.count,
                    this.gameOptions.musicPlay, this.gameOptions.soundPlay);
                saveGame.saveGame();
                new PopUp("the game was saved");
                break;
            case "music":
                this.menuMusic();
                break;
            case "new game":
                this.menuNewGame();
                break
            case "game mode":
                this.menuGameMode();
                break
            case "score board":
                this.menuScoreBoard();
                break
            default:
                this.menu.option.classList.remove("_active");
                if(this.gameField.timerOn){
                    this.gameField.gameData.time = this.gameField.gameData.timeForSave;
                    this.gameField.t = this.gameField.timer();
                }
                break;
        }
        this.audio.menuSoundStart();
    }

    changeGameMode = (text) => {
        this.element.remove();
        new GameBuilder(+text.split("x")[0]);
        new PopUp(`game ${text} was started`);
    }

    menuNewGame = () => {
        this.element.remove();
        const newGame = new GameBuilder();
        new PopUp('new game have been started')
    }

    menuGameMode = () => {
        this.menu.option.style.opacity = '0';
        this.subMenuGameOptions.option.classList.add("_active");
    }

    menuMusic = () => {
        this.menu.option.style.opacity = '0';
        this.subMenuMusicOptions.option.classList.add("_active");
    }

    menuScoreBoard = () => {
        this.menu.option.style.opacity = '0';
        this.subMenuScoreBoard.table.classList.add("_active");
    }
}