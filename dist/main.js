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
var _boardInit = /*#__PURE__*/new WeakMap();
var _NUMBER_OF_CELLS = /*#__PURE__*/new WeakMap();
var _initBoard = /*#__PURE__*/new WeakSet();
var _createBoardCell = /*#__PURE__*/new WeakSet();
var _updateCellStatus = /*#__PURE__*/new WeakSet();
var DOMController = /*#__PURE__*/function () {
  function DOMController(_doBoardActionHandler) {
    _classCallCheck(this, DOMController);
    _classPrivateMethodInitSpec(this, _updateCellStatus);
    _classPrivateMethodInitSpec(this, _createBoardCell);
    _classPrivateMethodInitSpec(this, _initBoard);
    _classPrivateFieldInitSpec(this, _boardOne, {
      writable: true,
      value: document.getElementById('board-one')
    });
    _classPrivateFieldInitSpec(this, _boardTwo, {
      writable: true,
      value: document.getElementById('board-two')
    });
    _classPrivateFieldInitSpec(this, _boardInit, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _NUMBER_OF_CELLS, {
      writable: true,
      value: 100
    });
    _classPrivateMethodGet(this, _initBoard, _initBoard2).call(this, _doBoardActionHandler);
  }
  _createClass(DOMController, [{
    key: "updateDOMBoard",
    value: function updateDOMBoard(boardOneData, boardTwoData) {
      for (var i = 0; i < _classPrivateFieldGet(this, _NUMBER_OF_CELLS); i += 1) {
        var nodeOne = _classPrivateFieldGet(this, _boardOne).childNodes[i];
        var dataOne = boardOneData[i];
        var nodeTwo = _classPrivateFieldGet(this, _boardTwo).childNodes[i];
        var dataTwo = boardTwoData[i];
        _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeOne, dataOne);
        _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeTwo, dataTwo);
      }
    }
  }]);
  return DOMController;
}();
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
function _createBoardCell2(doBoardActionHandler) {
  var newCell = document.createElement('div');
  newCell.classList.add('board-cell');
  newCell.addEventListener('click', doBoardActionHandler);
  return newCell;
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
    _classPrivateMethodInitSpec(this, _runRound);
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
      value: true
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
    _classPrivateFieldSet(this, _DOMController, new _DOMController__WEBPACK_IMPORTED_MODULE_3__["default"](this.doBoardAction.bind(this)));
    _classPrivateFieldSet(this, _playerOneGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
    _classPrivateFieldSet(this, _playerTwoGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
    _classPrivateFieldSet(this, _playerOne, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]());
    _classPrivateFieldSet(this, _playerTwo, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]());
    _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
  }

  // Cb to let other layers of program interact with our game controller
  _createClass(GameController, [{
    key: "doBoardAction",
    value: function doBoardAction(coord) {
      var isHorizontal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (_classPrivateFieldGet(this, _isGameRunning) === false) return;
      switch (_classPrivateFieldGet(this, _isRoundRunning)) {
        case false:
          {
            _classPrivateMethodGet(this, _playerPlaceShip, _playerPlaceShip2).call(this, coord, isHorizontal);
            break;
          }
        case true:
          {
            _classPrivateMethodGet(this, _playerAttack, _playerAttack2).call(this, coord);
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

  // To check if round should start once all ships have been placed
  if (_classPrivateFieldGet(this, _playerOne).getShips().length === 5 && _classPrivateFieldGet(this, _playerTwo).getShips().length === 5) {
    _classPrivateFieldSet(this, _isRoundRunning, true);
  }
}
function _runRound2() {
  if (_classPrivateFieldGet(this, _playerOne).getShips().length === 5 && _classPrivateFieldGet(this, _playerTwo).getShips().length === 5) {
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
    if (_classPrivateFieldGet(this, _currentPlayer).getShips().length === 4) {
      _classPrivateMethodGet(this, _switchCurrentPlayer, _switchCurrentPlayer2).call(this);
    }
    _classPrivateFieldGet(this, _currentPlayer).addShip(newShip);
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
      return _classPrivateFieldGet(this, _coordX);
    }
  }, {
    key: "coordY",
    get: function get() {
      return _classPrivateFieldGet(this, _coordY);
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
        if (coordStart.coordX + length > _classPrivateFieldGet(this, _width)) {
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
        if (coordStart.coordY + length > _classPrivateFieldGet(this, _height)) {
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
}

.board {
  height: 500px;
  width: 500px;
  border: 1px solid black;

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
`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;;EAEvB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-ui-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n}\n\n.board {\n  height: 500px;\n  width: 500px;\n  border: 1px solid black;\n\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board-cell {\n  border: 1px solid black;\n}\n\n.board-cell:hover {\n  border: 2px solid lightgreen;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBeUQ7QUFDOUI7QUFFM0IsSUFBTWEsVUFBVSxHQUFHLElBQUkzRixrRUFBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9ET01Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0JvYXJkQ2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9IaXRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcFBpZWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4uL2VudGl0aWVzL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBET01Db250cm9sbGVyIHtcbiAgI2JvYXJkT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLW9uZScpO1xuXG4gICNib2FyZFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC10d28nKTtcblxuICAjYm9hcmRJbml0ID0gZmFsc2U7XG5cbiAgI05VTUJFUl9PRl9DRUxMUyA9IDEwMDtcblxuICBjb25zdHJ1Y3Rvcihkb0JvYXJkQWN0aW9uSGFuZGxlcikge1xuICAgIHRoaXMuI2luaXRCb2FyZChkb0JvYXJkQWN0aW9uSGFuZGxlcik7XG4gIH1cblxuICAjaW5pdEJvYXJkKGRvQm9hcmRBY3Rpb25IYW5kbGVyKSB7XG4gICAgaWYgKHRoaXMuI2JvYXJkSW5pdCA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNOVU1CRVJfT0ZfQ0VMTFM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsT25lID0gdGhpcy4jY3JlYXRlQm9hcmRDZWxsKGRvQm9hcmRBY3Rpb25IYW5kbGVyKTtcbiAgICAgIGNvbnN0IG5ld0JvYXJkQ2VsbFR3byA9IHRoaXMuI2NyZWF0ZUJvYXJkQ2VsbChkb0JvYXJkQWN0aW9uSGFuZGxlcik7XG5cbiAgICAgIHRoaXMuI2JvYXJkT25lLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbE9uZSk7XG4gICAgICB0aGlzLiNib2FyZFR3by5hcHBlbmRDaGlsZChuZXdCb2FyZENlbGxUd28pO1xuICAgIH1cblxuICAgIHRoaXMuI2JvYXJkSW5pdCA9IHRydWU7XG4gIH1cblxuICB1cGRhdGVET01Cb2FyZChib2FyZE9uZURhdGEsIGJvYXJkVHdvRGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jTlVNQkVSX09GX0NFTExTOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5vZGVPbmUgPSB0aGlzLiNib2FyZE9uZS5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YU9uZSA9IGJvYXJkT25lRGF0YVtpXTtcbiAgICAgIFxuICAgICAgY29uc3Qgbm9kZVR3byA9IHRoaXMuI2JvYXJkVHdvLmNoaWxkTm9kZXNbaV07XG4gICAgICBjb25zdCBkYXRhVHdvID0gYm9hcmRUd29EYXRhW2ldO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVPbmUsIGRhdGFPbmUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlVHdvLCBkYXRhVHdvKTtcbiAgICB9XG4gIH1cblxuICAjY3JlYXRlQm9hcmRDZWxsKGRvQm9hcmRBY3Rpb25IYW5kbGVyKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY2VsbCcpO1xuICAgIG5ld0NlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb0JvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIG5ld0NlbGw7XG4gIH1cblxuICAjdXBkYXRlQ2VsbFN0YXR1cyhjZWxsTm9kZSwgY2VsbERhdGEpIHtcbiAgICBpZighY2VsbE5vZGUgfHwgIWNlbGxEYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCBub2RlID0gY2VsbE5vZGU7XG4gICAgY29uc3QgZGF0YSA9IGNlbGxEYXRhO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nZXRIaXRTdGF0dXMoKTtcblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLk5PVF9ISVQ6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfU0hJUDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkYwMDAwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLkhJVF9DRUxMOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET01Db250cm9sbGVyO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vZW50aXRpZXMvUGxheWVyXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZW50aXRpZXMvU2hpcFwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi4vZW50aXRpZXMvR2FtZWJvYXJkXCI7XG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tIFwiLi9ET01Db250cm9sbGVyXCI7XG5cbmNsYXNzIEdhbWVDb250cm9sbGVyIHtcbiAgI2N1cnJlbnRQbGF5ZXIgPSBudWxsO1xuXG4gICNpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcblxuICAjaXNSb3VuZFJ1bm5pbmcgPSB0cnVlO1xuXG4gICNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICNwbGF5ZXJPbmUgPSBudWxsO1xuXG4gICNwbGF5ZXJUd28gPSBudWxsO1xuXG4gICNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBudWxsO1xuXG4gICNwbGF5ZXJUd29HYW1lYm9hcmQgPSBudWxsO1xuXG4gICNET01Db250cm9sbGVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNET01Db250cm9sbGVyID0gbmV3IERPTUNvbnRyb2xsZXIodGhpcy5kb0JvYXJkQWN0aW9uLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyT25lID0gbmV3IFBsYXllcigpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuICB9XG5cbiAgLy8gQ2IgdG8gbGV0IG90aGVyIGxheWVycyBvZiBwcm9ncmFtIGludGVyYWN0IHdpdGggb3VyIGdhbWUgY29udHJvbGxlclxuICBkb0JvYXJkQWN0aW9uKGNvb3JkLCBpc0hvcml6b250YWwgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKHRoaXMuI2lzUm91bmRSdW5uaW5nKSB7XG4gICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgIHRoaXMuI3BsYXllclBsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgdGhpcy4jcGxheWVyQXR0YWNrKGNvb3JkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLiN1cGRhdGVCb2FyZCgpO1xuICB9XG5cbiAgI3VwZGF0ZUJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkT25lRGF0YSA9IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5nZXRCb2FyZERhdGEoKTtcbiAgICBjb25zdCBib2FyZFR3b0RhdGEgPSB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0Qm9hcmREYXRhKCk7XG5cbiAgICB0aGlzLiNET01Db250cm9sbGVyLnVwZGF0ZURPTUJvYXJkKGJvYXJkT25lRGF0YSwgYm9hcmRUd29EYXRhKTtcbiAgfVxuXG4gICNwbGF5ZXJBdHRhY2soY29vcmQpIHtcbiAgICB0aGlzLiNhdHRhY2tDZWxsKGNvb3JkKTtcblxuICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuI2dldFdpbm5lcigpO1xuXG4gICAgaWYgKHdpbm5lciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jZW5kR2FtZSh3aW5uZXIpO1xuICAgIH1cbiAgfVxuXG4gICNwbGF5ZXJQbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIHRoaXMuI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKTtcblxuICAgIC8vIFRvIGNoZWNrIGlmIHJvdW5kIHNob3VsZCBzdGFydCBvbmNlIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4gICAgaWYgKHRoaXMuI3BsYXllck9uZS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSAmJlxuICAgICAgdGhpcy4jcGxheWVyVHdvLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gVG8gbGV0IERPTSBzdGFydCB0aGUgZ2FtZVxuICBzdGFydEdhbWUoKSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IHRydWUpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAjcnVuUm91bmQoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSAmJiB0aGlzLiNwbGF5ZXJUd28uZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHtcbiAgICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuI2lzUGxheWVyT25lVHVybiA9IHRydWU7XG4gICAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgfVxuICB9XG5cbiAgI2VuZEdhbWUocGxheWVyV2lubmVyKSB7XG4gICAgaWYgKHBsYXllcldpbm5lciA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICByZXN0YXJ0Um91bmQoKSB7XG4gICAgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcigpO1xuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgfVxuXG4gICNzd2l0Y2hDdXJyZW50UGxheWVyKCkge1xuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUd287XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gIXRoaXMuI2lzUGxheWVyT25lVHVybjtcbiAgfVxuXG4gICNnZXRXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3bztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgI2F0dGFja0NlbGwoY29vcmQpIHtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gIH1cblxuICAjcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuICAgIGxldCBuZXdTaGlwID0gbnVsbDtcbiAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIC8vIFRvIGJ1aWxkIHNoaXBzIGluIHByZS1kZXRlcm1pbmVkIHBhdHRlcm4gKDUsNCwzLDMsMilcbiAgICBzd2l0Y2ggKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNSk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMToge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNCk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgNDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMik7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQbGF5ZXJzIHNob3VsZCB0YWtlIHR1cm5zIGFmdGVyIGJ1aWxkaW5nIHRoZWlyIGVudGlyZSBmbGVldFxuICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgaWYgKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyLmFkZFNoaXAobmV3U2hpcCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9Db29yZGluYXRlXCI7XG5pbXBvcnQgaGl0U3RhdHVzIGZyb20gXCIuL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBCb2FyZENlbGwge1xuICAgICNjb29yZCA9IG51bGw7XG5cbiAgICAjc2hpcCA9IG51bGw7XG5cbiAgICAjaXNPY2N1cGllZCA9IGZhbHNlO1xuXG4gICAgI2hhc0JlZW5IaXQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIH1cblxuICAgIG9jY3VweShzaGlwKSB7XG4gICAgICAgIGlmICh0aGlzLiNzaGlwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaXNPY2N1cGllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuI3NoaXAgPSBzaGlwO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2hhc0JlZW5IaXQgPT09IHRydWUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNoYXNCZWVuSGl0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgdGhpcy4jc2hpcC50cnlIaXQodGhpcy4jY29vcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgWDogJHt0aGlzLiNjb29yZC5jb29yZFh9IFk6ICR7dGhpcy4jY29vcmQuY29vcmRZfWA7XG4gICAgfVxuXG4gICAgZ2V0SGl0U3RhdHVzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuI2hhc0JlZW5IaXQpIHtcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuTk9UX0hJVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNzaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5ISVRfU0hJUDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX0NFTEw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGlzT2NjdXBpZWQoKSB7IHJldHVybiB0aGlzLiNpc09jY3VwaWVkOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkQ2VsbDsiLCJjbGFzcyBDb29yZGluYXRlIHtcbiAgICAjY29vcmRYID0gMDtcblxuICAgICNjb29yZFkgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmRYID0gY29vcmRYO1xuICAgICAgICB0aGlzLiNjb29yZFkgPSBjb29yZFk7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3JkWCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkWDsgfVxuXG4gICAgZ2V0IGNvb3JkWSgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkWTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29yZGluYXRlOyIsImltcG9ydCBCb2FyZENlbGwgZnJvbSBcIi4vQm9hcmRDZWxsXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgI3dpZHRoID0gMTA7XG5cbiAgICAjaGVpZ2h0ID0gMTA7XG5cbiAgICAjYm9hcmQgPSBbXTtcblxuICAgICNzaGlwTGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2luaXRCb2FyZCgpO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuI2NhblBsYWNlKHNoaXAuZ2V0Q29vcmRTdGFydCgpLCBpc0hvcml6b250YWwsIGxlbmd0aCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuI3NoaXBMaXN0LnB1c2goc2hpcCk7XG5cbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFggLSAxKSArIGldW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWSAtIDFdO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMV1bKHNoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWSAtIDEpICsgaV07XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2JvYXJkW2Nvb3JkLmNvb3JkWCAtIDFdW2Nvb3JkLmNvb3JkWSAtIDFdLmhpdCgpO1xuICAgIH1cblxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoaXBMaXN0LmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuXG4gICAgZ2V0Qm9hcmREYXRhKCkge1xuICAgICAgICBjb25zdCBib2FyZENvcHkgPSB0aGlzLiNib2FyZC5zbGljZSgpO1xuICAgICAgICBjb25zdCBib2FyZERhdGEgPSBbXTsgXG5cbiAgICAgICAgYm9hcmRDb3B5LmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGJvYXJkRGF0YS5wdXNoKC4uLnJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBib2FyZERhdGE7XG4gICAgfVxuXG4gICAgI2NhblBsYWNlKGNvb3JkU3RhcnQsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRTdGFydC5jb29yZFggKyBsZW5ndGggPiB0aGlzLiN3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGldW2Nvb3JkU3RhcnQuY29vcmRZIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRTdGFydC5jb29yZFkgKyBsZW5ndGggPiB0aGlzLiNoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbY29vcmRTdGFydC5jb29yZFggLSAxXVsoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0Qm9hcmQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZC5sZW5ndGggIT09IDApIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3dpZHRoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuI2JvYXJkLnB1c2goW10pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI2hlaWdodDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW1wdHlDZWxsID0gbmV3IEJvYXJkQ2VsbChpICsgMSwgaiArIDEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jYm9hcmRbaV0ucHVzaChlbXB0eUNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJmdW5jdGlvbiBoaXRTdGF0dXMoKSB7XG4gICAgY29uc3QgTk9UX0hJVCA9ICdOT1RfSElUJztcbiAgICBjb25zdCBISVRfQ0VMTCA9ICdISVRfQ0VMTCc7XG4gICAgY29uc3QgSElUX1NISVAgPSAnSElUX1NISVAnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgTk9UX0hJVCxcbiAgICAgICAgSElUX0NFTEwsXG4gICAgICAgIEhJVF9TSElQXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhpdFN0YXR1czsiLCJjbGFzcyBQbGF5ZXIge1xuICAjdXNlck5hbWUgPSAnJztcblxuICAjaGl0TG9nID0gW107XG5cbiAgI3BsYXllclNoaXBzID0gW107XG5cbiAgbG9nSGl0KGNvb3JkKSB7XG4gICAgdGhpcy4jaGl0TG9nLnB1c2goY29vcmQpO1xuICB9XG5cbiAgYWRkU2hpcChzaGlwKSB7XG4gICAgdGhpcy4jcGxheWVyU2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIGdldEhpdExvZygpIHtcbiAgICByZXR1cm4gdGhpcy4jaGl0TG9nLnNsaWNlKCk7XG4gIH1cblxuICBnZXRTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyU2hpcHMuc2xpY2UoKTtcbiAgfVxuXG4gIHJlc2V0VXNlcigpIHtcbiAgICB0aGlzLiNoaXRMb2cgPSBbXTtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcyA9IFtdO1xuICB9XG5cbiAgc2V0VXNlck5hbWUodXNlck5hbWUpIHtcbiAgICB0aGlzLiN1c2VyTmFtZSA9IHVzZXJOYW1lO1xuICB9XG5cbiAgZ2V0VXNlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3VzZXJOYW1lXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgU2hpcFBpZWNlIGZyb20gXCIuL1NoaXBQaWVjZVwiO1xuXG5jbGFzcyBTaGlwIHtcbiAgI3RpbWVzSGl0ID0gMDtcblxuICAjc2hpcFBpZWNlcyA9IFtdO1xuICBcbiAgI2Nvb3JkU3RhcnQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIHRoaXMuI2Nvb3JkU3RhcnQgPSBjb29yZFN0YXJ0XG4gICAgdGhpcy4jYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCk7XG4gIH1cblxuICB0cnlIaXQoaGl0Q29vcmQpIHtcbiAgICBjb25zdCBzaGlwUGllY2UgPSB0aGlzLiNzaGlwUGllY2VzLmZpbmQocGllY2VDb29yZCA9PlxuICAgICAgKHBpZWNlQ29vcmQuY29vcmRYID09PSBoaXRDb29yZC5jb29yZFgpICYmIChwaWVjZUNvb3JkLmNvb3JkWSA9PT0gaGl0Q29vcmQuY29vcmRZKVxuICAgICk7XG5cbiAgICBpZiAoc2hpcFBpZWNlID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlOyBcblxuICAgIHRoaXMuI3RpbWVzSGl0ICs9IDE7XG5cbiAgICByZXR1cm4gc2hpcFBpZWNlLmhpdCgpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmV2ZXJ5KHNoaXBQaWVjZSA9PlxuICAgICAgc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICAjYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBzaGlwUGllY2VDb29yZCA9IG51bGw7XG5cbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCArIGksIGNvb3JkU3RhcnQuY29vcmRZKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCwgY29vcmRTdGFydC5jb29yZFkgKyBpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jc2hpcFBpZWNlcy5wdXNoKHNoaXBQaWVjZUNvb3JkKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb29yZFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiNjb29yZFN0YXJ0O1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHsgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMubGVuZ3RoOyB9XG5cbiAgZ2V0IHRpbWVzSGl0KCkgeyByZXR1cm4gdGhpcy4jdGltZXNIaXQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9Db29yZGluYXRlXCI7XG5cbmNsYXNzIFNoaXBQaWVjZSB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNoaXRTdGF0dXMgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy4jaGl0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2hpdFN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRYIH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFk7IH1cblxuICAgIGdldCBoaXRTdGF0dXMoKSB7IHJldHVybiB0aGlzLiNoaXRTdGF0dXM7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcFBpZWNlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS11aS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG59XG5cbi5ib2FyZCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uYm9hcmQtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYm9hcmQtY2VsbDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS11aS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQtY2VsbDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9HYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6WyJoaXRTdGF0dXMiLCJfYm9hcmRPbmUiLCJXZWFrTWFwIiwiX2JvYXJkVHdvIiwiX2JvYXJkSW5pdCIsIl9OVU1CRVJfT0ZfQ0VMTFMiLCJfaW5pdEJvYXJkIiwiV2Vha1NldCIsIl9jcmVhdGVCb2FyZENlbGwiLCJfdXBkYXRlQ2VsbFN0YXR1cyIsIkRPTUNvbnRyb2xsZXIiLCJkb0JvYXJkQWN0aW9uSGFuZGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX2luaXRCb2FyZDIiLCJjYWxsIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidXBkYXRlRE9NQm9hcmQiLCJib2FyZE9uZURhdGEiLCJib2FyZFR3b0RhdGEiLCJpIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0Iiwibm9kZU9uZSIsImNoaWxkTm9kZXMiLCJkYXRhT25lIiwibm9kZVR3byIsImRhdGFUd28iLCJfdXBkYXRlQ2VsbFN0YXR1czIiLCJuZXdCb2FyZENlbGxPbmUiLCJfY3JlYXRlQm9hcmRDZWxsMiIsIm5ld0JvYXJkQ2VsbFR3byIsImFwcGVuZENoaWxkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwibmV3Q2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2VsbE5vZGUiLCJjZWxsRGF0YSIsIm5vZGUiLCJkYXRhIiwic3RhdHVzIiwiZ2V0SGl0U3RhdHVzIiwiTk9UX0hJVCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiSElUX1NISVAiLCJISVRfQ0VMTCIsIlBsYXllciIsIlNoaXAiLCJHYW1lYm9hcmQiLCJfY3VycmVudFBsYXllciIsIl9pc0dhbWVSdW5uaW5nIiwiX2lzUm91bmRSdW5uaW5nIiwiX2lzUGxheWVyT25lVHVybiIsIl9wbGF5ZXJPbmUiLCJfcGxheWVyVHdvIiwiX3BsYXllck9uZUdhbWVib2FyZCIsIl9wbGF5ZXJUd29HYW1lYm9hcmQiLCJfRE9NQ29udHJvbGxlciIsIl91cGRhdGVCb2FyZCIsIl9wbGF5ZXJBdHRhY2siLCJfcGxheWVyUGxhY2VTaGlwIiwiX3J1blJvdW5kIiwiX2VuZEdhbWUiLCJfc3dpdGNoQ3VycmVudFBsYXllciIsIl9nZXRXaW5uZXIiLCJfYXR0YWNrQ2VsbCIsIl9wbGFjZVNoaXAiLCJHYW1lQ29udHJvbGxlciIsImRvQm9hcmRBY3Rpb24iLCJiaW5kIiwiY29vcmQiLCJpc0hvcml6b250YWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfcGxheWVyUGxhY2VTaGlwMiIsIl9wbGF5ZXJBdHRhY2syIiwiX3VwZGF0ZUJvYXJkMiIsInN0YXJ0R2FtZSIsInJlc3RhcnRSb3VuZCIsImdldEJvYXJkRGF0YSIsIl9hdHRhY2tDZWxsMiIsIndpbm5lciIsIl9nZXRXaW5uZXIyIiwiX2VuZEdhbWUyIiwiX3BsYWNlU2hpcDIiLCJnZXRTaGlwcyIsIl9ydW5Sb3VuZDIiLCJfc3dpdGNoQ3VycmVudFBsYXllcjIiLCJwbGF5ZXJXaW5uZXIiLCJhbGxTaGlwc1N1bmsiLCJyZWNlaXZlQXR0YWNrIiwiY3VycmVudEJvYXJkIiwibmV3U2hpcCIsImlzUGxhY2VkIiwicGxhY2VTaGlwIiwiYWRkU2hpcCIsIkNvb3JkaW5hdGUiLCJfY29vcmQiLCJfc2hpcCIsIl9pc09jY3VwaWVkIiwiX2hhc0JlZW5IaXQiLCJCb2FyZENlbGwiLCJjb29yZFgiLCJjb29yZFkiLCJvY2N1cHkiLCJzaGlwIiwiaGl0IiwidHJ5SGl0IiwiZ2V0Q29vcmRTdHJpbmciLCJjb25jYXQiLCJnZXQiLCJfY29vcmRYIiwiX2Nvb3JkWSIsIl93aWR0aCIsIl9oZWlnaHQiLCJfYm9hcmQiLCJfc2hpcExpc3QiLCJfY2FuUGxhY2UiLCJfY2FuUGxhY2UyIiwiZ2V0Q29vcmRTdGFydCIsInB1c2giLCJib2FyZENlbGwiLCJldmVyeSIsImlzU3VuayIsImJvYXJkQ29weSIsInNsaWNlIiwiYm9hcmREYXRhIiwiZm9yRWFjaCIsInJvdyIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY29vcmRTdGFydCIsImlzT2NjdXBpZWQiLCJqIiwiZW1wdHlDZWxsIiwiX3VzZXJOYW1lIiwiX2hpdExvZyIsIl9wbGF5ZXJTaGlwcyIsImxvZ0hpdCIsImdldEhpdExvZyIsInJlc2V0VXNlciIsInNldFVzZXJOYW1lIiwidXNlck5hbWUiLCJnZXRVc2VyTmFtZSIsIlNoaXBQaWVjZSIsIl90aW1lc0hpdCIsIl9zaGlwUGllY2VzIiwiX2Nvb3JkU3RhcnQiLCJfYnVpbGRTaGlwIiwiaG9yaXpvbnRhbCIsIl9idWlsZFNoaXAyIiwiaGl0Q29vcmQiLCJzaGlwUGllY2UiLCJmaW5kIiwicGllY2VDb29yZCIsInNoaXBQaWVjZUNvb3JkIiwiX2hpdFN0YXR1cyIsImNvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9