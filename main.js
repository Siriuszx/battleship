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
var _lastComputerHitCoord = /*#__PURE__*/new WeakMap();
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
  _classPrivateFieldInitSpec(this, _lastComputerHitCoord, {
    writable: true,
    value: null
  });
  _classPrivateFieldSet(this, _DOMController, new _DOMController__WEBPACK_IMPORTED_MODULE_3__["default"](_classPrivateMethodGet(this, _getAPIContainer, _getAPIContainer2).call(this)));
  _classPrivateFieldSet(this, _playerOneGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
  _classPrivateFieldSet(this, _playerTwoGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
  _classPrivateFieldSet(this, _playerOne, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player One'));
  _classPrivateFieldSet(this, _playerTwo, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player Two'));
  _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
  _classPrivateFieldSet(this, _lastComputerHitCoord, new _entities_Coordinate__WEBPACK_IMPORTED_MODULE_4__["default"](-1, -1));
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
  var rndCoord = _classPrivateMethodGet(this, _getRandomCoord, _getRandomCoord2).call(this);
  var result = false;
  var equalsLastHitCoord = rndCoord.coordX === _classPrivateFieldGet(this, _lastComputerHitCoord).coordX && rndCoord.coordY === _classPrivateFieldGet(this, _lastComputerHitCoord).coordY;
  while (equalsLastHitCoord) {
    rndCoord = _classPrivateMethodGet(this, _getRandomCoord, _getRandomCoord2).call(this);
    equalsLastHitCoord = rndCoord.coordX === _classPrivateFieldGet(this, _lastComputerHitCoord).coordX && rndCoord.coordY === _classPrivateFieldGet(this, _lastComputerHitCoord).coordY;
  }
  result = _classPrivateMethodGet(this, _attackHandler, _attackHandler2).call(this, rndCoord);
  _classPrivateFieldSet(this, _lastComputerHitCoord, rndCoord);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F5RDtBQUM5QjtBQUUzQixJQUFNRyxVQUFVLEdBQUcsSUFBSWhLLGtFQUFjLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvQm9hcmRDZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvQ29vcmRpbmF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0hpdFN0YXR1cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwUGllY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVTdGF0ZURhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVTdGF0ZURhdGFCdWlsZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvZGF0YVN0YXRlQ29udGFpbmVycy9HYW1lYm9hcmREYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvZGF0YVN0YXRlQ29udGFpbmVycy9HYW1lYm9hcmREYXRhQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgaGl0U3RhdHVzIGZyb20gXCIuLi9lbnRpdGllcy9IaXRTdGF0dXNcIjtcblxuY2xhc3MgRE9NQ29udHJvbGxlciB7XG4gICNCT0FSRF9XSURUSCA9IDEwO1xuXG4gICNCT0FSRF9IRUlHSFQgPSAxMDtcblxuICAjQ0VMTF9DT1VOVCA9IDEwMDtcblxuICAjYm9hcmRQbGF5ZXJPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtb25lJyk7XG5cbiAgI2JvYXJkUGxheWVyVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLXR3bycpO1xuXG4gICNzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZScpO1xuXG4gICNzd2l0Y2hBeGlzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvcml6b250YWwtc3RhdHVzJyk7XG5cbiAgI3Jlc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQtZ2FtZScpO1xuXG4gICNjb21wdXRlckVuYWJsZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5hYmxlLWNvbXB1dGVyJyk7XG5cbiAgI2JvYXJkSW5pdCA9IGZhbHNlO1xuXG4gICNpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gICNpc0NvbXB1dGVyRW5hYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5ib2FyZEFjdGlvbkhhbmRsZXIsIGNvbnRyb2xsZXJBUEkudXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgIHRoaXMuI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpO1xuICB9XG5cbiAgdXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCkge1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkKGdhbWVTdGF0ZURhdGEpO1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkRm9jdXMoZ2FtZVN0YXRlRGF0YSk7XG5cbiAgICBpZiAoY3VycmVudENlbGxDb29yZCAmJiBnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuI2hpZ2hsaWdoQnVpbGRQYXR0ZXJuKGN1cnJlbnRDZWxsQ29vcmQsIGdhbWVTdGF0ZURhdGEuY3VycmVudFBsYXllckZsZWV0U2l6ZSwgZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVCb2FyZChnYW1lU3RhdGVEYXRhKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkT25lRGF0YSA9IGdhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICBjb25zdCBnYW1lYm9hcmRUd29EYXRhID0gZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNDRUxMX0NPVU5UOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5vZGVCb2FyZE9uZSA9IHRoaXMuI2JvYXJkUGxheWVyT25lLmNoaWxkTm9kZXNbaV07XG4gICAgICBjb25zdCBkYXRhQm9hcmRPbmUgPSBnYW1lYm9hcmRPbmVEYXRhLmJvYXJkRGF0YVtpXTtcblxuICAgICAgY29uc3Qgbm9kZUJvYXJkVHdvID0gdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZFR3byA9IGdhbWVib2FyZFR3b0RhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICAvLyBUbyBoaWRlIGZpcnN0IHBsYXllcidzIGJvYXJkIGR1cmluZyBidWlsZGluZyBwaGFzZVxuICAgICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNQbGF5ZXJPbmVUdXJuID09PSBmYWxzZSAmJiBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lLCAhZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRPbmUsIGRhdGFCb2FyZE9uZSwgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsIGdhbWVib2FyZE9uZURhdGEucGxheWVyVXNlck5hbWUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvLCBnYW1lYm9hcmRUd29EYXRhLnBsYXllclVzZXJOYW1lKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlQm9hcmRGb2N1cyhnYW1lU3RhdGVEYXRhKSB7XG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgc3dpdGNoIChnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICBjYXNlICdQbGF5ZXIgT25lJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHN3aXRjaCAoZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGxheWVyIE9uZSc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIEJvYXJkIEluaXRpYWxpemF0aW9uXG5cbiAgI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnN0YXJ0R2FtZUhhbmRsZXIpO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmRIYW5kbGVyKTtcbiAgICB0aGlzLiNjb21wdXRlckVuYWJsZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVDb21wdXRlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLiNjb21wdXRlckVuYWJsZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLmVuYWJsZUNvbXB1dGVySGFuZGxlcik7XG4gIH1cblxuICAjaW5pdEJvYXJkKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpIHtcbiAgICBpZiAodGhpcy4jYm9hcmRJbml0ID09PSB0cnVlKSByZXR1cm47XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0NFTExfQ09VTlQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsT25lID0gdGhpcy4jY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcbiAgICAgIGNvbnN0IG5ld0JvYXJkQ2VsbFR3byA9IHRoaXMuI2NyZWF0ZUNlbGwoYm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcik7XG5cbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbE9uZSk7XG4gICAgICB0aGlzLiNib2FyZFBsYXllclR3by5hcHBlbmRDaGlsZChuZXdCb2FyZENlbGxUd28pO1xuICAgIH1cblxuICAgIHRoaXMuI2JvYXJkSW5pdCA9IHRydWU7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBDZWxsIENyZWF0aW9uL1N0YXR1c011dGF0aW9uXG5cbiAgI3VwZGF0ZUNlbGxNZXRhRGF0YShjZWxsTm9kZSwgY2VsbERhdGEsIHBsYXllck5hbWUpIHtcbiAgICBjb25zdCBjb29yZCA9IGNlbGxEYXRhLmdldENvb3JkKCk7XG5cbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmR4JywgY29vcmQuY29vcmRYKTtcbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmR5JywgY29vcmQuY29vcmRZKTtcbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWVybmFtZScsIHBsYXllck5hbWUpO1xuICB9XG5cbiAgI3VwZGF0ZUNlbGxTdGF0dXMoY2VsbE5vZGUsIGNlbGxEYXRhLCBpc1JvdW5kUnVubmluZykge1xuICAgIGlmICghY2VsbE5vZGUgfHwgIWNlbGxEYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCBub2RlID0gY2VsbE5vZGU7XG4gICAgY29uc3QgZGF0YSA9IGNlbGxEYXRhO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nZXRIaXRTdGF0dXMoKTtcblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLk5PVF9ISVQ6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfU0hJUDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkYwMDAwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLkhJVF9DRUxMOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjZWxsRGF0YS5pc09jY3VwaWVkICYmIGlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gIH1cblxuICAjY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcik7XG5cbiAgICByZXR1cm4gbmV3Q2VsbDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIENlbGwgQnVpbGRpbmcgUGF0aCBIaW50aW5nXG5cbiAgI2hpZ2hsaWdoQnVpbGRQYXR0ZXJuKGNvb3JkLCBjdXJyZW50UGxheWVyRmxlZXRTaXplLCBjdXJyZW50UGxheWVyTmFtZSkge1xuICAgIGNvbnN0IHNoaXBTaXplUGF0dGVybiA9IHRoaXMuI2dldFNoaXBTaXplUGF0dGVybihjdXJyZW50UGxheWVyRmxlZXRTaXplKTtcblxuICAgIHRoaXMuI2hpZ2hsaWdodENlbGxzKGNvb3JkLCBzaGlwU2l6ZVBhdHRlcm4sIGN1cnJlbnRQbGF5ZXJOYW1lKTtcbiAgfVxuXG4gICNoaWdobGlnaHRDZWxscyhjb29yZCwgc2hpcFNpemVQYXR0ZXJuLCBjdXJyZW50UGxheWVyTmFtZSkge1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuI2lzSG9yaXpvbnRhbDtcblxuICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVQYXR0ZXJuOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoKGNvb3JkLmNvb3JkWCArIHNoaXBTaXplUGF0dGVybikgLSAxID4gdGhpcy4jQk9BUkRfV0lEVEgpIGJyZWFrO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtY29vcmR4PVwiJHtjb29yZC5jb29yZFggKyBpfVwiXVtkYXRhLWNvb3JkeT1cIiR7Y29vcmQuY29vcmRZfVwiXVtkYXRhLXBsYXllcm5hbWU9XCIke2N1cnJlbnRQbGF5ZXJOYW1lfVwiXWApO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVQYXR0ZXJuOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoKGNvb3JkLmNvb3JkWSArIHNoaXBTaXplUGF0dGVybikgLSAxID4gdGhpcy4jQk9BUkRfSEVJR0hUKSBicmVhaztcbiAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWNvb3JkeD1cIiR7Y29vcmQuY29vcmRYfVwiXVtkYXRhLWNvb3JkeT1cIiR7Y29vcmQuY29vcmRZICsgaX1cIl1bZGF0YS1wbGF5ZXJuYW1lPVwiJHtjdXJyZW50UGxheWVyTmFtZX1cIl1gKTtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAjZ2V0U2hpcFNpemVQYXR0ZXJuKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICBzd2l0Y2ggKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIDU7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiA0O1xuICAgICAgY2FzZSAyOlxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgI3RvZ2dsZUhvcml6b250YWwoKSB7XG4gICAgdGhpcy4jaXNIb3Jpem9udGFsID0gIXRoaXMuI2lzSG9yaXpvbnRhbDtcbiAgICB0aGlzLiNzd2l0Y2hBeGlzQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2J1dHRvbi1hY3RpdmUnKTtcbiAgfVxuXG4gICN0b2dnbGVDb21wdXRlcigpIHtcbiAgICB0aGlzLiNpc0NvbXB1dGVyRW5hYmxlZCA9ICF0aGlzLiNpc0NvbXB1dGVyRW5hYmxlZDtcbiAgICB0aGlzLiNjb21wdXRlckVuYWJsZWRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLWFjdGl2ZScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuI2lzQ29tcHV0ZXJFbmFibGVkKTtcbiAgfVxuXG4gIGdldElzSG9yaXpvbnRhbCgpIHsgcmV0dXJuIHRoaXMuI2lzSG9yaXpvbnRhbDsgfVxuXG4gIGdldCBpc0NvbXB1dGVyRW5hYmxlZCgpIHsgcmV0dXJuIHRoaXMuI2lzQ29tcHV0ZXJFbmFibGVkOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9lbnRpdGllcy9QbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9lbnRpdGllcy9TaGlwXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9lbnRpdGllcy9HYW1lYm9hcmRcIjtcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuLi9lbnRpdGllcy9Db29yZGluYXRlXCI7XG5pbXBvcnQgR2FtZVN0YXRlRGF0YUJ1aWxkZXIgZnJvbSBcIi4uL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAjY3VycmVudFBsYXllciA9IG51bGw7XG5cbiAgI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAjcGxheWVyT25lID0gbnVsbDtcblxuICAjcGxheWVyVHdvID0gbnVsbDtcblxuICAjcGxheWVyT25lR2FtZWJvYXJkID0gbnVsbDtcblxuICAjcGxheWVyVHdvR2FtZWJvYXJkID0gbnVsbDtcblxuICAjRE9NQ29udHJvbGxlciA9IG51bGw7XG5cbiAgI2xhc3RDb21wdXRlckhpdENvb3JkID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNET01Db250cm9sbGVyID0gbmV3IERPTUNvbnRyb2xsZXIodGhpcy4jZ2V0QVBJQ29udGFpbmVyKCkpO1xuICAgIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyT25lID0gbmV3IFBsYXllcignUGxheWVyIE9uZScpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1BsYXllciBUd28nKTtcbiAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuICAgIHRoaXMuI2xhc3RDb21wdXRlckhpdENvb3JkID0gbmV3IENvb3JkaW5hdGUoLTEsIC0xKTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgLy8gQ2FsbGJhY2sgdG8gbGV0IG90aGVyIGxheWVycyBvZiBwcm9ncmFtIGludGVyYWN0IHdpdGggb3VyIGdhbWUgY29udHJvbGxlclxuICAjYm9hcmRBY3Rpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGNvbnN0IGlzQ2VsbE93bmVyID0gY2VsbE5vZGUuZGF0YXNldC5wbGF5ZXJuYW1lID09PSB0aGlzLiNjdXJyZW50UGxheWVyLmdldFBsYXllck5hbWUoKTtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLiNET01Db250cm9sbGVyLmdldElzSG9yaXpvbnRhbCgpO1xuXG4gICAgY29uc3QgY29vcmRYID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHg7XG4gICAgY29uc3QgY29vcmRZID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHk7XG5cbiAgICBjb25zdCBjZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG5cbiAgICBzd2l0Y2ggKHRoaXMuI2lzUm91bmRSdW5uaW5nKSB7XG4gICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgIC8vIHRvIGxldCBwbGF5ZXIgcGxhY2Ugc2hpcHMgb24gSElTIE9XTiBib2FyZCBvbmx5XG4gICAgICAgIGlmIChpc0NlbGxPd25lciA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgdGhpcy4jcGxhY2VTaGlwSGFuZGxlcihjZWxsQ29vcmQsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgIC8vIHRvIGxldCBwbGF5ZXIgYXR0YWNrIHNoaXBzIG9uIEhJUyBPUFBPTkVOVCdTIGJvYXJkIG9ubHlcbiAgICAgICAgaWYgKGlzQ2VsbE93bmVyID09PSB0cnVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI2F0dGFja0hhbmRsZXIoY2VsbENvb3JkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLiNET01Db250cm9sbGVyLmlzQ29tcHV0ZXJFbmFibGVkKTtcbiAgICBpZiAodGhpcy4jRE9NQ29udHJvbGxlci5pc0NvbXB1dGVyRW5hYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLiNpc1BsYXllck9uZVR1cm4gPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLiNjb21wdXRlckFjdGlvbkhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoY2VsbENvb3JkKTtcbiAgfVxuXG4gICNlbmFibGVDb21wdXRlckhhbmRsZXIoKSB7XG4gICAgdGhpcy4jcmVzdGFydFJvdW5kSGFuZGxlcigpO1xuICB9XG5cbiAgI2NvbXB1dGVyQWN0aW9uSGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy4jaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4jY29tcHV0ZXJBdHRhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY29tcHV0ZXJCdWlsZEZsZWV0KCk7XG4gICAgfVxuICB9XG5cbiAgI2NvbXB1dGVyQXR0YWNrKCkge1xuICAgIGxldCBybmRDb29yZCA9IHRoaXMuI2dldFJhbmRvbUNvb3JkKCk7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgbGV0IGVxdWFsc0xhc3RIaXRDb29yZCA9IChybmRDb29yZC5jb29yZFggPT09IHRoaXMuI2xhc3RDb21wdXRlckhpdENvb3JkLmNvb3JkWCkgJiZcbiAgICAgIChybmRDb29yZC5jb29yZFkgPT09IHRoaXMuI2xhc3RDb21wdXRlckhpdENvb3JkLmNvb3JkWSlcblxuICAgIHdoaWxlIChlcXVhbHNMYXN0SGl0Q29vcmQpIHtcbiAgICAgIHJuZENvb3JkID0gdGhpcy4jZ2V0UmFuZG9tQ29vcmQoKTtcblxuICAgICAgZXF1YWxzTGFzdEhpdENvb3JkID0gKHJuZENvb3JkLmNvb3JkWCA9PT0gdGhpcy4jbGFzdENvbXB1dGVySGl0Q29vcmQuY29vcmRYKSAmJlxuICAgICAgICAocm5kQ29vcmQuY29vcmRZID09PSB0aGlzLiNsYXN0Q29tcHV0ZXJIaXRDb29yZC5jb29yZFkpXG4gICAgfVxuXG4gICAgcmVzdWx0ID0gdGhpcy4jYXR0YWNrSGFuZGxlcihybmRDb29yZCk7XG5cbiAgICB0aGlzLiNsYXN0Q29tcHV0ZXJIaXRDb29yZCA9IHJuZENvb3JkO1xuXG4gICAgY29uc29sZS5sb2coYFJORCBYOiAke3JuZENvb3JkLmNvb3JkWH0gUk5EIFk6ICR7cm5kQ29vcmQuY29vcmRZfWApO1xuICAgIGNvbnNvbGUubG9nKGBSRVNVTFQ6ICR7cmVzdWx0fWApO1xuICB9XG5cbiAgI2NvbXB1dGVyQnVpbGRGbGVldCgpIHtcbiAgICBsZXQgcm5kQ29vcmQgPSBudWxsO1xuICAgIGxldCBybmRJc0hvcml6b250YWwgPSBmYWxzZTtcblxuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgIHdoaWxlICh0aGlzLiNjdXJyZW50UGxheWVyLmZsZWV0U2l6ZSAhPT0gNSkge1xuICAgICAgcm5kQ29vcmQgPSB0aGlzLiNnZXRSYW5kb21Db29yZCgpO1xuXG4gICAgICBybmRJc0hvcml6b250YWwgPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpO1xuICAgICAgcmVzdWx0ID0gdGhpcy4jcGxhY2VTaGlwSGFuZGxlcihybmRDb29yZCwgcm5kSXNIb3Jpem9udGFsKTtcblxuICAgICAgY29uc29sZS5sb2coYFJORCBYOiAke3JuZENvb3JkLmNvb3JkWH0gUk5EIFk6ICR7cm5kQ29vcmQuY29vcmRZfWApO1xuICAgICAgY29uc29sZS5sb2coYFJFU1VMVDogJHtyZXN1bHR9YCk7XG4gICAgfVxuICB9XG5cbiAgI2dldFJhbmRvbUNvb3JkKCkge1xuICAgIGNvbnN0IHJuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQud2lkdGggKyAxKTtcbiAgICBjb25zdCBybmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmhlaWdodCArIDEpO1xuXG4gICAgY29uc3Qgcm5kQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShybmRYLCBybmRZKTtcblxuICAgIHJldHVybiBybmRDb29yZDtcbiAgfVxuXG4gICNzdGFydEdhbWVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSB0cnVlKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgI3Jlc3RhcnRSb3VuZEhhbmRsZXIoKSB7XG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdQbGF5ZXIgT25lJyk7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKSB7XG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dldEdhbWVTdGF0ZURhdGEoKTtcblxuICAgIHRoaXMuI0RPTUNvbnRyb2xsZXIudXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCk7XG4gIH1cblxuICAjdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmIChjZWxsTm9kZS5kYXRhc2V0LnBsYXllcm5hbWUgIT09IHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb29yZFggPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeDtcbiAgICBjb25zdCBjb29yZFkgPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeTtcblxuICAgIGNvbnN0IGN1cnJlbnRDZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoY3VycmVudENlbGxDb29yZCk7XG4gIH1cblxuICAjZ2V0R2FtZVN0YXRlRGF0YSgpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhQnVpbGRlciA9IG5ldyBHYW1lU3RhdGVEYXRhQnVpbGRlcigpO1xuXG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IGdhbWVTdGF0ZURhdGFCdWlsZGVyXG4gICAgICAuc2V0Q3VycmVudFVzZXJOYW1lKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldElzR2FtZVJ1bm5pbmcodGhpcy4jaXNHYW1lUnVubmluZylcbiAgICAgIC5zZXRJc1JvdW5kUnVubmluZyh0aGlzLiNpc1JvdW5kUnVubmluZylcbiAgICAgIC5zZXRJc1BsYXllck9uZVR1cm4odGhpcy4jaXNQbGF5ZXJPbmVUdXJuKVxuICAgICAgLnNldFBsYXllck9uZVVzZXJOYW1lKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0UGxheWVyVHdvVXNlck5hbWUodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5nZXRHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpKVxuICAgICAgLnNldFBsYXllclR3b0dhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuc2V0UGxheWVyT25lRmxlZXRTaXplKHRoaXMuI3BsYXllck9uZS5mbGVldFNpemUpXG4gICAgICAuc2V0UGxheWVyVHdvRmxlZXRTaXplKHRoaXMuI3BsYXllclR3by5mbGVldFNpemUpXG4gICAgICAuc2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSh0aGlzLiNjdXJyZW50UGxheWVyLmZsZWV0U2l6ZSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgcmV0dXJuIGdhbWVTdGF0ZURhdGE7XG4gIH1cblxuICAvLyBUbyBjaGVjayBpZiByb3VuZCBzaG91bGQgc3RhcnQgb25jZSBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAjc3RhcnRSb3VuZCgpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lLmdldFNoaXBzKCkubGVuZ3RoID09PSA1ICYmIHRoaXMuI3BsYXllclR3by5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAjZW5kR2FtZShwbGF5ZXJXaW5uZXIpIHtcbiAgICBpZiAocGxheWVyV2lubmVyID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gICNzd2l0Y2hDdXJyZW50UGxheWVyKCkge1xuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUd287XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gIXRoaXMuI2lzUGxheWVyT25lVHVybjtcbiAgfVxuXG4gICNnZXRXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3bztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgI2F0dGFja0hhbmRsZXIoY29vcmQpIHtcbiAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSB0aGlzLiNhdHRhY2tDZWxsKGNvb3JkKTtcbiAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG5cbiAgICBjb25zdCB3aW5uZXIgPSB0aGlzLiNnZXRXaW5uZXIoKTtcblxuICAgIGlmICh3aW5uZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuI2VuZEdhbWUod2lubmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKGBwbGF5ZXIgJHt3aW5uZXIuZ2V0UGxheWVyTmFtZSgpfSB3b25gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xuICB9XG5cbiAgI2F0dGFja0NlbGwoY29vcmQpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIGN1cnJlbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgI3BsYWNlU2hpcEhhbmRsZXIoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKTtcblxuICAgIHRoaXMuI3N0YXJ0Um91bmQoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAjcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcbiAgICBsZXQgbmV3U2hpcCA9IG51bGw7XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9XG5cbiAgICAvLyBUbyBidWlsZCBzaGlwcyBpbiBwcmUtZGV0ZXJtaW5lZCBwYXR0ZXJuICg1LDQsMywzLDIpXG4gICAgc3dpdGNoICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDQ6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBQbGF5ZXJzIHNob3VsZCB0YWtlIHR1cm5zIGFmdGVyIGJ1aWxkaW5nIHRoZWlyIGVudGlyZSBmbGVldFxuICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllci5hZGRTaGlwKG5ld1NoaXApO1xuXG4gICAgICBpZiAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgaXNQbGFjZWQ6ICR7aXNQbGFjZWR9YCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAjZ2V0QVBJQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydEdhbWVIYW5kbGVyOiB0aGlzLiNzdGFydEdhbWVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBib2FyZEFjdGlvbkhhbmRsZXI6IHRoaXMuI2JvYXJkQWN0aW9uSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgcmVzdGFydFJvdW5kSGFuZGxlcjogdGhpcy4jcmVzdGFydFJvdW5kSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXI6IHRoaXMuI3VwZGF0ZUJvYXJkSGludHNIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBlbmFibGVDb21wdXRlckhhbmRsZXI6IHRoaXMuI2VuYWJsZUNvbXB1dGVySGFuZGxlci5iaW5kKHRoaXMpXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcbiIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4vSGl0U3RhdHVzXCI7XG5cbmNsYXNzIEJvYXJkQ2VsbCB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNzaGlwID0gbnVsbDtcblxuICAgICNpc09jY3VwaWVkID0gZmFsc2U7XG5cbiAgICAjaGFzQmVlbkhpdCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgb2NjdXB5KHNoaXApIHtcbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNpc09jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4jc2hpcCA9IHNoaXA7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICBpZiAodGhpcy4jaGFzQmVlbkhpdCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2hhc0JlZW5IaXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLiNzaGlwKSB7XG4gICAgICAgICAgICB0aGlzLiNzaGlwLnRyeUhpdCh0aGlzLiNjb29yZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRDb29yZCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkOyB9XG5cbiAgICBnZXRDb29yZFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBYOiAke3RoaXMuI2Nvb3JkLmNvb3JkWH0gWTogJHt0aGlzLiNjb29yZC5jb29yZFl9YDtcbiAgICB9XG5cbiAgICBnZXRIaXRTdGF0dXMoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy4jaGFzQmVlbkhpdCkge1xuICAgICAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5OT1RfSElUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9TSElQO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5ISVRfQ0VMTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaXNPY2N1cGllZCgpIHsgcmV0dXJuIHRoaXMuI2lzT2NjdXBpZWQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRDZWxsOyIsImNsYXNzIENvb3JkaW5hdGUge1xuICAgICNjb29yZFggPSAwO1xuXG4gICAgI2Nvb3JkWSA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZFggPSBjb29yZFg7XG4gICAgICAgIHRoaXMuI2Nvb3JkWSA9IGNvb3JkWTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHRoaXMuI2Nvb3JkWCwgMTApOyB9XG5cbiAgICBnZXQgY29vcmRZKCkgeyByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHRoaXMuI2Nvb3JkWSwgMTApOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3JkaW5hdGU7IiwiaW1wb3J0IEJvYXJkQ2VsbCBmcm9tIFwiLi9Cb2FyZENlbGxcIjtcbmltcG9ydCBHYW1lYm9hcmREYXRhQnVpbGRlciBmcm9tIFwiLi9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVib2FyZERhdGFCdWlsZGVyXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgI3dpZHRoID0gMTA7XG5cbiAgICAjaGVpZ2h0ID0gMTA7XG5cbiAgICAjYm9hcmQgPSBbXTtcblxuICAgIC8vIHN3YXBwaW5nIHN1cHBvc2VkbHkgWCBhbmQgWSBjb29yZGluYXRlcyBoZXJlIGJlY2F1c2Ugb2YgZmFpbGVkIGF0dGVtcHQgdG8gaW1wbGVtZW50IDJEIGFycmF5cyBpbiBKYXZhU2NyaXB0Li4uXG4gICAgI3NoaXBMaXN0ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jaW5pdEJvYXJkKCk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHNoaXAsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy4jY2FuUGxhY2Uoc2hpcC5nZXRDb29yZFN0YXJ0KCksIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLiNzaGlwTGlzdC5wdXNoKHNoaXApO1xuXG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxXVsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMSkgKyBpXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxKSArIGldW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDFdO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNib2FyZFtjb29yZC5jb29yZFkgLSAxXVtjb29yZC5jb29yZFggLSAxXS5oaXQoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0R2FtZWJvYXJkRGF0YShwbGF5ZXJVc2VyTmFtZSkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhQnVpbGRlciA9IG5ldyBHYW1lYm9hcmREYXRhQnVpbGRlcigpO1xuXG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGEgPSBnYW1lYm9hcmREYXRhQnVpbGRlci5zZXRCb2FyZERhdGEodGhpcy4jYm9hcmQpXG4gICAgICAgIC5zZXRQbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSlcbiAgICAgICAgLnNldEFsbFNoaXBzU3Vuayh0aGlzLmFsbFNoaXBzU3VuaygpKVxuICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBnYW1lYm9hcmREYXRhO1xuICAgIH1cbiAgICBcbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGlwTGlzdC5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cbiAgICBcbiAgICAjY2FuUGxhY2UoY29vcmRTdGFydCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgICAgIC8vIHRvIGV4Y2x1ZGUgc3RhcnRpbmcgcG9pbnQgZnJvbSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmICgoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGxlbmd0aCA+IHRoaXMuI3dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW2Nvb3JkU3RhcnQuY29vcmRZIC0gMV1bKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgICAgICAgIC8vIHRvIGV4Y2x1ZGUgc3RhcnRpbmcgcG9pbnQgZnJvbSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmICgoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGxlbmd0aCA+IHRoaXMuI2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGldW2Nvb3JkU3RhcnQuY29vcmRYIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2luaXRCb2FyZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkLmxlbmd0aCAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy4jd2lkdGg7IHggKz0gMSkge1xuICAgICAgICAgICAgdGhpcy4jYm9hcmQucHVzaChbXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy4jaGVpZ2h0OyB5ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBzd2FwcGluZyB2YWx1ZXMgZHVlIHRvIHdyb25nIGNlbGwgZGF0YSByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5Q2VsbCA9IG5ldyBCb2FyZENlbGwoeSArIDEsIHggKyAxKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2JvYXJkW3hdLnB1c2goZW1wdHlDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMuI3dpZHRofTtcblxuICAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLiNoZWlnaHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJmdW5jdGlvbiBoaXRTdGF0dXMoKSB7XG4gICAgY29uc3QgTk9UX0hJVCA9ICdOT1RfSElUJztcbiAgICBjb25zdCBISVRfQ0VMTCA9ICdISVRfQ0VMTCc7XG4gICAgY29uc3QgSElUX1NISVAgPSAnSElUX1NISVAnO1xuICAgIGNvbnN0IEJVSUxESU5HX1NISVAgPSAnQlVJTERJTkdfU0hJUCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBOT1RfSElULFxuICAgICAgICBISVRfQ0VMTCxcbiAgICAgICAgSElUX1NISVAsXG4gICAgICAgIEJVSUxESU5HX1NISVBcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGl0U3RhdHVzOyIsImNsYXNzIFBsYXllciB7XG4gICNwbGF5ZXJOYW1lID0gJyc7XG5cbiAgI2hpdExvZyA9IFtdO1xuXG4gICNwbGF5ZXJTaGlwcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHVzZXJOYW1lKSB7XG4gICAgdGhpcy4jcGxheWVyTmFtZSA9IHVzZXJOYW1lO1xuICB9XG5cbiAgbG9nSGl0KGNvb3JkKSB7XG4gICAgdGhpcy4jaGl0TG9nLnB1c2goY29vcmQpO1xuICB9XG5cbiAgYWRkU2hpcChzaGlwKSB7XG4gICAgdGhpcy4jcGxheWVyU2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIGdldEhpdExvZygpIHtcbiAgICByZXR1cm4gdGhpcy4jaGl0TG9nLnNsaWNlKCk7XG4gIH1cblxuICBnZXRTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyU2hpcHMuc2xpY2UoKTtcbiAgfVxuXG4gIHJlc2V0VXNlcigpIHtcbiAgICB0aGlzLiNoaXRMb2cgPSBbXTtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcyA9IFtdO1xuICB9XG5cbiAgZ2V0UGxheWVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyTmFtZTtcbiAgfTtcblxuICBnZXQgZmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyU2hpcHMubGVuZ3RoOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgU2hpcFBpZWNlIGZyb20gXCIuL1NoaXBQaWVjZVwiO1xuXG5jbGFzcyBTaGlwIHtcbiAgI3RpbWVzSGl0ID0gMDtcblxuICAjc2hpcFBpZWNlcyA9IFtdO1xuICBcbiAgI2Nvb3JkU3RhcnQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIHRoaXMuI2Nvb3JkU3RhcnQgPSBjb29yZFN0YXJ0XG4gICAgdGhpcy4jYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCk7XG4gIH1cblxuICB0cnlIaXQoaGl0Q29vcmQpIHtcbiAgICBjb25zdCBzaGlwUGllY2UgPSB0aGlzLiNzaGlwUGllY2VzLmZpbmQocGllY2VDb29yZCA9PlxuICAgICAgKHBpZWNlQ29vcmQuY29vcmRYID09PSBoaXRDb29yZC5jb29yZFgpICYmIChwaWVjZUNvb3JkLmNvb3JkWSA9PT0gaGl0Q29vcmQuY29vcmRZKVxuICAgICk7XG5cbiAgICBpZiAoc2hpcFBpZWNlID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlOyBcblxuICAgIHRoaXMuI3RpbWVzSGl0ICs9IDE7XG5cbiAgICByZXR1cm4gc2hpcFBpZWNlLmhpdCgpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmV2ZXJ5KHNoaXBQaWVjZSA9PlxuICAgICAgc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICAjYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBzaGlwUGllY2VDb29yZCA9IG51bGw7XG5cbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCArIGksIGNvb3JkU3RhcnQuY29vcmRZKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCwgY29vcmRTdGFydC5jb29yZFkgKyBpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jc2hpcFBpZWNlcy5wdXNoKHNoaXBQaWVjZUNvb3JkKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb29yZFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiNjb29yZFN0YXJ0O1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHsgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMubGVuZ3RoOyB9XG5cbiAgZ2V0IHRpbWVzSGl0KCkgeyByZXR1cm4gdGhpcy4jdGltZXNIaXQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9Db29yZGluYXRlXCI7XG5cbmNsYXNzIFNoaXBQaWVjZSB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNoaXRTdGF0dXMgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy4jaGl0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2hpdFN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRYIH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFk7IH1cblxuICAgIGdldCBoaXRTdGF0dXMoKSB7IHJldHVybiB0aGlzLiNoaXRTdGF0dXM7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcFBpZWNlOyIsImNsYXNzIEdhbWVTdGF0ZURhdGEge1xuICAgICNjdXJyZW50UGxheWVyVXNlck5hbWU7XG5cbiAgICAjaXNHYW1lUnVubmluZztcblxuICAgICNpc1JvdW5kUnVubmluZztcblxuICAgICNpc1BsYXllck9uZVR1cm47XG5cbiAgICAjcGxheWVyT25lVXNlck5hbWU7XG5cbiAgICAjcGxheWVyVHdvVXNlck5hbWU7XG5cbiAgICAjcGxheWVyT25lR2FtZWJvYXJkRGF0YTtcblxuICAgICNwbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuXG4gICAgI3BsYXllck9uZUZsZWV0U2l6ZTtcblxuICAgICNwbGF5ZXJUd29GbGVldFNpemU7XG5cbiAgICAjY3VycmVudFBsYXllckZsZWV0U2l6ZTtcblxuICAgIGdldCBjdXJyZW50VXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNjdXJyZW50UGxheWVyVXNlck5hbWU7IH1cblxuICAgIHNldCBjdXJyZW50VXNlck5hbWUoY3VycmVudFVzZXJOYW1lKSB7IHRoaXMuI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZSA9IGN1cnJlbnRVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IGlzR2FtZVJ1bm5pbmcoKSB7IHJldHVybiB0aGlzLiNpc0dhbWVSdW5uaW5nOyB9XG5cbiAgICBzZXQgaXNHYW1lUnVubmluZyhpc0dhbWVSdW5uaW5nKSB7IHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSBpc0dhbWVSdW5uaW5nOyB9XG5cbiAgICBnZXQgaXNSb3VuZFJ1bm5pbmcoKSB7IHJldHVybiB0aGlzLiNpc1JvdW5kUnVubmluZzsgfVxuXG4gICAgc2V0IGlzUm91bmRSdW5uaW5nKGlzUm91bmRSdW5uaW5nKSB7IHRoaXMuI2lzUm91bmRSdW5uaW5nID0gaXNSb3VuZFJ1bm5pbmc7IH1cblxuICAgIGdldCBpc1BsYXllck9uZVR1cm4oKSB7IHJldHVybiB0aGlzLiNpc1BsYXllck9uZVR1cm47IH1cblxuICAgIHNldCBpc1BsYXllck9uZVR1cm4oaXNQbGF5ZXJPbmVUdXJuKSB7IHRoaXMuI2lzUGxheWVyT25lVHVybiA9IGlzUGxheWVyT25lVHVybjsgfVxuXG4gICAgZ2V0IHBsYXllck9uZVVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVVc2VyTmFtZShwbGF5ZXJPbmVVc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJPbmVVc2VyTmFtZSA9IHBsYXllck9uZVVzZXJOYW1lOyB9XG5cbiAgICBnZXQgcGxheWVyVHdvVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29Vc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllclR3b1VzZXJOYW1lKHBsYXllclR3b1VzZXJOYW1lKSB7IHRoaXMuI3BsYXllclR3b1VzZXJOYW1lID0gcGxheWVyVHdvVXNlck5hbWU7IH1cblxuICAgIGdldCBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgc2V0IHBsYXllck9uZUdhbWVib2FyZERhdGEocGxheWVyT25lR2FtZWJvYXJkRGF0YSkgeyB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhID0gcGxheWVyT25lR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllclR3b0dhbWVib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmREYXRhOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvR2FtZWJvYXJkRGF0YShwbGF5ZXJUd29HYW1lYm9hcmREYXRhKSB7IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZERhdGEgPSBwbGF5ZXJUd29HYW1lYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyT25lRmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgcGxheWVyT25lRmxlZXRTaXplKHBsYXllck9uZUZsZWV0U2l6ZSkgeyB0aGlzLiNwbGF5ZXJPbmVGbGVldFNpemUgPSBwbGF5ZXJPbmVGbGVldFNpemU7IH1cbiAgICBcbiAgICBnZXQgcGxheWVyVHdvRmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVHdvRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvRmxlZXRTaXplKHBsYXllclR3b0ZsZWV0U2l6ZSkgeyB0aGlzLiNwbGF5ZXJUd29GbGVldFNpemUgPSBwbGF5ZXJUd29GbGVldFNpemU7IH1cblxuICAgIGdldCBjdXJyZW50UGxheWVyRmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jY3VycmVudFBsYXllckZsZWV0U2l6ZTsgfVxuXG4gICAgc2V0IGN1cnJlbnRQbGF5ZXJGbGVldFNpemUoY3VycmVudFBsYXllckZsZWV0U2l6ZSkgeyB0aGlzLiNjdXJyZW50UGxheWVyRmxlZXRTaXplID0gY3VycmVudFBsYXllckZsZWV0U2l6ZTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGVEYXRhOyIsImltcG9ydCBHYW1lU3RhdGVEYXRhIGZyb20gXCIuL0dhbWVTdGF0ZURhdGFcIjtcblxuY2xhc3MgR2FtZVN0YXRlRGF0YUJ1aWxkZXIge1xuICAgICNnYW1lU3RhdGVEYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhID0gbmV3IEdhbWVTdGF0ZURhdGEoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50VXNlck5hbWUoY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuY3VycmVudFVzZXJOYW1lID0gY3VycmVudFVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc0dhbWVSdW5uaW5nKGlzR2FtZVJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc0dhbWVSdW5uaW5nID0gaXNHYW1lUnVubmluZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNSb3VuZFJ1bm5pbmcoaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyA9IGlzUm91bmRSdW5uaW5nO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc1BsYXllck9uZVR1cm4oaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNQbGF5ZXJPbmVUdXJuID0gaXNQbGF5ZXJPbmVUdXJuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVVc2VyTmFtZShwbGF5ZXJPbmVVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllck9uZVVzZXJOYW1lID0gcGxheWVyT25lVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b1VzZXJOYW1lKHBsYXllclR3b1VzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvVXNlck5hbWUgPSBwbGF5ZXJUd29Vc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YShwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YSA9IHBsYXllck9uZUdhbWVib2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b0dhbWVib2FyZERhdGEocGxheWVyVHdvR2FtZWJvYXJkRGF0YSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllclR3b0dhbWVib2FyZERhdGEgPSBwbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVGbGVldFNpemUocGxheWVyT25lRmxlZXRTaXplKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lRmxlZXRTaXplID0gcGxheWVyT25lRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJUd29GbGVldFNpemUocGxheWVyVHdvRmxlZXRTaXplKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvRmxlZXRTaXplID0gcGxheWVyVHdvRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50UGxheWVyRmxlZXRTaXplKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5jdXJyZW50UGxheWVyRmxlZXRTaXplID0gY3VycmVudFBsYXllckZsZWV0U2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEgPSBuZXcgR2FtZVN0YXRlRGF0YSgpO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gdGhpcy4jZ2FtZVN0YXRlRGF0YTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICByZXR1cm4gZ2FtZVN0YXRlRGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZURhdGFCdWlsZGVyOyIsImNsYXNzIEdhbWVib2FyZERhdGEge1xuICAgICNib2FyZERhdGEgPSBudWxsO1xuXG4gICAgI3BsYXllclVzZXJOYW1lID0gJyc7XG5cbiAgICAjYWxsU2hpcHNTdW5rID0gbnVsbDtcblxuICAgIHNldEJvYXJkRGF0YShib2FyZCkge1xuICAgICAgICBjb25zdCBib2FyZENvcHkgPSBib2FyZC5zbGljZSgpO1xuICAgICAgICBjb25zdCBib2FyZERhdGEgPSBbXTtcblxuICAgICAgICBib2FyZENvcHkuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgYm9hcmREYXRhLnB1c2goLi4ucm93KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jYm9hcmREYXRhID0gYm9hcmREYXRhO1xuICAgIH1cblxuICAgIGdldCBib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclVzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyVXNlck5hbWUgPSBwbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IGFsbFNoaXBzU3VuaygpIHsgcmV0dXJuIHRoaXMuI2FsbFNoaXBzU3VuazsgfVxuXG4gICAgc2V0IGFsbFNoaXBzU3VuayhhbGxTaGlwc1N1bmspIHsgdGhpcy4jYWxsU2hpcHNTdW5rID0gYWxsU2hpcHNTdW5rOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZERhdGE7IiwiaW1wb3J0IEdhbWVib2FyZERhdGEgZnJvbSBcIi4vR2FtZWJvYXJkRGF0YVwiO1xuXG5jbGFzcyBHYW1lQm9hcmREYXRhQnVpbGRlciB7XG4gICAgI2dhbWVib2FyZERhdGEgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEgPSBuZXcgR2FtZWJvYXJkRGF0YSgpO1xuICAgIH1cblxuICAgIHNldEJvYXJkRGF0YShnYW1lYm9hcmQpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5zZXRCb2FyZERhdGEoZ2FtZWJvYXJkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5wbGF5ZXJVc2VyTmFtZSA9IHBsYXllclVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRBbGxTaGlwc1N1bmsoYWxsU2hpcHNTdW5rKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEuYWxsU2hpcHNTdW5rID0gYWxsU2hpcHNTdW5rO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAjcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEgPSBuZXcgR2FtZWJvYXJkRGF0YSgpO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhID0gdGhpcy4jZ2FtZWJvYXJkRGF0YTtcbiAgICAgICAgdGhpcy4jcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZERhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmREYXRhQnVpbGRlcjsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUtdWktY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJlbTtcblxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdidXR0b24nXG4gICAgJ2JvYXJkJztcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtXG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW07XG59XG5cbi5ib2FyZCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgZ3JpZC1hcmVhOiBib2FyZDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5ib2FyZC1hY3RpdmUtYnVpbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xufVxuXG4uYm9hcmQtYWN0aXZlLWF0dGFjayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmJvYXJkLWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJvYXJkLWNlbGw6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xufVxuXG4uYnV0dG9uIHtcbiAgZ3JpZC1hcmVhOiBidXR0b247XG5cbiAgcGFkZGluZzogMC41cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTs7RUFFUjs7V0FFUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7O0VBRXZCLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLGVBQWU7RUFDZixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtdWktY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2J1dHRvbidcXG4gICAgJ2JvYXJkJztcXG59XFxuXFxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAyZW1cXG59XFxuXFxuLmJvYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMmVtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgZ3JpZC1hcmVhOiBib2FyZDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uYm9hcmQtYWN0aXZlLWJ1aWxkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5ib2FyZC1hY3RpdmUtYXR0YWNrIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmJvYXJkLWNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZC1jZWxsOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbi1hY3RpdmUge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOlsiaGl0U3RhdHVzIiwiX0JPQVJEX1dJRFRIIiwiV2Vha01hcCIsIl9CT0FSRF9IRUlHSFQiLCJfQ0VMTF9DT1VOVCIsIl9ib2FyZFBsYXllck9uZSIsIl9ib2FyZFBsYXllclR3byIsIl9zdGFydEdhbWVCdXR0b24iLCJfc3dpdGNoQXhpc0J1dHRvbiIsIl9yZXN0YXJ0R2FtZUJ1dHRvbiIsIl9jb21wdXRlckVuYWJsZWRCdXR0b24iLCJfYm9hcmRJbml0IiwiX2lzSG9yaXpvbnRhbCIsIl9pc0NvbXB1dGVyRW5hYmxlZCIsIl91cGRhdGVCb2FyZCIsIldlYWtTZXQiLCJfdXBkYXRlQm9hcmRGb2N1cyIsIl9tYXBIYW5kbGVycyIsIl9pbml0Qm9hcmQiLCJfdXBkYXRlQ2VsbE1ldGFEYXRhIiwiX3VwZGF0ZUNlbGxTdGF0dXMiLCJfY3JlYXRlQ2VsbCIsIl9oaWdobGlnaEJ1aWxkUGF0dGVybiIsIl9oaWdobGlnaHRDZWxscyIsIl9nZXRTaGlwU2l6ZVBhdHRlcm4iLCJfdG9nZ2xlSG9yaXpvbnRhbCIsIl90b2dnbGVDb21wdXRlciIsIkRPTUNvbnRyb2xsZXIiLCJjb250cm9sbGVyQVBJIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjIiwiX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMiLCJ3cml0YWJsZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZXQiLCJfaW5pdEJvYXJkMiIsImNhbGwiLCJib2FyZEFjdGlvbkhhbmRsZXIiLCJ1cGRhdGVCb2FyZEhpbnRzSGFuZGxlciIsIl9tYXBIYW5kbGVyczIiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ1cGRhdGVVSSIsImdhbWVTdGF0ZURhdGEiLCJjdXJyZW50Q2VsbENvb3JkIiwiX3VwZGF0ZUJvYXJkMiIsIl91cGRhdGVCb2FyZEZvY3VzMiIsImlzR2FtZVJ1bm5pbmciLCJfaGlnaGxpZ2hCdWlsZFBhdHRlcm4yIiwiY3VycmVudFBsYXllckZsZWV0U2l6ZSIsImN1cnJlbnRVc2VyTmFtZSIsImdldElzSG9yaXpvbnRhbCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImdldCIsImdhbWVib2FyZE9uZURhdGEiLCJwbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiZ2FtZWJvYXJkVHdvRGF0YSIsInBsYXllclR3b0dhbWVib2FyZERhdGEiLCJpIiwibm9kZUJvYXJkT25lIiwiY2hpbGROb2RlcyIsImRhdGFCb2FyZE9uZSIsImJvYXJkRGF0YSIsIm5vZGVCb2FyZFR3byIsImRhdGFCb2FyZFR3byIsImlzUGxheWVyT25lVHVybiIsImlzUm91bmRSdW5uaW5nIiwiX3VwZGF0ZUNlbGxTdGF0dXMyIiwiX3VwZGF0ZUNlbGxNZXRhRGF0YTIiLCJwbGF5ZXJVc2VyTmFtZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWVIYW5kbGVyIiwiX3RvZ2dsZUhvcml6b250YWwyIiwiYmluZCIsInJlc3RhcnRSb3VuZEhhbmRsZXIiLCJfdG9nZ2xlQ29tcHV0ZXIyIiwiZW5hYmxlQ29tcHV0ZXJIYW5kbGVyIiwibmV3Qm9hcmRDZWxsT25lIiwiX2NyZWF0ZUNlbGwyIiwibmV3Qm9hcmRDZWxsVHdvIiwiYXBwZW5kQ2hpbGQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJjZWxsTm9kZSIsImNlbGxEYXRhIiwicGxheWVyTmFtZSIsImNvb3JkIiwiZ2V0Q29vcmQiLCJzZXRBdHRyaWJ1dGUiLCJjb29yZFgiLCJjb29yZFkiLCJub2RlIiwiZGF0YSIsInN0YXR1cyIsImdldEhpdFN0YXR1cyIsIk5PVF9ISVQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkhJVF9TSElQIiwiSElUX0NFTEwiLCJpc09jY3VwaWVkIiwibmV3Q2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJjdXJyZW50UGxheWVyTmFtZSIsInNoaXBTaXplUGF0dGVybiIsIl9nZXRTaGlwU2l6ZVBhdHRlcm4yIiwiX2hpZ2hsaWdodENlbGxzMiIsImlzSG9yaXpvbnRhbCIsImN1cnJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsInRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJQbGF5ZXIiLCJTaGlwIiwiR2FtZWJvYXJkIiwiQ29vcmRpbmF0ZSIsIkdhbWVTdGF0ZURhdGFCdWlsZGVyIiwiX2N1cnJlbnRQbGF5ZXIiLCJfaXNHYW1lUnVubmluZyIsIl9pc1JvdW5kUnVubmluZyIsIl9pc1BsYXllck9uZVR1cm4iLCJfcGxheWVyT25lIiwiX3BsYXllclR3byIsIl9wbGF5ZXJPbmVHYW1lYm9hcmQiLCJfcGxheWVyVHdvR2FtZWJvYXJkIiwiX0RPTUNvbnRyb2xsZXIiLCJfbGFzdENvbXB1dGVySGl0Q29vcmQiLCJfYm9hcmRBY3Rpb25IYW5kbGVyIiwiX2VuYWJsZUNvbXB1dGVySGFuZGxlciIsIl9jb21wdXRlckFjdGlvbkhhbmRsZXIiLCJfY29tcHV0ZXJBdHRhY2siLCJfY29tcHV0ZXJCdWlsZEZsZWV0IiwiX2dldFJhbmRvbUNvb3JkIiwiX3N0YXJ0R2FtZUhhbmRsZXIiLCJfcmVzdGFydFJvdW5kSGFuZGxlciIsIl91cGRhdGVHYW1lVUkiLCJfdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIiLCJfZ2V0R2FtZVN0YXRlRGF0YSIsIl9zdGFydFJvdW5kIiwiX2VuZEdhbWUiLCJfc3dpdGNoQ3VycmVudFBsYXllciIsIl9nZXRXaW5uZXIiLCJfYXR0YWNrSGFuZGxlciIsIl9hdHRhY2tDZWxsIiwiX3BsYWNlU2hpcEhhbmRsZXIiLCJfcGxhY2VTaGlwIiwiX2dldEFQSUNvbnRhaW5lciIsIkdhbWVDb250cm9sbGVyIiwiX2dldEFQSUNvbnRhaW5lcjIiLCJfdXBkYXRlR2FtZVVJMiIsIl9ib2FyZEFjdGlvbkhhbmRsZXIyIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0NlbGxPd25lciIsImRhdGFzZXQiLCJwbGF5ZXJuYW1lIiwiZ2V0UGxheWVyTmFtZSIsImNvb3JkeCIsImNvb3JkeSIsImNlbGxDb29yZCIsIl9wbGFjZVNoaXBIYW5kbGVyMiIsIl9hdHRhY2tIYW5kbGVyMiIsImlzQ29tcHV0ZXJFbmFibGVkIiwiX2NvbXB1dGVyQWN0aW9uSGFuZGxlcjIiLCJfZW5hYmxlQ29tcHV0ZXJIYW5kbGVyMiIsIl9yZXN0YXJ0Um91bmRIYW5kbGVyMiIsIl9jb21wdXRlckF0dGFjazIiLCJfY29tcHV0ZXJCdWlsZEZsZWV0MiIsInJuZENvb3JkIiwiX2dldFJhbmRvbUNvb3JkMiIsInJlc3VsdCIsImVxdWFsc0xhc3RIaXRDb29yZCIsInJuZElzSG9yaXpvbnRhbCIsImZsZWV0U2l6ZSIsIkJvb2xlYW4iLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJybmRYIiwiZmxvb3IiLCJ3aWR0aCIsInJuZFkiLCJoZWlnaHQiLCJfc3RhcnRHYW1lSGFuZGxlcjIiLCJfZ2V0R2FtZVN0YXRlRGF0YTIiLCJfdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIyIiwiZ2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJzZXRDdXJyZW50VXNlck5hbWUiLCJzZXRJc0dhbWVSdW5uaW5nIiwic2V0SXNSb3VuZFJ1bm5pbmciLCJzZXRJc1BsYXllck9uZVR1cm4iLCJzZXRQbGF5ZXJPbmVVc2VyTmFtZSIsInNldFBsYXllclR3b1VzZXJOYW1lIiwic2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdldEdhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwic2V0UGxheWVyT25lRmxlZXRTaXplIiwic2V0UGxheWVyVHdvRmxlZXRTaXplIiwic2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSIsImJ1aWxkIiwiX3N0YXJ0Um91bmQyIiwiZ2V0U2hpcHMiLCJsZW5ndGgiLCJfZW5kR2FtZTIiLCJwbGF5ZXJXaW5uZXIiLCJfc3dpdGNoQ3VycmVudFBsYXllcjIiLCJfZ2V0V2lubmVyMiIsImFsbFNoaXBzU3VuayIsImF0dGFja1Jlc3VsdCIsIl9hdHRhY2tDZWxsMiIsIndpbm5lciIsImN1cnJlbnRCb2FyZCIsInJlY2VpdmVBdHRhY2siLCJfcGxhY2VTaGlwMiIsIm5ld1NoaXAiLCJpc1BsYWNlZCIsInBsYWNlU2hpcCIsImFkZFNoaXAiLCJfY29vcmQiLCJfc2hpcCIsIl9pc09jY3VwaWVkIiwiX2hhc0JlZW5IaXQiLCJCb2FyZENlbGwiLCJvY2N1cHkiLCJzaGlwIiwiaGl0IiwidHJ5SGl0IiwiZ2V0Q29vcmRTdHJpbmciLCJfY29vcmRYIiwiX2Nvb3JkWSIsIk51bWJlciIsInBhcnNlSW50IiwiR2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX2JvYXJkIiwiX3NoaXBMaXN0IiwiX2NhblBsYWNlIiwiX2NhblBsYWNlMiIsImdldENvb3JkU3RhcnQiLCJwdXNoIiwiYm9hcmRDZWxsIiwiZ2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJnYW1lYm9hcmREYXRhIiwic2V0Qm9hcmREYXRhIiwic2V0UGxheWVyVXNlck5hbWUiLCJzZXRBbGxTaGlwc1N1bmsiLCJldmVyeSIsImlzU3VuayIsImNvb3JkU3RhcnQiLCJ4IiwieSIsImVtcHR5Q2VsbCIsIkJVSUxESU5HX1NISVAiLCJ1c2VyTmFtZSIsIl9wbGF5ZXJOYW1lIiwiX2hpdExvZyIsIl9wbGF5ZXJTaGlwcyIsImxvZ0hpdCIsImdldEhpdExvZyIsInNsaWNlIiwicmVzZXRVc2VyIiwiU2hpcFBpZWNlIiwiX3RpbWVzSGl0IiwiX3NoaXBQaWVjZXMiLCJfY29vcmRTdGFydCIsIl9idWlsZFNoaXAiLCJob3Jpem9udGFsIiwiX2J1aWxkU2hpcDIiLCJoaXRDb29yZCIsInNoaXBQaWVjZSIsImZpbmQiLCJwaWVjZUNvb3JkIiwidW5kZWZpbmVkIiwic2hpcFBpZWNlQ29vcmQiLCJfaGl0U3RhdHVzIiwiR2FtZVN0YXRlRGF0YSIsIl9jdXJyZW50UGxheWVyVXNlck5hbWUiLCJfcGxheWVyT25lVXNlck5hbWUiLCJfcGxheWVyVHdvVXNlck5hbWUiLCJfcGxheWVyT25lR2FtZWJvYXJkRGF0YSIsIl9wbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwiX3BsYXllck9uZUZsZWV0U2l6ZSIsIl9wbGF5ZXJUd29GbGVldFNpemUiLCJfY3VycmVudFBsYXllckZsZWV0U2l6ZSIsInNldCIsInBsYXllck9uZVVzZXJOYW1lIiwicGxheWVyVHdvVXNlck5hbWUiLCJwbGF5ZXJPbmVGbGVldFNpemUiLCJwbGF5ZXJUd29GbGVldFNpemUiLCJfZ2FtZVN0YXRlRGF0YSIsInJlc2V0IiwiR2FtZWJvYXJkRGF0YSIsIl9ib2FyZERhdGEiLCJfcGxheWVyVXNlck5hbWUiLCJfYWxsU2hpcHNTdW5rIiwiYm9hcmQiLCJib2FyZENvcHkiLCJmb3JFYWNoIiwicm93IiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfZ2FtZWJvYXJkRGF0YSIsIl9yZXNldCIsIkdhbWVCb2FyZERhdGFCdWlsZGVyIiwiZ2FtZWJvYXJkIiwiX3Jlc2V0MiIsImNvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9