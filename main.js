/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/DOMController.js":
/*!*****************************************!*\
  !*** ./src/controller/DOMController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _entities_HitStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/HitStatus */ "./src/entities/HitStatus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
/* eslint-disable class-methods-use-this */

var _boardOne = /*#__PURE__*/new WeakMap();
var _boardTwo = /*#__PURE__*/new WeakMap();
var _startGameButton = /*#__PURE__*/new WeakMap();
var _switchHorizontalButton = /*#__PURE__*/new WeakMap();
var _restartGameButton = /*#__PURE__*/new WeakMap();
var _boardInit = /*#__PURE__*/new WeakMap();
var _NUMBER_OF_CELLS = /*#__PURE__*/new WeakMap();
var _isHorizontal = /*#__PURE__*/new WeakMap();
var _mapHandlers = /*#__PURE__*/new WeakSet();
var _initBoard = /*#__PURE__*/new WeakSet();
var _updateDOMBoard = /*#__PURE__*/new WeakSet();
var _updateGameStatus = /*#__PURE__*/new WeakSet();
var _toggleHorizontal = /*#__PURE__*/new WeakSet();
var _createBoardCell = /*#__PURE__*/new WeakSet();
var _updateCellMetaData = /*#__PURE__*/new WeakSet();
var _updateCellStatus = /*#__PURE__*/new WeakSet();
var DOMController = /*#__PURE__*/function () {
  function DOMController(_controllerAPI) {
    _classCallCheck(this, DOMController);
    _classPrivateMethodInitSpec(this, _updateCellStatus);
    _classPrivateMethodInitSpec(this, _updateCellMetaData);
    _classPrivateMethodInitSpec(this, _createBoardCell);
    _classPrivateMethodInitSpec(this, _toggleHorizontal);
    _classPrivateMethodInitSpec(this, _updateGameStatus);
    _classPrivateMethodInitSpec(this, _updateDOMBoard);
    _classPrivateMethodInitSpec(this, _initBoard);
    _classPrivateMethodInitSpec(this, _mapHandlers);
    _classPrivateFieldInitSpec(this, _boardOne, {
      writable: true,
      value: document.getElementById('board-one')
    });
    _classPrivateFieldInitSpec(this, _boardTwo, {
      writable: true,
      value: document.getElementById('board-two')
    });
    _classPrivateFieldInitSpec(this, _startGameButton, {
      writable: true,
      value: document.getElementById('start-game')
    });
    _classPrivateFieldInitSpec(this, _switchHorizontalButton, {
      writable: true,
      value: document.getElementById('horizontal-status')
    });
    _classPrivateFieldInitSpec(this, _restartGameButton, {
      writable: true,
      value: document.getElementById('restart-game')
    });
    _classPrivateFieldInitSpec(this, _boardInit, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _NUMBER_OF_CELLS, {
      writable: true,
      value: 100
    });
    _classPrivateFieldInitSpec(this, _isHorizontal, {
      writable: true,
      value: true
    });
    _classPrivateMethodGet(this, _initBoard, _initBoard2).call(this, _controllerAPI.doBoardActionHandler);
    _classPrivateMethodGet(this, _mapHandlers, _mapHandlers2).call(this, _controllerAPI);
  }
  _createClass(DOMController, [{
    key: "updateUI",
    value: function updateUI(gameStateData) {
      _classPrivateMethodGet(this, _updateDOMBoard, _updateDOMBoard2).call(this, gameStateData.playerOneGameboardData, gameStateData.playerTwoGameboardData);
    }
  }, {
    key: "getIsHorizontal",
    value: function getIsHorizontal() {
      return _classPrivateFieldGet(this, _isHorizontal);
    }
  }]);
  return DOMController;
}();
function _mapHandlers2(controllerAPI) {
  _classPrivateFieldGet(this, _startGameButton).addEventListener('click', controllerAPI.startGameHandler);
  _classPrivateFieldGet(this, _switchHorizontalButton).addEventListener('click', _classPrivateMethodGet(this, _toggleHorizontal, _toggleHorizontal2).bind(this));
  _classPrivateFieldGet(this, _restartGameButton).addEventListener('click', controllerAPI.restartRoundHandler);
}
function _initBoard2(doBoardActionHandler) {
  if (_classPrivateFieldGet(this, _boardInit) === true) return;
  for (var i = 0; i < _classPrivateFieldGet(this, _NUMBER_OF_CELLS); i += 1) {
    var newBoardCellOne = _classPrivateMethodGet(this, _createBoardCell, _createBoardCell2).call(this, doBoardActionHandler);
    var newBoardCellTwo = _classPrivateMethodGet(this, _createBoardCell, _createBoardCell2).call(this, doBoardActionHandler);
    _classPrivateFieldGet(this, _boardOne).appendChild(newBoardCellOne);
    _classPrivateFieldGet(this, _boardTwo).appendChild(newBoardCellTwo);
  }
  _classPrivateFieldSet(this, _boardInit, true);
}
function _updateDOMBoard2(gameboardOneData, gameboardTwoData) {
  for (var i = 0; i < _classPrivateFieldGet(this, _NUMBER_OF_CELLS); i += 1) {
    var nodeBoardOne = _classPrivateFieldGet(this, _boardOne).childNodes[i];
    var dataBoardOne = gameboardOneData.boardData[i];
    var nodeBoardTwo = _classPrivateFieldGet(this, _boardTwo).childNodes[i];
    var dataBoardTwo = gameboardTwoData.boardData[i];
    _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardOne, dataBoardOne);
    _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardTwo, dataBoardTwo);
    _classPrivateMethodGet(this, _updateCellMetaData, _updateCellMetaData2).call(this, nodeBoardOne, dataBoardOne, gameboardOneData.playerUserName);
    _classPrivateMethodGet(this, _updateCellMetaData, _updateCellMetaData2).call(this, nodeBoardTwo, dataBoardTwo, gameboardTwoData.playerUserName);
  }
}
function _updateGameStatus2(gameStateData) {}
function _toggleHorizontal2() {
  _classPrivateFieldSet(this, _isHorizontal, !_classPrivateFieldGet(this, _isHorizontal));
  _classPrivateFieldGet(this, _switchHorizontalButton).classList.toggle('button-active');
}
function _createBoardCell2(doBoardActionHandler) {
  var newCell = document.createElement('div');
  newCell.classList.add('board-cell');
  newCell.addEventListener('click', doBoardActionHandler);
  return newCell;
}
function _updateCellMetaData2(cellNode, cellData, playername) {
  var coord = cellData.getCoord();
  cellNode.setAttribute('data-coordx', coord.coordX);
  cellNode.setAttribute('data-coordy', coord.coordY);
  cellNode.setAttribute('data-playername', playername);
}
function _updateCellStatus2(cellNode, cellData) {
  if (!cellNode || !cellData) return;
  var node = cellNode;
  var data = cellData;
  var status = data.getHitStatus();
  switch (status) {
    case (0,_entities_HitStatus__WEBPACK_IMPORTED_MODULE_0__["default"])().NOT_HIT:
      {
        node.style.backgroundColor = '#FFFFFF';
        break;
      }
    case (0,_entities_HitStatus__WEBPACK_IMPORTED_MODULE_0__["default"])().HIT_SHIP:
      {
        node.style.backgroundColor = '#FF0000';
        break;
      }
    case (0,_entities_HitStatus__WEBPACK_IMPORTED_MODULE_0__["default"])().HIT_CELL:
      {
        node.style.backgroundColor = '#808080';
        break;
      }
    default:
      break;
  }

  // if(cellData.isOccupied) node.style.backgroundColor = '#000';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMController);

/***/ }),

/***/ "./src/controller/GameController.js":
/*!******************************************!*\
  !*** ./src/controller/GameController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _entities_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/Player */ "./src/entities/Player.js");
/* harmony import */ var _entities_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Ship */ "./src/entities/Ship.js");
/* harmony import */ var _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Gameboard */ "./src/entities/Gameboard.js");
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMController */ "./src/controller/DOMController.js");
/* harmony import */ var _entities_Coordinate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/Coordinate */ "./src/entities/Coordinate.js");
/* harmony import */ var _entities_DataPointContainers_GameStateDataBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/DataPointContainers/GameStateDataBuilder */ "./src/entities/DataPointContainers/GameStateDataBuilder.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






var _currentPlayer = /*#__PURE__*/new WeakMap();
var _isGameRunning = /*#__PURE__*/new WeakMap();
var _isRoundRunning = /*#__PURE__*/new WeakMap();
var _isPlayerOneTurn = /*#__PURE__*/new WeakMap();
var _playerOne = /*#__PURE__*/new WeakMap();
var _playerTwo = /*#__PURE__*/new WeakMap();
var _playerOneGameboard = /*#__PURE__*/new WeakMap();
var _playerTwoGameboard = /*#__PURE__*/new WeakMap();
var _DOMController = /*#__PURE__*/new WeakMap();
var _updateGameUI = /*#__PURE__*/new WeakSet();
var _getGameStateData = /*#__PURE__*/new WeakSet();
var _runRound = /*#__PURE__*/new WeakSet();
var _endGame = /*#__PURE__*/new WeakSet();
var _switchCurrentPlayer = /*#__PURE__*/new WeakSet();
var _getWinner = /*#__PURE__*/new WeakSet();
var _playerAttack = /*#__PURE__*/new WeakSet();
var _attackCell = /*#__PURE__*/new WeakSet();
var _playerPlaceShip = /*#__PURE__*/new WeakSet();
var _placeShip = /*#__PURE__*/new WeakSet();
var _getAPIContainer = /*#__PURE__*/new WeakSet();
var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);
    _classPrivateMethodInitSpec(this, _getAPIContainer);
    _classPrivateMethodInitSpec(this, _placeShip);
    _classPrivateMethodInitSpec(this, _playerPlaceShip);
    _classPrivateMethodInitSpec(this, _attackCell);
    // TODO: implement attack logic
    _classPrivateMethodInitSpec(this, _playerAttack);
    _classPrivateMethodInitSpec(this, _getWinner);
    _classPrivateMethodInitSpec(this, _switchCurrentPlayer);
    _classPrivateMethodInitSpec(this, _endGame);
    // To check if round should start once all ships have been placed
    _classPrivateMethodInitSpec(this, _runRound);
    _classPrivateMethodInitSpec(this, _getGameStateData);
    _classPrivateMethodInitSpec(this, _updateGameUI);
    _classPrivateFieldInitSpec(this, _currentPlayer, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _isGameRunning, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _isRoundRunning, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _isPlayerOneTurn, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _playerOne, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _playerTwo, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _playerOneGameboard, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _playerTwoGameboard, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _DOMController, {
      writable: true,
      value: null
    });
    _classPrivateFieldSet(this, _DOMController, new _DOMController__WEBPACK_IMPORTED_MODULE_3__["default"](_classPrivateMethodGet(this, _getAPIContainer, _getAPIContainer2).call(this)));
    _classPrivateFieldSet(this, _playerOneGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
    _classPrivateFieldSet(this, _playerTwoGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
    _classPrivateFieldSet(this, _playerOne, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player One'));
    _classPrivateFieldSet(this, _playerTwo, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player Two'));
    _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
    _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this);
  }

  // Callback to let other layers of program interact with our game controller
  _createClass(GameController, [{
    key: "doBoardActionHandler",
    value: function doBoardActionHandler(event) {
      if (_classPrivateFieldGet(this, _isGameRunning) === false) {
        return;
      }
      var cellNode = event.target;
      var isCellOwner = cellNode.dataset.playername === _classPrivateFieldGet(this, _currentPlayer).getPlayerName();
      var coordX = cellNode.dataset.coordx;
      var coordY = cellNode.dataset.coordy;
      var cellCoord = new _entities_Coordinate__WEBPACK_IMPORTED_MODULE_4__["default"](coordX, coordY);
      var isHorizontal = _classPrivateFieldGet(this, _DOMController).getIsHorizontal();
      switch (_classPrivateFieldGet(this, _isRoundRunning)) {
        case false:
          {
            // to let player place ships on HIS OWN board only
            if (isCellOwner === false) return;
            _classPrivateMethodGet(this, _playerPlaceShip, _playerPlaceShip2).call(this, cellCoord, isHorizontal);
            break;
          }
        case true:
          {
            // to let player attack ships on HIS OPPONENT'S board only
            if (isCellOwner === true) return;
            _classPrivateMethodGet(this, _playerAttack, _playerAttack2).call(this, cellCoord);
            break;
          }
        default:
          break;
      }
      _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this);
      console.log('ACTION');
    }
  }, {
    key: "startGameHandler",
    value: function startGameHandler(event) {
      if (_classPrivateFieldGet(this, _isGameRunning) === true) return false;
      console.log('START');
      _classPrivateFieldSet(this, _isGameRunning, true);
      return true;
    }
  }, {
    key: "restartRoundHandler",
    value: function restartRoundHandler(event) {
      _classPrivateFieldSet(this, _isGameRunning, false);
      _classPrivateFieldSet(this, _isRoundRunning, false);
      _classPrivateFieldSet(this, _playerOneGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
      _classPrivateFieldSet(this, _playerTwoGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
      _classPrivateFieldSet(this, _playerOne, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player One'));
      _classPrivateFieldSet(this, _playerTwo, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player Two'));
      _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
      _classPrivateFieldSet(this, _isPlayerOneTurn, true);
      _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this);
      console.log('RESTARTED');
    }
  }]);
  return GameController;
}();
function _updateGameUI2() {
  var gameStateData = _classPrivateMethodGet(this, _getGameStateData, _getGameStateData2).call(this);
  _classPrivateFieldGet(this, _DOMController).updateUI(gameStateData);
}
function _getGameStateData2() {
  var gameStateDataBuilder = new _entities_DataPointContainers_GameStateDataBuilder__WEBPACK_IMPORTED_MODULE_5__["default"]();
  var gameStateData = gameStateDataBuilder.setCurrentUserName(_classPrivateFieldGet(this, _currentPlayer).getPlayerName()).setIsGameRunning(_classPrivateFieldGet(this, _isGameRunning)).setIsRoundRunning(_classPrivateFieldGet(this, _isRoundRunning)).setIsPlayerOneTurn(_classPrivateFieldGet(this, _isPlayerOneTurn)).setPlayerOneUserName(_classPrivateFieldGet(this, _playerOne).getPlayerName()).setPlayerTwoUserName(_classPrivateFieldGet(this, _playerTwo).getPlayerName()).setPlayerOneGameboardData(_classPrivateFieldGet(this, _playerOneGameboard).getGameboardData(_classPrivateFieldGet(this, _playerOne).getPlayerName())).setPlayerTwoGameboardData(_classPrivateFieldGet(this, _playerTwoGameboard).getGameboardData(_classPrivateFieldGet(this, _playerTwo).getPlayerName())).build();
  return gameStateData;
}
function _runRound2() {
  if (_classPrivateFieldGet(this, _playerOne).getShips().length === 5 && _classPrivateFieldGet(this, _playerTwo).getShips().length === 5) {
    console.log('round is running');
    _classPrivateFieldSet(this, _isRoundRunning, true);
    _classPrivateFieldSet(this, _isPlayerOneTurn, true);
  }
}
function _endGame2(playerWinner) {
  if (playerWinner === null) return;
  _classPrivateFieldSet(this, _isGameRunning, false);
  _classPrivateFieldSet(this, _isRoundRunning, false);
}
function _switchCurrentPlayer2() {
  if (_classPrivateFieldGet(this, _isPlayerOneTurn)) {
    _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerTwo));
    console.log('PLAYER TWO TURN');
  } else {
    _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
    console.log('PLAYER ONE TURN');
  }
  _classPrivateFieldSet(this, _isPlayerOneTurn, !_classPrivateFieldGet(this, _isPlayerOneTurn));
}
function _getWinner2() {
  if (_classPrivateFieldGet(this, _playerOneGameboard).allShipsSunk() === true) {
    console.log('win');
    return _classPrivateFieldGet(this, _playerTwo);
  }
  if (_classPrivateFieldGet(this, _playerTwoGameboard).allShipsSunk() === true) {
    console.log('win');
    return _classPrivateFieldGet(this, _playerOne);
  }
  return null;
}
function _playerAttack2(coord) {
  _classPrivateMethodGet(this, _attackCell, _attackCell2).call(this, coord);
  _classPrivateMethodGet(this, _switchCurrentPlayer, _switchCurrentPlayer2).call(this);
  var winner = _classPrivateMethodGet(this, _getWinner, _getWinner2).call(this);
  if (winner !== null) {
    _classPrivateMethodGet(this, _endGame, _endGame2).call(this, winner);
    console.log("player ".concat(winner, " won"));
  }
}
function _attackCell2(coord) {
  if (_classPrivateFieldGet(this, _isRoundRunning) === false) return false;
  var currentBoard = null;
  if (_classPrivateFieldGet(this, _isPlayerOneTurn)) {
    currentBoard = _classPrivateFieldGet(this, _playerTwoGameboard);
  } else {
    currentBoard = _classPrivateFieldGet(this, _playerOneGameboard);
  }
  currentBoard.receiveAttack(coord);
  return true;
}
function _playerPlaceShip2(coord, isHorizontal) {
  _classPrivateMethodGet(this, _placeShip, _placeShip2).call(this, coord, isHorizontal);
  _classPrivateMethodGet(this, _runRound, _runRound2).call(this);
}
function _placeShip2(coord, isHorizontal) {
  if (_classPrivateFieldGet(this, _isRoundRunning)) return false;
  var currentBoard = null;
  var newShip = null;
  var isPlaced = false;
  if (_classPrivateFieldGet(this, _isPlayerOneTurn)) {
    currentBoard = _classPrivateFieldGet(this, _playerOneGameboard);
  } else {
    currentBoard = _classPrivateFieldGet(this, _playerTwoGameboard);
  }

  // To build ships in pre-determined pattern (5,4,3,3,2)
  switch (_classPrivateFieldGet(this, _currentPlayer).getShips().length) {
    case 0:
      {
        newShip = new _entities_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](coord, isHorizontal, 5);
        isPlaced = currentBoard.placeShip(newShip, isHorizontal, 5);
        break;
      }
    case 1:
      {
        newShip = new _entities_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](coord, isHorizontal, 4);
        isPlaced = currentBoard.placeShip(newShip, isHorizontal, 4);
        break;
      }
    case 2:
      {
        newShip = new _entities_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](coord, isHorizontal, 3);
        isPlaced = currentBoard.placeShip(newShip, isHorizontal, 3);
        break;
      }
    case 3:
      {
        newShip = new _entities_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](coord, isHorizontal, 3);
        isPlaced = currentBoard.placeShip(newShip, isHorizontal, 3);
        break;
      }
    case 4:
      {
        newShip = new _entities_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](coord, isHorizontal, 2);
        isPlaced = currentBoard.placeShip(newShip, isHorizontal, 2);
        break;
      }
    default:
      return false;
  }

  // Players should take turns after building their entire fleet
  if (isPlaced) {
    _classPrivateFieldGet(this, _currentPlayer).addShip(newShip);
    console.log('placed');
    console.log("current player ships ".concat(_classPrivateFieldGet(this, _currentPlayer).getShips().length));
    if (_classPrivateFieldGet(this, _currentPlayer).getShips().length === 5) {
      console.log('switch');
      _classPrivateMethodGet(this, _switchCurrentPlayer, _switchCurrentPlayer2).call(this);
    }
    return true;
  }
  return false;
}
function _getAPIContainer2() {
  return {
    startGameHandler: this.startGameHandler.bind(this),
    doBoardActionHandler: this.doBoardActionHandler.bind(this),
    restartRoundHandler: this.restartRoundHandler.bind(this)
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);

/***/ }),

/***/ "./src/entities/BoardCell.js":
/*!***********************************!*\
  !*** ./src/entities/BoardCell.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coordinate */ "./src/entities/Coordinate.js");
/* harmony import */ var _HitStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HitStatus */ "./src/entities/HitStatus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }


var _coord = /*#__PURE__*/new WeakMap();
var _ship = /*#__PURE__*/new WeakMap();
var _isOccupied = /*#__PURE__*/new WeakMap();
var _hasBeenHit = /*#__PURE__*/new WeakMap();
var BoardCell = /*#__PURE__*/function () {
  function BoardCell(coordX, coordY) {
    _classCallCheck(this, BoardCell);
    _classPrivateFieldInitSpec(this, _coord, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _ship, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _isOccupied, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _hasBeenHit, {
      writable: true,
      value: false
    });
    _classPrivateFieldSet(this, _coord, new _Coordinate__WEBPACK_IMPORTED_MODULE_0__["default"](coordX, coordY));
  }
  _createClass(BoardCell, [{
    key: "occupy",
    value: function occupy(ship) {
      if (_classPrivateFieldGet(this, _ship)) return false;
      _classPrivateFieldSet(this, _isOccupied, true);
      _classPrivateFieldSet(this, _ship, ship);
      return true;
    }
  }, {
    key: "hit",
    value: function hit() {
      if (_classPrivateFieldGet(this, _hasBeenHit) === true) return false;
      _classPrivateFieldSet(this, _hasBeenHit, true);
      if (_classPrivateFieldGet(this, _ship)) {
        _classPrivateFieldGet(this, _ship).tryHit(_classPrivateFieldGet(this, _coord));
      }
      return true;
    }
  }, {
    key: "getCoord",
    value: function getCoord() {
      return _classPrivateFieldGet(this, _coord);
    }
  }, {
    key: "getCoordString",
    value: function getCoordString() {
      return "X: ".concat(_classPrivateFieldGet(this, _coord).coordX, " Y: ").concat(_classPrivateFieldGet(this, _coord).coordY);
    }
  }, {
    key: "getHitStatus",
    value: function getHitStatus() {
      switch (_classPrivateFieldGet(this, _hasBeenHit)) {
        case false:
          {
            return (0,_HitStatus__WEBPACK_IMPORTED_MODULE_1__["default"])().NOT_HIT;
          }
        case true:
          {
            if (_classPrivateFieldGet(this, _ship)) {
              return (0,_HitStatus__WEBPACK_IMPORTED_MODULE_1__["default"])().HIT_SHIP;
            }
            return (0,_HitStatus__WEBPACK_IMPORTED_MODULE_1__["default"])().HIT_CELL;
          }
        default:
          return null;
      }
    }
  }, {
    key: "isOccupied",
    get: function get() {
      return _classPrivateFieldGet(this, _isOccupied);
    }
  }]);
  return BoardCell;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardCell);

/***/ }),

/***/ "./src/entities/Coordinate.js":
/*!************************************!*\
  !*** ./src/entities/Coordinate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _coordX = /*#__PURE__*/new WeakMap();
var _coordY = /*#__PURE__*/new WeakMap();
var Coordinate = /*#__PURE__*/function () {
  function Coordinate(coordX, coordY) {
    _classCallCheck(this, Coordinate);
    _classPrivateFieldInitSpec(this, _coordX, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _coordY, {
      writable: true,
      value: 0
    });
    _classPrivateFieldSet(this, _coordX, coordX);
    _classPrivateFieldSet(this, _coordY, coordY);
  }
  _createClass(Coordinate, [{
    key: "coordX",
    get: function get() {
      return Number.parseInt(_classPrivateFieldGet(this, _coordX), 10);
    }
  }, {
    key: "coordY",
    get: function get() {
      return Number.parseInt(_classPrivateFieldGet(this, _coordY), 10);
    }
  }]);
  return Coordinate;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Coordinate);

/***/ }),

/***/ "./src/entities/DataPointContainers/GameStateData.js":
/*!***********************************************************!*\
  !*** ./src/entities/DataPointContainers/GameStateData.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _currentPlayerUserName = /*#__PURE__*/new WeakMap();
var _isGameRunning = /*#__PURE__*/new WeakMap();
var _isRoundRunning = /*#__PURE__*/new WeakMap();
var _isPlayerOneTurn = /*#__PURE__*/new WeakMap();
var _playerOneUserName = /*#__PURE__*/new WeakMap();
var _playerTwoUserName = /*#__PURE__*/new WeakMap();
var _playerOneGameboardData = /*#__PURE__*/new WeakMap();
var _playerTwoGameboardData = /*#__PURE__*/new WeakMap();
var GameStateData = /*#__PURE__*/function () {
  function GameStateData() {
    _classCallCheck(this, GameStateData);
    _classPrivateFieldInitSpec(this, _currentPlayerUserName, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _isGameRunning, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _isRoundRunning, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _isPlayerOneTurn, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _playerOneUserName, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _playerTwoUserName, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _playerOneGameboardData, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _playerTwoGameboardData, {
      writable: true,
      value: void 0
    });
  }
  _createClass(GameStateData, [{
    key: "currentUserName",
    get: function get() {
      return _classPrivateFieldGet(this, _currentPlayerUserName);
    },
    set: function set(currentUserName) {
      _classPrivateFieldSet(this, _currentPlayerUserName, currentUserName);
    }
  }, {
    key: "isGameRunning",
    get: function get() {
      return _classPrivateFieldGet(this, _isGameRunning);
    },
    set: function set(isGameRunning) {
      _classPrivateFieldSet(this, _isGameRunning, isGameRunning);
    }
  }, {
    key: "isRoundRunning",
    get: function get() {
      return _classPrivateFieldGet(this, _isRoundRunning);
    },
    set: function set(isRoundRunning) {
      _classPrivateFieldSet(this, _isRoundRunning, isRoundRunning);
    }
  }, {
    key: "isPlayerOneTurn",
    get: function get() {
      return _classPrivateFieldGet(this, _isPlayerOneTurn);
    },
    set: function set(isPlayerOneTurn) {
      _classPrivateFieldSet(this, _isPlayerOneTurn, isPlayerOneTurn);
    }
  }, {
    key: "playerOneUserName",
    get: function get() {
      return _classPrivateFieldGet(this, _playerOneUserName);
    },
    set: function set(playerOneUserName) {
      _classPrivateFieldSet(this, _playerOneUserName, playerOneUserName);
    }
  }, {
    key: "playerTwoUserName",
    get: function get() {
      return _classPrivateFieldGet(this, _playerTwoUserName);
    },
    set: function set(playerTwoUserName) {
      _classPrivateFieldSet(this, _playerTwoUserName, playerTwoUserName);
    }
  }, {
    key: "playerOneGameboardData",
    get: function get() {
      return _classPrivateFieldGet(this, _playerOneGameboardData);
    },
    set: function set(playerOneGameboardData) {
      _classPrivateFieldSet(this, _playerOneGameboardData, playerOneGameboardData);
    }
  }, {
    key: "playerTwoGameboardData",
    get: function get() {
      return _classPrivateFieldGet(this, _playerTwoGameboardData);
    },
    set: function set(playerTwoGameboardData) {
      _classPrivateFieldSet(this, _playerTwoGameboardData, playerTwoGameboardData);
    }
  }]);
  return GameStateData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameStateData);

/***/ }),

/***/ "./src/entities/DataPointContainers/GameStateDataBuilder.js":
/*!******************************************************************!*\
  !*** ./src/entities/DataPointContainers/GameStateDataBuilder.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameStateData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameStateData */ "./src/entities/DataPointContainers/GameStateData.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _gameStateData = /*#__PURE__*/new WeakMap();
var GameStateDataBuilder = /*#__PURE__*/function () {
  function GameStateDataBuilder() {
    _classCallCheck(this, GameStateDataBuilder);
    _classPrivateFieldInitSpec(this, _gameStateData, {
      writable: true,
      value: null
    });
    _classPrivateFieldSet(this, _gameStateData, new _GameStateData__WEBPACK_IMPORTED_MODULE_0__["default"]());
  }
  _createClass(GameStateDataBuilder, [{
    key: "setCurrentUserName",
    value: function setCurrentUserName(currentUserName) {
      _classPrivateFieldGet(this, _gameStateData).currentPlayerUserName = currentUserName;
      return this;
    }
  }, {
    key: "setIsGameRunning",
    value: function setIsGameRunning(isGameRunning) {
      _classPrivateFieldGet(this, _gameStateData).isGameRunning = isGameRunning;
      return this;
    }
  }, {
    key: "setIsRoundRunning",
    value: function setIsRoundRunning(isRoundRunning) {
      _classPrivateFieldGet(this, _gameStateData).isRoundRunning = isRoundRunning;
      return this;
    }
  }, {
    key: "setIsPlayerOneTurn",
    value: function setIsPlayerOneTurn(isPlayerOneTurn) {
      _classPrivateFieldGet(this, _gameStateData).isPlayerOneTurn = isPlayerOneTurn;
      return this;
    }
  }, {
    key: "setPlayerOneUserName",
    value: function setPlayerOneUserName(playerOneUserName) {
      _classPrivateFieldGet(this, _gameStateData).playerOneUserName = playerOneUserName;
      return this;
    }
  }, {
    key: "setPlayerTwoUserName",
    value: function setPlayerTwoUserName(playerTwoUserName) {
      _classPrivateFieldGet(this, _gameStateData).playerTwoUserName = playerTwoUserName;
      return this;
    }
  }, {
    key: "setPlayerOneGameboardData",
    value: function setPlayerOneGameboardData(playerOneGameboardData) {
      _classPrivateFieldGet(this, _gameStateData).playerOneGameboardData = playerOneGameboardData;
      return this;
    }
  }, {
    key: "setPlayerTwoGameboardData",
    value: function setPlayerTwoGameboardData(playerTwoGameboardData) {
      _classPrivateFieldGet(this, _gameStateData).playerTwoGameboardData = playerTwoGameboardData;
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      _classPrivateFieldSet(this, _gameStateData, new _GameStateData__WEBPACK_IMPORTED_MODULE_0__["default"]());
    }
  }, {
    key: "build",
    value: function build() {
      var gameStateData = _classPrivateFieldGet(this, _gameStateData);
      this.reset();
      return gameStateData;
    }
  }]);
  return GameStateDataBuilder;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameStateDataBuilder);

/***/ }),

/***/ "./src/entities/DataPointContainers/GameboardData.js":
/*!***********************************************************!*\
  !*** ./src/entities/DataPointContainers/GameboardData.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _boardData = /*#__PURE__*/new WeakMap();
var _playerUserName = /*#__PURE__*/new WeakMap();
var _allShipsSunk = /*#__PURE__*/new WeakMap();
var GameboardData = /*#__PURE__*/function () {
  function GameboardData() {
    _classCallCheck(this, GameboardData);
    _classPrivateFieldInitSpec(this, _boardData, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _playerUserName, {
      writable: true,
      value: ''
    });
    _classPrivateFieldInitSpec(this, _allShipsSunk, {
      writable: true,
      value: null
    });
  }
  _createClass(GameboardData, [{
    key: "setBoardData",
    value: function setBoardData(board) {
      var boardCopy = board.slice();
      var boardData = [];
      boardCopy.forEach(function (row) {
        boardData.push.apply(boardData, _toConsumableArray(row));
      });
      _classPrivateFieldSet(this, _boardData, boardData);
    }
  }, {
    key: "boardData",
    get: function get() {
      return _classPrivateFieldGet(this, _boardData);
    }
  }, {
    key: "playerUserName",
    get: function get() {
      return _classPrivateFieldGet(this, _playerUserName);
    },
    set: function set(playerUserName) {
      _classPrivateFieldSet(this, _playerUserName, playerUserName);
    }
  }, {
    key: "allShipsSunk",
    get: function get() {
      return _classPrivateFieldGet(this, _allShipsSunk);
    },
    set: function set(allShipsSunk) {
      _classPrivateFieldSet(this, _allShipsSunk, allShipsSunk);
    }
  }]);
  return GameboardData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardData);

/***/ }),

/***/ "./src/entities/DataPointContainers/GameboardDataBuilder.js":
/*!******************************************************************!*\
  !*** ./src/entities/DataPointContainers/GameboardDataBuilder.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameboardData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameboardData */ "./src/entities/DataPointContainers/GameboardData.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _gameboardData = /*#__PURE__*/new WeakMap();
var _reset = /*#__PURE__*/new WeakSet();
var GameBoardDataBuilder = /*#__PURE__*/function () {
  function GameBoardDataBuilder() {
    _classCallCheck(this, GameBoardDataBuilder);
    _classPrivateMethodInitSpec(this, _reset);
    _classPrivateFieldInitSpec(this, _gameboardData, {
      writable: true,
      value: null
    });
    _classPrivateFieldSet(this, _gameboardData, new _GameboardData__WEBPACK_IMPORTED_MODULE_0__["default"]());
  }
  _createClass(GameBoardDataBuilder, [{
    key: "setBoardData",
    value: function setBoardData(gameboard) {
      _classPrivateFieldGet(this, _gameboardData).setBoardData(gameboard);
      return this;
    }
  }, {
    key: "setPlayerUserName",
    value: function setPlayerUserName(playerUserName) {
      _classPrivateFieldGet(this, _gameboardData).playerUserName = playerUserName;
      return this;
    }
  }, {
    key: "setAllShipsSunk",
    value: function setAllShipsSunk(allShipsSunk) {
      _classPrivateFieldGet(this, _gameboardData).allShipsSunk = allShipsSunk;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      var gameboardData = _classPrivateFieldGet(this, _gameboardData);
      _classPrivateMethodGet(this, _reset, _reset2).call(this);
      return gameboardData;
    }
  }]);
  return GameBoardDataBuilder;
}();
function _reset2() {
  _classPrivateFieldSet(this, _gameboardData, new _GameboardData__WEBPACK_IMPORTED_MODULE_0__["default"]());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoardDataBuilder);

/***/ }),

/***/ "./src/entities/Gameboard.js":
/*!***********************************!*\
  !*** ./src/entities/Gameboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BoardCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardCell */ "./src/entities/BoardCell.js");
/* harmony import */ var _DataPointContainers_GameboardDataBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataPointContainers/GameboardDataBuilder */ "./src/entities/DataPointContainers/GameboardDataBuilder.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }


var _width = /*#__PURE__*/new WeakMap();
var _height = /*#__PURE__*/new WeakMap();
var _board = /*#__PURE__*/new WeakMap();
var _shipList = /*#__PURE__*/new WeakMap();
var _canPlace = /*#__PURE__*/new WeakSet();
var _initBoard = /*#__PURE__*/new WeakSet();
var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    _classPrivateMethodInitSpec(this, _initBoard);
    _classPrivateMethodInitSpec(this, _canPlace);
    _classPrivateFieldInitSpec(this, _width, {
      writable: true,
      value: 10
    });
    _classPrivateFieldInitSpec(this, _height, {
      writable: true,
      value: 10
    });
    _classPrivateFieldInitSpec(this, _board, {
      writable: true,
      value: []
    });
    // swapping supposedly X and Y coordinates here because of failed attempt to implement 2D arrays in JavaScript...
    _classPrivateFieldInitSpec(this, _shipList, {
      writable: true,
      value: []
    });
    _classPrivateMethodGet(this, _initBoard, _initBoard2).call(this);
  }
  _createClass(Gameboard, [{
    key: "placeShip",
    value: function placeShip(ship, isHorizontal, length) {
      if (!_classPrivateMethodGet(this, _canPlace, _canPlace2).call(this, ship.getCoordStart(), isHorizontal, length)) return false;
      _classPrivateFieldGet(this, _shipList).push(ship);
      if (isHorizontal === true) {
        for (var i = 0; i < length; i += 1) {
          var boardCell = _classPrivateFieldGet(this, _board)[ship.getCoordStart().coordY - 1][ship.getCoordStart().coordX - 1 + i];
          boardCell.occupy(ship);
        }
      } else {
        for (var _i = 0; _i < length; _i += 1) {
          var _boardCell = _classPrivateFieldGet(this, _board)[ship.getCoordStart().coordY - 1 + _i][ship.getCoordStart().coordX - 1];
          _boardCell.occupy(ship);
        }
      }
      return true;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(coord) {
      return _classPrivateFieldGet(this, _board)[coord.coordY - 1][coord.coordX - 1].hit();
    }
  }, {
    key: "allShipsSunk",
    value: function allShipsSunk() {
      return _classPrivateFieldGet(this, _shipList).every(function (ship) {
        return ship.isSunk();
      });
    }
  }, {
    key: "getGameboardData",
    value: function getGameboardData(playerUserName) {
      var gameboardDataBuilder = new _DataPointContainers_GameboardDataBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var gameboardData = gameboardDataBuilder.setBoardData(_classPrivateFieldGet(this, _board)).setPlayerUserName(playerUserName).setAllShipsSunk(this.allShipsSunk()).build();
      return gameboardData;
    }
  }]);
  return Gameboard;
}();
function _canPlace2(coordStart, isHorizontal, length) {
  switch (isHorizontal) {
    case true:
      {
        // to exclude starting point from calculation
        if (coordStart.coordX - 1 + length > _classPrivateFieldGet(this, _width)) {
          return false;
        }
        for (var i = 0; i < length; i += 1) {
          var boardCell = _classPrivateFieldGet(this, _board)[coordStart.coordY - 1][coordStart.coordX - 1 + i];
          if (boardCell.isOccupied === true) {
            return false;
          }
        }
        return true;
      }
    case false:
      {
        // to exclude starting point from calculation
        if (coordStart.coordY - 1 + length > _classPrivateFieldGet(this, _height)) {
          return false;
        }
        for (var _i2 = 0; _i2 < length; _i2 += 1) {
          var _boardCell2 = _classPrivateFieldGet(this, _board)[coordStart.coordY - 1 + _i2][coordStart.coordX - 1];
          if (_boardCell2.isOccupied === true) {
            return false;
          }
        }
        return true;
      }
    default:
      return false;
  }
}
function _initBoard2() {
  if (_classPrivateFieldGet(this, _board).length !== 0) return;
  for (var x = 0; x < _classPrivateFieldGet(this, _width); x += 1) {
    _classPrivateFieldGet(this, _board).push([]);
    for (var y = 0; y < _classPrivateFieldGet(this, _height); y += 1) {
      // swapping values due to wrong cell data representation
      var emptyCell = new _BoardCell__WEBPACK_IMPORTED_MODULE_0__["default"](y + 1, x + 1);
      _classPrivateFieldGet(this, _board)[x].push(emptyCell);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/entities/HitStatus.js":
/*!***********************************!*\
  !*** ./src/entities/HitStatus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hitStatus() {
  var NOT_HIT = 'NOT_HIT';
  var HIT_CELL = 'HIT_CELL';
  var HIT_SHIP = 'HIT_SHIP';
  return {
    NOT_HIT: NOT_HIT,
    HIT_CELL: HIT_CELL,
    HIT_SHIP: HIT_SHIP
  };
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hitStatus);

/***/ }),

/***/ "./src/entities/Player.js":
/*!********************************!*\
  !*** ./src/entities/Player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _playerName = /*#__PURE__*/new WeakMap();
var _hitLog = /*#__PURE__*/new WeakMap();
var _playerShips = /*#__PURE__*/new WeakMap();
var Player = /*#__PURE__*/function () {
  function Player(userName) {
    _classCallCheck(this, Player);
    _classPrivateFieldInitSpec(this, _playerName, {
      writable: true,
      value: ''
    });
    _classPrivateFieldInitSpec(this, _hitLog, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _playerShips, {
      writable: true,
      value: []
    });
    _classPrivateFieldSet(this, _playerName, userName);
  }
  _createClass(Player, [{
    key: "logHit",
    value: function logHit(coord) {
      _classPrivateFieldGet(this, _hitLog).push(coord);
    }
  }, {
    key: "addShip",
    value: function addShip(ship) {
      _classPrivateFieldGet(this, _playerShips).push(ship);
    }
  }, {
    key: "getHitLog",
    value: function getHitLog() {
      return _classPrivateFieldGet(this, _hitLog).slice();
    }
  }, {
    key: "getShips",
    value: function getShips() {
      return _classPrivateFieldGet(this, _playerShips).slice();
    }
  }, {
    key: "resetUser",
    value: function resetUser() {
      _classPrivateFieldSet(this, _hitLog, []);
      _classPrivateFieldSet(this, _playerShips, []);
    }
  }, {
    key: "setPlayerName",
    value: function setPlayerName(userName) {
      _classPrivateFieldSet(this, _playerName, userName);
    }
  }, {
    key: "getPlayerName",
    value: function getPlayerName() {
      return _classPrivateFieldGet(this, _playerName);
    }
  }]);
  return Player;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/entities/Ship.js":
/*!******************************!*\
  !*** ./src/entities/Ship.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShipPiece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipPiece */ "./src/entities/ShipPiece.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _timesHit = /*#__PURE__*/new WeakMap();
var _shipPieces = /*#__PURE__*/new WeakMap();
var _coordStart = /*#__PURE__*/new WeakMap();
var _buildShip = /*#__PURE__*/new WeakSet();
var Ship = /*#__PURE__*/function () {
  function Ship(_coordStart2, _horizontal, _length) {
    _classCallCheck(this, Ship);
    _classPrivateMethodInitSpec(this, _buildShip);
    _classPrivateFieldInitSpec(this, _timesHit, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _shipPieces, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _coordStart, {
      writable: true,
      value: null
    });
    _classPrivateFieldSet(this, _coordStart, _coordStart2);
    _classPrivateMethodGet(this, _buildShip, _buildShip2).call(this, _coordStart2, _horizontal, _length);
  }
  _createClass(Ship, [{
    key: "tryHit",
    value: function tryHit(hitCoord) {
      var shipPiece = _classPrivateFieldGet(this, _shipPieces).find(function (pieceCoord) {
        return pieceCoord.coordX === hitCoord.coordX && pieceCoord.coordY === hitCoord.coordY;
      });
      if (shipPiece === undefined) return false;
      if (shipPiece.hitStatus === true) return false;
      _classPrivateFieldSet(this, _timesHit, _classPrivateFieldGet(this, _timesHit) + 1);
      return shipPiece.hit();
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return _classPrivateFieldGet(this, _shipPieces).every(function (shipPiece) {
        return shipPiece.hitStatus === true;
      });
    }
  }, {
    key: "getCoordStart",
    value: function getCoordStart() {
      return _classPrivateFieldGet(this, _coordStart);
    }
  }, {
    key: "length",
    get: function get() {
      return _classPrivateFieldGet(this, _shipPieces).length;
    }
  }, {
    key: "timesHit",
    get: function get() {
      return _classPrivateFieldGet(this, _timesHit);
    }
  }]);
  return Ship;
}();
function _buildShip2(coordStart, horizontal, length) {
  for (var i = 0; i < length; i += 1) {
    var shipPieceCoord = null;
    if (horizontal) {
      shipPieceCoord = new _ShipPiece__WEBPACK_IMPORTED_MODULE_0__["default"](coordStart.coordX + i, coordStart.coordY);
    } else {
      shipPieceCoord = new _ShipPiece__WEBPACK_IMPORTED_MODULE_0__["default"](coordStart.coordX, coordStart.coordY + i);
    }
    _classPrivateFieldGet(this, _shipPieces).push(shipPieceCoord);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/entities/ShipPiece.js":
/*!***********************************!*\
  !*** ./src/entities/ShipPiece.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coordinate */ "./src/entities/Coordinate.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _coord = /*#__PURE__*/new WeakMap();
var _hitStatus = /*#__PURE__*/new WeakMap();
var ShipPiece = /*#__PURE__*/function () {
  function ShipPiece(coordX, coordY) {
    _classCallCheck(this, ShipPiece);
    _classPrivateFieldInitSpec(this, _coord, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _hitStatus, {
      writable: true,
      value: false
    });
    _classPrivateFieldSet(this, _coord, new _Coordinate__WEBPACK_IMPORTED_MODULE_0__["default"](coordX, coordY));
  }
  _createClass(ShipPiece, [{
    key: "hit",
    value: function hit() {
      _classPrivateFieldSet(this, _hitStatus, true);
      return _classPrivateFieldGet(this, _hitStatus);
    }
  }, {
    key: "coordX",
    get: function get() {
      return _classPrivateFieldGet(this, _coord).coordX;
    }
  }, {
    key: "coordY",
    get: function get() {
      return _classPrivateFieldGet(this, _coord).coordY;
    }
  }, {
    key: "hitStatus",
    get: function get() {
      return _classPrivateFieldGet(this, _hitStatus);
    }
  }]);
  return ShipPiece;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipPiece);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-ui-container {
  padding: 100px;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 2em;

  grid-template-areas:
    'button'
    'board';
}

.controls-container {
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2em
}

.boards-container {
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2em;
}

.board {
  height: 500px;
  width: 500px;
  border: 1px solid black;

  grid-area: board;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.board-cell {
  border: 1px solid black;
}

.board-cell:hover {
  border: 2px solid lightgreen;
}

.button {
  grid-area: button;

  padding: 0.5rem;
  color: #fff;
  border: 2px solid black;
  background-color: black;
  text-transform: uppercase;
  font-weight: 700;
}

.button-active {
  color: #000;
  background-color: white;
  text-transform: uppercase;
  font-weight: 700;
}

.button:hover {
  color: #000;
  background-color: white;
  text-transform: uppercase;
  font-weight: 700;
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;;EAER;;WAES;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;;EAEvB,gBAAgB;;EAEhB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;;EAEjB,eAAe;EACf,WAAW;EACX,uBAAuB;EACvB,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-ui-container {\n  padding: 100px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n\n  grid-template-areas:\n    'button'\n    'board';\n}\n\n.controls-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  gap: 2em\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  gap: 2em;\n}\n\n.board {\n  height: 500px;\n  width: 500px;\n  border: 1px solid black;\n\n  grid-area: board;\n\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board-cell {\n  border: 1px solid black;\n}\n\n.board-cell:hover {\n  border: 2px solid lightgreen;\n}\n\n.button {\n  grid-area: button;\n\n  padding: 0.5rem;\n  color: #fff;\n  border: 2px solid black;\n  background-color: black;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.button-active {\n  color: #000;\n  background-color: white;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.button:hover {\n  color: #000;\n  background-color: white;\n  text-transform: uppercase;\n  font-weight: 700;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_GameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/GameController */ "./src/controller/GameController.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");


var controller = new _controller_GameController__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXlEO0FBQzlCO0FBRTNCLElBQU1jLFVBQVUsR0FBRyxJQUFJekksa0VBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Cb2FyZENlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Db29yZGluYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lU3RhdGVEYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lU3RhdGVEYXRhQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9IaXRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcFBpZWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4uL2VudGl0aWVzL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBET01Db250cm9sbGVyIHtcbiAgI2JvYXJkT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLW9uZScpO1xuXG4gICNib2FyZFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC10d28nKTtcblxuICAjc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWUnKTtcblxuICAjc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3Jpem9udGFsLXN0YXR1cycpO1xuXG4gICNyZXN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWdhbWUnKTtcblxuICAjYm9hcmRJbml0ID0gZmFsc2U7XG5cbiAgI05VTUJFUl9PRl9DRUxMUyA9IDEwMDtcblxuICAjaXNIb3Jpem9udGFsID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyQVBJKSB7XG4gICAgdGhpcy4jaW5pdEJvYXJkKGNvbnRyb2xsZXJBUEkuZG9Cb2FyZEFjdGlvbkhhbmRsZXIpO1xuICAgIHRoaXMuI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpO1xuICB9XG5cbiAgI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnN0YXJ0R2FtZUhhbmRsZXIpO1xuICAgIHRoaXMuI3N3aXRjaEhvcml6b250YWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmRIYW5kbGVyKTtcbiAgfVxuXG4gICNpbml0Qm9hcmQoZG9Cb2FyZEFjdGlvbkhhbmRsZXIpIHtcbiAgICBpZiAodGhpcy4jYm9hcmRJbml0ID09PSB0cnVlKSByZXR1cm47XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI05VTUJFUl9PRl9DRUxMUzsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxPbmUgPSB0aGlzLiNjcmVhdGVCb2FyZENlbGwoZG9Cb2FyZEFjdGlvbkhhbmRsZXIpO1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsVHdvID0gdGhpcy4jY3JlYXRlQm9hcmRDZWxsKGRvQm9hcmRBY3Rpb25IYW5kbGVyKTtcblxuICAgICAgdGhpcy4jYm9hcmRPbmUuYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsT25lKTtcbiAgICAgIHRoaXMuI2JvYXJkVHdvLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbFR3byk7XG4gICAgfVxuXG4gICAgdGhpcy4jYm9hcmRJbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZVVJKGdhbWVTdGF0ZURhdGEpIHtcbiAgICB0aGlzLiN1cGRhdGVET01Cb2FyZChcbiAgICAgIGdhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YSxcbiAgICAgIGdhbWVTdGF0ZURhdGEucGxheWVyVHdvR2FtZWJvYXJkRGF0YVxuICAgICk7XG4gIH1cblxuICAjdXBkYXRlRE9NQm9hcmQoZ2FtZWJvYXJkT25lRGF0YSwgZ2FtZWJvYXJkVHdvRGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jTlVNQkVSX09GX0NFTExTOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5vZGVCb2FyZE9uZSA9IHRoaXMuI2JvYXJkT25lLmNoaWxkTm9kZXNbaV07XG4gICAgICBjb25zdCBkYXRhQm9hcmRPbmUgPSBnYW1lYm9hcmRPbmVEYXRhLmJvYXJkRGF0YVtpXTtcblxuICAgICAgY29uc3Qgbm9kZUJvYXJkVHdvID0gdGhpcy4jYm9hcmRUd28uY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZFR3byA9IGdhbWVib2FyZFR3b0RhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lKTtcbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28pO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsIGdhbWVib2FyZE9uZURhdGEucGxheWVyVXNlck5hbWUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvLCBnYW1lYm9hcmRUd29EYXRhLnBsYXllclVzZXJOYW1lKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlR2FtZVN0YXR1cyhnYW1lU3RhdGVEYXRhKSB7XG5cbiAgfVxuXG4gICN0b2dnbGVIb3Jpem9udGFsKCkge1xuICAgIHRoaXMuI2lzSG9yaXpvbnRhbCA9ICF0aGlzLiNpc0hvcml6b250YWw7XG4gICAgdGhpcy4jc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdidXR0b24tYWN0aXZlJyk7XG4gIH1cblxuICAjY3JlYXRlQm9hcmRDZWxsKGRvQm9hcmRBY3Rpb25IYW5kbGVyKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvQm9hcmRBY3Rpb25IYW5kbGVyKTtcblxuICAgIHJldHVybiBuZXdDZWxsO1xuICB9XG5cbiAgI3VwZGF0ZUNlbGxNZXRhRGF0YShjZWxsTm9kZSwgY2VsbERhdGEsIHBsYXllcm5hbWUpIHtcbiAgICBjb25zdCBjb29yZCA9IGNlbGxEYXRhLmdldENvb3JkKCk7XG5cbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmR4JywgY29vcmQuY29vcmRYKTtcbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmR5JywgY29vcmQuY29vcmRZKTtcbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWVybmFtZScsIHBsYXllcm5hbWUpO1xuICB9XG5cbiAgI3VwZGF0ZUNlbGxTdGF0dXMoY2VsbE5vZGUsIGNlbGxEYXRhKSB7XG4gICAgaWYgKCFjZWxsTm9kZSB8fCAhY2VsbERhdGEpIHJldHVybjtcblxuICAgIGNvbnN0IG5vZGUgPSBjZWxsTm9kZTtcbiAgICBjb25zdCBkYXRhID0gY2VsbERhdGE7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdldEhpdFN0YXR1cygpO1xuXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuTk9UX0hJVDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkZGRkZGJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLkhJVF9TSElQOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRjAwMDAnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX0NFTEw6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gaWYoY2VsbERhdGEuaXNPY2N1cGllZCkgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gIH1cblxuICBnZXRJc0hvcml6b250YWwoKSB7IHJldHVybiB0aGlzLiNpc0hvcml6b250YWwgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlcjtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2VudGl0aWVzL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2VudGl0aWVzL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL2VudGl0aWVzL0dhbWVib2FyZFwiO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4uL2VudGl0aWVzL0Nvb3JkaW5hdGVcIjtcbmltcG9ydCBHYW1lU3RhdGVEYXRhQnVpbGRlciBmcm9tIFwiLi4vZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lU3RhdGVEYXRhQnVpbGRlclwiO1xuXG5jbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICNjdXJyZW50UGxheWVyID0gbnVsbDtcblxuICAjaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuXG4gICNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuXG4gICNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICNwbGF5ZXJPbmUgPSBudWxsO1xuXG4gICNwbGF5ZXJUd28gPSBudWxsO1xuXG4gICNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBudWxsO1xuXG4gICNwbGF5ZXJUd29HYW1lYm9hcmQgPSBudWxsO1xuXG4gICNET01Db250cm9sbGVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNET01Db250cm9sbGVyID0gbmV3IERPTUNvbnRyb2xsZXIodGhpcy4jZ2V0QVBJQ29udGFpbmVyKCkpO1xuICAgIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyT25lID0gbmV3IFBsYXllcignUGxheWVyIE9uZScpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1BsYXllciBUd28nKTtcbiAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAvLyBDYWxsYmFjayB0byBsZXQgb3RoZXIgbGF5ZXJzIG9mIHByb2dyYW0gaW50ZXJhY3Qgd2l0aCBvdXIgZ2FtZSBjb250cm9sbGVyXG4gIGRvQm9hcmRBY3Rpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKXtcbiAgICAgIHJldHVybjtcbiAgICB9ICBcblxuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgY29uc3QgaXNDZWxsT3duZXIgPSBjZWxsTm9kZS5kYXRhc2V0LnBsYXllcm5hbWUgPT09IHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpO1xuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuICAgIFxuICAgIGNvbnN0IGNlbGxDb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLiNET01Db250cm9sbGVyLmdldElzSG9yaXpvbnRhbCgpO1xuICAgIFxuICAgIHN3aXRjaCAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgLy8gdG8gbGV0IHBsYXllciBwbGFjZSBzaGlwcyBvbiBISVMgT1dOIGJvYXJkIG9ubHlcbiAgICAgICAgaWYgKGlzQ2VsbE93bmVyID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLiNwbGF5ZXJQbGFjZVNoaXAoY2VsbENvb3JkLCBpc0hvcml6b250YWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIGF0dGFjayBzaGlwcyBvbiBISVMgT1BQT05FTlQnUyBib2FyZCBvbmx5XG4gICAgICAgIGlmIChpc0NlbGxPd25lciA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLiNwbGF5ZXJBdHRhY2soY2VsbENvb3JkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoKTtcbiAgICBjb25zb2xlLmxvZygnQUNUSU9OJyk7XG4gIH1cblxuICBzdGFydEdhbWVIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICBjb25zb2xlLmxvZygnU1RBUlQnKTtcbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVzdGFydFJvdW5kSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyT25lID0gbmV3IFBsYXllcignUGxheWVyIE9uZScpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1BsYXllciBUd28nKTtcbiAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuICAgIHRoaXMuI2lzUGxheWVyT25lVHVybiA9IHRydWU7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoKTtcbiAgICBjb25zb2xlLmxvZygnUkVTVEFSVEVEJyk7XG4gIH1cblxuICAjdXBkYXRlR2FtZVVJKCkge1xuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGEgPSB0aGlzLiNnZXRHYW1lU3RhdGVEYXRhKCk7XG5cbiAgICB0aGlzLiNET01Db250cm9sbGVyLnVwZGF0ZVVJKGdhbWVTdGF0ZURhdGEpO1xuICB9XG5cbiAgI2dldEdhbWVTdGF0ZURhdGEoKSB7XG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YUJ1aWxkZXIgPSBuZXcgR2FtZVN0YXRlRGF0YUJ1aWxkZXIoKTtcblxuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGEgPSBnYW1lU3RhdGVEYXRhQnVpbGRlclxuICAgICAgLnNldEN1cnJlbnRVc2VyTmFtZSh0aGlzLiNjdXJyZW50UGxheWVyLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRJc0dhbWVSdW5uaW5nKHRoaXMuI2lzR2FtZVJ1bm5pbmcpXG4gICAgICAuc2V0SXNSb3VuZFJ1bm5pbmcodGhpcy4jaXNSb3VuZFJ1bm5pbmcpXG4gICAgICAuc2V0SXNQbGF5ZXJPbmVUdXJuKHRoaXMuI2lzUGxheWVyT25lVHVybilcbiAgICAgIC5zZXRQbGF5ZXJPbmVVc2VyTmFtZSh0aGlzLiNwbGF5ZXJPbmUuZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldFBsYXllclR3b1VzZXJOYW1lKHRoaXMuI3BsYXllclR3by5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQuZ2V0R2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJPbmUuZ2V0UGxheWVyTmFtZSgpKSlcbiAgICAgIC5zZXRQbGF5ZXJUd29HYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllclR3b0dhbWVib2FyZC5nZXRHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllclR3by5nZXRQbGF5ZXJOYW1lKCkpKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICByZXR1cm4gZ2FtZVN0YXRlRGF0YTtcbiAgfVxuXG4gIC8vIFRvIGNoZWNrIGlmIHJvdW5kIHNob3VsZCBzdGFydCBvbmNlIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4gICNydW5Sb3VuZCgpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lLmdldFNoaXBzKCkubGVuZ3RoID09PSA1ICYmIHRoaXMuI3BsYXllclR3by5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgY29uc29sZS5sb2coJ3JvdW5kIGlzIHJ1bm5pbmcnKTtcbiAgICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuI2lzUGxheWVyT25lVHVybiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgI2VuZEdhbWUocGxheWVyV2lubmVyKSB7XG4gICAgaWYgKHBsYXllcldpbm5lciA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICAjc3dpdGNoQ3VycmVudFBsYXllcigpIHtcbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyVHdvO1xuICAgICAgY29uc29sZS5sb2coJ1BMQVlFUiBUV08gVFVSTicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuICAgICAgY29uc29sZS5sb2coJ1BMQVlFUiBPTkUgVFVSTicpO1xuICAgIH1cblxuICAgIHRoaXMuI2lzUGxheWVyT25lVHVybiA9ICF0aGlzLiNpc1BsYXllck9uZVR1cm47XG4gIH1cblxuICAjZ2V0V2lubmVyKCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3aW4nKTtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUd287XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI3BsYXllclR3b0dhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3dpbicpO1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllck9uZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFRPRE86IGltcGxlbWVudCBhdHRhY2sgbG9naWNcbiAgI3BsYXllckF0dGFjayhjb29yZCkge1xuICAgIHRoaXMuI2F0dGFja0NlbGwoY29vcmQpO1xuICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcblxuICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuI2dldFdpbm5lcigpO1xuXG4gICAgaWYgKHdpbm5lciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jZW5kR2FtZSh3aW5uZXIpO1xuICAgICAgY29uc29sZS5sb2coYHBsYXllciAke3dpbm5lcn0gd29uYCk7XG4gICAgfVxuICB9XG5cbiAgI2F0dGFja0NlbGwoY29vcmQpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIGN1cnJlbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgI3BsYXllclBsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKSB7XG4gICAgdGhpcy4jcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpO1xuXG4gICAgdGhpcy4jcnVuUm91bmQoKTtcbiAgfVxuXG4gICNwbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZykgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGN1cnJlbnRCb2FyZCA9IG51bGw7XG4gICAgbGV0IG5ld1NoaXAgPSBudWxsO1xuICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gVG8gYnVpbGQgc2hpcHMgaW4gcHJlLWRldGVybWluZWQgcGF0dGVybiAoNSw0LDMsMywyKVxuICAgIHN3aXRjaCAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgNSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgNCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSA0OiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFBsYXllcnMgc2hvdWxkIHRha2UgdHVybnMgYWZ0ZXIgYnVpbGRpbmcgdGhlaXIgZW50aXJlIGZsZWV0XG4gICAgaWYgKGlzUGxhY2VkKSB7XG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyLmFkZFNoaXAobmV3U2hpcCk7XG4gICAgICBjb25zb2xlLmxvZygncGxhY2VkJyk7XG4gICAgICBjb25zb2xlLmxvZyhgY3VycmVudCBwbGF5ZXIgc2hpcHMgJHt0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RofWApO1xuXG4gICAgICBpZiAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpdGNoJyk7XG4gICAgICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgI2dldEFQSUNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRHYW1lSGFuZGxlcjogdGhpcy5zdGFydEdhbWVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBkb0JvYXJkQWN0aW9uSGFuZGxlcjogdGhpcy5kb0JvYXJkQWN0aW9uSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgcmVzdGFydFJvdW5kSGFuZGxlcjogdGhpcy5yZXN0YXJ0Um91bmRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcbiIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4vSGl0U3RhdHVzXCI7XG5cbmNsYXNzIEJvYXJkQ2VsbCB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNzaGlwID0gbnVsbDtcblxuICAgICNpc09jY3VwaWVkID0gZmFsc2U7XG5cbiAgICAjaGFzQmVlbkhpdCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgb2NjdXB5KHNoaXApIHtcbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNpc09jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4jc2hpcCA9IHNoaXA7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICBpZiAodGhpcy4jaGFzQmVlbkhpdCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2hhc0JlZW5IaXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLiNzaGlwKSB7XG4gICAgICAgICAgICB0aGlzLiNzaGlwLnRyeUhpdCh0aGlzLiNjb29yZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRDb29yZCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkOyB9XG5cbiAgICBnZXRDb29yZFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBYOiAke3RoaXMuI2Nvb3JkLmNvb3JkWH0gWTogJHt0aGlzLiNjb29yZC5jb29yZFl9YDtcbiAgICB9XG5cbiAgICBnZXRIaXRTdGF0dXMoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy4jaGFzQmVlbkhpdCkge1xuICAgICAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5OT1RfSElUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9TSElQO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5ISVRfQ0VMTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaXNPY2N1cGllZCgpIHsgcmV0dXJuIHRoaXMuI2lzT2NjdXBpZWQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRDZWxsOyIsImNsYXNzIENvb3JkaW5hdGUge1xuICAgICNjb29yZFggPSAwO1xuXG4gICAgI2Nvb3JkWSA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZFggPSBjb29yZFg7XG4gICAgICAgIHRoaXMuI2Nvb3JkWSA9IGNvb3JkWTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHRoaXMuI2Nvb3JkWCwgMTApOyB9XG5cbiAgICBnZXQgY29vcmRZKCkgeyByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHRoaXMuI2Nvb3JkWSwgMTApOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3JkaW5hdGU7IiwiY2xhc3MgR2FtZVN0YXRlRGF0YSB7XG4gICAgI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTtcblxuICAgICNpc0dhbWVSdW5uaW5nO1xuXG4gICAgI2lzUm91bmRSdW5uaW5nO1xuXG4gICAgI2lzUGxheWVyT25lVHVybjtcblxuICAgICNwbGF5ZXJPbmVVc2VyTmFtZTtcblxuICAgICNwbGF5ZXJUd29Vc2VyTmFtZTtcblxuICAgICNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuXG4gICAgI3BsYXllclR3b0dhbWVib2FyZERhdGE7XG5cbiAgICBnZXQgY3VycmVudFVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jY3VycmVudFBsYXllclVzZXJOYW1lOyB9XG5cbiAgICBzZXQgY3VycmVudFVzZXJOYW1lKGN1cnJlbnRVc2VyTmFtZSkgeyB0aGlzLiNjdXJyZW50UGxheWVyVXNlck5hbWUgPSBjdXJyZW50VXNlck5hbWU7IH1cblxuICAgIGdldCBpc0dhbWVSdW5uaW5nKCkgeyByZXR1cm4gdGhpcy4jaXNHYW1lUnVubmluZzsgfVxuXG4gICAgc2V0IGlzR2FtZVJ1bm5pbmcoaXNHYW1lUnVubmluZykgeyB0aGlzLiNpc0dhbWVSdW5uaW5nID0gaXNHYW1lUnVubmluZzsgfVxuXG4gICAgZ2V0IGlzUm91bmRSdW5uaW5nKCkgeyByZXR1cm4gdGhpcy4jaXNSb3VuZFJ1bm5pbmc7IH1cblxuICAgIHNldCBpc1JvdW5kUnVubmluZyhpc1JvdW5kUnVubmluZykgeyB0aGlzLiNpc1JvdW5kUnVubmluZyA9IGlzUm91bmRSdW5uaW5nOyB9XG5cbiAgICBnZXQgaXNQbGF5ZXJPbmVUdXJuKCkgeyByZXR1cm4gdGhpcy4jaXNQbGF5ZXJPbmVUdXJuOyB9XG5cbiAgICBzZXQgaXNQbGF5ZXJPbmVUdXJuKGlzUGxheWVyT25lVHVybikgeyB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSBpc1BsYXllck9uZVR1cm47IH1cblxuICAgIGdldCBwbGF5ZXJPbmVVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllck9uZVVzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyT25lVXNlck5hbWUocGxheWVyT25lVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyT25lVXNlck5hbWUgPSBwbGF5ZXJPbmVVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IHBsYXllclR3b1VzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVHdvVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJUd29Vc2VyTmFtZShwbGF5ZXJUd29Vc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJUd29Vc2VyTmFtZSA9IHBsYXllclR3b1VzZXJOYW1lOyB9XG5cbiAgICBnZXQgcGxheWVyT25lR2FtZWJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZERhdGE7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHBsYXllck9uZUdhbWVib2FyZERhdGEpIHsgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkRGF0YSA9IHBsYXllck9uZUdhbWVib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJUd29HYW1lYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgc2V0IHBsYXllclR3b0dhbWVib2FyZERhdGEocGxheWVyVHdvR2FtZWJvYXJkRGF0YSkgeyB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmREYXRhID0gcGxheWVyVHdvR2FtZWJvYXJkRGF0YTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGVEYXRhOyIsImltcG9ydCBHYW1lU3RhdGVEYXRhIGZyb20gXCIuL0dhbWVTdGF0ZURhdGFcIjtcblxuY2xhc3MgR2FtZVN0YXRlRGF0YUJ1aWxkZXIge1xuICAgICNnYW1lU3RhdGVEYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhID0gbmV3IEdhbWVTdGF0ZURhdGEoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50VXNlck5hbWUoY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuY3VycmVudFBsYXllclVzZXJOYW1lID0gY3VycmVudFVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc0dhbWVSdW5uaW5nKGlzR2FtZVJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc0dhbWVSdW5uaW5nID0gaXNHYW1lUnVubmluZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNSb3VuZFJ1bm5pbmcoaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyA9IGlzUm91bmRSdW5uaW5nO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc1BsYXllck9uZVR1cm4oaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNQbGF5ZXJPbmVUdXJuID0gaXNQbGF5ZXJPbmVUdXJuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVVc2VyTmFtZShwbGF5ZXJPbmVVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllck9uZVVzZXJOYW1lID0gcGxheWVyT25lVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b1VzZXJOYW1lKHBsYXllclR3b1VzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvVXNlck5hbWUgPSBwbGF5ZXJUd29Vc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YShwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YSA9IHBsYXllck9uZUdhbWVib2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b0dhbWVib2FyZERhdGEocGxheWVyVHdvR2FtZWJvYXJkRGF0YSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllclR3b0dhbWVib2FyZERhdGEgPSBwbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YSA9IG5ldyBHYW1lU3RhdGVEYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVTdGF0ZURhdGEgPSB0aGlzLiNnYW1lU3RhdGVEYXRhO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBnYW1lU3RhdGVEYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlRGF0YUJ1aWxkZXI7IiwiY2xhc3MgR2FtZWJvYXJkRGF0YSB7XG4gICAgI2JvYXJkRGF0YSA9IG51bGw7XG5cbiAgICAjcGxheWVyVXNlck5hbWUgPSAnJztcblxuICAgICNhbGxTaGlwc1N1bmsgPSBudWxsO1xuXG4gICAgc2V0Qm9hcmREYXRhKGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ29weSA9IGJvYXJkLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkRGF0YSA9IFtdO1xuXG4gICAgICAgIGJvYXJkQ29weS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBib2FyZERhdGEucHVzaCguLi5yb3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNib2FyZERhdGEgPSBib2FyZERhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI2JvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllclVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJVc2VyTmFtZSA9IHBsYXllclVzZXJOYW1lOyB9XG5cbiAgICBnZXQgYWxsU2hpcHNTdW5rKCkgeyByZXR1cm4gdGhpcy4jYWxsU2hpcHNTdW5rOyB9XG5cbiAgICBzZXQgYWxsU2hpcHNTdW5rKGFsbFNoaXBzU3VuaykgeyB0aGlzLiNhbGxTaGlwc1N1bmsgPSBhbGxTaGlwc1N1bms7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkRGF0YTsiLCJpbXBvcnQgR2FtZWJvYXJkRGF0YSBmcm9tIFwiLi9HYW1lYm9hcmREYXRhXCI7XG5cbmNsYXNzIEdhbWVCb2FyZERhdGFCdWlsZGVyIHtcbiAgICAjZ2FtZWJvYXJkRGF0YSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YSA9IG5ldyBHYW1lYm9hcmREYXRhKCk7XG4gICAgfVxuXG4gICAgc2V0Qm9hcmREYXRhKGdhbWVib2FyZCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLnNldEJvYXJkRGF0YShnYW1lYm9hcmQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLnBsYXllclVzZXJOYW1lID0gcGxheWVyVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFsbFNoaXBzU3VuayhhbGxTaGlwc1N1bmspIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5hbGxTaGlwc1N1bmsgPSBhbGxTaGlwc1N1bms7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgICNyZXNldCgpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YSA9IG5ldyBHYW1lYm9hcmREYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGEgPSB0aGlzLiNnYW1lYm9hcmREYXRhO1xuICAgICAgICB0aGlzLiNyZXNldCgpO1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZERhdGFCdWlsZGVyOyIsImltcG9ydCBCb2FyZENlbGwgZnJvbSBcIi4vQm9hcmRDZWxsXCI7XG5pbXBvcnQgR2FtZWJvYXJkRGF0YUJ1aWxkZXIgZnJvbSBcIi4vRGF0YVBvaW50Q29udGFpbmVycy9HYW1lYm9hcmREYXRhQnVpbGRlclwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgICN3aWR0aCA9IDEwO1xuXG4gICAgI2hlaWdodCA9IDEwO1xuXG4gICAgI2JvYXJkID0gW107XG5cbiAgICAvLyBzd2FwcGluZyBzdXBwb3NlZGx5IFggYW5kIFkgY29vcmRpbmF0ZXMgaGVyZSBiZWNhdXNlIG9mIGZhaWxlZCBhdHRlbXB0IHRvIGltcGxlbWVudCAyRCBhcnJheXMgaW4gSmF2YVNjcmlwdC4uLlxuICAgICNzaGlwTGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2luaXRCb2FyZCgpO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuI2NhblBsYWNlKHNoaXAuZ2V0Q29vcmRTdGFydCgpLCBpc0hvcml6b250YWwsIGxlbmd0aCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNzaGlwTGlzdC5wdXNoKHNoaXApO1xuXG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxXVsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMSkgKyBpXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxKSArIGldW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDFdO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNib2FyZFtjb29yZC5jb29yZFkgLSAxXVtjb29yZC5jb29yZFggLSAxXS5oaXQoKTtcbiAgICB9XG5cbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGlwTGlzdC5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cblxuICAgIGdldEdhbWVib2FyZERhdGEocGxheWVyVXNlck5hbWUpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YUJ1aWxkZXIgPSBuZXcgR2FtZWJvYXJkRGF0YUJ1aWxkZXIoKTtcblxuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhID0gZ2FtZWJvYXJkRGF0YUJ1aWxkZXIuc2V0Qm9hcmREYXRhKHRoaXMuI2JvYXJkKVxuICAgICAgICAuc2V0UGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpXG4gICAgICAgIC5zZXRBbGxTaGlwc1N1bmsodGhpcy5hbGxTaGlwc1N1bmsoKSlcbiAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG5cbiAgICAjY2FuUGxhY2UoY29vcmRTdGFydCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgICAgIC8vIHRvIGV4Y2x1ZGUgc3RhcnRpbmcgcG9pbnQgZnJvbSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmICgoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGxlbmd0aCA+IHRoaXMuI3dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW2Nvb3JkU3RhcnQuY29vcmRZIC0gMV1bKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgICAgICAgIC8vIHRvIGV4Y2x1ZGUgc3RhcnRpbmcgcG9pbnQgZnJvbSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmICgoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGxlbmd0aCA+IHRoaXMuI2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGldW2Nvb3JkU3RhcnQuY29vcmRYIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2luaXRCb2FyZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkLmxlbmd0aCAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy4jd2lkdGg7IHggKz0gMSkge1xuICAgICAgICAgICAgdGhpcy4jYm9hcmQucHVzaChbXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy4jaGVpZ2h0OyB5ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBzd2FwcGluZyB2YWx1ZXMgZHVlIHRvIHdyb25nIGNlbGwgZGF0YSByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5Q2VsbCA9IG5ldyBCb2FyZENlbGwoeSArIDEsIHggKyAxKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2JvYXJkW3hdLnB1c2goZW1wdHlDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiZnVuY3Rpb24gaGl0U3RhdHVzKCkge1xuICAgIGNvbnN0IE5PVF9ISVQgPSAnTk9UX0hJVCc7XG4gICAgY29uc3QgSElUX0NFTEwgPSAnSElUX0NFTEwnO1xuICAgIGNvbnN0IEhJVF9TSElQID0gJ0hJVF9TSElQJztcblxuICAgIHJldHVybiB7XG4gICAgICAgIE5PVF9ISVQsXG4gICAgICAgIEhJVF9DRUxMLFxuICAgICAgICBISVRfU0hJUFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoaXRTdGF0dXM7IiwiY2xhc3MgUGxheWVyIHtcbiAgI3BsYXllck5hbWUgPSAnJztcblxuICAjaGl0TG9nID0gW107XG5cbiAgI3BsYXllclNoaXBzID0gW107XG5cbiAgY29uc3RydWN0b3IodXNlck5hbWUpIHtcbiAgICB0aGlzLiNwbGF5ZXJOYW1lID0gdXNlck5hbWU7XG4gIH1cblxuICBsb2dIaXQoY29vcmQpIHtcbiAgICB0aGlzLiNoaXRMb2cucHVzaChjb29yZCk7XG4gIH1cblxuICBhZGRTaGlwKHNoaXApIHtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgZ2V0SGl0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRMb2cuc2xpY2UoKTtcbiAgfVxuXG4gIGdldFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5zbGljZSgpO1xuICB9XG5cbiAgcmVzZXRVc2VyKCkge1xuICAgIHRoaXMuI2hpdExvZyA9IFtdO1xuICAgIHRoaXMuI3BsYXllclNoaXBzID0gW107XG4gIH1cblxuICBzZXRQbGF5ZXJOYW1lKHVzZXJOYW1lKSB7XG4gICAgdGhpcy4jcGxheWVyTmFtZSA9IHVzZXJOYW1lO1xuICB9XG5cbiAgZ2V0UGxheWVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyTmFtZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImltcG9ydCBTaGlwUGllY2UgZnJvbSBcIi4vU2hpcFBpZWNlXCI7XG5cbmNsYXNzIFNoaXAge1xuICAjdGltZXNIaXQgPSAwO1xuXG4gICNzaGlwUGllY2VzID0gW107XG4gIFxuICAjY29vcmRTdGFydCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgdGhpcy4jY29vcmRTdGFydCA9IGNvb3JkU3RhcnRcbiAgICB0aGlzLiNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKTtcbiAgfVxuXG4gIHRyeUhpdChoaXRDb29yZCkge1xuICAgIGNvbnN0IHNoaXBQaWVjZSA9IHRoaXMuI3NoaXBQaWVjZXMuZmluZChwaWVjZUNvb3JkID0+XG4gICAgICAocGllY2VDb29yZC5jb29yZFggPT09IGhpdENvb3JkLmNvb3JkWCkgJiYgKHBpZWNlQ29vcmQuY29vcmRZID09PSBoaXRDb29yZC5jb29yZFkpXG4gICAgKTtcblxuICAgIGlmIChzaGlwUGllY2UgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlKSByZXR1cm4gZmFsc2U7IFxuXG4gICAgdGhpcy4jdGltZXNIaXQgKz0gMTtcblxuICAgIHJldHVybiBzaGlwUGllY2UuaGl0KCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMuZXZlcnkoc2hpcFBpZWNlID0+XG4gICAgICBzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlXG4gICAgKTtcbiAgfVxuXG4gICNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHNoaXBQaWVjZUNvb3JkID0gbnVsbDtcblxuICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYICsgaSwgY29vcmRTdGFydC5jb29yZFkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYLCBjb29yZFN0YXJ0LmNvb3JkWSArIGkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiNzaGlwUGllY2VzLnB1c2goc2hpcFBpZWNlQ29vcmQpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvb3JkU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Nvb3JkU3RhcnQ7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5sZW5ndGg7IH1cblxuICBnZXQgdGltZXNIaXQoKSB7IHJldHVybiB0aGlzLiN0aW1lc0hpdDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcblxuY2xhc3MgU2hpcFBpZWNlIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI2hpdFN0YXR1cyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLiNoaXRTdGF0dXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy4jaGl0U3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFggfVxuXG4gICAgZ2V0IGNvb3JkWSgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWTsgfVxuXG4gICAgZ2V0IGhpdFN0YXR1cygpIHsgcmV0dXJuIHRoaXMuI2hpdFN0YXR1czsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwUGllY2U7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLXVpLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG5cbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnYnV0dG9uJ1xuICAgICdib2FyZCc7XG59XG5cbi5jb250cm9scy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBnYXA6IDJlbVxufVxuXG4uYm9hcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtO1xufVxuXG4uYm9hcmQge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gIGdyaWQtYXJlYTogYm9hcmQ7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uYm9hcmQtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYm9hcmQtY2VsbDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5cbi5idXR0b24ge1xuICBncmlkLWFyZWE6IGJ1dHRvbjtcblxuICBwYWRkaW5nOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24tYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFROztFQUVSOztXQUVTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS11aS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnYnV0dG9uJ1xcbiAgICAnYm9hcmQnO1xcbn1cXG5cXG4uY29udHJvbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbVxcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICBncmlkLWFyZWE6IGJvYXJkO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQtY2VsbDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcblxcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b24tYWN0aXZlIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyJztcbmltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbImhpdFN0YXR1cyIsIl9ib2FyZE9uZSIsIldlYWtNYXAiLCJfYm9hcmRUd28iLCJfc3RhcnRHYW1lQnV0dG9uIiwiX3N3aXRjaEhvcml6b250YWxCdXR0b24iLCJfcmVzdGFydEdhbWVCdXR0b24iLCJfYm9hcmRJbml0IiwiX05VTUJFUl9PRl9DRUxMUyIsIl9pc0hvcml6b250YWwiLCJfbWFwSGFuZGxlcnMiLCJXZWFrU2V0IiwiX2luaXRCb2FyZCIsIl91cGRhdGVET01Cb2FyZCIsIl91cGRhdGVHYW1lU3RhdHVzIiwiX3RvZ2dsZUhvcml6b250YWwiLCJfY3JlYXRlQm9hcmRDZWxsIiwiX3VwZGF0ZUNlbGxNZXRhRGF0YSIsIl91cGRhdGVDZWxsU3RhdHVzIiwiRE9NQ29udHJvbGxlciIsImNvbnRyb2xsZXJBUEkiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIndyaXRhYmxlIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9pbml0Qm9hcmQyIiwiY2FsbCIsImRvQm9hcmRBY3Rpb25IYW5kbGVyIiwiX21hcEhhbmRsZXJzMiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInVwZGF0ZVVJIiwiZ2FtZVN0YXRlRGF0YSIsIl91cGRhdGVET01Cb2FyZDIiLCJwbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwicGxheWVyVHdvR2FtZWJvYXJkRGF0YSIsImdldElzSG9yaXpvbnRhbCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWVIYW5kbGVyIiwiX3RvZ2dsZUhvcml6b250YWwyIiwiYmluZCIsInJlc3RhcnRSb3VuZEhhbmRsZXIiLCJpIiwibmV3Qm9hcmRDZWxsT25lIiwiX2NyZWF0ZUJvYXJkQ2VsbDIiLCJuZXdCb2FyZENlbGxUd28iLCJhcHBlbmRDaGlsZCIsIl9jbGFzc1ByaXZhdGVGaWVsZFNldCIsImdhbWVib2FyZE9uZURhdGEiLCJnYW1lYm9hcmRUd29EYXRhIiwibm9kZUJvYXJkT25lIiwiY2hpbGROb2RlcyIsImRhdGFCb2FyZE9uZSIsImJvYXJkRGF0YSIsIm5vZGVCb2FyZFR3byIsImRhdGFCb2FyZFR3byIsIl91cGRhdGVDZWxsU3RhdHVzMiIsIl91cGRhdGVDZWxsTWV0YURhdGEyIiwicGxheWVyVXNlck5hbWUiLCJfdXBkYXRlR2FtZVN0YXR1czIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJuZXdDZWxsIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImNlbGxOb2RlIiwiY2VsbERhdGEiLCJwbGF5ZXJuYW1lIiwiY29vcmQiLCJnZXRDb29yZCIsInNldEF0dHJpYnV0ZSIsImNvb3JkWCIsImNvb3JkWSIsIm5vZGUiLCJkYXRhIiwic3RhdHVzIiwiZ2V0SGl0U3RhdHVzIiwiTk9UX0hJVCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiSElUX1NISVAiLCJISVRfQ0VMTCIsIlBsYXllciIsIlNoaXAiLCJHYW1lYm9hcmQiLCJDb29yZGluYXRlIiwiR2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJfY3VycmVudFBsYXllciIsIl9pc0dhbWVSdW5uaW5nIiwiX2lzUm91bmRSdW5uaW5nIiwiX2lzUGxheWVyT25lVHVybiIsIl9wbGF5ZXJPbmUiLCJfcGxheWVyVHdvIiwiX3BsYXllck9uZUdhbWVib2FyZCIsIl9wbGF5ZXJUd29HYW1lYm9hcmQiLCJfRE9NQ29udHJvbGxlciIsIl91cGRhdGVHYW1lVUkiLCJfZ2V0R2FtZVN0YXRlRGF0YSIsIl9ydW5Sb3VuZCIsIl9lbmRHYW1lIiwiX3N3aXRjaEN1cnJlbnRQbGF5ZXIiLCJfZ2V0V2lubmVyIiwiX3BsYXllckF0dGFjayIsIl9hdHRhY2tDZWxsIiwiX3BsYXllclBsYWNlU2hpcCIsIl9wbGFjZVNoaXAiLCJfZ2V0QVBJQ29udGFpbmVyIiwiR2FtZUNvbnRyb2xsZXIiLCJfZ2V0QVBJQ29udGFpbmVyMiIsIl91cGRhdGVHYW1lVUkyIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0NlbGxPd25lciIsImRhdGFzZXQiLCJnZXRQbGF5ZXJOYW1lIiwiY29vcmR4IiwiY29vcmR5IiwiY2VsbENvb3JkIiwiaXNIb3Jpem9udGFsIiwiX3BsYXllclBsYWNlU2hpcDIiLCJfcGxheWVyQXR0YWNrMiIsImNvbnNvbGUiLCJsb2ciLCJfZ2V0R2FtZVN0YXRlRGF0YTIiLCJnYW1lU3RhdGVEYXRhQnVpbGRlciIsInNldEN1cnJlbnRVc2VyTmFtZSIsInNldElzR2FtZVJ1bm5pbmciLCJzZXRJc1JvdW5kUnVubmluZyIsInNldElzUGxheWVyT25lVHVybiIsInNldFBsYXllck9uZVVzZXJOYW1lIiwic2V0UGxheWVyVHdvVXNlck5hbWUiLCJzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiZ2V0R2FtZWJvYXJkRGF0YSIsInNldFBsYXllclR3b0dhbWVib2FyZERhdGEiLCJidWlsZCIsIl9ydW5Sb3VuZDIiLCJnZXRTaGlwcyIsImxlbmd0aCIsIl9lbmRHYW1lMiIsInBsYXllcldpbm5lciIsIl9zd2l0Y2hDdXJyZW50UGxheWVyMiIsIl9nZXRXaW5uZXIyIiwiYWxsU2hpcHNTdW5rIiwiX2F0dGFja0NlbGwyIiwid2lubmVyIiwiY29uY2F0IiwiY3VycmVudEJvYXJkIiwicmVjZWl2ZUF0dGFjayIsIl9wbGFjZVNoaXAyIiwibmV3U2hpcCIsImlzUGxhY2VkIiwicGxhY2VTaGlwIiwiYWRkU2hpcCIsIl9jb29yZCIsIl9zaGlwIiwiX2lzT2NjdXBpZWQiLCJfaGFzQmVlbkhpdCIsIkJvYXJkQ2VsbCIsIm9jY3VweSIsInNoaXAiLCJoaXQiLCJ0cnlIaXQiLCJnZXRDb29yZFN0cmluZyIsImdldCIsIl9jb29yZFgiLCJfY29vcmRZIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJHYW1lU3RhdGVEYXRhIiwiX2N1cnJlbnRQbGF5ZXJVc2VyTmFtZSIsIl9wbGF5ZXJPbmVVc2VyTmFtZSIsIl9wbGF5ZXJUd29Vc2VyTmFtZSIsIl9wbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiX3BsYXllclR3b0dhbWVib2FyZERhdGEiLCJzZXQiLCJjdXJyZW50VXNlck5hbWUiLCJpc0dhbWVSdW5uaW5nIiwiaXNSb3VuZFJ1bm5pbmciLCJpc1BsYXllck9uZVR1cm4iLCJwbGF5ZXJPbmVVc2VyTmFtZSIsInBsYXllclR3b1VzZXJOYW1lIiwiX2dhbWVTdGF0ZURhdGEiLCJjdXJyZW50UGxheWVyVXNlck5hbWUiLCJyZXNldCIsIkdhbWVib2FyZERhdGEiLCJfYm9hcmREYXRhIiwiX3BsYXllclVzZXJOYW1lIiwiX2FsbFNoaXBzU3VuayIsInNldEJvYXJkRGF0YSIsImJvYXJkIiwiYm9hcmRDb3B5Iiwic2xpY2UiLCJmb3JFYWNoIiwicm93IiwicHVzaCIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2dhbWVib2FyZERhdGEiLCJfcmVzZXQiLCJHYW1lQm9hcmREYXRhQnVpbGRlciIsImdhbWVib2FyZCIsInNldFBsYXllclVzZXJOYW1lIiwic2V0QWxsU2hpcHNTdW5rIiwiZ2FtZWJvYXJkRGF0YSIsIl9yZXNldDIiLCJHYW1lYm9hcmREYXRhQnVpbGRlciIsIl93aWR0aCIsIl9oZWlnaHQiLCJfYm9hcmQiLCJfc2hpcExpc3QiLCJfY2FuUGxhY2UiLCJfY2FuUGxhY2UyIiwiZ2V0Q29vcmRTdGFydCIsImJvYXJkQ2VsbCIsImV2ZXJ5IiwiaXNTdW5rIiwiZ2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJjb29yZFN0YXJ0IiwiaXNPY2N1cGllZCIsIngiLCJ5IiwiZW1wdHlDZWxsIiwidXNlck5hbWUiLCJfcGxheWVyTmFtZSIsIl9oaXRMb2ciLCJfcGxheWVyU2hpcHMiLCJsb2dIaXQiLCJnZXRIaXRMb2ciLCJyZXNldFVzZXIiLCJzZXRQbGF5ZXJOYW1lIiwiU2hpcFBpZWNlIiwiX3RpbWVzSGl0IiwiX3NoaXBQaWVjZXMiLCJfY29vcmRTdGFydCIsIl9idWlsZFNoaXAiLCJob3Jpem9udGFsIiwiX2J1aWxkU2hpcDIiLCJoaXRDb29yZCIsInNoaXBQaWVjZSIsImZpbmQiLCJwaWVjZUNvb3JkIiwidW5kZWZpbmVkIiwic2hpcFBpZWNlQ29vcmQiLCJfaGl0U3RhdHVzIiwiY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=