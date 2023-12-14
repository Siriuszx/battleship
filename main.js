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
var _computerEnabledButton = /*#__PURE__*/new WeakMap();
var _gameStateMessage = /*#__PURE__*/new WeakMap();
var _boardInit = /*#__PURE__*/new WeakMap();
var _isHorizontal = /*#__PURE__*/new WeakMap();
var _isComputerEnabled = /*#__PURE__*/new WeakMap();
var _updateBoard = /*#__PURE__*/new WeakSet();
var _updateBoardFocus = /*#__PURE__*/new WeakSet();
var _updateStatusMessage = /*#__PURE__*/new WeakSet();
var _mapHandlers = /*#__PURE__*/new WeakSet();
var _initBoard = /*#__PURE__*/new WeakSet();
var _updateCellMetaData = /*#__PURE__*/new WeakSet();
var _updateCellStatus = /*#__PURE__*/new WeakSet();
var _createCell = /*#__PURE__*/new WeakSet();
var _highlighBuildPattern = /*#__PURE__*/new WeakSet();
var _highlightCells = /*#__PURE__*/new WeakSet();
var _getShipSizePattern = /*#__PURE__*/new WeakSet();
var _toggleHorizontal = /*#__PURE__*/new WeakSet();
var _toggleComputer = /*#__PURE__*/new WeakSet();
var DOMController = /*#__PURE__*/function () {
  function DOMController(_controllerAPI) {
    _classCallCheck(this, DOMController);
    _classPrivateMethodInitSpec(this, _toggleComputer);
    // #endregion
    _classPrivateMethodInitSpec(this, _toggleHorizontal);
    _classPrivateMethodInitSpec(this, _getShipSizePattern);
    _classPrivateMethodInitSpec(this, _highlightCells);
    // #endregion
    // #region Cell Building Path Hinting
    _classPrivateMethodInitSpec(this, _highlighBuildPattern);
    _classPrivateMethodInitSpec(this, _createCell);
    _classPrivateMethodInitSpec(this, _updateCellStatus);
    // #endregion
    // #region Cell Creation/StatusMutation
    _classPrivateMethodInitSpec(this, _updateCellMetaData);
    _classPrivateMethodInitSpec(this, _initBoard);
    // #region Board Initialization
    _classPrivateMethodInitSpec(this, _mapHandlers);
    _classPrivateMethodInitSpec(this, _updateStatusMessage);
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
    _classPrivateFieldInitSpec(this, _computerEnabledButton, {
      writable: true,
      value: document.getElementById('enable-computer')
    });
    _classPrivateFieldInitSpec(this, _gameStateMessage, {
      writable: true,
      value: document.getElementById('status-message')
    });
    _classPrivateFieldInitSpec(this, _boardInit, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _isHorizontal, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _isComputerEnabled, {
      writable: true,
      value: false
    });
    _classPrivateMethodGet(this, _initBoard, _initBoard2).call(this, _controllerAPI.boardActionHandler, _controllerAPI.updateBoardHintsHandler);
    _classPrivateMethodGet(this, _mapHandlers, _mapHandlers2).call(this, _controllerAPI);
  }
  _createClass(DOMController, [{
    key: "updateUI",
    value: function updateUI(gameStateData, currentCellCoord) {
      _classPrivateMethodGet(this, _updateBoard, _updateBoard2).call(this, gameStateData);
      _classPrivateMethodGet(this, _updateBoardFocus, _updateBoardFocus2).call(this, gameStateData);
      _classPrivateMethodGet(this, _updateStatusMessage, _updateStatusMessage2).call(this, gameStateData);
      if (currentCellCoord && gameStateData.isGameRunning) {
        _classPrivateMethodGet(this, _highlighBuildPattern, _highlighBuildPattern2).call(this, currentCellCoord, gameStateData.currentPlayerFleetSize, gameStateData.currentUserName);
      }
    }
  }, {
    key: "getIsHorizontal",
    value: function getIsHorizontal() {
      return _classPrivateFieldGet(this, _isHorizontal);
    }
  }, {
    key: "isComputerEnabled",
    get: function get() {
      return _classPrivateFieldGet(this, _isComputerEnabled);
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

    // To hide first player's board during building phase
    if (gameStateData.isPlayerOneTurn === false && gameStateData.isRoundRunning === false) {
      _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardOne, dataBoardOne, !gameStateData.isRoundRunning);
      _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardTwo, dataBoardTwo, gameStateData.isRoundRunning);
    } else {
      _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardOne, dataBoardOne, gameStateData.isRoundRunning);
      _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardTwo, dataBoardTwo, gameStateData.isRoundRunning);
    }
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
function _updateStatusMessage2(gameStateData) {
  if (gameStateData.isGameRunning === false) {
    _classPrivateFieldGet(this, _gameStateMessage).textContent = 'Press Start';
  }
  if (gameStateData.isRoundRunning === false && gameStateData.isGameRunning === true) {
    if (gameStateData.isPlayerOneTurn === true) {
      _classPrivateFieldGet(this, _gameStateMessage).textContent = "".concat(gameStateData.playerOneUserName, " Turn");
    } else {
      _classPrivateFieldGet(this, _gameStateMessage).textContent = "".concat(gameStateData.playerTwoUserName, " Turn");
    }
  }
  if (gameStateData.isRoundRunning === true) {
    if (gameStateData.isPlayerOneTurn === true) {
      _classPrivateFieldGet(this, _gameStateMessage).textContent = "".concat(gameStateData.playerOneUserName, " Turn");
    } else {
      _classPrivateFieldGet(this, _gameStateMessage).textContent = "".concat(gameStateData.playerTwoUserName, " Turn");
    }
  }
  if (gameStateData.winnerName) {
    console.log("🚀 ~ file: DOMController.js:138 ~ DOMController ~ #updateStatusMessage ~ gameStateData.winnerName:", gameStateData.winnerName);
    _classPrivateFieldGet(this, _gameStateMessage).textContent = "".concat(gameStateData.winnerName, " has won!");
  }
}
function _mapHandlers2(controllerAPI) {
  _classPrivateFieldGet(this, _startGameButton).addEventListener('click', controllerAPI.startGameHandler);
  _classPrivateFieldGet(this, _switchAxisButton).addEventListener('click', _classPrivateMethodGet(this, _toggleHorizontal, _toggleHorizontal2).bind(this));
  _classPrivateFieldGet(this, _restartGameButton).addEventListener('click', controllerAPI.restartRoundHandler);
  _classPrivateFieldGet(this, _computerEnabledButton).addEventListener('click', _classPrivateMethodGet(this, _toggleComputer, _toggleComputer2).bind(this));
  _classPrivateFieldGet(this, _computerEnabledButton).addEventListener('click', controllerAPI.enableComputerHandler);
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
function _createCell2(boardActionHandler, updateBoardHintsHandler) {
  var newCell = document.createElement('div');
  newCell.classList.add('board-cell');
  newCell.addEventListener('click', boardActionHandler);
  newCell.addEventListener('mouseover', updateBoardHintsHandler);
  return newCell;
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
function _toggleComputer2() {
  _classPrivateFieldSet(this, _isComputerEnabled, !_classPrivateFieldGet(this, _isComputerEnabled));
  _classPrivateFieldGet(this, _computerEnabledButton).classList.toggle('button-active');
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
/* harmony import */ var _entities_dataStateContainers_GameStateDataBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/dataStateContainers/GameStateDataBuilder */ "./src/entities/dataStateContainers/GameStateDataBuilder.js");
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
var _lastComputerAttackResult = /*#__PURE__*/new WeakMap();
var _boardActionHandler = /*#__PURE__*/new WeakSet();
var _enableComputerHandler = /*#__PURE__*/new WeakSet();
var _computerActionHandler = /*#__PURE__*/new WeakSet();
var _computerAttack = /*#__PURE__*/new WeakSet();
var _computerBuildFleet = /*#__PURE__*/new WeakSet();
var _getRandomCoord = /*#__PURE__*/new WeakSet();
var _isRepeatedCell = /*#__PURE__*/new WeakSet();
var _getNewAttackCell = /*#__PURE__*/new WeakSet();
var _startGameHandler = /*#__PURE__*/new WeakSet();
var _restartRoundHandler = /*#__PURE__*/new WeakSet();
var _updateGameUI = /*#__PURE__*/new WeakSet();
var _updateBoardHintsHandler = /*#__PURE__*/new WeakSet();
var _getGameStateData = /*#__PURE__*/new WeakSet();
var _startRound = /*#__PURE__*/new WeakSet();
var _endGame = /*#__PURE__*/new WeakSet();
var _switchCurrentPlayer = /*#__PURE__*/new WeakSet();
var _getWinner = /*#__PURE__*/new WeakSet();
var _attackHandler = /*#__PURE__*/new WeakSet();
var _attackCell = /*#__PURE__*/new WeakSet();
var _placeShipHandler = /*#__PURE__*/new WeakSet();
var _placeShip = /*#__PURE__*/new WeakSet();
var _getAPIContainer = /*#__PURE__*/new WeakSet();
var GameController = /*#__PURE__*/_createClass(function GameController() {
  _classCallCheck(this, GameController);
  _classPrivateMethodInitSpec(this, _getAPIContainer);
  _classPrivateMethodInitSpec(this, _placeShip);
  _classPrivateMethodInitSpec(this, _placeShipHandler);
  _classPrivateMethodInitSpec(this, _attackCell);
  _classPrivateMethodInitSpec(this, _attackHandler);
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
  _classPrivateMethodInitSpec(this, _getNewAttackCell);
  _classPrivateMethodInitSpec(this, _isRepeatedCell);
  _classPrivateMethodInitSpec(this, _getRandomCoord);
  _classPrivateMethodInitSpec(this, _computerBuildFleet);
  _classPrivateMethodInitSpec(this, _computerAttack);
  _classPrivateMethodInitSpec(this, _computerActionHandler);
  _classPrivateMethodInitSpec(this, _enableComputerHandler);
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
  _classPrivateFieldInitSpec(this, _lastComputerAttackResult, {
    writable: true,
    value: null
  });
  _classPrivateFieldSet(this, _DOMController, new _DOMController__WEBPACK_IMPORTED_MODULE_3__["default"](_classPrivateMethodGet(this, _getAPIContainer, _getAPIContainer2).call(this)));
  _classPrivateFieldSet(this, _playerOneGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
  _classPrivateFieldSet(this, _playerTwoGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
  _classPrivateFieldSet(this, _playerOne, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player One'));
  _classPrivateFieldSet(this, _playerTwo, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player Two'));
  _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
  _classPrivateFieldSet(this, _lastComputerAttackResult, new _entities_Coordinate__WEBPACK_IMPORTED_MODULE_4__["default"](-1, -1));
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
        _classPrivateMethodGet(this, _placeShipHandler, _placeShipHandler2).call(this, cellCoord, isHorizontal);
        break;
      }
    case true:
      {
        // to let player attack ships on HIS OPPONENT'S board only
        if (isCellOwner === true) return;
        _classPrivateMethodGet(this, _attackHandler, _attackHandler2).call(this, cellCoord);
        break;
      }
    default:
      break;
  }
  if (_classPrivateFieldGet(this, _DOMController).isComputerEnabled === true && _classPrivateFieldGet(this, _isPlayerOneTurn) === false) {
    _classPrivateMethodGet(this, _computerActionHandler, _computerActionHandler2).call(this);
  }
  _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this, cellCoord);
}
function _enableComputerHandler2() {
  _classPrivateMethodGet(this, _restartRoundHandler, _restartRoundHandler2).call(this);
}
function _computerActionHandler2() {
  if (_classPrivateFieldGet(this, _isGameRunning) === false) return;
  if (_classPrivateFieldGet(this, _isRoundRunning) === true) {
    _classPrivateMethodGet(this, _computerAttack, _computerAttack2).call(this);
  } else {
    _classPrivateMethodGet(this, _computerBuildFleet, _computerBuildFleet2).call(this);
  }
}
function _computerAttack2() {
  var newAttackCell = _classPrivateMethodGet(this, _getNewAttackCell, _getNewAttackCell2).call(this);
  _classPrivateMethodGet(this, _attackHandler, _attackHandler2).call(this, newAttackCell);
  _classPrivateFieldSet(this, _lastComputerAttackResult, newAttackCell);
}
function _computerBuildFleet2() {
  var rndCoord = null;
  var rndIsHorizontal = false;
  while (_classPrivateFieldGet(this, _currentPlayer).fleetSize !== 5) {
    rndCoord = _classPrivateMethodGet(this, _getRandomCoord, _getRandomCoord2).call(this);
    rndIsHorizontal = Boolean(Math.round(Math.random()));
    _classPrivateMethodGet(this, _placeShipHandler, _placeShipHandler2).call(this, rndCoord, rndIsHorizontal);
  }
}
function _getRandomCoord2() {
  var rndX = Math.floor(Math.random() * _classPrivateFieldGet(this, _playerTwoGameboard).width + 1);
  var rndY = Math.floor(Math.random() * _classPrivateFieldGet(this, _playerTwoGameboard).height + 1);
  var rndCoord = new _entities_Coordinate__WEBPACK_IMPORTED_MODULE_4__["default"](rndX, rndY);
  return rndCoord;
}
function _isRepeatedCell2(coord) {
  return _classPrivateFieldGet(this, _currentPlayer).getHitLog().some(function (currentCoord) {
    return coord.coordX === currentCoord.coordX && coord.coordY === currentCoord.coordY;
  });
}
function _getNewAttackCell2() {
  var newAttackCell = _classPrivateMethodGet(this, _getRandomCoord, _getRandomCoord2).call(this);
  var isRepeatedCell = _classPrivateMethodGet(this, _isRepeatedCell, _isRepeatedCell2).call(this, newAttackCell);
  while (isRepeatedCell) {
    newAttackCell = _classPrivateMethodGet(this, _getRandomCoord, _getRandomCoord2).call(this);
    isRepeatedCell = _classPrivateMethodGet(this, _isRepeatedCell, _isRepeatedCell2).call(this, newAttackCell);
  }
  return newAttackCell;
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
  var _classPrivateMethodGe;
  var gameStateDataBuilder = new _entities_dataStateContainers_GameStateDataBuilder__WEBPACK_IMPORTED_MODULE_5__["default"]();
  var gameStateData = gameStateDataBuilder.setCurrentUserName(_classPrivateFieldGet(this, _currentPlayer).getPlayerName()).setIsGameRunning(_classPrivateFieldGet(this, _isGameRunning)).setIsRoundRunning(_classPrivateFieldGet(this, _isRoundRunning)).setIsPlayerOneTurn(_classPrivateFieldGet(this, _isPlayerOneTurn)).setPlayerOneUserName(_classPrivateFieldGet(this, _playerOne).getPlayerName()).setPlayerTwoUserName(_classPrivateFieldGet(this, _playerTwo).getPlayerName()).setPlayerOneGameboardData(_classPrivateFieldGet(this, _playerOneGameboard).getGameboardData(_classPrivateFieldGet(this, _playerOne).getPlayerName())).setPlayerTwoGameboardData(_classPrivateFieldGet(this, _playerTwoGameboard).getGameboardData(_classPrivateFieldGet(this, _playerTwo).getPlayerName())).setPlayerOneFleetSize(_classPrivateFieldGet(this, _playerOne).fleetSize).setPlayerTwoFleetSize(_classPrivateFieldGet(this, _playerTwo).fleetSize).setCurrentPlayerFleetSize(_classPrivateFieldGet(this, _currentPlayer).fleetSize).setWinnerName((_classPrivateMethodGe = _classPrivateMethodGet(this, _getWinner, _getWinner2).call(this)) === null || _classPrivateMethodGe === void 0 ? void 0 : _classPrivateMethodGe.getPlayerName()).build();
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
  if (_classPrivateFieldGet(this, _playerOne).fleetSize !== 5 || _classPrivateFieldGet(this, _playerTwo).fleetSize !== 5) return null;
  if (_classPrivateFieldGet(this, _playerOneGameboard).allShipsSunk() === true) {
    return _classPrivateFieldGet(this, _playerTwo);
  }
  if (_classPrivateFieldGet(this, _playerTwoGameboard).allShipsSunk() === true) {
    return _classPrivateFieldGet(this, _playerOne);
  }
  return null;
}
function _attackHandler2(coord) {
  var attackResult = _classPrivateMethodGet(this, _attackCell, _attackCell2).call(this, coord);
  _classPrivateMethodGet(this, _switchCurrentPlayer, _switchCurrentPlayer2).call(this);
  var winner = _classPrivateMethodGet(this, _getWinner, _getWinner2).call(this);
  if (winner !== null) {
    _classPrivateMethodGet(this, _endGame, _endGame2).call(this, winner);
  }
  return attackResult;
}
function _attackCell2(coord) {
  if (_classPrivateFieldGet(this, _isRoundRunning) === false) return false;
  var currentBoard = null;
  if (_classPrivateFieldGet(this, _isPlayerOneTurn)) {
    currentBoard = _classPrivateFieldGet(this, _playerTwoGameboard);
  } else {
    currentBoard = _classPrivateFieldGet(this, _playerOneGameboard);
  }
  _classPrivateFieldGet(this, _currentPlayer).logHit(coord);
  currentBoard.receiveAttack(coord);
  return true;
}
function _placeShipHandler2(coord, isHorizontal) {
  var result = _classPrivateMethodGet(this, _placeShip, _placeShip2).call(this, coord, isHorizontal);
  _classPrivateMethodGet(this, _startRound, _startRound2).call(this);
  return result;
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
      break;
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
    updateBoardHintsHandler: _classPrivateMethodGet(this, _updateBoardHintsHandler, _updateBoardHintsHandler2).bind(this),
    enableComputerHandler: _classPrivateMethodGet(this, _enableComputerHandler, _enableComputerHandler2).bind(this)
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
/* harmony import */ var _dataStateContainers_GameboardDataBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataStateContainers/GameboardDataBuilder */ "./src/entities/dataStateContainers/GameboardDataBuilder.js");
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
      var gameboardDataBuilder = new _dataStateContainers_GameboardDataBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
  }, {
    key: "width",
    get: function get() {
      return _classPrivateFieldGet(this, _width);
    }
  }, {
    key: "height",
    get: function get() {
      return _classPrivateFieldGet(this, _height);
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
  var BUILDING_SHIP = 'BUILDING_SHIP';
  return {
    NOT_HIT: NOT_HIT,
    HIT_CELL: HIT_CELL,
    HIT_SHIP: HIT_SHIP,
    BUILDING_SHIP: BUILDING_SHIP
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

/***/ "./src/entities/dataStateContainers/GameStateData.js":
/*!***********************************************************!*\
  !*** ./src/entities/dataStateContainers/GameStateData.js ***!
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
var _winnerName = /*#__PURE__*/new WeakMap();
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
    _classPrivateFieldInitSpec(this, _winnerName, {
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
  }, {
    key: "winnerName",
    get: function get() {
      return _classPrivateFieldGet(this, _winnerName);
    },
    set: function set(winnerName) {
      _classPrivateFieldSet(this, _winnerName, winnerName);
    }
  }]);
  return GameStateData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameStateData);

/***/ }),

/***/ "./src/entities/dataStateContainers/GameStateDataBuilder.js":
/*!******************************************************************!*\
  !*** ./src/entities/dataStateContainers/GameStateDataBuilder.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameStateData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameStateData */ "./src/entities/dataStateContainers/GameStateData.js");
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
    key: "setWinnerName",
    value: function setWinnerName(winnerName) {
      _classPrivateFieldGet(this, _gameStateData).winnerName = winnerName;
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

/***/ "./src/entities/dataStateContainers/GameboardData.js":
/*!***********************************************************!*\
  !*** ./src/entities/dataStateContainers/GameboardData.js ***!
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

/***/ "./src/entities/dataStateContainers/GameboardDataBuilder.js":
/*!******************************************************************!*\
  !*** ./src/entities/dataStateContainers/GameboardDataBuilder.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameboardData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameboardData */ "./src/entities/dataStateContainers/GameboardData.js");
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

#status-message {
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
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
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;;EAER;;WAES;AACX;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;;EAEvB,gBAAgB;;EAEhB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;;EAEjB,eAAe;EACf,WAAW;EACX,uBAAuB;EACvB,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-ui-container {\n  padding: 100px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n\n  grid-template-areas:\n    'button'\n    'board';\n}\n\n#status-message {\n  text-align: center;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.controls-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  gap: 2em\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  gap: 2em;\n}\n\n.board {\n  height: 500px;\n  width: 500px;\n  border: 1px solid black;\n\n  grid-area: board;\n\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board-active-build {\n  border: 1px solid lightgreen;\n}\n\n.board-active-attack {\n  border: 1px solid red;\n}\n\n.board-cell {\n  border: 1px solid black;\n}\n\n.board-cell:hover {\n  border: 2px solid lightgreen;\n}\n\n.button {\n  grid-area: button;\n\n  padding: 0.5rem;\n  color: #fff;\n  border: 2px solid black;\n  background-color: black;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.button-active {\n  color: #000;\n  background-color: white;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.button:hover {\n  color: #000;\n  background-color: white;\n  text-transform: uppercase;\n  font-weight: 700;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM4QztBQUFBLElBQUFDLFlBQUEsb0JBQUFDLE9BQUE7QUFBQSxJQUFBQyxhQUFBLG9CQUFBRCxPQUFBO0FBQUEsSUFBQUUsV0FBQSxvQkFBQUYsT0FBQTtBQUFBLElBQUFHLGVBQUEsb0JBQUFILE9BQUE7QUFBQSxJQUFBSSxlQUFBLG9CQUFBSixPQUFBO0FBQUEsSUFBQUssZ0JBQUEsb0JBQUFMLE9BQUE7QUFBQSxJQUFBTSxpQkFBQSxvQkFBQU4sT0FBQTtBQUFBLElBQUFPLGtCQUFBLG9CQUFBUCxPQUFBO0FBQUEsSUFBQVEsc0JBQUEsb0JBQUFSLE9BQUE7QUFBQSxJQUFBUyxpQkFBQSxvQkFBQVQsT0FBQTtBQUFBLElBQUFVLFVBQUEsb0JBQUFWLE9BQUE7QUFBQSxJQUFBVyxhQUFBLG9CQUFBWCxPQUFBO0FBQUEsSUFBQVksa0JBQUEsb0JBQUFaLE9BQUE7QUFBQSxJQUFBYSxZQUFBLG9CQUFBQyxPQUFBO0FBQUEsSUFBQUMsaUJBQUEsb0JBQUFELE9BQUE7QUFBQSxJQUFBRSxvQkFBQSxvQkFBQUYsT0FBQTtBQUFBLElBQUFHLFlBQUEsb0JBQUFILE9BQUE7QUFBQSxJQUFBSSxVQUFBLG9CQUFBSixPQUFBO0FBQUEsSUFBQUssbUJBQUEsb0JBQUFMLE9BQUE7QUFBQSxJQUFBTSxpQkFBQSxvQkFBQU4sT0FBQTtBQUFBLElBQUFPLFdBQUEsb0JBQUFQLE9BQUE7QUFBQSxJQUFBUSxxQkFBQSxvQkFBQVIsT0FBQTtBQUFBLElBQUFTLGVBQUEsb0JBQUFULE9BQUE7QUFBQSxJQUFBVSxtQkFBQSxvQkFBQVYsT0FBQTtBQUFBLElBQUFXLGlCQUFBLG9CQUFBWCxPQUFBO0FBQUEsSUFBQVksZUFBQSxvQkFBQVosT0FBQTtBQUFBLElBRXhDYSxhQUFhO0VBMkJqQixTQUFBQSxjQUFZQyxjQUFhLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixhQUFBO0lBQUFHLDJCQUFBLE9BQUFKLGVBQUE7SUEyTzNCO0lBQUFJLDJCQUFBLE9BQUFMLGlCQUFBO0lBQUFLLDJCQUFBLE9BQUFOLG1CQUFBO0lBQUFNLDJCQUFBLE9BQUFQLGVBQUE7SUFqREE7SUFFQTtJQUFBTywyQkFBQSxPQUFBUixxQkFBQTtJQUFBUSwyQkFBQSxPQUFBVCxXQUFBO0lBQUFTLDJCQUFBLE9BQUFWLGlCQUFBO0lBcERBO0lBRUE7SUFBQVUsMkJBQUEsT0FBQVgsbUJBQUE7SUFBQVcsMkJBQUEsT0FBQVosVUFBQTtJQTFCQTtJQUFBWSwyQkFBQSxPQUFBYixZQUFBO0lBQUFhLDJCQUFBLE9BQUFkLG9CQUFBO0lBQUFjLDJCQUFBLE9BQUFmLGlCQUFBO0lBQUFlLDJCQUFBLE9BQUFqQixZQUFBO0lBQUFrQiwwQkFBQSxPQUFBaEMsWUFBQTtNQUFBaUMsUUFBQTtNQUFBQyxLQUFBLEVBMUllO0lBQUU7SUFBQUYsMEJBQUEsT0FBQTlCLGFBQUE7TUFBQStCLFFBQUE7TUFBQUMsS0FBQSxFQUVEO0lBQUU7SUFBQUYsMEJBQUEsT0FBQTdCLFdBQUE7TUFBQThCLFFBQUE7TUFBQUMsS0FBQSxFQUVKO0lBQUc7SUFBQUYsMEJBQUEsT0FBQTVCLGVBQUE7TUFBQTZCLFFBQUE7TUFBQUMsS0FBQSxFQUVDQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXO0lBQUM7SUFBQUosMEJBQUEsT0FBQTNCLGVBQUE7TUFBQTRCLFFBQUE7TUFBQUMsS0FBQSxFQUVwQ0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVztJQUFDO0lBQUFKLDBCQUFBLE9BQUExQixnQkFBQTtNQUFBMkIsUUFBQTtNQUFBQyxLQUFBLEVBRW5DQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZO0lBQUM7SUFBQUosMEJBQUEsT0FBQXpCLGlCQUFBO01BQUEwQixRQUFBO01BQUFDLEtBQUEsRUFFcENDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQjtJQUFDO0lBQUFKLDBCQUFBLE9BQUF4QixrQkFBQTtNQUFBeUIsUUFBQTtNQUFBQyxLQUFBLEVBRTNDQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjO0lBQUM7SUFBQUosMEJBQUEsT0FBQXZCLHNCQUFBO01BQUF3QixRQUFBO01BQUFDLEtBQUEsRUFFbkNDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQjtJQUFDO0lBQUFKLDBCQUFBLE9BQUF0QixpQkFBQTtNQUFBdUIsUUFBQTtNQUFBQyxLQUFBLEVBRS9DQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0I7SUFBQztJQUFBSiwwQkFBQSxPQUFBckIsVUFBQTtNQUFBc0IsUUFBQTtNQUFBQyxLQUFBLEVBRWhEO0lBQUs7SUFBQUYsMEJBQUEsT0FBQXBCLGFBQUE7TUFBQXFCLFFBQUE7TUFBQUMsS0FBQSxFQUVGO0lBQUk7SUFBQUYsMEJBQUEsT0FBQW5CLGtCQUFBO01BQUFvQixRQUFBO01BQUFDLEtBQUEsRUFFQztJQUFLO0lBR3hCRyxzQkFBQSxLQUFJLEVBQUFsQixVQUFBLEVBQUFtQixXQUFBLEVBQUFDLElBQUEsQ0FBSixJQUFJLEVBQVlWLGNBQWEsQ0FBQ1csa0JBQWtCLEVBQUVYLGNBQWEsQ0FBQ1ksdUJBQXVCO0lBQ3ZGSixzQkFBQSxLQUFJLEVBQUFuQixZQUFBLEVBQUF3QixhQUFBLEVBQUFILElBQUEsQ0FBSixJQUFJLEVBQWNWLGNBQWE7RUFDakM7RUFBQ2MsWUFBQSxDQUFBZixhQUFBO0lBQUFnQixHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBVyxTQUFTQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFO01BQ3hDVixzQkFBQSxLQUFJLEVBQUF2QixZQUFBLEVBQUFrQyxhQUFBLEVBQUFULElBQUEsQ0FBSixJQUFJLEVBQWNPLGFBQWE7TUFDL0JULHNCQUFBLEtBQUksRUFBQXJCLGlCQUFBLEVBQUFpQyxrQkFBQSxFQUFBVixJQUFBLENBQUosSUFBSSxFQUFtQk8sYUFBYTtNQUNwQ1Qsc0JBQUEsS0FBSSxFQUFBcEIsb0JBQUEsRUFBQWlDLHFCQUFBLEVBQUFYLElBQUEsQ0FBSixJQUFJLEVBQXNCTyxhQUFhO01BRXZDLElBQUlDLGdCQUFnQixJQUFJRCxhQUFhLENBQUNLLGFBQWEsRUFBRTtRQUNuRGQsc0JBQUEsS0FBSSxFQUFBZCxxQkFBQSxFQUFBNkIsc0JBQUEsRUFBQWIsSUFBQSxDQUFKLElBQUksRUFBdUJRLGdCQUFnQixFQUFFRCxhQUFhLENBQUNPLHNCQUFzQixFQUFFUCxhQUFhLENBQUNRLGVBQWU7TUFDbEg7SUFDRjtFQUFDO0lBQUFWLEdBQUE7SUFBQVYsS0FBQSxFQTBPRCxTQUFBcUIsZ0JBQUEsRUFBa0I7TUFBRSxPQUFBQyxxQkFBQSxDQUFPLElBQUksRUFBQTVDLGFBQUE7SUFBZ0I7RUFBQztJQUFBZ0MsR0FBQTtJQUFBYSxHQUFBLEVBRWhELFNBQUFBLElBQUEsRUFBd0I7TUFBRSxPQUFBRCxxQkFBQSxDQUFPLElBQUksRUFBQTNDLGtCQUFBO0lBQXFCO0VBQUM7RUFBQSxPQUFBZSxhQUFBO0FBQUE7QUFBQSxTQUFBb0IsY0ExTzlDRixhQUFhLEVBQUU7RUFDMUIsSUFBTVksZ0JBQWdCLEdBQUdaLGFBQWEsQ0FBQ2Esc0JBQXNCO0VBQzdELElBQU1DLGdCQUFnQixHQUFHZCxhQUFhLENBQUNlLHNCQUFzQjtFQUU3RCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBQU4scUJBQUEsQ0FBRyxJQUFJLEVBQUFyRCxXQUFBLENBQVksRUFBRTJELENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDNUMsSUFBTUMsWUFBWSxHQUFHUCxxQkFBQSxLQUFJLEVBQUFwRCxlQUFBLEVBQWlCNEQsVUFBVSxDQUFDRixDQUFDLENBQUM7SUFDdkQsSUFBTUcsWUFBWSxHQUFHUCxnQkFBZ0IsQ0FBQ1EsU0FBUyxDQUFDSixDQUFDLENBQUM7SUFFbEQsSUFBTUssWUFBWSxHQUFHWCxxQkFBQSxLQUFJLEVBQUFuRCxlQUFBLEVBQWlCMkQsVUFBVSxDQUFDRixDQUFDLENBQUM7SUFDdkQsSUFBTU0sWUFBWSxHQUFHUixnQkFBZ0IsQ0FBQ00sU0FBUyxDQUFDSixDQUFDLENBQUM7O0lBRWxEO0lBQ0EsSUFBSWhCLGFBQWEsQ0FBQ3VCLGVBQWUsS0FBSyxLQUFLLElBQUl2QixhQUFhLENBQUN3QixjQUFjLEtBQUssS0FBSyxFQUFFO01BQ3JGakMsc0JBQUEsS0FBSSxFQUFBaEIsaUJBQUEsRUFBQWtELGtCQUFBLEVBQUFoQyxJQUFBLENBQUosSUFBSSxFQUFtQndCLFlBQVksRUFBRUUsWUFBWSxFQUFFLENBQUNuQixhQUFhLENBQUN3QixjQUFjO01BQ2hGakMsc0JBQUEsS0FBSSxFQUFBaEIsaUJBQUEsRUFBQWtELGtCQUFBLEVBQUFoQyxJQUFBLENBQUosSUFBSSxFQUFtQjRCLFlBQVksRUFBRUMsWUFBWSxFQUFFdEIsYUFBYSxDQUFDd0IsY0FBYztJQUNqRixDQUFDLE1BQU07TUFDTGpDLHNCQUFBLEtBQUksRUFBQWhCLGlCQUFBLEVBQUFrRCxrQkFBQSxFQUFBaEMsSUFBQSxDQUFKLElBQUksRUFBbUJ3QixZQUFZLEVBQUVFLFlBQVksRUFBRW5CLGFBQWEsQ0FBQ3dCLGNBQWM7TUFDL0VqQyxzQkFBQSxLQUFJLEVBQUFoQixpQkFBQSxFQUFBa0Qsa0JBQUEsRUFBQWhDLElBQUEsQ0FBSixJQUFJLEVBQW1CNEIsWUFBWSxFQUFFQyxZQUFZLEVBQUV0QixhQUFhLENBQUN3QixjQUFjO0lBQ2pGO0lBRUFqQyxzQkFBQSxLQUFJLEVBQUFqQixtQkFBQSxFQUFBb0Qsb0JBQUEsRUFBQWpDLElBQUEsQ0FBSixJQUFJLEVBQXFCd0IsWUFBWSxFQUFFRSxZQUFZLEVBQUVQLGdCQUFnQixDQUFDZSxjQUFjO0lBQ3BGcEMsc0JBQUEsS0FBSSxFQUFBakIsbUJBQUEsRUFBQW9ELG9CQUFBLEVBQUFqQyxJQUFBLENBQUosSUFBSSxFQUFxQjRCLFlBQVksRUFBRUMsWUFBWSxFQUFFUixnQkFBZ0IsQ0FBQ2EsY0FBYztFQUN0RjtBQUNGO0FBQUMsU0FBQXhCLG1CQUVpQkgsYUFBYSxFQUFFO0VBQy9CLElBQUlBLGFBQWEsQ0FBQ0ssYUFBYSxLQUFLLEtBQUssRUFBRTtJQUN6Q0sscUJBQUEsS0FBSSxFQUFBcEQsZUFBQSxFQUFpQnNFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO0lBQzNEbkIscUJBQUEsS0FBSSxFQUFBbkQsZUFBQSxFQUFpQnFFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO0lBRTNEbkIscUJBQUEsS0FBSSxFQUFBcEQsZUFBQSxFQUFpQnNFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0lBQzVEbkIscUJBQUEsS0FBSSxFQUFBbkQsZUFBQSxFQUFpQnFFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0lBRTVEO0VBQ0Y7RUFFQSxJQUFJN0IsYUFBYSxDQUFDd0IsY0FBYyxLQUFLLEtBQUssRUFBRTtJQUMxQyxRQUFReEIsYUFBYSxDQUFDUSxlQUFlO01BQ25DLEtBQUssWUFBWTtRQUNmRSxxQkFBQSxLQUFJLEVBQUFwRCxlQUFBLEVBQWlCc0UsU0FBUyxDQUFDRSxHQUFHLENBQUMsb0JBQW9CLENBQUM7UUFDeERwQixxQkFBQSxLQUFJLEVBQUFuRCxlQUFBLEVBQWlCcUUsU0FBUyxDQUFDQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDM0Q7TUFDRixLQUFLLFlBQVk7UUFDZm5CLHFCQUFBLEtBQUksRUFBQXBELGVBQUEsRUFBaUJzRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUMzRG5CLHFCQUFBLEtBQUksRUFBQW5ELGVBQUEsRUFBaUJxRSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztRQUN4RDtNQUNGO1FBQ0U7SUFDSjtFQUNGO0VBRUEsSUFBSTlCLGFBQWEsQ0FBQ3dCLGNBQWMsS0FBSyxJQUFJLEVBQUU7SUFDekNkLHFCQUFBLEtBQUksRUFBQXBELGVBQUEsRUFBaUJzRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztJQUMzRG5CLHFCQUFBLEtBQUksRUFBQW5ELGVBQUEsRUFBaUJxRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztJQUUzRCxRQUFRN0IsYUFBYSxDQUFDUSxlQUFlO01BQ25DLEtBQUssWUFBWTtRQUNmRSxxQkFBQSxLQUFJLEVBQUFwRCxlQUFBLEVBQWlCc0UsU0FBUyxDQUFDQyxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDNURuQixxQkFBQSxLQUFJLEVBQUFuRCxlQUFBLEVBQWlCcUUsU0FBUyxDQUFDRSxHQUFHLENBQUMscUJBQXFCLENBQUM7UUFDekQ7TUFDRixLQUFLLFlBQVk7UUFDZnBCLHFCQUFBLEtBQUksRUFBQXBELGVBQUEsRUFBaUJzRSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUN6RHBCLHFCQUFBLEtBQUksRUFBQW5ELGVBQUEsRUFBaUJxRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztRQUM1RDtNQUNGO1FBQ0U7SUFDSjtFQUNGO0FBQ0Y7QUFBQyxTQUFBekIsc0JBRW9CSixhQUFhLEVBQUU7RUFDbEMsSUFBR0EsYUFBYSxDQUFDSyxhQUFhLEtBQUssS0FBSyxFQUFFO0lBQ3hDSyxxQkFBQSxLQUFJLEVBQUE5QyxpQkFBQSxFQUFtQm1FLFdBQVcsR0FBRyxhQUFhO0VBQ3BEO0VBRUEsSUFBRy9CLGFBQWEsQ0FBQ3dCLGNBQWMsS0FBSyxLQUFLLElBQUl4QixhQUFhLENBQUNLLGFBQWEsS0FBSyxJQUFJLEVBQUU7SUFDakYsSUFBR0wsYUFBYSxDQUFDdUIsZUFBZSxLQUFLLElBQUksRUFBRTtNQUN6Q2IscUJBQUEsS0FBSSxFQUFBOUMsaUJBQUEsRUFBbUJtRSxXQUFXLE1BQUFDLE1BQUEsQ0FBTWhDLGFBQWEsQ0FBQ2lDLGlCQUFpQixVQUFPO0lBQ2hGLENBQUMsTUFBTTtNQUNMdkIscUJBQUEsS0FBSSxFQUFBOUMsaUJBQUEsRUFBbUJtRSxXQUFXLE1BQUFDLE1BQUEsQ0FBTWhDLGFBQWEsQ0FBQ2tDLGlCQUFpQixVQUFPO0lBQ2hGO0VBQ0Y7RUFFQSxJQUFHbEMsYUFBYSxDQUFDd0IsY0FBYyxLQUFLLElBQUksRUFBRTtJQUN4QyxJQUFHeEIsYUFBYSxDQUFDdUIsZUFBZSxLQUFLLElBQUksRUFBRTtNQUN6Q2IscUJBQUEsS0FBSSxFQUFBOUMsaUJBQUEsRUFBbUJtRSxXQUFXLE1BQUFDLE1BQUEsQ0FBTWhDLGFBQWEsQ0FBQ2lDLGlCQUFpQixVQUFPO0lBQ2hGLENBQUMsTUFBTTtNQUNMdkIscUJBQUEsS0FBSSxFQUFBOUMsaUJBQUEsRUFBbUJtRSxXQUFXLE1BQUFDLE1BQUEsQ0FBTWhDLGFBQWEsQ0FBQ2tDLGlCQUFpQixVQUFPO0lBQ2hGO0VBQ0Y7RUFFQSxJQUFHbEMsYUFBYSxDQUFDbUMsVUFBVSxFQUFFO0lBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvR0FBb0csRUFBRXJDLGFBQWEsQ0FBQ21DLFVBQVUsQ0FBQztJQUMzSXpCLHFCQUFBLEtBQUksRUFBQTlDLGlCQUFBLEVBQW1CbUUsV0FBVyxNQUFBQyxNQUFBLENBQU1oQyxhQUFhLENBQUNtQyxVQUFVLGNBQVc7RUFDN0U7QUFDRjtBQUFDLFNBQUF2QyxjQUlZYixhQUFhLEVBQUU7RUFDMUIyQixxQkFBQSxLQUFJLEVBQUFsRCxnQkFBQSxFQUFrQjhFLGdCQUFnQixDQUFDLE9BQU8sRUFBRXZELGFBQWEsQ0FBQ3dELGdCQUFnQixDQUFDO0VBQy9FN0IscUJBQUEsS0FBSSxFQUFBakQsaUJBQUEsRUFBbUI2RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUvQyxzQkFBQSxLQUFJLEVBQUFYLGlCQUFBLEVBQUE0RCxrQkFBQSxFQUFtQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ25GL0IscUJBQUEsS0FBSSxFQUFBaEQsa0JBQUEsRUFBb0I0RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV2RCxhQUFhLENBQUMyRCxtQkFBbUIsQ0FBQztFQUNwRmhDLHFCQUFBLEtBQUksRUFBQS9DLHNCQUFBLEVBQXdCMkUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFL0Msc0JBQUEsS0FBSSxFQUFBVixlQUFBLEVBQUE4RCxnQkFBQSxFQUFpQkYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3RGL0IscUJBQUEsS0FBSSxFQUFBL0Msc0JBQUEsRUFBd0IyRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV2RCxhQUFhLENBQUM2RCxxQkFBcUIsQ0FBQztBQUM1RjtBQUFDLFNBQUFwRCxZQUVVRSxrQkFBa0IsRUFBRUMsdUJBQXVCLEVBQUU7RUFDdEQsSUFBSWUscUJBQUEsS0FBSSxFQUFBN0MsVUFBQSxNQUFnQixJQUFJLEVBQUU7RUFFOUIsS0FBSyxJQUFJbUQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFBTixxQkFBQSxDQUFHLElBQUksRUFBQXJELFdBQUEsQ0FBWSxFQUFFMkQsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUM1QyxJQUFNNkIsZUFBZSxHQUFBdEQsc0JBQUEsQ0FBRyxJQUFJLEVBQUFmLFdBQUEsRUFBQXNFLFlBQUEsRUFBQXJELElBQUEsQ0FBSixJQUFJLEVBQWFDLGtCQUFrQixFQUFFQyx1QkFBdUIsQ0FBQztJQUNyRixJQUFNb0QsZUFBZSxHQUFBeEQsc0JBQUEsQ0FBRyxJQUFJLEVBQUFmLFdBQUEsRUFBQXNFLFlBQUEsRUFBQXJELElBQUEsQ0FBSixJQUFJLEVBQWFDLGtCQUFrQixFQUFFQyx1QkFBdUIsQ0FBQztJQUVyRmUscUJBQUEsS0FBSSxFQUFBcEQsZUFBQSxFQUFpQjBGLFdBQVcsQ0FBQ0gsZUFBZSxDQUFDO0lBQ2pEbkMscUJBQUEsS0FBSSxFQUFBbkQsZUFBQSxFQUFpQnlGLFdBQVcsQ0FBQ0QsZUFBZSxDQUFDO0VBQ25EO0VBRUFFLHFCQUFBLEtBQUksRUFBQXBGLFVBQUEsRUFBYyxJQUFJO0FBQ3hCO0FBQUMsU0FBQTZELHFCQU1tQndCLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUU7RUFDbEQsSUFBTUMsS0FBSyxHQUFHRixRQUFRLENBQUNHLFFBQVEsQ0FBQyxDQUFDO0VBRWpDSixRQUFRLENBQUNLLFlBQVksQ0FBQyxhQUFhLEVBQUVGLEtBQUssQ0FBQ0csTUFBTSxDQUFDO0VBQ2xETixRQUFRLENBQUNLLFlBQVksQ0FBQyxhQUFhLEVBQUVGLEtBQUssQ0FBQ0ksTUFBTSxDQUFDO0VBQ2xEUCxRQUFRLENBQUNLLFlBQVksQ0FBQyxpQkFBaUIsRUFBRUgsVUFBVSxDQUFDO0FBQ3REO0FBQUMsU0FBQTNCLG1CQUVpQnlCLFFBQVEsRUFBRUMsUUFBUSxFQUFFM0IsY0FBYyxFQUFFO0VBQ3BELElBQUksQ0FBQzBCLFFBQVEsSUFBSSxDQUFDQyxRQUFRLEVBQUU7RUFFNUIsSUFBTU8sSUFBSSxHQUFHUixRQUFRO0VBQ3JCLElBQU1TLElBQUksR0FBR1IsUUFBUTtFQUVyQixJQUFNUyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsWUFBWSxDQUFDLENBQUM7RUFFbEMsUUFBUUQsTUFBTTtJQUNaLEtBQUszRywrREFBUyxDQUFDLENBQUMsQ0FBQzZHLE9BQU87TUFBRTtRQUN4QkosSUFBSSxDQUFDSyxLQUFLLENBQUNDLGVBQWUsR0FBRyxTQUFTO1FBQ3RDO01BQ0Y7SUFDQSxLQUFLL0csK0RBQVMsQ0FBQyxDQUFDLENBQUNnSCxRQUFRO01BQUU7UUFDekJQLElBQUksQ0FBQ0ssS0FBSyxDQUFDQyxlQUFlLEdBQUcsU0FBUztRQUN0QztNQUNGO0lBQ0EsS0FBSy9HLCtEQUFTLENBQUMsQ0FBQyxDQUFDaUgsUUFBUTtNQUFFO1FBQ3pCUixJQUFJLENBQUNLLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLFNBQVM7UUFDdEM7TUFDRjtJQUNBO01BQ0U7RUFDSjtFQUVBLElBQUliLFFBQVEsQ0FBQ2dCLFVBQVUsSUFBSTNDLGNBQWMsS0FBSyxLQUFLLEVBQUVrQyxJQUFJLENBQUNLLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLE1BQU07QUFDMUY7QUFBQyxTQUFBbEIsYUFFV3BELGtCQUFrQixFQUFFQyx1QkFBdUIsRUFBRTtFQUN2RCxJQUFNeUUsT0FBTyxHQUFHL0UsUUFBUSxDQUFDZ0YsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUU3Q0QsT0FBTyxDQUFDeEMsU0FBUyxDQUFDRSxHQUFHLENBQUMsWUFBWSxDQUFDO0VBQ25Dc0MsT0FBTyxDQUFDOUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFNUMsa0JBQWtCLENBQUM7RUFDckQwRSxPQUFPLENBQUM5QixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUzQyx1QkFBdUIsQ0FBQztFQUU5RCxPQUFPeUUsT0FBTztBQUNoQjtBQUFDLFNBQUE5RCx1QkFNcUIrQyxLQUFLLEVBQUU5QyxzQkFBc0IsRUFBRStELGlCQUFpQixFQUFFO0VBQ3RFLElBQU1DLGVBQWUsR0FBQWhGLHNCQUFBLENBQUcsSUFBSSxFQUFBWixtQkFBQSxFQUFBNkYsb0JBQUEsRUFBQS9FLElBQUEsQ0FBSixJQUFJLEVBQXFCYyxzQkFBc0IsQ0FBQztFQUV4RWhCLHNCQUFBLEtBQUksRUFBQWIsZUFBQSxFQUFBK0YsZ0JBQUEsRUFBQWhGLElBQUEsQ0FBSixJQUFJLEVBQWlCNEQsS0FBSyxFQUFFa0IsZUFBZSxFQUFFRCxpQkFBaUI7QUFDaEU7QUFBQyxTQUFBRyxpQkFFZXBCLEtBQUssRUFBRWtCLGVBQWUsRUFBRUQsaUJBQWlCLEVBQUU7RUFDekQsSUFBTUksWUFBWSxHQUFBaEUscUJBQUEsQ0FBRyxJQUFJLEVBQUE1QyxhQUFBLENBQWM7RUFFdkMsUUFBUTRHLFlBQVk7SUFDbEIsS0FBSyxJQUFJO01BQ1AsS0FBSyxJQUFJMUQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHdUQsZUFBZSxFQUFFdkQsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQyxJQUFLcUMsS0FBSyxDQUFDRyxNQUFNLEdBQUdlLGVBQWUsR0FBSSxDQUFDLEdBQUE3RCxxQkFBQSxDQUFHLElBQUksRUFBQXhELFlBQUEsQ0FBYSxFQUFFO1FBQzlELElBQU15SCxXQUFXLEdBQUd0RixRQUFRLENBQUN1RixhQUFhLHNCQUFBNUMsTUFBQSxDQUFxQnFCLEtBQUssQ0FBQ0csTUFBTSxHQUFHeEMsQ0FBQyx3QkFBQWdCLE1BQUEsQ0FBbUJxQixLQUFLLENBQUNJLE1BQU0sNEJBQUF6QixNQUFBLENBQXVCc0MsaUJBQWlCLFFBQUksQ0FBQztRQUMzSkssV0FBVyxDQUFDWixLQUFLLENBQUNDLGVBQWUsR0FBRyxTQUFTO01BQy9DO01BQ0E7SUFDRixLQUFLLEtBQUs7TUFDUixLQUFLLElBQUloRCxFQUFDLEdBQUcsQ0FBQyxFQUFFQSxFQUFDLEdBQUd1RCxlQUFlLEVBQUV2RCxFQUFDLElBQUksQ0FBQyxFQUFFO1FBQzNDLElBQUtxQyxLQUFLLENBQUNJLE1BQU0sR0FBR2MsZUFBZSxHQUFJLENBQUMsR0FBQTdELHFCQUFBLENBQUcsSUFBSSxFQUFBdEQsYUFBQSxDQUFjLEVBQUU7UUFDL0QsSUFBTXVILFlBQVcsR0FBR3RGLFFBQVEsQ0FBQ3VGLGFBQWEsc0JBQUE1QyxNQUFBLENBQXFCcUIsS0FBSyxDQUFDRyxNQUFNLHdCQUFBeEIsTUFBQSxDQUFtQnFCLEtBQUssQ0FBQ0ksTUFBTSxHQUFHekMsRUFBQyw0QkFBQWdCLE1BQUEsQ0FBdUJzQyxpQkFBaUIsUUFBSSxDQUFDO1FBQzNKSyxZQUFXLENBQUNaLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLFNBQVM7TUFDL0M7TUFDQTtJQUNGO01BQ0U7RUFDSjtBQUNGO0FBQUMsU0FBQVEscUJBRW1CakUsc0JBQXNCLEVBQUU7RUFDMUMsUUFBUUEsc0JBQXNCO0lBQzVCLEtBQUssQ0FBQztNQUNKLE9BQU8sQ0FBQztJQUNWLEtBQUssQ0FBQztNQUNKLE9BQU8sQ0FBQztJQUNWLEtBQUssQ0FBQztJQUNOLEtBQUssQ0FBQztNQUNKLE9BQU8sQ0FBQztJQUNWLEtBQUssQ0FBQztNQUNKLE9BQU8sQ0FBQztJQUNWO01BQ0UsT0FBTyxDQUFDO0VBQ1o7QUFDRjtBQUFDLFNBQUFpQyxtQkFBQSxFQUltQjtFQUNsQlMscUJBQUEsS0FBSSxFQUFBbkYsYUFBQSxFQUFpQixDQUFBNEMscUJBQUEsQ0FBQyxJQUFJLEVBQUE1QyxhQUFBLENBQWM7RUFDeEM0QyxxQkFBQSxLQUFJLEVBQUFqRCxpQkFBQSxFQUFtQm1FLFNBQVMsQ0FBQ2lELE1BQU0sQ0FBQyxlQUFlLENBQUM7QUFDMUQ7QUFBQyxTQUFBbEMsaUJBQUEsRUFFaUI7RUFDaEJNLHFCQUFBLEtBQUksRUFBQWxGLGtCQUFBLEVBQXNCLENBQUEyQyxxQkFBQSxDQUFDLElBQUksRUFBQTNDLGtCQUFBLENBQW1CO0VBQ2xEMkMscUJBQUEsS0FBSSxFQUFBL0Msc0JBQUEsRUFBd0JpRSxTQUFTLENBQUNpRCxNQUFNLENBQUMsZUFBZSxDQUFDO0FBQy9EO0FBT0YsaUVBQWUvRixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFSWTtBQUNKO0FBQ1U7QUFDRjtBQUNJO0FBQ3dDO0FBQUEsSUFBQXFHLGNBQUEsb0JBQUFoSSxPQUFBO0FBQUEsSUFBQWlJLGNBQUEsb0JBQUFqSSxPQUFBO0FBQUEsSUFBQWtJLGVBQUEsb0JBQUFsSSxPQUFBO0FBQUEsSUFBQW1JLGdCQUFBLG9CQUFBbkksT0FBQTtBQUFBLElBQUFvSSxVQUFBLG9CQUFBcEksT0FBQTtBQUFBLElBQUFxSSxVQUFBLG9CQUFBckksT0FBQTtBQUFBLElBQUFzSSxtQkFBQSxvQkFBQXRJLE9BQUE7QUFBQSxJQUFBdUksbUJBQUEsb0JBQUF2SSxPQUFBO0FBQUEsSUFBQXdJLGNBQUEsb0JBQUF4SSxPQUFBO0FBQUEsSUFBQXlJLHlCQUFBLG9CQUFBekksT0FBQTtBQUFBLElBQUEwSSxtQkFBQSxvQkFBQTVILE9BQUE7QUFBQSxJQUFBNkgsc0JBQUEsb0JBQUE3SCxPQUFBO0FBQUEsSUFBQThILHNCQUFBLG9CQUFBOUgsT0FBQTtBQUFBLElBQUErSCxlQUFBLG9CQUFBL0gsT0FBQTtBQUFBLElBQUFnSSxtQkFBQSxvQkFBQWhJLE9BQUE7QUFBQSxJQUFBaUksZUFBQSxvQkFBQWpJLE9BQUE7QUFBQSxJQUFBa0ksZUFBQSxvQkFBQWxJLE9BQUE7QUFBQSxJQUFBbUksaUJBQUEsb0JBQUFuSSxPQUFBO0FBQUEsSUFBQW9JLGlCQUFBLG9CQUFBcEksT0FBQTtBQUFBLElBQUFxSSxvQkFBQSxvQkFBQXJJLE9BQUE7QUFBQSxJQUFBc0ksYUFBQSxvQkFBQXRJLE9BQUE7QUFBQSxJQUFBdUksd0JBQUEsb0JBQUF2SSxPQUFBO0FBQUEsSUFBQXdJLGlCQUFBLG9CQUFBeEksT0FBQTtBQUFBLElBQUF5SSxXQUFBLG9CQUFBekksT0FBQTtBQUFBLElBQUEwSSxRQUFBLG9CQUFBMUksT0FBQTtBQUFBLElBQUEySSxvQkFBQSxvQkFBQTNJLE9BQUE7QUFBQSxJQUFBNEksVUFBQSxvQkFBQTVJLE9BQUE7QUFBQSxJQUFBNkksY0FBQSxvQkFBQTdJLE9BQUE7QUFBQSxJQUFBOEksV0FBQSxvQkFBQTlJLE9BQUE7QUFBQSxJQUFBK0ksaUJBQUEsb0JBQUEvSSxPQUFBO0FBQUEsSUFBQWdKLFVBQUEsb0JBQUFoSixPQUFBO0FBQUEsSUFBQWlKLGdCQUFBLG9CQUFBakosT0FBQTtBQUFBLElBRWxGa0osY0FBYyxnQkFBQXRILFlBQUEsQ0FxQmxCLFNBQUFzSCxlQUFBLEVBQWM7RUFBQW5JLGVBQUEsT0FBQW1JLGNBQUE7RUFBQWxJLDJCQUFBLE9BQUFpSSxnQkFBQTtFQUFBakksMkJBQUEsT0FBQWdJLFVBQUE7RUFBQWhJLDJCQUFBLE9BQUErSCxpQkFBQTtFQUFBL0gsMkJBQUEsT0FBQThILFdBQUE7RUFBQTlILDJCQUFBLE9BQUE2SCxjQUFBO0VBQUE3SCwyQkFBQSxPQUFBNEgsVUFBQTtFQUFBNUgsMkJBQUEsT0FBQTJILG9CQUFBO0VBQUEzSCwyQkFBQSxPQUFBMEgsUUFBQTtFQTRLZDtFQUFBMUgsMkJBQUEsT0FBQXlILFdBQUE7RUFBQXpILDJCQUFBLE9BQUF3SCxpQkFBQTtFQUFBeEgsMkJBQUEsT0FBQXVILHdCQUFBO0VBQUF2SCwyQkFBQSxPQUFBc0gsYUFBQTtFQUFBdEgsMkJBQUEsT0FBQXFILG9CQUFBO0VBQUFySCwyQkFBQSxPQUFBb0gsaUJBQUE7RUFBQXBILDJCQUFBLE9BQUFtSCxpQkFBQTtFQUFBbkgsMkJBQUEsT0FBQWtILGVBQUE7RUFBQWxILDJCQUFBLE9BQUFpSCxlQUFBO0VBQUFqSCwyQkFBQSxPQUFBZ0gsbUJBQUE7RUFBQWhILDJCQUFBLE9BQUErRyxlQUFBO0VBQUEvRywyQkFBQSxPQUFBOEcsc0JBQUE7RUFBQTlHLDJCQUFBLE9BQUE2RyxzQkFBQTtFQWhLQTtFQUFBN0csMkJBQUEsT0FBQTRHLG1CQUFBO0VBQUEzRywwQkFBQSxPQUFBaUcsY0FBQTtJQUFBaEcsUUFBQTtJQUFBQyxLQUFBLEVBaENpQjtFQUFJO0VBQUFGLDBCQUFBLE9BQUFrRyxjQUFBO0lBQUFqRyxRQUFBO0lBQUFDLEtBQUEsRUFFSjtFQUFLO0VBQUFGLDBCQUFBLE9BQUFtRyxlQUFBO0lBQUFsRyxRQUFBO0lBQUFDLEtBQUEsRUFFSjtFQUFLO0VBQUFGLDBCQUFBLE9BQUFvRyxnQkFBQTtJQUFBbkcsUUFBQTtJQUFBQyxLQUFBLEVBRUo7RUFBSTtFQUFBRiwwQkFBQSxPQUFBcUcsVUFBQTtJQUFBcEcsUUFBQTtJQUFBQyxLQUFBLEVBRVY7RUFBSTtFQUFBRiwwQkFBQSxPQUFBc0csVUFBQTtJQUFBckcsUUFBQTtJQUFBQyxLQUFBLEVBRUo7RUFBSTtFQUFBRiwwQkFBQSxPQUFBdUcsbUJBQUE7SUFBQXRHLFFBQUE7SUFBQUMsS0FBQSxFQUVLO0VBQUk7RUFBQUYsMEJBQUEsT0FBQXdHLG1CQUFBO0lBQUF2RyxRQUFBO0lBQUFDLEtBQUEsRUFFSjtFQUFJO0VBQUFGLDBCQUFBLE9BQUF5RyxjQUFBO0lBQUF4RyxRQUFBO0lBQUFDLEtBQUEsRUFFVDtFQUFJO0VBQUFGLDBCQUFBLE9BQUEwRyx5QkFBQTtJQUFBekcsUUFBQTtJQUFBQyxLQUFBLEVBRU87RUFBSTtFQUc5QjZELHFCQUFBLEtBQUksRUFBQTBDLGNBQUEsRUFBa0IsSUFBSTdHLHNEQUFhLENBQUFTLHNCQUFBLENBQUMsSUFBSSxFQUFBMkgsZ0JBQUEsRUFBQUUsaUJBQUEsRUFBQTNILElBQUEsQ0FBSixJQUFJLENBQW1CLENBQUM7RUFDaEV3RCxxQkFBQSxLQUFJLEVBQUF3QyxtQkFBQSxFQUF1QixJQUFJVCwyREFBUyxDQUFDLENBQUM7RUFDMUMvQixxQkFBQSxLQUFJLEVBQUF5QyxtQkFBQSxFQUF1QixJQUFJViwyREFBUyxDQUFDLENBQUM7RUFDMUMvQixxQkFBQSxLQUFJLEVBQUFzQyxVQUFBLEVBQWMsSUFBSVQsd0RBQU0sQ0FBQyxZQUFZLENBQUM7RUFDMUM3QixxQkFBQSxLQUFJLEVBQUF1QyxVQUFBLEVBQWMsSUFBSVYsd0RBQU0sQ0FBQyxZQUFZLENBQUM7RUFDMUM3QixxQkFBQSxLQUFJLEVBQUFrQyxjQUFBLEVBQUF6RSxxQkFBQSxDQUFrQixJQUFJLEVBQUE2RSxVQUFBO0VBQzFCdEMscUJBQUEsS0FBSSxFQUFBMkMseUJBQUEsRUFBNkIsSUFBSVgsNERBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUV2RDFGLHNCQUFBLEtBQUksRUFBQWdILGFBQUEsRUFBQWMsY0FBQSxFQUFBNUgsSUFBQSxDQUFKLElBQUk7QUFDTixDQUFDO0FBQUEsU0FBQTZILHFCQUdtQkMsS0FBSyxFQUFFO0VBQ3pCLElBQUk3RyxxQkFBQSxLQUFJLEVBQUEwRSxjQUFBLE1BQW9CLEtBQUssRUFBRTtFQUVuQyxJQUFNbEMsUUFBUSxHQUFHcUUsS0FBSyxDQUFDQyxNQUFNO0VBRTdCLElBQU1DLFdBQVcsR0FBR3ZFLFFBQVEsQ0FBQ3dFLE9BQU8sQ0FBQ0MsVUFBVSxLQUFLakgscUJBQUEsS0FBSSxFQUFBeUUsY0FBQSxFQUFnQnlDLGFBQWEsQ0FBQyxDQUFDO0VBQ3ZGLElBQU1sRCxZQUFZLEdBQUdoRSxxQkFBQSxLQUFJLEVBQUFpRixjQUFBLEVBQWdCbEYsZUFBZSxDQUFDLENBQUM7RUFFMUQsSUFBTStDLE1BQU0sR0FBR04sUUFBUSxDQUFDd0UsT0FBTyxDQUFDRyxNQUFNO0VBQ3RDLElBQU1wRSxNQUFNLEdBQUdQLFFBQVEsQ0FBQ3dFLE9BQU8sQ0FBQ0ksTUFBTTtFQUV0QyxJQUFNQyxTQUFTLEdBQUcsSUFBSTlDLDREQUFVLENBQUN6QixNQUFNLEVBQUVDLE1BQU0sQ0FBQztFQUVoRCxRQUFBL0MscUJBQUEsQ0FBUSxJQUFJLEVBQUEyRSxlQUFBO0lBQ1YsS0FBSyxLQUFLO01BQUU7UUFDVjtRQUNBLElBQUlvQyxXQUFXLEtBQUssS0FBSyxFQUFFO1FBQzNCbEksc0JBQUEsS0FBSSxFQUFBeUgsaUJBQUEsRUFBQWdCLGtCQUFBLEVBQUF2SSxJQUFBLENBQUosSUFBSSxFQUFtQnNJLFNBQVMsRUFBRXJELFlBQVk7UUFDOUM7TUFDRjtJQUNBLEtBQUssSUFBSTtNQUFFO1FBQ1Q7UUFDQSxJQUFJK0MsV0FBVyxLQUFLLElBQUksRUFBRTtRQUMxQmxJLHNCQUFBLEtBQUksRUFBQXVILGNBQUEsRUFBQW1CLGVBQUEsRUFBQXhJLElBQUEsQ0FBSixJQUFJLEVBQWdCc0ksU0FBUztRQUM3QjtNQUNGO0lBQ0E7TUFDRTtFQUNKO0VBRUEsSUFBSXJILHFCQUFBLEtBQUksRUFBQWlGLGNBQUEsRUFBZ0J1QyxpQkFBaUIsS0FBSyxJQUFJLElBQUl4SCxxQkFBQSxLQUFJLEVBQUE0RSxnQkFBQSxNQUFzQixLQUFLLEVBQUU7SUFDckYvRixzQkFBQSxLQUFJLEVBQUF3RyxzQkFBQSxFQUFBb0MsdUJBQUEsRUFBQTFJLElBQUEsQ0FBSixJQUFJO0VBQ047RUFFQUYsc0JBQUEsS0FBSSxFQUFBZ0gsYUFBQSxFQUFBYyxjQUFBLEVBQUE1SCxJQUFBLENBQUosSUFBSSxFQUFlc0ksU0FBUztBQUM5QjtBQUFDLFNBQUFLLHdCQUFBLEVBRXdCO0VBQ3ZCN0ksc0JBQUEsS0FBSSxFQUFBK0csb0JBQUEsRUFBQStCLHFCQUFBLEVBQUE1SSxJQUFBLENBQUosSUFBSTtBQUNOO0FBQUMsU0FBQTBJLHdCQUFBLEVBRXdCO0VBQ3ZCLElBQUl6SCxxQkFBQSxLQUFJLEVBQUEwRSxjQUFBLE1BQW9CLEtBQUssRUFBRTtFQUVuQyxJQUFJMUUscUJBQUEsS0FBSSxFQUFBMkUsZUFBQSxNQUFxQixJQUFJLEVBQUU7SUFDakM5RixzQkFBQSxLQUFJLEVBQUF5RyxlQUFBLEVBQUFzQyxnQkFBQSxFQUFBN0ksSUFBQSxDQUFKLElBQUk7RUFDTixDQUFDLE1BQU07SUFDTEYsc0JBQUEsS0FBSSxFQUFBMEcsbUJBQUEsRUFBQXNDLG9CQUFBLEVBQUE5SSxJQUFBLENBQUosSUFBSTtFQUNOO0FBQ0Y7QUFBQyxTQUFBNkksaUJBQUEsRUFFaUI7RUFDaEIsSUFBTUUsYUFBYSxHQUFBakosc0JBQUEsQ0FBRyxJQUFJLEVBQUE2RyxpQkFBQSxFQUFBcUMsa0JBQUEsRUFBQWhKLElBQUEsQ0FBSixJQUFJLENBQW9CO0VBRTlDRixzQkFBQSxLQUFJLEVBQUF1SCxjQUFBLEVBQUFtQixlQUFBLEVBQUF4SSxJQUFBLENBQUosSUFBSSxFQUFnQitJLGFBQWE7RUFFakN2RixxQkFBQSxLQUFJLEVBQUEyQyx5QkFBQSxFQUE2QjRDLGFBQWE7QUFDaEQ7QUFBQyxTQUFBRCxxQkFBQSxFQUVxQjtFQUNwQixJQUFJRyxRQUFRLEdBQUcsSUFBSTtFQUNuQixJQUFJQyxlQUFlLEdBQUcsS0FBSztFQUUzQixPQUFPakkscUJBQUEsS0FBSSxFQUFBeUUsY0FBQSxFQUFnQnlELFNBQVMsS0FBSyxDQUFDLEVBQUU7SUFDMUNGLFFBQVEsR0FBQW5KLHNCQUFBLENBQUcsSUFBSSxFQUFBMkcsZUFBQSxFQUFBMkMsZ0JBQUEsRUFBQXBKLElBQUEsQ0FBSixJQUFJLENBQWtCO0lBRWpDa0osZUFBZSxHQUFHRyxPQUFPLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRDFKLHNCQUFBLEtBQUksRUFBQXlILGlCQUFBLEVBQUFnQixrQkFBQSxFQUFBdkksSUFBQSxDQUFKLElBQUksRUFBbUJpSixRQUFRLEVBQUVDLGVBQWU7RUFDbEQ7QUFDRjtBQUFDLFNBQUFFLGlCQUFBLEVBRWlCO0VBQ2hCLElBQU1LLElBQUksR0FBR0gsSUFBSSxDQUFDSSxLQUFLLENBQUNKLElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR3ZJLHFCQUFBLEtBQUksRUFBQWdGLG1CQUFBLEVBQXFCMEQsS0FBSyxHQUFHLENBQUMsQ0FBQztFQUMzRSxJQUFNQyxJQUFJLEdBQUdOLElBQUksQ0FBQ0ksS0FBSyxDQUFDSixJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUd2SSxxQkFBQSxLQUFJLEVBQUFnRixtQkFBQSxFQUFxQjRELE1BQU0sR0FBRyxDQUFDLENBQUM7RUFFNUUsSUFBTVosUUFBUSxHQUFHLElBQUl6RCw0REFBVSxDQUFDaUUsSUFBSSxFQUFFRyxJQUFJLENBQUM7RUFFM0MsT0FBT1gsUUFBUTtBQUNqQjtBQUFDLFNBQUFhLGlCQUVlbEcsS0FBSyxFQUFFO0VBQ3JCLE9BQU8zQyxxQkFBQSxLQUFJLEVBQUF5RSxjQUFBLEVBQWdCcUUsU0FBUyxDQUFDLENBQUMsQ0FDbkNDLElBQUksQ0FBQyxVQUFDQyxZQUFZO0lBQUEsT0FBTXJHLEtBQUssQ0FBQ0csTUFBTSxLQUFLa0csWUFBWSxDQUFDbEcsTUFBTSxJQUFNSCxLQUFLLENBQUNJLE1BQU0sS0FBS2lHLFlBQVksQ0FBQ2pHLE1BQU87RUFBQSxFQUFDO0FBQzdHO0FBQUMsU0FBQWdGLG1CQUFBLEVBRW1CO0VBQ2xCLElBQUlELGFBQWEsR0FBQWpKLHNCQUFBLENBQUcsSUFBSSxFQUFBMkcsZUFBQSxFQUFBMkMsZ0JBQUEsRUFBQXBKLElBQUEsQ0FBSixJQUFJLENBQWtCO0VBRTFDLElBQUlrSyxjQUFjLEdBQUFwSyxzQkFBQSxDQUFHLElBQUksRUFBQTRHLGVBQUEsRUFBQW9ELGdCQUFBLEVBQUE5SixJQUFBLENBQUosSUFBSSxFQUFpQitJLGFBQWEsQ0FBQztFQUV4RCxPQUFPbUIsY0FBYyxFQUFFO0lBQ3JCbkIsYUFBYSxHQUFBakosc0JBQUEsQ0FBRyxJQUFJLEVBQUEyRyxlQUFBLEVBQUEyQyxnQkFBQSxFQUFBcEosSUFBQSxDQUFKLElBQUksQ0FBa0I7SUFDdENrSyxjQUFjLEdBQUFwSyxzQkFBQSxDQUFHLElBQUksRUFBQTRHLGVBQUEsRUFBQW9ELGdCQUFBLEVBQUE5SixJQUFBLENBQUosSUFBSSxFQUFpQitJLGFBQWEsQ0FBQztFQUN0RDtFQUVBLE9BQU9BLGFBQWE7QUFDdEI7QUFBQyxTQUFBb0IsbUJBQUEsRUFFbUI7RUFDbEIsSUFBSWxKLHFCQUFBLEtBQUksRUFBQTBFLGNBQUEsTUFBb0IsSUFBSSxFQUFFO0VBRWxDbkMscUJBQUEsS0FBSSxFQUFBbUMsY0FBQSxFQUFrQixJQUFJO0VBRTFCN0Ysc0JBQUEsS0FBSSxFQUFBZ0gsYUFBQSxFQUFBYyxjQUFBLEVBQUE1SCxJQUFBLENBQUosSUFBSTtBQUNOO0FBQUMsU0FBQTRJLHNCQUFBLEVBRXNCO0VBQ3JCcEYscUJBQUEsS0FBSSxFQUFBbUMsY0FBQSxFQUFrQixLQUFLO0VBQzNCbkMscUJBQUEsS0FBSSxFQUFBb0MsZUFBQSxFQUFtQixLQUFLO0VBQzVCcEMscUJBQUEsS0FBSSxFQUFBd0MsbUJBQUEsRUFBdUIsSUFBSVQsMkRBQVMsQ0FBQyxDQUFDO0VBQzFDL0IscUJBQUEsS0FBSSxFQUFBeUMsbUJBQUEsRUFBdUIsSUFBSVYsMkRBQVMsQ0FBQyxDQUFDO0VBQzFDL0IscUJBQUEsS0FBSSxFQUFBc0MsVUFBQSxFQUFjLElBQUlULHdEQUFNLENBQUMsWUFBWSxDQUFDO0VBQzFDN0IscUJBQUEsS0FBSSxFQUFBdUMsVUFBQSxFQUFjLElBQUlWLHdEQUFNLENBQUMsWUFBWSxDQUFDO0VBQzFDN0IscUJBQUEsS0FBSSxFQUFBa0MsY0FBQSxFQUFBekUscUJBQUEsQ0FBa0IsSUFBSSxFQUFBNkUsVUFBQTtFQUMxQnRDLHFCQUFBLEtBQUksRUFBQXFDLGdCQUFBLEVBQW9CLElBQUk7RUFFNUIvRixzQkFBQSxLQUFJLEVBQUFnSCxhQUFBLEVBQUFjLGNBQUEsRUFBQTVILElBQUEsQ0FBSixJQUFJO0FBQ047QUFBQyxTQUFBNEgsZUFFYXBILGdCQUFnQixFQUFFO0VBQzlCLElBQU1ELGFBQWEsR0FBQVQsc0JBQUEsQ0FBRyxJQUFJLEVBQUFrSCxpQkFBQSxFQUFBb0Qsa0JBQUEsRUFBQXBLLElBQUEsQ0FBSixJQUFJLENBQW9CO0VBRTlDaUIscUJBQUEsS0FBSSxFQUFBaUYsY0FBQSxFQUFnQjVGLFFBQVEsQ0FBQ0MsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQztBQUMvRDtBQUFDLFNBQUE2SiwwQkFFd0J2QyxLQUFLLEVBQUU7RUFDOUIsSUFBTXJFLFFBQVEsR0FBR3FFLEtBQUssQ0FBQ0MsTUFBTTtFQUU3QixJQUFJdEUsUUFBUSxDQUFDd0UsT0FBTyxDQUFDQyxVQUFVLEtBQUtqSCxxQkFBQSxLQUFJLEVBQUF5RSxjQUFBLEVBQWdCeUMsYUFBYSxDQUFDLENBQUMsRUFBRTtFQUV6RSxJQUFNcEUsTUFBTSxHQUFHTixRQUFRLENBQUN3RSxPQUFPLENBQUNHLE1BQU07RUFDdEMsSUFBTXBFLE1BQU0sR0FBR1AsUUFBUSxDQUFDd0UsT0FBTyxDQUFDSSxNQUFNO0VBRXRDLElBQU03SCxnQkFBZ0IsR0FBRyxJQUFJZ0YsNERBQVUsQ0FBQ3pCLE1BQU0sRUFBRUMsTUFBTSxDQUFDO0VBRXZEbEUsc0JBQUEsS0FBSSxFQUFBZ0gsYUFBQSxFQUFBYyxjQUFBLEVBQUE1SCxJQUFBLENBQUosSUFBSSxFQUFlUSxnQkFBZ0I7QUFDckM7QUFBQyxTQUFBNEosbUJBQUEsRUFFbUI7RUFBQSxJQUFBRSxxQkFBQTtFQUNsQixJQUFNQyxvQkFBb0IsR0FBRyxJQUFJOUUsMEZBQW9CLENBQUMsQ0FBQztFQUV2RCxJQUFNbEYsYUFBYSxHQUFHZ0ssb0JBQW9CLENBQ3ZDQyxrQkFBa0IsQ0FBQ3ZKLHFCQUFBLEtBQUksRUFBQXlFLGNBQUEsRUFBZ0J5QyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQ3ZEc0MsZ0JBQWdCLENBQUF4SixxQkFBQSxDQUFDLElBQUksRUFBQTBFLGNBQUEsQ0FBZSxDQUFDLENBQ3JDK0UsaUJBQWlCLENBQUF6SixxQkFBQSxDQUFDLElBQUksRUFBQTJFLGVBQUEsQ0FBZ0IsQ0FBQyxDQUN2QytFLGtCQUFrQixDQUFBMUoscUJBQUEsQ0FBQyxJQUFJLEVBQUE0RSxnQkFBQSxDQUFpQixDQUFDLENBQ3pDK0Usb0JBQW9CLENBQUMzSixxQkFBQSxLQUFJLEVBQUE2RSxVQUFBLEVBQVlxQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQ3JEMEMsb0JBQW9CLENBQUM1SixxQkFBQSxLQUFJLEVBQUE4RSxVQUFBLEVBQVlvQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQ3JEMkMseUJBQXlCLENBQUM3SixxQkFBQSxLQUFJLEVBQUErRSxtQkFBQSxFQUFxQitFLGdCQUFnQixDQUFDOUoscUJBQUEsS0FBSSxFQUFBNkUsVUFBQSxFQUFZcUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JHNkMseUJBQXlCLENBQUMvSixxQkFBQSxLQUFJLEVBQUFnRixtQkFBQSxFQUFxQjhFLGdCQUFnQixDQUFDOUoscUJBQUEsS0FBSSxFQUFBOEUsVUFBQSxFQUFZb0MsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JHOEMscUJBQXFCLENBQUNoSyxxQkFBQSxLQUFJLEVBQUE2RSxVQUFBLEVBQVlxRCxTQUFTLENBQUMsQ0FDaEQrQixxQkFBcUIsQ0FBQ2pLLHFCQUFBLEtBQUksRUFBQThFLFVBQUEsRUFBWW9ELFNBQVMsQ0FBQyxDQUNoRGdDLHlCQUF5QixDQUFDbEsscUJBQUEsS0FBSSxFQUFBeUUsY0FBQSxFQUFnQnlELFNBQVMsQ0FBQyxDQUN4RGlDLGFBQWEsRUFBQWQscUJBQUEsR0FBQXhLLHNCQUFBLENBQUMsSUFBSSxFQUFBc0gsVUFBQSxFQUFBaUUsV0FBQSxFQUFBckwsSUFBQSxDQUFKLElBQUksZUFBQXNLLHFCQUFBLHVCQUFKQSxxQkFBQSxDQUFtQm5DLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FDakRtRCxLQUFLLENBQUMsQ0FBQztFQUVWLE9BQU8vSyxhQUFhO0FBQ3RCO0FBQUMsU0FBQWdMLGFBQUEsRUFHYTtFQUNaLElBQUl0SyxxQkFBQSxLQUFJLEVBQUE2RSxVQUFBLEVBQVkwRixRQUFRLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxJQUFJeEsscUJBQUEsS0FBSSxFQUFBOEUsVUFBQSxFQUFZeUYsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtJQUN0RmpJLHFCQUFBLEtBQUksRUFBQW9DLGVBQUEsRUFBbUIsSUFBSTtJQUMzQnBDLHFCQUFBLEtBQUksRUFBQXFDLGdCQUFBLEVBQW9CLElBQUk7RUFDOUI7QUFDRjtBQUFDLFNBQUE2RixVQUVRQyxZQUFZLEVBQUU7RUFDckIsSUFBSUEsWUFBWSxLQUFLLElBQUksRUFBRTtFQUUzQm5JLHFCQUFBLEtBQUksRUFBQW1DLGNBQUEsRUFBa0IsS0FBSztFQUMzQm5DLHFCQUFBLEtBQUksRUFBQW9DLGVBQUEsRUFBbUIsS0FBSztBQUM5QjtBQUFDLFNBQUFnRyxzQkFBQSxFQUVzQjtFQUNyQixJQUFBM0sscUJBQUEsQ0FBSSxJQUFJLEVBQUE0RSxnQkFBQSxHQUFtQjtJQUN6QnJDLHFCQUFBLEtBQUksRUFBQWtDLGNBQUEsRUFBQXpFLHFCQUFBLENBQWtCLElBQUksRUFBQThFLFVBQUE7RUFDNUIsQ0FBQyxNQUFNO0lBQ0x2QyxxQkFBQSxLQUFJLEVBQUFrQyxjQUFBLEVBQUF6RSxxQkFBQSxDQUFrQixJQUFJLEVBQUE2RSxVQUFBO0VBQzVCO0VBRUF0QyxxQkFBQSxLQUFJLEVBQUFxQyxnQkFBQSxFQUFvQixDQUFBNUUscUJBQUEsQ0FBQyxJQUFJLEVBQUE0RSxnQkFBQSxDQUFpQjtBQUNoRDtBQUFDLFNBQUF3RixZQUFBLEVBRVk7RUFDWCxJQUFHcEsscUJBQUEsS0FBSSxFQUFBNkUsVUFBQSxFQUFZcUQsU0FBUyxLQUFLLENBQUMsSUFBSWxJLHFCQUFBLEtBQUksRUFBQThFLFVBQUEsRUFBWW9ELFNBQVMsS0FBSyxDQUFDLEVBQUUsT0FBTyxJQUFJO0VBRWxGLElBQUlsSSxxQkFBQSxLQUFJLEVBQUErRSxtQkFBQSxFQUFxQjZGLFlBQVksQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ3BELE9BQUE1SyxxQkFBQSxDQUFPLElBQUksRUFBQThFLFVBQUE7RUFDYjtFQUVBLElBQUk5RSxxQkFBQSxLQUFJLEVBQUFnRixtQkFBQSxFQUFxQjRGLFlBQVksQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ3BELE9BQUE1SyxxQkFBQSxDQUFPLElBQUksRUFBQTZFLFVBQUE7RUFDYjtFQUVBLE9BQU8sSUFBSTtBQUNiO0FBQUMsU0FBQTBDLGdCQUVjNUUsS0FBSyxFQUFFO0VBQ3BCLElBQU1rSSxZQUFZLEdBQUFoTSxzQkFBQSxDQUFHLElBQUksRUFBQXdILFdBQUEsRUFBQXlFLFlBQUEsRUFBQS9MLElBQUEsQ0FBSixJQUFJLEVBQWE0RCxLQUFLLENBQUM7RUFDNUM5RCxzQkFBQSxLQUFJLEVBQUFxSCxvQkFBQSxFQUFBeUUscUJBQUEsRUFBQTVMLElBQUEsQ0FBSixJQUFJO0VBRUosSUFBTWdNLE1BQU0sR0FBQWxNLHNCQUFBLENBQUcsSUFBSSxFQUFBc0gsVUFBQSxFQUFBaUUsV0FBQSxFQUFBckwsSUFBQSxDQUFKLElBQUksQ0FBYTtFQUVoQyxJQUFJZ00sTUFBTSxLQUFLLElBQUksRUFBRTtJQUNuQmxNLHNCQUFBLEtBQUksRUFBQW9ILFFBQUEsRUFBQXdFLFNBQUEsRUFBQTFMLElBQUEsQ0FBSixJQUFJLEVBQVVnTSxNQUFNO0VBQ3RCO0VBRUEsT0FBT0YsWUFBWTtBQUNyQjtBQUFDLFNBQUFDLGFBRVduSSxLQUFLLEVBQUU7RUFDakIsSUFBSTNDLHFCQUFBLEtBQUksRUFBQTJFLGVBQUEsTUFBcUIsS0FBSyxFQUFFLE9BQU8sS0FBSztFQUVoRCxJQUFJcUcsWUFBWSxHQUFHLElBQUk7RUFFdkIsSUFBQWhMLHFCQUFBLENBQUksSUFBSSxFQUFBNEUsZ0JBQUEsR0FBbUI7SUFDekJvRyxZQUFZLEdBQUFoTCxxQkFBQSxDQUFHLElBQUksRUFBQWdGLG1CQUFBLENBQW9CO0VBQ3pDLENBQUMsTUFBTTtJQUNMZ0csWUFBWSxHQUFBaEwscUJBQUEsQ0FBRyxJQUFJLEVBQUErRSxtQkFBQSxDQUFvQjtFQUN6QztFQUVBL0UscUJBQUEsS0FBSSxFQUFBeUUsY0FBQSxFQUFnQndHLE1BQU0sQ0FBQ3RJLEtBQUssQ0FBQztFQUNqQ3FJLFlBQVksQ0FBQ0UsYUFBYSxDQUFDdkksS0FBSyxDQUFDO0VBRWpDLE9BQU8sSUFBSTtBQUNiO0FBQUMsU0FBQTJFLG1CQUVpQjNFLEtBQUssRUFBRXFCLFlBQVksRUFBRTtFQUNyQyxJQUFNbUgsTUFBTSxHQUFBdE0sc0JBQUEsQ0FBRyxJQUFJLEVBQUEwSCxVQUFBLEVBQUE2RSxXQUFBLEVBQUFyTSxJQUFBLENBQUosSUFBSSxFQUFZNEQsS0FBSyxFQUFFcUIsWUFBWSxDQUFDO0VBRW5EbkYsc0JBQUEsS0FBSSxFQUFBbUgsV0FBQSxFQUFBc0UsWUFBQSxFQUFBdkwsSUFBQSxDQUFKLElBQUk7RUFFSixPQUFPb00sTUFBTTtBQUNmO0FBQUMsU0FBQUMsWUFFVXpJLEtBQUssRUFBRXFCLFlBQVksRUFBRTtFQUM5QixJQUFBaEUscUJBQUEsQ0FBSSxJQUFJLEVBQUEyRSxlQUFBLEdBQWtCLE9BQU8sS0FBSztFQUN0QyxJQUFJcUcsWUFBWSxHQUFHLElBQUk7RUFDdkIsSUFBSUssT0FBTyxHQUFHLElBQUk7RUFDbEIsSUFBSUMsUUFBUSxHQUFHLEtBQUs7RUFFcEIsSUFBQXRMLHFCQUFBLENBQUksSUFBSSxFQUFBNEUsZ0JBQUEsR0FBbUI7SUFDekJvRyxZQUFZLEdBQUFoTCxxQkFBQSxDQUFHLElBQUksRUFBQStFLG1CQUFBLENBQW9CO0VBQ3pDLENBQUMsTUFBTTtJQUNMaUcsWUFBWSxHQUFBaEwscUJBQUEsQ0FBRyxJQUFJLEVBQUFnRixtQkFBQSxDQUFvQjtFQUN6Qzs7RUFFQTtFQUNBLFFBQVFoRixxQkFBQSxLQUFJLEVBQUF5RSxjQUFBLEVBQWdCOEYsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsTUFBTTtJQUMzQyxLQUFLLENBQUM7TUFBRTtRQUNOYSxPQUFPLEdBQUcsSUFBSWhILHNEQUFJLENBQUMxQixLQUFLLEVBQUVxQixZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzFDc0gsUUFBUSxHQUFHTixZQUFZLENBQUNPLFNBQVMsQ0FBQ0YsT0FBTyxFQUFFckgsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUMzRDtNQUNGO0lBQ0EsS0FBSyxDQUFDO01BQUU7UUFDTnFILE9BQU8sR0FBRyxJQUFJaEgsc0RBQUksQ0FBQzFCLEtBQUssRUFBRXFCLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDMUNzSCxRQUFRLEdBQUdOLFlBQVksQ0FBQ08sU0FBUyxDQUFDRixPQUFPLEVBQUVySCxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzNEO01BQ0Y7SUFDQSxLQUFLLENBQUM7TUFBRTtRQUNOcUgsT0FBTyxHQUFHLElBQUloSCxzREFBSSxDQUFDMUIsS0FBSyxFQUFFcUIsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUMxQ3NILFFBQVEsR0FBR04sWUFBWSxDQUFDTyxTQUFTLENBQUNGLE9BQU8sRUFBRXJILFlBQVksRUFBRSxDQUFDLENBQUM7UUFDM0Q7TUFDRjtJQUNBLEtBQUssQ0FBQztNQUFFO1FBQ05xSCxPQUFPLEdBQUcsSUFBSWhILHNEQUFJLENBQUMxQixLQUFLLEVBQUVxQixZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzFDc0gsUUFBUSxHQUFHTixZQUFZLENBQUNPLFNBQVMsQ0FBQ0YsT0FBTyxFQUFFckgsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUMzRDtNQUNGO0lBQ0EsS0FBSyxDQUFDO01BQUU7UUFDTnFILE9BQU8sR0FBRyxJQUFJaEgsc0RBQUksQ0FBQzFCLEtBQUssRUFBRXFCLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDMUNzSCxRQUFRLEdBQUdOLFlBQVksQ0FBQ08sU0FBUyxDQUFDRixPQUFPLEVBQUVySCxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzNEO01BQ0Y7SUFDQTtNQUNFO0VBQ0o7O0VBRUE7RUFDQSxJQUFJc0gsUUFBUSxFQUFFO0lBQ1p0TCxxQkFBQSxLQUFJLEVBQUF5RSxjQUFBLEVBQWdCK0csT0FBTyxDQUFDSCxPQUFPLENBQUM7SUFFcEMsSUFBSXJMLHFCQUFBLEtBQUksRUFBQXlFLGNBQUEsRUFBZ0I4RixRQUFRLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQy9DM0wsc0JBQUEsS0FBSSxFQUFBcUgsb0JBQUEsRUFBQXlFLHFCQUFBLEVBQUE1TCxJQUFBLENBQUosSUFBSTtJQUNOO0lBRUEsT0FBTyxJQUFJO0VBQ2I7RUFFQSxPQUFPLEtBQUs7QUFDZDtBQUFDLFNBQUEySCxrQkFBQSxFQUVrQjtFQUNqQixPQUFPO0lBQ0w3RSxnQkFBZ0IsRUFBRWhELHNCQUFBLEtBQUksRUFBQThHLGlCQUFBLEVBQUF1RCxrQkFBQSxFQUFtQm5ILElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkQvQyxrQkFBa0IsRUFBRUgsc0JBQUEsS0FBSSxFQUFBc0csbUJBQUEsRUFBQXlCLG9CQUFBLEVBQXFCN0UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2REMsbUJBQW1CLEVBQUVuRCxzQkFBQSxLQUFJLEVBQUErRyxvQkFBQSxFQUFBK0IscUJBQUEsRUFBc0I1RixJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pEOUMsdUJBQXVCLEVBQUVKLHNCQUFBLEtBQUksRUFBQWlILHdCQUFBLEVBQUFzRCx5QkFBQSxFQUEwQnJILElBQUksQ0FBQyxJQUFJLENBQUM7SUFDakVHLHFCQUFxQixFQUFFckQsc0JBQUEsS0FBSSxFQUFBdUcsc0JBQUEsRUFBQXNDLHVCQUFBLEVBQXdCM0YsSUFBSSxDQUFDLElBQUk7RUFDOUQsQ0FBQztBQUNIO0FBR0YsaUVBQWUwRSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pWUztBQUNGO0FBQUEsSUFBQWdGLE1BQUEsb0JBQUFoUCxPQUFBO0FBQUEsSUFBQWlQLEtBQUEsb0JBQUFqUCxPQUFBO0FBQUEsSUFBQWtQLFdBQUEsb0JBQUFsUCxPQUFBO0FBQUEsSUFBQW1QLFdBQUEsb0JBQUFuUCxPQUFBO0FBQUEsSUFFOUJvUCxTQUFTO0VBU1gsU0FBQUEsVUFBWS9JLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQUF6RSxlQUFBLE9BQUF1TixTQUFBO0lBQUFyTiwwQkFBQSxPQUFBaU4sTUFBQTtNQUFBaE4sUUFBQTtNQUFBQyxLQUFBLEVBUm5CO0lBQUk7SUFBQUYsMEJBQUEsT0FBQWtOLEtBQUE7TUFBQWpOLFFBQUE7TUFBQUMsS0FBQSxFQUVMO0lBQUk7SUFBQUYsMEJBQUEsT0FBQW1OLFdBQUE7TUFBQWxOLFFBQUE7TUFBQUMsS0FBQSxFQUVFO0lBQUs7SUFBQUYsMEJBQUEsT0FBQW9OLFdBQUE7TUFBQW5OLFFBQUE7TUFBQUMsS0FBQSxFQUVMO0lBQUs7SUFHZjZELHFCQUFBLEtBQUksRUFBQWtKLE1BQUEsRUFBVSxJQUFJbEgsbURBQVUsQ0FBQ3pCLE1BQU0sRUFBRUMsTUFBTSxDQUFDO0VBQ2hEO0VBQUM1RCxZQUFBLENBQUEwTSxTQUFBO0lBQUF6TSxHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBb04sT0FBT0MsSUFBSSxFQUFFO01BQ1QsSUFBQS9MLHFCQUFBLENBQUksSUFBSSxFQUFBMEwsS0FBQSxHQUFRLE9BQU8sS0FBSztNQUU1Qm5KLHFCQUFBLEtBQUksRUFBQW9KLFdBQUEsRUFBZSxJQUFJO01BQ3ZCcEoscUJBQUEsS0FBSSxFQUFBbUosS0FBQSxFQUFTSyxJQUFJO01BRWpCLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQTNNLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUFzTixJQUFBLEVBQU07TUFDRixJQUFJaE0scUJBQUEsS0FBSSxFQUFBNEwsV0FBQSxNQUFpQixJQUFJLEVBQUUsT0FBTyxLQUFLO01BRTNDckoscUJBQUEsS0FBSSxFQUFBcUosV0FBQSxFQUFlLElBQUk7TUFFdkIsSUFBQTVMLHFCQUFBLENBQUksSUFBSSxFQUFBMEwsS0FBQSxHQUFRO1FBQ1oxTCxxQkFBQSxLQUFJLEVBQUEwTCxLQUFBLEVBQU9PLE1BQU0sQ0FBQWpNLHFCQUFBLENBQUMsSUFBSSxFQUFBeUwsTUFBQSxDQUFPLENBQUM7TUFDbEM7TUFFQSxPQUFPLElBQUk7SUFDZjtFQUFDO0lBQUFyTSxHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBa0UsU0FBQSxFQUFXO01BQUUsT0FBQTVDLHFCQUFBLENBQU8sSUFBSSxFQUFBeUwsTUFBQTtJQUFTO0VBQUM7SUFBQXJNLEdBQUE7SUFBQVYsS0FBQSxFQUVsQyxTQUFBd04sZUFBQSxFQUFpQjtNQUNiLGFBQUE1SyxNQUFBLENBQWF0QixxQkFBQSxLQUFJLEVBQUF5TCxNQUFBLEVBQVEzSSxNQUFNLFVBQUF4QixNQUFBLENBQU90QixxQkFBQSxLQUFJLEVBQUF5TCxNQUFBLEVBQVExSSxNQUFNO0lBQzVEO0VBQUM7SUFBQTNELEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUF5RSxhQUFBLEVBQWU7TUFDWCxRQUFBbkQscUJBQUEsQ0FBUSxJQUFJLEVBQUE0TCxXQUFBO1FBQ1IsS0FBSyxLQUFLO1VBQUU7WUFDUixPQUFPclAsc0RBQVMsQ0FBQyxDQUFDLENBQUM2RyxPQUFPO1VBQzlCO1FBQ0EsS0FBSyxJQUFJO1VBQUU7WUFDUCxJQUFBcEQscUJBQUEsQ0FBSSxJQUFJLEVBQUEwTCxLQUFBLEdBQVE7Y0FDWixPQUFPblAsc0RBQVMsQ0FBQyxDQUFDLENBQUNnSCxRQUFRO1lBQy9CO1lBRUEsT0FBT2hILHNEQUFTLENBQUMsQ0FBQyxDQUFDaUgsUUFBUTtVQUMvQjtRQUNBO1VBQ0ksT0FBTyxJQUFJO01BQ25CO0lBQ0o7RUFBQztJQUFBcEUsR0FBQTtJQUFBYSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFpQjtNQUFFLE9BQUFELHFCQUFBLENBQU8sSUFBSSxFQUFBMkwsV0FBQTtJQUFjO0VBQUM7RUFBQSxPQUFBRSxTQUFBO0FBQUE7QUFHakQsaUVBQWVBLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDL0RsQnRILFVBQVU7RUFLWixTQUFBQSxXQUFZekIsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFBQXpFLGVBQUEsT0FBQWlHLFVBQUE7SUFBQS9GLDBCQUFBLE9BQUEyTixPQUFBO01BQUExTixRQUFBO01BQUFDLEtBQUEsRUFKbEI7SUFBQztJQUFBRiwwQkFBQSxPQUFBNE4sT0FBQTtNQUFBM04sUUFBQTtNQUFBQyxLQUFBLEVBRUQ7SUFBQztJQUdQNkQscUJBQUEsS0FBSSxFQUFBNEosT0FBQSxFQUFXckosTUFBTTtJQUNyQlAscUJBQUEsS0FBSSxFQUFBNkosT0FBQSxFQUFXckosTUFBTTtFQUN6QjtFQUFDNUQsWUFBQSxDQUFBb0YsVUFBQTtJQUFBbkYsR0FBQTtJQUFBYSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFhO01BQUUsT0FBT29NLE1BQU0sQ0FBQ0MsUUFBUSxDQUFBdE0scUJBQUEsQ0FBQyxJQUFJLEVBQUFtTSxPQUFBLEdBQVUsRUFBRSxDQUFDO0lBQUU7RUFBQztJQUFBL00sR0FBQTtJQUFBYSxHQUFBLEVBRTFELFNBQUFBLElBQUEsRUFBYTtNQUFFLE9BQU9vTSxNQUFNLENBQUNDLFFBQVEsQ0FBQXRNLHFCQUFBLENBQUMsSUFBSSxFQUFBb00sT0FBQSxHQUFVLEVBQUUsQ0FBQztJQUFFO0VBQUM7RUFBQSxPQUFBN0gsVUFBQTtBQUFBO0FBRzlELGlFQUFlQSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZXO0FBQzBDO0FBQUEsSUFBQWlJLE1BQUEsb0JBQUEvUCxPQUFBO0FBQUEsSUFBQWdRLE9BQUEsb0JBQUFoUSxPQUFBO0FBQUEsSUFBQWlRLE1BQUEsb0JBQUFqUSxPQUFBO0FBQUEsSUFBQWtRLFNBQUEsb0JBQUFsUSxPQUFBO0FBQUEsSUFBQW1RLFNBQUEsb0JBQUFyUCxPQUFBO0FBQUEsSUFBQUksVUFBQSxvQkFBQUosT0FBQTtBQUFBLElBRXhFK0csU0FBUztFQVVYLFNBQUFBLFVBQUEsRUFBYztJQUFBaEcsZUFBQSxPQUFBZ0csU0FBQTtJQUFBL0YsMkJBQUEsT0FBQVosVUFBQTtJQUFBWSwyQkFBQSxPQUFBcU8sU0FBQTtJQUFBcE8sMEJBQUEsT0FBQWdPLE1BQUE7TUFBQS9OLFFBQUE7TUFBQUMsS0FBQSxFQVRMO0lBQUU7SUFBQUYsMEJBQUEsT0FBQWlPLE9BQUE7TUFBQWhPLFFBQUE7TUFBQUMsS0FBQSxFQUVEO0lBQUU7SUFBQUYsMEJBQUEsT0FBQWtPLE1BQUE7TUFBQWpPLFFBQUE7TUFBQUMsS0FBQSxFQUVIO0lBQUU7SUFFWDtJQUFBRiwwQkFBQSxPQUFBbU8sU0FBQTtNQUFBbE8sUUFBQTtNQUFBQyxLQUFBLEVBQ1k7SUFBRTtJQUdWRyxzQkFBQSxLQUFJLEVBQUFsQixVQUFBLEVBQUFtQixXQUFBLEVBQUFDLElBQUEsQ0FBSixJQUFJO0VBQ1I7RUFBQ0ksWUFBQSxDQUFBbUYsU0FBQTtJQUFBbEYsR0FBQTtJQUFBVixLQUFBLEVBRUQsU0FBQTZNLFVBQVVRLElBQUksRUFBRS9ILFlBQVksRUFBRXdHLE1BQU0sRUFBRTtNQUNsQyxJQUFJLENBQUEzTCxzQkFBQSxDQUFDLElBQUksRUFBQStOLFNBQUEsRUFBQUMsVUFBQSxFQUFBOU4sSUFBQSxDQUFKLElBQUksRUFBV2dOLElBQUksQ0FBQ2UsYUFBYSxDQUFDLENBQUMsRUFBRTlJLFlBQVksRUFBRXdHLE1BQU0sQ0FBQyxFQUFFLE9BQU8sS0FBSztNQUM3RXhLLHFCQUFBLEtBQUksRUFBQTJNLFNBQUEsRUFBV0ksSUFBSSxDQUFDaEIsSUFBSSxDQUFDO01BRXpCLElBQUkvSCxZQUFZLEtBQUssSUFBSSxFQUFFO1FBQ3ZCLEtBQUssSUFBSTFELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2tLLE1BQU0sRUFBRWxLLENBQUMsSUFBSSxDQUFDLEVBQUU7VUFDaEMsSUFBTTBNLFNBQVMsR0FBR2hOLHFCQUFBLEtBQUksRUFBQTBNLE1BQUEsRUFBUVgsSUFBSSxDQUFDZSxhQUFhLENBQUMsQ0FBQyxDQUFDL0osTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFFZ0osSUFBSSxDQUFDZSxhQUFhLENBQUMsQ0FBQyxDQUFDaEssTUFBTSxHQUFHLENBQUMsR0FBSXhDLENBQUMsQ0FBQztVQUNyRzBNLFNBQVMsQ0FBQ2xCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1FBQzFCO01BQ0osQ0FBQyxNQUFNO1FBQ0gsS0FBSyxJQUFJekwsRUFBQyxHQUFHLENBQUMsRUFBRUEsRUFBQyxHQUFHa0ssTUFBTSxFQUFFbEssRUFBQyxJQUFJLENBQUMsRUFBRTtVQUNoQyxJQUFNME0sVUFBUyxHQUFHaE4scUJBQUEsS0FBSSxFQUFBME0sTUFBQSxFQUFTWCxJQUFJLENBQUNlLGFBQWEsQ0FBQyxDQUFDLENBQUMvSixNQUFNLEdBQUcsQ0FBQyxHQUFJekMsRUFBQyxDQUFDLENBQUN5TCxJQUFJLENBQUNlLGFBQWEsQ0FBQyxDQUFDLENBQUNoSyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1VBQ3JHa0ssVUFBUyxDQUFDbEIsTUFBTSxDQUFDQyxJQUFJLENBQUM7UUFDMUI7TUFDSjtNQUVBLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQTNNLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUF3TSxjQUFjdkksS0FBSyxFQUFFO01BQ2pCLE9BQU8zQyxxQkFBQSxLQUFJLEVBQUEwTSxNQUFBLEVBQVEvSixLQUFLLENBQUNJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQ0osS0FBSyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUNrSixHQUFHLENBQUMsQ0FBQztJQUNoRTtFQUFDO0lBQUE1TSxHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBb0wsaUJBQWlCN0ksY0FBYyxFQUFFO01BQzdCLElBQU1nTSxvQkFBb0IsR0FBRyxJQUFJVixpRkFBb0IsQ0FBQyxDQUFDO01BRXZELElBQU1XLGFBQWEsR0FBR0Qsb0JBQW9CLENBQUNFLFlBQVksQ0FBQW5OLHFCQUFBLENBQUMsSUFBSSxFQUFBME0sTUFBQSxDQUFPLENBQUMsQ0FDbkVVLGlCQUFpQixDQUFDbk0sY0FBYyxDQUFDLENBQ2pDb00sZUFBZSxDQUFDLElBQUksQ0FBQ3pDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FDcENQLEtBQUssQ0FBQyxDQUFDO01BRVIsT0FBTzZDLGFBQWE7SUFDeEI7RUFBQztJQUFBOU4sR0FBQTtJQUFBVixLQUFBLEVBRUQsU0FBQWtNLGFBQUEsRUFBZTtNQUNYLE9BQU81SyxxQkFBQSxLQUFJLEVBQUEyTSxTQUFBLEVBQVdXLEtBQUssQ0FBQyxVQUFBdkIsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ3dCLE1BQU0sQ0FBQyxDQUFDO01BQUEsRUFBQztJQUN0RDtFQUFDO0lBQUFuTyxHQUFBO0lBQUFhLEdBQUEsRUF3REQsU0FBQUEsSUFBQSxFQUFZO01BQUUsT0FBQUQscUJBQUEsQ0FBTyxJQUFJLEVBQUF3TSxNQUFBO0lBQU87RUFBQztJQUFBcE4sR0FBQTtJQUFBYSxHQUFBLEVBRWpDLFNBQUFBLElBQUEsRUFBYTtNQUFFLE9BQUFELHFCQUFBLENBQU8sSUFBSSxFQUFBeU0sT0FBQTtJQUFRO0VBQUM7RUFBQSxPQUFBbkksU0FBQTtBQUFBO0FBQUEsU0FBQXVJLFdBeER6QlcsVUFBVSxFQUFFeEosWUFBWSxFQUFFd0csTUFBTSxFQUFFO0VBQ3hDLFFBQVF4RyxZQUFZO0lBQ2hCLEtBQUssSUFBSTtNQUFFO1FBQ1A7UUFDQSxJQUFLd0osVUFBVSxDQUFDMUssTUFBTSxHQUFHLENBQUMsR0FBSTBILE1BQU0sR0FBQXhLLHFCQUFBLENBQUcsSUFBSSxFQUFBd00sTUFBQSxDQUFPLEVBQUU7VUFDaEQsT0FBTyxLQUFLO1FBQ2hCO1FBRUEsS0FBSyxJQUFJbE0sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHa0ssTUFBTSxFQUFFbEssQ0FBQyxJQUFJLENBQUMsRUFBRTtVQUNoQyxJQUFNME0sU0FBUyxHQUFHaE4scUJBQUEsS0FBSSxFQUFBME0sTUFBQSxFQUFRYyxVQUFVLENBQUN6SyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUV5SyxVQUFVLENBQUMxSyxNQUFNLEdBQUcsQ0FBQyxHQUFJeEMsQ0FBQyxDQUFDO1VBRWpGLElBQUkwTSxTQUFTLENBQUN2SixVQUFVLEtBQUssSUFBSSxFQUFFO1lBQy9CLE9BQU8sS0FBSztVQUNoQjtRQUNKO1FBRUEsT0FBTyxJQUFJO01BQ2Y7SUFDQSxLQUFLLEtBQUs7TUFBRTtRQUNSO1FBQ0EsSUFBSytKLFVBQVUsQ0FBQ3pLLE1BQU0sR0FBRyxDQUFDLEdBQUl5SCxNQUFNLEdBQUF4SyxxQkFBQSxDQUFHLElBQUksRUFBQXlNLE9BQUEsQ0FBUSxFQUFFO1VBQ2pELE9BQU8sS0FBSztRQUNoQjtRQUVBLEtBQUssSUFBSW5NLEdBQUMsR0FBRyxDQUFDLEVBQUVBLEdBQUMsR0FBR2tLLE1BQU0sRUFBRWxLLEdBQUMsSUFBSSxDQUFDLEVBQUU7VUFDaEMsSUFBTTBNLFdBQVMsR0FBR2hOLHFCQUFBLEtBQUksRUFBQTBNLE1BQUEsRUFBU2MsVUFBVSxDQUFDekssTUFBTSxHQUFHLENBQUMsR0FBSXpDLEdBQUMsQ0FBQyxDQUFDa04sVUFBVSxDQUFDMUssTUFBTSxHQUFHLENBQUMsQ0FBQztVQUVqRixJQUFJa0ssV0FBUyxDQUFDdkosVUFBVSxLQUFLLElBQUksRUFBRTtZQUMvQixPQUFPLEtBQUs7VUFDaEI7UUFDSjtRQUVBLE9BQU8sSUFBSTtNQUNmO0lBQ0E7TUFDSSxPQUFPLEtBQUs7RUFDcEI7QUFDSjtBQUFDLFNBQUEzRSxZQUFBLEVBRVk7RUFDVCxJQUFJa0IscUJBQUEsS0FBSSxFQUFBME0sTUFBQSxFQUFRbEMsTUFBTSxLQUFLLENBQUMsRUFBRTtFQUU5QixLQUFLLElBQUlpRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUF6TixxQkFBQSxDQUFHLElBQUksRUFBQXdNLE1BQUEsQ0FBTyxFQUFFaUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNyQ3pOLHFCQUFBLEtBQUksRUFBQTBNLE1BQUEsRUFBUUssSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUVwQixLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBQTFOLHFCQUFBLENBQUcsSUFBSSxFQUFBeU0sT0FBQSxDQUFRLEVBQUVpQixDQUFDLElBQUksQ0FBQyxFQUFFO01BQ3RDO01BQ0EsSUFBTUMsU0FBUyxHQUFHLElBQUk5QixrREFBUyxDQUFDNkIsQ0FBQyxHQUFHLENBQUMsRUFBRUQsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUU3Q3pOLHFCQUFBLEtBQUksRUFBQTBNLE1BQUEsRUFBUWUsQ0FBQyxDQUFDLENBQUNWLElBQUksQ0FBQ1ksU0FBUyxDQUFDO0lBQ2xDO0VBQ0o7QUFDSjtBQU9KLGlFQUFlckosU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUNsSHhCLFNBQVMvSCxTQUFTQSxDQUFBLEVBQUc7RUFDakIsSUFBTTZHLE9BQU8sR0FBRyxTQUFTO0VBQ3pCLElBQU1JLFFBQVEsR0FBRyxVQUFVO0VBQzNCLElBQU1ELFFBQVEsR0FBRyxVQUFVO0VBQzNCLElBQU1xSyxhQUFhLEdBQUcsZUFBZTtFQUVyQyxPQUFPO0lBQ0h4SyxPQUFPLEVBQVBBLE9BQU87SUFDUEksUUFBUSxFQUFSQSxRQUFRO0lBQ1JELFFBQVEsRUFBUkEsUUFBUTtJQUNScUssYUFBYSxFQUFiQTtFQUNKLENBQUM7QUFDTDtBQUFDO0FBRUQsaUVBQWVyUixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNkbEI2SCxNQUFNO0VBT1YsU0FBQUEsT0FBWXlKLFFBQVEsRUFBRTtJQUFBdlAsZUFBQSxPQUFBOEYsTUFBQTtJQUFBNUYsMEJBQUEsT0FBQXNQLFdBQUE7TUFBQXJQLFFBQUE7TUFBQUMsS0FBQSxFQU5SO0lBQUU7SUFBQUYsMEJBQUEsT0FBQXVQLE9BQUE7TUFBQXRQLFFBQUE7TUFBQUMsS0FBQSxFQUVOO0lBQUU7SUFBQUYsMEJBQUEsT0FBQXdQLFlBQUE7TUFBQXZQLFFBQUE7TUFBQUMsS0FBQSxFQUVHO0lBQUU7SUFHZjZELHFCQUFBLEtBQUksRUFBQXVMLFdBQUEsRUFBZUQsUUFBUTtFQUM3QjtFQUFDMU8sWUFBQSxDQUFBaUYsTUFBQTtJQUFBaEYsR0FBQTtJQUFBVixLQUFBLEVBRUQsU0FBQXVNLE9BQU90SSxLQUFLLEVBQUU7TUFDWjNDLHFCQUFBLEtBQUksRUFBQStOLE9BQUEsRUFBU2hCLElBQUksQ0FBQ3BLLEtBQUssQ0FBQztJQUMxQjtFQUFDO0lBQUF2RCxHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBOE0sUUFBUU8sSUFBSSxFQUFFO01BQ1ovTCxxQkFBQSxLQUFJLEVBQUFnTyxZQUFBLEVBQWNqQixJQUFJLENBQUNoQixJQUFJLENBQUM7SUFDOUI7RUFBQztJQUFBM00sR0FBQTtJQUFBVixLQUFBLEVBRUQsU0FBQW9LLFVBQUEsRUFBWTtNQUNWLE9BQU85SSxxQkFBQSxLQUFJLEVBQUErTixPQUFBLEVBQVNFLEtBQUssQ0FBQyxDQUFDO0lBQzdCO0VBQUM7SUFBQTdPLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUE2TCxTQUFBLEVBQVc7TUFDVCxPQUFPdksscUJBQUEsS0FBSSxFQUFBZ08sWUFBQSxFQUFjQyxLQUFLLENBQUMsQ0FBQztJQUNsQztFQUFDO0lBQUE3TyxHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBd1AsVUFBQSxFQUFZO01BQ1YzTCxxQkFBQSxLQUFJLEVBQUF3TCxPQUFBLEVBQVcsRUFBRTtNQUNqQnhMLHFCQUFBLEtBQUksRUFBQXlMLFlBQUEsRUFBZ0IsRUFBRTtJQUN4QjtFQUFDO0lBQUE1TyxHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBd0ksY0FBQSxFQUFnQjtNQUNkLE9BQUFsSCxxQkFBQSxDQUFPLElBQUksRUFBQThOLFdBQUE7SUFDYjtFQUFDO0lBQUExTyxHQUFBO0lBQUFhLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQWdCO01BQUUsT0FBT0QscUJBQUEsS0FBSSxFQUFBZ08sWUFBQSxFQUFjeEQsTUFBTTtJQUFFO0VBQUM7RUFBQSxPQUFBcEcsTUFBQTtBQUFBO0FBR3RELGlFQUFlQSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q2U7QUFBQSxJQUFBZ0ssU0FBQSxvQkFBQTNSLE9BQUE7QUFBQSxJQUFBNFIsV0FBQSxvQkFBQTVSLE9BQUE7QUFBQSxJQUFBNlIsV0FBQSxvQkFBQTdSLE9BQUE7QUFBQSxJQUFBOFIsVUFBQSxvQkFBQWhSLE9BQUE7QUFBQSxJQUU5QjhHLElBQUk7RUFPUixTQUFBQSxLQUFZbUosWUFBVSxFQUFFZ0IsV0FBVSxFQUFFaEUsT0FBTSxFQUFFO0lBQUFsTSxlQUFBLE9BQUErRixJQUFBO0lBQUE5RiwyQkFBQSxPQUFBZ1EsVUFBQTtJQUFBL1AsMEJBQUEsT0FBQTRQLFNBQUE7TUFBQTNQLFFBQUE7TUFBQUMsS0FBQSxFQU5oQztJQUFDO0lBQUFGLDBCQUFBLE9BQUE2UCxXQUFBO01BQUE1UCxRQUFBO01BQUFDLEtBQUEsRUFFQztJQUFFO0lBQUFGLDBCQUFBLE9BQUE4UCxXQUFBO01BQUE3UCxRQUFBO01BQUFDLEtBQUEsRUFFRjtJQUFJO0lBR2hCNkQscUJBQUEsS0FBSSxFQUFBK0wsV0FBQSxFQUFlZCxZQUFVO0lBQzdCM08sc0JBQUEsS0FBSSxFQUFBMFAsVUFBQSxFQUFBRSxXQUFBLEVBQUExUCxJQUFBLENBQUosSUFBSSxFQUFZeU8sWUFBVSxFQUFFZ0IsV0FBVSxFQUFFaEUsT0FBTTtFQUNoRDtFQUFDckwsWUFBQSxDQUFBa0YsSUFBQTtJQUFBakYsR0FBQTtJQUFBVixLQUFBLEVBRUQsU0FBQXVOLE9BQU95QyxRQUFRLEVBQUU7TUFDZixJQUFNQyxTQUFTLEdBQUczTyxxQkFBQSxLQUFJLEVBQUFxTyxXQUFBLEVBQWFPLElBQUksQ0FBQyxVQUFBQyxVQUFVO1FBQUEsT0FDL0NBLFVBQVUsQ0FBQy9MLE1BQU0sS0FBSzRMLFFBQVEsQ0FBQzVMLE1BQU0sSUFBTStMLFVBQVUsQ0FBQzlMLE1BQU0sS0FBSzJMLFFBQVEsQ0FBQzNMLE1BQU87TUFBQSxDQUNwRixDQUFDO01BRUQsSUFBSTRMLFNBQVMsS0FBS0csU0FBUyxFQUFFLE9BQU8sS0FBSztNQUN6QyxJQUFJSCxTQUFTLENBQUNwUyxTQUFTLEtBQUssSUFBSSxFQUFFLE9BQU8sS0FBSztNQUU5Q2dHLHFCQUFBLEtBQUksRUFBQTZMLFNBQUEsRUFBQXBPLHFCQUFBLENBQUosSUFBSSxFQUFBb08sU0FBQSxJQUFjLENBQUM7TUFFbkIsT0FBT08sU0FBUyxDQUFDM0MsR0FBRyxDQUFDLENBQUM7SUFDeEI7RUFBQztJQUFBNU0sR0FBQTtJQUFBVixLQUFBLEVBRUQsU0FBQTZPLE9BQUEsRUFBUztNQUNQLE9BQU92TixxQkFBQSxLQUFJLEVBQUFxTyxXQUFBLEVBQWFmLEtBQUssQ0FBQyxVQUFBcUIsU0FBUztRQUFBLE9BQ3JDQSxTQUFTLENBQUNwUyxTQUFTLEtBQUssSUFBSTtNQUFBLENBQzlCLENBQUM7SUFDSDtFQUFDO0lBQUE2QyxHQUFBO0lBQUFWLEtBQUEsRUFnQkQsU0FBQW9PLGNBQUEsRUFBZ0I7TUFDZCxPQUFBOU0scUJBQUEsQ0FBTyxJQUFJLEVBQUFzTyxXQUFBO0lBQ2I7RUFBQztJQUFBbFAsR0FBQTtJQUFBYSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFhO01BQUUsT0FBT0QscUJBQUEsS0FBSSxFQUFBcU8sV0FBQSxFQUFhN0QsTUFBTTtJQUFFO0VBQUM7SUFBQXBMLEdBQUE7SUFBQWEsR0FBQSxFQUVoRCxTQUFBQSxJQUFBLEVBQWU7TUFBRSxPQUFBRCxxQkFBQSxDQUFPLElBQUksRUFBQW9PLFNBQUE7SUFBWTtFQUFDO0VBQUEsT0FBQS9KLElBQUE7QUFBQTtBQUFBLFNBQUFvSyxZQXBCOUJqQixVQUFVLEVBQUVnQixVQUFVLEVBQUVoRSxNQUFNLEVBQUU7RUFDekMsS0FBSyxJQUFJbEssQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHa0ssTUFBTSxFQUFFbEssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNsQyxJQUFJeU8sY0FBYyxHQUFHLElBQUk7SUFFekIsSUFBSVAsVUFBVSxFQUFFO01BQ2RPLGNBQWMsR0FBRyxJQUFJWixrREFBUyxDQUFDWCxVQUFVLENBQUMxSyxNQUFNLEdBQUd4QyxDQUFDLEVBQUVrTixVQUFVLENBQUN6SyxNQUFNLENBQUM7SUFDMUUsQ0FBQyxNQUFNO01BQ0xnTSxjQUFjLEdBQUcsSUFBSVosa0RBQVMsQ0FBQ1gsVUFBVSxDQUFDMUssTUFBTSxFQUFFMEssVUFBVSxDQUFDekssTUFBTSxHQUFHekMsQ0FBQyxDQUFDO0lBQzFFO0lBRUFOLHFCQUFBLEtBQUksRUFBQXFPLFdBQUEsRUFBYXRCLElBQUksQ0FBQ2dDLGNBQWMsQ0FBQztFQUN2QztBQUNGO0FBV0YsaUVBQWUxSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERtQjtBQUFBLElBQUFvSCxNQUFBLG9CQUFBaFAsT0FBQTtBQUFBLElBQUF1UyxVQUFBLG9CQUFBdlMsT0FBQTtBQUFBLElBRWhDMFIsU0FBUztFQUtYLFNBQUFBLFVBQVlyTCxNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUFBekUsZUFBQSxPQUFBNlAsU0FBQTtJQUFBM1AsMEJBQUEsT0FBQWlOLE1BQUE7TUFBQWhOLFFBQUE7TUFBQUMsS0FBQSxFQUpuQjtJQUFJO0lBQUFGLDBCQUFBLE9BQUF3USxVQUFBO01BQUF2USxRQUFBO01BQUFDLEtBQUEsRUFFQTtJQUFLO0lBR2Q2RCxxQkFBQSxLQUFJLEVBQUFrSixNQUFBLEVBQVUsSUFBSWxILG1EQUFVLENBQUN6QixNQUFNLEVBQUVDLE1BQU0sQ0FBQztFQUNoRDtFQUFDNUQsWUFBQSxDQUFBZ1AsU0FBQTtJQUFBL08sR0FBQTtJQUFBVixLQUFBLEVBRUQsU0FBQXNOLElBQUEsRUFBTTtNQUNGekoscUJBQUEsS0FBSSxFQUFBeU0sVUFBQSxFQUFjLElBQUk7TUFDdEIsT0FBQWhQLHFCQUFBLENBQU8sSUFBSSxFQUFBZ1AsVUFBQTtJQUNmO0VBQUM7SUFBQTVQLEdBQUE7SUFBQWEsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBYTtNQUFFLE9BQU9ELHFCQUFBLEtBQUksRUFBQXlMLE1BQUEsRUFBUTNJLE1BQU07SUFBQztFQUFDO0lBQUExRCxHQUFBO0lBQUFhLEdBQUEsRUFFMUMsU0FBQUEsSUFBQSxFQUFhO01BQUUsT0FBT0QscUJBQUEsS0FBSSxFQUFBeUwsTUFBQSxFQUFRMUksTUFBTTtJQUFFO0VBQUM7SUFBQTNELEdBQUE7SUFBQWEsR0FBQSxFQUUzQyxTQUFBQSxJQUFBLEVBQWdCO01BQUUsT0FBQUQscUJBQUEsQ0FBTyxJQUFJLEVBQUFnUCxVQUFBO0lBQWE7RUFBQztFQUFBLE9BQUFiLFNBQUE7QUFBQTtBQUcvQyxpRUFBZUEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdkJsQmMsYUFBYTtFQUFBLFNBQUFBLGNBQUE7SUFBQTNRLGVBQUEsT0FBQTJRLGFBQUE7SUFBQXpRLDBCQUFBLE9BQUEwUSxzQkFBQTtNQUFBelEsUUFBQTtNQUFBQyxLQUFBO0lBQUE7SUFBQUYsMEJBQUEsT0FBQWtHLGNBQUE7TUFBQWpHLFFBQUE7TUFBQUMsS0FBQTtJQUFBO0lBQUFGLDBCQUFBLE9BQUFtRyxlQUFBO01BQUFsRyxRQUFBO01BQUFDLEtBQUE7SUFBQTtJQUFBRiwwQkFBQSxPQUFBb0csZ0JBQUE7TUFBQW5HLFFBQUE7TUFBQUMsS0FBQTtJQUFBO0lBQUFGLDBCQUFBLE9BQUEyUSxrQkFBQTtNQUFBMVEsUUFBQTtNQUFBQyxLQUFBO0lBQUE7SUFBQUYsMEJBQUEsT0FBQTRRLGtCQUFBO01BQUEzUSxRQUFBO01BQUFDLEtBQUE7SUFBQTtJQUFBRiwwQkFBQSxPQUFBNlEsdUJBQUE7TUFBQTVRLFFBQUE7TUFBQUMsS0FBQTtJQUFBO0lBQUFGLDBCQUFBLE9BQUE4USx1QkFBQTtNQUFBN1EsUUFBQTtNQUFBQyxLQUFBO0lBQUE7SUFBQUYsMEJBQUEsT0FBQStRLG1CQUFBO01BQUE5USxRQUFBO01BQUFDLEtBQUE7SUFBQTtJQUFBRiwwQkFBQSxPQUFBZ1IsbUJBQUE7TUFBQS9RLFFBQUE7TUFBQUMsS0FBQTtJQUFBO0lBQUFGLDBCQUFBLE9BQUFpUix1QkFBQTtNQUFBaFIsUUFBQTtNQUFBQyxLQUFBO0lBQUE7SUFBQUYsMEJBQUEsT0FBQWtSLFdBQUE7TUFBQWpSLFFBQUE7TUFBQUMsS0FBQTtJQUFBO0VBQUE7RUFBQVMsWUFBQSxDQUFBOFAsYUFBQTtJQUFBN1AsR0FBQTtJQUFBYSxHQUFBLEVBeUJmLFNBQUFBLElBQUEsRUFBc0I7TUFBRSxPQUFBRCxxQkFBQSxDQUFPLElBQUksRUFBQWtQLHNCQUFBO0lBQXlCLENBQUM7SUFBQVMsR0FBQSxFQUU3RCxTQUFBQSxJQUFvQjdQLGVBQWUsRUFBRTtNQUFFeUMscUJBQUEsS0FBSSxFQUFBMk0sc0JBQUEsRUFBMEJwUCxlQUFlO0lBQUU7RUFBQztJQUFBVixHQUFBO0lBQUFhLEdBQUEsRUFFdkYsU0FBQUEsSUFBQSxFQUFvQjtNQUFFLE9BQUFELHFCQUFBLENBQU8sSUFBSSxFQUFBMEUsY0FBQTtJQUFpQixDQUFDO0lBQUFpTCxHQUFBLEVBRW5ELFNBQUFBLElBQWtCaFEsYUFBYSxFQUFFO01BQUU0QyxxQkFBQSxLQUFJLEVBQUFtQyxjQUFBLEVBQWtCL0UsYUFBYTtJQUFFO0VBQUM7SUFBQVAsR0FBQTtJQUFBYSxHQUFBLEVBRXpFLFNBQUFBLElBQUEsRUFBcUI7TUFBRSxPQUFBRCxxQkFBQSxDQUFPLElBQUksRUFBQTJFLGVBQUE7SUFBa0IsQ0FBQztJQUFBZ0wsR0FBQSxFQUVyRCxTQUFBQSxJQUFtQjdPLGNBQWMsRUFBRTtNQUFFeUIscUJBQUEsS0FBSSxFQUFBb0MsZUFBQSxFQUFtQjdELGNBQWM7SUFBRTtFQUFDO0lBQUExQixHQUFBO0lBQUFhLEdBQUEsRUFFN0UsU0FBQUEsSUFBQSxFQUFzQjtNQUFFLE9BQUFELHFCQUFBLENBQU8sSUFBSSxFQUFBNEUsZ0JBQUE7SUFBbUIsQ0FBQztJQUFBK0ssR0FBQSxFQUV2RCxTQUFBQSxJQUFvQjlPLGVBQWUsRUFBRTtNQUFFMEIscUJBQUEsS0FBSSxFQUFBcUMsZ0JBQUEsRUFBb0IvRCxlQUFlO0lBQUU7RUFBQztJQUFBekIsR0FBQTtJQUFBYSxHQUFBLEVBRWpGLFNBQUFBLElBQUEsRUFBd0I7TUFBRSxPQUFBRCxxQkFBQSxDQUFPLElBQUksRUFBQW1QLGtCQUFBO0lBQXFCLENBQUM7SUFBQVEsR0FBQSxFQUUzRCxTQUFBQSxJQUFzQnBPLGlCQUFpQixFQUFFO01BQUVnQixxQkFBQSxLQUFJLEVBQUE0TSxrQkFBQSxFQUFzQjVOLGlCQUFpQjtJQUFFO0VBQUM7SUFBQW5DLEdBQUE7SUFBQWEsR0FBQSxFQUV6RixTQUFBQSxJQUFBLEVBQXdCO01BQUUsT0FBQUQscUJBQUEsQ0FBTyxJQUFJLEVBQUFvUCxrQkFBQTtJQUFxQixDQUFDO0lBQUFPLEdBQUEsRUFFM0QsU0FBQUEsSUFBc0JuTyxpQkFBaUIsRUFBRTtNQUFFZSxxQkFBQSxLQUFJLEVBQUE2TSxrQkFBQSxFQUFzQjVOLGlCQUFpQjtJQUFFO0VBQUM7SUFBQXBDLEdBQUE7SUFBQWEsR0FBQSxFQUV6RixTQUFBQSxJQUFBLEVBQTZCO01BQUUsT0FBQUQscUJBQUEsQ0FBTyxJQUFJLEVBQUFxUCx1QkFBQTtJQUEwQixDQUFDO0lBQUFNLEdBQUEsRUFFckUsU0FBQUEsSUFBMkJ4UCxzQkFBc0IsRUFBRTtNQUFFb0MscUJBQUEsS0FBSSxFQUFBOE0sdUJBQUEsRUFBMkJsUCxzQkFBc0I7SUFBRTtFQUFDO0lBQUFmLEdBQUE7SUFBQWEsR0FBQSxFQUU3RyxTQUFBQSxJQUFBLEVBQTZCO01BQUUsT0FBQUQscUJBQUEsQ0FBTyxJQUFJLEVBQUFzUCx1QkFBQTtJQUEwQixDQUFDO0lBQUFLLEdBQUEsRUFFckUsU0FBQUEsSUFBMkJ0UCxzQkFBc0IsRUFBRTtNQUFFa0MscUJBQUEsS0FBSSxFQUFBK00sdUJBQUEsRUFBMkJqUCxzQkFBc0I7SUFBRTtFQUFDO0lBQUFqQixHQUFBO0lBQUFhLEdBQUEsRUFFN0csU0FBQUEsSUFBQSxFQUF5QjtNQUFFLE9BQUFELHFCQUFBLENBQU8sSUFBSSxFQUFBdVAsbUJBQUE7SUFBc0IsQ0FBQztJQUFBSSxHQUFBLEVBRTdELFNBQUFBLElBQXVCQyxrQkFBa0IsRUFBRTtNQUFFck4scUJBQUEsS0FBSSxFQUFBZ04sbUJBQUEsRUFBdUJLLGtCQUFrQjtJQUFFO0VBQUM7SUFBQXhRLEdBQUE7SUFBQWEsR0FBQSxFQUU3RixTQUFBQSxJQUFBLEVBQXlCO01BQUUsT0FBQUQscUJBQUEsQ0FBTyxJQUFJLEVBQUF3UCxtQkFBQTtJQUFzQixDQUFDO0lBQUFHLEdBQUEsRUFFN0QsU0FBQUEsSUFBdUJFLGtCQUFrQixFQUFFO01BQUV0TixxQkFBQSxLQUFJLEVBQUFpTixtQkFBQSxFQUF1Qkssa0JBQWtCO0lBQUU7RUFBQztJQUFBelEsR0FBQTtJQUFBYSxHQUFBLEVBRTdGLFNBQUFBLElBQUEsRUFBNkI7TUFBRSxPQUFBRCxxQkFBQSxDQUFPLElBQUksRUFBQXlQLHVCQUFBO0lBQTBCLENBQUM7SUFBQUUsR0FBQSxFQUVyRSxTQUFBQSxJQUEyQjlQLHNCQUFzQixFQUFFO01BQUUwQyxxQkFBQSxLQUFJLEVBQUFrTix1QkFBQSxFQUEyQjVQLHNCQUFzQjtJQUFFO0VBQUM7SUFBQVQsR0FBQTtJQUFBYSxHQUFBLEVBRTdHLFNBQUFBLElBQUEsRUFBaUI7TUFBRSxPQUFBRCxxQkFBQSxDQUFPLElBQUksRUFBQTBQLFdBQUE7SUFBYyxDQUFDO0lBQUFDLEdBQUEsRUFFN0MsU0FBQUEsSUFBZWxPLFVBQVUsRUFBRTtNQUFFYyxxQkFBQSxLQUFJLEVBQUFtTixXQUFBLEVBQWVqTyxVQUFVO0lBQUE7RUFBQztFQUFBLE9BQUF3TixhQUFBO0FBQUE7QUFHL0QsaUVBQWVBLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRWdCO0FBQUEsSUFBQWEsY0FBQSxvQkFBQXJULE9BQUE7QUFBQSxJQUV0QytILG9CQUFvQjtFQUd0QixTQUFBQSxxQkFBQSxFQUFjO0lBQUFsRyxlQUFBLE9BQUFrRyxvQkFBQTtJQUFBaEcsMEJBQUEsT0FBQXNSLGNBQUE7TUFBQXJSLFFBQUE7TUFBQUMsS0FBQSxFQUZHO0lBQUk7SUFHakI2RCxxQkFBQSxLQUFJLEVBQUF1TixjQUFBLEVBQWtCLElBQUliLHNEQUFhLENBQUMsQ0FBQztFQUM3QztFQUFDOVAsWUFBQSxDQUFBcUYsb0JBQUE7SUFBQXBGLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUE2SyxtQkFBbUJ6SixlQUFlLEVBQUU7TUFDaENFLHFCQUFBLEtBQUksRUFBQThQLGNBQUEsRUFBZ0JoUSxlQUFlLEdBQUdBLGVBQWU7TUFDckQsT0FBTyxJQUFJO0lBQ2Y7RUFBQztJQUFBVixHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBOEssaUJBQWlCN0osYUFBYSxFQUFFO01BQzVCSyxxQkFBQSxLQUFJLEVBQUE4UCxjQUFBLEVBQWdCblEsYUFBYSxHQUFHQSxhQUFhO01BQ2pELE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQVAsR0FBQTtJQUFBVixLQUFBLEVBRUQsU0FBQStLLGtCQUFrQjNJLGNBQWMsRUFBRTtNQUM5QmQscUJBQUEsS0FBSSxFQUFBOFAsY0FBQSxFQUFnQmhQLGNBQWMsR0FBR0EsY0FBYztNQUNuRCxPQUFPLElBQUk7SUFDZjtFQUFDO0lBQUExQixHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBZ0wsbUJBQW1CN0ksZUFBZSxFQUFFO01BQ2hDYixxQkFBQSxLQUFJLEVBQUE4UCxjQUFBLEVBQWdCalAsZUFBZSxHQUFHQSxlQUFlO01BQ3JELE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQXpCLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUFpTCxxQkFBcUJwSSxpQkFBaUIsRUFBRTtNQUNwQ3ZCLHFCQUFBLEtBQUksRUFBQThQLGNBQUEsRUFBZ0J2TyxpQkFBaUIsR0FBR0EsaUJBQWlCO01BQ3pELE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQW5DLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUFrTCxxQkFBcUJwSSxpQkFBaUIsRUFBRTtNQUNwQ3hCLHFCQUFBLEtBQUksRUFBQThQLGNBQUEsRUFBZ0J0TyxpQkFBaUIsR0FBR0EsaUJBQWlCO01BQ3pELE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQXBDLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUFtTCwwQkFBMEIxSixzQkFBc0IsRUFBRTtNQUM5Q0gscUJBQUEsS0FBSSxFQUFBOFAsY0FBQSxFQUFnQjNQLHNCQUFzQixHQUFHQSxzQkFBc0I7TUFDbkUsT0FBTyxJQUFJO0lBQ2Y7RUFBQztJQUFBZixHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBcUwsMEJBQTBCMUosc0JBQXNCLEVBQUU7TUFDOUNMLHFCQUFBLEtBQUksRUFBQThQLGNBQUEsRUFBZ0J6UCxzQkFBc0IsR0FBR0Esc0JBQXNCO01BQ25FLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQWpCLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUFzTCxzQkFBc0I0RixrQkFBa0IsRUFBRTtNQUN0QzVQLHFCQUFBLEtBQUksRUFBQThQLGNBQUEsRUFBZ0JGLGtCQUFrQixHQUFHQSxrQkFBa0I7TUFDM0QsT0FBTyxJQUFJO0lBQ2Y7RUFBQztJQUFBeFEsR0FBQTtJQUFBVixLQUFBLEVBRUQsU0FBQXVMLHNCQUFzQjRGLGtCQUFrQixFQUFFO01BQ3RDN1AscUJBQUEsS0FBSSxFQUFBOFAsY0FBQSxFQUFnQkQsa0JBQWtCLEdBQUdBLGtCQUFrQjtNQUMzRCxPQUFPLElBQUk7SUFDZjtFQUFDO0lBQUF6USxHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBd0wsMEJBQTBCckssc0JBQXNCLEVBQUU7TUFDOUNHLHFCQUFBLEtBQUksRUFBQThQLGNBQUEsRUFBZ0JqUSxzQkFBc0IsR0FBR0Esc0JBQXNCO01BQ25FLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQVQsR0FBQTtJQUFBVixLQUFBLEVBRUQsU0FBQXlMLGNBQWMxSSxVQUFVLEVBQUU7TUFDdEJ6QixxQkFBQSxLQUFJLEVBQUE4UCxjQUFBLEVBQWdCck8sVUFBVSxHQUFHQSxVQUFVO01BQzNDLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQXJDLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUFxUixNQUFBLEVBQVE7TUFDSnhOLHFCQUFBLEtBQUksRUFBQXVOLGNBQUEsRUFBa0IsSUFBSWIsc0RBQWEsQ0FBQyxDQUFDO0lBQzdDO0VBQUM7SUFBQTdQLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUEyTCxNQUFBLEVBQVE7TUFDSixJQUFNL0ssYUFBYSxHQUFBVSxxQkFBQSxDQUFHLElBQUksRUFBQThQLGNBQUEsQ0FBZTtNQUN6QyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO01BQ1osT0FBT3pRLGFBQWE7SUFDeEI7RUFBQztFQUFBLE9BQUFrRixvQkFBQTtBQUFBO0FBR0wsaUVBQWVBLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaEY3QndMLGFBQWE7RUFBQSxTQUFBQSxjQUFBO0lBQUExUixlQUFBLE9BQUEwUixhQUFBO0lBQUF4UiwwQkFBQSxPQUFBeVIsVUFBQTtNQUFBeFIsUUFBQTtNQUFBQyxLQUFBLEVBQ0Y7SUFBSTtJQUFBRiwwQkFBQSxPQUFBMFIsZUFBQTtNQUFBelIsUUFBQTtNQUFBQyxLQUFBLEVBRUM7SUFBRTtJQUFBRiwwQkFBQSxPQUFBMlIsYUFBQTtNQUFBMVIsUUFBQTtNQUFBQyxLQUFBLEVBRUo7SUFBSTtFQUFBO0VBQUFTLFlBQUEsQ0FBQTZRLGFBQUE7SUFBQTVRLEdBQUE7SUFBQVYsS0FBQSxFQUVwQixTQUFBeU8sYUFBYWlELEtBQUssRUFBRTtNQUNoQixJQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ25DLEtBQUssQ0FBQyxDQUFDO01BQy9CLElBQU12TixTQUFTLEdBQUcsRUFBRTtNQUVwQjJQLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLEdBQUcsRUFBSTtRQUNyQjdQLFNBQVMsQ0FBQ3FNLElBQUksQ0FBQXlELEtBQUEsQ0FBZDlQLFNBQVMsRUFBQStQLGtCQUFBLENBQVNGLEdBQUcsRUFBQztNQUMxQixDQUFDLENBQUM7TUFFRmhPLHFCQUFBLEtBQUksRUFBQTBOLFVBQUEsRUFBY3ZQLFNBQVM7SUFDL0I7RUFBQztJQUFBdEIsR0FBQTtJQUFBYSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUFnQjtNQUFFLE9BQUFELHFCQUFBLENBQU8sSUFBSSxFQUFBaVEsVUFBQTtJQUFhO0VBQUM7SUFBQTdRLEdBQUE7SUFBQWEsR0FBQSxFQUUzQyxTQUFBQSxJQUFBLEVBQXFCO01BQUUsT0FBQUQscUJBQUEsQ0FBTyxJQUFJLEVBQUFrUSxlQUFBO0lBQWtCLENBQUM7SUFBQVAsR0FBQSxFQUVyRCxTQUFBQSxJQUFtQjFPLGNBQWMsRUFBRTtNQUFFc0IscUJBQUEsS0FBSSxFQUFBMk4sZUFBQSxFQUFtQmpQLGNBQWM7SUFBRTtFQUFDO0lBQUE3QixHQUFBO0lBQUFhLEdBQUEsRUFFN0UsU0FBQUEsSUFBQSxFQUFtQjtNQUFFLE9BQUFELHFCQUFBLENBQU8sSUFBSSxFQUFBbVEsYUFBQTtJQUFnQixDQUFDO0lBQUFSLEdBQUEsRUFFakQsU0FBQUEsSUFBaUIvRSxZQUFZLEVBQUU7TUFBRXJJLHFCQUFBLEtBQUksRUFBQTROLGFBQUEsRUFBaUJ2RixZQUFZO0lBQUU7RUFBQztFQUFBLE9BQUFvRixhQUFBO0FBQUE7QUFHekUsaUVBQWVBLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCZ0I7QUFBQSxJQUFBVSxjQUFBLG9CQUFBalUsT0FBQTtBQUFBLElBQUFrVSxNQUFBLG9CQUFBcFQsT0FBQTtBQUFBLElBRXRDcVQsb0JBQW9CO0VBR3RCLFNBQUFBLHFCQUFBLEVBQWM7SUFBQXRTLGVBQUEsT0FBQXNTLG9CQUFBO0lBQUFyUywyQkFBQSxPQUFBb1MsTUFBQTtJQUFBblMsMEJBQUEsT0FBQWtTLGNBQUE7TUFBQWpTLFFBQUE7TUFBQUMsS0FBQSxFQUZHO0lBQUk7SUFHakI2RCxxQkFBQSxLQUFJLEVBQUFtTyxjQUFBLEVBQWtCLElBQUlWLHNEQUFhLENBQUMsQ0FBQztFQUM3QztFQUFDN1EsWUFBQSxDQUFBeVIsb0JBQUE7SUFBQXhSLEdBQUE7SUFBQVYsS0FBQSxFQUVELFNBQUF5TyxhQUFhMEQsU0FBUyxFQUFFO01BQ3BCN1EscUJBQUEsS0FBSSxFQUFBMFEsY0FBQSxFQUFnQnZELFlBQVksQ0FBQzBELFNBQVMsQ0FBQztNQUMzQyxPQUFPLElBQUk7SUFDZjtFQUFDO0lBQUF6UixHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBME8sa0JBQWtCbk0sY0FBYyxFQUFFO01BQzlCakIscUJBQUEsS0FBSSxFQUFBMFEsY0FBQSxFQUFnQnpQLGNBQWMsR0FBR0EsY0FBYztNQUNuRCxPQUFPLElBQUk7SUFDZjtFQUFDO0lBQUE3QixHQUFBO0lBQUFWLEtBQUEsRUFFRCxTQUFBMk8sZ0JBQWdCekMsWUFBWSxFQUFFO01BQzFCNUsscUJBQUEsS0FBSSxFQUFBMFEsY0FBQSxFQUFnQjlGLFlBQVksR0FBR0EsWUFBWTtNQUMvQyxPQUFPLElBQUk7SUFDZjtFQUFDO0lBQUF4TCxHQUFBO0lBQUFWLEtBQUEsRUFNRCxTQUFBMkwsTUFBQSxFQUFRO01BQ0osSUFBTTZDLGFBQWEsR0FBQWxOLHFCQUFBLENBQUcsSUFBSSxFQUFBMFEsY0FBQSxDQUFlO01BQ3pDN1Isc0JBQUEsS0FBSSxFQUFBOFIsTUFBQSxFQUFBRyxPQUFBLEVBQUEvUixJQUFBLENBQUosSUFBSTtNQUNKLE9BQU9tTyxhQUFhO0lBQ3hCO0VBQUM7RUFBQSxPQUFBMEQsb0JBQUE7QUFBQTtBQUFBLFNBQUFFLFFBQUEsRUFSUTtFQUNMdk8scUJBQUEsS0FBSSxFQUFBbU8sY0FBQSxFQUFrQixJQUFJVixzREFBYSxDQUFDLENBQUM7QUFDN0M7QUFTSixpRUFBZVksb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ25DO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsNkJBQTZCLGVBQWUsY0FBYywyQkFBMkIsOENBQThDLEdBQUcsVUFBVSxrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyx3QkFBd0IsbUJBQW1CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGFBQWEsc0RBQXNELEdBQUcscUJBQXFCLHVCQUF1QixxQkFBcUIsOEJBQThCLEdBQUcseUJBQXlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGlCQUFpQix1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSxHQUFHLFlBQVksa0JBQWtCLGlCQUFpQiw0QkFBNEIsdUJBQXVCLG9CQUFvQiwyQ0FBMkMsd0NBQXdDLEdBQUcseUJBQXlCLGlDQUFpQyxHQUFHLDBCQUEwQiwwQkFBMEIsR0FBRyxpQkFBaUIsNEJBQTRCLEdBQUcsdUJBQXVCLGlDQUFpQyxHQUFHLGFBQWEsc0JBQXNCLHNCQUFzQixnQkFBZ0IsNEJBQTRCLDRCQUE0Qiw4QkFBOEIscUJBQXFCLEdBQUcsb0JBQW9CLGdCQUFnQiw0QkFBNEIsOEJBQThCLHFCQUFxQixHQUFHLG1CQUFtQixnQkFBZ0IsNEJBQTRCLDhCQUE4QixxQkFBcUIsR0FBRyxtQkFBbUI7QUFDLzRFO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDMUcxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBeUQ7QUFDOUI7QUFFM0IsSUFBTUcsVUFBVSxHQUFHLElBQUl0SyxrRUFBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9ET01Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0JvYXJkQ2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9IaXRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcFBpZWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvZGF0YVN0YXRlQ29udGFpbmVycy9HYW1lU3RhdGVEYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvZGF0YVN0YXRlQ29udGFpbmVycy9HYW1lU3RhdGVEYXRhQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi4vZW50aXRpZXMvSGl0U3RhdHVzXCI7XG5cbmNsYXNzIERPTUNvbnRyb2xsZXIge1xuICAjQk9BUkRfV0lEVEggPSAxMDtcblxuICAjQk9BUkRfSEVJR0hUID0gMTA7XG5cbiAgI0NFTExfQ09VTlQgPSAxMDA7XG5cbiAgI2JvYXJkUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLW9uZScpO1xuXG4gICNib2FyZFBsYXllclR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC10d28nKTtcblxuICAjc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWUnKTtcblxuICAjc3dpdGNoQXhpc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3Jpem9udGFsLXN0YXR1cycpO1xuXG4gICNyZXN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWdhbWUnKTtcblxuICAjY29tcHV0ZXJFbmFibGVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuYWJsZS1jb21wdXRlcicpO1xuXG4gICNnYW1lU3RhdGVNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cy1tZXNzYWdlJyk7XG5cbiAgI2JvYXJkSW5pdCA9IGZhbHNlO1xuXG4gICNpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gICNpc0NvbXB1dGVyRW5hYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5ib2FyZEFjdGlvbkhhbmRsZXIsIGNvbnRyb2xsZXJBUEkudXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgIHRoaXMuI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpO1xuICB9XG5cbiAgdXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCkge1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkKGdhbWVTdGF0ZURhdGEpO1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkRm9jdXMoZ2FtZVN0YXRlRGF0YSk7XG4gICAgdGhpcy4jdXBkYXRlU3RhdHVzTWVzc2FnZShnYW1lU3RhdGVEYXRhKTtcblxuICAgIGlmIChjdXJyZW50Q2VsbENvb3JkICYmIGdhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZykge1xuICAgICAgdGhpcy4jaGlnaGxpZ2hCdWlsZFBhdHRlcm4oY3VycmVudENlbGxDb29yZCwgZ2FtZVN0YXRlRGF0YS5jdXJyZW50UGxheWVyRmxlZXRTaXplLCBnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgI3VwZGF0ZUJvYXJkKGdhbWVTdGF0ZURhdGEpIHtcbiAgICBjb25zdCBnYW1lYm9hcmRPbmVEYXRhID0gZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuICAgIGNvbnN0IGdhbWVib2FyZFR3b0RhdGEgPSBnYW1lU3RhdGVEYXRhLnBsYXllclR3b0dhbWVib2FyZERhdGE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0NFTExfQ09VTlQ7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgbm9kZUJvYXJkT25lID0gdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZE9uZSA9IGdhbWVib2FyZE9uZURhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICBjb25zdCBub2RlQm9hcmRUd28gPSB0aGlzLiNib2FyZFBsYXllclR3by5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkVHdvID0gZ2FtZWJvYXJkVHdvRGF0YS5ib2FyZERhdGFbaV07XG5cbiAgICAgIC8vIFRvIGhpZGUgZmlyc3QgcGxheWVyJ3MgYm9hcmQgZHVyaW5nIGJ1aWxkaW5nIHBoYXNlXG4gICAgICBpZiAoZ2FtZVN0YXRlRGF0YS5pc1BsYXllck9uZVR1cm4gPT09IGZhbHNlICYmIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsICFnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRUd28sIGRhdGFCb2FyZFR3bywgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lLCBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRUd28sIGRhdGFCb2FyZFR3bywgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxNZXRhRGF0YShub2RlQm9hcmRPbmUsIGRhdGFCb2FyZE9uZSwgZ2FtZWJvYXJkT25lRGF0YS5wbGF5ZXJVc2VyTmFtZSk7XG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVib2FyZFR3b0RhdGEucGxheWVyVXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVCb2FyZEZvY3VzKGdhbWVTdGF0ZURhdGEpIHtcbiAgICBpZiAoZ2FtZVN0YXRlRGF0YS5pc0dhbWVSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcblxuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICBzd2l0Y2ggKGdhbWVTdGF0ZURhdGEuY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgIGNhc2UgJ1BsYXllciBPbmUnOlxuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQbGF5ZXIgVHdvJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcblxuICAgICAgc3dpdGNoIChnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICBjYXNlICdQbGF5ZXIgT25lJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYXR0YWNrJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQbGF5ZXIgVHdvJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYXR0YWNrJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVTdGF0dXNNZXNzYWdlKGdhbWVTdGF0ZURhdGEpIHtcbiAgICBpZihnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLiNnYW1lU3RhdGVNZXNzYWdlLnRleHRDb250ZW50ID0gJ1ByZXNzIFN0YXJ0JztcbiAgICB9XG5cbiAgICBpZihnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSBmYWxzZSAmJiBnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIGlmKGdhbWVTdGF0ZURhdGEuaXNQbGF5ZXJPbmVUdXJuID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtnYW1lU3RhdGVEYXRhLnBsYXllck9uZVVzZXJOYW1lfSBUdXJuYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtnYW1lU3RhdGVEYXRhLnBsYXllclR3b1VzZXJOYW1lfSBUdXJuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSB0cnVlKSB7XG4gICAgICBpZihnYW1lU3RhdGVEYXRhLmlzUGxheWVyT25lVHVybiA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVNZXNzYWdlLnRleHRDb250ZW50ID0gYCR7Z2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVVc2VyTmFtZX0gVHVybmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVNZXNzYWdlLnRleHRDb250ZW50ID0gYCR7Z2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29Vc2VyTmFtZX0gVHVybmA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmKGdhbWVTdGF0ZURhdGEud2lubmVyTmFtZSkge1xuICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogRE9NQ29udHJvbGxlci5qczoxMzggfiBET01Db250cm9sbGVyIH4gI3VwZGF0ZVN0YXR1c01lc3NhZ2UgfiBnYW1lU3RhdGVEYXRhLndpbm5lck5hbWU6XCIsIGdhbWVTdGF0ZURhdGEud2lubmVyTmFtZSlcbiAgICAgIHRoaXMuI2dhbWVTdGF0ZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtnYW1lU3RhdGVEYXRhLndpbm5lck5hbWV9IGhhcyB3b24hYDtcbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIEJvYXJkIEluaXRpYWxpemF0aW9uXG5cbiAgI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnN0YXJ0R2FtZUhhbmRsZXIpO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmRIYW5kbGVyKTtcbiAgICB0aGlzLiNjb21wdXRlckVuYWJsZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVDb21wdXRlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLiNjb21wdXRlckVuYWJsZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLmVuYWJsZUNvbXB1dGVySGFuZGxlcik7XG4gIH1cblxuICAjaW5pdEJvYXJkKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpIHtcbiAgICBpZiAodGhpcy4jYm9hcmRJbml0ID09PSB0cnVlKSByZXR1cm47XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0NFTExfQ09VTlQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsT25lID0gdGhpcy4jY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcbiAgICAgIGNvbnN0IG5ld0JvYXJkQ2VsbFR3byA9IHRoaXMuI2NyZWF0ZUNlbGwoYm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcik7XG5cbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbE9uZSk7XG4gICAgICB0aGlzLiNib2FyZFBsYXllclR3by5hcHBlbmRDaGlsZChuZXdCb2FyZENlbGxUd28pO1xuICAgIH1cblxuICAgIHRoaXMuI2JvYXJkSW5pdCA9IHRydWU7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBDZWxsIENyZWF0aW9uL1N0YXR1c011dGF0aW9uXG5cbiAgI3VwZGF0ZUNlbGxNZXRhRGF0YShjZWxsTm9kZSwgY2VsbERhdGEsIHBsYXllck5hbWUpIHtcbiAgICBjb25zdCBjb29yZCA9IGNlbGxEYXRhLmdldENvb3JkKCk7XG5cbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmR4JywgY29vcmQuY29vcmRYKTtcbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmR5JywgY29vcmQuY29vcmRZKTtcbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWVybmFtZScsIHBsYXllck5hbWUpO1xuICB9XG5cbiAgI3VwZGF0ZUNlbGxTdGF0dXMoY2VsbE5vZGUsIGNlbGxEYXRhLCBpc1JvdW5kUnVubmluZykge1xuICAgIGlmICghY2VsbE5vZGUgfHwgIWNlbGxEYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCBub2RlID0gY2VsbE5vZGU7XG4gICAgY29uc3QgZGF0YSA9IGNlbGxEYXRhO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nZXRIaXRTdGF0dXMoKTtcblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLk5PVF9ISVQ6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfU0hJUDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkYwMDAwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLkhJVF9DRUxMOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjZWxsRGF0YS5pc09jY3VwaWVkICYmIGlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gIH1cblxuICAjY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcik7XG5cbiAgICByZXR1cm4gbmV3Q2VsbDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIENlbGwgQnVpbGRpbmcgUGF0aCBIaW50aW5nXG5cbiAgI2hpZ2hsaWdoQnVpbGRQYXR0ZXJuKGNvb3JkLCBjdXJyZW50UGxheWVyRmxlZXRTaXplLCBjdXJyZW50UGxheWVyTmFtZSkge1xuICAgIGNvbnN0IHNoaXBTaXplUGF0dGVybiA9IHRoaXMuI2dldFNoaXBTaXplUGF0dGVybihjdXJyZW50UGxheWVyRmxlZXRTaXplKTtcblxuICAgIHRoaXMuI2hpZ2hsaWdodENlbGxzKGNvb3JkLCBzaGlwU2l6ZVBhdHRlcm4sIGN1cnJlbnRQbGF5ZXJOYW1lKTtcbiAgfVxuXG4gICNoaWdobGlnaHRDZWxscyhjb29yZCwgc2hpcFNpemVQYXR0ZXJuLCBjdXJyZW50UGxheWVyTmFtZSkge1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuI2lzSG9yaXpvbnRhbDtcblxuICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVQYXR0ZXJuOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoKGNvb3JkLmNvb3JkWCArIHNoaXBTaXplUGF0dGVybikgLSAxID4gdGhpcy4jQk9BUkRfV0lEVEgpIGJyZWFrO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtY29vcmR4PVwiJHtjb29yZC5jb29yZFggKyBpfVwiXVtkYXRhLWNvb3JkeT1cIiR7Y29vcmQuY29vcmRZfVwiXVtkYXRhLXBsYXllcm5hbWU9XCIke2N1cnJlbnRQbGF5ZXJOYW1lfVwiXWApO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVQYXR0ZXJuOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoKGNvb3JkLmNvb3JkWSArIHNoaXBTaXplUGF0dGVybikgLSAxID4gdGhpcy4jQk9BUkRfSEVJR0hUKSBicmVhaztcbiAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWNvb3JkeD1cIiR7Y29vcmQuY29vcmRYfVwiXVtkYXRhLWNvb3JkeT1cIiR7Y29vcmQuY29vcmRZICsgaX1cIl1bZGF0YS1wbGF5ZXJuYW1lPVwiJHtjdXJyZW50UGxheWVyTmFtZX1cIl1gKTtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAjZ2V0U2hpcFNpemVQYXR0ZXJuKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICBzd2l0Y2ggKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIDU7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiA0O1xuICAgICAgY2FzZSAyOlxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgI3RvZ2dsZUhvcml6b250YWwoKSB7XG4gICAgdGhpcy4jaXNIb3Jpem9udGFsID0gIXRoaXMuI2lzSG9yaXpvbnRhbDtcbiAgICB0aGlzLiNzd2l0Y2hBeGlzQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2J1dHRvbi1hY3RpdmUnKTtcbiAgfVxuXG4gICN0b2dnbGVDb21wdXRlcigpIHtcbiAgICB0aGlzLiNpc0NvbXB1dGVyRW5hYmxlZCA9ICF0aGlzLiNpc0NvbXB1dGVyRW5hYmxlZDtcbiAgICB0aGlzLiNjb21wdXRlckVuYWJsZWRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLWFjdGl2ZScpO1xuICB9XG5cbiAgZ2V0SXNIb3Jpem9udGFsKCkgeyByZXR1cm4gdGhpcy4jaXNIb3Jpem9udGFsOyB9XG5cbiAgZ2V0IGlzQ29tcHV0ZXJFbmFibGVkKCkgeyByZXR1cm4gdGhpcy4jaXNDb21wdXRlckVuYWJsZWQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlcjtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2VudGl0aWVzL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2VudGl0aWVzL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL2VudGl0aWVzL0dhbWVib2FyZFwiO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4uL2VudGl0aWVzL0Nvb3JkaW5hdGVcIjtcbmltcG9ydCBHYW1lU3RhdGVEYXRhQnVpbGRlciBmcm9tIFwiLi4vZW50aXRpZXMvZGF0YVN0YXRlQ29udGFpbmVycy9HYW1lU3RhdGVEYXRhQnVpbGRlclwiO1xuXG5jbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICNjdXJyZW50UGxheWVyID0gbnVsbDtcblxuICAjaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuXG4gICNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuXG4gICNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICNwbGF5ZXJPbmUgPSBudWxsO1xuXG4gICNwbGF5ZXJUd28gPSBudWxsO1xuXG4gICNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBudWxsO1xuXG4gICNwbGF5ZXJUd29HYW1lYm9hcmQgPSBudWxsO1xuXG4gICNET01Db250cm9sbGVyID0gbnVsbDtcblxuICAjbGFzdENvbXB1dGVyQXR0YWNrUmVzdWx0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNET01Db250cm9sbGVyID0gbmV3IERPTUNvbnRyb2xsZXIodGhpcy4jZ2V0QVBJQ29udGFpbmVyKCkpO1xuICAgIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyT25lID0gbmV3IFBsYXllcignUGxheWVyIE9uZScpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1BsYXllciBUd28nKTtcbiAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuICAgIHRoaXMuI2xhc3RDb21wdXRlckF0dGFja1Jlc3VsdCA9IG5ldyBDb29yZGluYXRlKC0xLCAtMSk7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoKTtcbiAgfVxuXG4gIC8vIENhbGxiYWNrIHRvIGxldCBvdGhlciBsYXllcnMgb2YgcHJvZ3JhbSBpbnRlcmFjdCB3aXRoIG91ciBnYW1lIGNvbnRyb2xsZXJcbiAgI2JvYXJkQWN0aW9uSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2VsbE5vZGUgPSBldmVudC50YXJnZXQ7XG5cbiAgICBjb25zdCBpc0NlbGxPd25lciA9IGNlbGxOb2RlLmRhdGFzZXQucGxheWVybmFtZSA9PT0gdGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCk7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jRE9NQ29udHJvbGxlci5nZXRJc0hvcml6b250YWwoKTtcblxuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuXG4gICAgY29uc3QgY2VsbENvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuXG4gICAgc3dpdGNoICh0aGlzLiNpc1JvdW5kUnVubmluZykge1xuICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIHBsYWNlIHNoaXBzIG9uIEhJUyBPV04gYm9hcmQgb25seVxuICAgICAgICBpZiAoaXNDZWxsT3duZXIgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYWNlU2hpcEhhbmRsZXIoY2VsbENvb3JkLCBpc0hvcml6b250YWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIGF0dGFjayBzaGlwcyBvbiBISVMgT1BQT05FTlQnUyBib2FyZCBvbmx5XG4gICAgICAgIGlmIChpc0NlbGxPd25lciA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLiNhdHRhY2tIYW5kbGVyKGNlbGxDb29yZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI0RPTUNvbnRyb2xsZXIuaXNDb21wdXRlckVuYWJsZWQgPT09IHRydWUgJiYgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy4jY29tcHV0ZXJBY3Rpb25IYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKGNlbGxDb29yZCk7XG4gIH1cblxuICAjZW5hYmxlQ29tcHV0ZXJIYW5kbGVyKCkge1xuICAgIHRoaXMuI3Jlc3RhcnRSb3VuZEhhbmRsZXIoKTtcbiAgfVxuXG4gICNjb21wdXRlckFjdGlvbkhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuI2NvbXB1dGVyQXR0YWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2NvbXB1dGVyQnVpbGRGbGVldCgpO1xuICAgIH1cbiAgfVxuXG4gICNjb21wdXRlckF0dGFjaygpIHtcbiAgICBjb25zdCBuZXdBdHRhY2tDZWxsID0gdGhpcy4jZ2V0TmV3QXR0YWNrQ2VsbCgpO1xuXG4gICAgdGhpcy4jYXR0YWNrSGFuZGxlcihuZXdBdHRhY2tDZWxsKTtcblxuICAgIHRoaXMuI2xhc3RDb21wdXRlckF0dGFja1Jlc3VsdCA9IG5ld0F0dGFja0NlbGw7XG4gIH1cblxuICAjY29tcHV0ZXJCdWlsZEZsZWV0KCkge1xuICAgIGxldCBybmRDb29yZCA9IG51bGw7XG4gICAgbGV0IHJuZElzSG9yaXpvbnRhbCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZmxlZXRTaXplICE9PSA1KSB7XG4gICAgICBybmRDb29yZCA9IHRoaXMuI2dldFJhbmRvbUNvb3JkKCk7XG5cbiAgICAgIHJuZElzSG9yaXpvbnRhbCA9IEJvb2xlYW4oTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSk7XG4gICAgICB0aGlzLiNwbGFjZVNoaXBIYW5kbGVyKHJuZENvb3JkLCBybmRJc0hvcml6b250YWwpO1xuICAgIH1cbiAgfVxuXG4gICNnZXRSYW5kb21Db29yZCgpIHtcbiAgICBjb25zdCBybmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLndpZHRoICsgMSk7XG4gICAgY29uc3Qgcm5kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZC5oZWlnaHQgKyAxKTtcblxuICAgIGNvbnN0IHJuZENvb3JkID0gbmV3IENvb3JkaW5hdGUocm5kWCwgcm5kWSk7XG5cbiAgICByZXR1cm4gcm5kQ29vcmQ7XG4gIH1cblxuICAjaXNSZXBlYXRlZENlbGwoY29vcmQpIHtcbiAgICByZXR1cm4gdGhpcy4jY3VycmVudFBsYXllci5nZXRIaXRMb2coKVxuICAgICAgLnNvbWUoKGN1cnJlbnRDb29yZCkgPT4gKGNvb3JkLmNvb3JkWCA9PT0gY3VycmVudENvb3JkLmNvb3JkWCkgJiYgKGNvb3JkLmNvb3JkWSA9PT0gY3VycmVudENvb3JkLmNvb3JkWSkpO1xuICB9XG5cbiAgI2dldE5ld0F0dGFja0NlbGwoKSB7XG4gICAgbGV0IG5ld0F0dGFja0NlbGwgPSB0aGlzLiNnZXRSYW5kb21Db29yZCgpO1xuXG4gICAgbGV0IGlzUmVwZWF0ZWRDZWxsID0gdGhpcy4jaXNSZXBlYXRlZENlbGwobmV3QXR0YWNrQ2VsbCk7XG5cbiAgICB3aGlsZSAoaXNSZXBlYXRlZENlbGwpIHtcbiAgICAgIG5ld0F0dGFja0NlbGwgPSB0aGlzLiNnZXRSYW5kb21Db29yZCgpO1xuICAgICAgaXNSZXBlYXRlZENlbGwgPSB0aGlzLiNpc1JlcGVhdGVkQ2VsbChuZXdBdHRhY2tDZWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3QXR0YWNrQ2VsbDtcbiAgfVxuXG4gICNzdGFydEdhbWVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSB0cnVlKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgI3Jlc3RhcnRSb3VuZEhhbmRsZXIoKSB7XG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdQbGF5ZXIgT25lJyk7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKSB7XG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dldEdhbWVTdGF0ZURhdGEoKTtcblxuICAgIHRoaXMuI0RPTUNvbnRyb2xsZXIudXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCk7XG4gIH1cblxuICAjdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmIChjZWxsTm9kZS5kYXRhc2V0LnBsYXllcm5hbWUgIT09IHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb29yZFggPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeDtcbiAgICBjb25zdCBjb29yZFkgPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeTtcblxuICAgIGNvbnN0IGN1cnJlbnRDZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoY3VycmVudENlbGxDb29yZCk7XG4gIH1cblxuICAjZ2V0R2FtZVN0YXRlRGF0YSgpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhQnVpbGRlciA9IG5ldyBHYW1lU3RhdGVEYXRhQnVpbGRlcigpO1xuXG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IGdhbWVTdGF0ZURhdGFCdWlsZGVyXG4gICAgICAuc2V0Q3VycmVudFVzZXJOYW1lKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldElzR2FtZVJ1bm5pbmcodGhpcy4jaXNHYW1lUnVubmluZylcbiAgICAgIC5zZXRJc1JvdW5kUnVubmluZyh0aGlzLiNpc1JvdW5kUnVubmluZylcbiAgICAgIC5zZXRJc1BsYXllck9uZVR1cm4odGhpcy4jaXNQbGF5ZXJPbmVUdXJuKVxuICAgICAgLnNldFBsYXllck9uZVVzZXJOYW1lKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0UGxheWVyVHdvVXNlck5hbWUodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5nZXRHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpKVxuICAgICAgLnNldFBsYXllclR3b0dhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuc2V0UGxheWVyT25lRmxlZXRTaXplKHRoaXMuI3BsYXllck9uZS5mbGVldFNpemUpXG4gICAgICAuc2V0UGxheWVyVHdvRmxlZXRTaXplKHRoaXMuI3BsYXllclR3by5mbGVldFNpemUpXG4gICAgICAuc2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSh0aGlzLiNjdXJyZW50UGxheWVyLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRXaW5uZXJOYW1lKHRoaXMuI2dldFdpbm5lcigpPy5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHJldHVybiBnYW1lU3RhdGVEYXRhO1xuICB9XG5cbiAgLy8gVG8gY2hlY2sgaWYgcm91bmQgc2hvdWxkIHN0YXJ0IG9uY2UgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgI3N0YXJ0Um91bmQoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZS5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSAmJiB0aGlzLiNwbGF5ZXJUd28uZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHtcbiAgICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuI2lzUGxheWVyT25lVHVybiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgI2VuZEdhbWUocGxheWVyV2lubmVyKSB7XG4gICAgaWYgKHBsYXllcldpbm5lciA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICAjc3dpdGNoQ3VycmVudFBsYXllcigpIHtcbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyVHdvO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuICAgIH1cblxuICAgIHRoaXMuI2lzUGxheWVyT25lVHVybiA9ICF0aGlzLiNpc1BsYXllck9uZVR1cm47XG4gIH1cblxuICAjZ2V0V2lubmVyKCkge1xuICAgIGlmKHRoaXMuI3BsYXllck9uZS5mbGVldFNpemUgIT09IDUgfHwgdGhpcy4jcGxheWVyVHdvLmZsZWV0U2l6ZSAhPT0gNSkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyVHdvO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAjYXR0YWNrSGFuZGxlcihjb29yZCkge1xuICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IHRoaXMuI2F0dGFja0NlbGwoY29vcmQpO1xuICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcblxuICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuI2dldFdpbm5lcigpO1xuXG4gICAgaWYgKHdpbm5lciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jZW5kR2FtZSh3aW5uZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gIH1cblxuICAjYXR0YWNrQ2VsbChjb29yZCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgdGhpcy4jY3VycmVudFBsYXllci5sb2dIaXQoY29vcmQpO1xuICAgIGN1cnJlbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgI3BsYWNlU2hpcEhhbmRsZXIoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKTtcblxuICAgIHRoaXMuI3N0YXJ0Um91bmQoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAjcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcbiAgICBsZXQgbmV3U2hpcCA9IG51bGw7XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9XG5cbiAgICAvLyBUbyBidWlsZCBzaGlwcyBpbiBwcmUtZGV0ZXJtaW5lZCBwYXR0ZXJuICg1LDQsMywzLDIpXG4gICAgc3dpdGNoICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDQ6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBQbGF5ZXJzIHNob3VsZCB0YWtlIHR1cm5zIGFmdGVyIGJ1aWxkaW5nIHRoZWlyIGVudGlyZSBmbGVldFxuICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllci5hZGRTaGlwKG5ld1NoaXApO1xuXG4gICAgICBpZiAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gICNnZXRBUElDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0R2FtZUhhbmRsZXI6IHRoaXMuI3N0YXJ0R2FtZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGJvYXJkQWN0aW9uSGFuZGxlcjogdGhpcy4jYm9hcmRBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICByZXN0YXJ0Um91bmRIYW5kbGVyOiB0aGlzLiNyZXN0YXJ0Um91bmRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcjogdGhpcy4jdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGVuYWJsZUNvbXB1dGVySGFuZGxlcjogdGhpcy4jZW5hYmxlQ29tcHV0ZXJIYW5kbGVyLmJpbmQodGhpcylcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi9IaXRTdGF0dXNcIjtcblxuY2xhc3MgQm9hcmRDZWxsIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI3NoaXAgPSBudWxsO1xuXG4gICAgI2lzT2NjdXBpZWQgPSBmYWxzZTtcblxuICAgICNoYXNCZWVuSGl0ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBvY2N1cHkoc2hpcCkge1xuICAgICAgICBpZiAodGhpcy4jc2hpcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2lzT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiNzaGlwID0gc2hpcDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNoYXNCZWVuSGl0ID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaGFzQmVlbkhpdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgIHRoaXMuI3NoaXAudHJ5SGl0KHRoaXMuI2Nvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldENvb3JkKCkgeyByZXR1cm4gdGhpcy4jY29vcmQ7IH1cblxuICAgIGdldENvb3JkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFg6ICR7dGhpcy4jY29vcmQuY29vcmRYfSBZOiAke3RoaXMuI2Nvb3JkLmNvb3JkWX1gO1xuICAgIH1cblxuICAgIGdldEhpdFN0YXR1cygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLiNoYXNCZWVuSGl0KSB7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLk5PVF9ISVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX1NISVA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9DRUxMO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc09jY3VwaWVkKCkgeyByZXR1cm4gdGhpcy4jaXNPY2N1cGllZDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZENlbGw7IiwiY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgI2Nvb3JkWCA9IDA7XG5cbiAgICAjY29vcmRZID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkWCA9IGNvb3JkWDtcbiAgICAgICAgdGhpcy4jY29vcmRZID0gY29vcmRZO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRYLCAxMCk7IH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRZLCAxMCk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRpbmF0ZTsiLCJpbXBvcnQgQm9hcmRDZWxsIGZyb20gXCIuL0JvYXJkQ2VsbFwiO1xuaW1wb3J0IEdhbWVib2FyZERhdGFCdWlsZGVyIGZyb20gXCIuL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICAjd2lkdGggPSAxMDtcblxuICAgICNoZWlnaHQgPSAxMDtcblxuICAgICNib2FyZCA9IFtdO1xuXG4gICAgLy8gc3dhcHBpbmcgc3VwcG9zZWRseSBYIGFuZCBZIGNvb3JkaW5hdGVzIGhlcmUgYmVjYXVzZSBvZiBmYWlsZWQgYXR0ZW1wdCB0byBpbXBsZW1lbnQgMkQgYXJyYXlzIGluIEphdmFTY3JpcHQuLi5cbiAgICAjc2hpcExpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNpbml0Qm9hcmQoKTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNjYW5QbGFjZShzaGlwLmdldENvb3JkU3RhcnQoKSwgaXNIb3Jpem9udGFsLCBsZW5ndGgpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuI3NoaXBMaXN0LnB1c2goc2hpcCk7XG5cbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWSAtIDFdWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFggLSAxKSArIGldO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbKHNoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWSAtIDEpICsgaV1bc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMV07XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2JvYXJkW2Nvb3JkLmNvb3JkWSAtIDFdW2Nvb3JkLmNvb3JkWCAtIDFdLmhpdCgpO1xuICAgIH1cbiAgICBcbiAgICBnZXRHYW1lYm9hcmREYXRhKHBsYXllclVzZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGFCdWlsZGVyID0gbmV3IEdhbWVib2FyZERhdGFCdWlsZGVyKCk7XG5cbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YSA9IGdhbWVib2FyZERhdGFCdWlsZGVyLnNldEJvYXJkRGF0YSh0aGlzLiNib2FyZClcbiAgICAgICAgLnNldFBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKVxuICAgICAgICAuc2V0QWxsU2hpcHNTdW5rKHRoaXMuYWxsU2hpcHNTdW5rKCkpXG4gICAgICAgIC5idWlsZCgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZERhdGE7XG4gICAgfVxuICAgIFxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoaXBMaXN0LmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuICAgIFxuICAgICNjYW5QbGFjZShjb29yZFN0YXJ0LCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBzd2l0Y2ggKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICAgICAgLy8gdG8gZXhjbHVkZSBzdGFydGluZyBwb2ludCBmcm9tIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKChjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgbGVuZ3RoID4gdGhpcy4jd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbY29vcmRTdGFydC5jb29yZFkgLSAxXVsoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgLy8gdG8gZXhjbHVkZSBzdGFydGluZyBwb2ludCBmcm9tIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKChjb29yZFN0YXJ0LmNvb3JkWSAtIDEpICsgbGVuZ3RoID4gdGhpcy4jaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhjb29yZFN0YXJ0LmNvb3JkWSAtIDEpICsgaV1bY29vcmRTdGFydC5jb29yZFggLSAxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5pdEJvYXJkKCkge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmQubGVuZ3RoICE9PSAwKSByZXR1cm47XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLiN3aWR0aDsgeCArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLiNib2FyZC5wdXNoKFtdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLiNoZWlnaHQ7IHkgKz0gMSkge1xuICAgICAgICAgICAgICAgIC8vIHN3YXBwaW5nIHZhbHVlcyBkdWUgdG8gd3JvbmcgY2VsbCBkYXRhIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgZW1wdHlDZWxsID0gbmV3IEJvYXJkQ2VsbCh5ICsgMSwgeCArIDEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jYm9hcmRbeF0ucHVzaChlbXB0eUNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy4jd2lkdGh9O1xuXG4gICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuI2hlaWdodH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImZ1bmN0aW9uIGhpdFN0YXR1cygpIHtcbiAgICBjb25zdCBOT1RfSElUID0gJ05PVF9ISVQnO1xuICAgIGNvbnN0IEhJVF9DRUxMID0gJ0hJVF9DRUxMJztcbiAgICBjb25zdCBISVRfU0hJUCA9ICdISVRfU0hJUCc7XG4gICAgY29uc3QgQlVJTERJTkdfU0hJUCA9ICdCVUlMRElOR19TSElQJztcblxuICAgIHJldHVybiB7XG4gICAgICAgIE5PVF9ISVQsXG4gICAgICAgIEhJVF9DRUxMLFxuICAgICAgICBISVRfU0hJUCxcbiAgICAgICAgQlVJTERJTkdfU0hJUFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoaXRTdGF0dXM7IiwiY2xhc3MgUGxheWVyIHtcbiAgI3BsYXllck5hbWUgPSAnJztcblxuICAjaGl0TG9nID0gW107XG5cbiAgI3BsYXllclNoaXBzID0gW107XG5cbiAgY29uc3RydWN0b3IodXNlck5hbWUpIHtcbiAgICB0aGlzLiNwbGF5ZXJOYW1lID0gdXNlck5hbWU7XG4gIH1cblxuICBsb2dIaXQoY29vcmQpIHtcbiAgICB0aGlzLiNoaXRMb2cucHVzaChjb29yZCk7XG4gIH1cblxuICBhZGRTaGlwKHNoaXApIHtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgZ2V0SGl0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRMb2cuc2xpY2UoKTtcbiAgfVxuXG4gIGdldFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5zbGljZSgpO1xuICB9XG5cbiAgcmVzZXRVc2VyKCkge1xuICAgIHRoaXMuI2hpdExvZyA9IFtdO1xuICAgIHRoaXMuI3BsYXllclNoaXBzID0gW107XG4gIH1cblxuICBnZXRQbGF5ZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJOYW1lO1xuICB9O1xuXG4gIGdldCBmbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5sZW5ndGg7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImltcG9ydCBTaGlwUGllY2UgZnJvbSBcIi4vU2hpcFBpZWNlXCI7XG5cbmNsYXNzIFNoaXAge1xuICAjdGltZXNIaXQgPSAwO1xuXG4gICNzaGlwUGllY2VzID0gW107XG4gIFxuICAjY29vcmRTdGFydCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgdGhpcy4jY29vcmRTdGFydCA9IGNvb3JkU3RhcnRcbiAgICB0aGlzLiNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKTtcbiAgfVxuXG4gIHRyeUhpdChoaXRDb29yZCkge1xuICAgIGNvbnN0IHNoaXBQaWVjZSA9IHRoaXMuI3NoaXBQaWVjZXMuZmluZChwaWVjZUNvb3JkID0+XG4gICAgICAocGllY2VDb29yZC5jb29yZFggPT09IGhpdENvb3JkLmNvb3JkWCkgJiYgKHBpZWNlQ29vcmQuY29vcmRZID09PSBoaXRDb29yZC5jb29yZFkpXG4gICAgKTtcblxuICAgIGlmIChzaGlwUGllY2UgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlKSByZXR1cm4gZmFsc2U7IFxuXG4gICAgdGhpcy4jdGltZXNIaXQgKz0gMTtcblxuICAgIHJldHVybiBzaGlwUGllY2UuaGl0KCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMuZXZlcnkoc2hpcFBpZWNlID0+XG4gICAgICBzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlXG4gICAgKTtcbiAgfVxuXG4gICNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHNoaXBQaWVjZUNvb3JkID0gbnVsbDtcblxuICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYICsgaSwgY29vcmRTdGFydC5jb29yZFkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYLCBjb29yZFN0YXJ0LmNvb3JkWSArIGkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiNzaGlwUGllY2VzLnB1c2goc2hpcFBpZWNlQ29vcmQpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvb3JkU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Nvb3JkU3RhcnQ7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5sZW5ndGg7IH1cblxuICBnZXQgdGltZXNIaXQoKSB7IHJldHVybiB0aGlzLiN0aW1lc0hpdDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcblxuY2xhc3MgU2hpcFBpZWNlIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI2hpdFN0YXR1cyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLiNoaXRTdGF0dXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy4jaGl0U3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFggfVxuXG4gICAgZ2V0IGNvb3JkWSgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWTsgfVxuXG4gICAgZ2V0IGhpdFN0YXR1cygpIHsgcmV0dXJuIHRoaXMuI2hpdFN0YXR1czsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwUGllY2U7IiwiY2xhc3MgR2FtZVN0YXRlRGF0YSB7XG4gICAgI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTtcblxuICAgICNpc0dhbWVSdW5uaW5nO1xuXG4gICAgI2lzUm91bmRSdW5uaW5nO1xuXG4gICAgI2lzUGxheWVyT25lVHVybjtcblxuICAgICNwbGF5ZXJPbmVVc2VyTmFtZTtcblxuICAgICNwbGF5ZXJUd29Vc2VyTmFtZTtcblxuICAgICNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuXG4gICAgI3BsYXllclR3b0dhbWVib2FyZERhdGE7XG5cbiAgICAjcGxheWVyT25lRmxlZXRTaXplO1xuXG4gICAgI3BsYXllclR3b0ZsZWV0U2l6ZTtcblxuICAgICNjdXJyZW50UGxheWVyRmxlZXRTaXplO1xuXG4gICAgI3dpbm5lck5hbWU7IFxuXG4gICAgZ2V0IGN1cnJlbnRVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgc2V0IGN1cnJlbnRVc2VyTmFtZShjdXJyZW50VXNlck5hbWUpIHsgdGhpcy4jY3VycmVudFBsYXllclVzZXJOYW1lID0gY3VycmVudFVzZXJOYW1lOyB9XG5cbiAgICBnZXQgaXNHYW1lUnVubmluZygpIHsgcmV0dXJuIHRoaXMuI2lzR2FtZVJ1bm5pbmc7IH1cblxuICAgIHNldCBpc0dhbWVSdW5uaW5nKGlzR2FtZVJ1bm5pbmcpIHsgdGhpcy4jaXNHYW1lUnVubmluZyA9IGlzR2FtZVJ1bm5pbmc7IH1cblxuICAgIGdldCBpc1JvdW5kUnVubmluZygpIHsgcmV0dXJuIHRoaXMuI2lzUm91bmRSdW5uaW5nOyB9XG5cbiAgICBzZXQgaXNSb3VuZFJ1bm5pbmcoaXNSb3VuZFJ1bm5pbmcpIHsgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBpc1JvdW5kUnVubmluZzsgfVxuXG4gICAgZ2V0IGlzUGxheWVyT25lVHVybigpIHsgcmV0dXJuIHRoaXMuI2lzUGxheWVyT25lVHVybjsgfVxuXG4gICAgc2V0IGlzUGxheWVyT25lVHVybihpc1BsYXllck9uZVR1cm4pIHsgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gaXNQbGF5ZXJPbmVUdXJuOyB9XG5cbiAgICBnZXQgcGxheWVyT25lVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVVc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllck9uZVVzZXJOYW1lKHBsYXllck9uZVVzZXJOYW1lKSB7IHRoaXMuI3BsYXllck9uZVVzZXJOYW1lID0gcGxheWVyT25lVXNlck5hbWU7IH1cblxuICAgIGdldCBwbGF5ZXJUd29Vc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b1VzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvVXNlck5hbWUocGxheWVyVHdvVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyVHdvVXNlck5hbWUgPSBwbGF5ZXJUd29Vc2VyTmFtZTsgfVxuXG4gICAgZ2V0IHBsYXllck9uZUdhbWVib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhOyB9XG5cbiAgICBzZXQgcGxheWVyT25lR2FtZWJvYXJkRGF0YShwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKSB7IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZERhdGEgPSBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyVHdvR2FtZWJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZERhdGE7IH1cblxuICAgIHNldCBwbGF5ZXJUd29HYW1lYm9hcmREYXRhKHBsYXllclR3b0dhbWVib2FyZERhdGEpIHsgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkRGF0YSA9IHBsYXllclR3b0dhbWVib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJPbmVGbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVGbGVldFNpemU7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVGbGVldFNpemUocGxheWVyT25lRmxlZXRTaXplKSB7IHRoaXMuI3BsYXllck9uZUZsZWV0U2l6ZSA9IHBsYXllck9uZUZsZWV0U2l6ZTsgfVxuICAgIFxuICAgIGdldCBwbGF5ZXJUd29GbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29GbGVldFNpemU7IH1cblxuICAgIHNldCBwbGF5ZXJUd29GbGVldFNpemUocGxheWVyVHdvRmxlZXRTaXplKSB7IHRoaXMuI3BsYXllclR3b0ZsZWV0U2l6ZSA9IHBsYXllclR3b0ZsZWV0U2l6ZTsgfVxuXG4gICAgZ2V0IGN1cnJlbnRQbGF5ZXJGbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNjdXJyZW50UGxheWVyRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgY3VycmVudFBsYXllckZsZWV0U2l6ZShjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7IHRoaXMuI2N1cnJlbnRQbGF5ZXJGbGVldFNpemUgPSBjdXJyZW50UGxheWVyRmxlZXRTaXplOyB9XG5cbiAgICBnZXQgd2lubmVyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3dpbm5lck5hbWU7IH1cblxuICAgIHNldCB3aW5uZXJOYW1lKHdpbm5lck5hbWUpIHsgdGhpcy4jd2lubmVyTmFtZSA9IHdpbm5lck5hbWV9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGVEYXRhOyIsImltcG9ydCBHYW1lU3RhdGVEYXRhIGZyb20gXCIuL0dhbWVTdGF0ZURhdGFcIjtcblxuY2xhc3MgR2FtZVN0YXRlRGF0YUJ1aWxkZXIge1xuICAgICNnYW1lU3RhdGVEYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhID0gbmV3IEdhbWVTdGF0ZURhdGEoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50VXNlck5hbWUoY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuY3VycmVudFVzZXJOYW1lID0gY3VycmVudFVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc0dhbWVSdW5uaW5nKGlzR2FtZVJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc0dhbWVSdW5uaW5nID0gaXNHYW1lUnVubmluZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNSb3VuZFJ1bm5pbmcoaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyA9IGlzUm91bmRSdW5uaW5nO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc1BsYXllck9uZVR1cm4oaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNQbGF5ZXJPbmVUdXJuID0gaXNQbGF5ZXJPbmVUdXJuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVVc2VyTmFtZShwbGF5ZXJPbmVVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllck9uZVVzZXJOYW1lID0gcGxheWVyT25lVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b1VzZXJOYW1lKHBsYXllclR3b1VzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvVXNlck5hbWUgPSBwbGF5ZXJUd29Vc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YShwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YSA9IHBsYXllck9uZUdhbWVib2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b0dhbWVib2FyZERhdGEocGxheWVyVHdvR2FtZWJvYXJkRGF0YSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllclR3b0dhbWVib2FyZERhdGEgPSBwbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVGbGVldFNpemUocGxheWVyT25lRmxlZXRTaXplKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lRmxlZXRTaXplID0gcGxheWVyT25lRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJUd29GbGVldFNpemUocGxheWVyVHdvRmxlZXRTaXplKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvRmxlZXRTaXplID0gcGxheWVyVHdvRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50UGxheWVyRmxlZXRTaXplKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5jdXJyZW50UGxheWVyRmxlZXRTaXplID0gY3VycmVudFBsYXllckZsZWV0U2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0V2lubmVyTmFtZSh3aW5uZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEud2lubmVyTmFtZSA9IHdpbm5lck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhID0gbmV3IEdhbWVTdGF0ZURhdGEoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dhbWVTdGF0ZURhdGE7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIGdhbWVTdGF0ZURhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGVEYXRhQnVpbGRlcjsiLCJjbGFzcyBHYW1lYm9hcmREYXRhIHtcbiAgICAjYm9hcmREYXRhID0gbnVsbDtcblxuICAgICNwbGF5ZXJVc2VyTmFtZSA9ICcnO1xuXG4gICAgI2FsbFNoaXBzU3VuayA9IG51bGw7XG5cbiAgICBzZXRCb2FyZERhdGEoYm9hcmQpIHtcbiAgICAgICAgY29uc3QgYm9hcmRDb3B5ID0gYm9hcmQuc2xpY2UoKTtcbiAgICAgICAgY29uc3QgYm9hcmREYXRhID0gW107XG5cbiAgICAgICAgYm9hcmRDb3B5LmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGJvYXJkRGF0YS5wdXNoKC4uLnJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2JvYXJkRGF0YSA9IGJvYXJkRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKSB7IHRoaXMuI3BsYXllclVzZXJOYW1lID0gcGxheWVyVXNlck5hbWU7IH1cblxuICAgIGdldCBhbGxTaGlwc1N1bmsoKSB7IHJldHVybiB0aGlzLiNhbGxTaGlwc1N1bms7IH1cblxuICAgIHNldCBhbGxTaGlwc1N1bmsoYWxsU2hpcHNTdW5rKSB7IHRoaXMuI2FsbFNoaXBzU3VuayA9IGFsbFNoaXBzU3VuazsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmREYXRhOyIsImltcG9ydCBHYW1lYm9hcmREYXRhIGZyb20gXCIuL0dhbWVib2FyZERhdGFcIjtcblxuY2xhc3MgR2FtZUJvYXJkRGF0YUJ1aWxkZXIge1xuICAgICNnYW1lYm9hcmREYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhID0gbmV3IEdhbWVib2FyZERhdGEoKTtcbiAgICB9XG5cbiAgICBzZXRCb2FyZERhdGEoZ2FtZWJvYXJkKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEuc2V0Qm9hcmREYXRhKGdhbWVib2FyZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEucGxheWVyVXNlck5hbWUgPSBwbGF5ZXJVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QWxsU2hpcHNTdW5rKGFsbFNoaXBzU3Vuaykge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLmFsbFNoaXBzU3VuayA9IGFsbFNoaXBzU3VuaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgI3Jlc2V0KCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhID0gbmV3IEdhbWVib2FyZERhdGEoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YSA9IHRoaXMuI2dhbWVib2FyZERhdGE7XG4gICAgICAgIHRoaXMuI3Jlc2V0KCk7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmREYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkRGF0YUJ1aWxkZXI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLXVpLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG5cbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnYnV0dG9uJ1xuICAgICdib2FyZCc7XG59XG5cbiNzdGF0dXMtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtXG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW07XG59XG5cbi5ib2FyZCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgZ3JpZC1hcmVhOiBib2FyZDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5ib2FyZC1hY3RpdmUtYnVpbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xufVxuXG4uYm9hcmQtYWN0aXZlLWF0dGFjayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmJvYXJkLWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJvYXJkLWNlbGw6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xufVxuXG4uYnV0dG9uIHtcbiAgZ3JpZC1hcmVhOiBidXR0b247XG5cbiAgcGFkZGluZzogMC41cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTs7RUFFUjs7V0FFUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS11aS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnYnV0dG9uJ1xcbiAgICAnYm9hcmQnO1xcbn1cXG5cXG4jc3RhdHVzLW1lc3NhZ2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5jb250cm9scy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMmVtXFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gIGdyaWQtYXJlYTogYm9hcmQ7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLWFjdGl2ZS1idWlsZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYm9hcmQtYWN0aXZlLWF0dGFjayB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQtY2VsbDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcblxcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b24tYWN0aXZlIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyJztcbmltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbImhpdFN0YXR1cyIsIl9CT0FSRF9XSURUSCIsIldlYWtNYXAiLCJfQk9BUkRfSEVJR0hUIiwiX0NFTExfQ09VTlQiLCJfYm9hcmRQbGF5ZXJPbmUiLCJfYm9hcmRQbGF5ZXJUd28iLCJfc3RhcnRHYW1lQnV0dG9uIiwiX3N3aXRjaEF4aXNCdXR0b24iLCJfcmVzdGFydEdhbWVCdXR0b24iLCJfY29tcHV0ZXJFbmFibGVkQnV0dG9uIiwiX2dhbWVTdGF0ZU1lc3NhZ2UiLCJfYm9hcmRJbml0IiwiX2lzSG9yaXpvbnRhbCIsIl9pc0NvbXB1dGVyRW5hYmxlZCIsIl91cGRhdGVCb2FyZCIsIldlYWtTZXQiLCJfdXBkYXRlQm9hcmRGb2N1cyIsIl91cGRhdGVTdGF0dXNNZXNzYWdlIiwiX21hcEhhbmRsZXJzIiwiX2luaXRCb2FyZCIsIl91cGRhdGVDZWxsTWV0YURhdGEiLCJfdXBkYXRlQ2VsbFN0YXR1cyIsIl9jcmVhdGVDZWxsIiwiX2hpZ2hsaWdoQnVpbGRQYXR0ZXJuIiwiX2hpZ2hsaWdodENlbGxzIiwiX2dldFNoaXBTaXplUGF0dGVybiIsIl90b2dnbGVIb3Jpem9udGFsIiwiX3RvZ2dsZUNvbXB1dGVyIiwiRE9NQ29udHJvbGxlciIsImNvbnRyb2xsZXJBUEkiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIndyaXRhYmxlIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9pbml0Qm9hcmQyIiwiY2FsbCIsImJvYXJkQWN0aW9uSGFuZGxlciIsInVwZGF0ZUJvYXJkSGludHNIYW5kbGVyIiwiX21hcEhhbmRsZXJzMiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInVwZGF0ZVVJIiwiZ2FtZVN0YXRlRGF0YSIsImN1cnJlbnRDZWxsQ29vcmQiLCJfdXBkYXRlQm9hcmQyIiwiX3VwZGF0ZUJvYXJkRm9jdXMyIiwiX3VwZGF0ZVN0YXR1c01lc3NhZ2UyIiwiaXNHYW1lUnVubmluZyIsIl9oaWdobGlnaEJ1aWxkUGF0dGVybjIiLCJjdXJyZW50UGxheWVyRmxlZXRTaXplIiwiY3VycmVudFVzZXJOYW1lIiwiZ2V0SXNIb3Jpem9udGFsIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiZ2V0IiwiZ2FtZWJvYXJkT25lRGF0YSIsInBsYXllck9uZUdhbWVib2FyZERhdGEiLCJnYW1lYm9hcmRUd29EYXRhIiwicGxheWVyVHdvR2FtZWJvYXJkRGF0YSIsImkiLCJub2RlQm9hcmRPbmUiLCJjaGlsZE5vZGVzIiwiZGF0YUJvYXJkT25lIiwiYm9hcmREYXRhIiwibm9kZUJvYXJkVHdvIiwiZGF0YUJvYXJkVHdvIiwiaXNQbGF5ZXJPbmVUdXJuIiwiaXNSb3VuZFJ1bm5pbmciLCJfdXBkYXRlQ2VsbFN0YXR1czIiLCJfdXBkYXRlQ2VsbE1ldGFEYXRhMiIsInBsYXllclVzZXJOYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidGV4dENvbnRlbnQiLCJjb25jYXQiLCJwbGF5ZXJPbmVVc2VyTmFtZSIsInBsYXllclR3b1VzZXJOYW1lIiwid2lubmVyTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lSGFuZGxlciIsIl90b2dnbGVIb3Jpem9udGFsMiIsImJpbmQiLCJyZXN0YXJ0Um91bmRIYW5kbGVyIiwiX3RvZ2dsZUNvbXB1dGVyMiIsImVuYWJsZUNvbXB1dGVySGFuZGxlciIsIm5ld0JvYXJkQ2VsbE9uZSIsIl9jcmVhdGVDZWxsMiIsIm5ld0JvYXJkQ2VsbFR3byIsImFwcGVuZENoaWxkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiY2VsbE5vZGUiLCJjZWxsRGF0YSIsInBsYXllck5hbWUiLCJjb29yZCIsImdldENvb3JkIiwic2V0QXR0cmlidXRlIiwiY29vcmRYIiwiY29vcmRZIiwibm9kZSIsImRhdGEiLCJzdGF0dXMiLCJnZXRIaXRTdGF0dXMiLCJOT1RfSElUIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJISVRfU0hJUCIsIkhJVF9DRUxMIiwiaXNPY2N1cGllZCIsIm5ld0NlbGwiLCJjcmVhdGVFbGVtZW50IiwiY3VycmVudFBsYXllck5hbWUiLCJzaGlwU2l6ZVBhdHRlcm4iLCJfZ2V0U2hpcFNpemVQYXR0ZXJuMiIsIl9oaWdobGlnaHRDZWxsczIiLCJpc0hvcml6b250YWwiLCJjdXJyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGUiLCJQbGF5ZXIiLCJTaGlwIiwiR2FtZWJvYXJkIiwiQ29vcmRpbmF0ZSIsIkdhbWVTdGF0ZURhdGFCdWlsZGVyIiwiX2N1cnJlbnRQbGF5ZXIiLCJfaXNHYW1lUnVubmluZyIsIl9pc1JvdW5kUnVubmluZyIsIl9pc1BsYXllck9uZVR1cm4iLCJfcGxheWVyT25lIiwiX3BsYXllclR3byIsIl9wbGF5ZXJPbmVHYW1lYm9hcmQiLCJfcGxheWVyVHdvR2FtZWJvYXJkIiwiX0RPTUNvbnRyb2xsZXIiLCJfbGFzdENvbXB1dGVyQXR0YWNrUmVzdWx0IiwiX2JvYXJkQWN0aW9uSGFuZGxlciIsIl9lbmFibGVDb21wdXRlckhhbmRsZXIiLCJfY29tcHV0ZXJBY3Rpb25IYW5kbGVyIiwiX2NvbXB1dGVyQXR0YWNrIiwiX2NvbXB1dGVyQnVpbGRGbGVldCIsIl9nZXRSYW5kb21Db29yZCIsIl9pc1JlcGVhdGVkQ2VsbCIsIl9nZXROZXdBdHRhY2tDZWxsIiwiX3N0YXJ0R2FtZUhhbmRsZXIiLCJfcmVzdGFydFJvdW5kSGFuZGxlciIsIl91cGRhdGVHYW1lVUkiLCJfdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIiLCJfZ2V0R2FtZVN0YXRlRGF0YSIsIl9zdGFydFJvdW5kIiwiX2VuZEdhbWUiLCJfc3dpdGNoQ3VycmVudFBsYXllciIsIl9nZXRXaW5uZXIiLCJfYXR0YWNrSGFuZGxlciIsIl9hdHRhY2tDZWxsIiwiX3BsYWNlU2hpcEhhbmRsZXIiLCJfcGxhY2VTaGlwIiwiX2dldEFQSUNvbnRhaW5lciIsIkdhbWVDb250cm9sbGVyIiwiX2dldEFQSUNvbnRhaW5lcjIiLCJfdXBkYXRlR2FtZVVJMiIsIl9ib2FyZEFjdGlvbkhhbmRsZXIyIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0NlbGxPd25lciIsImRhdGFzZXQiLCJwbGF5ZXJuYW1lIiwiZ2V0UGxheWVyTmFtZSIsImNvb3JkeCIsImNvb3JkeSIsImNlbGxDb29yZCIsIl9wbGFjZVNoaXBIYW5kbGVyMiIsIl9hdHRhY2tIYW5kbGVyMiIsImlzQ29tcHV0ZXJFbmFibGVkIiwiX2NvbXB1dGVyQWN0aW9uSGFuZGxlcjIiLCJfZW5hYmxlQ29tcHV0ZXJIYW5kbGVyMiIsIl9yZXN0YXJ0Um91bmRIYW5kbGVyMiIsIl9jb21wdXRlckF0dGFjazIiLCJfY29tcHV0ZXJCdWlsZEZsZWV0MiIsIm5ld0F0dGFja0NlbGwiLCJfZ2V0TmV3QXR0YWNrQ2VsbDIiLCJybmRDb29yZCIsInJuZElzSG9yaXpvbnRhbCIsImZsZWV0U2l6ZSIsIl9nZXRSYW5kb21Db29yZDIiLCJCb29sZWFuIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwicm5kWCIsImZsb29yIiwid2lkdGgiLCJybmRZIiwiaGVpZ2h0IiwiX2lzUmVwZWF0ZWRDZWxsMiIsImdldEhpdExvZyIsInNvbWUiLCJjdXJyZW50Q29vcmQiLCJpc1JlcGVhdGVkQ2VsbCIsIl9zdGFydEdhbWVIYW5kbGVyMiIsIl9nZXRHYW1lU3RhdGVEYXRhMiIsIl91cGRhdGVCb2FyZEhpbnRzSGFuZGxlcjIiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2UiLCJnYW1lU3RhdGVEYXRhQnVpbGRlciIsInNldEN1cnJlbnRVc2VyTmFtZSIsInNldElzR2FtZVJ1bm5pbmciLCJzZXRJc1JvdW5kUnVubmluZyIsInNldElzUGxheWVyT25lVHVybiIsInNldFBsYXllck9uZVVzZXJOYW1lIiwic2V0UGxheWVyVHdvVXNlck5hbWUiLCJzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiZ2V0R2FtZWJvYXJkRGF0YSIsInNldFBsYXllclR3b0dhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJPbmVGbGVldFNpemUiLCJzZXRQbGF5ZXJUd29GbGVldFNpemUiLCJzZXRDdXJyZW50UGxheWVyRmxlZXRTaXplIiwic2V0V2lubmVyTmFtZSIsIl9nZXRXaW5uZXIyIiwiYnVpbGQiLCJfc3RhcnRSb3VuZDIiLCJnZXRTaGlwcyIsImxlbmd0aCIsIl9lbmRHYW1lMiIsInBsYXllcldpbm5lciIsIl9zd2l0Y2hDdXJyZW50UGxheWVyMiIsImFsbFNoaXBzU3VuayIsImF0dGFja1Jlc3VsdCIsIl9hdHRhY2tDZWxsMiIsIndpbm5lciIsImN1cnJlbnRCb2FyZCIsImxvZ0hpdCIsInJlY2VpdmVBdHRhY2siLCJyZXN1bHQiLCJfcGxhY2VTaGlwMiIsIm5ld1NoaXAiLCJpc1BsYWNlZCIsInBsYWNlU2hpcCIsImFkZFNoaXAiLCJfY29vcmQiLCJfc2hpcCIsIl9pc09jY3VwaWVkIiwiX2hhc0JlZW5IaXQiLCJCb2FyZENlbGwiLCJvY2N1cHkiLCJzaGlwIiwiaGl0IiwidHJ5SGl0IiwiZ2V0Q29vcmRTdHJpbmciLCJfY29vcmRYIiwiX2Nvb3JkWSIsIk51bWJlciIsInBhcnNlSW50IiwiR2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX2JvYXJkIiwiX3NoaXBMaXN0IiwiX2NhblBsYWNlIiwiX2NhblBsYWNlMiIsImdldENvb3JkU3RhcnQiLCJwdXNoIiwiYm9hcmRDZWxsIiwiZ2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJnYW1lYm9hcmREYXRhIiwic2V0Qm9hcmREYXRhIiwic2V0UGxheWVyVXNlck5hbWUiLCJzZXRBbGxTaGlwc1N1bmsiLCJldmVyeSIsImlzU3VuayIsImNvb3JkU3RhcnQiLCJ4IiwieSIsImVtcHR5Q2VsbCIsIkJVSUxESU5HX1NISVAiLCJ1c2VyTmFtZSIsIl9wbGF5ZXJOYW1lIiwiX2hpdExvZyIsIl9wbGF5ZXJTaGlwcyIsInNsaWNlIiwicmVzZXRVc2VyIiwiU2hpcFBpZWNlIiwiX3RpbWVzSGl0IiwiX3NoaXBQaWVjZXMiLCJfY29vcmRTdGFydCIsIl9idWlsZFNoaXAiLCJob3Jpem9udGFsIiwiX2J1aWxkU2hpcDIiLCJoaXRDb29yZCIsInNoaXBQaWVjZSIsImZpbmQiLCJwaWVjZUNvb3JkIiwidW5kZWZpbmVkIiwic2hpcFBpZWNlQ29vcmQiLCJfaGl0U3RhdHVzIiwiR2FtZVN0YXRlRGF0YSIsIl9jdXJyZW50UGxheWVyVXNlck5hbWUiLCJfcGxheWVyT25lVXNlck5hbWUiLCJfcGxheWVyVHdvVXNlck5hbWUiLCJfcGxheWVyT25lR2FtZWJvYXJkRGF0YSIsIl9wbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwiX3BsYXllck9uZUZsZWV0U2l6ZSIsIl9wbGF5ZXJUd29GbGVldFNpemUiLCJfY3VycmVudFBsYXllckZsZWV0U2l6ZSIsIl93aW5uZXJOYW1lIiwic2V0IiwicGxheWVyT25lRmxlZXRTaXplIiwicGxheWVyVHdvRmxlZXRTaXplIiwiX2dhbWVTdGF0ZURhdGEiLCJyZXNldCIsIkdhbWVib2FyZERhdGEiLCJfYm9hcmREYXRhIiwiX3BsYXllclVzZXJOYW1lIiwiX2FsbFNoaXBzU3VuayIsImJvYXJkIiwiYm9hcmRDb3B5IiwiZm9yRWFjaCIsInJvdyIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2dhbWVib2FyZERhdGEiLCJfcmVzZXQiLCJHYW1lQm9hcmREYXRhQnVpbGRlciIsImdhbWVib2FyZCIsIl9yZXNldDIiLCJjb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==