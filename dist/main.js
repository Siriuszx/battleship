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
      value: true
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
      if (_classPrivateFieldGet(this, _isGameRunning) === false) return;
      var cellNode = event.target;
      if (cellNode.dataset.playername !== _classPrivateFieldGet(this, _currentPlayer).getPlayerName()) return;
      var coordX = cellNode.dataset.coordx;
      var coordY = cellNode.dataset.coordy;
      var cellCoord = new _entities_Coordinate__WEBPACK_IMPORTED_MODULE_4__["default"](coordX, coordY);
      var isHorizontal = _classPrivateFieldGet(this, _DOMController).getIsHorizontal();
      switch (_classPrivateFieldGet(this, _isRoundRunning)) {
        case false:
          {
            _classPrivateMethodGet(this, _playerPlaceShip, _playerPlaceShip2).call(this, cellCoord, isHorizontal);
            break;
          }
        case true:
          {
            _classPrivateMethodGet(this, _playerAttack, _playerAttack2).call(this, cellCoord);
            break;
          }
        default:
          break;
      }
      _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this);
    }
  }, {
    key: "startGameHandler",
    value: function startGameHandler(event) {
      if (_classPrivateFieldGet(this, _isGameRunning) === true) return false;
      _classPrivateFieldSet(this, _isGameRunning, true);
      return true;
    }
  }, {
    key: "restartRoundHandler",
    value: function restartRoundHandler(event) {
      _classPrivateFieldSet(this, _playerOneGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
      _classPrivateFieldSet(this, _playerTwoGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
      _classPrivateFieldSet(this, _playerOne, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]());
      _classPrivateFieldSet(this, _playerTwo, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]());
      _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
      _classPrivateFieldSet(this, _isPlayerOneTurn, true);
      _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this);
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
  var gameStateData = gameStateDataBuilder.setCurrentUserName(_classPrivateFieldGet(this, _currentPlayer).getPlayerName()).setIsGameRunning(_classPrivateFieldGet(this, _isGameRunning)).setIsRoundRunning(_classPrivateFieldGet(this, _isRoundRunning)).setIsPlayerOneTurn(_classPrivateFieldGet(this, _isPlayerOneTurn)).setPlayerOneUserName(_classPrivateFieldGet(this, _playerOne).getPlayerName()).setPlayerTwoUserName(_classPrivateFieldGet(this, _playerTwo).getPlayerName()).setPlayerOneGameboardData(_classPrivateFieldGet(this, _playerOneGameboard).getGameboardData(_classPrivateFieldGet(this, _playerOne).getPlayerName())).setPlayerTwoGameboardData(_classPrivateFieldGet(this, _playerOneGameboard).getGameboardData(_classPrivateFieldGet(this, _playerTwo).getPlayerName())).build();
  return gameStateData;
}
function _runRound2() {
  if (_classPrivateFieldGet(this, _playerOne).getShips().length === 5 && _classPrivateFieldGet(this, _playerTwo).getShips().length === 5) {
    console.log('round is running');
    _classPrivateFieldSet(this, _isRoundRunning, true);
    _classPrivateFieldSet(this, _isPlayerOneTurn, true);
    _classPrivateMethodGet(this, _switchCurrentPlayer, _switchCurrentPlayer2).call(this);
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
  } else {
    _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
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
    currentBoard = _classPrivateFieldGet(this, _playerOneGameboard);
  } else {
    currentBoard = _classPrivateFieldGet(this, _playerTwoGameboard);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBeUQ7QUFDOUI7QUFFM0IsSUFBTWMsVUFBVSxHQUFHLElBQUl4SSxrRUFBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9ET01Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0JvYXJkQ2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9EYXRhUG9pbnRDb250YWluZXJzL0dhbWVTdGF0ZURhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9EYXRhUG9pbnRDb250YWluZXJzL0dhbWVTdGF0ZURhdGFCdWlsZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lYm9hcmREYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lYm9hcmREYXRhQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0hpdFN0YXR1cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwUGllY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi4vZW50aXRpZXMvSGl0U3RhdHVzXCI7XG5cbmNsYXNzIERPTUNvbnRyb2xsZXIge1xuICAjYm9hcmRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtb25lJyk7XG5cbiAgI2JvYXJkVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLXR3bycpO1xuXG4gICNzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZScpO1xuXG4gICNzd2l0Y2hIb3Jpem9udGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvcml6b250YWwtc3RhdHVzJyk7XG5cbiAgI3Jlc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQtZ2FtZScpO1xuXG4gICNib2FyZEluaXQgPSBmYWxzZTtcblxuICAjTlVNQkVSX09GX0NFTExTID0gMTAwO1xuXG4gICNpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5kb0JvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgdGhpcy4jbWFwSGFuZGxlcnMoY29udHJvbGxlckFQSSk7XG4gIH1cblxuICAjbWFwSGFuZGxlcnMoY29udHJvbGxlckFQSSkge1xuICAgIHRoaXMuI3N0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXJBUEkuc3RhcnRHYW1lSGFuZGxlcik7XG4gICAgdGhpcy4jc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuI3RvZ2dsZUhvcml6b250YWwuYmluZCh0aGlzKSk7XG4gICAgdGhpcy4jcmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnJlc3RhcnRSb3VuZEhhbmRsZXIpO1xuICB9XG5cbiAgI2luaXRCb2FyZChkb0JvYXJkQWN0aW9uSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jTlVNQkVSX09GX0NFTExTOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld0JvYXJkQ2VsbE9uZSA9IHRoaXMuI2NyZWF0ZUJvYXJkQ2VsbChkb0JvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxUd28gPSB0aGlzLiNjcmVhdGVCb2FyZENlbGwoZG9Cb2FyZEFjdGlvbkhhbmRsZXIpO1xuXG4gICAgICB0aGlzLiNib2FyZE9uZS5hcHBlbmRDaGlsZChuZXdCb2FyZENlbGxPbmUpO1xuICAgICAgdGhpcy4jYm9hcmRUd28uYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsVHdvKTtcbiAgICB9XG5cbiAgICB0aGlzLiNib2FyZEluaXQgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSkge1xuICAgIHRoaXMuI3VwZGF0ZURPTUJvYXJkKFxuICAgICAgZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVHYW1lYm9hcmREYXRhLFxuICAgICAgZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29HYW1lYm9hcmREYXRhXG4gICAgKTtcbiAgfVxuXG4gICN1cGRhdGVET01Cb2FyZChnYW1lYm9hcmRPbmVEYXRhLCBnYW1lYm9hcmRUd29EYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNOVU1CRVJfT0ZfQ0VMTFM7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgbm9kZUJvYXJkT25lID0gdGhpcy4jYm9hcmRPbmUuY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZE9uZSA9IGdhbWVib2FyZE9uZURhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICBjb25zdCBub2RlQm9hcmRUd28gPSB0aGlzLiNib2FyZFR3by5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkVHdvID0gZ2FtZWJvYXJkVHdvRGF0YS5ib2FyZERhdGFbaV07XG5cbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRUd28sIGRhdGFCb2FyZFR3byk7XG5cbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxNZXRhRGF0YShub2RlQm9hcmRPbmUsIGRhdGFCb2FyZE9uZSwgZ2FtZWJvYXJkT25lRGF0YS5wbGF5ZXJVc2VyTmFtZSk7XG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVib2FyZFR3b0RhdGEucGxheWVyVXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVHYW1lU3RhdHVzKGdhbWVTdGF0ZURhdGEpIHtcblxuICB9XG5cbiAgI3RvZ2dsZUhvcml6b250YWwoKSB7XG4gICAgdGhpcy4jaXNIb3Jpem9udGFsID0gIXRoaXMuI2lzSG9yaXpvbnRhbDtcbiAgICB0aGlzLiNzd2l0Y2hIb3Jpem9udGFsQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2J1dHRvbi1hY3RpdmUnKTtcbiAgfVxuXG4gICNjcmVhdGVCb2FyZENlbGwoZG9Cb2FyZEFjdGlvbkhhbmRsZXIpIHtcbiAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNlbGwnKTtcbiAgICBuZXdDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9Cb2FyZEFjdGlvbkhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIG5ld0NlbGw7XG4gIH1cblxuICAjdXBkYXRlQ2VsbE1ldGFEYXRhKGNlbGxOb2RlLCBjZWxsRGF0YSwgcGxheWVybmFtZSkge1xuICAgIGNvbnN0IGNvb3JkID0gY2VsbERhdGEuZ2V0Q29vcmQoKTtcblxuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHgnLCBjb29yZC5jb29yZFgpO1xuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHknLCBjb29yZC5jb29yZFkpO1xuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGF5ZXJuYW1lJywgcGxheWVybmFtZSk7XG4gIH1cblxuICAjdXBkYXRlQ2VsbFN0YXR1cyhjZWxsTm9kZSwgY2VsbERhdGEpIHtcbiAgICBpZiAoIWNlbGxOb2RlIHx8ICFjZWxsRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm9kZSA9IGNlbGxOb2RlO1xuICAgIGNvbnN0IGRhdGEgPSBjZWxsRGF0YTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2V0SGl0U3RhdHVzKCk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5OT1RfSElUOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRkZGRkYnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX1NISVA6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGMDAwMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfQ0VMTDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZXRJc0hvcml6b250YWwoKSB7IHJldHVybiB0aGlzLiNpc0hvcml6b250YWwgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlcjtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2VudGl0aWVzL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2VudGl0aWVzL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL2VudGl0aWVzL0dhbWVib2FyZFwiO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4uL2VudGl0aWVzL0Nvb3JkaW5hdGVcIjtcbmltcG9ydCBHYW1lU3RhdGVEYXRhQnVpbGRlciBmcm9tIFwiLi4vZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lU3RhdGVEYXRhQnVpbGRlclwiO1xuXG5jbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICNjdXJyZW50UGxheWVyID0gbnVsbDtcblxuICAjaXNHYW1lUnVubmluZyA9IHRydWU7XG5cbiAgI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG5cbiAgI2lzUGxheWVyT25lVHVybiA9IHRydWU7XG5cbiAgI3BsYXllck9uZSA9IG51bGw7XG5cbiAgI3BsYXllclR3byA9IG51bGw7XG5cbiAgI3BsYXllck9uZUdhbWVib2FyZCA9IG51bGw7XG5cbiAgI3BsYXllclR3b0dhbWVib2FyZCA9IG51bGw7XG5cbiAgI0RPTUNvbnRyb2xsZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI0RPTUNvbnRyb2xsZXIgPSBuZXcgRE9NQ29udHJvbGxlcih0aGlzLiNnZXRBUElDb250YWluZXIoKSk7XG4gICAgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdQbGF5ZXIgT25lJyk7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoKTtcbiAgfVxuXG4gIC8vIENhbGxiYWNrIHRvIGxldCBvdGhlciBsYXllcnMgb2YgcHJvZ3JhbSBpbnRlcmFjdCB3aXRoIG91ciBnYW1lIGNvbnRyb2xsZXJcbiAgZG9Cb2FyZEFjdGlvbkhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy4jaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKGNlbGxOb2RlLmRhdGFzZXQucGxheWVybmFtZSAhPT0gdGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuXG4gICAgY29uc3QgY2VsbENvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuI0RPTUNvbnRyb2xsZXIuZ2V0SXNIb3Jpem9udGFsKCk7XG5cbiAgICBzd2l0Y2ggKHRoaXMuI2lzUm91bmRSdW5uaW5nKSB7XG4gICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgIHRoaXMuI3BsYXllclBsYWNlU2hpcChjZWxsQ29vcmQsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgIHRoaXMuI3BsYXllckF0dGFjayhjZWxsQ29vcmQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgc3RhcnRHYW1lSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVzdGFydFJvdW5kSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyT25lID0gbmV3IFBsYXllcigpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuICAgIHRoaXMuI2lzUGxheWVyT25lVHVybiA9IHRydWU7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoKTtcbiAgfVxuXG4gICN1cGRhdGVHYW1lVUkoKSB7XG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dldEdhbWVTdGF0ZURhdGEoKTtcblxuICAgIHRoaXMuI0RPTUNvbnRyb2xsZXIudXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSk7XG4gIH1cblxuICAjZ2V0R2FtZVN0YXRlRGF0YSgpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhQnVpbGRlciA9IG5ldyBHYW1lU3RhdGVEYXRhQnVpbGRlcigpO1xuXG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IGdhbWVTdGF0ZURhdGFCdWlsZGVyXG4gICAgICAuc2V0Q3VycmVudFVzZXJOYW1lKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldElzR2FtZVJ1bm5pbmcodGhpcy4jaXNHYW1lUnVubmluZylcbiAgICAgIC5zZXRJc1JvdW5kUnVubmluZyh0aGlzLiNpc1JvdW5kUnVubmluZylcbiAgICAgIC5zZXRJc1BsYXllck9uZVR1cm4odGhpcy4jaXNQbGF5ZXJPbmVUdXJuKVxuICAgICAgLnNldFBsYXllck9uZVVzZXJOYW1lKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0UGxheWVyVHdvVXNlck5hbWUodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5nZXRHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpKVxuICAgICAgLnNldFBsYXllclR3b0dhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHJldHVybiBnYW1lU3RhdGVEYXRhO1xuICB9XG5cbiAgLy8gVG8gY2hlY2sgaWYgcm91bmQgc2hvdWxkIHN0YXJ0IG9uY2UgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgI3J1blJvdW5kKCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUgJiYgdGhpcy4jcGxheWVyVHdvLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICBjb25zb2xlLmxvZygncm91bmQgaXMgcnVubmluZycpO1xuICAgICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcbiAgICB9XG4gIH1cblxuICAjZW5kR2FtZShwbGF5ZXJXaW5uZXIpIHtcbiAgICBpZiAocGxheWVyV2lubmVyID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gICNzd2l0Y2hDdXJyZW50UGxheWVyKCkge1xuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUd287XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gIXRoaXMuI2lzUGxheWVyT25lVHVybjtcbiAgfVxuXG4gICNnZXRXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3dpbicpO1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3bztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZygnd2luJyk7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gVE9ETzogaW1wbGVtZW50IGF0dGFjayBsb2dpY1xuICAjcGxheWVyQXR0YWNrKGNvb3JkKSB7XG4gICAgdGhpcy4jYXR0YWNrQ2VsbChjb29yZCk7XG4gICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuXG4gICAgY29uc3Qgd2lubmVyID0gdGhpcy4jZ2V0V2lubmVyKCk7XG5cbiAgICBpZiAod2lubmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiNlbmRHYW1lKHdpbm5lcik7XG4gICAgICBjb25zb2xlLmxvZyhgcGxheWVyICR7d2lubmVyfSB3b25gKTtcbiAgICB9XG4gIH1cblxuICAjYXR0YWNrQ2VsbChjb29yZCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgY3VycmVudEJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAjcGxheWVyUGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICB0aGlzLiNwbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCk7XG5cbiAgICB0aGlzLiNydW5Sb3VuZCgpO1xuICB9XG5cbiAgI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKSB7XG4gICAgaWYgKHRoaXMuI2lzUm91bmRSdW5uaW5nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcbiAgICBsZXQgbmV3U2hpcCA9IG51bGw7XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9XG5cbiAgICAvLyBUbyBidWlsZCBzaGlwcyBpbiBwcmUtZGV0ZXJtaW5lZCBwYXR0ZXJuICg1LDQsMywzLDIpXG4gICAgc3dpdGNoICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDQ6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUGxheWVycyBzaG91bGQgdGFrZSB0dXJucyBhZnRlciBidWlsZGluZyB0aGVpciBlbnRpcmUgZmxlZXRcbiAgICBpZiAoaXNQbGFjZWQpIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIuYWRkU2hpcChuZXdTaGlwKTtcbiAgICAgIGNvbnNvbGUubG9nKCdwbGFjZWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IHBsYXllciBzaGlwcyAke3RoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGh9YCk7XG5cbiAgICAgIGlmICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2l0Y2gnKTtcbiAgICAgICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAjZ2V0QVBJQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydEdhbWVIYW5kbGVyOiB0aGlzLnN0YXJ0R2FtZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRvQm9hcmRBY3Rpb25IYW5kbGVyOiB0aGlzLmRvQm9hcmRBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICByZXN0YXJ0Um91bmRIYW5kbGVyOiB0aGlzLnJlc3RhcnRSb3VuZEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi9IaXRTdGF0dXNcIjtcblxuY2xhc3MgQm9hcmRDZWxsIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI3NoaXAgPSBudWxsO1xuXG4gICAgI2lzT2NjdXBpZWQgPSBmYWxzZTtcblxuICAgICNoYXNCZWVuSGl0ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBvY2N1cHkoc2hpcCkge1xuICAgICAgICBpZiAodGhpcy4jc2hpcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2lzT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiNzaGlwID0gc2hpcDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNoYXNCZWVuSGl0ID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaGFzQmVlbkhpdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgIHRoaXMuI3NoaXAudHJ5SGl0KHRoaXMuI2Nvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldENvb3JkKCkgeyByZXR1cm4gdGhpcy4jY29vcmQ7IH1cblxuICAgIGdldENvb3JkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFg6ICR7dGhpcy4jY29vcmQuY29vcmRYfSBZOiAke3RoaXMuI2Nvb3JkLmNvb3JkWX1gO1xuICAgIH1cblxuICAgIGdldEhpdFN0YXR1cygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLiNoYXNCZWVuSGl0KSB7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLk5PVF9ISVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX1NISVA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9DRUxMO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc09jY3VwaWVkKCkgeyByZXR1cm4gdGhpcy4jaXNPY2N1cGllZDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZENlbGw7IiwiY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgI2Nvb3JkWCA9IDA7XG5cbiAgICAjY29vcmRZID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkWCA9IGNvb3JkWDtcbiAgICAgICAgdGhpcy4jY29vcmRZID0gY29vcmRZO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRYLCAxMCk7IH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRZLCAxMCk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRpbmF0ZTsiLCJjbGFzcyBHYW1lU3RhdGVEYXRhIHtcbiAgICAjY3VycmVudFBsYXllclVzZXJOYW1lO1xuXG4gICAgI2lzR2FtZVJ1bm5pbmc7XG5cbiAgICAjaXNSb3VuZFJ1bm5pbmc7XG5cbiAgICAjaXNQbGF5ZXJPbmVUdXJuO1xuXG4gICAgI3BsYXllck9uZVVzZXJOYW1lO1xuXG4gICAgI3BsYXllclR3b1VzZXJOYW1lO1xuXG4gICAgI3BsYXllck9uZUdhbWVib2FyZERhdGE7XG5cbiAgICAjcGxheWVyVHdvR2FtZWJvYXJkRGF0YTtcblxuICAgIGdldCBjdXJyZW50VXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNjdXJyZW50UGxheWVyVXNlck5hbWU7IH1cblxuICAgIHNldCBjdXJyZW50VXNlck5hbWUoY3VycmVudFVzZXJOYW1lKSB7IHRoaXMuI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZSA9IGN1cnJlbnRVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IGlzR2FtZVJ1bm5pbmcoKSB7IHJldHVybiB0aGlzLiNpc0dhbWVSdW5uaW5nOyB9XG5cbiAgICBzZXQgaXNHYW1lUnVubmluZyhpc0dhbWVSdW5uaW5nKSB7IHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSBpc0dhbWVSdW5uaW5nOyB9XG5cbiAgICBnZXQgaXNSb3VuZFJ1bm5pbmcoKSB7IHJldHVybiB0aGlzLiNpc1JvdW5kUnVubmluZzsgfVxuXG4gICAgc2V0IGlzUm91bmRSdW5uaW5nKGlzUm91bmRSdW5uaW5nKSB7IHRoaXMuI2lzUm91bmRSdW5uaW5nID0gaXNSb3VuZFJ1bm5pbmc7IH1cblxuICAgIGdldCBpc1BsYXllck9uZVR1cm4oKSB7IHJldHVybiB0aGlzLiNpc1BsYXllck9uZVR1cm47IH1cblxuICAgIHNldCBpc1BsYXllck9uZVR1cm4oaXNQbGF5ZXJPbmVUdXJuKSB7IHRoaXMuI2lzUGxheWVyT25lVHVybiA9IGlzUGxheWVyT25lVHVybjsgfVxuXG4gICAgZ2V0IHBsYXllck9uZVVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVVc2VyTmFtZShwbGF5ZXJPbmVVc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJPbmVVc2VyTmFtZSA9IHBsYXllck9uZVVzZXJOYW1lOyB9XG5cbiAgICBnZXQgcGxheWVyVHdvVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29Vc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllclR3b1VzZXJOYW1lKHBsYXllclR3b1VzZXJOYW1lKSB7IHRoaXMuI3BsYXllclR3b1VzZXJOYW1lID0gcGxheWVyVHdvVXNlck5hbWU7IH1cblxuICAgIGdldCBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgc2V0IHBsYXllck9uZUdhbWVib2FyZERhdGEocGxheWVyT25lR2FtZWJvYXJkRGF0YSkgeyB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhID0gcGxheWVyT25lR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllclR3b0dhbWVib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmREYXRhOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvR2FtZWJvYXJkRGF0YShwbGF5ZXJUd29HYW1lYm9hcmREYXRhKSB7IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZERhdGEgPSBwbGF5ZXJUd29HYW1lYm9hcmREYXRhOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZURhdGE7IiwiaW1wb3J0IEdhbWVTdGF0ZURhdGEgZnJvbSBcIi4vR2FtZVN0YXRlRGF0YVwiO1xuXG5jbGFzcyBHYW1lU3RhdGVEYXRhQnVpbGRlciB7XG4gICAgI2dhbWVTdGF0ZURhdGEgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEgPSBuZXcgR2FtZVN0YXRlRGF0YSgpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRVc2VyTmFtZShjdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5jdXJyZW50UGxheWVyVXNlck5hbWUgPSBjdXJyZW50VXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzR2FtZVJ1bm5pbmcoaXNHYW1lUnVubmluZykge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcgPSBpc0dhbWVSdW5uaW5nO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc1JvdW5kUnVubmluZyhpc1JvdW5kUnVubmluZykge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID0gaXNSb3VuZFJ1bm5pbmc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzUGxheWVyT25lVHVybihpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc1BsYXllck9uZVR1cm4gPSBpc1BsYXllck9uZVR1cm47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZVVzZXJOYW1lKHBsYXllck9uZVVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lVXNlck5hbWUgPSBwbGF5ZXJPbmVVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvVXNlck5hbWUocGxheWVyVHdvVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29Vc2VyTmFtZSA9IHBsYXllclR3b1VzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHBsYXllck9uZUdhbWVib2FyZERhdGEpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVHYW1lYm9hcmREYXRhID0gcGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YShwbGF5ZXJUd29HYW1lYm9hcmREYXRhKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvR2FtZWJvYXJkRGF0YSA9IHBsYXllclR3b0dhbWVib2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhID0gbmV3IEdhbWVTdGF0ZURhdGEoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dhbWVTdGF0ZURhdGE7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIGdhbWVTdGF0ZURhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGVEYXRhQnVpbGRlcjsiLCJjbGFzcyBHYW1lYm9hcmREYXRhIHtcbiAgICAjYm9hcmREYXRhID0gbnVsbDtcblxuICAgICNwbGF5ZXJVc2VyTmFtZSA9ICcnO1xuXG4gICAgI2FsbFNoaXBzU3VuayA9IG51bGw7XG5cbiAgICBzZXRCb2FyZERhdGEoYm9hcmQpIHtcbiAgICAgICAgY29uc3QgYm9hcmRDb3B5ID0gYm9hcmQuc2xpY2UoKTtcbiAgICAgICAgY29uc3QgYm9hcmREYXRhID0gW107XG5cbiAgICAgICAgYm9hcmRDb3B5LmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGJvYXJkRGF0YS5wdXNoKC4uLnJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2JvYXJkRGF0YSA9IGJvYXJkRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKSB7IHRoaXMuI3BsYXllclVzZXJOYW1lID0gcGxheWVyVXNlck5hbWU7IH1cblxuICAgIGdldCBhbGxTaGlwc1N1bmsoKSB7IHJldHVybiB0aGlzLiNhbGxTaGlwc1N1bms7IH1cblxuICAgIHNldCBhbGxTaGlwc1N1bmsoYWxsU2hpcHNTdW5rKSB7IHRoaXMuI2FsbFNoaXBzU3VuayA9IGFsbFNoaXBzU3VuazsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmREYXRhOyIsImltcG9ydCBHYW1lYm9hcmREYXRhIGZyb20gXCIuL0dhbWVib2FyZERhdGFcIjtcblxuY2xhc3MgR2FtZUJvYXJkRGF0YUJ1aWxkZXIge1xuICAgICNnYW1lYm9hcmREYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhID0gbmV3IEdhbWVib2FyZERhdGEoKTtcbiAgICB9XG5cbiAgICBzZXRCb2FyZERhdGEoZ2FtZWJvYXJkKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEuc2V0Qm9hcmREYXRhKGdhbWVib2FyZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEucGxheWVyVXNlck5hbWUgPSBwbGF5ZXJVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QWxsU2hpcHNTdW5rKGFsbFNoaXBzU3Vuaykge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLmFsbFNoaXBzU3VuayA9IGFsbFNoaXBzU3VuaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgI3Jlc2V0KCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhID0gbmV3IEdhbWVib2FyZERhdGEoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YSA9IHRoaXMuI2dhbWVib2FyZERhdGE7XG4gICAgICAgIHRoaXMuI3Jlc2V0KCk7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmREYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkRGF0YUJ1aWxkZXI7IiwiaW1wb3J0IEJvYXJkQ2VsbCBmcm9tIFwiLi9Cb2FyZENlbGxcIjtcbmltcG9ydCBHYW1lYm9hcmREYXRhQnVpbGRlciBmcm9tIFwiLi9EYXRhUG9pbnRDb250YWluZXJzL0dhbWVib2FyZERhdGFCdWlsZGVyXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgI3dpZHRoID0gMTA7XG5cbiAgICAjaGVpZ2h0ID0gMTA7XG5cbiAgICAjYm9hcmQgPSBbXTtcblxuICAgIC8vIHN3YXBwaW5nIHN1cHBvc2VkbHkgWCBhbmQgWSBjb29yZGluYXRlcyBoZXJlIGJlY2F1c2Ugb2YgZmFpbGVkIGF0dGVtcHQgdG8gaW1wbGVtZW50IDJEIGFycmF5cyBpbiBKYXZhU2NyaXB0Li4uXG4gICAgI3NoaXBMaXN0ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jaW5pdEJvYXJkKCk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHNoaXAsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy4jY2FuUGxhY2Uoc2hpcC5nZXRDb29yZFN0YXJ0KCksIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI3NoaXBMaXN0LnB1c2goc2hpcCk7XG5cbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWSAtIDFdWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFggLSAxKSArIGldO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbKHNoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWSAtIDEpICsgaV1bc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMV07XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2JvYXJkW2Nvb3JkLmNvb3JkWSAtIDFdW2Nvb3JkLmNvb3JkWCAtIDFdLmhpdCgpO1xuICAgIH1cblxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoaXBMaXN0LmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuXG4gICAgZ2V0R2FtZWJvYXJkRGF0YShwbGF5ZXJVc2VyTmFtZSkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhQnVpbGRlciA9IG5ldyBHYW1lYm9hcmREYXRhQnVpbGRlcigpO1xuXG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGEgPSBnYW1lYm9hcmREYXRhQnVpbGRlci5zZXRCb2FyZERhdGEodGhpcy4jYm9hcmQpXG4gICAgICAgIC5zZXRQbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSlcbiAgICAgICAgLnNldEFsbFNoaXBzU3Vuayh0aGlzLmFsbFNoaXBzU3VuaygpKVxuICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBnYW1lYm9hcmREYXRhO1xuICAgIH1cblxuICAgICNjYW5QbGFjZShjb29yZFN0YXJ0LCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBzd2l0Y2ggKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICAgICAgLy8gdG8gZXhjbHVkZSBzdGFydGluZyBwb2ludCBmcm9tIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKChjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgbGVuZ3RoID4gdGhpcy4jd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbY29vcmRTdGFydC5jb29yZFkgLSAxXVsoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgLy8gdG8gZXhjbHVkZSBzdGFydGluZyBwb2ludCBmcm9tIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKChjb29yZFN0YXJ0LmNvb3JkWSAtIDEpICsgbGVuZ3RoID4gdGhpcy4jaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhjb29yZFN0YXJ0LmNvb3JkWSAtIDEpICsgaV1bY29vcmRTdGFydC5jb29yZFggLSAxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5pdEJvYXJkKCkge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmQubGVuZ3RoICE9PSAwKSByZXR1cm47XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLiN3aWR0aDsgeCArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLiNib2FyZC5wdXNoKFtdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLiNoZWlnaHQ7IHkgKz0gMSkge1xuICAgICAgICAgICAgICAgIC8vIHN3YXBwaW5nIHZhbHVlcyBkdWUgdG8gd3JvbmcgY2VsbCBkYXRhIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgZW1wdHlDZWxsID0gbmV3IEJvYXJkQ2VsbCh5ICsgMSwgeCArIDEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jYm9hcmRbeF0ucHVzaChlbXB0eUNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJmdW5jdGlvbiBoaXRTdGF0dXMoKSB7XG4gICAgY29uc3QgTk9UX0hJVCA9ICdOT1RfSElUJztcbiAgICBjb25zdCBISVRfQ0VMTCA9ICdISVRfQ0VMTCc7XG4gICAgY29uc3QgSElUX1NISVAgPSAnSElUX1NISVAnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgTk9UX0hJVCxcbiAgICAgICAgSElUX0NFTEwsXG4gICAgICAgIEhJVF9TSElQXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhpdFN0YXR1czsiLCJjbGFzcyBQbGF5ZXIge1xuICAjcGxheWVyTmFtZSA9ICcnO1xuXG4gICNoaXRMb2cgPSBbXTtcblxuICAjcGxheWVyU2hpcHMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih1c2VyTmFtZSkge1xuICAgIHRoaXMuI3BsYXllck5hbWUgPSB1c2VyTmFtZTtcbiAgfVxuXG4gIGxvZ0hpdChjb29yZCkge1xuICAgIHRoaXMuI2hpdExvZy5wdXNoKGNvb3JkKTtcbiAgfVxuXG4gIGFkZFNoaXAoc2hpcCkge1xuICAgIHRoaXMuI3BsYXllclNoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICBnZXRIaXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdExvZy5zbGljZSgpO1xuICB9XG5cbiAgZ2V0U2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllclNoaXBzLnNsaWNlKCk7XG4gIH1cblxuICByZXNldFVzZXIoKSB7XG4gICAgdGhpcy4jaGl0TG9nID0gW107XG4gICAgdGhpcy4jcGxheWVyU2hpcHMgPSBbXTtcbiAgfVxuXG4gIHNldFBsYXllck5hbWUodXNlck5hbWUpIHtcbiAgICB0aGlzLiNwbGF5ZXJOYW1lID0gdXNlck5hbWU7XG4gIH1cblxuICBnZXRQbGF5ZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJOYW1lO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiaW1wb3J0IFNoaXBQaWVjZSBmcm9tIFwiLi9TaGlwUGllY2VcIjtcblxuY2xhc3MgU2hpcCB7XG4gICN0aW1lc0hpdCA9IDA7XG5cbiAgI3NoaXBQaWVjZXMgPSBbXTtcbiAgXG4gICNjb29yZFN0YXJ0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICB0aGlzLiNjb29yZFN0YXJ0ID0gY29vcmRTdGFydFxuICAgIHRoaXMuI2J1aWxkU2hpcChjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpO1xuICB9XG5cbiAgdHJ5SGl0KGhpdENvb3JkKSB7XG4gICAgY29uc3Qgc2hpcFBpZWNlID0gdGhpcy4jc2hpcFBpZWNlcy5maW5kKHBpZWNlQ29vcmQgPT5cbiAgICAgIChwaWVjZUNvb3JkLmNvb3JkWCA9PT0gaGl0Q29vcmQuY29vcmRYKSAmJiAocGllY2VDb29yZC5jb29yZFkgPT09IGhpdENvb3JkLmNvb3JkWSlcbiAgICApO1xuXG4gICAgaWYgKHNoaXBQaWVjZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHNoaXBQaWVjZS5oaXRTdGF0dXMgPT09IHRydWUpIHJldHVybiBmYWxzZTsgXG5cbiAgICB0aGlzLiN0aW1lc0hpdCArPSAxO1xuXG4gICAgcmV0dXJuIHNoaXBQaWVjZS5oaXQoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5ldmVyeShzaGlwUGllY2UgPT5cbiAgICAgIHNoaXBQaWVjZS5oaXRTdGF0dXMgPT09IHRydWVcbiAgICApO1xuICB9XG5cbiAgI2J1aWxkU2hpcChjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgc2hpcFBpZWNlQ29vcmQgPSBudWxsO1xuXG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICBzaGlwUGllY2VDb29yZCA9IG5ldyBTaGlwUGllY2UoY29vcmRTdGFydC5jb29yZFggKyBpLCBjb29yZFN0YXJ0LmNvb3JkWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwUGllY2VDb29yZCA9IG5ldyBTaGlwUGllY2UoY29vcmRTdGFydC5jb29yZFgsIGNvb3JkU3RhcnQuY29vcmRZICsgaSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuI3NoaXBQaWVjZXMucHVzaChzaGlwUGllY2VDb29yZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29vcmRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29vcmRTdGFydDtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7IHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmxlbmd0aDsgfVxuXG4gIGdldCB0aW1lc0hpdCgpIHsgcmV0dXJuIHRoaXMuI3RpbWVzSGl0OyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuXG5jbGFzcyBTaGlwUGllY2Uge1xuICAgICNjb29yZCA9IG51bGw7XG5cbiAgICAjaGl0U3RhdHVzID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuI2hpdFN0YXR1cyA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLiNoaXRTdGF0dXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3JkWCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWCB9XG5cbiAgICBnZXQgY29vcmRZKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRZOyB9XG5cbiAgICBnZXQgaGl0U3RhdHVzKCkgeyByZXR1cm4gdGhpcy4jaGl0U3RhdHVzOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBQaWVjZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUtdWktY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJlbTtcblxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdidXR0b24nXG4gICAgJ2JvYXJkJztcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtXG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW07XG59XG5cbi5ib2FyZCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgZ3JpZC1hcmVhOiBib2FyZDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5ib2FyZC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib2FyZC1jZWxsOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcbn1cblxuLmJ1dHRvbiB7XG4gIGdyaWQtYXJlYTogYnV0dG9uO1xuXG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbi1hY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7O0VBRVI7O1dBRVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCOztFQUV2QixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLXVpLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdidXR0b24nXFxuICAgICdib2FyZCc7XFxufVxcblxcbi5jb250cm9scy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMmVtXFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gIGdyaWQtYXJlYTogYm9hcmQ7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLWNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZC1jZWxsOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbi1hY3RpdmUge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOlsiaGl0U3RhdHVzIiwiX2JvYXJkT25lIiwiV2Vha01hcCIsIl9ib2FyZFR3byIsIl9zdGFydEdhbWVCdXR0b24iLCJfc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbiIsIl9yZXN0YXJ0R2FtZUJ1dHRvbiIsIl9ib2FyZEluaXQiLCJfTlVNQkVSX09GX0NFTExTIiwiX2lzSG9yaXpvbnRhbCIsIl9tYXBIYW5kbGVycyIsIldlYWtTZXQiLCJfaW5pdEJvYXJkIiwiX3VwZGF0ZURPTUJvYXJkIiwiX3VwZGF0ZUdhbWVTdGF0dXMiLCJfdG9nZ2xlSG9yaXpvbnRhbCIsIl9jcmVhdGVCb2FyZENlbGwiLCJfdXBkYXRlQ2VsbE1ldGFEYXRhIiwiX3VwZGF0ZUNlbGxTdGF0dXMiLCJET01Db250cm9sbGVyIiwiY29udHJvbGxlckFQSSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX2luaXRCb2FyZDIiLCJjYWxsIiwiZG9Cb2FyZEFjdGlvbkhhbmRsZXIiLCJfbWFwSGFuZGxlcnMyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidXBkYXRlVUkiLCJnYW1lU3RhdGVEYXRhIiwiX3VwZGF0ZURPTUJvYXJkMiIsInBsYXllck9uZUdhbWVib2FyZERhdGEiLCJwbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwiZ2V0SXNIb3Jpem9udGFsIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZUhhbmRsZXIiLCJfdG9nZ2xlSG9yaXpvbnRhbDIiLCJiaW5kIiwicmVzdGFydFJvdW5kSGFuZGxlciIsImkiLCJuZXdCb2FyZENlbGxPbmUiLCJfY3JlYXRlQm9hcmRDZWxsMiIsIm5ld0JvYXJkQ2VsbFR3byIsImFwcGVuZENoaWxkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiZ2FtZWJvYXJkT25lRGF0YSIsImdhbWVib2FyZFR3b0RhdGEiLCJub2RlQm9hcmRPbmUiLCJjaGlsZE5vZGVzIiwiZGF0YUJvYXJkT25lIiwiYm9hcmREYXRhIiwibm9kZUJvYXJkVHdvIiwiZGF0YUJvYXJkVHdvIiwiX3VwZGF0ZUNlbGxTdGF0dXMyIiwiX3VwZGF0ZUNlbGxNZXRhRGF0YTIiLCJwbGF5ZXJVc2VyTmFtZSIsIl91cGRhdGVHYW1lU3RhdHVzMiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm5ld0NlbGwiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiY2VsbE5vZGUiLCJjZWxsRGF0YSIsInBsYXllcm5hbWUiLCJjb29yZCIsImdldENvb3JkIiwic2V0QXR0cmlidXRlIiwiY29vcmRYIiwiY29vcmRZIiwibm9kZSIsImRhdGEiLCJzdGF0dXMiLCJnZXRIaXRTdGF0dXMiLCJOT1RfSElUIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJISVRfU0hJUCIsIkhJVF9DRUxMIiwiUGxheWVyIiwiU2hpcCIsIkdhbWVib2FyZCIsIkNvb3JkaW5hdGUiLCJHYW1lU3RhdGVEYXRhQnVpbGRlciIsIl9jdXJyZW50UGxheWVyIiwiX2lzR2FtZVJ1bm5pbmciLCJfaXNSb3VuZFJ1bm5pbmciLCJfaXNQbGF5ZXJPbmVUdXJuIiwiX3BsYXllck9uZSIsIl9wbGF5ZXJUd28iLCJfcGxheWVyT25lR2FtZWJvYXJkIiwiX3BsYXllclR3b0dhbWVib2FyZCIsIl9ET01Db250cm9sbGVyIiwiX3VwZGF0ZUdhbWVVSSIsIl9nZXRHYW1lU3RhdGVEYXRhIiwiX3J1blJvdW5kIiwiX2VuZEdhbWUiLCJfc3dpdGNoQ3VycmVudFBsYXllciIsIl9nZXRXaW5uZXIiLCJfcGxheWVyQXR0YWNrIiwiX2F0dGFja0NlbGwiLCJfcGxheWVyUGxhY2VTaGlwIiwiX3BsYWNlU2hpcCIsIl9nZXRBUElDb250YWluZXIiLCJHYW1lQ29udHJvbGxlciIsIl9nZXRBUElDb250YWluZXIyIiwiX3VwZGF0ZUdhbWVVSTIiLCJldmVudCIsInRhcmdldCIsImRhdGFzZXQiLCJnZXRQbGF5ZXJOYW1lIiwiY29vcmR4IiwiY29vcmR5IiwiY2VsbENvb3JkIiwiaXNIb3Jpem9udGFsIiwiX3BsYXllclBsYWNlU2hpcDIiLCJfcGxheWVyQXR0YWNrMiIsIl9nZXRHYW1lU3RhdGVEYXRhMiIsImdhbWVTdGF0ZURhdGFCdWlsZGVyIiwic2V0Q3VycmVudFVzZXJOYW1lIiwic2V0SXNHYW1lUnVubmluZyIsInNldElzUm91bmRSdW5uaW5nIiwic2V0SXNQbGF5ZXJPbmVUdXJuIiwic2V0UGxheWVyT25lVXNlck5hbWUiLCJzZXRQbGF5ZXJUd29Vc2VyTmFtZSIsInNldFBsYXllck9uZUdhbWVib2FyZERhdGEiLCJnZXRHYW1lYm9hcmREYXRhIiwic2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YSIsImJ1aWxkIiwiX3J1blJvdW5kMiIsImdldFNoaXBzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIl9zd2l0Y2hDdXJyZW50UGxheWVyMiIsIl9lbmRHYW1lMiIsInBsYXllcldpbm5lciIsIl9nZXRXaW5uZXIyIiwiYWxsU2hpcHNTdW5rIiwiX2F0dGFja0NlbGwyIiwid2lubmVyIiwiY29uY2F0IiwiY3VycmVudEJvYXJkIiwicmVjZWl2ZUF0dGFjayIsIl9wbGFjZVNoaXAyIiwibmV3U2hpcCIsImlzUGxhY2VkIiwicGxhY2VTaGlwIiwiYWRkU2hpcCIsIl9jb29yZCIsIl9zaGlwIiwiX2lzT2NjdXBpZWQiLCJfaGFzQmVlbkhpdCIsIkJvYXJkQ2VsbCIsIm9jY3VweSIsInNoaXAiLCJoaXQiLCJ0cnlIaXQiLCJnZXRDb29yZFN0cmluZyIsImdldCIsIl9jb29yZFgiLCJfY29vcmRZIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJHYW1lU3RhdGVEYXRhIiwiX2N1cnJlbnRQbGF5ZXJVc2VyTmFtZSIsIl9wbGF5ZXJPbmVVc2VyTmFtZSIsIl9wbGF5ZXJUd29Vc2VyTmFtZSIsIl9wbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiX3BsYXllclR3b0dhbWVib2FyZERhdGEiLCJzZXQiLCJjdXJyZW50VXNlck5hbWUiLCJpc0dhbWVSdW5uaW5nIiwiaXNSb3VuZFJ1bm5pbmciLCJpc1BsYXllck9uZVR1cm4iLCJwbGF5ZXJPbmVVc2VyTmFtZSIsInBsYXllclR3b1VzZXJOYW1lIiwiX2dhbWVTdGF0ZURhdGEiLCJjdXJyZW50UGxheWVyVXNlck5hbWUiLCJyZXNldCIsIkdhbWVib2FyZERhdGEiLCJfYm9hcmREYXRhIiwiX3BsYXllclVzZXJOYW1lIiwiX2FsbFNoaXBzU3VuayIsInNldEJvYXJkRGF0YSIsImJvYXJkIiwiYm9hcmRDb3B5Iiwic2xpY2UiLCJmb3JFYWNoIiwicm93IiwicHVzaCIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2dhbWVib2FyZERhdGEiLCJfcmVzZXQiLCJHYW1lQm9hcmREYXRhQnVpbGRlciIsImdhbWVib2FyZCIsInNldFBsYXllclVzZXJOYW1lIiwic2V0QWxsU2hpcHNTdW5rIiwiZ2FtZWJvYXJkRGF0YSIsIl9yZXNldDIiLCJHYW1lYm9hcmREYXRhQnVpbGRlciIsIl93aWR0aCIsIl9oZWlnaHQiLCJfYm9hcmQiLCJfc2hpcExpc3QiLCJfY2FuUGxhY2UiLCJfY2FuUGxhY2UyIiwiZ2V0Q29vcmRTdGFydCIsImJvYXJkQ2VsbCIsImV2ZXJ5IiwiaXNTdW5rIiwiZ2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJjb29yZFN0YXJ0IiwiaXNPY2N1cGllZCIsIngiLCJ5IiwiZW1wdHlDZWxsIiwidXNlck5hbWUiLCJfcGxheWVyTmFtZSIsIl9oaXRMb2ciLCJfcGxheWVyU2hpcHMiLCJsb2dIaXQiLCJnZXRIaXRMb2ciLCJyZXNldFVzZXIiLCJzZXRQbGF5ZXJOYW1lIiwiU2hpcFBpZWNlIiwiX3RpbWVzSGl0IiwiX3NoaXBQaWVjZXMiLCJfY29vcmRTdGFydCIsIl9idWlsZFNoaXAiLCJob3Jpem9udGFsIiwiX2J1aWxkU2hpcDIiLCJoaXRDb29yZCIsInNoaXBQaWVjZSIsImZpbmQiLCJwaWVjZUNvb3JkIiwidW5kZWZpbmVkIiwic2hpcFBpZWNlQ29vcmQiLCJfaGl0U3RhdHVzIiwiY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=