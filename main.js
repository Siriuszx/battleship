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

var _BOARD_WIDTH = /*#__PURE__*/new WeakMap();
var _BOARD_HEIGHT = /*#__PURE__*/new WeakMap();
var _CELL_COUNT = /*#__PURE__*/new WeakMap();
var _boardPlayerOne = /*#__PURE__*/new WeakMap();
var _boardPlayerTwo = /*#__PURE__*/new WeakMap();
var _startGameButton = /*#__PURE__*/new WeakMap();
var _switchAxisButton = /*#__PURE__*/new WeakMap();
var _restartGameButton = /*#__PURE__*/new WeakMap();
var _boardInit = /*#__PURE__*/new WeakMap();
var _isHorizontal = /*#__PURE__*/new WeakMap();
var _updateBoard = /*#__PURE__*/new WeakSet();
var _updateBoardFocus = /*#__PURE__*/new WeakSet();
var _mapHandlers = /*#__PURE__*/new WeakSet();
var _initBoard = /*#__PURE__*/new WeakSet();
var _createCell = /*#__PURE__*/new WeakSet();
var _updateCellMetaData = /*#__PURE__*/new WeakSet();
var _updateCellStatus = /*#__PURE__*/new WeakSet();
var _highlighBuildPattern = /*#__PURE__*/new WeakSet();
var _highlightCells = /*#__PURE__*/new WeakSet();
var _getShipSizePattern = /*#__PURE__*/new WeakSet();
var _toggleHorizontal = /*#__PURE__*/new WeakSet();
var DOMController = /*#__PURE__*/function () {
  function DOMController(_controllerAPI) {
    _classCallCheck(this, DOMController);
    // #endregion
    _classPrivateMethodInitSpec(this, _toggleHorizontal);
    _classPrivateMethodInitSpec(this, _getShipSizePattern);
    _classPrivateMethodInitSpec(this, _highlightCells);
    // #endregion
    // #region Cell Building Path Hinting
    _classPrivateMethodInitSpec(this, _highlighBuildPattern);
    _classPrivateMethodInitSpec(this, _updateCellStatus);
    _classPrivateMethodInitSpec(this, _updateCellMetaData);
    // #endregion
    // #region Cell Creation/StatusMutation
    _classPrivateMethodInitSpec(this, _createCell);
    _classPrivateMethodInitSpec(this, _initBoard);
    // #region Board Initialization
    _classPrivateMethodInitSpec(this, _mapHandlers);
    _classPrivateMethodInitSpec(this, _updateBoardFocus);
    _classPrivateMethodInitSpec(this, _updateBoard);
    _classPrivateFieldInitSpec(this, _BOARD_WIDTH, {
      writable: true,
      value: 10
    });
    _classPrivateFieldInitSpec(this, _BOARD_HEIGHT, {
      writable: true,
      value: 10
    });
    _classPrivateFieldInitSpec(this, _CELL_COUNT, {
      writable: true,
      value: 100
    });
    _classPrivateFieldInitSpec(this, _boardPlayerOne, {
      writable: true,
      value: document.getElementById('board-one')
    });
    _classPrivateFieldInitSpec(this, _boardPlayerTwo, {
      writable: true,
      value: document.getElementById('board-two')
    });
    _classPrivateFieldInitSpec(this, _startGameButton, {
      writable: true,
      value: document.getElementById('start-game')
    });
    _classPrivateFieldInitSpec(this, _switchAxisButton, {
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
    _classPrivateFieldInitSpec(this, _isHorizontal, {
      writable: true,
      value: true
    });
    _classPrivateMethodGet(this, _initBoard, _initBoard2).call(this, _controllerAPI.boardActionHandler, _controllerAPI.updateBoardHintsHandler);
    _classPrivateMethodGet(this, _mapHandlers, _mapHandlers2).call(this, _controllerAPI);
  }
  _createClass(DOMController, [{
    key: "updateUI",
    value: function updateUI(gameStateData, currentCellCoord) {
      _classPrivateMethodGet(this, _updateBoard, _updateBoard2).call(this, gameStateData);
      _classPrivateMethodGet(this, _updateBoardFocus, _updateBoardFocus2).call(this, gameStateData);
      if (currentCellCoord && gameStateData.isGameRunning) {
        _classPrivateMethodGet(this, _highlighBuildPattern, _highlighBuildPattern2).call(this, currentCellCoord, gameStateData.currentPlayerFleetSize, gameStateData.currentUserName);
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
function _updateBoard2(gameStateData) {
  var gameboardOneData = gameStateData.playerOneGameboardData;
  var gameboardTwoData = gameStateData.playerTwoGameboardData;
  for (var i = 0; i < _classPrivateFieldGet(this, _CELL_COUNT); i += 1) {
    var nodeBoardOne = _classPrivateFieldGet(this, _boardPlayerOne).childNodes[i];
    var dataBoardOne = gameboardOneData.boardData[i];
    var nodeBoardTwo = _classPrivateFieldGet(this, _boardPlayerTwo).childNodes[i];
    var dataBoardTwo = gameboardTwoData.boardData[i];
    _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardOne, dataBoardOne, gameStateData.isRoundRunning);
    _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardTwo, dataBoardTwo, gameStateData.isRoundRunning);
    _classPrivateMethodGet(this, _updateCellMetaData, _updateCellMetaData2).call(this, nodeBoardOne, dataBoardOne, gameboardOneData.playerUserName);
    _classPrivateMethodGet(this, _updateCellMetaData, _updateCellMetaData2).call(this, nodeBoardTwo, dataBoardTwo, gameboardTwoData.playerUserName);
  }
}
function _updateBoardFocus2(gameStateData) {
  if (gameStateData.isGameRunning === false) {
    _classPrivateFieldGet(this, _boardPlayerOne).classList.remove('board-active-build');
    _classPrivateFieldGet(this, _boardPlayerTwo).classList.remove('board-active-build');
    _classPrivateFieldGet(this, _boardPlayerOne).classList.remove('board-active-attack');
    _classPrivateFieldGet(this, _boardPlayerTwo).classList.remove('board-active-attack');
    return;
  }
  if (gameStateData.isRoundRunning === false) {
    switch (gameStateData.currentUserName) {
      case 'Player One':
        _classPrivateFieldGet(this, _boardPlayerOne).classList.add('board-active-build');
        _classPrivateFieldGet(this, _boardPlayerTwo).classList.remove('board-active-build');
        break;
      case 'Player Two':
        _classPrivateFieldGet(this, _boardPlayerOne).classList.remove('board-active-build');
        _classPrivateFieldGet(this, _boardPlayerTwo).classList.add('board-active-build');
        break;
      default:
        break;
    }
  }
  if (gameStateData.isRoundRunning === true) {
    _classPrivateFieldGet(this, _boardPlayerOne).classList.remove('board-active-build');
    _classPrivateFieldGet(this, _boardPlayerTwo).classList.remove('board-active-build');
    switch (gameStateData.currentUserName) {
      case 'Player One':
        _classPrivateFieldGet(this, _boardPlayerOne).classList.remove('board-active-attack');
        _classPrivateFieldGet(this, _boardPlayerTwo).classList.add('board-active-attack');
        break;
      case 'Player Two':
        _classPrivateFieldGet(this, _boardPlayerOne).classList.add('board-active-attack');
        _classPrivateFieldGet(this, _boardPlayerTwo).classList.remove('board-active-attack');
        break;
      default:
        break;
    }
  }
}
function _mapHandlers2(controllerAPI) {
  _classPrivateFieldGet(this, _startGameButton).addEventListener('click', controllerAPI.startGameHandler);
  _classPrivateFieldGet(this, _switchAxisButton).addEventListener('click', _classPrivateMethodGet(this, _toggleHorizontal, _toggleHorizontal2).bind(this));
  _classPrivateFieldGet(this, _restartGameButton).addEventListener('click', controllerAPI.restartRoundHandler);
}
function _initBoard2(boardActionHandler, updateBoardHintsHandler) {
  if (_classPrivateFieldGet(this, _boardInit) === true) return;
  for (var i = 0; i < _classPrivateFieldGet(this, _CELL_COUNT); i += 1) {
    var newBoardCellOne = _classPrivateMethodGet(this, _createCell, _createCell2).call(this, boardActionHandler, updateBoardHintsHandler);
    var newBoardCellTwo = _classPrivateMethodGet(this, _createCell, _createCell2).call(this, boardActionHandler, updateBoardHintsHandler);
    _classPrivateFieldGet(this, _boardPlayerOne).appendChild(newBoardCellOne);
    _classPrivateFieldGet(this, _boardPlayerTwo).appendChild(newBoardCellTwo);
  }
  _classPrivateFieldSet(this, _boardInit, true);
}
function _createCell2(boardActionHandler, updateBoardHintsHandler) {
  var newCell = document.createElement('div');
  newCell.classList.add('board-cell');
  newCell.addEventListener('click', boardActionHandler);
  newCell.addEventListener('mouseover', updateBoardHintsHandler);
  return newCell;
}
function _updateCellMetaData2(cellNode, cellData, playerName) {
  var coord = cellData.getCoord();
  cellNode.setAttribute('data-coordx', coord.coordX);
  cellNode.setAttribute('data-coordy', coord.coordY);
  cellNode.setAttribute('data-playername', playerName);
}
function _updateCellStatus2(cellNode, cellData, isRoundRunning) {
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
  if (cellData.isOccupied && isRoundRunning === false) node.style.backgroundColor = '#000';
}
function _highlighBuildPattern2(coord, currentPlayerFleetSize, currentPlayerName) {
  var shipSizePattern = _classPrivateMethodGet(this, _getShipSizePattern, _getShipSizePattern2).call(this, currentPlayerFleetSize);
  _classPrivateMethodGet(this, _highlightCells, _highlightCells2).call(this, coord, shipSizePattern, currentPlayerName);
}
function _highlightCells2(coord, shipSizePattern, currentPlayerName) {
  var isHorizontal = _classPrivateFieldGet(this, _isHorizontal);
  switch (isHorizontal) {
    case true:
      for (var i = 0; i < shipSizePattern; i += 1) {
        if (coord.coordX + shipSizePattern - 1 > _classPrivateFieldGet(this, _BOARD_WIDTH)) break;
        var currentNode = document.querySelector("div[data-coordx=\"".concat(coord.coordX + i, "\"][data-coordy=\"").concat(coord.coordY, "\"][data-playername=\"").concat(currentPlayerName, "\"]"));
        currentNode.style.backgroundColor = '#808080';
      }
      break;
    case false:
      for (var _i = 0; _i < shipSizePattern; _i += 1) {
        if (coord.coordY + shipSizePattern - 1 > _classPrivateFieldGet(this, _BOARD_HEIGHT)) break;
        var _currentNode = document.querySelector("div[data-coordx=\"".concat(coord.coordX, "\"][data-coordy=\"").concat(coord.coordY + _i, "\"][data-playername=\"").concat(currentPlayerName, "\"]"));
        _currentNode.style.backgroundColor = '#808080';
      }
      break;
    default:
      break;
  }
}
function _getShipSizePattern2(currentPlayerFleetSize) {
  switch (currentPlayerFleetSize) {
    case 0:
      return 5;
    case 1:
      return 4;
    case 2:
    case 3:
      return 3;
    case 4:
      return 2;
    default:
      return 0;
  }
}
function _toggleHorizontal2() {
  _classPrivateFieldSet(this, _isHorizontal, !_classPrivateFieldGet(this, _isHorizontal));
  _classPrivateFieldGet(this, _switchAxisButton).classList.toggle('button-active');
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../entities/DataPointContainers/GameStateDataBuilder'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
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
var _boardActionHandler = /*#__PURE__*/new WeakSet();
var _startGameHandler = /*#__PURE__*/new WeakSet();
var _restartRoundHandler = /*#__PURE__*/new WeakSet();
var _updateGameUI = /*#__PURE__*/new WeakSet();
var _updateBoardHintsHandler = /*#__PURE__*/new WeakSet();
var _getGameStateData = /*#__PURE__*/new WeakSet();
var _startRound = /*#__PURE__*/new WeakSet();
var _endGame = /*#__PURE__*/new WeakSet();
var _switchCurrentPlayer = /*#__PURE__*/new WeakSet();
var _getWinner = /*#__PURE__*/new WeakSet();
var _playerAttack = /*#__PURE__*/new WeakSet();
var _attackCell = /*#__PURE__*/new WeakSet();
var _playerPlaceShip = /*#__PURE__*/new WeakSet();
var _placeShip = /*#__PURE__*/new WeakSet();
var _getAPIContainer = /*#__PURE__*/new WeakSet();
var GameController = /*#__PURE__*/_createClass(function GameController() {
  _classCallCheck(this, GameController);
  _classPrivateMethodInitSpec(this, _getAPIContainer);
  _classPrivateMethodInitSpec(this, _placeShip);
  _classPrivateMethodInitSpec(this, _playerPlaceShip);
  _classPrivateMethodInitSpec(this, _attackCell);
  _classPrivateMethodInitSpec(this, _playerAttack);
  _classPrivateMethodInitSpec(this, _getWinner);
  _classPrivateMethodInitSpec(this, _switchCurrentPlayer);
  _classPrivateMethodInitSpec(this, _endGame);
  // To check if round should start once all ships have been placed
  _classPrivateMethodInitSpec(this, _startRound);
  _classPrivateMethodInitSpec(this, _getGameStateData);
  _classPrivateMethodInitSpec(this, _updateBoardHintsHandler);
  _classPrivateMethodInitSpec(this, _updateGameUI);
  _classPrivateMethodInitSpec(this, _restartRoundHandler);
  _classPrivateMethodInitSpec(this, _startGameHandler);
  // Callback to let other layers of program interact with our game controller
  _classPrivateMethodInitSpec(this, _boardActionHandler);
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
});
function _boardActionHandler2(event) {
  if (_classPrivateFieldGet(this, _isGameRunning) === false) return;
  var cellNode = event.target;
  var isCellOwner = cellNode.dataset.playername === _classPrivateFieldGet(this, _currentPlayer).getPlayerName();
  var isHorizontal = _classPrivateFieldGet(this, _DOMController).getIsHorizontal();
  var coordX = cellNode.dataset.coordx;
  var coordY = cellNode.dataset.coordy;
  var cellCoord = new _entities_Coordinate__WEBPACK_IMPORTED_MODULE_4__["default"](coordX, coordY);
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
  _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this, cellCoord);
}
function _startGameHandler2() {
  if (_classPrivateFieldGet(this, _isGameRunning) === true) return;
  _classPrivateFieldSet(this, _isGameRunning, true);
  _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this);
}
function _restartRoundHandler2() {
  _classPrivateFieldSet(this, _isGameRunning, false);
  _classPrivateFieldSet(this, _isRoundRunning, false);
  _classPrivateFieldSet(this, _playerOneGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
  _classPrivateFieldSet(this, _playerTwoGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
  _classPrivateFieldSet(this, _playerOne, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player One'));
  _classPrivateFieldSet(this, _playerTwo, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player Two'));
  _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
  _classPrivateFieldSet(this, _isPlayerOneTurn, true);
  _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this);
}
function _updateGameUI2(currentCellCoord) {
  var gameStateData = _classPrivateMethodGet(this, _getGameStateData, _getGameStateData2).call(this);
  _classPrivateFieldGet(this, _DOMController).updateUI(gameStateData, currentCellCoord);
}
function _updateBoardHintsHandler2(event) {
  var cellNode = event.target;
  if (cellNode.dataset.playername !== _classPrivateFieldGet(this, _currentPlayer).getPlayerName()) return;
  var coordX = cellNode.dataset.coordx;
  var coordY = cellNode.dataset.coordy;
  var currentCellCoord = new _entities_Coordinate__WEBPACK_IMPORTED_MODULE_4__["default"](coordX, coordY);
  _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this, currentCellCoord);
}
function _getGameStateData2() {
  var gameStateDataBuilder = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../entities/DataPointContainers/GameStateDataBuilder'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var gameStateData = gameStateDataBuilder.setCurrentUserName(_classPrivateFieldGet(this, _currentPlayer).getPlayerName()).setIsGameRunning(_classPrivateFieldGet(this, _isGameRunning)).setIsRoundRunning(_classPrivateFieldGet(this, _isRoundRunning)).setIsPlayerOneTurn(_classPrivateFieldGet(this, _isPlayerOneTurn)).setPlayerOneUserName(_classPrivateFieldGet(this, _playerOne).getPlayerName()).setPlayerTwoUserName(_classPrivateFieldGet(this, _playerTwo).getPlayerName()).setPlayerOneGameboardData(_classPrivateFieldGet(this, _playerOneGameboard).getGameboardData(_classPrivateFieldGet(this, _playerOne).getPlayerName())).setPlayerTwoGameboardData(_classPrivateFieldGet(this, _playerTwoGameboard).getGameboardData(_classPrivateFieldGet(this, _playerTwo).getPlayerName())).setPlayerOneFleetSize(_classPrivateFieldGet(this, _playerOne).fleetSize).setPlayerTwoFleetSize(_classPrivateFieldGet(this, _playerTwo).fleetSize).setCurrentPlayerFleetSize(_classPrivateFieldGet(this, _currentPlayer).fleetSize).build();
  return gameStateData;
}
function _startRound2() {
  if (_classPrivateFieldGet(this, _playerOne).getShips().length === 5 && _classPrivateFieldGet(this, _playerTwo).getShips().length === 5) {
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
  _classPrivateMethodGet(this, _startRound, _startRound2).call(this);
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
    if (_classPrivateFieldGet(this, _currentPlayer).getShips().length === 5) {
      _classPrivateMethodGet(this, _switchCurrentPlayer, _switchCurrentPlayer2).call(this);
    }
    return true;
  }
  return false;
}
function _getAPIContainer2() {
  return {
    startGameHandler: _classPrivateMethodGet(this, _startGameHandler, _startGameHandler2).bind(this),
    boardActionHandler: _classPrivateMethodGet(this, _boardActionHandler, _boardActionHandler2).bind(this),
    restartRoundHandler: _classPrivateMethodGet(this, _restartRoundHandler, _restartRoundHandler2).bind(this),
    updateBoardHintsHandler: _classPrivateMethodGet(this, _updateBoardHintsHandler, _updateBoardHintsHandler2).bind(this)
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './DataPointContainers/GameboardDataBuilder'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    key: "getGameboardData",
    value: function getGameboardData(playerUserName) {
      var gameboardDataBuilder = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './DataPointContainers/GameboardDataBuilder'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
      var gameboardData = gameboardDataBuilder.setBoardData(_classPrivateFieldGet(this, _board)).setPlayerUserName(playerUserName).setAllShipsSunk(this.allShipsSunk()).build();
      return gameboardData;
    }
  }, {
    key: "allShipsSunk",
    value: function allShipsSunk() {
      return _classPrivateFieldGet(this, _shipList).every(function (ship) {
        return ship.isSunk();
      });
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
    key: "getPlayerName",
    value: function getPlayerName() {
      return _classPrivateFieldGet(this, _playerName);
    }
  }, {
    key: "fleetSize",
    get: function get() {
      return _classPrivateFieldGet(this, _playerShips).length;
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

.board-active-build {
  border: 1px solid lightgreen;
}

.board-active-attack {
  border: 1px solid red;
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
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;;EAER;;WAES;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;;EAEvB,gBAAgB;;EAEhB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;;EAEjB,eAAe;EACf,WAAW;EACX,uBAAuB;EACvB,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-ui-container {\n  padding: 100px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n\n  grid-template-areas:\n    'button'\n    'board';\n}\n\n.controls-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  gap: 2em\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  gap: 2em;\n}\n\n.board {\n  height: 500px;\n  width: 500px;\n  border: 1px solid black;\n\n  grid-area: board;\n\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board-active-build {\n  border: 1px solid lightgreen;\n}\n\n.board-active-attack {\n  border: 1px solid red;\n}\n\n.board-cell {\n  border: 1px solid black;\n}\n\n.board-cell:hover {\n  border: 2px solid lightgreen;\n}\n\n.button {\n  grid-area: button;\n\n  padding: 0.5rem;\n  color: #fff;\n  border: 2px solid black;\n  background-color: black;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.button-active {\n  color: #000;\n  background-color: white;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.button:hover {\n  color: #000;\n  background-color: white;\n  text-transform: uppercase;\n  font-weight: 700;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBeUQ7QUFDOUI7QUFFM0IsSUFBTWMsVUFBVSxHQUFHLElBQUkvRyxrRUFBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9ET01Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0JvYXJkQ2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9IaXRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcFBpZWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4uL2VudGl0aWVzL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBET01Db250cm9sbGVyIHtcbiAgI0JPQVJEX1dJRFRIID0gMTA7XG5cbiAgI0JPQVJEX0hFSUdIVCA9IDEwO1xuXG4gICNDRUxMX0NPVU5UID0gMTAwO1xuXG4gICNib2FyZFBsYXllck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1vbmUnKTtcblxuICAjYm9hcmRQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtdHdvJyk7XG5cbiAgI3N0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XG5cbiAgI3N3aXRjaEF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9yaXpvbnRhbC1zdGF0dXMnKTtcblxuICAjcmVzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydC1nYW1lJyk7XG5cbiAgI2JvYXJkSW5pdCA9IGZhbHNlO1xuXG4gICNpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5ib2FyZEFjdGlvbkhhbmRsZXIsIGNvbnRyb2xsZXJBUEkudXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgIHRoaXMuI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpO1xuICB9XG5cbiAgdXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCkge1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkKGdhbWVTdGF0ZURhdGEpO1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkRm9jdXMoZ2FtZVN0YXRlRGF0YSk7XG5cbiAgICBpZiAoY3VycmVudENlbGxDb29yZCAmJiBnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuI2hpZ2hsaWdoQnVpbGRQYXR0ZXJuKGN1cnJlbnRDZWxsQ29vcmQsIGdhbWVTdGF0ZURhdGEuY3VycmVudFBsYXllckZsZWV0U2l6ZSwgZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVCb2FyZChnYW1lU3RhdGVEYXRhKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkT25lRGF0YSA9IGdhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICBjb25zdCBnYW1lYm9hcmRUd29EYXRhID0gZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNDRUxMX0NPVU5UOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5vZGVCb2FyZE9uZSA9IHRoaXMuI2JvYXJkUGxheWVyT25lLmNoaWxkTm9kZXNbaV07XG4gICAgICBjb25zdCBkYXRhQm9hcmRPbmUgPSBnYW1lYm9hcmRPbmVEYXRhLmJvYXJkRGF0YVtpXTtcblxuICAgICAgY29uc3Qgbm9kZUJvYXJkVHdvID0gdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZFR3byA9IGdhbWVib2FyZFR3b0RhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lLCBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsIGdhbWVib2FyZE9uZURhdGEucGxheWVyVXNlck5hbWUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvLCBnYW1lYm9hcmRUd29EYXRhLnBsYXllclVzZXJOYW1lKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlQm9hcmRGb2N1cyhnYW1lU3RhdGVEYXRhKSB7XG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgc3dpdGNoIChnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICBjYXNlICdQbGF5ZXIgT25lJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHN3aXRjaCAoZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGxheWVyIE9uZSc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIEJvYXJkIEluaXRpYWxpemF0aW9uXG5cbiAgI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnN0YXJ0R2FtZUhhbmRsZXIpO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmRIYW5kbGVyKTtcbiAgfVxuXG4gICNpbml0Qm9hcmQoYm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jQ0VMTF9DT1VOVDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxPbmUgPSB0aGlzLiNjcmVhdGVDZWxsKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsVHdvID0gdGhpcy4jY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcblxuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsT25lKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbFR3byk7XG4gICAgfVxuXG4gICAgdGhpcy4jYm9hcmRJbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIENlbGwgQ3JlYXRpb24vU3RhdHVzTXV0YXRpb25cblxuICAjY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcik7XG5cbiAgICByZXR1cm4gbmV3Q2VsbDtcbiAgfVxuXG4gICN1cGRhdGVDZWxsTWV0YURhdGEoY2VsbE5vZGUsIGNlbGxEYXRhLCBwbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgY29vcmQgPSBjZWxsRGF0YS5nZXRDb29yZCgpO1xuXG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeCcsIGNvb3JkLmNvb3JkWCk7XG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeScsIGNvb3JkLmNvb3JkWSk7XG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXBsYXllcm5hbWUnLCBwbGF5ZXJOYW1lKTtcbiAgfVxuXG4gICN1cGRhdGVDZWxsU3RhdHVzKGNlbGxOb2RlLCBjZWxsRGF0YSwgaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICBpZiAoIWNlbGxOb2RlIHx8ICFjZWxsRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm9kZSA9IGNlbGxOb2RlO1xuICAgIGNvbnN0IGRhdGEgPSBjZWxsRGF0YTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2V0SGl0U3RhdHVzKCk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5OT1RfSElUOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRkZGRkYnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX1NISVA6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGMDAwMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfQ0VMTDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2VsbERhdGEuaXNPY2N1cGllZCAmJiBpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gQ2VsbCBCdWlsZGluZyBQYXRoIEhpbnRpbmdcblxuICAjaGlnaGxpZ2hCdWlsZFBhdHRlcm4oY29vcmQsIGN1cnJlbnRQbGF5ZXJGbGVldFNpemUsIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3Qgc2hpcFNpemVQYXR0ZXJuID0gdGhpcy4jZ2V0U2hpcFNpemVQYXR0ZXJuKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpO1xuXG4gICAgdGhpcy4jaGlnaGxpZ2h0Q2VsbHMoY29vcmQsIHNoaXBTaXplUGF0dGVybiwgY3VycmVudFBsYXllck5hbWUpO1xuICB9XG5cbiAgI2hpZ2hsaWdodENlbGxzKGNvb3JkLCBzaGlwU2l6ZVBhdHRlcm4sIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jaXNIb3Jpem9udGFsO1xuXG4gICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZVBhdHRlcm47IGkgKz0gMSkge1xuICAgICAgICAgIGlmICgoY29vcmQuY29vcmRYICsgc2hpcFNpemVQYXR0ZXJuKSAtIDEgPiB0aGlzLiNCT0FSRF9XSURUSCkgYnJlYWs7XG4gICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1jb29yZHg9XCIke2Nvb3JkLmNvb3JkWCArIGl9XCJdW2RhdGEtY29vcmR5PVwiJHtjb29yZC5jb29yZFl9XCJdW2RhdGEtcGxheWVybmFtZT1cIiR7Y3VycmVudFBsYXllck5hbWV9XCJdYCk7XG4gICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZVBhdHRlcm47IGkgKz0gMSkge1xuICAgICAgICAgIGlmICgoY29vcmQuY29vcmRZICsgc2hpcFNpemVQYXR0ZXJuKSAtIDEgPiB0aGlzLiNCT0FSRF9IRUlHSFQpIGJyZWFrO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtY29vcmR4PVwiJHtjb29yZC5jb29yZFh9XCJdW2RhdGEtY29vcmR5PVwiJHtjb29yZC5jb29yZFkgKyBpfVwiXVtkYXRhLXBsYXllcm5hbWU9XCIke2N1cnJlbnRQbGF5ZXJOYW1lfVwiXWApO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gICNnZXRTaGlwU2l6ZVBhdHRlcm4oY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgIHN3aXRjaCAoY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDI6XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAjdG9nZ2xlSG9yaXpvbnRhbCgpIHtcbiAgICB0aGlzLiNpc0hvcml6b250YWwgPSAhdGhpcy4jaXNIb3Jpem9udGFsO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLWFjdGl2ZScpO1xuICB9XG5cbiAgZ2V0SXNIb3Jpem9udGFsKCkgeyByZXR1cm4gdGhpcy4jaXNIb3Jpem9udGFsIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9lbnRpdGllcy9QbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9lbnRpdGllcy9TaGlwXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9lbnRpdGllcy9HYW1lYm9hcmRcIjtcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuLi9lbnRpdGllcy9Db29yZGluYXRlXCI7XG5pbXBvcnQgR2FtZVN0YXRlRGF0YUJ1aWxkZXIgZnJvbSBcIi4uL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAjY3VycmVudFBsYXllciA9IG51bGw7XG5cbiAgI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAjcGxheWVyT25lID0gbnVsbDtcblxuICAjcGxheWVyVHdvID0gbnVsbDtcblxuICAjcGxheWVyT25lR2FtZWJvYXJkID0gbnVsbDtcblxuICAjcGxheWVyVHdvR2FtZWJvYXJkID0gbnVsbDtcblxuICAjRE9NQ29udHJvbGxlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jRE9NQ29udHJvbGxlciA9IG5ldyBET01Db250cm9sbGVyKHRoaXMuI2dldEFQSUNvbnRhaW5lcigpKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgLy8gQ2FsbGJhY2sgdG8gbGV0IG90aGVyIGxheWVycyBvZiBwcm9ncmFtIGludGVyYWN0IHdpdGggb3VyIGdhbWUgY29udHJvbGxlclxuICAjYm9hcmRBY3Rpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGNvbnN0IGlzQ2VsbE93bmVyID0gY2VsbE5vZGUuZGF0YXNldC5wbGF5ZXJuYW1lID09PSB0aGlzLiNjdXJyZW50UGxheWVyLmdldFBsYXllck5hbWUoKTtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLiNET01Db250cm9sbGVyLmdldElzSG9yaXpvbnRhbCgpO1xuXG4gICAgY29uc3QgY29vcmRYID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHg7XG4gICAgY29uc3QgY29vcmRZID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHk7XG4gICAgY29uc3QgY2VsbENvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuXG4gICAgc3dpdGNoICh0aGlzLiNpc1JvdW5kUnVubmluZykge1xuICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIHBsYWNlIHNoaXBzIG9uIEhJUyBPV04gYm9hcmQgb25seVxuICAgICAgICBpZiAoaXNDZWxsT3duZXIgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYXllclBsYWNlU2hpcChjZWxsQ29vcmQsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgIC8vIHRvIGxldCBwbGF5ZXIgYXR0YWNrIHNoaXBzIG9uIEhJUyBPUFBPTkVOVCdTIGJvYXJkIG9ubHlcbiAgICAgICAgaWYgKGlzQ2VsbE93bmVyID09PSB0cnVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYXllckF0dGFjayhjZWxsQ29vcmQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjZWxsQ29vcmQpO1xuICB9XG5cbiAgI3N0YXJ0R2FtZUhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IHRydWUpIHJldHVybjtcblxuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAjcmVzdGFydFJvdW5kSGFuZGxlcigpIHtcbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAjdXBkYXRlR2FtZVVJKGN1cnJlbnRDZWxsQ29vcmQpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gdGhpcy4jZ2V0R2FtZVN0YXRlRGF0YSgpO1xuXG4gICAgdGhpcy4jRE9NQ29udHJvbGxlci51cGRhdGVVSShnYW1lU3RhdGVEYXRhLCBjdXJyZW50Q2VsbENvb3JkKTtcbiAgfVxuXG4gICN1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKGNlbGxOb2RlLmRhdGFzZXQucGxheWVybmFtZSAhPT0gdGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuXG4gICAgY29uc3QgY3VycmVudENlbGxDb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKTtcbiAgfVxuXG4gICNnZXRHYW1lU3RhdGVEYXRhKCkge1xuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGFCdWlsZGVyID0gbmV3IEdhbWVTdGF0ZURhdGFCdWlsZGVyKCk7XG5cbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gZ2FtZVN0YXRlRGF0YUJ1aWxkZXJcbiAgICAgIC5zZXRDdXJyZW50VXNlck5hbWUodGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0SXNHYW1lUnVubmluZyh0aGlzLiNpc0dhbWVSdW5uaW5nKVxuICAgICAgLnNldElzUm91bmRSdW5uaW5nKHRoaXMuI2lzUm91bmRSdW5uaW5nKVxuICAgICAgLnNldElzUGxheWVyT25lVHVybih0aGlzLiNpc1BsYXllck9uZVR1cm4pXG4gICAgICAuc2V0UGxheWVyT25lVXNlck5hbWUodGhpcy4jcGxheWVyT25lLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJUd29Vc2VyTmFtZSh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldFBsYXllck9uZUdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuc2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0R2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyTmFtZSgpKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVGbGVldFNpemUodGhpcy4jcGxheWVyT25lLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRQbGF5ZXJUd29GbGVldFNpemUodGhpcy4jcGxheWVyVHdvLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRDdXJyZW50UGxheWVyRmxlZXRTaXplKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZmxlZXRTaXplKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICByZXR1cm4gZ2FtZVN0YXRlRGF0YTtcbiAgfVxuXG4gIC8vIFRvIGNoZWNrIGlmIHJvdW5kIHNob3VsZCBzdGFydCBvbmNlIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4gICNzdGFydFJvdW5kKCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUgJiYgdGhpcy4jcGxheWVyVHdvLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IHRydWU7XG4gICAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gICNlbmRHYW1lKHBsYXllcldpbm5lcikge1xuICAgIGlmIChwbGF5ZXJXaW5uZXIgPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllclR3bztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB9XG5cbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSAhdGhpcy4jaXNQbGF5ZXJPbmVUdXJuO1xuICB9XG5cbiAgI2dldFdpbm5lcigpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyVHdvO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAjcGxheWVyQXR0YWNrKGNvb3JkKSB7XG4gICAgdGhpcy4jYXR0YWNrQ2VsbChjb29yZCk7XG4gICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuXG4gICAgY29uc3Qgd2lubmVyID0gdGhpcy4jZ2V0V2lubmVyKCk7XG5cbiAgICBpZiAod2lubmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiNlbmRHYW1lKHdpbm5lcik7XG4gICAgICBjb25zb2xlLmxvZyhgcGxheWVyICR7d2lubmVyfSB3b25gKTtcbiAgICB9XG4gIH1cblxuICAjYXR0YWNrQ2VsbChjb29yZCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgY3VycmVudEJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAjcGxheWVyUGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICB0aGlzLiNwbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCk7XG5cbiAgICB0aGlzLiNzdGFydFJvdW5kKCk7XG4gIH1cblxuICAjcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuICAgIGxldCBuZXdTaGlwID0gbnVsbDtcbiAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIC8vIFRvIGJ1aWxkIHNoaXBzIGluIHByZS1kZXRlcm1pbmVkIHBhdHRlcm4gKDUsNCwzLDMsMilcbiAgICBzd2l0Y2ggKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNSk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMToge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNCk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgNDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMik7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQbGF5ZXJzIHNob3VsZCB0YWtlIHR1cm5zIGFmdGVyIGJ1aWxkaW5nIHRoZWlyIGVudGlyZSBmbGVldFxuICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllci5hZGRTaGlwKG5ld1NoaXApO1xuXG4gICAgICBpZiAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gICNnZXRBUElDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0R2FtZUhhbmRsZXI6IHRoaXMuI3N0YXJ0R2FtZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGJvYXJkQWN0aW9uSGFuZGxlcjogdGhpcy4jYm9hcmRBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICByZXN0YXJ0Um91bmRIYW5kbGVyOiB0aGlzLiNyZXN0YXJ0Um91bmRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcjogdGhpcy4jdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi9IaXRTdGF0dXNcIjtcblxuY2xhc3MgQm9hcmRDZWxsIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI3NoaXAgPSBudWxsO1xuXG4gICAgI2lzT2NjdXBpZWQgPSBmYWxzZTtcblxuICAgICNoYXNCZWVuSGl0ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBvY2N1cHkoc2hpcCkge1xuICAgICAgICBpZiAodGhpcy4jc2hpcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2lzT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiNzaGlwID0gc2hpcDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNoYXNCZWVuSGl0ID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaGFzQmVlbkhpdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgIHRoaXMuI3NoaXAudHJ5SGl0KHRoaXMuI2Nvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldENvb3JkKCkgeyByZXR1cm4gdGhpcy4jY29vcmQ7IH1cblxuICAgIGdldENvb3JkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFg6ICR7dGhpcy4jY29vcmQuY29vcmRYfSBZOiAke3RoaXMuI2Nvb3JkLmNvb3JkWX1gO1xuICAgIH1cblxuICAgIGdldEhpdFN0YXR1cygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLiNoYXNCZWVuSGl0KSB7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLk5PVF9ISVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX1NISVA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9DRUxMO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc09jY3VwaWVkKCkgeyByZXR1cm4gdGhpcy4jaXNPY2N1cGllZDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZENlbGw7IiwiY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgI2Nvb3JkWCA9IDA7XG5cbiAgICAjY29vcmRZID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkWCA9IGNvb3JkWDtcbiAgICAgICAgdGhpcy4jY29vcmRZID0gY29vcmRZO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRYLCAxMCk7IH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRZLCAxMCk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRpbmF0ZTsiLCJpbXBvcnQgQm9hcmRDZWxsIGZyb20gXCIuL0JvYXJkQ2VsbFwiO1xuaW1wb3J0IEdhbWVib2FyZERhdGFCdWlsZGVyIGZyb20gXCIuL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICAjd2lkdGggPSAxMDtcblxuICAgICNoZWlnaHQgPSAxMDtcblxuICAgICNib2FyZCA9IFtdO1xuXG4gICAgLy8gc3dhcHBpbmcgc3VwcG9zZWRseSBYIGFuZCBZIGNvb3JkaW5hdGVzIGhlcmUgYmVjYXVzZSBvZiBmYWlsZWQgYXR0ZW1wdCB0byBpbXBsZW1lbnQgMkQgYXJyYXlzIGluIEphdmFTY3JpcHQuLi5cbiAgICAjc2hpcExpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNpbml0Qm9hcmQoKTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNjYW5QbGFjZShzaGlwLmdldENvb3JkU3RhcnQoKSwgaXNIb3Jpem9udGFsLCBsZW5ndGgpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jc2hpcExpc3QucHVzaChzaGlwKTtcblxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRZIC0gMV1bKHNoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDEpICsgaV07XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRZIC0gMSkgKyBpXVtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFggLSAxXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jYm9hcmRbY29vcmQuY29vcmRZIC0gMV1bY29vcmQuY29vcmRYIC0gMV0uaGl0KCk7XG4gICAgfVxuICAgIFxuICAgIGdldEdhbWVib2FyZERhdGEocGxheWVyVXNlck5hbWUpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YUJ1aWxkZXIgPSBuZXcgR2FtZWJvYXJkRGF0YUJ1aWxkZXIoKTtcblxuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhID0gZ2FtZWJvYXJkRGF0YUJ1aWxkZXIuc2V0Qm9hcmREYXRhKHRoaXMuI2JvYXJkKVxuICAgICAgICAuc2V0UGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpXG4gICAgICAgIC5zZXRBbGxTaGlwc1N1bmsodGhpcy5hbGxTaGlwc1N1bmsoKSlcbiAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG4gICAgXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hpcExpc3QuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG4gICAgXG4gICAgI2NhblBsYWNlKGNvb3JkU3RhcnQsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBsZW5ndGggPiB0aGlzLiN3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtjb29yZFN0YXJ0LmNvb3JkWSAtIDFdWyhjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBsZW5ndGggPiB0aGlzLiNoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBpXVtjb29yZFN0YXJ0LmNvb3JkWCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0Qm9hcmQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZC5sZW5ndGggIT09IDApIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuI3dpZHRoOyB4ICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuI2JvYXJkLnB1c2goW10pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuI2hlaWdodDsgeSArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gc3dhcHBpbmcgdmFsdWVzIGR1ZSB0byB3cm9uZyBjZWxsIGRhdGEgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUNlbGwgPSBuZXcgQm9hcmRDZWxsKHkgKyAxLCB4ICsgMSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNib2FyZFt4XS5wdXNoKGVtcHR5Q2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImZ1bmN0aW9uIGhpdFN0YXR1cygpIHtcbiAgICBjb25zdCBOT1RfSElUID0gJ05PVF9ISVQnO1xuICAgIGNvbnN0IEhJVF9DRUxMID0gJ0hJVF9DRUxMJztcbiAgICBjb25zdCBISVRfU0hJUCA9ICdISVRfU0hJUCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBOT1RfSElULFxuICAgICAgICBISVRfQ0VMTCxcbiAgICAgICAgSElUX1NISVBcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGl0U3RhdHVzOyIsImNsYXNzIFBsYXllciB7XG4gICNwbGF5ZXJOYW1lID0gJyc7XG5cbiAgI2hpdExvZyA9IFtdO1xuXG4gICNwbGF5ZXJTaGlwcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHVzZXJOYW1lKSB7XG4gICAgdGhpcy4jcGxheWVyTmFtZSA9IHVzZXJOYW1lO1xuICB9XG5cbiAgbG9nSGl0KGNvb3JkKSB7XG4gICAgdGhpcy4jaGl0TG9nLnB1c2goY29vcmQpO1xuICB9XG5cbiAgYWRkU2hpcChzaGlwKSB7XG4gICAgdGhpcy4jcGxheWVyU2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIGdldEhpdExvZygpIHtcbiAgICByZXR1cm4gdGhpcy4jaGl0TG9nLnNsaWNlKCk7XG4gIH1cblxuICBnZXRTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyU2hpcHMuc2xpY2UoKTtcbiAgfVxuXG4gIHJlc2V0VXNlcigpIHtcbiAgICB0aGlzLiNoaXRMb2cgPSBbXTtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcyA9IFtdO1xuICB9XG5cbiAgZ2V0UGxheWVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyTmFtZTtcbiAgfTtcblxuICBnZXQgZmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyU2hpcHMubGVuZ3RoOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgU2hpcFBpZWNlIGZyb20gXCIuL1NoaXBQaWVjZVwiO1xuXG5jbGFzcyBTaGlwIHtcbiAgI3RpbWVzSGl0ID0gMDtcblxuICAjc2hpcFBpZWNlcyA9IFtdO1xuICBcbiAgI2Nvb3JkU3RhcnQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIHRoaXMuI2Nvb3JkU3RhcnQgPSBjb29yZFN0YXJ0XG4gICAgdGhpcy4jYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCk7XG4gIH1cblxuICB0cnlIaXQoaGl0Q29vcmQpIHtcbiAgICBjb25zdCBzaGlwUGllY2UgPSB0aGlzLiNzaGlwUGllY2VzLmZpbmQocGllY2VDb29yZCA9PlxuICAgICAgKHBpZWNlQ29vcmQuY29vcmRYID09PSBoaXRDb29yZC5jb29yZFgpICYmIChwaWVjZUNvb3JkLmNvb3JkWSA9PT0gaGl0Q29vcmQuY29vcmRZKVxuICAgICk7XG5cbiAgICBpZiAoc2hpcFBpZWNlID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlOyBcblxuICAgIHRoaXMuI3RpbWVzSGl0ICs9IDE7XG5cbiAgICByZXR1cm4gc2hpcFBpZWNlLmhpdCgpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmV2ZXJ5KHNoaXBQaWVjZSA9PlxuICAgICAgc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICAjYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBzaGlwUGllY2VDb29yZCA9IG51bGw7XG5cbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCArIGksIGNvb3JkU3RhcnQuY29vcmRZKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCwgY29vcmRTdGFydC5jb29yZFkgKyBpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jc2hpcFBpZWNlcy5wdXNoKHNoaXBQaWVjZUNvb3JkKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb29yZFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiNjb29yZFN0YXJ0O1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHsgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMubGVuZ3RoOyB9XG5cbiAgZ2V0IHRpbWVzSGl0KCkgeyByZXR1cm4gdGhpcy4jdGltZXNIaXQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9Db29yZGluYXRlXCI7XG5cbmNsYXNzIFNoaXBQaWVjZSB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNoaXRTdGF0dXMgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy4jaGl0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2hpdFN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRYIH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFk7IH1cblxuICAgIGdldCBoaXRTdGF0dXMoKSB7IHJldHVybiB0aGlzLiNoaXRTdGF0dXM7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcFBpZWNlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS11aS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMmVtO1xuXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ2J1dHRvbidcbiAgICAnYm9hcmQnO1xufVxuXG4uY29udHJvbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW1cbn1cblxuLmJvYXJkcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBnYXA6IDJlbTtcbn1cblxuLmJvYXJkIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICBncmlkLWFyZWE6IGJvYXJkO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmJvYXJkLWFjdGl2ZS1idWlsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5cbi5ib2FyZC1hY3RpdmUtYXR0YWNrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uYm9hcmQtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYm9hcmQtY2VsbDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5cbi5idXR0b24ge1xuICBncmlkLWFyZWE6IGJ1dHRvbjtcblxuICBwYWRkaW5nOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24tYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFROztFQUVSOztXQUVTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS11aS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnYnV0dG9uJ1xcbiAgICAnYm9hcmQnO1xcbn1cXG5cXG4uY29udHJvbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbVxcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICBncmlkLWFyZWE6IGJvYXJkO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5ib2FyZC1hY3RpdmUtYnVpbGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLmJvYXJkLWFjdGl2ZS1hdHRhY2sge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvYXJkLWNlbGw6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG5cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uLWFjdGl2ZSB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9HYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6WyJoaXRTdGF0dXMiLCJfQk9BUkRfV0lEVEgiLCJXZWFrTWFwIiwiX0JPQVJEX0hFSUdIVCIsIl9DRUxMX0NPVU5UIiwiX2JvYXJkUGxheWVyT25lIiwiX2JvYXJkUGxheWVyVHdvIiwiX3N0YXJ0R2FtZUJ1dHRvbiIsIl9zd2l0Y2hBeGlzQnV0dG9uIiwiX3Jlc3RhcnRHYW1lQnV0dG9uIiwiX2JvYXJkSW5pdCIsIl9pc0hvcml6b250YWwiLCJfdXBkYXRlQm9hcmQiLCJXZWFrU2V0IiwiX3VwZGF0ZUJvYXJkRm9jdXMiLCJfbWFwSGFuZGxlcnMiLCJfaW5pdEJvYXJkIiwiX2NyZWF0ZUNlbGwiLCJfdXBkYXRlQ2VsbE1ldGFEYXRhIiwiX3VwZGF0ZUNlbGxTdGF0dXMiLCJfaGlnaGxpZ2hCdWlsZFBhdHRlcm4iLCJfaGlnaGxpZ2h0Q2VsbHMiLCJfZ2V0U2hpcFNpemVQYXR0ZXJuIiwiX3RvZ2dsZUhvcml6b250YWwiLCJET01Db250cm9sbGVyIiwiY29udHJvbGxlckFQSSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX2luaXRCb2FyZDIiLCJjYWxsIiwiYm9hcmRBY3Rpb25IYW5kbGVyIiwidXBkYXRlQm9hcmRIaW50c0hhbmRsZXIiLCJfbWFwSGFuZGxlcnMyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidXBkYXRlVUkiLCJnYW1lU3RhdGVEYXRhIiwiY3VycmVudENlbGxDb29yZCIsIl91cGRhdGVCb2FyZDIiLCJfdXBkYXRlQm9hcmRGb2N1czIiLCJpc0dhbWVSdW5uaW5nIiwiX2hpZ2hsaWdoQnVpbGRQYXR0ZXJuMiIsImN1cnJlbnRQbGF5ZXJGbGVldFNpemUiLCJjdXJyZW50VXNlck5hbWUiLCJnZXRJc0hvcml6b250YWwiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJnYW1lYm9hcmRPbmVEYXRhIiwicGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdhbWVib2FyZFR3b0RhdGEiLCJwbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwiaSIsIm5vZGVCb2FyZE9uZSIsImNoaWxkTm9kZXMiLCJkYXRhQm9hcmRPbmUiLCJib2FyZERhdGEiLCJub2RlQm9hcmRUd28iLCJkYXRhQm9hcmRUd28iLCJfdXBkYXRlQ2VsbFN0YXR1czIiLCJpc1JvdW5kUnVubmluZyIsIl91cGRhdGVDZWxsTWV0YURhdGEyIiwicGxheWVyVXNlck5hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lSGFuZGxlciIsIl90b2dnbGVIb3Jpem9udGFsMiIsImJpbmQiLCJyZXN0YXJ0Um91bmRIYW5kbGVyIiwibmV3Qm9hcmRDZWxsT25lIiwiX2NyZWF0ZUNlbGwyIiwibmV3Qm9hcmRDZWxsVHdvIiwiYXBwZW5kQ2hpbGQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJuZXdDZWxsIiwiY3JlYXRlRWxlbWVudCIsImNlbGxOb2RlIiwiY2VsbERhdGEiLCJwbGF5ZXJOYW1lIiwiY29vcmQiLCJnZXRDb29yZCIsInNldEF0dHJpYnV0ZSIsImNvb3JkWCIsImNvb3JkWSIsIm5vZGUiLCJkYXRhIiwic3RhdHVzIiwiZ2V0SGl0U3RhdHVzIiwiTk9UX0hJVCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiSElUX1NISVAiLCJISVRfQ0VMTCIsImlzT2NjdXBpZWQiLCJjdXJyZW50UGxheWVyTmFtZSIsInNoaXBTaXplUGF0dGVybiIsIl9nZXRTaGlwU2l6ZVBhdHRlcm4yIiwiX2hpZ2hsaWdodENlbGxzMiIsImlzSG9yaXpvbnRhbCIsImN1cnJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsInRvZ2dsZSIsIlBsYXllciIsIlNoaXAiLCJHYW1lYm9hcmQiLCJDb29yZGluYXRlIiwiR2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJfY3VycmVudFBsYXllciIsIl9pc0dhbWVSdW5uaW5nIiwiX2lzUm91bmRSdW5uaW5nIiwiX2lzUGxheWVyT25lVHVybiIsIl9wbGF5ZXJPbmUiLCJfcGxheWVyVHdvIiwiX3BsYXllck9uZUdhbWVib2FyZCIsIl9wbGF5ZXJUd29HYW1lYm9hcmQiLCJfRE9NQ29udHJvbGxlciIsIl9ib2FyZEFjdGlvbkhhbmRsZXIiLCJfc3RhcnRHYW1lSGFuZGxlciIsIl9yZXN0YXJ0Um91bmRIYW5kbGVyIiwiX3VwZGF0ZUdhbWVVSSIsIl91cGRhdGVCb2FyZEhpbnRzSGFuZGxlciIsIl9nZXRHYW1lU3RhdGVEYXRhIiwiX3N0YXJ0Um91bmQiLCJfZW5kR2FtZSIsIl9zd2l0Y2hDdXJyZW50UGxheWVyIiwiX2dldFdpbm5lciIsIl9wbGF5ZXJBdHRhY2siLCJfYXR0YWNrQ2VsbCIsIl9wbGF5ZXJQbGFjZVNoaXAiLCJfcGxhY2VTaGlwIiwiX2dldEFQSUNvbnRhaW5lciIsIkdhbWVDb250cm9sbGVyIiwiX2dldEFQSUNvbnRhaW5lcjIiLCJfdXBkYXRlR2FtZVVJMiIsIl9ib2FyZEFjdGlvbkhhbmRsZXIyIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0NlbGxPd25lciIsImRhdGFzZXQiLCJwbGF5ZXJuYW1lIiwiZ2V0UGxheWVyTmFtZSIsImNvb3JkeCIsImNvb3JkeSIsImNlbGxDb29yZCIsIl9wbGF5ZXJQbGFjZVNoaXAyIiwiX3BsYXllckF0dGFjazIiLCJfc3RhcnRHYW1lSGFuZGxlcjIiLCJfcmVzdGFydFJvdW5kSGFuZGxlcjIiLCJfZ2V0R2FtZVN0YXRlRGF0YTIiLCJfdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIyIiwiZ2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJzZXRDdXJyZW50VXNlck5hbWUiLCJzZXRJc0dhbWVSdW5uaW5nIiwic2V0SXNSb3VuZFJ1bm5pbmciLCJzZXRJc1BsYXllck9uZVR1cm4iLCJzZXRQbGF5ZXJPbmVVc2VyTmFtZSIsInNldFBsYXllclR3b1VzZXJOYW1lIiwic2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdldEdhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwic2V0UGxheWVyT25lRmxlZXRTaXplIiwiZmxlZXRTaXplIiwic2V0UGxheWVyVHdvRmxlZXRTaXplIiwic2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSIsImJ1aWxkIiwiX3N0YXJ0Um91bmQyIiwiZ2V0U2hpcHMiLCJsZW5ndGgiLCJfZW5kR2FtZTIiLCJwbGF5ZXJXaW5uZXIiLCJfc3dpdGNoQ3VycmVudFBsYXllcjIiLCJfZ2V0V2lubmVyMiIsImFsbFNoaXBzU3VuayIsIl9hdHRhY2tDZWxsMiIsIndpbm5lciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Qm9hcmQiLCJyZWNlaXZlQXR0YWNrIiwiX3BsYWNlU2hpcDIiLCJuZXdTaGlwIiwiaXNQbGFjZWQiLCJwbGFjZVNoaXAiLCJhZGRTaGlwIiwiX2Nvb3JkIiwiX3NoaXAiLCJfaXNPY2N1cGllZCIsIl9oYXNCZWVuSGl0IiwiQm9hcmRDZWxsIiwib2NjdXB5Iiwic2hpcCIsImhpdCIsInRyeUhpdCIsImdldENvb3JkU3RyaW5nIiwiZ2V0IiwiX2Nvb3JkWCIsIl9jb29yZFkiLCJOdW1iZXIiLCJwYXJzZUludCIsIkdhbWVib2FyZERhdGFCdWlsZGVyIiwiX3dpZHRoIiwiX2hlaWdodCIsIl9ib2FyZCIsIl9zaGlwTGlzdCIsIl9jYW5QbGFjZSIsIl9jYW5QbGFjZTIiLCJnZXRDb29yZFN0YXJ0IiwicHVzaCIsImJvYXJkQ2VsbCIsImdhbWVib2FyZERhdGFCdWlsZGVyIiwiZ2FtZWJvYXJkRGF0YSIsInNldEJvYXJkRGF0YSIsInNldFBsYXllclVzZXJOYW1lIiwic2V0QWxsU2hpcHNTdW5rIiwiZXZlcnkiLCJpc1N1bmsiLCJjb29yZFN0YXJ0IiwieCIsInkiLCJlbXB0eUNlbGwiLCJ1c2VyTmFtZSIsIl9wbGF5ZXJOYW1lIiwiX2hpdExvZyIsIl9wbGF5ZXJTaGlwcyIsImxvZ0hpdCIsImdldEhpdExvZyIsInNsaWNlIiwicmVzZXRVc2VyIiwiU2hpcFBpZWNlIiwiX3RpbWVzSGl0IiwiX3NoaXBQaWVjZXMiLCJfY29vcmRTdGFydCIsIl9idWlsZFNoaXAiLCJob3Jpem9udGFsIiwiX2J1aWxkU2hpcDIiLCJoaXRDb29yZCIsInNoaXBQaWVjZSIsImZpbmQiLCJwaWVjZUNvb3JkIiwidW5kZWZpbmVkIiwic2hpcFBpZWNlQ29vcmQiLCJfaGl0U3RhdHVzIiwiY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=