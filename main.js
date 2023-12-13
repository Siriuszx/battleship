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
/* harmony import */ var _entities_DataPointContainers_GameStateDataBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/DataPointContainers/GameStateDataBuilder */ "./src/entities/DataPointContainers/GameStateDataBuilder.js");
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
  var gameStateDataBuilder = new _entities_DataPointContainers_GameStateDataBuilder__WEBPACK_IMPORTED_MODULE_5__["default"]();
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
var _playerOneFleetSize = /*#__PURE__*/new WeakMap();
var _playerTwoFleetSize = /*#__PURE__*/new WeakMap();
var _currentPlayerFleetSize = /*#__PURE__*/new WeakMap();
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
    _classPrivateFieldInitSpec(this, _playerOneFleetSize, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _playerTwoFleetSize, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _currentPlayerFleetSize, {
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
  }, {
    key: "playerOneFleetSize",
    get: function get() {
      return _classPrivateFieldGet(this, _playerOneFleetSize);
    },
    set: function set(playerOneFleetSize) {
      _classPrivateFieldSet(this, _playerOneFleetSize, playerOneFleetSize);
    }
  }, {
    key: "playerTwoFleetSize",
    get: function get() {
      return _classPrivateFieldGet(this, _playerTwoFleetSize);
    },
    set: function set(playerTwoFleetSize) {
      _classPrivateFieldSet(this, _playerTwoFleetSize, playerTwoFleetSize);
    }
  }, {
    key: "currentPlayerFleetSize",
    get: function get() {
      return _classPrivateFieldGet(this, _currentPlayerFleetSize);
    },
    set: function set(currentPlayerFleetSize) {
      _classPrivateFieldSet(this, _currentPlayerFleetSize, currentPlayerFleetSize);
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
      _classPrivateFieldGet(this, _gameStateData).currentUserName = currentUserName;
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
    key: "setPlayerOneFleetSize",
    value: function setPlayerOneFleetSize(playerOneFleetSize) {
      _classPrivateFieldGet(this, _gameStateData).playerOneFleetSize = playerOneFleetSize;
      return this;
    }
  }, {
    key: "setPlayerTwoFleetSize",
    value: function setPlayerTwoFleetSize(playerTwoFleetSize) {
      _classPrivateFieldGet(this, _gameStateData).playerTwoFleetSize = playerTwoFleetSize;
      return this;
    }
  }, {
    key: "setCurrentPlayerFleetSize",
    value: function setCurrentPlayerFleetSize(currentPlayerFleetSize) {
      _classPrivateFieldGet(this, _gameStateData).currentPlayerFleetSize = currentPlayerFleetSize;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXlEO0FBQzlCO0FBRTNCLElBQU1jLFVBQVUsR0FBRyxJQUFJaEosa0VBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Cb2FyZENlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Db29yZGluYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lU3RhdGVEYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lU3RhdGVEYXRhQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9IaXRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcFBpZWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4uL2VudGl0aWVzL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBET01Db250cm9sbGVyIHtcbiAgI0JPQVJEX1dJRFRIID0gMTA7XG5cbiAgI0JPQVJEX0hFSUdIVCA9IDEwO1xuXG4gICNDRUxMX0NPVU5UID0gMTAwO1xuXG4gICNib2FyZFBsYXllck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1vbmUnKTtcblxuICAjYm9hcmRQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtdHdvJyk7XG5cbiAgI3N0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XG5cbiAgI3N3aXRjaEF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9yaXpvbnRhbC1zdGF0dXMnKTtcblxuICAjcmVzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydC1nYW1lJyk7XG5cbiAgI2JvYXJkSW5pdCA9IGZhbHNlO1xuXG4gICNpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5ib2FyZEFjdGlvbkhhbmRsZXIsIGNvbnRyb2xsZXJBUEkudXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgIHRoaXMuI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpO1xuICB9XG5cbiAgdXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCkge1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkKGdhbWVTdGF0ZURhdGEpO1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkRm9jdXMoZ2FtZVN0YXRlRGF0YSk7XG5cbiAgICBpZiAoY3VycmVudENlbGxDb29yZCAmJiBnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuI2hpZ2hsaWdoQnVpbGRQYXR0ZXJuKGN1cnJlbnRDZWxsQ29vcmQsIGdhbWVTdGF0ZURhdGEuY3VycmVudFBsYXllckZsZWV0U2l6ZSwgZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVCb2FyZChnYW1lU3RhdGVEYXRhKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkT25lRGF0YSA9IGdhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICBjb25zdCBnYW1lYm9hcmRUd29EYXRhID0gZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNDRUxMX0NPVU5UOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5vZGVCb2FyZE9uZSA9IHRoaXMuI2JvYXJkUGxheWVyT25lLmNoaWxkTm9kZXNbaV07XG4gICAgICBjb25zdCBkYXRhQm9hcmRPbmUgPSBnYW1lYm9hcmRPbmVEYXRhLmJvYXJkRGF0YVtpXTtcblxuICAgICAgY29uc3Qgbm9kZUJvYXJkVHdvID0gdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZFR3byA9IGdhbWVib2FyZFR3b0RhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lLCBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsIGdhbWVib2FyZE9uZURhdGEucGxheWVyVXNlck5hbWUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvLCBnYW1lYm9hcmRUd29EYXRhLnBsYXllclVzZXJOYW1lKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlQm9hcmRGb2N1cyhnYW1lU3RhdGVEYXRhKSB7XG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgc3dpdGNoIChnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICBjYXNlICdQbGF5ZXIgT25lJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHN3aXRjaCAoZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGxheWVyIE9uZSc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIEJvYXJkIEluaXRpYWxpemF0aW9uXG5cbiAgI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnN0YXJ0R2FtZUhhbmRsZXIpO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmRIYW5kbGVyKTtcbiAgfVxuXG4gICNpbml0Qm9hcmQoYm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jQ0VMTF9DT1VOVDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxPbmUgPSB0aGlzLiNjcmVhdGVDZWxsKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsVHdvID0gdGhpcy4jY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcblxuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsT25lKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbFR3byk7XG4gICAgfVxuXG4gICAgdGhpcy4jYm9hcmRJbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIENlbGwgQ3JlYXRpb24vU3RhdHVzTXV0YXRpb25cblxuICAjY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcik7XG5cbiAgICByZXR1cm4gbmV3Q2VsbDtcbiAgfVxuXG4gICN1cGRhdGVDZWxsTWV0YURhdGEoY2VsbE5vZGUsIGNlbGxEYXRhLCBwbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgY29vcmQgPSBjZWxsRGF0YS5nZXRDb29yZCgpO1xuXG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeCcsIGNvb3JkLmNvb3JkWCk7XG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeScsIGNvb3JkLmNvb3JkWSk7XG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXBsYXllcm5hbWUnLCBwbGF5ZXJOYW1lKTtcbiAgfVxuXG4gICN1cGRhdGVDZWxsU3RhdHVzKGNlbGxOb2RlLCBjZWxsRGF0YSwgaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICBpZiAoIWNlbGxOb2RlIHx8ICFjZWxsRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm9kZSA9IGNlbGxOb2RlO1xuICAgIGNvbnN0IGRhdGEgPSBjZWxsRGF0YTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2V0SGl0U3RhdHVzKCk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5OT1RfSElUOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRkZGRkYnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX1NISVA6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGMDAwMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfQ0VMTDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2VsbERhdGEuaXNPY2N1cGllZCAmJiBpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gQ2VsbCBCdWlsZGluZyBQYXRoIEhpbnRpbmdcblxuICAjaGlnaGxpZ2hCdWlsZFBhdHRlcm4oY29vcmQsIGN1cnJlbnRQbGF5ZXJGbGVldFNpemUsIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3Qgc2hpcFNpemVQYXR0ZXJuID0gdGhpcy4jZ2V0U2hpcFNpemVQYXR0ZXJuKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpO1xuXG4gICAgdGhpcy4jaGlnaGxpZ2h0Q2VsbHMoY29vcmQsIHNoaXBTaXplUGF0dGVybiwgY3VycmVudFBsYXllck5hbWUpO1xuICB9XG5cbiAgI2hpZ2hsaWdodENlbGxzKGNvb3JkLCBzaGlwU2l6ZVBhdHRlcm4sIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jaXNIb3Jpem9udGFsO1xuXG4gICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZVBhdHRlcm47IGkgKz0gMSkge1xuICAgICAgICAgIGlmICgoY29vcmQuY29vcmRYICsgc2hpcFNpemVQYXR0ZXJuKSAtIDEgPiB0aGlzLiNCT0FSRF9XSURUSCkgYnJlYWs7XG4gICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1jb29yZHg9XCIke2Nvb3JkLmNvb3JkWCArIGl9XCJdW2RhdGEtY29vcmR5PVwiJHtjb29yZC5jb29yZFl9XCJdW2RhdGEtcGxheWVybmFtZT1cIiR7Y3VycmVudFBsYXllck5hbWV9XCJdYCk7XG4gICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZVBhdHRlcm47IGkgKz0gMSkge1xuICAgICAgICAgIGlmICgoY29vcmQuY29vcmRZICsgc2hpcFNpemVQYXR0ZXJuKSAtIDEgPiB0aGlzLiNCT0FSRF9IRUlHSFQpIGJyZWFrO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtY29vcmR4PVwiJHtjb29yZC5jb29yZFh9XCJdW2RhdGEtY29vcmR5PVwiJHtjb29yZC5jb29yZFkgKyBpfVwiXVtkYXRhLXBsYXllcm5hbWU9XCIke2N1cnJlbnRQbGF5ZXJOYW1lfVwiXWApO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gICNnZXRTaGlwU2l6ZVBhdHRlcm4oY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgIHN3aXRjaCAoY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDI6XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAjdG9nZ2xlSG9yaXpvbnRhbCgpIHtcbiAgICB0aGlzLiNpc0hvcml6b250YWwgPSAhdGhpcy4jaXNIb3Jpem9udGFsO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLWFjdGl2ZScpO1xuICB9XG5cbiAgZ2V0SXNIb3Jpem9udGFsKCkgeyByZXR1cm4gdGhpcy4jaXNIb3Jpem9udGFsIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9lbnRpdGllcy9QbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9lbnRpdGllcy9TaGlwXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9lbnRpdGllcy9HYW1lYm9hcmRcIjtcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuLi9lbnRpdGllcy9Db29yZGluYXRlXCI7XG5pbXBvcnQgR2FtZVN0YXRlRGF0YUJ1aWxkZXIgZnJvbSBcIi4uL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAjY3VycmVudFBsYXllciA9IG51bGw7XG5cbiAgI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAjcGxheWVyT25lID0gbnVsbDtcblxuICAjcGxheWVyVHdvID0gbnVsbDtcblxuICAjcGxheWVyT25lR2FtZWJvYXJkID0gbnVsbDtcblxuICAjcGxheWVyVHdvR2FtZWJvYXJkID0gbnVsbDtcblxuICAjRE9NQ29udHJvbGxlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jRE9NQ29udHJvbGxlciA9IG5ldyBET01Db250cm9sbGVyKHRoaXMuI2dldEFQSUNvbnRhaW5lcigpKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgLy8gQ2FsbGJhY2sgdG8gbGV0IG90aGVyIGxheWVycyBvZiBwcm9ncmFtIGludGVyYWN0IHdpdGggb3VyIGdhbWUgY29udHJvbGxlclxuICAjYm9hcmRBY3Rpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGNvbnN0IGlzQ2VsbE93bmVyID0gY2VsbE5vZGUuZGF0YXNldC5wbGF5ZXJuYW1lID09PSB0aGlzLiNjdXJyZW50UGxheWVyLmdldFBsYXllck5hbWUoKTtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLiNET01Db250cm9sbGVyLmdldElzSG9yaXpvbnRhbCgpO1xuXG4gICAgY29uc3QgY29vcmRYID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHg7XG4gICAgY29uc3QgY29vcmRZID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHk7XG4gICAgY29uc3QgY2VsbENvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuXG4gICAgc3dpdGNoICh0aGlzLiNpc1JvdW5kUnVubmluZykge1xuICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIHBsYWNlIHNoaXBzIG9uIEhJUyBPV04gYm9hcmQgb25seVxuICAgICAgICBpZiAoaXNDZWxsT3duZXIgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYXllclBsYWNlU2hpcChjZWxsQ29vcmQsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgIC8vIHRvIGxldCBwbGF5ZXIgYXR0YWNrIHNoaXBzIG9uIEhJUyBPUFBPTkVOVCdTIGJvYXJkIG9ubHlcbiAgICAgICAgaWYgKGlzQ2VsbE93bmVyID09PSB0cnVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYXllckF0dGFjayhjZWxsQ29vcmQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjZWxsQ29vcmQpO1xuICB9XG5cbiAgI3N0YXJ0R2FtZUhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IHRydWUpIHJldHVybjtcblxuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAjcmVzdGFydFJvdW5kSGFuZGxlcigpIHtcbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAjdXBkYXRlR2FtZVVJKGN1cnJlbnRDZWxsQ29vcmQpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gdGhpcy4jZ2V0R2FtZVN0YXRlRGF0YSgpO1xuXG4gICAgdGhpcy4jRE9NQ29udHJvbGxlci51cGRhdGVVSShnYW1lU3RhdGVEYXRhLCBjdXJyZW50Q2VsbENvb3JkKTtcbiAgfVxuXG4gICN1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKGNlbGxOb2RlLmRhdGFzZXQucGxheWVybmFtZSAhPT0gdGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuXG4gICAgY29uc3QgY3VycmVudENlbGxDb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKTtcbiAgfVxuXG4gICNnZXRHYW1lU3RhdGVEYXRhKCkge1xuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGFCdWlsZGVyID0gbmV3IEdhbWVTdGF0ZURhdGFCdWlsZGVyKCk7XG5cbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gZ2FtZVN0YXRlRGF0YUJ1aWxkZXJcbiAgICAgIC5zZXRDdXJyZW50VXNlck5hbWUodGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0SXNHYW1lUnVubmluZyh0aGlzLiNpc0dhbWVSdW5uaW5nKVxuICAgICAgLnNldElzUm91bmRSdW5uaW5nKHRoaXMuI2lzUm91bmRSdW5uaW5nKVxuICAgICAgLnNldElzUGxheWVyT25lVHVybih0aGlzLiNpc1BsYXllck9uZVR1cm4pXG4gICAgICAuc2V0UGxheWVyT25lVXNlck5hbWUodGhpcy4jcGxheWVyT25lLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJUd29Vc2VyTmFtZSh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldFBsYXllck9uZUdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuc2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0R2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyTmFtZSgpKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVGbGVldFNpemUodGhpcy4jcGxheWVyT25lLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRQbGF5ZXJUd29GbGVldFNpemUodGhpcy4jcGxheWVyVHdvLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRDdXJyZW50UGxheWVyRmxlZXRTaXplKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZmxlZXRTaXplKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICByZXR1cm4gZ2FtZVN0YXRlRGF0YTtcbiAgfVxuXG4gIC8vIFRvIGNoZWNrIGlmIHJvdW5kIHNob3VsZCBzdGFydCBvbmNlIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4gICNzdGFydFJvdW5kKCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUgJiYgdGhpcy4jcGxheWVyVHdvLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IHRydWU7XG4gICAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gICNlbmRHYW1lKHBsYXllcldpbm5lcikge1xuICAgIGlmIChwbGF5ZXJXaW5uZXIgPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllclR3bztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB9XG5cbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSAhdGhpcy4jaXNQbGF5ZXJPbmVUdXJuO1xuICB9XG5cbiAgI2dldFdpbm5lcigpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyVHdvO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAjcGxheWVyQXR0YWNrKGNvb3JkKSB7XG4gICAgdGhpcy4jYXR0YWNrQ2VsbChjb29yZCk7XG4gICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuXG4gICAgY29uc3Qgd2lubmVyID0gdGhpcy4jZ2V0V2lubmVyKCk7XG5cbiAgICBpZiAod2lubmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiNlbmRHYW1lKHdpbm5lcik7XG4gICAgICBjb25zb2xlLmxvZyhgcGxheWVyICR7d2lubmVyfSB3b25gKTtcbiAgICB9XG4gIH1cblxuICAjYXR0YWNrQ2VsbChjb29yZCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgY3VycmVudEJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAjcGxheWVyUGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICB0aGlzLiNwbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCk7XG5cbiAgICB0aGlzLiNzdGFydFJvdW5kKCk7XG4gIH1cblxuICAjcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuICAgIGxldCBuZXdTaGlwID0gbnVsbDtcbiAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIC8vIFRvIGJ1aWxkIHNoaXBzIGluIHByZS1kZXRlcm1pbmVkIHBhdHRlcm4gKDUsNCwzLDMsMilcbiAgICBzd2l0Y2ggKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNSk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMToge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNCk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgNDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMik7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQbGF5ZXJzIHNob3VsZCB0YWtlIHR1cm5zIGFmdGVyIGJ1aWxkaW5nIHRoZWlyIGVudGlyZSBmbGVldFxuICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllci5hZGRTaGlwKG5ld1NoaXApO1xuXG4gICAgICBpZiAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gICNnZXRBUElDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0R2FtZUhhbmRsZXI6IHRoaXMuI3N0YXJ0R2FtZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGJvYXJkQWN0aW9uSGFuZGxlcjogdGhpcy4jYm9hcmRBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICByZXN0YXJ0Um91bmRIYW5kbGVyOiB0aGlzLiNyZXN0YXJ0Um91bmRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcjogdGhpcy4jdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi9IaXRTdGF0dXNcIjtcblxuY2xhc3MgQm9hcmRDZWxsIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI3NoaXAgPSBudWxsO1xuXG4gICAgI2lzT2NjdXBpZWQgPSBmYWxzZTtcblxuICAgICNoYXNCZWVuSGl0ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBvY2N1cHkoc2hpcCkge1xuICAgICAgICBpZiAodGhpcy4jc2hpcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2lzT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiNzaGlwID0gc2hpcDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNoYXNCZWVuSGl0ID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaGFzQmVlbkhpdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgIHRoaXMuI3NoaXAudHJ5SGl0KHRoaXMuI2Nvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldENvb3JkKCkgeyByZXR1cm4gdGhpcy4jY29vcmQ7IH1cblxuICAgIGdldENvb3JkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFg6ICR7dGhpcy4jY29vcmQuY29vcmRYfSBZOiAke3RoaXMuI2Nvb3JkLmNvb3JkWX1gO1xuICAgIH1cblxuICAgIGdldEhpdFN0YXR1cygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLiNoYXNCZWVuSGl0KSB7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLk5PVF9ISVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX1NISVA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9DRUxMO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc09jY3VwaWVkKCkgeyByZXR1cm4gdGhpcy4jaXNPY2N1cGllZDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZENlbGw7IiwiY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgI2Nvb3JkWCA9IDA7XG5cbiAgICAjY29vcmRZID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkWCA9IGNvb3JkWDtcbiAgICAgICAgdGhpcy4jY29vcmRZID0gY29vcmRZO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRYLCAxMCk7IH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRZLCAxMCk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRpbmF0ZTsiLCJjbGFzcyBHYW1lU3RhdGVEYXRhIHtcbiAgICAjY3VycmVudFBsYXllclVzZXJOYW1lO1xuXG4gICAgI2lzR2FtZVJ1bm5pbmc7XG5cbiAgICAjaXNSb3VuZFJ1bm5pbmc7XG5cbiAgICAjaXNQbGF5ZXJPbmVUdXJuO1xuXG4gICAgI3BsYXllck9uZVVzZXJOYW1lO1xuXG4gICAgI3BsYXllclR3b1VzZXJOYW1lO1xuXG4gICAgI3BsYXllck9uZUdhbWVib2FyZERhdGE7XG5cbiAgICAjcGxheWVyVHdvR2FtZWJvYXJkRGF0YTtcblxuICAgICNwbGF5ZXJPbmVGbGVldFNpemU7XG5cbiAgICAjcGxheWVyVHdvRmxlZXRTaXplO1xuXG4gICAgI2N1cnJlbnRQbGF5ZXJGbGVldFNpemU7XG5cbiAgICBnZXQgY3VycmVudFVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jY3VycmVudFBsYXllclVzZXJOYW1lOyB9XG5cbiAgICBzZXQgY3VycmVudFVzZXJOYW1lKGN1cnJlbnRVc2VyTmFtZSkgeyB0aGlzLiNjdXJyZW50UGxheWVyVXNlck5hbWUgPSBjdXJyZW50VXNlck5hbWU7IH1cblxuICAgIGdldCBpc0dhbWVSdW5uaW5nKCkgeyByZXR1cm4gdGhpcy4jaXNHYW1lUnVubmluZzsgfVxuXG4gICAgc2V0IGlzR2FtZVJ1bm5pbmcoaXNHYW1lUnVubmluZykgeyB0aGlzLiNpc0dhbWVSdW5uaW5nID0gaXNHYW1lUnVubmluZzsgfVxuXG4gICAgZ2V0IGlzUm91bmRSdW5uaW5nKCkgeyByZXR1cm4gdGhpcy4jaXNSb3VuZFJ1bm5pbmc7IH1cblxuICAgIHNldCBpc1JvdW5kUnVubmluZyhpc1JvdW5kUnVubmluZykgeyB0aGlzLiNpc1JvdW5kUnVubmluZyA9IGlzUm91bmRSdW5uaW5nOyB9XG5cbiAgICBnZXQgaXNQbGF5ZXJPbmVUdXJuKCkgeyByZXR1cm4gdGhpcy4jaXNQbGF5ZXJPbmVUdXJuOyB9XG5cbiAgICBzZXQgaXNQbGF5ZXJPbmVUdXJuKGlzUGxheWVyT25lVHVybikgeyB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSBpc1BsYXllck9uZVR1cm47IH1cblxuICAgIGdldCBwbGF5ZXJPbmVVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllck9uZVVzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyT25lVXNlck5hbWUocGxheWVyT25lVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyT25lVXNlck5hbWUgPSBwbGF5ZXJPbmVVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IHBsYXllclR3b1VzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVHdvVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJUd29Vc2VyTmFtZShwbGF5ZXJUd29Vc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJUd29Vc2VyTmFtZSA9IHBsYXllclR3b1VzZXJOYW1lOyB9XG5cbiAgICBnZXQgcGxheWVyT25lR2FtZWJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZERhdGE7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHBsYXllck9uZUdhbWVib2FyZERhdGEpIHsgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkRGF0YSA9IHBsYXllck9uZUdhbWVib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJUd29HYW1lYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgc2V0IHBsYXllclR3b0dhbWVib2FyZERhdGEocGxheWVyVHdvR2FtZWJvYXJkRGF0YSkgeyB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmREYXRhID0gcGxheWVyVHdvR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllck9uZUZsZWV0U2l6ZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllck9uZUZsZWV0U2l6ZTsgfVxuXG4gICAgc2V0IHBsYXllck9uZUZsZWV0U2l6ZShwbGF5ZXJPbmVGbGVldFNpemUpIHsgdGhpcy4jcGxheWVyT25lRmxlZXRTaXplID0gcGxheWVyT25lRmxlZXRTaXplOyB9XG4gICAgXG4gICAgZ2V0IHBsYXllclR3b0ZsZWV0U2l6ZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b0ZsZWV0U2l6ZTsgfVxuXG4gICAgc2V0IHBsYXllclR3b0ZsZWV0U2l6ZShwbGF5ZXJUd29GbGVldFNpemUpIHsgdGhpcy4jcGxheWVyVHdvRmxlZXRTaXplID0gcGxheWVyVHdvRmxlZXRTaXplOyB9XG5cbiAgICBnZXQgY3VycmVudFBsYXllckZsZWV0U2l6ZSgpIHsgcmV0dXJuIHRoaXMuI2N1cnJlbnRQbGF5ZXJGbGVldFNpemU7IH1cblxuICAgIHNldCBjdXJyZW50UGxheWVyRmxlZXRTaXplKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHsgdGhpcy4jY3VycmVudFBsYXllckZsZWV0U2l6ZSA9IGN1cnJlbnRQbGF5ZXJGbGVldFNpemU7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlRGF0YTsiLCJpbXBvcnQgR2FtZVN0YXRlRGF0YSBmcm9tIFwiLi9HYW1lU3RhdGVEYXRhXCI7XG5cbmNsYXNzIEdhbWVTdGF0ZURhdGFCdWlsZGVyIHtcbiAgICAjZ2FtZVN0YXRlRGF0YSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YSA9IG5ldyBHYW1lU3RhdGVEYXRhKCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFVzZXJOYW1lKGN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSA9IGN1cnJlbnRVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNHYW1lUnVubmluZyhpc0dhbWVSdW5uaW5nKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZyA9IGlzR2FtZVJ1bm5pbmc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzUm91bmRSdW5uaW5nKGlzUm91bmRSdW5uaW5nKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPSBpc1JvdW5kUnVubmluZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNQbGF5ZXJPbmVUdXJuKGlzUGxheWVyT25lVHVybikge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzUGxheWVyT25lVHVybiA9IGlzUGxheWVyT25lVHVybjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyT25lVXNlck5hbWUocGxheWVyT25lVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVVc2VyTmFtZSA9IHBsYXllck9uZVVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJUd29Vc2VyTmFtZShwbGF5ZXJUd29Vc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllclR3b1VzZXJOYW1lID0gcGxheWVyVHdvVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZUdhbWVib2FyZERhdGEocGxheWVyT25lR2FtZWJvYXJkRGF0YSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllck9uZUdhbWVib2FyZERhdGEgPSBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJUd29HYW1lYm9hcmREYXRhKHBsYXllclR3b0dhbWVib2FyZERhdGEpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29HYW1lYm9hcmREYXRhID0gcGxheWVyVHdvR2FtZWJvYXJkRGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyT25lRmxlZXRTaXplKHBsYXllck9uZUZsZWV0U2l6ZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllck9uZUZsZWV0U2l6ZSA9IHBsYXllck9uZUZsZWV0U2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvRmxlZXRTaXplKHBsYXllclR3b0ZsZWV0U2l6ZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllclR3b0ZsZWV0U2l6ZSA9IHBsYXllclR3b0ZsZWV0U2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZShjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuY3VycmVudFBsYXllckZsZWV0U2l6ZSA9IGN1cnJlbnRQbGF5ZXJGbGVldFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhID0gbmV3IEdhbWVTdGF0ZURhdGEoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dhbWVTdGF0ZURhdGE7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIGdhbWVTdGF0ZURhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGVEYXRhQnVpbGRlcjsiLCJjbGFzcyBHYW1lYm9hcmREYXRhIHtcbiAgICAjYm9hcmREYXRhID0gbnVsbDtcblxuICAgICNwbGF5ZXJVc2VyTmFtZSA9ICcnO1xuXG4gICAgI2FsbFNoaXBzU3VuayA9IG51bGw7XG5cbiAgICBzZXRCb2FyZERhdGEoYm9hcmQpIHtcbiAgICAgICAgY29uc3QgYm9hcmRDb3B5ID0gYm9hcmQuc2xpY2UoKTtcbiAgICAgICAgY29uc3QgYm9hcmREYXRhID0gW107XG5cbiAgICAgICAgYm9hcmRDb3B5LmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGJvYXJkRGF0YS5wdXNoKC4uLnJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2JvYXJkRGF0YSA9IGJvYXJkRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKSB7IHRoaXMuI3BsYXllclVzZXJOYW1lID0gcGxheWVyVXNlck5hbWU7IH1cblxuICAgIGdldCBhbGxTaGlwc1N1bmsoKSB7IHJldHVybiB0aGlzLiNhbGxTaGlwc1N1bms7IH1cblxuICAgIHNldCBhbGxTaGlwc1N1bmsoYWxsU2hpcHNTdW5rKSB7IHRoaXMuI2FsbFNoaXBzU3VuayA9IGFsbFNoaXBzU3VuazsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmREYXRhOyIsImltcG9ydCBHYW1lYm9hcmREYXRhIGZyb20gXCIuL0dhbWVib2FyZERhdGFcIjtcblxuY2xhc3MgR2FtZUJvYXJkRGF0YUJ1aWxkZXIge1xuICAgICNnYW1lYm9hcmREYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhID0gbmV3IEdhbWVib2FyZERhdGEoKTtcbiAgICB9XG5cbiAgICBzZXRCb2FyZERhdGEoZ2FtZWJvYXJkKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEuc2V0Qm9hcmREYXRhKGdhbWVib2FyZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEucGxheWVyVXNlck5hbWUgPSBwbGF5ZXJVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QWxsU2hpcHNTdW5rKGFsbFNoaXBzU3Vuaykge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLmFsbFNoaXBzU3VuayA9IGFsbFNoaXBzU3VuaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgI3Jlc2V0KCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhID0gbmV3IEdhbWVib2FyZERhdGEoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YSA9IHRoaXMuI2dhbWVib2FyZERhdGE7XG4gICAgICAgIHRoaXMuI3Jlc2V0KCk7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmREYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkRGF0YUJ1aWxkZXI7IiwiaW1wb3J0IEJvYXJkQ2VsbCBmcm9tIFwiLi9Cb2FyZENlbGxcIjtcbmltcG9ydCBHYW1lYm9hcmREYXRhQnVpbGRlciBmcm9tIFwiLi9EYXRhUG9pbnRDb250YWluZXJzL0dhbWVib2FyZERhdGFCdWlsZGVyXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgI3dpZHRoID0gMTA7XG5cbiAgICAjaGVpZ2h0ID0gMTA7XG5cbiAgICAjYm9hcmQgPSBbXTtcblxuICAgIC8vIHN3YXBwaW5nIHN1cHBvc2VkbHkgWCBhbmQgWSBjb29yZGluYXRlcyBoZXJlIGJlY2F1c2Ugb2YgZmFpbGVkIGF0dGVtcHQgdG8gaW1wbGVtZW50IDJEIGFycmF5cyBpbiBKYXZhU2NyaXB0Li4uXG4gICAgI3NoaXBMaXN0ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jaW5pdEJvYXJkKCk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHNoaXAsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy4jY2FuUGxhY2Uoc2hpcC5nZXRDb29yZFN0YXJ0KCksIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI3NoaXBMaXN0LnB1c2goc2hpcCk7XG5cbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWSAtIDFdWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFggLSAxKSArIGldO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbKHNoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWSAtIDEpICsgaV1bc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMV07XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2JvYXJkW2Nvb3JkLmNvb3JkWSAtIDFdW2Nvb3JkLmNvb3JkWCAtIDFdLmhpdCgpO1xuICAgIH1cblxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoaXBMaXN0LmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuXG4gICAgZ2V0R2FtZWJvYXJkRGF0YShwbGF5ZXJVc2VyTmFtZSkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhQnVpbGRlciA9IG5ldyBHYW1lYm9hcmREYXRhQnVpbGRlcigpO1xuXG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGEgPSBnYW1lYm9hcmREYXRhQnVpbGRlci5zZXRCb2FyZERhdGEodGhpcy4jYm9hcmQpXG4gICAgICAgIC5zZXRQbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSlcbiAgICAgICAgLnNldEFsbFNoaXBzU3Vuayh0aGlzLmFsbFNoaXBzU3VuaygpKVxuICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBnYW1lYm9hcmREYXRhO1xuICAgIH1cblxuICAgICNjYW5QbGFjZShjb29yZFN0YXJ0LCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBzd2l0Y2ggKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICAgICAgLy8gdG8gZXhjbHVkZSBzdGFydGluZyBwb2ludCBmcm9tIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKChjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgbGVuZ3RoID4gdGhpcy4jd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbY29vcmRTdGFydC5jb29yZFkgLSAxXVsoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgLy8gdG8gZXhjbHVkZSBzdGFydGluZyBwb2ludCBmcm9tIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKChjb29yZFN0YXJ0LmNvb3JkWSAtIDEpICsgbGVuZ3RoID4gdGhpcy4jaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhjb29yZFN0YXJ0LmNvb3JkWSAtIDEpICsgaV1bY29vcmRTdGFydC5jb29yZFggLSAxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5pdEJvYXJkKCkge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmQubGVuZ3RoICE9PSAwKSByZXR1cm47XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLiN3aWR0aDsgeCArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLiNib2FyZC5wdXNoKFtdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLiNoZWlnaHQ7IHkgKz0gMSkge1xuICAgICAgICAgICAgICAgIC8vIHN3YXBwaW5nIHZhbHVlcyBkdWUgdG8gd3JvbmcgY2VsbCBkYXRhIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgZW1wdHlDZWxsID0gbmV3IEJvYXJkQ2VsbCh5ICsgMSwgeCArIDEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jYm9hcmRbeF0ucHVzaChlbXB0eUNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJmdW5jdGlvbiBoaXRTdGF0dXMoKSB7XG4gICAgY29uc3QgTk9UX0hJVCA9ICdOT1RfSElUJztcbiAgICBjb25zdCBISVRfQ0VMTCA9ICdISVRfQ0VMTCc7XG4gICAgY29uc3QgSElUX1NISVAgPSAnSElUX1NISVAnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgTk9UX0hJVCxcbiAgICAgICAgSElUX0NFTEwsXG4gICAgICAgIEhJVF9TSElQXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhpdFN0YXR1czsiLCJjbGFzcyBQbGF5ZXIge1xuICAjcGxheWVyTmFtZSA9ICcnO1xuXG4gICNoaXRMb2cgPSBbXTtcblxuICAjcGxheWVyU2hpcHMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih1c2VyTmFtZSkge1xuICAgIHRoaXMuI3BsYXllck5hbWUgPSB1c2VyTmFtZTtcbiAgfVxuXG4gIGxvZ0hpdChjb29yZCkge1xuICAgIHRoaXMuI2hpdExvZy5wdXNoKGNvb3JkKTtcbiAgfVxuXG4gIGFkZFNoaXAoc2hpcCkge1xuICAgIHRoaXMuI3BsYXllclNoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICBnZXRIaXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdExvZy5zbGljZSgpO1xuICB9XG5cbiAgZ2V0U2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllclNoaXBzLnNsaWNlKCk7XG4gIH1cblxuICByZXNldFVzZXIoKSB7XG4gICAgdGhpcy4jaGl0TG9nID0gW107XG4gICAgdGhpcy4jcGxheWVyU2hpcHMgPSBbXTtcbiAgfVxuXG4gIHNldFBsYXllck5hbWUodXNlck5hbWUpIHtcbiAgICB0aGlzLiNwbGF5ZXJOYW1lID0gdXNlck5hbWU7XG4gIH1cblxuICBnZXRQbGF5ZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJOYW1lO1xuICB9O1xuXG4gIGdldCBmbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5sZW5ndGg7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImltcG9ydCBTaGlwUGllY2UgZnJvbSBcIi4vU2hpcFBpZWNlXCI7XG5cbmNsYXNzIFNoaXAge1xuICAjdGltZXNIaXQgPSAwO1xuXG4gICNzaGlwUGllY2VzID0gW107XG4gIFxuICAjY29vcmRTdGFydCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgdGhpcy4jY29vcmRTdGFydCA9IGNvb3JkU3RhcnRcbiAgICB0aGlzLiNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKTtcbiAgfVxuXG4gIHRyeUhpdChoaXRDb29yZCkge1xuICAgIGNvbnN0IHNoaXBQaWVjZSA9IHRoaXMuI3NoaXBQaWVjZXMuZmluZChwaWVjZUNvb3JkID0+XG4gICAgICAocGllY2VDb29yZC5jb29yZFggPT09IGhpdENvb3JkLmNvb3JkWCkgJiYgKHBpZWNlQ29vcmQuY29vcmRZID09PSBoaXRDb29yZC5jb29yZFkpXG4gICAgKTtcblxuICAgIGlmIChzaGlwUGllY2UgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlKSByZXR1cm4gZmFsc2U7IFxuXG4gICAgdGhpcy4jdGltZXNIaXQgKz0gMTtcblxuICAgIHJldHVybiBzaGlwUGllY2UuaGl0KCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMuZXZlcnkoc2hpcFBpZWNlID0+XG4gICAgICBzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlXG4gICAgKTtcbiAgfVxuXG4gICNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHNoaXBQaWVjZUNvb3JkID0gbnVsbDtcblxuICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYICsgaSwgY29vcmRTdGFydC5jb29yZFkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYLCBjb29yZFN0YXJ0LmNvb3JkWSArIGkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiNzaGlwUGllY2VzLnB1c2goc2hpcFBpZWNlQ29vcmQpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvb3JkU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Nvb3JkU3RhcnQ7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5sZW5ndGg7IH1cblxuICBnZXQgdGltZXNIaXQoKSB7IHJldHVybiB0aGlzLiN0aW1lc0hpdDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcblxuY2xhc3MgU2hpcFBpZWNlIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI2hpdFN0YXR1cyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLiNoaXRTdGF0dXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy4jaGl0U3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFggfVxuXG4gICAgZ2V0IGNvb3JkWSgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWTsgfVxuXG4gICAgZ2V0IGhpdFN0YXR1cygpIHsgcmV0dXJuIHRoaXMuI2hpdFN0YXR1czsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwUGllY2U7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLXVpLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG5cbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnYnV0dG9uJ1xuICAgICdib2FyZCc7XG59XG5cbi5jb250cm9scy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBnYXA6IDJlbVxufVxuXG4uYm9hcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtO1xufVxuXG4uYm9hcmQge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gIGdyaWQtYXJlYTogYm9hcmQ7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uYm9hcmQtYWN0aXZlLWJ1aWxkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcbn1cblxuLmJvYXJkLWFjdGl2ZS1hdHRhY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5ib2FyZC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib2FyZC1jZWxsOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcbn1cblxuLmJ1dHRvbiB7XG4gIGdyaWQtYXJlYTogYnV0dG9uO1xuXG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbi1hY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7O0VBRVI7O1dBRVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCOztFQUV2QixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLXVpLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdidXR0b24nXFxuICAgICdib2FyZCc7XFxufVxcblxcbi5jb250cm9scy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMmVtXFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gIGdyaWQtYXJlYTogYm9hcmQ7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLWFjdGl2ZS1idWlsZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYm9hcmQtYWN0aXZlLWF0dGFjayB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQtY2VsbDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcblxcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b24tYWN0aXZlIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyJztcbmltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbImhpdFN0YXR1cyIsIl9CT0FSRF9XSURUSCIsIldlYWtNYXAiLCJfQk9BUkRfSEVJR0hUIiwiX0NFTExfQ09VTlQiLCJfYm9hcmRQbGF5ZXJPbmUiLCJfYm9hcmRQbGF5ZXJUd28iLCJfc3RhcnRHYW1lQnV0dG9uIiwiX3N3aXRjaEF4aXNCdXR0b24iLCJfcmVzdGFydEdhbWVCdXR0b24iLCJfYm9hcmRJbml0IiwiX2lzSG9yaXpvbnRhbCIsIl91cGRhdGVCb2FyZCIsIldlYWtTZXQiLCJfdXBkYXRlQm9hcmRGb2N1cyIsIl9tYXBIYW5kbGVycyIsIl9pbml0Qm9hcmQiLCJfY3JlYXRlQ2VsbCIsIl91cGRhdGVDZWxsTWV0YURhdGEiLCJfdXBkYXRlQ2VsbFN0YXR1cyIsIl9oaWdobGlnaEJ1aWxkUGF0dGVybiIsIl9oaWdobGlnaHRDZWxscyIsIl9nZXRTaGlwU2l6ZVBhdHRlcm4iLCJfdG9nZ2xlSG9yaXpvbnRhbCIsIkRPTUNvbnRyb2xsZXIiLCJjb250cm9sbGVyQVBJIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjIiwiX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMiLCJ3cml0YWJsZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZXQiLCJfaW5pdEJvYXJkMiIsImNhbGwiLCJib2FyZEFjdGlvbkhhbmRsZXIiLCJ1cGRhdGVCb2FyZEhpbnRzSGFuZGxlciIsIl9tYXBIYW5kbGVyczIiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ1cGRhdGVVSSIsImdhbWVTdGF0ZURhdGEiLCJjdXJyZW50Q2VsbENvb3JkIiwiX3VwZGF0ZUJvYXJkMiIsIl91cGRhdGVCb2FyZEZvY3VzMiIsImlzR2FtZVJ1bm5pbmciLCJfaGlnaGxpZ2hCdWlsZFBhdHRlcm4yIiwiY3VycmVudFBsYXllckZsZWV0U2l6ZSIsImN1cnJlbnRVc2VyTmFtZSIsImdldElzSG9yaXpvbnRhbCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImdhbWVib2FyZE9uZURhdGEiLCJwbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiZ2FtZWJvYXJkVHdvRGF0YSIsInBsYXllclR3b0dhbWVib2FyZERhdGEiLCJpIiwibm9kZUJvYXJkT25lIiwiY2hpbGROb2RlcyIsImRhdGFCb2FyZE9uZSIsImJvYXJkRGF0YSIsIm5vZGVCb2FyZFR3byIsImRhdGFCb2FyZFR3byIsIl91cGRhdGVDZWxsU3RhdHVzMiIsImlzUm91bmRSdW5uaW5nIiwiX3VwZGF0ZUNlbGxNZXRhRGF0YTIiLCJwbGF5ZXJVc2VyTmFtZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWVIYW5kbGVyIiwiX3RvZ2dsZUhvcml6b250YWwyIiwiYmluZCIsInJlc3RhcnRSb3VuZEhhbmRsZXIiLCJuZXdCb2FyZENlbGxPbmUiLCJfY3JlYXRlQ2VsbDIiLCJuZXdCb2FyZENlbGxUd28iLCJhcHBlbmRDaGlsZCIsIl9jbGFzc1ByaXZhdGVGaWVsZFNldCIsIm5ld0NlbGwiLCJjcmVhdGVFbGVtZW50IiwiY2VsbE5vZGUiLCJjZWxsRGF0YSIsInBsYXllck5hbWUiLCJjb29yZCIsImdldENvb3JkIiwic2V0QXR0cmlidXRlIiwiY29vcmRYIiwiY29vcmRZIiwibm9kZSIsImRhdGEiLCJzdGF0dXMiLCJnZXRIaXRTdGF0dXMiLCJOT1RfSElUIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJISVRfU0hJUCIsIkhJVF9DRUxMIiwiaXNPY2N1cGllZCIsImN1cnJlbnRQbGF5ZXJOYW1lIiwic2hpcFNpemVQYXR0ZXJuIiwiX2dldFNoaXBTaXplUGF0dGVybjIiLCJfaGlnaGxpZ2h0Q2VsbHMyIiwiaXNIb3Jpem9udGFsIiwiY3VycmVudE5vZGUiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwidG9nZ2xlIiwiUGxheWVyIiwiU2hpcCIsIkdhbWVib2FyZCIsIkNvb3JkaW5hdGUiLCJHYW1lU3RhdGVEYXRhQnVpbGRlciIsIl9jdXJyZW50UGxheWVyIiwiX2lzR2FtZVJ1bm5pbmciLCJfaXNSb3VuZFJ1bm5pbmciLCJfaXNQbGF5ZXJPbmVUdXJuIiwiX3BsYXllck9uZSIsIl9wbGF5ZXJUd28iLCJfcGxheWVyT25lR2FtZWJvYXJkIiwiX3BsYXllclR3b0dhbWVib2FyZCIsIl9ET01Db250cm9sbGVyIiwiX2JvYXJkQWN0aW9uSGFuZGxlciIsIl9zdGFydEdhbWVIYW5kbGVyIiwiX3Jlc3RhcnRSb3VuZEhhbmRsZXIiLCJfdXBkYXRlR2FtZVVJIiwiX3VwZGF0ZUJvYXJkSGludHNIYW5kbGVyIiwiX2dldEdhbWVTdGF0ZURhdGEiLCJfc3RhcnRSb3VuZCIsIl9lbmRHYW1lIiwiX3N3aXRjaEN1cnJlbnRQbGF5ZXIiLCJfZ2V0V2lubmVyIiwiX3BsYXllckF0dGFjayIsIl9hdHRhY2tDZWxsIiwiX3BsYXllclBsYWNlU2hpcCIsIl9wbGFjZVNoaXAiLCJfZ2V0QVBJQ29udGFpbmVyIiwiR2FtZUNvbnRyb2xsZXIiLCJfZ2V0QVBJQ29udGFpbmVyMiIsIl91cGRhdGVHYW1lVUkyIiwiX2JvYXJkQWN0aW9uSGFuZGxlcjIiLCJldmVudCIsInRhcmdldCIsImlzQ2VsbE93bmVyIiwiZGF0YXNldCIsInBsYXllcm5hbWUiLCJnZXRQbGF5ZXJOYW1lIiwiY29vcmR4IiwiY29vcmR5IiwiY2VsbENvb3JkIiwiX3BsYXllclBsYWNlU2hpcDIiLCJfcGxheWVyQXR0YWNrMiIsIl9zdGFydEdhbWVIYW5kbGVyMiIsIl9yZXN0YXJ0Um91bmRIYW5kbGVyMiIsIl9nZXRHYW1lU3RhdGVEYXRhMiIsIl91cGRhdGVCb2FyZEhpbnRzSGFuZGxlcjIiLCJnYW1lU3RhdGVEYXRhQnVpbGRlciIsInNldEN1cnJlbnRVc2VyTmFtZSIsInNldElzR2FtZVJ1bm5pbmciLCJzZXRJc1JvdW5kUnVubmluZyIsInNldElzUGxheWVyT25lVHVybiIsInNldFBsYXllck9uZVVzZXJOYW1lIiwic2V0UGxheWVyVHdvVXNlck5hbWUiLCJzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiZ2V0R2FtZWJvYXJkRGF0YSIsInNldFBsYXllclR3b0dhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJPbmVGbGVldFNpemUiLCJmbGVldFNpemUiLCJzZXRQbGF5ZXJUd29GbGVldFNpemUiLCJzZXRDdXJyZW50UGxheWVyRmxlZXRTaXplIiwiYnVpbGQiLCJfc3RhcnRSb3VuZDIiLCJnZXRTaGlwcyIsImxlbmd0aCIsIl9lbmRHYW1lMiIsInBsYXllcldpbm5lciIsIl9zd2l0Y2hDdXJyZW50UGxheWVyMiIsIl9nZXRXaW5uZXIyIiwiYWxsU2hpcHNTdW5rIiwiX2F0dGFja0NlbGwyIiwid2lubmVyIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRCb2FyZCIsInJlY2VpdmVBdHRhY2siLCJfcGxhY2VTaGlwMiIsIm5ld1NoaXAiLCJpc1BsYWNlZCIsInBsYWNlU2hpcCIsImFkZFNoaXAiLCJfY29vcmQiLCJfc2hpcCIsIl9pc09jY3VwaWVkIiwiX2hhc0JlZW5IaXQiLCJCb2FyZENlbGwiLCJvY2N1cHkiLCJzaGlwIiwiaGl0IiwidHJ5SGl0IiwiZ2V0Q29vcmRTdHJpbmciLCJnZXQiLCJfY29vcmRYIiwiX2Nvb3JkWSIsIk51bWJlciIsInBhcnNlSW50IiwiR2FtZVN0YXRlRGF0YSIsIl9jdXJyZW50UGxheWVyVXNlck5hbWUiLCJfcGxheWVyT25lVXNlck5hbWUiLCJfcGxheWVyVHdvVXNlck5hbWUiLCJfcGxheWVyT25lR2FtZWJvYXJkRGF0YSIsIl9wbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwiX3BsYXllck9uZUZsZWV0U2l6ZSIsIl9wbGF5ZXJUd29GbGVldFNpemUiLCJfY3VycmVudFBsYXllckZsZWV0U2l6ZSIsInNldCIsImlzUGxheWVyT25lVHVybiIsInBsYXllck9uZVVzZXJOYW1lIiwicGxheWVyVHdvVXNlck5hbWUiLCJwbGF5ZXJPbmVGbGVldFNpemUiLCJwbGF5ZXJUd29GbGVldFNpemUiLCJfZ2FtZVN0YXRlRGF0YSIsInJlc2V0IiwiR2FtZWJvYXJkRGF0YSIsIl9ib2FyZERhdGEiLCJfcGxheWVyVXNlck5hbWUiLCJfYWxsU2hpcHNTdW5rIiwic2V0Qm9hcmREYXRhIiwiYm9hcmQiLCJib2FyZENvcHkiLCJzbGljZSIsImZvckVhY2giLCJyb3ciLCJwdXNoIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfZ2FtZWJvYXJkRGF0YSIsIl9yZXNldCIsIkdhbWVCb2FyZERhdGFCdWlsZGVyIiwiZ2FtZWJvYXJkIiwic2V0UGxheWVyVXNlck5hbWUiLCJzZXRBbGxTaGlwc1N1bmsiLCJnYW1lYm9hcmREYXRhIiwiX3Jlc2V0MiIsIkdhbWVib2FyZERhdGFCdWlsZGVyIiwiX3dpZHRoIiwiX2hlaWdodCIsIl9ib2FyZCIsIl9zaGlwTGlzdCIsIl9jYW5QbGFjZSIsIl9jYW5QbGFjZTIiLCJnZXRDb29yZFN0YXJ0IiwiYm9hcmRDZWxsIiwiZXZlcnkiLCJpc1N1bmsiLCJnYW1lYm9hcmREYXRhQnVpbGRlciIsImNvb3JkU3RhcnQiLCJ4IiwieSIsImVtcHR5Q2VsbCIsInVzZXJOYW1lIiwiX3BsYXllck5hbWUiLCJfaGl0TG9nIiwiX3BsYXllclNoaXBzIiwibG9nSGl0IiwiZ2V0SGl0TG9nIiwicmVzZXRVc2VyIiwic2V0UGxheWVyTmFtZSIsIlNoaXBQaWVjZSIsIl90aW1lc0hpdCIsIl9zaGlwUGllY2VzIiwiX2Nvb3JkU3RhcnQiLCJfYnVpbGRTaGlwIiwiaG9yaXpvbnRhbCIsIl9idWlsZFNoaXAyIiwiaGl0Q29vcmQiLCJzaGlwUGllY2UiLCJmaW5kIiwicGllY2VDb29yZCIsInVuZGVmaW5lZCIsInNoaXBQaWVjZUNvb3JkIiwiX2hpdFN0YXR1cyIsImNvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9