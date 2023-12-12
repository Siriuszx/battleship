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
    _classPrivateMethodGet(this, _initBoard, _initBoard2).call(this, _controllerAPI.doBoardAction);
    _classPrivateMethodGet(this, _mapHandlers, _mapHandlers2).call(this, _controllerAPI);
  }
  _createClass(DOMController, [{
    key: "updateDOMBoard",
    value: function updateDOMBoard(boardOneData, boardTwoData) {
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
  }, {
    key: "getIsHorizontal",
    value: function getIsHorizontal() {
      return _classPrivateFieldGet(this, _isHorizontal);
    }
  }]);
  return DOMController;
}();
function _mapHandlers2(controllerAPI) {
  _classPrivateFieldGet(this, _startGameButton).addEventListener('click', controllerAPI.startGame);
  _classPrivateFieldGet(this, _switchHorizontalButton).addEventListener('click', _classPrivateMethodGet(this, _toggleHorizontal, _toggleHorizontal2).bind(this));
  _classPrivateFieldGet(this, _restartGameButton).addEventListener('click', controllerAPI.restartRound);
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
var _playerAttack = /*#__PURE__*/new WeakSet();
var _playerPlaceShip = /*#__PURE__*/new WeakSet();
var _getBundledAPI = /*#__PURE__*/new WeakSet();
var _runRound = /*#__PURE__*/new WeakSet();
var _endGame = /*#__PURE__*/new WeakSet();
var _switchCurrentPlayer = /*#__PURE__*/new WeakSet();
var _getWinner = /*#__PURE__*/new WeakSet();
var _attackCell = /*#__PURE__*/new WeakSet();
var _placeShip = /*#__PURE__*/new WeakSet();
var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);
    _classPrivateMethodInitSpec(this, _placeShip);
    _classPrivateMethodInitSpec(this, _attackCell);
    _classPrivateMethodInitSpec(this, _getWinner);
    _classPrivateMethodInitSpec(this, _switchCurrentPlayer);
    _classPrivateMethodInitSpec(this, _endGame);
    // To check if round should start once all ships have been placed
    _classPrivateMethodInitSpec(this, _runRound);
    _classPrivateMethodInitSpec(this, _getBundledAPI);
    _classPrivateMethodInitSpec(this, _playerPlaceShip);
    _classPrivateMethodInitSpec(this, _playerAttack);
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
    _classPrivateFieldSet(this, _playerOne, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]());
    _classPrivateFieldSet(this, _playerTwo, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]());
    _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
    _classPrivateMethodGet(this, _updateBoard, _updateBoard2).call(this);
  }

  // Cb to let other layers of program interact with our game controller
  _createClass(GameController, [{
    key: "doBoardAction",
    value: function doBoardAction(event) {
      if (_classPrivateFieldGet(this, _isGameRunning) === false) return;
      var cellNode = event.target;
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
    key: "startGame",
    value:
    // To let DOM start the game
    function startGame() {
      if (_classPrivateFieldGet(this, _isGameRunning) === true) return false;
      _classPrivateFieldSet(this, _isGameRunning, true);
      return true;
    }
  }, {
    key: "restartRound",
    value: function restartRound() {
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
  var boardOneData = _classPrivateFieldGet(this, _playerOneGameboard).getBoardData();
  var boardTwoData = _classPrivateFieldGet(this, _playerTwoGameboard).getBoardData();
  _classPrivateFieldGet(this, _DOMController).updateDOMBoard(boardOneData, boardTwoData);
}
function _playerAttack2(coord) {
  _classPrivateMethodGet(this, _attackCell, _attackCell2).call(this, coord);
  var winner = _classPrivateMethodGet(this, _getWinner, _getWinner2).call(this);
  if (winner !== null) {
    _classPrivateMethodGet(this, _endGame, _endGame2).call(this, winner);
  }
}
function _playerPlaceShip2(coord, isHorizontal) {
  _classPrivateMethodGet(this, _placeShip, _placeShip2).call(this, coord, isHorizontal);
  _classPrivateMethodGet(this, _runRound, _runRound2).call(this);
}
function _getBundledAPI2() {
  return {
    startGame: this.startGame.bind(this),
    doBoardAction: this.doBoardAction.bind(this),
    restartRound: this.restartRound.bind(this)
  };
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
function _attackCell2(coord) {
  _classPrivateFieldGet(this, _playerOneGameboard).receiveAttack(coord);
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
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/entities/Ship.js");
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
          var boardCell = _classPrivateFieldGet(this, _board)[ship.getCoordStart().coordX - 1 + i][ship.getCoordStart().coordY - 1];
          boardCell.occupy(ship);
        }
      } else {
        for (var _i = 0; _i < length; _i += 1) {
          var _boardCell = _classPrivateFieldGet(this, _board)[ship.getCoordStart().coordX - 1][ship.getCoordStart().coordY - 1 + _i];
          _boardCell.occupy(ship);
        }
      }
      return true;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(coord) {
      return _classPrivateFieldGet(this, _board)[coord.coordX - 1][coord.coordY - 1].hit();
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
    value: function getBoardData() {
      var boardCopy = _classPrivateFieldGet(this, _board).slice();
      var boardData = [];
      boardCopy.forEach(function (row) {
        boardData.push.apply(boardData, _toConsumableArray(row));
      });
      return boardData;
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
          var boardCell = _classPrivateFieldGet(this, _board)[coordStart.coordX - 1 + i][coordStart.coordY - 1];
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
          var _boardCell2 = _classPrivateFieldGet(this, _board)[coordStart.coordX - 1][coordStart.coordY - 1 + _i2];
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
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _userName = /*#__PURE__*/new WeakMap();
var _hitLog = /*#__PURE__*/new WeakMap();
var _playerShips = /*#__PURE__*/new WeakMap();
var Player = /*#__PURE__*/function () {
  function Player() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F5RDtBQUM5QjtBQUUzQixJQUFNYyxVQUFVLEdBQUcsSUFBSTlGLGtFQUFjLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvQm9hcmRDZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvQ29vcmRpbmF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0hpdFN0YXR1cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwUGllY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi4vZW50aXRpZXMvSGl0U3RhdHVzXCI7XG5cbmNsYXNzIERPTUNvbnRyb2xsZXIge1xuICAjYm9hcmRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtb25lJyk7XG5cbiAgI2JvYXJkVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLXR3bycpO1xuXG4gICNzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZScpO1xuXG4gICNzd2l0Y2hIb3Jpem9udGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvcml6b250YWwtc3RhdHVzJyk7XG5cbiAgI3Jlc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQtZ2FtZScpO1xuXG4gICNib2FyZEluaXQgPSBmYWxzZTtcblxuICAjTlVNQkVSX09GX0NFTExTID0gMTAwO1xuXG4gICNpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5kb0JvYXJkQWN0aW9uKTtcbiAgICB0aGlzLiNtYXBIYW5kbGVycyhjb250cm9sbGVyQVBJKTtcbiAgfVxuXG4gICNtYXBIYW5kbGVycyhjb250cm9sbGVyQVBJKSB7XG4gICAgdGhpcy4jc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5zdGFydEdhbWUpO1xuICAgIHRoaXMuI3N3aXRjaEhvcml6b250YWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmQpO1xuICB9XG5cbiAgI2luaXRCb2FyZChkb0JvYXJkQWN0aW9uSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jTlVNQkVSX09GX0NFTExTOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld0JvYXJkQ2VsbE9uZSA9IHRoaXMuI2NyZWF0ZUJvYXJkQ2VsbChkb0JvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxUd28gPSB0aGlzLiNjcmVhdGVCb2FyZENlbGwoZG9Cb2FyZEFjdGlvbkhhbmRsZXIpO1xuXG4gICAgICB0aGlzLiNib2FyZE9uZS5hcHBlbmRDaGlsZChuZXdCb2FyZENlbGxPbmUpO1xuICAgICAgdGhpcy4jYm9hcmRUd28uYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsVHdvKTtcbiAgICB9XG5cbiAgICB0aGlzLiNib2FyZEluaXQgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlRE9NQm9hcmQoYm9hcmRPbmVEYXRhLCBib2FyZFR3b0RhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI05VTUJFUl9PRl9DRUxMUzsgaSArPSAxKSB7XG4gICAgICBjb25zdCBub2RlQm9hcmRPbmUgPSB0aGlzLiNib2FyZE9uZS5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkT25lID0gYm9hcmRPbmVEYXRhW2ldO1xuXG4gICAgICBjb25zdCBub2RlQm9hcmRUd28gPSB0aGlzLiNib2FyZFR3by5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkVHdvID0gYm9hcmRUd29EYXRhW2ldO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lKTtcbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28pO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvKTtcbiAgICB9XG4gIH1cblxuICAjdG9nZ2xlSG9yaXpvbnRhbCgpIHtcbiAgICB0aGlzLiNpc0hvcml6b250YWwgPSAhdGhpcy4jaXNIb3Jpem9udGFsO1xuICAgIHRoaXMuI3N3aXRjaEhvcml6b250YWxCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLWFjdGl2ZScpO1xuICB9XG5cbiAgI2NyZWF0ZUJvYXJkQ2VsbChkb0JvYXJkQWN0aW9uSGFuZGxlcikge1xuICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY2VsbCcpO1xuICAgIG5ld0NlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb0JvYXJkQWN0aW9uSGFuZGxlcik7XG5cbiAgICByZXR1cm4gbmV3Q2VsbDtcbiAgfVxuXG4gICN1cGRhdGVDZWxsTWV0YURhdGEoY2VsbE5vZGUsIGNlbGxEYXRhKSB7XG4gICAgY29uc3QgY29vcmQgPSBjZWxsRGF0YS5nZXRDb29yZCgpO1xuXG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeCcsIGNvb3JkLmNvb3JkWCk7XG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeScsIGNvb3JkLmNvb3JkWSk7XG4gIH1cblxuICAjdXBkYXRlQ2VsbFN0YXR1cyhjZWxsTm9kZSwgY2VsbERhdGEpIHtcbiAgICBpZiAoIWNlbGxOb2RlIHx8ICFjZWxsRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm9kZSA9IGNlbGxOb2RlO1xuICAgIGNvbnN0IGRhdGEgPSBjZWxsRGF0YTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2V0SGl0U3RhdHVzKCk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5OT1RfSElUOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRkZGRkYnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX1NISVA6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGMDAwMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfQ0VMTDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZXRJc0hvcml6b250YWwoKSB7IHJldHVybiB0aGlzLiNpc0hvcml6b250YWwgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlcjtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2VudGl0aWVzL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2VudGl0aWVzL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL2VudGl0aWVzL0dhbWVib2FyZFwiO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4uL2VudGl0aWVzL0Nvb3JkaW5hdGVcIjtcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAjY3VycmVudFBsYXllciA9IG51bGw7XG5cbiAgI2lzR2FtZVJ1bm5pbmcgPSB0cnVlO1xuXG4gICNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuXG4gICNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICNwbGF5ZXJPbmUgPSBudWxsO1xuXG4gICNwbGF5ZXJUd28gPSBudWxsO1xuXG4gICNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBudWxsO1xuXG4gICNwbGF5ZXJUd29HYW1lYm9hcmQgPSBudWxsO1xuXG4gICNET01Db250cm9sbGVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNET01Db250cm9sbGVyID0gbmV3IERPTUNvbnRyb2xsZXIodGhpcy4jZ2V0QnVuZGxlZEFQSSgpKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcblxuICAgIHRoaXMuI3VwZGF0ZUJvYXJkKCk7XG4gIH1cblxuICAvLyBDYiB0byBsZXQgb3RoZXIgbGF5ZXJzIG9mIHByb2dyYW0gaW50ZXJhY3Qgd2l0aCBvdXIgZ2FtZSBjb250cm9sbGVyXG4gIGRvQm9hcmRBY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy4jaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgY29uc3QgY29vcmRYID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHg7XG4gICAgY29uc3QgY29vcmRZID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHk7XG5cbiAgICBjb25zdCBjZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jRE9NQ29udHJvbGxlci5nZXRJc0hvcml6b250YWwoKTtcblxuXG4gICAgc3dpdGNoICh0aGlzLiNpc1JvdW5kUnVubmluZykge1xuICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICB0aGlzLiNwbGF5ZXJQbGFjZVNoaXAoY2VsbENvb3JkLCBpc0hvcml6b250YWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICB0aGlzLiNwbGF5ZXJBdHRhY2soY2VsbENvb3JkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLiN1cGRhdGVCb2FyZCgpO1xuICB9XG5cbiAgI3VwZGF0ZUJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkT25lRGF0YSA9IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5nZXRCb2FyZERhdGEoKTtcbiAgICBjb25zdCBib2FyZFR3b0RhdGEgPSB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0Qm9hcmREYXRhKCk7XG5cbiAgICB0aGlzLiNET01Db250cm9sbGVyLnVwZGF0ZURPTUJvYXJkKGJvYXJkT25lRGF0YSwgYm9hcmRUd29EYXRhKTtcbiAgfVxuXG4gICNwbGF5ZXJBdHRhY2soY29vcmQpIHtcbiAgICB0aGlzLiNhdHRhY2tDZWxsKGNvb3JkKTtcblxuICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuI2dldFdpbm5lcigpO1xuXG4gICAgaWYgKHdpbm5lciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jZW5kR2FtZSh3aW5uZXIpO1xuICAgIH1cbiAgfVxuXG4gICNwbGF5ZXJQbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIHRoaXMuI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKTtcblxuICAgIHRoaXMuI3J1blJvdW5kKCk7XG4gIH1cblxuICAvLyBUbyBsZXQgRE9NIHN0YXJ0IHRoZSBnYW1lXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICBpZiAodGhpcy4jaXNHYW1lUnVubmluZyA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IHRydWU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNnZXRCdW5kbGVkQVBJKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydEdhbWU6IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyksXG4gICAgICBkb0JvYXJkQWN0aW9uOiB0aGlzLmRvQm9hcmRBY3Rpb24uYmluZCh0aGlzKSxcbiAgICAgIHJlc3RhcnRSb3VuZDogdGhpcy5yZXN0YXJ0Um91bmQuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVG8gY2hlY2sgaWYgcm91bmQgc2hvdWxkIHN0YXJ0IG9uY2UgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgI3J1blJvdW5kKCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUgJiYgdGhpcy4jcGxheWVyVHdvLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICBjb25zb2xlLmxvZygncm91bmQgaXMgcnVubmluZycpO1xuICAgICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcbiAgICB9XG4gIH1cblxuICAjZW5kR2FtZShwbGF5ZXJXaW5uZXIpIHtcbiAgICBpZiAocGxheWVyV2lubmVyID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHJlc3RhcnRSb3VuZCgpIHtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlQm9hcmQoKTtcbiAgfVxuXG4gICNzd2l0Y2hDdXJyZW50UGxheWVyKCkge1xuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUd287XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gIXRoaXMuI2lzUGxheWVyT25lVHVybjtcbiAgfVxuXG4gICNnZXRXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3dpbicpO1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3bztcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuI3BsYXllclR3b0dhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3dpbicpO1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllck9uZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gICNhdHRhY2tDZWxsKGNvb3JkKSB7XG4gICAgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICB9XG5cbiAgI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKSB7XG4gICAgaWYgKHRoaXMuI2lzUm91bmRSdW5uaW5nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcbiAgICBsZXQgbmV3U2hpcCA9IG51bGw7XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9XG5cbiAgICAvLyBUbyBidWlsZCBzaGlwcyBpbiBwcmUtZGV0ZXJtaW5lZCBwYXR0ZXJuICg1LDQsMywzLDIpXG4gICAgc3dpdGNoICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDQ6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUGxheWVycyBzaG91bGQgdGFrZSB0dXJucyBhZnRlciBidWlsZGluZyB0aGVpciBlbnRpcmUgZmxlZXRcbiAgICBpZiAoaXNQbGFjZWQpIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIuYWRkU2hpcChuZXdTaGlwKTtcbiAgICAgIGNvbnNvbGUubG9nKCdwbGFjZWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IHBsYXllciBzaGlwcyAke3RoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGh9YCk7XG5cbiAgICAgIGlmICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2l0Y2gnKTtcbiAgICAgICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9Db29yZGluYXRlXCI7XG5pbXBvcnQgaGl0U3RhdHVzIGZyb20gXCIuL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBCb2FyZENlbGwge1xuICAgICNjb29yZCA9IG51bGw7XG5cbiAgICAjc2hpcCA9IG51bGw7XG5cbiAgICAjaXNPY2N1cGllZCA9IGZhbHNlO1xuXG4gICAgI2hhc0JlZW5IaXQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIH1cblxuICAgIG9jY3VweShzaGlwKSB7XG4gICAgICAgIGlmICh0aGlzLiNzaGlwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaXNPY2N1cGllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuI3NoaXAgPSBzaGlwO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2hhc0JlZW5IaXQgPT09IHRydWUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNoYXNCZWVuSGl0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgdGhpcy4jc2hpcC50cnlIaXQodGhpcy4jY29vcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmQoKSB7IHJldHVybiB0aGlzLiNjb29yZDsgfVxuXG4gICAgZ2V0Q29vcmRTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgWDogJHt0aGlzLiNjb29yZC5jb29yZFh9IFk6ICR7dGhpcy4jY29vcmQuY29vcmRZfWA7XG4gICAgfVxuXG4gICAgZ2V0SGl0U3RhdHVzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuI2hhc0JlZW5IaXQpIHtcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuTk9UX0hJVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNzaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5ISVRfU0hJUDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX0NFTEw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGlzT2NjdXBpZWQoKSB7IHJldHVybiB0aGlzLiNpc09jY3VwaWVkOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkQ2VsbDsiLCJjbGFzcyBDb29yZGluYXRlIHtcbiAgICAjY29vcmRYID0gMDtcblxuICAgICNjb29yZFkgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmRYID0gY29vcmRYO1xuICAgICAgICB0aGlzLiNjb29yZFkgPSBjb29yZFk7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3JkWCgpIHsgcmV0dXJuIE51bWJlci5wYXJzZUludCh0aGlzLiNjb29yZFgsIDEwKTsgfVxuXG4gICAgZ2V0IGNvb3JkWSgpIHsgcmV0dXJuIE51bWJlci5wYXJzZUludCh0aGlzLiNjb29yZFksIDEwKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29yZGluYXRlOyIsImltcG9ydCBCb2FyZENlbGwgZnJvbSBcIi4vQm9hcmRDZWxsXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgI3dpZHRoID0gMTA7XG5cbiAgICAjaGVpZ2h0ID0gMTA7XG5cbiAgICAjYm9hcmQgPSBbXTtcblxuICAgICNzaGlwTGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2luaXRCb2FyZCgpO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuI2NhblBsYWNlKHNoaXAuZ2V0Q29vcmRTdGFydCgpLCBpc0hvcml6b250YWwsIGxlbmd0aCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNzaGlwTGlzdC5wdXNoKHNoaXApO1xuXG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMSkgKyBpXVtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDFdWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxKSArIGldO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNib2FyZFtjb29yZC5jb29yZFggLSAxXVtjb29yZC5jb29yZFkgLSAxXS5oaXQoKTtcbiAgICB9XG5cbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGlwTGlzdC5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cblxuICAgIGdldEJvYXJkRGF0YSgpIHtcbiAgICAgICAgY29uc3QgYm9hcmRDb3B5ID0gdGhpcy4jYm9hcmQuc2xpY2UoKTtcbiAgICAgICAgY29uc3QgYm9hcmREYXRhID0gW107XG5cbiAgICAgICAgYm9hcmRDb3B5LmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGJvYXJkRGF0YS5wdXNoKC4uLnJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBib2FyZERhdGE7XG4gICAgfVxuXG4gICAgI2NhblBsYWNlKGNvb3JkU3RhcnQsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBsZW5ndGggPiB0aGlzLiN3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGldW2Nvb3JkU3RhcnQuY29vcmRZIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBsZW5ndGggPiB0aGlzLiNoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbY29vcmRTdGFydC5jb29yZFggLSAxXVsoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0Qm9hcmQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZC5sZW5ndGggIT09IDApIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuI3dpZHRoOyB4ICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuI2JvYXJkLnB1c2goW10pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuI2hlaWdodDsgeSArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gc3dhcHBpbmcgdmFsdWVzIGR1ZSB0byB3cm9uZyBjZWxsIGRhdGEgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUNlbGwgPSBuZXcgQm9hcmRDZWxsKHkgKyAxLCB4ICsgMSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNib2FyZFt4XS5wdXNoKGVtcHR5Q2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImZ1bmN0aW9uIGhpdFN0YXR1cygpIHtcbiAgICBjb25zdCBOT1RfSElUID0gJ05PVF9ISVQnO1xuICAgIGNvbnN0IEhJVF9DRUxMID0gJ0hJVF9DRUxMJztcbiAgICBjb25zdCBISVRfU0hJUCA9ICdISVRfU0hJUCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBOT1RfSElULFxuICAgICAgICBISVRfQ0VMTCxcbiAgICAgICAgSElUX1NISVBcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGl0U3RhdHVzOyIsImNsYXNzIFBsYXllciB7XG4gICN1c2VyTmFtZSA9ICcnO1xuXG4gICNoaXRMb2cgPSBbXTtcblxuICAjcGxheWVyU2hpcHMgPSBbXTtcblxuICBsb2dIaXQoY29vcmQpIHtcbiAgICB0aGlzLiNoaXRMb2cucHVzaChjb29yZCk7XG4gIH1cblxuICBhZGRTaGlwKHNoaXApIHtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgZ2V0SGl0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRMb2cuc2xpY2UoKTtcbiAgfVxuXG4gIGdldFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5zbGljZSgpO1xuICB9XG5cbiAgcmVzZXRVc2VyKCkge1xuICAgIHRoaXMuI2hpdExvZyA9IFtdO1xuICAgIHRoaXMuI3BsYXllclNoaXBzID0gW107XG4gIH1cblxuICBzZXRVc2VyTmFtZSh1c2VyTmFtZSkge1xuICAgIHRoaXMuI3VzZXJOYW1lID0gdXNlck5hbWU7XG4gIH1cblxuICBnZXRVc2VyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdXNlck5hbWVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImltcG9ydCBTaGlwUGllY2UgZnJvbSBcIi4vU2hpcFBpZWNlXCI7XG5cbmNsYXNzIFNoaXAge1xuICAjdGltZXNIaXQgPSAwO1xuXG4gICNzaGlwUGllY2VzID0gW107XG4gIFxuICAjY29vcmRTdGFydCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgdGhpcy4jY29vcmRTdGFydCA9IGNvb3JkU3RhcnRcbiAgICB0aGlzLiNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKTtcbiAgfVxuXG4gIHRyeUhpdChoaXRDb29yZCkge1xuICAgIGNvbnN0IHNoaXBQaWVjZSA9IHRoaXMuI3NoaXBQaWVjZXMuZmluZChwaWVjZUNvb3JkID0+XG4gICAgICAocGllY2VDb29yZC5jb29yZFggPT09IGhpdENvb3JkLmNvb3JkWCkgJiYgKHBpZWNlQ29vcmQuY29vcmRZID09PSBoaXRDb29yZC5jb29yZFkpXG4gICAgKTtcblxuICAgIGlmIChzaGlwUGllY2UgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlKSByZXR1cm4gZmFsc2U7IFxuXG4gICAgdGhpcy4jdGltZXNIaXQgKz0gMTtcblxuICAgIHJldHVybiBzaGlwUGllY2UuaGl0KCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMuZXZlcnkoc2hpcFBpZWNlID0+XG4gICAgICBzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlXG4gICAgKTtcbiAgfVxuXG4gICNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHNoaXBQaWVjZUNvb3JkID0gbnVsbDtcblxuICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYICsgaSwgY29vcmRTdGFydC5jb29yZFkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYLCBjb29yZFN0YXJ0LmNvb3JkWSArIGkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiNzaGlwUGllY2VzLnB1c2goc2hpcFBpZWNlQ29vcmQpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvb3JkU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Nvb3JkU3RhcnQ7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5sZW5ndGg7IH1cblxuICBnZXQgdGltZXNIaXQoKSB7IHJldHVybiB0aGlzLiN0aW1lc0hpdDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcblxuY2xhc3MgU2hpcFBpZWNlIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI2hpdFN0YXR1cyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLiNoaXRTdGF0dXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy4jaGl0U3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFggfVxuXG4gICAgZ2V0IGNvb3JkWSgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWTsgfVxuXG4gICAgZ2V0IGhpdFN0YXR1cygpIHsgcmV0dXJuIHRoaXMuI2hpdFN0YXR1czsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwUGllY2U7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLXVpLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG5cbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnYnV0dG9uJ1xuICAgICdib2FyZCc7XG59XG5cbi5jb250cm9scy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBnYXA6IDJlbVxufVxuXG4uYm9hcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtO1xufVxuXG4uYm9hcmQge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gIGdyaWQtYXJlYTogYm9hcmQ7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uYm9hcmQtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYm9hcmQtY2VsbDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5cbi5idXR0b24ge1xuICBncmlkLWFyZWE6IGJ1dHRvbjtcblxuICBwYWRkaW5nOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24tYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFROztFQUVSOztXQUVTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS11aS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnYnV0dG9uJ1xcbiAgICAnYm9hcmQnO1xcbn1cXG5cXG4uY29udHJvbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbVxcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICBncmlkLWFyZWE6IGJvYXJkO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQtY2VsbDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcblxcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b24tYWN0aXZlIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyJztcbmltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbImhpdFN0YXR1cyIsIl9ib2FyZE9uZSIsIldlYWtNYXAiLCJfYm9hcmRUd28iLCJfc3RhcnRHYW1lQnV0dG9uIiwiX3N3aXRjaEhvcml6b250YWxCdXR0b24iLCJfcmVzdGFydEdhbWVCdXR0b24iLCJfYm9hcmRJbml0IiwiX05VTUJFUl9PRl9DRUxMUyIsIl9pc0hvcml6b250YWwiLCJfbWFwSGFuZGxlcnMiLCJXZWFrU2V0IiwiX2luaXRCb2FyZCIsIl90b2dnbGVIb3Jpem9udGFsIiwiX2NyZWF0ZUJvYXJkQ2VsbCIsIl91cGRhdGVDZWxsTWV0YURhdGEiLCJfdXBkYXRlQ2VsbFN0YXR1cyIsIkRPTUNvbnRyb2xsZXIiLCJjb250cm9sbGVyQVBJIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjIiwiX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMiLCJ3cml0YWJsZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZXQiLCJfaW5pdEJvYXJkMiIsImNhbGwiLCJkb0JvYXJkQWN0aW9uIiwiX21hcEhhbmRsZXJzMiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInVwZGF0ZURPTUJvYXJkIiwiYm9hcmRPbmVEYXRhIiwiYm9hcmRUd29EYXRhIiwiaSIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsIm5vZGVCb2FyZE9uZSIsImNoaWxkTm9kZXMiLCJkYXRhQm9hcmRPbmUiLCJub2RlQm9hcmRUd28iLCJkYXRhQm9hcmRUd28iLCJfdXBkYXRlQ2VsbFN0YXR1czIiLCJfdXBkYXRlQ2VsbE1ldGFEYXRhMiIsImdldElzSG9yaXpvbnRhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJfdG9nZ2xlSG9yaXpvbnRhbDIiLCJiaW5kIiwicmVzdGFydFJvdW5kIiwiZG9Cb2FyZEFjdGlvbkhhbmRsZXIiLCJuZXdCb2FyZENlbGxPbmUiLCJfY3JlYXRlQm9hcmRDZWxsMiIsIm5ld0JvYXJkQ2VsbFR3byIsImFwcGVuZENoaWxkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibmV3Q2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJjZWxsTm9kZSIsImNlbGxEYXRhIiwiY29vcmQiLCJnZXRDb29yZCIsInNldEF0dHJpYnV0ZSIsImNvb3JkWCIsImNvb3JkWSIsIm5vZGUiLCJkYXRhIiwic3RhdHVzIiwiZ2V0SGl0U3RhdHVzIiwiTk9UX0hJVCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiSElUX1NISVAiLCJISVRfQ0VMTCIsIlBsYXllciIsIlNoaXAiLCJHYW1lYm9hcmQiLCJDb29yZGluYXRlIiwiX2N1cnJlbnRQbGF5ZXIiLCJfaXNHYW1lUnVubmluZyIsIl9pc1JvdW5kUnVubmluZyIsIl9pc1BsYXllck9uZVR1cm4iLCJfcGxheWVyT25lIiwiX3BsYXllclR3byIsIl9wbGF5ZXJPbmVHYW1lYm9hcmQiLCJfcGxheWVyVHdvR2FtZWJvYXJkIiwiX0RPTUNvbnRyb2xsZXIiLCJfdXBkYXRlQm9hcmQiLCJfcGxheWVyQXR0YWNrIiwiX3BsYXllclBsYWNlU2hpcCIsIl9nZXRCdW5kbGVkQVBJIiwiX3J1blJvdW5kIiwiX2VuZEdhbWUiLCJfc3dpdGNoQ3VycmVudFBsYXllciIsIl9nZXRXaW5uZXIiLCJfYXR0YWNrQ2VsbCIsIl9wbGFjZVNoaXAiLCJHYW1lQ29udHJvbGxlciIsIl9nZXRCdW5kbGVkQVBJMiIsIl91cGRhdGVCb2FyZDIiLCJldmVudCIsInRhcmdldCIsImRhdGFzZXQiLCJjb29yZHgiLCJjb29yZHkiLCJjZWxsQ29vcmQiLCJpc0hvcml6b250YWwiLCJfcGxheWVyUGxhY2VTaGlwMiIsIl9wbGF5ZXJBdHRhY2syIiwiZ2V0Qm9hcmREYXRhIiwiX2F0dGFja0NlbGwyIiwid2lubmVyIiwiX2dldFdpbm5lcjIiLCJfZW5kR2FtZTIiLCJfcGxhY2VTaGlwMiIsIl9ydW5Sb3VuZDIiLCJnZXRTaGlwcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJfc3dpdGNoQ3VycmVudFBsYXllcjIiLCJwbGF5ZXJXaW5uZXIiLCJhbGxTaGlwc1N1bmsiLCJyZWNlaXZlQXR0YWNrIiwiY3VycmVudEJvYXJkIiwibmV3U2hpcCIsImlzUGxhY2VkIiwicGxhY2VTaGlwIiwiYWRkU2hpcCIsImNvbmNhdCIsIl9jb29yZCIsIl9zaGlwIiwiX2lzT2NjdXBpZWQiLCJfaGFzQmVlbkhpdCIsIkJvYXJkQ2VsbCIsIm9jY3VweSIsInNoaXAiLCJoaXQiLCJ0cnlIaXQiLCJnZXRDb29yZFN0cmluZyIsImdldCIsIl9jb29yZFgiLCJfY29vcmRZIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX2JvYXJkIiwiX3NoaXBMaXN0IiwiX2NhblBsYWNlIiwiX2NhblBsYWNlMiIsImdldENvb3JkU3RhcnQiLCJwdXNoIiwiYm9hcmRDZWxsIiwiZXZlcnkiLCJpc1N1bmsiLCJib2FyZENvcHkiLCJzbGljZSIsImJvYXJkRGF0YSIsImZvckVhY2giLCJyb3ciLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsImNvb3JkU3RhcnQiLCJpc09jY3VwaWVkIiwieCIsInkiLCJlbXB0eUNlbGwiLCJfdXNlck5hbWUiLCJfaGl0TG9nIiwiX3BsYXllclNoaXBzIiwibG9nSGl0IiwiZ2V0SGl0TG9nIiwicmVzZXRVc2VyIiwic2V0VXNlck5hbWUiLCJ1c2VyTmFtZSIsImdldFVzZXJOYW1lIiwiU2hpcFBpZWNlIiwiX3RpbWVzSGl0IiwiX3NoaXBQaWVjZXMiLCJfY29vcmRTdGFydCIsIl9idWlsZFNoaXAiLCJob3Jpem9udGFsIiwiX2J1aWxkU2hpcDIiLCJoaXRDb29yZCIsInNoaXBQaWVjZSIsImZpbmQiLCJwaWVjZUNvb3JkIiwidW5kZWZpbmVkIiwic2hpcFBpZWNlQ29vcmQiLCJfaGl0U3RhdHVzIiwiY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=