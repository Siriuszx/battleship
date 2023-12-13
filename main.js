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
      _classPrivateMethodGet(this, _updateDOMBoard, _updateDOMBoard2).call(this, gameStateData.playerOneBoardData, gameStateData.playerTwoBoardData);
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
function _updateDOMBoard2(boardOneData, boardTwoData) {
  for (var i = 0; i < _classPrivateFieldGet(this, _NUMBER_OF_CELLS); i += 1) {
    var nodeBoardOne = _classPrivateFieldGet(this, _boardOne).childNodes[i];
    var dataBoardOne = boardOneData[i];
    var nodeBoardTwo = _classPrivateFieldGet(this, _boardTwo).childNodes[i];
    var dataBoardTwo = boardTwoData[i];
    _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardOne, dataBoardOne);
    _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardTwo, dataBoardTwo);
    _classPrivateMethodGet(this, _updateCellMetaData, _updateCellMetaData2).call(this, nodeBoardOne, dataBoardOne);
    _classPrivateMethodGet(this, _updateCellMetaData, _updateCellMetaData2).call(this, nodeBoardTwo, dataBoardTwo);
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
function _updateCellMetaData2(cellNode, cellData) {
  var coord = cellData.getCoord();
  cellNode.setAttribute('data-coordx', coord.coordX);
  cellNode.setAttribute('data-coordy', coord.coordY);
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
/* harmony import */ var _entities_GameStateDataBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/GameStateDataBuilder */ "./src/entities/GameStateDataBuilder.js");
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
var _updateBoard = /*#__PURE__*/new WeakSet();
var _getBoardState = /*#__PURE__*/new WeakSet();
var _runRound = /*#__PURE__*/new WeakSet();
var _endGame = /*#__PURE__*/new WeakSet();
var _switchCurrentPlayer = /*#__PURE__*/new WeakSet();
var _getWinner = /*#__PURE__*/new WeakSet();
var _playerAttack = /*#__PURE__*/new WeakSet();
var _attackCell = /*#__PURE__*/new WeakSet();
var _playerPlaceShip = /*#__PURE__*/new WeakSet();
var _placeShip = /*#__PURE__*/new WeakSet();
var _getBundledAPI = /*#__PURE__*/new WeakSet();
var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);
    _classPrivateMethodInitSpec(this, _getBundledAPI);
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
    _classPrivateMethodInitSpec(this, _getBoardState);
    _classPrivateMethodInitSpec(this, _updateBoard);
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
    _classPrivateFieldSet(this, _DOMController, new _DOMController__WEBPACK_IMPORTED_MODULE_3__["default"](_classPrivateMethodGet(this, _getBundledAPI, _getBundledAPI2).call(this)));
    _classPrivateFieldSet(this, _playerOneGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
    _classPrivateFieldSet(this, _playerTwoGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
    _classPrivateFieldSet(this, _playerOne, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player One'));
    _classPrivateFieldSet(this, _playerTwo, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player Two'));
    _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
    _classPrivateMethodGet(this, _updateBoard, _updateBoard2).call(this);
  }

  // Callback to let other layers of program interact with our game controller
  _createClass(GameController, [{
    key: "doBoardActionHandler",
    value: function doBoardActionHandler(event) {
      if (_classPrivateFieldGet(this, _isGameRunning) === false) return;
      var cellNode = event.target;
      if (cellNode.dataset.username !== _classPrivateFieldGet(this, _currentPlayer).getUserName()) return;
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
      _classPrivateMethodGet(this, _updateBoard, _updateBoard2).call(this);
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
      _classPrivateMethodGet(this, _updateBoard, _updateBoard2).call(this);
    }
  }]);
  return GameController;
}();
function _updateBoard2() {
  var gameStateData = _classPrivateMethodGet(this, _getBoardState, _getBoardState2).call(this);
  _classPrivateFieldGet(this, _DOMController).updateUI(gameStateData);
}
function _getBoardState2() {
  var gameStateDataBuilder = new _entities_GameStateDataBuilder__WEBPACK_IMPORTED_MODULE_5__["default"]();
  var gameStateData = gameStateDataBuilder.setCurrentUserName(_classPrivateFieldGet(this, _currentPlayer).getUserName()).setIsGameRunning(_classPrivateFieldGet(this, _isGameRunning)).setIsRoundRunning(_classPrivateFieldGet(this, _isRoundRunning)).setIsPlayerOneTurn(_classPrivateFieldGet(this, _isPlayerOneTurn)).setPlayerOneUserName(_classPrivateFieldGet(this, _playerOne).getUserName()).setPlayerTwoUserName(_classPrivateFieldGet(this, _playerTwo).getUserName()).setPlayerOneBoardData(_classPrivateFieldGet(this, _playerOneGameboard).getBoardData()).setPlayerTwoBoardData(_classPrivateFieldGet(this, _playerOneGameboard).getBoardData()).build();
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
function _getBundledAPI2() {
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

/***/ "./src/entities/GameStateData.js":
/*!***************************************!*\
  !*** ./src/entities/GameStateData.js ***!
  \***************************************/
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
var _playerOneBoardData = /*#__PURE__*/new WeakMap();
var _playerTwoBoardData = /*#__PURE__*/new WeakMap();
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
    _classPrivateFieldInitSpec(this, _playerOneBoardData, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _playerTwoBoardData, {
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
    key: "playerOneBoardData",
    get: function get() {
      return _classPrivateFieldGet(this, _playerOneBoardData);
    },
    set: function set(playerOneBoardData) {
      _classPrivateFieldSet(this, _playerOneBoardData, playerOneBoardData);
    }
  }, {
    key: "playerTwoBoardData",
    get: function get() {
      return _classPrivateFieldGet(this, _playerTwoBoardData);
    },
    set: function set(playerTwoBoardData) {
      _classPrivateFieldSet(this, _playerTwoBoardData, playerTwoBoardData);
    }
  }]);
  return GameStateData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameStateData);

/***/ }),

/***/ "./src/entities/GameStateDataBuilder.js":
/*!**********************************************!*\
  !*** ./src/entities/GameStateDataBuilder.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameStateData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameStateData */ "./src/entities/GameStateData.js");
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
    key: "setPlayerOneBoardData",
    value: function setPlayerOneBoardData(playerOneBoardData) {
      _classPrivateFieldGet(this, _gameStateData).playerOneBoardData = playerOneBoardData;
      return this;
    }
  }, {
    key: "setPlayerTwoBoardData",
    value: function setPlayerTwoBoardData(playerTwoBoardData) {
      _classPrivateFieldGet(this, _gameStateData).playerTwoBoardData = playerTwoBoardData;
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
/* harmony import */ var _GameboardData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameboardData */ "./src/entities/GameboardData.js");
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
    key: "getBoardData",
    value: function getBoardData(userName) {
      var gameBoardData = new _GameboardData__WEBPACK_IMPORTED_MODULE_1__["default"](_classPrivateFieldGet(this, _board), userName, this.allShipsSunk());
      return gameBoardData;
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

/***/ "./src/entities/GameboardData.js":
/*!***************************************!*\
  !*** ./src/entities/GameboardData.js ***!
  \***************************************/
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
var _gameboardData = /*#__PURE__*/new WeakMap();
var _playerUserName = /*#__PURE__*/new WeakMap();
var _allShipsSunk = /*#__PURE__*/new WeakMap();
var GameboardData = /*#__PURE__*/function () {
  function GameboardData() {
    _classCallCheck(this, GameboardData);
    _classPrivateFieldInitSpec(this, _gameboardData, {
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
    key: "setGameboardData",
    value: function setGameboardData(gameboard) {
      var boardCopy = gameboard.slice();
      var boardData = [];
      boardCopy.forEach(function (row) {
        boardData.push.apply(boardData, _toConsumableArray(row));
      });
      _classPrivateFieldSet(this, _gameboardData, boardData);
    }
  }, {
    key: "gameboardData",
    get: function get() {
      return _classPrivateFieldGet(this, _gameboardData);
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
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _userName = /*#__PURE__*/new WeakMap();
var _hitLog = /*#__PURE__*/new WeakMap();
var _playerShips = /*#__PURE__*/new WeakMap();
var Player = /*#__PURE__*/function () {
  function Player(userName) {
    _classCallCheck(this, Player);
    _classPrivateFieldInitSpec(this, _userName, {
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
    this.userName = userName;
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
    key: "setUserName",
    value: function setUserName(userName) {
      _classPrivateFieldSet(this, _userName, userName);
    }
  }, {
    key: "getUserName",
    value: function getUserName() {
      return _classPrivateFieldGet(this, _userName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXlEO0FBQzlCO0FBRTNCLElBQU1jLFVBQVUsR0FBRyxJQUFJbEksa0VBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Cb2FyZENlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Db29yZGluYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvR2FtZVN0YXRlRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0dhbWVTdGF0ZURhdGFCdWlsZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvR2FtZWJvYXJkRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0hpdFN0YXR1cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwUGllY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi4vZW50aXRpZXMvSGl0U3RhdHVzXCI7XG5cbmNsYXNzIERPTUNvbnRyb2xsZXIge1xuICAjYm9hcmRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtb25lJyk7XG5cbiAgI2JvYXJkVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLXR3bycpO1xuXG4gICNzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZScpO1xuXG4gICNzd2l0Y2hIb3Jpem9udGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvcml6b250YWwtc3RhdHVzJyk7XG5cbiAgI3Jlc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQtZ2FtZScpO1xuXG4gICNib2FyZEluaXQgPSBmYWxzZTtcblxuICAjTlVNQkVSX09GX0NFTExTID0gMTAwO1xuXG4gICNpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5kb0JvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgdGhpcy4jbWFwSGFuZGxlcnMoY29udHJvbGxlckFQSSk7XG4gIH1cblxuICAjbWFwSGFuZGxlcnMoY29udHJvbGxlckFQSSkge1xuICAgIHRoaXMuI3N0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXJBUEkuc3RhcnRHYW1lSGFuZGxlcik7XG4gICAgdGhpcy4jc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuI3RvZ2dsZUhvcml6b250YWwuYmluZCh0aGlzKSk7XG4gICAgdGhpcy4jcmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnJlc3RhcnRSb3VuZEhhbmRsZXIpO1xuICB9XG5cbiAgI2luaXRCb2FyZChkb0JvYXJkQWN0aW9uSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jTlVNQkVSX09GX0NFTExTOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld0JvYXJkQ2VsbE9uZSA9IHRoaXMuI2NyZWF0ZUJvYXJkQ2VsbChkb0JvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxUd28gPSB0aGlzLiNjcmVhdGVCb2FyZENlbGwoZG9Cb2FyZEFjdGlvbkhhbmRsZXIpO1xuXG4gICAgICB0aGlzLiNib2FyZE9uZS5hcHBlbmRDaGlsZChuZXdCb2FyZENlbGxPbmUpO1xuICAgICAgdGhpcy4jYm9hcmRUd28uYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsVHdvKTtcbiAgICB9XG5cbiAgICB0aGlzLiNib2FyZEluaXQgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSkge1xuICAgIHRoaXMuI3VwZGF0ZURPTUJvYXJkKFxuICAgICAgZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVCb2FyZERhdGEsXG4gICAgICBnYW1lU3RhdGVEYXRhLnBsYXllclR3b0JvYXJkRGF0YVxuICAgICk7XG4gIH1cblxuICAjdXBkYXRlRE9NQm9hcmQoYm9hcmRPbmVEYXRhLCBib2FyZFR3b0RhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI05VTUJFUl9PRl9DRUxMUzsgaSArPSAxKSB7XG4gICAgICBjb25zdCBub2RlQm9hcmRPbmUgPSB0aGlzLiNib2FyZE9uZS5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkT25lID0gYm9hcmRPbmVEYXRhW2ldO1xuXG4gICAgICBjb25zdCBub2RlQm9hcmRUd28gPSB0aGlzLiNib2FyZFR3by5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkVHdvID0gYm9hcmRUd29EYXRhW2ldO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lKTtcbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28pO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlR2FtZVN0YXR1cyhnYW1lU3RhdGVEYXRhKSB7XG5cbiAgfVxuXG4gICN0b2dnbGVIb3Jpem9udGFsKCkge1xuICAgIHRoaXMuI2lzSG9yaXpvbnRhbCA9ICF0aGlzLiNpc0hvcml6b250YWw7XG4gICAgdGhpcy4jc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdidXR0b24tYWN0aXZlJyk7XG4gIH1cblxuICAjY3JlYXRlQm9hcmRDZWxsKGRvQm9hcmRBY3Rpb25IYW5kbGVyKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvQm9hcmRBY3Rpb25IYW5kbGVyKTtcblxuICAgIHJldHVybiBuZXdDZWxsO1xuICB9XG5cbiAgI3VwZGF0ZUNlbGxNZXRhRGF0YShjZWxsTm9kZSwgY2VsbERhdGEpIHtcbiAgICBjb25zdCBjb29yZCA9IGNlbGxEYXRhLmdldENvb3JkKCk7XG5cbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmR4JywgY29vcmQuY29vcmRYKTtcbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmR5JywgY29vcmQuY29vcmRZKTtcbiAgfVxuXG4gICN1cGRhdGVDZWxsU3RhdHVzKGNlbGxOb2RlLCBjZWxsRGF0YSkge1xuICAgIGlmICghY2VsbE5vZGUgfHwgIWNlbGxEYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCBub2RlID0gY2VsbE5vZGU7XG4gICAgY29uc3QgZGF0YSA9IGNlbGxEYXRhO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nZXRIaXRTdGF0dXMoKTtcblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLk5PVF9ISVQ6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfU0hJUDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkYwMDAwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLkhJVF9DRUxMOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGdldElzSG9yaXpvbnRhbCgpIHsgcmV0dXJuIHRoaXMuI2lzSG9yaXpvbnRhbCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBET01Db250cm9sbGVyO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vZW50aXRpZXMvUGxheWVyXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZW50aXRpZXMvU2hpcFwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi4vZW50aXRpZXMvR2FtZWJvYXJkXCI7XG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tIFwiLi9ET01Db250cm9sbGVyXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi4vZW50aXRpZXMvQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IEdhbWVTdGF0ZURhdGFCdWlsZGVyIGZyb20gXCIuLi9lbnRpdGllcy9HYW1lU3RhdGVEYXRhQnVpbGRlclwiO1xuXG5jbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICNjdXJyZW50UGxheWVyID0gbnVsbDtcblxuICAjaXNHYW1lUnVubmluZyA9IHRydWU7XG5cbiAgI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG5cbiAgI2lzUGxheWVyT25lVHVybiA9IHRydWU7XG5cbiAgI3BsYXllck9uZSA9IG51bGw7XG5cbiAgI3BsYXllclR3byA9IG51bGw7XG5cbiAgI3BsYXllck9uZUdhbWVib2FyZCA9IG51bGw7XG5cbiAgI3BsYXllclR3b0dhbWVib2FyZCA9IG51bGw7XG5cbiAgI0RPTUNvbnRyb2xsZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI0RPTUNvbnRyb2xsZXIgPSBuZXcgRE9NQ29udHJvbGxlcih0aGlzLiNnZXRCdW5kbGVkQVBJKCkpO1xuICAgIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyT25lID0gbmV3IFBsYXllcignUGxheWVyIE9uZScpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1BsYXllciBUd28nKTtcbiAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuXG4gICAgdGhpcy4jdXBkYXRlQm9hcmQoKTtcbiAgfVxuXG4gIC8vIENhbGxiYWNrIHRvIGxldCBvdGhlciBsYXllcnMgb2YgcHJvZ3JhbSBpbnRlcmFjdCB3aXRoIG91ciBnYW1lIGNvbnRyb2xsZXJcbiAgZG9Cb2FyZEFjdGlvbkhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy4jaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKGNlbGxOb2RlLmRhdGFzZXQudXNlcm5hbWUgIT09IHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0VXNlck5hbWUoKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY29vcmRYID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHg7XG4gICAgY29uc3QgY29vcmRZID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHk7XG5cbiAgICBjb25zdCBjZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jRE9NQ29udHJvbGxlci5nZXRJc0hvcml6b250YWwoKTtcblxuICAgIHN3aXRjaCAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgdGhpcy4jcGxheWVyUGxhY2VTaGlwKGNlbGxDb29yZCwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgdGhpcy4jcGxheWVyQXR0YWNrKGNlbGxDb29yZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy4jdXBkYXRlQm9hcmQoKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy4jaXNHYW1lUnVubmluZyA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IHRydWU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlc3RhcnRSb3VuZEhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlQm9hcmQoKTtcbiAgfVxuXG4gICN1cGRhdGVCb2FyZCgpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gdGhpcy4jZ2V0Qm9hcmRTdGF0ZSgpO1xuXG4gICAgdGhpcy4jRE9NQ29udHJvbGxlci51cGRhdGVVSShnYW1lU3RhdGVEYXRhKTtcbiAgfVxuXG4gICNnZXRCb2FyZFN0YXRlKCkge1xuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGFCdWlsZGVyID0gbmV3IEdhbWVTdGF0ZURhdGFCdWlsZGVyKCk7XG5cbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gZ2FtZVN0YXRlRGF0YUJ1aWxkZXIuc2V0Q3VycmVudFVzZXJOYW1lKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0VXNlck5hbWUoKSlcbiAgICAuc2V0SXNHYW1lUnVubmluZyh0aGlzLiNpc0dhbWVSdW5uaW5nKVxuICAgIC5zZXRJc1JvdW5kUnVubmluZyh0aGlzLiNpc1JvdW5kUnVubmluZylcbiAgICAuc2V0SXNQbGF5ZXJPbmVUdXJuKHRoaXMuI2lzUGxheWVyT25lVHVybilcbiAgICAuc2V0UGxheWVyT25lVXNlck5hbWUodGhpcy4jcGxheWVyT25lLmdldFVzZXJOYW1lKCkpXG4gICAgLnNldFBsYXllclR3b1VzZXJOYW1lKHRoaXMuI3BsYXllclR3by5nZXRVc2VyTmFtZSgpKVxuICAgIC5zZXRQbGF5ZXJPbmVCb2FyZERhdGEodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmdldEJvYXJkRGF0YSgpKVxuICAgIC5zZXRQbGF5ZXJUd29Cb2FyZERhdGEodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmdldEJvYXJkRGF0YSgpKVxuICAgIC5idWlsZCgpO1xuXG4gICAgcmV0dXJuIGdhbWVTdGF0ZURhdGE7XG4gIH1cblxuICAvLyBUbyBjaGVjayBpZiByb3VuZCBzaG91bGQgc3RhcnQgb25jZSBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAjcnVuUm91bmQoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSAmJiB0aGlzLiNwbGF5ZXJUd28uZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyb3VuZCBpcyBydW5uaW5nJyk7XG4gICAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IHRydWU7XG4gICAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuICAgICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuICAgIH1cbiAgfVxuXG4gICNlbmRHYW1lKHBsYXllcldpbm5lcikge1xuICAgIGlmIChwbGF5ZXJXaW5uZXIgPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllclR3bztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB9XG5cbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSAhdGhpcy4jaXNQbGF5ZXJPbmVUdXJuO1xuICB9XG5cbiAgI2dldFdpbm5lcigpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZygnd2luJyk7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyVHdvO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3aW4nKTtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBUT0RPOiBpbXBsZW1lbnQgYXR0YWNrIGxvZ2ljXG4gICNwbGF5ZXJBdHRhY2soY29vcmQpIHtcbiAgICB0aGlzLiNhdHRhY2tDZWxsKGNvb3JkKTtcbiAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG5cbiAgICBjb25zdCB3aW5uZXIgPSB0aGlzLiNnZXRXaW5uZXIoKTtcblxuICAgIGlmICh3aW5uZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuI2VuZEdhbWUod2lubmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKGBwbGF5ZXIgJHt3aW5uZXJ9IHdvbmApO1xuICAgIH1cbiAgfVxuXG4gICNhdHRhY2tDZWxsKGNvb3JkKSB7XG4gICAgaWYgKHRoaXMuI2lzUm91bmRSdW5uaW5nID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGN1cnJlbnRCb2FyZCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9XG5cbiAgICBjdXJyZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNwbGF5ZXJQbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIHRoaXMuI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKTtcblxuICAgIHRoaXMuI3J1blJvdW5kKCk7XG4gIH1cblxuICAjcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuICAgIGxldCBuZXdTaGlwID0gbnVsbDtcbiAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIC8vIFRvIGJ1aWxkIHNoaXBzIGluIHByZS1kZXRlcm1pbmVkIHBhdHRlcm4gKDUsNCwzLDMsMilcbiAgICBzd2l0Y2ggKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNSk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMToge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNCk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgNDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMik7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQbGF5ZXJzIHNob3VsZCB0YWtlIHR1cm5zIGFmdGVyIGJ1aWxkaW5nIHRoZWlyIGVudGlyZSBmbGVldFxuICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllci5hZGRTaGlwKG5ld1NoaXApO1xuICAgICAgY29uc29sZS5sb2coJ3BsYWNlZCcpO1xuICAgICAgY29uc29sZS5sb2coYGN1cnJlbnQgcGxheWVyIHNoaXBzICR7dGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aH1gKTtcblxuICAgICAgaWYgKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N3aXRjaCcpO1xuICAgICAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gICNnZXRCdW5kbGVkQVBJKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydEdhbWVIYW5kbGVyOiB0aGlzLnN0YXJ0R2FtZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRvQm9hcmRBY3Rpb25IYW5kbGVyOiB0aGlzLmRvQm9hcmRBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICByZXN0YXJ0Um91bmRIYW5kbGVyOiB0aGlzLnJlc3RhcnRSb3VuZEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi9IaXRTdGF0dXNcIjtcblxuY2xhc3MgQm9hcmRDZWxsIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI3NoaXAgPSBudWxsO1xuXG4gICAgI2lzT2NjdXBpZWQgPSBmYWxzZTtcblxuICAgICNoYXNCZWVuSGl0ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBvY2N1cHkoc2hpcCkge1xuICAgICAgICBpZiAodGhpcy4jc2hpcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2lzT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiNzaGlwID0gc2hpcDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNoYXNCZWVuSGl0ID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaGFzQmVlbkhpdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgIHRoaXMuI3NoaXAudHJ5SGl0KHRoaXMuI2Nvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldENvb3JkKCkgeyByZXR1cm4gdGhpcy4jY29vcmQ7IH1cblxuICAgIGdldENvb3JkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFg6ICR7dGhpcy4jY29vcmQuY29vcmRYfSBZOiAke3RoaXMuI2Nvb3JkLmNvb3JkWX1gO1xuICAgIH1cblxuICAgIGdldEhpdFN0YXR1cygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLiNoYXNCZWVuSGl0KSB7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLk5PVF9ISVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX1NISVA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9DRUxMO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc09jY3VwaWVkKCkgeyByZXR1cm4gdGhpcy4jaXNPY2N1cGllZDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZENlbGw7IiwiY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgI2Nvb3JkWCA9IDA7XG5cbiAgICAjY29vcmRZID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkWCA9IGNvb3JkWDtcbiAgICAgICAgdGhpcy4jY29vcmRZID0gY29vcmRZO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRYLCAxMCk7IH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRZLCAxMCk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRpbmF0ZTsiLCJjbGFzcyBHYW1lU3RhdGVEYXRhIHtcbiAgICAjY3VycmVudFBsYXllclVzZXJOYW1lO1xuXG4gICAgI2lzR2FtZVJ1bm5pbmc7XG5cbiAgICAjaXNSb3VuZFJ1bm5pbmc7XG5cbiAgICAjaXNQbGF5ZXJPbmVUdXJuO1xuXG4gICAgI3BsYXllck9uZVVzZXJOYW1lO1xuXG4gICAgI3BsYXllclR3b1VzZXJOYW1lO1xuXG4gICAgI3BsYXllck9uZUJvYXJkRGF0YTtcblxuICAgICNwbGF5ZXJUd29Cb2FyZERhdGE7XG5cbiAgICBnZXQgY3VycmVudFVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jY3VycmVudFBsYXllclVzZXJOYW1lOyB9XG5cbiAgICBzZXQgY3VycmVudFVzZXJOYW1lKGN1cnJlbnRVc2VyTmFtZSkgeyB0aGlzLiNjdXJyZW50UGxheWVyVXNlck5hbWUgPSBjdXJyZW50VXNlck5hbWU7IH1cblxuICAgIGdldCBpc0dhbWVSdW5uaW5nKCkgeyByZXR1cm4gdGhpcy4jaXNHYW1lUnVubmluZzsgfVxuXG4gICAgc2V0IGlzR2FtZVJ1bm5pbmcoaXNHYW1lUnVubmluZykgeyB0aGlzLiNpc0dhbWVSdW5uaW5nID0gaXNHYW1lUnVubmluZzsgfVxuXG4gICAgZ2V0IGlzUm91bmRSdW5uaW5nKCkgeyByZXR1cm4gdGhpcy4jaXNSb3VuZFJ1bm5pbmc7IH1cblxuICAgIHNldCBpc1JvdW5kUnVubmluZyhpc1JvdW5kUnVubmluZykgeyB0aGlzLiNpc1JvdW5kUnVubmluZyA9IGlzUm91bmRSdW5uaW5nOyB9XG5cbiAgICBnZXQgaXNQbGF5ZXJPbmVUdXJuKCkgeyByZXR1cm4gdGhpcy4jaXNQbGF5ZXJPbmVUdXJuOyB9XG5cbiAgICBzZXQgaXNQbGF5ZXJPbmVUdXJuKGlzUGxheWVyT25lVHVybikgeyB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSBpc1BsYXllck9uZVR1cm47IH1cblxuICAgIGdldCBwbGF5ZXJPbmVVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllck9uZVVzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyT25lVXNlck5hbWUocGxheWVyT25lVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyT25lVXNlck5hbWUgPSBwbGF5ZXJPbmVVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IHBsYXllclR3b1VzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVHdvVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJUd29Vc2VyTmFtZShwbGF5ZXJUd29Vc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJUd29Vc2VyTmFtZSA9IHBsYXllclR3b1VzZXJOYW1lOyB9XG5cbiAgICBnZXQgcGxheWVyT25lQm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lQm9hcmREYXRhOyB9XG5cbiAgICBzZXQgcGxheWVyT25lQm9hcmREYXRhKHBsYXllck9uZUJvYXJkRGF0YSkgeyB0aGlzLiNwbGF5ZXJPbmVCb2FyZERhdGEgPSBwbGF5ZXJPbmVCb2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJUd29Cb2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29Cb2FyZERhdGE7IH1cblxuICAgIHNldCBwbGF5ZXJUd29Cb2FyZERhdGEocGxheWVyVHdvQm9hcmREYXRhKSB7IHRoaXMuI3BsYXllclR3b0JvYXJkRGF0YT1wbGF5ZXJUd29Cb2FyZERhdGE7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlRGF0YTsiLCJpbXBvcnQgR2FtZVN0YXRlRGF0YSBmcm9tIFwiLi9HYW1lU3RhdGVEYXRhXCI7XG5cbmNsYXNzIEdhbWVTdGF0ZURhdGFCdWlsZGVyIHtcbiAgICAjZ2FtZVN0YXRlRGF0YSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YSA9IG5ldyBHYW1lU3RhdGVEYXRhKCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFVzZXJOYW1lKGN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmN1cnJlbnRQbGF5ZXJVc2VyTmFtZSA9IGN1cnJlbnRVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNHYW1lUnVubmluZyhpc0dhbWVSdW5uaW5nKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZyA9IGlzR2FtZVJ1bm5pbmc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzUm91bmRSdW5uaW5nKGlzUm91bmRSdW5uaW5nKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPSBpc1JvdW5kUnVubmluZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNQbGF5ZXJPbmVUdXJuKGlzUGxheWVyT25lVHVybikge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzUGxheWVyT25lVHVybiA9IGlzUGxheWVyT25lVHVybjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyT25lVXNlck5hbWUocGxheWVyT25lVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVVc2VyTmFtZSA9IHBsYXllck9uZVVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJUd29Vc2VyTmFtZShwbGF5ZXJUd29Vc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllclR3b1VzZXJOYW1lID0gcGxheWVyVHdvVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZUJvYXJkRGF0YShwbGF5ZXJPbmVCb2FyZERhdGEpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVCb2FyZERhdGEgPSBwbGF5ZXJPbmVCb2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b0JvYXJkRGF0YShwbGF5ZXJUd29Cb2FyZERhdGEpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29Cb2FyZERhdGEgPSBwbGF5ZXJUd29Cb2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhID0gbmV3IEdhbWVTdGF0ZURhdGEoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dhbWVTdGF0ZURhdGE7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIGdhbWVTdGF0ZURhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGVEYXRhQnVpbGRlcjsiLCJpbXBvcnQgQm9hcmRDZWxsIGZyb20gXCIuL0JvYXJkQ2VsbFwiO1xuaW1wb3J0IEdhbWVib2FyZERhdGEgZnJvbSBcIi4vR2FtZWJvYXJkRGF0YVwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgICN3aWR0aCA9IDEwO1xuXG4gICAgI2hlaWdodCA9IDEwO1xuXG4gICAgI2JvYXJkID0gW107XG5cbiAgICAvLyBzd2FwcGluZyBzdXBwb3NlZGx5IFggYW5kIFkgY29vcmRpbmF0ZXMgaGVyZSBiZWNhdXNlIG9mIGZhaWxlZCBhdHRlbXB0IHRvIGltcGxlbWVudCAyRCBhcnJheXMgaW4gSmF2YVNjcmlwdC4uLlxuICAgICNzaGlwTGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2luaXRCb2FyZCgpO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuI2NhblBsYWNlKHNoaXAuZ2V0Q29vcmRTdGFydCgpLCBpc0hvcml6b250YWwsIGxlbmd0aCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNzaGlwTGlzdC5wdXNoKHNoaXApO1xuXG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxXVsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMSkgKyBpXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxKSArIGldW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDFdO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNib2FyZFtjb29yZC5jb29yZFkgLSAxXVtjb29yZC5jb29yZFggLSAxXS5oaXQoKTtcbiAgICB9XG5cbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGlwTGlzdC5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cblxuICAgIGdldEJvYXJkRGF0YSh1c2VyTmFtZSkge1xuICAgICAgICBjb25zdCBnYW1lQm9hcmREYXRhID0gbmV3IEdhbWVib2FyZERhdGEoXG4gICAgICAgICAgICB0aGlzLiNib2FyZCxcbiAgICAgICAgICAgIHVzZXJOYW1lLFxuICAgICAgICAgICAgdGhpcy5hbGxTaGlwc1N1bmsoKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZERhdGE7XG4gICAgfVxuXG4gICAgI2NhblBsYWNlKGNvb3JkU3RhcnQsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBsZW5ndGggPiB0aGlzLiN3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtjb29yZFN0YXJ0LmNvb3JkWSAtIDFdWyhjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBsZW5ndGggPiB0aGlzLiNoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBpXVtjb29yZFN0YXJ0LmNvb3JkWCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0Qm9hcmQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZC5sZW5ndGggIT09IDApIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuI3dpZHRoOyB4ICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuI2JvYXJkLnB1c2goW10pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuI2hlaWdodDsgeSArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gc3dhcHBpbmcgdmFsdWVzIGR1ZSB0byB3cm9uZyBjZWxsIGRhdGEgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUNlbGwgPSBuZXcgQm9hcmRDZWxsKHkgKyAxLCB4ICsgMSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNib2FyZFt4XS5wdXNoKGVtcHR5Q2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIEdhbWVib2FyZERhdGEge1xuICAgICNnYW1lYm9hcmREYXRhID0gbnVsbDtcblxuICAgICNwbGF5ZXJVc2VyTmFtZSA9ICcnO1xuXG4gICAgI2FsbFNoaXBzU3VuayA9IG51bGw7XG5cbiAgICBzZXRHYW1lYm9hcmREYXRhKGdhbWVib2FyZCkge1xuICAgICAgICBjb25zdCBib2FyZENvcHkgPSBnYW1lYm9hcmQuc2xpY2UoKTtcbiAgICAgICAgY29uc3QgYm9hcmREYXRhID0gW107XG5cbiAgICAgICAgYm9hcmRDb3B5LmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGJvYXJkRGF0YS5wdXNoKC4uLnJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEgPSBib2FyZERhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGdhbWVib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNnYW1lYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKSB7IHRoaXMuI3BsYXllclVzZXJOYW1lID0gcGxheWVyVXNlck5hbWU7IH1cblxuICAgIGdldCBhbGxTaGlwc1N1bmsoKSB7IHJldHVybiB0aGlzLiNhbGxTaGlwc1N1bms7IH1cblxuICAgIHNldCBhbGxTaGlwc1N1bmsoYWxsU2hpcHNTdW5rKSB7IHRoaXMuI2FsbFNoaXBzU3VuayA9IGFsbFNoaXBzU3VuazsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmREYXRhOyIsImZ1bmN0aW9uIGhpdFN0YXR1cygpIHtcbiAgICBjb25zdCBOT1RfSElUID0gJ05PVF9ISVQnO1xuICAgIGNvbnN0IEhJVF9DRUxMID0gJ0hJVF9DRUxMJztcbiAgICBjb25zdCBISVRfU0hJUCA9ICdISVRfU0hJUCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBOT1RfSElULFxuICAgICAgICBISVRfQ0VMTCxcbiAgICAgICAgSElUX1NISVBcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGl0U3RhdHVzOyIsImNsYXNzIFBsYXllciB7XG4gICN1c2VyTmFtZSA9ICcnO1xuXG4gICNoaXRMb2cgPSBbXTtcblxuICAjcGxheWVyU2hpcHMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih1c2VyTmFtZSkge1xuICAgIHRoaXMudXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgfVxuXG4gIGxvZ0hpdChjb29yZCkge1xuICAgIHRoaXMuI2hpdExvZy5wdXNoKGNvb3JkKTtcbiAgfVxuXG4gIGFkZFNoaXAoc2hpcCkge1xuICAgIHRoaXMuI3BsYXllclNoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICBnZXRIaXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdExvZy5zbGljZSgpO1xuICB9XG5cbiAgZ2V0U2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllclNoaXBzLnNsaWNlKCk7XG4gIH1cblxuICByZXNldFVzZXIoKSB7XG4gICAgdGhpcy4jaGl0TG9nID0gW107XG4gICAgdGhpcy4jcGxheWVyU2hpcHMgPSBbXTtcbiAgfVxuXG4gIHNldFVzZXJOYW1lKHVzZXJOYW1lKSB7XG4gICAgdGhpcy4jdXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgfVxuXG4gIGdldFVzZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiN1c2VyTmFtZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiaW1wb3J0IFNoaXBQaWVjZSBmcm9tIFwiLi9TaGlwUGllY2VcIjtcblxuY2xhc3MgU2hpcCB7XG4gICN0aW1lc0hpdCA9IDA7XG5cbiAgI3NoaXBQaWVjZXMgPSBbXTtcbiAgXG4gICNjb29yZFN0YXJ0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICB0aGlzLiNjb29yZFN0YXJ0ID0gY29vcmRTdGFydFxuICAgIHRoaXMuI2J1aWxkU2hpcChjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpO1xuICB9XG5cbiAgdHJ5SGl0KGhpdENvb3JkKSB7XG4gICAgY29uc3Qgc2hpcFBpZWNlID0gdGhpcy4jc2hpcFBpZWNlcy5maW5kKHBpZWNlQ29vcmQgPT5cbiAgICAgIChwaWVjZUNvb3JkLmNvb3JkWCA9PT0gaGl0Q29vcmQuY29vcmRYKSAmJiAocGllY2VDb29yZC5jb29yZFkgPT09IGhpdENvb3JkLmNvb3JkWSlcbiAgICApO1xuXG4gICAgaWYgKHNoaXBQaWVjZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHNoaXBQaWVjZS5oaXRTdGF0dXMgPT09IHRydWUpIHJldHVybiBmYWxzZTsgXG5cbiAgICB0aGlzLiN0aW1lc0hpdCArPSAxO1xuXG4gICAgcmV0dXJuIHNoaXBQaWVjZS5oaXQoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5ldmVyeShzaGlwUGllY2UgPT5cbiAgICAgIHNoaXBQaWVjZS5oaXRTdGF0dXMgPT09IHRydWVcbiAgICApO1xuICB9XG5cbiAgI2J1aWxkU2hpcChjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgc2hpcFBpZWNlQ29vcmQgPSBudWxsO1xuXG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICBzaGlwUGllY2VDb29yZCA9IG5ldyBTaGlwUGllY2UoY29vcmRTdGFydC5jb29yZFggKyBpLCBjb29yZFN0YXJ0LmNvb3JkWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwUGllY2VDb29yZCA9IG5ldyBTaGlwUGllY2UoY29vcmRTdGFydC5jb29yZFgsIGNvb3JkU3RhcnQuY29vcmRZICsgaSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuI3NoaXBQaWVjZXMucHVzaChzaGlwUGllY2VDb29yZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29vcmRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29vcmRTdGFydDtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7IHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmxlbmd0aDsgfVxuXG4gIGdldCB0aW1lc0hpdCgpIHsgcmV0dXJuIHRoaXMuI3RpbWVzSGl0OyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuXG5jbGFzcyBTaGlwUGllY2Uge1xuICAgICNjb29yZCA9IG51bGw7XG5cbiAgICAjaGl0U3RhdHVzID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuI2hpdFN0YXR1cyA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLiNoaXRTdGF0dXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3JkWCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWCB9XG5cbiAgICBnZXQgY29vcmRZKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRZOyB9XG5cbiAgICBnZXQgaGl0U3RhdHVzKCkgeyByZXR1cm4gdGhpcy4jaGl0U3RhdHVzOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBQaWVjZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUtdWktY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJlbTtcblxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdidXR0b24nXG4gICAgJ2JvYXJkJztcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtXG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW07XG59XG5cbi5ib2FyZCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgZ3JpZC1hcmVhOiBib2FyZDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5ib2FyZC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib2FyZC1jZWxsOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcbn1cblxuLmJ1dHRvbiB7XG4gIGdyaWQtYXJlYTogYnV0dG9uO1xuXG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbi1hY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7O0VBRVI7O1dBRVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCOztFQUV2QixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLXVpLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdidXR0b24nXFxuICAgICdib2FyZCc7XFxufVxcblxcbi5jb250cm9scy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMmVtXFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gIGdyaWQtYXJlYTogYm9hcmQ7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLWNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZC1jZWxsOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbi1hY3RpdmUge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOlsiaGl0U3RhdHVzIiwiX2JvYXJkT25lIiwiV2Vha01hcCIsIl9ib2FyZFR3byIsIl9zdGFydEdhbWVCdXR0b24iLCJfc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbiIsIl9yZXN0YXJ0R2FtZUJ1dHRvbiIsIl9ib2FyZEluaXQiLCJfTlVNQkVSX09GX0NFTExTIiwiX2lzSG9yaXpvbnRhbCIsIl9tYXBIYW5kbGVycyIsIldlYWtTZXQiLCJfaW5pdEJvYXJkIiwiX3VwZGF0ZURPTUJvYXJkIiwiX3VwZGF0ZUdhbWVTdGF0dXMiLCJfdG9nZ2xlSG9yaXpvbnRhbCIsIl9jcmVhdGVCb2FyZENlbGwiLCJfdXBkYXRlQ2VsbE1ldGFEYXRhIiwiX3VwZGF0ZUNlbGxTdGF0dXMiLCJET01Db250cm9sbGVyIiwiY29udHJvbGxlckFQSSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX2luaXRCb2FyZDIiLCJjYWxsIiwiZG9Cb2FyZEFjdGlvbkhhbmRsZXIiLCJfbWFwSGFuZGxlcnMyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidXBkYXRlVUkiLCJnYW1lU3RhdGVEYXRhIiwiX3VwZGF0ZURPTUJvYXJkMiIsInBsYXllck9uZUJvYXJkRGF0YSIsInBsYXllclR3b0JvYXJkRGF0YSIsImdldElzSG9yaXpvbnRhbCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWVIYW5kbGVyIiwiX3RvZ2dsZUhvcml6b250YWwyIiwiYmluZCIsInJlc3RhcnRSb3VuZEhhbmRsZXIiLCJpIiwibmV3Qm9hcmRDZWxsT25lIiwiX2NyZWF0ZUJvYXJkQ2VsbDIiLCJuZXdCb2FyZENlbGxUd28iLCJhcHBlbmRDaGlsZCIsIl9jbGFzc1ByaXZhdGVGaWVsZFNldCIsImJvYXJkT25lRGF0YSIsImJvYXJkVHdvRGF0YSIsIm5vZGVCb2FyZE9uZSIsImNoaWxkTm9kZXMiLCJkYXRhQm9hcmRPbmUiLCJub2RlQm9hcmRUd28iLCJkYXRhQm9hcmRUd28iLCJfdXBkYXRlQ2VsbFN0YXR1czIiLCJfdXBkYXRlQ2VsbE1ldGFEYXRhMiIsIl91cGRhdGVHYW1lU3RhdHVzMiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm5ld0NlbGwiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiY2VsbE5vZGUiLCJjZWxsRGF0YSIsImNvb3JkIiwiZ2V0Q29vcmQiLCJzZXRBdHRyaWJ1dGUiLCJjb29yZFgiLCJjb29yZFkiLCJub2RlIiwiZGF0YSIsInN0YXR1cyIsImdldEhpdFN0YXR1cyIsIk5PVF9ISVQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkhJVF9TSElQIiwiSElUX0NFTEwiLCJQbGF5ZXIiLCJTaGlwIiwiR2FtZWJvYXJkIiwiQ29vcmRpbmF0ZSIsIkdhbWVTdGF0ZURhdGFCdWlsZGVyIiwiX2N1cnJlbnRQbGF5ZXIiLCJfaXNHYW1lUnVubmluZyIsIl9pc1JvdW5kUnVubmluZyIsIl9pc1BsYXllck9uZVR1cm4iLCJfcGxheWVyT25lIiwiX3BsYXllclR3byIsIl9wbGF5ZXJPbmVHYW1lYm9hcmQiLCJfcGxheWVyVHdvR2FtZWJvYXJkIiwiX0RPTUNvbnRyb2xsZXIiLCJfdXBkYXRlQm9hcmQiLCJfZ2V0Qm9hcmRTdGF0ZSIsIl9ydW5Sb3VuZCIsIl9lbmRHYW1lIiwiX3N3aXRjaEN1cnJlbnRQbGF5ZXIiLCJfZ2V0V2lubmVyIiwiX3BsYXllckF0dGFjayIsIl9hdHRhY2tDZWxsIiwiX3BsYXllclBsYWNlU2hpcCIsIl9wbGFjZVNoaXAiLCJfZ2V0QnVuZGxlZEFQSSIsIkdhbWVDb250cm9sbGVyIiwiX2dldEJ1bmRsZWRBUEkyIiwiX3VwZGF0ZUJvYXJkMiIsImV2ZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInVzZXJuYW1lIiwiZ2V0VXNlck5hbWUiLCJjb29yZHgiLCJjb29yZHkiLCJjZWxsQ29vcmQiLCJpc0hvcml6b250YWwiLCJfcGxheWVyUGxhY2VTaGlwMiIsIl9wbGF5ZXJBdHRhY2syIiwiX2dldEJvYXJkU3RhdGUyIiwiZ2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJzZXRDdXJyZW50VXNlck5hbWUiLCJzZXRJc0dhbWVSdW5uaW5nIiwic2V0SXNSb3VuZFJ1bm5pbmciLCJzZXRJc1BsYXllck9uZVR1cm4iLCJzZXRQbGF5ZXJPbmVVc2VyTmFtZSIsInNldFBsYXllclR3b1VzZXJOYW1lIiwic2V0UGxheWVyT25lQm9hcmREYXRhIiwiZ2V0Qm9hcmREYXRhIiwic2V0UGxheWVyVHdvQm9hcmREYXRhIiwiYnVpbGQiLCJfcnVuUm91bmQyIiwiZ2V0U2hpcHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiX3N3aXRjaEN1cnJlbnRQbGF5ZXIyIiwiX2VuZEdhbWUyIiwicGxheWVyV2lubmVyIiwiX2dldFdpbm5lcjIiLCJhbGxTaGlwc1N1bmsiLCJfYXR0YWNrQ2VsbDIiLCJ3aW5uZXIiLCJjb25jYXQiLCJjdXJyZW50Qm9hcmQiLCJyZWNlaXZlQXR0YWNrIiwiX3BsYWNlU2hpcDIiLCJuZXdTaGlwIiwiaXNQbGFjZWQiLCJwbGFjZVNoaXAiLCJhZGRTaGlwIiwiX2Nvb3JkIiwiX3NoaXAiLCJfaXNPY2N1cGllZCIsIl9oYXNCZWVuSGl0IiwiQm9hcmRDZWxsIiwib2NjdXB5Iiwic2hpcCIsImhpdCIsInRyeUhpdCIsImdldENvb3JkU3RyaW5nIiwiZ2V0IiwiX2Nvb3JkWCIsIl9jb29yZFkiLCJOdW1iZXIiLCJwYXJzZUludCIsIkdhbWVTdGF0ZURhdGEiLCJfY3VycmVudFBsYXllclVzZXJOYW1lIiwiX3BsYXllck9uZVVzZXJOYW1lIiwiX3BsYXllclR3b1VzZXJOYW1lIiwiX3BsYXllck9uZUJvYXJkRGF0YSIsIl9wbGF5ZXJUd29Cb2FyZERhdGEiLCJzZXQiLCJjdXJyZW50VXNlck5hbWUiLCJpc0dhbWVSdW5uaW5nIiwiaXNSb3VuZFJ1bm5pbmciLCJpc1BsYXllck9uZVR1cm4iLCJwbGF5ZXJPbmVVc2VyTmFtZSIsInBsYXllclR3b1VzZXJOYW1lIiwiX2dhbWVTdGF0ZURhdGEiLCJjdXJyZW50UGxheWVyVXNlck5hbWUiLCJyZXNldCIsIkdhbWVib2FyZERhdGEiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX2JvYXJkIiwiX3NoaXBMaXN0IiwiX2NhblBsYWNlIiwiX2NhblBsYWNlMiIsImdldENvb3JkU3RhcnQiLCJwdXNoIiwiYm9hcmRDZWxsIiwiZXZlcnkiLCJpc1N1bmsiLCJ1c2VyTmFtZSIsImdhbWVCb2FyZERhdGEiLCJjb29yZFN0YXJ0IiwiaXNPY2N1cGllZCIsIngiLCJ5IiwiZW1wdHlDZWxsIiwiX2dhbWVib2FyZERhdGEiLCJfcGxheWVyVXNlck5hbWUiLCJfYWxsU2hpcHNTdW5rIiwic2V0R2FtZWJvYXJkRGF0YSIsImdhbWVib2FyZCIsImJvYXJkQ29weSIsInNsaWNlIiwiYm9hcmREYXRhIiwiZm9yRWFjaCIsInJvdyIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGxheWVyVXNlck5hbWUiLCJfdXNlck5hbWUiLCJfaGl0TG9nIiwiX3BsYXllclNoaXBzIiwibG9nSGl0IiwiZ2V0SGl0TG9nIiwicmVzZXRVc2VyIiwic2V0VXNlck5hbWUiLCJTaGlwUGllY2UiLCJfdGltZXNIaXQiLCJfc2hpcFBpZWNlcyIsIl9jb29yZFN0YXJ0IiwiX2J1aWxkU2hpcCIsImhvcml6b250YWwiLCJfYnVpbGRTaGlwMiIsImhpdENvb3JkIiwic2hpcFBpZWNlIiwiZmluZCIsInBpZWNlQ29vcmQiLCJ1bmRlZmluZWQiLCJzaGlwUGllY2VDb29yZCIsIl9oaXRTdGF0dXMiLCJjb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==