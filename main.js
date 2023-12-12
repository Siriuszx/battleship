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
  cellNode.setAttribute('data-coordx', coord.coordY);
  cellNode.setAttribute('data-coordy', coord.coordX);
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
    return _classPrivateFieldGet(this, _playerTwo);
  }
  if (_classPrivateFieldGet(this, _playerTwoGameboard).allShipsSunk() === true) {
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
      return Number.parseInt(_classPrivateFieldGet(this, _coordX), 16);
    }
  }, {
    key: "coordY",
    get: function get() {
      return Number.parseInt(_classPrivateFieldGet(this, _coordY), 16);
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
  for (var i = 0; i < _classPrivateFieldGet(this, _width); i += 1) {
    _classPrivateFieldGet(this, _board).push([]);
    for (var j = 0; j < _classPrivateFieldGet(this, _height); j += 1) {
      var emptyCell = new _BoardCell__WEBPACK_IMPORTED_MODULE_0__["default"](i + 1, j + 1);
      _classPrivateFieldGet(this, _board)[i].push(emptyCell);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F5RDtBQUM5QjtBQUUzQixJQUFNYyxVQUFVLEdBQUcsSUFBSTdGLGtFQUFjLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvQm9hcmRDZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvQ29vcmRpbmF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0hpdFN0YXR1cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwUGllY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi4vZW50aXRpZXMvSGl0U3RhdHVzXCI7XG5cbmNsYXNzIERPTUNvbnRyb2xsZXIge1xuICAjYm9hcmRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtb25lJyk7XG5cbiAgI2JvYXJkVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLXR3bycpO1xuXG4gICNzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZScpO1xuXG4gICNzd2l0Y2hIb3Jpem9udGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvcml6b250YWwtc3RhdHVzJyk7XG5cbiAgI3Jlc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQtZ2FtZScpO1xuXG4gICNib2FyZEluaXQgPSBmYWxzZTtcblxuICAjTlVNQkVSX09GX0NFTExTID0gMTAwO1xuXG4gICNpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5kb0JvYXJkQWN0aW9uKTtcbiAgICB0aGlzLiNtYXBIYW5kbGVycyhjb250cm9sbGVyQVBJKTtcbiAgfVxuXG4gICNtYXBIYW5kbGVycyhjb250cm9sbGVyQVBJKSB7XG4gICAgdGhpcy4jc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5zdGFydEdhbWUpO1xuICAgIHRoaXMuI3N3aXRjaEhvcml6b250YWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmQpO1xuICB9XG5cbiAgI2luaXRCb2FyZChkb0JvYXJkQWN0aW9uSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jTlVNQkVSX09GX0NFTExTOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld0JvYXJkQ2VsbE9uZSA9IHRoaXMuI2NyZWF0ZUJvYXJkQ2VsbChkb0JvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxUd28gPSB0aGlzLiNjcmVhdGVCb2FyZENlbGwoZG9Cb2FyZEFjdGlvbkhhbmRsZXIpO1xuXG4gICAgICB0aGlzLiNib2FyZE9uZS5hcHBlbmRDaGlsZChuZXdCb2FyZENlbGxPbmUpO1xuICAgICAgdGhpcy4jYm9hcmRUd28uYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsVHdvKTtcbiAgICB9XG5cbiAgICB0aGlzLiNib2FyZEluaXQgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlRE9NQm9hcmQoYm9hcmRPbmVEYXRhLCBib2FyZFR3b0RhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI05VTUJFUl9PRl9DRUxMUzsgaSArPSAxKSB7XG4gICAgICBjb25zdCBub2RlQm9hcmRPbmUgPSB0aGlzLiNib2FyZE9uZS5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkT25lID0gYm9hcmRPbmVEYXRhW2ldO1xuXG4gICAgICBjb25zdCBub2RlQm9hcmRUd28gPSB0aGlzLiNib2FyZFR3by5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkVHdvID0gYm9hcmRUd29EYXRhW2ldO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lKTtcbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28pO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvKTtcbiAgICB9XG4gIH1cblxuICAjdG9nZ2xlSG9yaXpvbnRhbCgpIHtcbiAgICB0aGlzLiNpc0hvcml6b250YWwgPSAhdGhpcy4jaXNIb3Jpem9udGFsO1xuICAgIHRoaXMuI3N3aXRjaEhvcml6b250YWxCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLWFjdGl2ZScpO1xuICB9XG5cbiAgI2NyZWF0ZUJvYXJkQ2VsbChkb0JvYXJkQWN0aW9uSGFuZGxlcikge1xuICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY2VsbCcpO1xuICAgIG5ld0NlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb0JvYXJkQWN0aW9uSGFuZGxlcik7XG5cbiAgICByZXR1cm4gbmV3Q2VsbDtcbiAgfVxuXG4gICN1cGRhdGVDZWxsTWV0YURhdGEoY2VsbE5vZGUsIGNlbGxEYXRhKSB7XG4gICAgY29uc3QgY29vcmQgPSBjZWxsRGF0YS5nZXRDb29yZCgpO1xuXG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeCcsIGNvb3JkLmNvb3JkWSk7XG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeScsIGNvb3JkLmNvb3JkWCk7XG4gIH1cblxuICAjdXBkYXRlQ2VsbFN0YXR1cyhjZWxsTm9kZSwgY2VsbERhdGEpIHtcbiAgICBpZiAoIWNlbGxOb2RlIHx8ICFjZWxsRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm9kZSA9IGNlbGxOb2RlO1xuICAgIGNvbnN0IGRhdGEgPSBjZWxsRGF0YTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2V0SGl0U3RhdHVzKCk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5OT1RfSElUOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRkZGRkYnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX1NISVA6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGMDAwMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfQ0VMTDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZXRJc0hvcml6b250YWwoKSB7IHJldHVybiB0aGlzLiNpc0hvcml6b250YWwgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlcjtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2VudGl0aWVzL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2VudGl0aWVzL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL2VudGl0aWVzL0dhbWVib2FyZFwiO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4uL2VudGl0aWVzL0Nvb3JkaW5hdGVcIjtcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAjY3VycmVudFBsYXllciA9IG51bGw7XG5cbiAgI2lzR2FtZVJ1bm5pbmcgPSB0cnVlO1xuXG4gICNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuXG4gICNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICNwbGF5ZXJPbmUgPSBudWxsO1xuXG4gICNwbGF5ZXJUd28gPSBudWxsO1xuXG4gICNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBudWxsO1xuXG4gICNwbGF5ZXJUd29HYW1lYm9hcmQgPSBudWxsO1xuXG4gICNET01Db250cm9sbGVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNET01Db250cm9sbGVyID0gbmV3IERPTUNvbnRyb2xsZXIodGhpcy4jZ2V0QnVuZGxlZEFQSSgpKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcblxuICAgIHRoaXMuI3VwZGF0ZUJvYXJkKCk7XG4gIH1cblxuICAvLyBDYiB0byBsZXQgb3RoZXIgbGF5ZXJzIG9mIHByb2dyYW0gaW50ZXJhY3Qgd2l0aCBvdXIgZ2FtZSBjb250cm9sbGVyXG4gIGRvQm9hcmRBY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy4jaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgY29uc3QgY29vcmRYID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHg7XG4gICAgY29uc3QgY29vcmRZID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHk7XG5cbiAgICBjb25zdCBjZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jRE9NQ29udHJvbGxlci5nZXRJc0hvcml6b250YWwoKTtcblxuXG4gICAgc3dpdGNoICh0aGlzLiNpc1JvdW5kUnVubmluZykge1xuICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICB0aGlzLiNwbGF5ZXJQbGFjZVNoaXAoY2VsbENvb3JkLCBpc0hvcml6b250YWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICB0aGlzLiNwbGF5ZXJBdHRhY2soY2VsbENvb3JkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLiN1cGRhdGVCb2FyZCgpO1xuICB9XG5cbiAgI3VwZGF0ZUJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkT25lRGF0YSA9IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5nZXRCb2FyZERhdGEoKTtcbiAgICBjb25zdCBib2FyZFR3b0RhdGEgPSB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0Qm9hcmREYXRhKCk7XG5cbiAgICB0aGlzLiNET01Db250cm9sbGVyLnVwZGF0ZURPTUJvYXJkKGJvYXJkT25lRGF0YSwgYm9hcmRUd29EYXRhKTtcbiAgfVxuXG4gICNwbGF5ZXJBdHRhY2soY29vcmQpIHtcbiAgICB0aGlzLiNhdHRhY2tDZWxsKGNvb3JkKTtcblxuICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuI2dldFdpbm5lcigpO1xuXG4gICAgaWYgKHdpbm5lciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jZW5kR2FtZSh3aW5uZXIpO1xuICAgIH1cbiAgfVxuXG4gICNwbGF5ZXJQbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIHRoaXMuI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKTtcblxuICAgIHRoaXMuI3J1blJvdW5kKCk7XG4gIH1cblxuICAvLyBUbyBsZXQgRE9NIHN0YXJ0IHRoZSBnYW1lXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICBpZiAodGhpcy4jaXNHYW1lUnVubmluZyA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IHRydWU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNnZXRCdW5kbGVkQVBJKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydEdhbWU6IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyksXG4gICAgICBkb0JvYXJkQWN0aW9uOiB0aGlzLmRvQm9hcmRBY3Rpb24uYmluZCh0aGlzKSxcbiAgICAgIHJlc3RhcnRSb3VuZDogdGhpcy5yZXN0YXJ0Um91bmQuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVG8gY2hlY2sgaWYgcm91bmQgc2hvdWxkIHN0YXJ0IG9uY2UgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgI3J1blJvdW5kKCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUgJiYgdGhpcy4jcGxheWVyVHdvLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICBjb25zb2xlLmxvZygncm91bmQgaXMgcnVubmluZycpO1xuICAgICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcbiAgICB9XG4gIH1cblxuICAjZW5kR2FtZShwbGF5ZXJXaW5uZXIpIHtcbiAgICBpZiAocGxheWVyV2lubmVyID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHJlc3RhcnRSb3VuZCgpIHtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuICB9XG5cbiAgI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllclR3bztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB9XG5cbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSAhdGhpcy4jaXNQbGF5ZXJPbmVUdXJuO1xuICB9XG5cbiAgI2dldFdpbm5lcigpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyVHdvO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAjYXR0YWNrQ2VsbChjb29yZCkge1xuICAgIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgfVxuXG4gICNwbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZykgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGN1cnJlbnRCb2FyZCA9IG51bGw7XG4gICAgbGV0IG5ld1NoaXAgPSBudWxsO1xuICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gVG8gYnVpbGQgc2hpcHMgaW4gcHJlLWRldGVybWluZWQgcGF0dGVybiAoNSw0LDMsMywyKVxuICAgIHN3aXRjaCAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgNSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgNCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSA0OiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFBsYXllcnMgc2hvdWxkIHRha2UgdHVybnMgYWZ0ZXIgYnVpbGRpbmcgdGhlaXIgZW50aXJlIGZsZWV0XG4gICAgaWYgKGlzUGxhY2VkKSB7XG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyLmFkZFNoaXAobmV3U2hpcCk7XG4gICAgICBjb25zb2xlLmxvZygncGxhY2VkJyk7XG4gICAgICBjb25zb2xlLmxvZyhgY3VycmVudCBwbGF5ZXIgc2hpcHMgJHt0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RofWApO1xuXG4gICAgICBpZiAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpdGNoJyk7XG4gICAgICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi9IaXRTdGF0dXNcIjtcblxuY2xhc3MgQm9hcmRDZWxsIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI3NoaXAgPSBudWxsO1xuXG4gICAgI2lzT2NjdXBpZWQgPSBmYWxzZTtcblxuICAgICNoYXNCZWVuSGl0ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBvY2N1cHkoc2hpcCkge1xuICAgICAgICBpZiAodGhpcy4jc2hpcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2lzT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiNzaGlwID0gc2hpcDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNoYXNCZWVuSGl0ID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaGFzQmVlbkhpdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgIHRoaXMuI3NoaXAudHJ5SGl0KHRoaXMuI2Nvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldENvb3JkKCkgeyByZXR1cm4gdGhpcy4jY29vcmQ7IH1cblxuICAgIGdldENvb3JkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFg6ICR7dGhpcy4jY29vcmQuY29vcmRYfSBZOiAke3RoaXMuI2Nvb3JkLmNvb3JkWX1gO1xuICAgIH1cblxuICAgIGdldEhpdFN0YXR1cygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLiNoYXNCZWVuSGl0KSB7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLk5PVF9ISVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX1NISVA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9DRUxMO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc09jY3VwaWVkKCkgeyByZXR1cm4gdGhpcy4jaXNPY2N1cGllZDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZENlbGw7IiwiY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgI2Nvb3JkWCA9IDA7XG5cbiAgICAjY29vcmRZID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkWCA9IGNvb3JkWDtcbiAgICAgICAgdGhpcy4jY29vcmRZID0gY29vcmRZO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRYLCAxNik7IH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRZLCAxNik7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRpbmF0ZTsiLCJpbXBvcnQgQm9hcmRDZWxsIGZyb20gXCIuL0JvYXJkQ2VsbFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgICN3aWR0aCA9IDEwO1xuXG4gICAgI2hlaWdodCA9IDEwO1xuXG4gICAgI2JvYXJkID0gW107XG5cbiAgICAjc2hpcExpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNpbml0Qm9hcmQoKTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNjYW5QbGFjZShzaGlwLmdldENvb3JkU3RhcnQoKSwgaXNIb3Jpem9udGFsLCBsZW5ndGgpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jc2hpcExpc3QucHVzaChzaGlwKTtcblxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbKHNoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDEpICsgaV1bc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRZIC0gMV07XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFggLSAxXVsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRZIC0gMSkgKyBpXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jYm9hcmRbY29vcmQuY29vcmRYIC0gMV1bY29vcmQuY29vcmRZIC0gMV0uaGl0KCk7XG4gICAgfVxuXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hpcExpc3QuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG5cbiAgICBnZXRCb2FyZERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ29weSA9IHRoaXMuI2JvYXJkLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkRGF0YSA9IFtdO1xuXG4gICAgICAgIGJvYXJkQ29weS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBib2FyZERhdGEucHVzaCguLi5yb3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYm9hcmREYXRhO1xuICAgIH1cblxuICAgICNjYW5QbGFjZShjb29yZFN0YXJ0LCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBzd2l0Y2ggKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICAgICAgLy8gdG8gZXhjbHVkZSBzdGFydGluZyBwb2ludCBmcm9tIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKChjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgbGVuZ3RoID4gdGhpcy4jd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgaV1bY29vcmRTdGFydC5jb29yZFkgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgLy8gdG8gZXhjbHVkZSBzdGFydGluZyBwb2ludCBmcm9tIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKChjb29yZFN0YXJ0LmNvb3JkWSAtIDEpICsgbGVuZ3RoID4gdGhpcy4jaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW2Nvb3JkU3RhcnQuY29vcmRYIC0gMV1bKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5pdEJvYXJkKCkge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmQubGVuZ3RoICE9PSAwKSByZXR1cm47XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiN3aWR0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLiNib2FyZC5wdXNoKFtdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNoZWlnaHQ7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5Q2VsbCA9IG5ldyBCb2FyZENlbGwoaSArIDEsIGogKyAxKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2JvYXJkW2ldLnB1c2goZW1wdHlDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiZnVuY3Rpb24gaGl0U3RhdHVzKCkge1xuICAgIGNvbnN0IE5PVF9ISVQgPSAnTk9UX0hJVCc7XG4gICAgY29uc3QgSElUX0NFTEwgPSAnSElUX0NFTEwnO1xuICAgIGNvbnN0IEhJVF9TSElQID0gJ0hJVF9TSElQJztcblxuICAgIHJldHVybiB7XG4gICAgICAgIE5PVF9ISVQsXG4gICAgICAgIEhJVF9DRUxMLFxuICAgICAgICBISVRfU0hJUFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoaXRTdGF0dXM7IiwiY2xhc3MgUGxheWVyIHtcbiAgI3VzZXJOYW1lID0gJyc7XG5cbiAgI2hpdExvZyA9IFtdO1xuXG4gICNwbGF5ZXJTaGlwcyA9IFtdO1xuXG4gIGxvZ0hpdChjb29yZCkge1xuICAgIHRoaXMuI2hpdExvZy5wdXNoKGNvb3JkKTtcbiAgfVxuXG4gIGFkZFNoaXAoc2hpcCkge1xuICAgIHRoaXMuI3BsYXllclNoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICBnZXRIaXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdExvZy5zbGljZSgpO1xuICB9XG5cbiAgZ2V0U2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllclNoaXBzLnNsaWNlKCk7XG4gIH1cblxuICByZXNldFVzZXIoKSB7XG4gICAgdGhpcy4jaGl0TG9nID0gW107XG4gICAgdGhpcy4jcGxheWVyU2hpcHMgPSBbXTtcbiAgfVxuXG4gIHNldFVzZXJOYW1lKHVzZXJOYW1lKSB7XG4gICAgdGhpcy4jdXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgfVxuXG4gIGdldFVzZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiN1c2VyTmFtZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiaW1wb3J0IFNoaXBQaWVjZSBmcm9tIFwiLi9TaGlwUGllY2VcIjtcblxuY2xhc3MgU2hpcCB7XG4gICN0aW1lc0hpdCA9IDA7XG5cbiAgI3NoaXBQaWVjZXMgPSBbXTtcbiAgXG4gICNjb29yZFN0YXJ0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICB0aGlzLiNjb29yZFN0YXJ0ID0gY29vcmRTdGFydFxuICAgIHRoaXMuI2J1aWxkU2hpcChjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpO1xuICB9XG5cbiAgdHJ5SGl0KGhpdENvb3JkKSB7XG4gICAgY29uc3Qgc2hpcFBpZWNlID0gdGhpcy4jc2hpcFBpZWNlcy5maW5kKHBpZWNlQ29vcmQgPT5cbiAgICAgIChwaWVjZUNvb3JkLmNvb3JkWCA9PT0gaGl0Q29vcmQuY29vcmRYKSAmJiAocGllY2VDb29yZC5jb29yZFkgPT09IGhpdENvb3JkLmNvb3JkWSlcbiAgICApO1xuXG4gICAgaWYgKHNoaXBQaWVjZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHNoaXBQaWVjZS5oaXRTdGF0dXMgPT09IHRydWUpIHJldHVybiBmYWxzZTsgXG5cbiAgICB0aGlzLiN0aW1lc0hpdCArPSAxO1xuXG4gICAgcmV0dXJuIHNoaXBQaWVjZS5oaXQoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5ldmVyeShzaGlwUGllY2UgPT5cbiAgICAgIHNoaXBQaWVjZS5oaXRTdGF0dXMgPT09IHRydWVcbiAgICApO1xuICB9XG5cbiAgI2J1aWxkU2hpcChjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgc2hpcFBpZWNlQ29vcmQgPSBudWxsO1xuXG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICBzaGlwUGllY2VDb29yZCA9IG5ldyBTaGlwUGllY2UoY29vcmRTdGFydC5jb29yZFggKyBpLCBjb29yZFN0YXJ0LmNvb3JkWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwUGllY2VDb29yZCA9IG5ldyBTaGlwUGllY2UoY29vcmRTdGFydC5jb29yZFgsIGNvb3JkU3RhcnQuY29vcmRZICsgaSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuI3NoaXBQaWVjZXMucHVzaChzaGlwUGllY2VDb29yZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29vcmRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29vcmRTdGFydDtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7IHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmxlbmd0aDsgfVxuXG4gIGdldCB0aW1lc0hpdCgpIHsgcmV0dXJuIHRoaXMuI3RpbWVzSGl0OyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuXG5jbGFzcyBTaGlwUGllY2Uge1xuICAgICNjb29yZCA9IG51bGw7XG5cbiAgICAjaGl0U3RhdHVzID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuI2hpdFN0YXR1cyA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLiNoaXRTdGF0dXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3JkWCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWCB9XG5cbiAgICBnZXQgY29vcmRZKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRZOyB9XG5cbiAgICBnZXQgaGl0U3RhdHVzKCkgeyByZXR1cm4gdGhpcy4jaGl0U3RhdHVzOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBQaWVjZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUtdWktY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJlbTtcblxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdidXR0b24nXG4gICAgJ2JvYXJkJztcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtXG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW07XG59XG5cbi5ib2FyZCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgZ3JpZC1hcmVhOiBib2FyZDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5ib2FyZC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib2FyZC1jZWxsOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcbn1cblxuLmJ1dHRvbiB7XG4gIGdyaWQtYXJlYTogYnV0dG9uO1xuXG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbi1hY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7O0VBRVI7O1dBRVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCOztFQUV2QixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLXVpLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdidXR0b24nXFxuICAgICdib2FyZCc7XFxufVxcblxcbi5jb250cm9scy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMmVtXFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gIGdyaWQtYXJlYTogYm9hcmQ7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLWNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZC1jZWxsOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbi1hY3RpdmUge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOlsiaGl0U3RhdHVzIiwiX2JvYXJkT25lIiwiV2Vha01hcCIsIl9ib2FyZFR3byIsIl9zdGFydEdhbWVCdXR0b24iLCJfc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbiIsIl9yZXN0YXJ0R2FtZUJ1dHRvbiIsIl9ib2FyZEluaXQiLCJfTlVNQkVSX09GX0NFTExTIiwiX2lzSG9yaXpvbnRhbCIsIl9tYXBIYW5kbGVycyIsIldlYWtTZXQiLCJfaW5pdEJvYXJkIiwiX3RvZ2dsZUhvcml6b250YWwiLCJfY3JlYXRlQm9hcmRDZWxsIiwiX3VwZGF0ZUNlbGxNZXRhRGF0YSIsIl91cGRhdGVDZWxsU3RhdHVzIiwiRE9NQ29udHJvbGxlciIsImNvbnRyb2xsZXJBUEkiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIndyaXRhYmxlIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9pbml0Qm9hcmQyIiwiY2FsbCIsImRvQm9hcmRBY3Rpb24iLCJfbWFwSGFuZGxlcnMyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidXBkYXRlRE9NQm9hcmQiLCJib2FyZE9uZURhdGEiLCJib2FyZFR3b0RhdGEiLCJpIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0Iiwibm9kZUJvYXJkT25lIiwiY2hpbGROb2RlcyIsImRhdGFCb2FyZE9uZSIsIm5vZGVCb2FyZFR3byIsImRhdGFCb2FyZFR3byIsIl91cGRhdGVDZWxsU3RhdHVzMiIsIl91cGRhdGVDZWxsTWV0YURhdGEyIiwiZ2V0SXNIb3Jpem9udGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsIl90b2dnbGVIb3Jpem9udGFsMiIsImJpbmQiLCJyZXN0YXJ0Um91bmQiLCJkb0JvYXJkQWN0aW9uSGFuZGxlciIsIm5ld0JvYXJkQ2VsbE9uZSIsIl9jcmVhdGVCb2FyZENlbGwyIiwibmV3Qm9hcmRDZWxsVHdvIiwiYXBwZW5kQ2hpbGQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJuZXdDZWxsIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImNlbGxOb2RlIiwiY2VsbERhdGEiLCJjb29yZCIsImdldENvb3JkIiwic2V0QXR0cmlidXRlIiwiY29vcmRZIiwiY29vcmRYIiwibm9kZSIsImRhdGEiLCJzdGF0dXMiLCJnZXRIaXRTdGF0dXMiLCJOT1RfSElUIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJISVRfU0hJUCIsIkhJVF9DRUxMIiwiUGxheWVyIiwiU2hpcCIsIkdhbWVib2FyZCIsIkNvb3JkaW5hdGUiLCJfY3VycmVudFBsYXllciIsIl9pc0dhbWVSdW5uaW5nIiwiX2lzUm91bmRSdW5uaW5nIiwiX2lzUGxheWVyT25lVHVybiIsIl9wbGF5ZXJPbmUiLCJfcGxheWVyVHdvIiwiX3BsYXllck9uZUdhbWVib2FyZCIsIl9wbGF5ZXJUd29HYW1lYm9hcmQiLCJfRE9NQ29udHJvbGxlciIsIl91cGRhdGVCb2FyZCIsIl9wbGF5ZXJBdHRhY2siLCJfcGxheWVyUGxhY2VTaGlwIiwiX2dldEJ1bmRsZWRBUEkiLCJfcnVuUm91bmQiLCJfZW5kR2FtZSIsIl9zd2l0Y2hDdXJyZW50UGxheWVyIiwiX2dldFdpbm5lciIsIl9hdHRhY2tDZWxsIiwiX3BsYWNlU2hpcCIsIkdhbWVDb250cm9sbGVyIiwiX2dldEJ1bmRsZWRBUEkyIiwiX3VwZGF0ZUJvYXJkMiIsImV2ZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsImNvb3JkeCIsImNvb3JkeSIsImNlbGxDb29yZCIsImlzSG9yaXpvbnRhbCIsIl9wbGF5ZXJQbGFjZVNoaXAyIiwiX3BsYXllckF0dGFjazIiLCJnZXRCb2FyZERhdGEiLCJfYXR0YWNrQ2VsbDIiLCJ3aW5uZXIiLCJfZ2V0V2lubmVyMiIsIl9lbmRHYW1lMiIsIl9wbGFjZVNoaXAyIiwiX3J1blJvdW5kMiIsImdldFNoaXBzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIl9zd2l0Y2hDdXJyZW50UGxheWVyMiIsInBsYXllcldpbm5lciIsImFsbFNoaXBzU3VuayIsInJlY2VpdmVBdHRhY2siLCJjdXJyZW50Qm9hcmQiLCJuZXdTaGlwIiwiaXNQbGFjZWQiLCJwbGFjZVNoaXAiLCJhZGRTaGlwIiwiY29uY2F0IiwiX2Nvb3JkIiwiX3NoaXAiLCJfaXNPY2N1cGllZCIsIl9oYXNCZWVuSGl0IiwiQm9hcmRDZWxsIiwib2NjdXB5Iiwic2hpcCIsImhpdCIsInRyeUhpdCIsImdldENvb3JkU3RyaW5nIiwiZ2V0IiwiX2Nvb3JkWCIsIl9jb29yZFkiLCJOdW1iZXIiLCJwYXJzZUludCIsIl93aWR0aCIsIl9oZWlnaHQiLCJfYm9hcmQiLCJfc2hpcExpc3QiLCJfY2FuUGxhY2UiLCJfY2FuUGxhY2UyIiwiZ2V0Q29vcmRTdGFydCIsInB1c2giLCJib2FyZENlbGwiLCJldmVyeSIsImlzU3VuayIsImJvYXJkQ29weSIsInNsaWNlIiwiYm9hcmREYXRhIiwiZm9yRWFjaCIsInJvdyIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY29vcmRTdGFydCIsImlzT2NjdXBpZWQiLCJqIiwiZW1wdHlDZWxsIiwiX3VzZXJOYW1lIiwiX2hpdExvZyIsIl9wbGF5ZXJTaGlwcyIsImxvZ0hpdCIsImdldEhpdExvZyIsInJlc2V0VXNlciIsInNldFVzZXJOYW1lIiwidXNlck5hbWUiLCJnZXRVc2VyTmFtZSIsIlNoaXBQaWVjZSIsIl90aW1lc0hpdCIsIl9zaGlwUGllY2VzIiwiX2Nvb3JkU3RhcnQiLCJfYnVpbGRTaGlwIiwiaG9yaXpvbnRhbCIsIl9idWlsZFNoaXAyIiwiaGl0Q29vcmQiLCJzaGlwUGllY2UiLCJmaW5kIiwicGllY2VDb29yZCIsInVuZGVmaW5lZCIsInNoaXBQaWVjZUNvb3JkIiwiX2hpdFN0YXR1cyIsImNvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9