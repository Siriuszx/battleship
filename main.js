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
var _boardInit = /*#__PURE__*/new WeakMap();
var _isHorizontal = /*#__PURE__*/new WeakMap();
var _isComputerEnabled = /*#__PURE__*/new WeakMap();
var _updateBoard = /*#__PURE__*/new WeakSet();
var _updateBoardFocus = /*#__PURE__*/new WeakSet();
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
  console.log(_classPrivateFieldGet(this, _isComputerEnabled));
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
var _boardActionHandler = /*#__PURE__*/new WeakSet();
var _enableComputerHandler = /*#__PURE__*/new WeakSet();
var _computerActionHandler = /*#__PURE__*/new WeakSet();
var _computerAttack = /*#__PURE__*/new WeakSet();
var _computerBuildFleet = /*#__PURE__*/new WeakSet();
var _getRandomCoord = /*#__PURE__*/new WeakSet();
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
  console.log(_classPrivateFieldGet(this, _DOMController).isComputerEnabled);
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
  var rndCoord = null;
  var result = false;
  rndCoord = _classPrivateMethodGet(this, _getRandomCoord, _getRandomCoord2).call(this);
  result = _classPrivateMethodGet(this, _attackHandler, _attackHandler2).call(this, rndCoord);
  console.log("RND X: ".concat(rndCoord.coordX, " RND Y: ").concat(rndCoord.coordY));
  console.log("RESULT: ".concat(result));
}
function _computerBuildFleet2() {
  var rndCoord = null;
  var rndIsHorizontal = false;
  var result = false;
  while (_classPrivateFieldGet(this, _currentPlayer).fleetSize !== 5) {
    rndCoord = _classPrivateMethodGet(this, _getRandomCoord, _getRandomCoord2).call(this);
    rndIsHorizontal = Boolean(Math.round(Math.random()));
    result = _classPrivateMethodGet(this, _placeShipHandler, _placeShipHandler2).call(this, rndCoord, rndIsHorizontal);
    console.log("RND X: ".concat(rndCoord.coordX, " RND Y: ").concat(rndCoord.coordY));
    console.log("RESULT: ".concat(result));
  }
}
function _getRandomCoord2() {
  var rndX = Math.floor(Math.random() * _classPrivateFieldGet(this, _playerTwoGameboard).width + 1);
  var rndY = Math.floor(Math.random() * _classPrivateFieldGet(this, _playerTwoGameboard).height + 1);
  var rndCoord = new _entities_Coordinate__WEBPACK_IMPORTED_MODULE_4__["default"](rndX, rndY);
  return rndCoord;
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
  var gameStateDataBuilder = new _entities_dataStateContainers_GameStateDataBuilder__WEBPACK_IMPORTED_MODULE_5__["default"]();
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
function _attackHandler2(coord) {
  var attackResult = _classPrivateMethodGet(this, _attackCell, _attackCell2).call(this, coord);
  _classPrivateMethodGet(this, _switchCurrentPlayer, _switchCurrentPlayer2).call(this);
  var winner = _classPrivateMethodGet(this, _getWinner, _getWinner2).call(this);
  if (winner !== null) {
    _classPrivateMethodGet(this, _endGame, _endGame2).call(this, winner);
    console.log("player ".concat(winner.getPlayerName(), " won"));
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
  console.log("isPlaced: ".concat(isPlaced));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Cb2FyZENlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Db29yZGluYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvSGl0U3RhdHVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1NoaXBQaWVjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVib2FyZERhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVib2FyZERhdGFCdWlsZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4uL2VudGl0aWVzL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBET01Db250cm9sbGVyIHtcbiAgI0JPQVJEX1dJRFRIID0gMTA7XG5cbiAgI0JPQVJEX0hFSUdIVCA9IDEwO1xuXG4gICNDRUxMX0NPVU5UID0gMTAwO1xuXG4gICNib2FyZFBsYXllck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1vbmUnKTtcblxuICAjYm9hcmRQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtdHdvJyk7XG5cbiAgI3N0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XG5cbiAgI3N3aXRjaEF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9yaXpvbnRhbC1zdGF0dXMnKTtcblxuICAjcmVzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydC1nYW1lJyk7XG5cbiAgI2NvbXB1dGVyRW5hYmxlZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtY29tcHV0ZXInKTtcblxuICAjYm9hcmRJbml0ID0gZmFsc2U7XG5cbiAgI2lzSG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgI2lzQ29tcHV0ZXJFbmFibGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoY29udHJvbGxlckFQSSkge1xuICAgIHRoaXMuI2luaXRCb2FyZChjb250cm9sbGVyQVBJLmJvYXJkQWN0aW9uSGFuZGxlciwgY29udHJvbGxlckFQSS51cGRhdGVCb2FyZEhpbnRzSGFuZGxlcik7XG4gICAgdGhpcy4jbWFwSGFuZGxlcnMoY29udHJvbGxlckFQSSk7XG4gIH1cblxuICB1cGRhdGVVSShnYW1lU3RhdGVEYXRhLCBjdXJyZW50Q2VsbENvb3JkKSB7XG4gICAgdGhpcy4jdXBkYXRlQm9hcmQoZ2FtZVN0YXRlRGF0YSk7XG4gICAgdGhpcy4jdXBkYXRlQm9hcmRGb2N1cyhnYW1lU3RhdGVEYXRhKTtcblxuICAgIGlmIChjdXJyZW50Q2VsbENvb3JkICYmIGdhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZykge1xuICAgICAgdGhpcy4jaGlnaGxpZ2hCdWlsZFBhdHRlcm4oY3VycmVudENlbGxDb29yZCwgZ2FtZVN0YXRlRGF0YS5jdXJyZW50UGxheWVyRmxlZXRTaXplLCBnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgI3VwZGF0ZUJvYXJkKGdhbWVTdGF0ZURhdGEpIHtcbiAgICBjb25zdCBnYW1lYm9hcmRPbmVEYXRhID0gZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuICAgIGNvbnN0IGdhbWVib2FyZFR3b0RhdGEgPSBnYW1lU3RhdGVEYXRhLnBsYXllclR3b0dhbWVib2FyZERhdGE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0NFTExfQ09VTlQ7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgbm9kZUJvYXJkT25lID0gdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZE9uZSA9IGdhbWVib2FyZE9uZURhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICBjb25zdCBub2RlQm9hcmRUd28gPSB0aGlzLiNib2FyZFBsYXllclR3by5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkVHdvID0gZ2FtZWJvYXJkVHdvRGF0YS5ib2FyZERhdGFbaV07XG5cbiAgICAgIC8vIFRvIGhpZGUgZmlyc3QgcGxheWVyJ3MgYm9hcmQgZHVyaW5nIGJ1aWxkaW5nIHBoYXNlXG4gICAgICBpZiAoZ2FtZVN0YXRlRGF0YS5pc1BsYXllck9uZVR1cm4gPT09IGZhbHNlICYmIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsICFnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRUd28sIGRhdGFCb2FyZFR3bywgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lLCBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRUd28sIGRhdGFCb2FyZFR3bywgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxNZXRhRGF0YShub2RlQm9hcmRPbmUsIGRhdGFCb2FyZE9uZSwgZ2FtZWJvYXJkT25lRGF0YS5wbGF5ZXJVc2VyTmFtZSk7XG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVib2FyZFR3b0RhdGEucGxheWVyVXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVCb2FyZEZvY3VzKGdhbWVTdGF0ZURhdGEpIHtcbiAgICBpZiAoZ2FtZVN0YXRlRGF0YS5pc0dhbWVSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcblxuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICBzd2l0Y2ggKGdhbWVTdGF0ZURhdGEuY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgIGNhc2UgJ1BsYXllciBPbmUnOlxuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQbGF5ZXIgVHdvJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcblxuICAgICAgc3dpdGNoIChnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICBjYXNlICdQbGF5ZXIgT25lJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYXR0YWNrJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQbGF5ZXIgVHdvJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYXR0YWNrJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICNyZWdpb24gQm9hcmQgSW5pdGlhbGl6YXRpb25cblxuICAjbWFwSGFuZGxlcnMoY29udHJvbGxlckFQSSkge1xuICAgIHRoaXMuI3N0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXJBUEkuc3RhcnRHYW1lSGFuZGxlcik7XG4gICAgdGhpcy4jc3dpdGNoQXhpc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuI3RvZ2dsZUhvcml6b250YWwuYmluZCh0aGlzKSk7XG4gICAgdGhpcy4jcmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnJlc3RhcnRSb3VuZEhhbmRsZXIpO1xuICAgIHRoaXMuI2NvbXB1dGVyRW5hYmxlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuI3RvZ2dsZUNvbXB1dGVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI2NvbXB1dGVyRW5hYmxlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXJBUEkuZW5hYmxlQ29tcHV0ZXJIYW5kbGVyKTtcbiAgfVxuXG4gICNpbml0Qm9hcmQoYm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jQ0VMTF9DT1VOVDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxPbmUgPSB0aGlzLiNjcmVhdGVDZWxsKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsVHdvID0gdGhpcy4jY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcblxuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsT25lKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbFR3byk7XG4gICAgfVxuXG4gICAgdGhpcy4jYm9hcmRJbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIENlbGwgQ3JlYXRpb24vU3RhdHVzTXV0YXRpb25cblxuICAjdXBkYXRlQ2VsbE1ldGFEYXRhKGNlbGxOb2RlLCBjZWxsRGF0YSwgcGxheWVyTmFtZSkge1xuICAgIGNvbnN0IGNvb3JkID0gY2VsbERhdGEuZ2V0Q29vcmQoKTtcblxuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHgnLCBjb29yZC5jb29yZFgpO1xuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHknLCBjb29yZC5jb29yZFkpO1xuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGF5ZXJuYW1lJywgcGxheWVyTmFtZSk7XG4gIH1cblxuICAjdXBkYXRlQ2VsbFN0YXR1cyhjZWxsTm9kZSwgY2VsbERhdGEsIGlzUm91bmRSdW5uaW5nKSB7XG4gICAgaWYgKCFjZWxsTm9kZSB8fCAhY2VsbERhdGEpIHJldHVybjtcblxuICAgIGNvbnN0IG5vZGUgPSBjZWxsTm9kZTtcbiAgICBjb25zdCBkYXRhID0gY2VsbERhdGE7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdldEhpdFN0YXR1cygpO1xuXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuTk9UX0hJVDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkZGRkZGJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLkhJVF9TSElQOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRjAwMDAnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX0NFTEw6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNlbGxEYXRhLmlzT2NjdXBpZWQgJiYgaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgfVxuXG4gICNjcmVhdGVDZWxsKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpIHtcbiAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNlbGwnKTtcbiAgICBuZXdDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9hcmRBY3Rpb25IYW5kbGVyKTtcbiAgICBuZXdDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcblxuICAgIHJldHVybiBuZXdDZWxsO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gQ2VsbCBCdWlsZGluZyBQYXRoIEhpbnRpbmdcblxuICAjaGlnaGxpZ2hCdWlsZFBhdHRlcm4oY29vcmQsIGN1cnJlbnRQbGF5ZXJGbGVldFNpemUsIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3Qgc2hpcFNpemVQYXR0ZXJuID0gdGhpcy4jZ2V0U2hpcFNpemVQYXR0ZXJuKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpO1xuXG4gICAgdGhpcy4jaGlnaGxpZ2h0Q2VsbHMoY29vcmQsIHNoaXBTaXplUGF0dGVybiwgY3VycmVudFBsYXllck5hbWUpO1xuICB9XG5cbiAgI2hpZ2hsaWdodENlbGxzKGNvb3JkLCBzaGlwU2l6ZVBhdHRlcm4sIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jaXNIb3Jpem9udGFsO1xuXG4gICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZVBhdHRlcm47IGkgKz0gMSkge1xuICAgICAgICAgIGlmICgoY29vcmQuY29vcmRYICsgc2hpcFNpemVQYXR0ZXJuKSAtIDEgPiB0aGlzLiNCT0FSRF9XSURUSCkgYnJlYWs7XG4gICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1jb29yZHg9XCIke2Nvb3JkLmNvb3JkWCArIGl9XCJdW2RhdGEtY29vcmR5PVwiJHtjb29yZC5jb29yZFl9XCJdW2RhdGEtcGxheWVybmFtZT1cIiR7Y3VycmVudFBsYXllck5hbWV9XCJdYCk7XG4gICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZVBhdHRlcm47IGkgKz0gMSkge1xuICAgICAgICAgIGlmICgoY29vcmQuY29vcmRZICsgc2hpcFNpemVQYXR0ZXJuKSAtIDEgPiB0aGlzLiNCT0FSRF9IRUlHSFQpIGJyZWFrO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtY29vcmR4PVwiJHtjb29yZC5jb29yZFh9XCJdW2RhdGEtY29vcmR5PVwiJHtjb29yZC5jb29yZFkgKyBpfVwiXVtkYXRhLXBsYXllcm5hbWU9XCIke2N1cnJlbnRQbGF5ZXJOYW1lfVwiXWApO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gICNnZXRTaGlwU2l6ZVBhdHRlcm4oY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgIHN3aXRjaCAoY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDI6XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAjdG9nZ2xlSG9yaXpvbnRhbCgpIHtcbiAgICB0aGlzLiNpc0hvcml6b250YWwgPSAhdGhpcy4jaXNIb3Jpem9udGFsO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLWFjdGl2ZScpO1xuICB9XG5cbiAgI3RvZ2dsZUNvbXB1dGVyKCkge1xuICAgIHRoaXMuI2lzQ29tcHV0ZXJFbmFibGVkID0gIXRoaXMuI2lzQ29tcHV0ZXJFbmFibGVkO1xuICAgIHRoaXMuI2NvbXB1dGVyRW5hYmxlZEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdidXR0b24tYWN0aXZlJyk7XG4gICAgY29uc29sZS5sb2codGhpcy4jaXNDb21wdXRlckVuYWJsZWQpO1xuICB9XG5cbiAgZ2V0SXNIb3Jpem9udGFsKCkgeyByZXR1cm4gdGhpcy4jaXNIb3Jpem9udGFsOyB9XG5cbiAgZ2V0IGlzQ29tcHV0ZXJFbmFibGVkKCkgeyByZXR1cm4gdGhpcy4jaXNDb21wdXRlckVuYWJsZWQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlcjtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2VudGl0aWVzL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2VudGl0aWVzL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL2VudGl0aWVzL0dhbWVib2FyZFwiO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4uL2VudGl0aWVzL0Nvb3JkaW5hdGVcIjtcbmltcG9ydCBHYW1lU3RhdGVEYXRhQnVpbGRlciBmcm9tIFwiLi4vZW50aXRpZXMvZGF0YVN0YXRlQ29udGFpbmVycy9HYW1lU3RhdGVEYXRhQnVpbGRlclwiO1xuXG5jbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICNjdXJyZW50UGxheWVyID0gbnVsbDtcblxuICAjaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuXG4gICNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuXG4gICNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICNwbGF5ZXJPbmUgPSBudWxsO1xuXG4gICNwbGF5ZXJUd28gPSBudWxsO1xuXG4gICNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBudWxsO1xuXG4gICNwbGF5ZXJUd29HYW1lYm9hcmQgPSBudWxsO1xuXG4gICNET01Db250cm9sbGVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNET01Db250cm9sbGVyID0gbmV3IERPTUNvbnRyb2xsZXIodGhpcy4jZ2V0QVBJQ29udGFpbmVyKCkpO1xuICAgIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyT25lID0gbmV3IFBsYXllcignUGxheWVyIE9uZScpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1BsYXllciBUd28nKTtcbiAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAvLyBDYWxsYmFjayB0byBsZXQgb3RoZXIgbGF5ZXJzIG9mIHByb2dyYW0gaW50ZXJhY3Qgd2l0aCBvdXIgZ2FtZSBjb250cm9sbGVyXG4gICNib2FyZEFjdGlvbkhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy4jaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgY29uc3QgaXNDZWxsT3duZXIgPSBjZWxsTm9kZS5kYXRhc2V0LnBsYXllcm5hbWUgPT09IHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpO1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuI0RPTUNvbnRyb2xsZXIuZ2V0SXNIb3Jpem9udGFsKCk7XG5cbiAgICBjb25zdCBjb29yZFggPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeDtcbiAgICBjb25zdCBjb29yZFkgPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeTtcblxuICAgIGNvbnN0IGNlbGxDb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcblxuICAgIHN3aXRjaCAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgLy8gdG8gbGV0IHBsYXllciBwbGFjZSBzaGlwcyBvbiBISVMgT1dOIGJvYXJkIG9ubHlcbiAgICAgICAgaWYgKGlzQ2VsbE93bmVyID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLiNwbGFjZVNoaXBIYW5kbGVyKGNlbGxDb29yZCwgaXNIb3Jpem9udGFsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgLy8gdG8gbGV0IHBsYXllciBhdHRhY2sgc2hpcHMgb24gSElTIE9QUE9ORU5UJ1MgYm9hcmQgb25seVxuICAgICAgICBpZiAoaXNDZWxsT3duZXIgPT09IHRydWUpIHJldHVybjtcbiAgICAgICAgdGhpcy4jYXR0YWNrSGFuZGxlcihjZWxsQ29vcmQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHRoaXMuI0RPTUNvbnRyb2xsZXIuaXNDb21wdXRlckVuYWJsZWQpO1xuICAgIGlmICh0aGlzLiNET01Db250cm9sbGVyLmlzQ29tcHV0ZXJFbmFibGVkID09PSB0cnVlICYmIHRoaXMuI2lzUGxheWVyT25lVHVybiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuI2NvbXB1dGVyQWN0aW9uSGFuZGxlcigpO1xuICAgIH1cblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjZWxsQ29vcmQpO1xuICB9XG5cbiAgI2VuYWJsZUNvbXB1dGVySGFuZGxlcigpIHtcbiAgICB0aGlzLiNyZXN0YXJ0Um91bmRIYW5kbGVyKCk7XG4gIH1cblxuICAjY29tcHV0ZXJBY3Rpb25IYW5kbGVyKCkge1xuICAgIGlmKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBpZih0aGlzLiNpc1JvdW5kUnVubmluZyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4jY29tcHV0ZXJBdHRhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY29tcHV0ZXJCdWlsZEZsZWV0KCk7XG4gICAgfVxuICB9XG5cbiAgI2NvbXB1dGVyQXR0YWNrKCkge1xuICAgIGxldCBybmRDb29yZCA9IG51bGw7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgcm5kQ29vcmQgPSB0aGlzLiNnZXRSYW5kb21Db29yZCgpO1xuXG4gICAgcmVzdWx0ID0gdGhpcy4jYXR0YWNrSGFuZGxlcihybmRDb29yZCk7XG5cbiAgICBjb25zb2xlLmxvZyhgUk5EIFg6ICR7cm5kQ29vcmQuY29vcmRYfSBSTkQgWTogJHtybmRDb29yZC5jb29yZFl9YCk7XG4gICAgY29uc29sZS5sb2coYFJFU1VMVDogJHtyZXN1bHR9YCk7XG4gIH1cblxuICAjY29tcHV0ZXJCdWlsZEZsZWV0KCkge1xuICAgIGxldCBybmRDb29yZCA9IG51bGw7XG4gICAgbGV0IHJuZElzSG9yaXpvbnRhbCA9IGZhbHNlO1xuXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZmxlZXRTaXplICE9PSA1KSB7XG4gICAgICBybmRDb29yZCA9IHRoaXMuI2dldFJhbmRvbUNvb3JkKCk7XG5cbiAgICAgIHJuZElzSG9yaXpvbnRhbCA9IEJvb2xlYW4oTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSk7XG4gICAgICByZXN1bHQgPSB0aGlzLiNwbGFjZVNoaXBIYW5kbGVyKHJuZENvb3JkLCBybmRJc0hvcml6b250YWwpO1xuXG4gICAgICBjb25zb2xlLmxvZyhgUk5EIFg6ICR7cm5kQ29vcmQuY29vcmRYfSBSTkQgWTogJHtybmRDb29yZC5jb29yZFl9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgUkVTVUxUOiAke3Jlc3VsdH1gKTtcbiAgICB9XG4gIH1cblxuICAjZ2V0UmFuZG9tQ29vcmQoKSB7XG4gICAgY29uc3Qgcm5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZC53aWR0aCArIDEpO1xuICAgIGNvbnN0IHJuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuaGVpZ2h0ICsgMSk7XG5cbiAgICBjb25zdCBybmRDb29yZCA9IG5ldyBDb29yZGluYXRlKHJuZFgsIHJuZFkpO1xuXG4gICAgcmV0dXJuIHJuZENvb3JkO1xuICB9XG5cbiAgI3N0YXJ0R2FtZUhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IHRydWUpIHJldHVybjtcblxuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAjcmVzdGFydFJvdW5kSGFuZGxlcigpIHtcbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAjdXBkYXRlR2FtZVVJKGN1cnJlbnRDZWxsQ29vcmQpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gdGhpcy4jZ2V0R2FtZVN0YXRlRGF0YSgpO1xuXG4gICAgdGhpcy4jRE9NQ29udHJvbGxlci51cGRhdGVVSShnYW1lU3RhdGVEYXRhLCBjdXJyZW50Q2VsbENvb3JkKTtcbiAgfVxuXG4gICN1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKGNlbGxOb2RlLmRhdGFzZXQucGxheWVybmFtZSAhPT0gdGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuXG4gICAgY29uc3QgY3VycmVudENlbGxDb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKTtcbiAgfVxuXG4gICNnZXRHYW1lU3RhdGVEYXRhKCkge1xuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGFCdWlsZGVyID0gbmV3IEdhbWVTdGF0ZURhdGFCdWlsZGVyKCk7XG5cbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gZ2FtZVN0YXRlRGF0YUJ1aWxkZXJcbiAgICAgIC5zZXRDdXJyZW50VXNlck5hbWUodGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0SXNHYW1lUnVubmluZyh0aGlzLiNpc0dhbWVSdW5uaW5nKVxuICAgICAgLnNldElzUm91bmRSdW5uaW5nKHRoaXMuI2lzUm91bmRSdW5uaW5nKVxuICAgICAgLnNldElzUGxheWVyT25lVHVybih0aGlzLiNpc1BsYXllck9uZVR1cm4pXG4gICAgICAuc2V0UGxheWVyT25lVXNlck5hbWUodGhpcy4jcGxheWVyT25lLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJUd29Vc2VyTmFtZSh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldFBsYXllck9uZUdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuc2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0R2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyTmFtZSgpKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVGbGVldFNpemUodGhpcy4jcGxheWVyT25lLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRQbGF5ZXJUd29GbGVldFNpemUodGhpcy4jcGxheWVyVHdvLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRDdXJyZW50UGxheWVyRmxlZXRTaXplKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZmxlZXRTaXplKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICByZXR1cm4gZ2FtZVN0YXRlRGF0YTtcbiAgfVxuXG4gIC8vIFRvIGNoZWNrIGlmIHJvdW5kIHNob3VsZCBzdGFydCBvbmNlIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4gICNzdGFydFJvdW5kKCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUgJiYgdGhpcy4jcGxheWVyVHdvLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IHRydWU7XG4gICAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gICNlbmRHYW1lKHBsYXllcldpbm5lcikge1xuICAgIGlmIChwbGF5ZXJXaW5uZXIgPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllclR3bztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB9XG5cbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSAhdGhpcy4jaXNQbGF5ZXJPbmVUdXJuO1xuICB9XG5cbiAgI2dldFdpbm5lcigpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyVHdvO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAjYXR0YWNrSGFuZGxlcihjb29yZCkge1xuICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IHRoaXMuI2F0dGFja0NlbGwoY29vcmQpO1xuICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcblxuICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuI2dldFdpbm5lcigpO1xuXG4gICAgaWYgKHdpbm5lciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jZW5kR2FtZSh3aW5uZXIpO1xuICAgICAgY29uc29sZS5sb2coYHBsYXllciAke3dpbm5lci5nZXRQbGF5ZXJOYW1lKCl9IHdvbmApO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gIH1cblxuICAjYXR0YWNrQ2VsbChjb29yZCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgY3VycmVudEJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAjcGxhY2VTaGlwSGFuZGxlcihjb29yZCwgaXNIb3Jpem9udGFsKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy4jcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpO1xuXG4gICAgdGhpcy4jc3RhcnRSb3VuZCgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gICNwbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZykgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuICAgIGxldCBuZXdTaGlwID0gbnVsbDtcbiAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIC8vIFRvIGJ1aWxkIHNoaXBzIGluIHByZS1kZXRlcm1pbmVkIHBhdHRlcm4gKDUsNCwzLDMsMilcbiAgICBzd2l0Y2ggKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNSk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMToge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNCk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgNDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMik7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFBsYXllcnMgc2hvdWxkIHRha2UgdHVybnMgYWZ0ZXIgYnVpbGRpbmcgdGhlaXIgZW50aXJlIGZsZWV0XG4gICAgaWYgKGlzUGxhY2VkKSB7XG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyLmFkZFNoaXAobmV3U2hpcCk7XG5cbiAgICAgIGlmICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBpc1BsYWNlZDogJHtpc1BsYWNlZH1gKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gICNnZXRBUElDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0R2FtZUhhbmRsZXI6IHRoaXMuI3N0YXJ0R2FtZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGJvYXJkQWN0aW9uSGFuZGxlcjogdGhpcy4jYm9hcmRBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICByZXN0YXJ0Um91bmRIYW5kbGVyOiB0aGlzLiNyZXN0YXJ0Um91bmRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcjogdGhpcy4jdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGVuYWJsZUNvbXB1dGVySGFuZGxlcjogdGhpcy4jZW5hYmxlQ29tcHV0ZXJIYW5kbGVyLmJpbmQodGhpcylcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi9IaXRTdGF0dXNcIjtcblxuY2xhc3MgQm9hcmRDZWxsIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI3NoaXAgPSBudWxsO1xuXG4gICAgI2lzT2NjdXBpZWQgPSBmYWxzZTtcblxuICAgICNoYXNCZWVuSGl0ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBvY2N1cHkoc2hpcCkge1xuICAgICAgICBpZiAodGhpcy4jc2hpcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2lzT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiNzaGlwID0gc2hpcDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNoYXNCZWVuSGl0ID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaGFzQmVlbkhpdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgIHRoaXMuI3NoaXAudHJ5SGl0KHRoaXMuI2Nvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldENvb3JkKCkgeyByZXR1cm4gdGhpcy4jY29vcmQ7IH1cblxuICAgIGdldENvb3JkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFg6ICR7dGhpcy4jY29vcmQuY29vcmRYfSBZOiAke3RoaXMuI2Nvb3JkLmNvb3JkWX1gO1xuICAgIH1cblxuICAgIGdldEhpdFN0YXR1cygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLiNoYXNCZWVuSGl0KSB7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLk5PVF9ISVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX1NISVA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9DRUxMO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc09jY3VwaWVkKCkgeyByZXR1cm4gdGhpcy4jaXNPY2N1cGllZDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZENlbGw7IiwiY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgI2Nvb3JkWCA9IDA7XG5cbiAgICAjY29vcmRZID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkWCA9IGNvb3JkWDtcbiAgICAgICAgdGhpcy4jY29vcmRZID0gY29vcmRZO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRYLCAxMCk7IH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRZLCAxMCk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRpbmF0ZTsiLCJpbXBvcnQgQm9hcmRDZWxsIGZyb20gXCIuL0JvYXJkQ2VsbFwiO1xuaW1wb3J0IEdhbWVib2FyZERhdGFCdWlsZGVyIGZyb20gXCIuL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICAjd2lkdGggPSAxMDtcblxuICAgICNoZWlnaHQgPSAxMDtcblxuICAgICNib2FyZCA9IFtdO1xuXG4gICAgLy8gc3dhcHBpbmcgc3VwcG9zZWRseSBYIGFuZCBZIGNvb3JkaW5hdGVzIGhlcmUgYmVjYXVzZSBvZiBmYWlsZWQgYXR0ZW1wdCB0byBpbXBsZW1lbnQgMkQgYXJyYXlzIGluIEphdmFTY3JpcHQuLi5cbiAgICAjc2hpcExpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNpbml0Qm9hcmQoKTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNjYW5QbGFjZShzaGlwLmdldENvb3JkU3RhcnQoKSwgaXNIb3Jpem9udGFsLCBsZW5ndGgpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuI3NoaXBMaXN0LnB1c2goc2hpcCk7XG5cbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWSAtIDFdWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFggLSAxKSArIGldO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbKHNoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWSAtIDEpICsgaV1bc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMV07XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2JvYXJkW2Nvb3JkLmNvb3JkWSAtIDFdW2Nvb3JkLmNvb3JkWCAtIDFdLmhpdCgpO1xuICAgIH1cbiAgICBcbiAgICBnZXRHYW1lYm9hcmREYXRhKHBsYXllclVzZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGFCdWlsZGVyID0gbmV3IEdhbWVib2FyZERhdGFCdWlsZGVyKCk7XG5cbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YSA9IGdhbWVib2FyZERhdGFCdWlsZGVyLnNldEJvYXJkRGF0YSh0aGlzLiNib2FyZClcbiAgICAgICAgLnNldFBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKVxuICAgICAgICAuc2V0QWxsU2hpcHNTdW5rKHRoaXMuYWxsU2hpcHNTdW5rKCkpXG4gICAgICAgIC5idWlsZCgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZERhdGE7XG4gICAgfVxuICAgIFxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoaXBMaXN0LmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuICAgIFxuICAgICNjYW5QbGFjZShjb29yZFN0YXJ0LCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBzd2l0Y2ggKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICAgICAgLy8gdG8gZXhjbHVkZSBzdGFydGluZyBwb2ludCBmcm9tIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKChjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgbGVuZ3RoID4gdGhpcy4jd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbY29vcmRTdGFydC5jb29yZFkgLSAxXVsoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgLy8gdG8gZXhjbHVkZSBzdGFydGluZyBwb2ludCBmcm9tIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKChjb29yZFN0YXJ0LmNvb3JkWSAtIDEpICsgbGVuZ3RoID4gdGhpcy4jaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhjb29yZFN0YXJ0LmNvb3JkWSAtIDEpICsgaV1bY29vcmRTdGFydC5jb29yZFggLSAxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5pdEJvYXJkKCkge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmQubGVuZ3RoICE9PSAwKSByZXR1cm47XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLiN3aWR0aDsgeCArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLiNib2FyZC5wdXNoKFtdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLiNoZWlnaHQ7IHkgKz0gMSkge1xuICAgICAgICAgICAgICAgIC8vIHN3YXBwaW5nIHZhbHVlcyBkdWUgdG8gd3JvbmcgY2VsbCBkYXRhIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgZW1wdHlDZWxsID0gbmV3IEJvYXJkQ2VsbCh5ICsgMSwgeCArIDEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jYm9hcmRbeF0ucHVzaChlbXB0eUNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy4jd2lkdGh9O1xuXG4gICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuI2hlaWdodH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImZ1bmN0aW9uIGhpdFN0YXR1cygpIHtcbiAgICBjb25zdCBOT1RfSElUID0gJ05PVF9ISVQnO1xuICAgIGNvbnN0IEhJVF9DRUxMID0gJ0hJVF9DRUxMJztcbiAgICBjb25zdCBISVRfU0hJUCA9ICdISVRfU0hJUCc7XG4gICAgY29uc3QgQlVJTERJTkdfU0hJUCA9ICdCVUlMRElOR19TSElQJztcblxuICAgIHJldHVybiB7XG4gICAgICAgIE5PVF9ISVQsXG4gICAgICAgIEhJVF9DRUxMLFxuICAgICAgICBISVRfU0hJUCxcbiAgICAgICAgQlVJTERJTkdfU0hJUFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoaXRTdGF0dXM7IiwiY2xhc3MgUGxheWVyIHtcbiAgI3BsYXllck5hbWUgPSAnJztcblxuICAjaGl0TG9nID0gW107XG5cbiAgI3BsYXllclNoaXBzID0gW107XG5cbiAgY29uc3RydWN0b3IodXNlck5hbWUpIHtcbiAgICB0aGlzLiNwbGF5ZXJOYW1lID0gdXNlck5hbWU7XG4gIH1cblxuICBsb2dIaXQoY29vcmQpIHtcbiAgICB0aGlzLiNoaXRMb2cucHVzaChjb29yZCk7XG4gIH1cblxuICBhZGRTaGlwKHNoaXApIHtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgZ2V0SGl0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRMb2cuc2xpY2UoKTtcbiAgfVxuXG4gIGdldFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5zbGljZSgpO1xuICB9XG5cbiAgcmVzZXRVc2VyKCkge1xuICAgIHRoaXMuI2hpdExvZyA9IFtdO1xuICAgIHRoaXMuI3BsYXllclNoaXBzID0gW107XG4gIH1cblxuICBnZXRQbGF5ZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJOYW1lO1xuICB9O1xuXG4gIGdldCBmbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5sZW5ndGg7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImltcG9ydCBTaGlwUGllY2UgZnJvbSBcIi4vU2hpcFBpZWNlXCI7XG5cbmNsYXNzIFNoaXAge1xuICAjdGltZXNIaXQgPSAwO1xuXG4gICNzaGlwUGllY2VzID0gW107XG4gIFxuICAjY29vcmRTdGFydCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgdGhpcy4jY29vcmRTdGFydCA9IGNvb3JkU3RhcnRcbiAgICB0aGlzLiNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKTtcbiAgfVxuXG4gIHRyeUhpdChoaXRDb29yZCkge1xuICAgIGNvbnN0IHNoaXBQaWVjZSA9IHRoaXMuI3NoaXBQaWVjZXMuZmluZChwaWVjZUNvb3JkID0+XG4gICAgICAocGllY2VDb29yZC5jb29yZFggPT09IGhpdENvb3JkLmNvb3JkWCkgJiYgKHBpZWNlQ29vcmQuY29vcmRZID09PSBoaXRDb29yZC5jb29yZFkpXG4gICAgKTtcblxuICAgIGlmIChzaGlwUGllY2UgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlKSByZXR1cm4gZmFsc2U7IFxuXG4gICAgdGhpcy4jdGltZXNIaXQgKz0gMTtcblxuICAgIHJldHVybiBzaGlwUGllY2UuaGl0KCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMuZXZlcnkoc2hpcFBpZWNlID0+XG4gICAgICBzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlXG4gICAgKTtcbiAgfVxuXG4gICNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHNoaXBQaWVjZUNvb3JkID0gbnVsbDtcblxuICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYICsgaSwgY29vcmRTdGFydC5jb29yZFkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYLCBjb29yZFN0YXJ0LmNvb3JkWSArIGkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiNzaGlwUGllY2VzLnB1c2goc2hpcFBpZWNlQ29vcmQpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvb3JkU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Nvb3JkU3RhcnQ7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5sZW5ndGg7IH1cblxuICBnZXQgdGltZXNIaXQoKSB7IHJldHVybiB0aGlzLiN0aW1lc0hpdDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcblxuY2xhc3MgU2hpcFBpZWNlIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI2hpdFN0YXR1cyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLiNoaXRTdGF0dXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy4jaGl0U3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFggfVxuXG4gICAgZ2V0IGNvb3JkWSgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWTsgfVxuXG4gICAgZ2V0IGhpdFN0YXR1cygpIHsgcmV0dXJuIHRoaXMuI2hpdFN0YXR1czsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwUGllY2U7IiwiY2xhc3MgR2FtZVN0YXRlRGF0YSB7XG4gICAgI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTtcblxuICAgICNpc0dhbWVSdW5uaW5nO1xuXG4gICAgI2lzUm91bmRSdW5uaW5nO1xuXG4gICAgI2lzUGxheWVyT25lVHVybjtcblxuICAgICNwbGF5ZXJPbmVVc2VyTmFtZTtcblxuICAgICNwbGF5ZXJUd29Vc2VyTmFtZTtcblxuICAgICNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuXG4gICAgI3BsYXllclR3b0dhbWVib2FyZERhdGE7XG5cbiAgICAjcGxheWVyT25lRmxlZXRTaXplO1xuXG4gICAgI3BsYXllclR3b0ZsZWV0U2l6ZTtcblxuICAgICNjdXJyZW50UGxheWVyRmxlZXRTaXplO1xuXG4gICAgZ2V0IGN1cnJlbnRVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgc2V0IGN1cnJlbnRVc2VyTmFtZShjdXJyZW50VXNlck5hbWUpIHsgdGhpcy4jY3VycmVudFBsYXllclVzZXJOYW1lID0gY3VycmVudFVzZXJOYW1lOyB9XG5cbiAgICBnZXQgaXNHYW1lUnVubmluZygpIHsgcmV0dXJuIHRoaXMuI2lzR2FtZVJ1bm5pbmc7IH1cblxuICAgIHNldCBpc0dhbWVSdW5uaW5nKGlzR2FtZVJ1bm5pbmcpIHsgdGhpcy4jaXNHYW1lUnVubmluZyA9IGlzR2FtZVJ1bm5pbmc7IH1cblxuICAgIGdldCBpc1JvdW5kUnVubmluZygpIHsgcmV0dXJuIHRoaXMuI2lzUm91bmRSdW5uaW5nOyB9XG5cbiAgICBzZXQgaXNSb3VuZFJ1bm5pbmcoaXNSb3VuZFJ1bm5pbmcpIHsgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBpc1JvdW5kUnVubmluZzsgfVxuXG4gICAgZ2V0IGlzUGxheWVyT25lVHVybigpIHsgcmV0dXJuIHRoaXMuI2lzUGxheWVyT25lVHVybjsgfVxuXG4gICAgc2V0IGlzUGxheWVyT25lVHVybihpc1BsYXllck9uZVR1cm4pIHsgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gaXNQbGF5ZXJPbmVUdXJuOyB9XG5cbiAgICBnZXQgcGxheWVyT25lVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVVc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllck9uZVVzZXJOYW1lKHBsYXllck9uZVVzZXJOYW1lKSB7IHRoaXMuI3BsYXllck9uZVVzZXJOYW1lID0gcGxheWVyT25lVXNlck5hbWU7IH1cblxuICAgIGdldCBwbGF5ZXJUd29Vc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b1VzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvVXNlck5hbWUocGxheWVyVHdvVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyVHdvVXNlck5hbWUgPSBwbGF5ZXJUd29Vc2VyTmFtZTsgfVxuXG4gICAgZ2V0IHBsYXllck9uZUdhbWVib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhOyB9XG5cbiAgICBzZXQgcGxheWVyT25lR2FtZWJvYXJkRGF0YShwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKSB7IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZERhdGEgPSBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyVHdvR2FtZWJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZERhdGE7IH1cblxuICAgIHNldCBwbGF5ZXJUd29HYW1lYm9hcmREYXRhKHBsYXllclR3b0dhbWVib2FyZERhdGEpIHsgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkRGF0YSA9IHBsYXllclR3b0dhbWVib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJPbmVGbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVGbGVldFNpemU7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVGbGVldFNpemUocGxheWVyT25lRmxlZXRTaXplKSB7IHRoaXMuI3BsYXllck9uZUZsZWV0U2l6ZSA9IHBsYXllck9uZUZsZWV0U2l6ZTsgfVxuICAgIFxuICAgIGdldCBwbGF5ZXJUd29GbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29GbGVldFNpemU7IH1cblxuICAgIHNldCBwbGF5ZXJUd29GbGVldFNpemUocGxheWVyVHdvRmxlZXRTaXplKSB7IHRoaXMuI3BsYXllclR3b0ZsZWV0U2l6ZSA9IHBsYXllclR3b0ZsZWV0U2l6ZTsgfVxuXG4gICAgZ2V0IGN1cnJlbnRQbGF5ZXJGbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNjdXJyZW50UGxheWVyRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgY3VycmVudFBsYXllckZsZWV0U2l6ZShjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7IHRoaXMuI2N1cnJlbnRQbGF5ZXJGbGVldFNpemUgPSBjdXJyZW50UGxheWVyRmxlZXRTaXplOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZURhdGE7IiwiaW1wb3J0IEdhbWVTdGF0ZURhdGEgZnJvbSBcIi4vR2FtZVN0YXRlRGF0YVwiO1xuXG5jbGFzcyBHYW1lU3RhdGVEYXRhQnVpbGRlciB7XG4gICAgI2dhbWVTdGF0ZURhdGEgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEgPSBuZXcgR2FtZVN0YXRlRGF0YSgpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRVc2VyTmFtZShjdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUgPSBjdXJyZW50VXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzR2FtZVJ1bm5pbmcoaXNHYW1lUnVubmluZykge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcgPSBpc0dhbWVSdW5uaW5nO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc1JvdW5kUnVubmluZyhpc1JvdW5kUnVubmluZykge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID0gaXNSb3VuZFJ1bm5pbmc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzUGxheWVyT25lVHVybihpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc1BsYXllck9uZVR1cm4gPSBpc1BsYXllck9uZVR1cm47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZVVzZXJOYW1lKHBsYXllck9uZVVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lVXNlck5hbWUgPSBwbGF5ZXJPbmVVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvVXNlck5hbWUocGxheWVyVHdvVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29Vc2VyTmFtZSA9IHBsYXllclR3b1VzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHBsYXllck9uZUdhbWVib2FyZERhdGEpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVHYW1lYm9hcmREYXRhID0gcGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YShwbGF5ZXJUd29HYW1lYm9hcmREYXRhKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvR2FtZWJvYXJkRGF0YSA9IHBsYXllclR3b0dhbWVib2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZUZsZWV0U2l6ZShwbGF5ZXJPbmVGbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVGbGVldFNpemUgPSBwbGF5ZXJPbmVGbGVldFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b0ZsZWV0U2l6ZShwbGF5ZXJUd29GbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29GbGVldFNpemUgPSBwbGF5ZXJUd29GbGVldFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRQbGF5ZXJGbGVldFNpemUoY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmN1cnJlbnRQbGF5ZXJGbGVldFNpemUgPSBjdXJyZW50UGxheWVyRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YSA9IG5ldyBHYW1lU3RhdGVEYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVTdGF0ZURhdGEgPSB0aGlzLiNnYW1lU3RhdGVEYXRhO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBnYW1lU3RhdGVEYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlRGF0YUJ1aWxkZXI7IiwiY2xhc3MgR2FtZWJvYXJkRGF0YSB7XG4gICAgI2JvYXJkRGF0YSA9IG51bGw7XG5cbiAgICAjcGxheWVyVXNlck5hbWUgPSAnJztcblxuICAgICNhbGxTaGlwc1N1bmsgPSBudWxsO1xuXG4gICAgc2V0Qm9hcmREYXRhKGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ29weSA9IGJvYXJkLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkRGF0YSA9IFtdO1xuXG4gICAgICAgIGJvYXJkQ29weS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBib2FyZERhdGEucHVzaCguLi5yb3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNib2FyZERhdGEgPSBib2FyZERhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI2JvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllclVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJVc2VyTmFtZSA9IHBsYXllclVzZXJOYW1lOyB9XG5cbiAgICBnZXQgYWxsU2hpcHNTdW5rKCkgeyByZXR1cm4gdGhpcy4jYWxsU2hpcHNTdW5rOyB9XG5cbiAgICBzZXQgYWxsU2hpcHNTdW5rKGFsbFNoaXBzU3VuaykgeyB0aGlzLiNhbGxTaGlwc1N1bmsgPSBhbGxTaGlwc1N1bms7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkRGF0YTsiLCJpbXBvcnQgR2FtZWJvYXJkRGF0YSBmcm9tIFwiLi9HYW1lYm9hcmREYXRhXCI7XG5cbmNsYXNzIEdhbWVCb2FyZERhdGFCdWlsZGVyIHtcbiAgICAjZ2FtZWJvYXJkRGF0YSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YSA9IG5ldyBHYW1lYm9hcmREYXRhKCk7XG4gICAgfVxuXG4gICAgc2V0Qm9hcmREYXRhKGdhbWVib2FyZCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLnNldEJvYXJkRGF0YShnYW1lYm9hcmQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLnBsYXllclVzZXJOYW1lID0gcGxheWVyVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFsbFNoaXBzU3VuayhhbGxTaGlwc1N1bmspIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5hbGxTaGlwc1N1bmsgPSBhbGxTaGlwc1N1bms7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgICNyZXNldCgpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YSA9IG5ldyBHYW1lYm9hcmREYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGEgPSB0aGlzLiNnYW1lYm9hcmREYXRhO1xuICAgICAgICB0aGlzLiNyZXNldCgpO1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZERhdGFCdWlsZGVyOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS11aS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMmVtO1xuXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ2J1dHRvbidcbiAgICAnYm9hcmQnO1xufVxuXG4uY29udHJvbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW1cbn1cblxuLmJvYXJkcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBnYXA6IDJlbTtcbn1cblxuLmJvYXJkIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICBncmlkLWFyZWE6IGJvYXJkO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmJvYXJkLWFjdGl2ZS1idWlsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5cbi5ib2FyZC1hY3RpdmUtYXR0YWNrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uYm9hcmQtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYm9hcmQtY2VsbDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5cbi5idXR0b24ge1xuICBncmlkLWFyZWE6IGJ1dHRvbjtcblxuICBwYWRkaW5nOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24tYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFROztFQUVSOztXQUVTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS11aS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnYnV0dG9uJ1xcbiAgICAnYm9hcmQnO1xcbn1cXG5cXG4uY29udHJvbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbVxcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICBncmlkLWFyZWE6IGJvYXJkO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5ib2FyZC1hY3RpdmUtYnVpbGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLmJvYXJkLWFjdGl2ZS1hdHRhY2sge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvYXJkLWNlbGw6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG5cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uLWFjdGl2ZSB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9HYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6WyJoaXRTdGF0dXMiLCJfQk9BUkRfV0lEVEgiLCJXZWFrTWFwIiwiX0JPQVJEX0hFSUdIVCIsIl9DRUxMX0NPVU5UIiwiX2JvYXJkUGxheWVyT25lIiwiX2JvYXJkUGxheWVyVHdvIiwiX3N0YXJ0R2FtZUJ1dHRvbiIsIl9zd2l0Y2hBeGlzQnV0dG9uIiwiX3Jlc3RhcnRHYW1lQnV0dG9uIiwiX2NvbXB1dGVyRW5hYmxlZEJ1dHRvbiIsIl9ib2FyZEluaXQiLCJfaXNIb3Jpem9udGFsIiwiX2lzQ29tcHV0ZXJFbmFibGVkIiwiX3VwZGF0ZUJvYXJkIiwiV2Vha1NldCIsIl91cGRhdGVCb2FyZEZvY3VzIiwiX21hcEhhbmRsZXJzIiwiX2luaXRCb2FyZCIsIl91cGRhdGVDZWxsTWV0YURhdGEiLCJfdXBkYXRlQ2VsbFN0YXR1cyIsIl9jcmVhdGVDZWxsIiwiX2hpZ2hsaWdoQnVpbGRQYXR0ZXJuIiwiX2hpZ2hsaWdodENlbGxzIiwiX2dldFNoaXBTaXplUGF0dGVybiIsIl90b2dnbGVIb3Jpem9udGFsIiwiX3RvZ2dsZUNvbXB1dGVyIiwiRE9NQ29udHJvbGxlciIsImNvbnRyb2xsZXJBUEkiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIndyaXRhYmxlIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9pbml0Qm9hcmQyIiwiY2FsbCIsImJvYXJkQWN0aW9uSGFuZGxlciIsInVwZGF0ZUJvYXJkSGludHNIYW5kbGVyIiwiX21hcEhhbmRsZXJzMiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInVwZGF0ZVVJIiwiZ2FtZVN0YXRlRGF0YSIsImN1cnJlbnRDZWxsQ29vcmQiLCJfdXBkYXRlQm9hcmQyIiwiX3VwZGF0ZUJvYXJkRm9jdXMyIiwiaXNHYW1lUnVubmluZyIsIl9oaWdobGlnaEJ1aWxkUGF0dGVybjIiLCJjdXJyZW50UGxheWVyRmxlZXRTaXplIiwiY3VycmVudFVzZXJOYW1lIiwiZ2V0SXNIb3Jpem9udGFsIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiZ2V0IiwiZ2FtZWJvYXJkT25lRGF0YSIsInBsYXllck9uZUdhbWVib2FyZERhdGEiLCJnYW1lYm9hcmRUd29EYXRhIiwicGxheWVyVHdvR2FtZWJvYXJkRGF0YSIsImkiLCJub2RlQm9hcmRPbmUiLCJjaGlsZE5vZGVzIiwiZGF0YUJvYXJkT25lIiwiYm9hcmREYXRhIiwibm9kZUJvYXJkVHdvIiwiZGF0YUJvYXJkVHdvIiwiaXNQbGF5ZXJPbmVUdXJuIiwiaXNSb3VuZFJ1bm5pbmciLCJfdXBkYXRlQ2VsbFN0YXR1czIiLCJfdXBkYXRlQ2VsbE1ldGFEYXRhMiIsInBsYXllclVzZXJOYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZUhhbmRsZXIiLCJfdG9nZ2xlSG9yaXpvbnRhbDIiLCJiaW5kIiwicmVzdGFydFJvdW5kSGFuZGxlciIsIl90b2dnbGVDb21wdXRlcjIiLCJlbmFibGVDb21wdXRlckhhbmRsZXIiLCJuZXdCb2FyZENlbGxPbmUiLCJfY3JlYXRlQ2VsbDIiLCJuZXdCb2FyZENlbGxUd28iLCJhcHBlbmRDaGlsZCIsIl9jbGFzc1ByaXZhdGVGaWVsZFNldCIsImNlbGxOb2RlIiwiY2VsbERhdGEiLCJwbGF5ZXJOYW1lIiwiY29vcmQiLCJnZXRDb29yZCIsInNldEF0dHJpYnV0ZSIsImNvb3JkWCIsImNvb3JkWSIsIm5vZGUiLCJkYXRhIiwic3RhdHVzIiwiZ2V0SGl0U3RhdHVzIiwiTk9UX0hJVCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiSElUX1NISVAiLCJISVRfQ0VMTCIsImlzT2NjdXBpZWQiLCJuZXdDZWxsIiwiY3JlYXRlRWxlbWVudCIsImN1cnJlbnRQbGF5ZXJOYW1lIiwic2hpcFNpemVQYXR0ZXJuIiwiX2dldFNoaXBTaXplUGF0dGVybjIiLCJfaGlnaGxpZ2h0Q2VsbHMyIiwiaXNIb3Jpem9udGFsIiwiY3VycmVudE5vZGUiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwidG9nZ2xlIiwiY29uc29sZSIsImxvZyIsIlBsYXllciIsIlNoaXAiLCJHYW1lYm9hcmQiLCJDb29yZGluYXRlIiwiR2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJfY3VycmVudFBsYXllciIsIl9pc0dhbWVSdW5uaW5nIiwiX2lzUm91bmRSdW5uaW5nIiwiX2lzUGxheWVyT25lVHVybiIsIl9wbGF5ZXJPbmUiLCJfcGxheWVyVHdvIiwiX3BsYXllck9uZUdhbWVib2FyZCIsIl9wbGF5ZXJUd29HYW1lYm9hcmQiLCJfRE9NQ29udHJvbGxlciIsIl9ib2FyZEFjdGlvbkhhbmRsZXIiLCJfZW5hYmxlQ29tcHV0ZXJIYW5kbGVyIiwiX2NvbXB1dGVyQWN0aW9uSGFuZGxlciIsIl9jb21wdXRlckF0dGFjayIsIl9jb21wdXRlckJ1aWxkRmxlZXQiLCJfZ2V0UmFuZG9tQ29vcmQiLCJfc3RhcnRHYW1lSGFuZGxlciIsIl9yZXN0YXJ0Um91bmRIYW5kbGVyIiwiX3VwZGF0ZUdhbWVVSSIsIl91cGRhdGVCb2FyZEhpbnRzSGFuZGxlciIsIl9nZXRHYW1lU3RhdGVEYXRhIiwiX3N0YXJ0Um91bmQiLCJfZW5kR2FtZSIsIl9zd2l0Y2hDdXJyZW50UGxheWVyIiwiX2dldFdpbm5lciIsIl9hdHRhY2tIYW5kbGVyIiwiX2F0dGFja0NlbGwiLCJfcGxhY2VTaGlwSGFuZGxlciIsIl9wbGFjZVNoaXAiLCJfZ2V0QVBJQ29udGFpbmVyIiwiR2FtZUNvbnRyb2xsZXIiLCJfZ2V0QVBJQ29udGFpbmVyMiIsIl91cGRhdGVHYW1lVUkyIiwiX2JvYXJkQWN0aW9uSGFuZGxlcjIiLCJldmVudCIsInRhcmdldCIsImlzQ2VsbE93bmVyIiwiZGF0YXNldCIsInBsYXllcm5hbWUiLCJnZXRQbGF5ZXJOYW1lIiwiY29vcmR4IiwiY29vcmR5IiwiY2VsbENvb3JkIiwiX3BsYWNlU2hpcEhhbmRsZXIyIiwiX2F0dGFja0hhbmRsZXIyIiwiaXNDb21wdXRlckVuYWJsZWQiLCJfY29tcHV0ZXJBY3Rpb25IYW5kbGVyMiIsIl9lbmFibGVDb21wdXRlckhhbmRsZXIyIiwiX3Jlc3RhcnRSb3VuZEhhbmRsZXIyIiwiX2NvbXB1dGVyQXR0YWNrMiIsIl9jb21wdXRlckJ1aWxkRmxlZXQyIiwicm5kQ29vcmQiLCJyZXN1bHQiLCJfZ2V0UmFuZG9tQ29vcmQyIiwicm5kSXNIb3Jpem9udGFsIiwiZmxlZXRTaXplIiwiQm9vbGVhbiIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInJuZFgiLCJmbG9vciIsIndpZHRoIiwicm5kWSIsImhlaWdodCIsIl9zdGFydEdhbWVIYW5kbGVyMiIsIl9nZXRHYW1lU3RhdGVEYXRhMiIsIl91cGRhdGVCb2FyZEhpbnRzSGFuZGxlcjIiLCJnYW1lU3RhdGVEYXRhQnVpbGRlciIsInNldEN1cnJlbnRVc2VyTmFtZSIsInNldElzR2FtZVJ1bm5pbmciLCJzZXRJc1JvdW5kUnVubmluZyIsInNldElzUGxheWVyT25lVHVybiIsInNldFBsYXllck9uZVVzZXJOYW1lIiwic2V0UGxheWVyVHdvVXNlck5hbWUiLCJzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiZ2V0R2FtZWJvYXJkRGF0YSIsInNldFBsYXllclR3b0dhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJPbmVGbGVldFNpemUiLCJzZXRQbGF5ZXJUd29GbGVldFNpemUiLCJzZXRDdXJyZW50UGxheWVyRmxlZXRTaXplIiwiYnVpbGQiLCJfc3RhcnRSb3VuZDIiLCJnZXRTaGlwcyIsImxlbmd0aCIsIl9lbmRHYW1lMiIsInBsYXllcldpbm5lciIsIl9zd2l0Y2hDdXJyZW50UGxheWVyMiIsIl9nZXRXaW5uZXIyIiwiYWxsU2hpcHNTdW5rIiwiYXR0YWNrUmVzdWx0IiwiX2F0dGFja0NlbGwyIiwid2lubmVyIiwiY3VycmVudEJvYXJkIiwicmVjZWl2ZUF0dGFjayIsIl9wbGFjZVNoaXAyIiwibmV3U2hpcCIsImlzUGxhY2VkIiwicGxhY2VTaGlwIiwiYWRkU2hpcCIsIl9jb29yZCIsIl9zaGlwIiwiX2lzT2NjdXBpZWQiLCJfaGFzQmVlbkhpdCIsIkJvYXJkQ2VsbCIsIm9jY3VweSIsInNoaXAiLCJoaXQiLCJ0cnlIaXQiLCJnZXRDb29yZFN0cmluZyIsIl9jb29yZFgiLCJfY29vcmRZIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJHYW1lYm9hcmREYXRhQnVpbGRlciIsIl93aWR0aCIsIl9oZWlnaHQiLCJfYm9hcmQiLCJfc2hpcExpc3QiLCJfY2FuUGxhY2UiLCJfY2FuUGxhY2UyIiwiZ2V0Q29vcmRTdGFydCIsInB1c2giLCJib2FyZENlbGwiLCJnYW1lYm9hcmREYXRhQnVpbGRlciIsImdhbWVib2FyZERhdGEiLCJzZXRCb2FyZERhdGEiLCJzZXRQbGF5ZXJVc2VyTmFtZSIsInNldEFsbFNoaXBzU3VuayIsImV2ZXJ5IiwiaXNTdW5rIiwiY29vcmRTdGFydCIsIngiLCJ5IiwiZW1wdHlDZWxsIiwiQlVJTERJTkdfU0hJUCIsInVzZXJOYW1lIiwiX3BsYXllck5hbWUiLCJfaGl0TG9nIiwiX3BsYXllclNoaXBzIiwibG9nSGl0IiwiZ2V0SGl0TG9nIiwic2xpY2UiLCJyZXNldFVzZXIiLCJTaGlwUGllY2UiLCJfdGltZXNIaXQiLCJfc2hpcFBpZWNlcyIsIl9jb29yZFN0YXJ0IiwiX2J1aWxkU2hpcCIsImhvcml6b250YWwiLCJfYnVpbGRTaGlwMiIsImhpdENvb3JkIiwic2hpcFBpZWNlIiwiZmluZCIsInBpZWNlQ29vcmQiLCJ1bmRlZmluZWQiLCJzaGlwUGllY2VDb29yZCIsIl9oaXRTdGF0dXMiLCJHYW1lU3RhdGVEYXRhIiwiX2N1cnJlbnRQbGF5ZXJVc2VyTmFtZSIsIl9wbGF5ZXJPbmVVc2VyTmFtZSIsIl9wbGF5ZXJUd29Vc2VyTmFtZSIsIl9wbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiX3BsYXllclR3b0dhbWVib2FyZERhdGEiLCJfcGxheWVyT25lRmxlZXRTaXplIiwiX3BsYXllclR3b0ZsZWV0U2l6ZSIsIl9jdXJyZW50UGxheWVyRmxlZXRTaXplIiwic2V0IiwicGxheWVyT25lVXNlck5hbWUiLCJwbGF5ZXJUd29Vc2VyTmFtZSIsInBsYXllck9uZUZsZWV0U2l6ZSIsInBsYXllclR3b0ZsZWV0U2l6ZSIsIl9nYW1lU3RhdGVEYXRhIiwicmVzZXQiLCJHYW1lYm9hcmREYXRhIiwiX2JvYXJkRGF0YSIsIl9wbGF5ZXJVc2VyTmFtZSIsIl9hbGxTaGlwc1N1bmsiLCJib2FyZCIsImJvYXJkQ29weSIsImZvckVhY2giLCJyb3ciLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9nYW1lYm9hcmREYXRhIiwiX3Jlc2V0IiwiR2FtZUJvYXJkRGF0YUJ1aWxkZXIiLCJnYW1lYm9hcmQiLCJfcmVzZXQyIiwiY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=