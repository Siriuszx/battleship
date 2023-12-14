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
var _isRepeatedCell = /*#__PURE__*/new WeakSet();
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
  var isRepeatedCell = _classPrivateMethodGet(this, _isRepeatedCell, _isRepeatedCell2).call(this, rndCoord);
  while (isRepeatedCell) {
    rndCoord = _classPrivateMethodGet(this, _getRandomCoord, _getRandomCoord2).call(this);
    isRepeatedCell = _classPrivateMethodGet(this, _isRepeatedCell, _isRepeatedCell2).call(this, rndCoord);
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
function _isRepeatedCell2(coord) {
  return _classPrivateFieldGet(this, _currentPlayer).getHitLog().some(function (currentCoord) {
    return coord.coordX === currentCoord.coordX && coord.coordY === currentCoord.coordY;
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T01Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlci9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0JvYXJkQ2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9IaXRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcFBpZWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvZGF0YVN0YXRlQ29udGFpbmVycy9HYW1lU3RhdGVEYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvZGF0YVN0YXRlQ29udGFpbmVycy9HYW1lU3RhdGVEYXRhQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi4vZW50aXRpZXMvSGl0U3RhdHVzXCI7XG5cbmNsYXNzIERPTUNvbnRyb2xsZXIge1xuICAjQk9BUkRfV0lEVEggPSAxMDtcblxuICAjQk9BUkRfSEVJR0hUID0gMTA7XG5cbiAgI0NFTExfQ09VTlQgPSAxMDA7XG5cbiAgI2JvYXJkUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLW9uZScpO1xuXG4gICNib2FyZFBsYXllclR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC10d28nKTtcblxuICAjc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWUnKTtcblxuICAjc3dpdGNoQXhpc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3Jpem9udGFsLXN0YXR1cycpO1xuXG4gICNyZXN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWdhbWUnKTtcblxuICAjY29tcHV0ZXJFbmFibGVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuYWJsZS1jb21wdXRlcicpO1xuXG4gICNib2FyZEluaXQgPSBmYWxzZTtcblxuICAjaXNIb3Jpem9udGFsID0gdHJ1ZTtcblxuICAjaXNDb21wdXRlckVuYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyQVBJKSB7XG4gICAgdGhpcy4jaW5pdEJvYXJkKGNvbnRyb2xsZXJBUEkuYm9hcmRBY3Rpb25IYW5kbGVyLCBjb250cm9sbGVyQVBJLnVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcbiAgICB0aGlzLiNtYXBIYW5kbGVycyhjb250cm9sbGVyQVBJKTtcbiAgfVxuXG4gIHVwZGF0ZVVJKGdhbWVTdGF0ZURhdGEsIGN1cnJlbnRDZWxsQ29vcmQpIHtcbiAgICB0aGlzLiN1cGRhdGVCb2FyZChnYW1lU3RhdGVEYXRhKTtcbiAgICB0aGlzLiN1cGRhdGVCb2FyZEZvY3VzKGdhbWVTdGF0ZURhdGEpO1xuXG4gICAgaWYgKGN1cnJlbnRDZWxsQ29vcmQgJiYgZ2FtZVN0YXRlRGF0YS5pc0dhbWVSdW5uaW5nKSB7XG4gICAgICB0aGlzLiNoaWdobGlnaEJ1aWxkUGF0dGVybihjdXJyZW50Q2VsbENvb3JkLCBnYW1lU3RhdGVEYXRhLmN1cnJlbnRQbGF5ZXJGbGVldFNpemUsIGdhbWVTdGF0ZURhdGEuY3VycmVudFVzZXJOYW1lKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlQm9hcmQoZ2FtZVN0YXRlRGF0YSkge1xuICAgIGNvbnN0IGdhbWVib2FyZE9uZURhdGEgPSBnYW1lU3RhdGVEYXRhLnBsYXllck9uZUdhbWVib2FyZERhdGE7XG4gICAgY29uc3QgZ2FtZWJvYXJkVHdvRGF0YSA9IGdhbWVTdGF0ZURhdGEucGxheWVyVHdvR2FtZWJvYXJkRGF0YTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jQ0VMTF9DT1VOVDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBub2RlQm9hcmRPbmUgPSB0aGlzLiNib2FyZFBsYXllck9uZS5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkT25lID0gZ2FtZWJvYXJkT25lRGF0YS5ib2FyZERhdGFbaV07XG5cbiAgICAgIGNvbnN0IG5vZGVCb2FyZFR3byA9IHRoaXMuI2JvYXJkUGxheWVyVHdvLmNoaWxkTm9kZXNbaV07XG4gICAgICBjb25zdCBkYXRhQm9hcmRUd28gPSBnYW1lYm9hcmRUd29EYXRhLmJvYXJkRGF0YVtpXTtcblxuICAgICAgLy8gVG8gaGlkZSBmaXJzdCBwbGF5ZXIncyBib2FyZCBkdXJpbmcgYnVpbGRpbmcgcGhhc2VcbiAgICAgIGlmIChnYW1lU3RhdGVEYXRhLmlzUGxheWVyT25lVHVybiA9PT0gZmFsc2UgJiYgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRPbmUsIGRhdGFCb2FyZE9uZSwgIWdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuICAgICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvLCBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuICAgICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvLCBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lLCBnYW1lYm9hcmRPbmVEYXRhLnBsYXllclVzZXJOYW1lKTtcbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxNZXRhRGF0YShub2RlQm9hcmRUd28sIGRhdGFCb2FyZFR3bywgZ2FtZWJvYXJkVHdvRGF0YS5wbGF5ZXJVc2VyTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgI3VwZGF0ZUJvYXJkRm9jdXMoZ2FtZVN0YXRlRGF0YSkge1xuICAgIGlmIChnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuXG4gICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYXR0YWNrJyk7XG4gICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYXR0YWNrJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHN3aXRjaCAoZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGxheWVyIE9uZSc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BsYXllciBUd28nOlxuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuXG4gICAgICBzd2l0Y2ggKGdhbWVTdGF0ZURhdGEuY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgIGNhc2UgJ1BsYXllciBPbmUnOlxuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYXR0YWNrJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BsYXllciBUd28nOlxuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYXR0YWNrJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gI3JlZ2lvbiBCb2FyZCBJbml0aWFsaXphdGlvblxuXG4gICNtYXBIYW5kbGVycyhjb250cm9sbGVyQVBJKSB7XG4gICAgdGhpcy4jc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5zdGFydEdhbWVIYW5kbGVyKTtcbiAgICB0aGlzLiNzd2l0Y2hBeGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy4jdG9nZ2xlSG9yaXpvbnRhbC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLiNyZXN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXJBUEkucmVzdGFydFJvdW5kSGFuZGxlcik7XG4gICAgdGhpcy4jY29tcHV0ZXJFbmFibGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy4jdG9nZ2xlQ29tcHV0ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy4jY29tcHV0ZXJFbmFibGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5lbmFibGVDb21wdXRlckhhbmRsZXIpO1xuICB9XG5cbiAgI2luaXRCb2FyZChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKSB7XG4gICAgaWYgKHRoaXMuI2JvYXJkSW5pdCA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNDRUxMX0NPVU5UOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld0JvYXJkQ2VsbE9uZSA9IHRoaXMuI2NyZWF0ZUNlbGwoYm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcik7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxUd28gPSB0aGlzLiNjcmVhdGVDZWxsKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuXG4gICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5hcHBlbmRDaGlsZChuZXdCb2FyZENlbGxPbmUpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsVHdvKTtcbiAgICB9XG5cbiAgICB0aGlzLiNib2FyZEluaXQgPSB0cnVlO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gQ2VsbCBDcmVhdGlvbi9TdGF0dXNNdXRhdGlvblxuXG4gICN1cGRhdGVDZWxsTWV0YURhdGEoY2VsbE5vZGUsIGNlbGxEYXRhLCBwbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgY29vcmQgPSBjZWxsRGF0YS5nZXRDb29yZCgpO1xuXG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeCcsIGNvb3JkLmNvb3JkWCk7XG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeScsIGNvb3JkLmNvb3JkWSk7XG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXBsYXllcm5hbWUnLCBwbGF5ZXJOYW1lKTtcbiAgfVxuXG4gICN1cGRhdGVDZWxsU3RhdHVzKGNlbGxOb2RlLCBjZWxsRGF0YSwgaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICBpZiAoIWNlbGxOb2RlIHx8ICFjZWxsRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm9kZSA9IGNlbGxOb2RlO1xuICAgIGNvbnN0IGRhdGEgPSBjZWxsRGF0YTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2V0SGl0U3RhdHVzKCk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5OT1RfSElUOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRkZGRkYnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX1NISVA6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGMDAwMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfQ0VMTDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2VsbERhdGEuaXNPY2N1cGllZCAmJiBpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xuICB9XG5cbiAgI2NyZWF0ZUNlbGwoYm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcikge1xuICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY2VsbCcpO1xuICAgIG5ld0NlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib2FyZEFjdGlvbkhhbmRsZXIpO1xuICAgIG5ld0NlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuXG4gICAgcmV0dXJuIG5ld0NlbGw7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBDZWxsIEJ1aWxkaW5nIFBhdGggSGludGluZ1xuXG4gICNoaWdobGlnaEJ1aWxkUGF0dGVybihjb29yZCwgY3VycmVudFBsYXllckZsZWV0U2l6ZSwgY3VycmVudFBsYXllck5hbWUpIHtcbiAgICBjb25zdCBzaGlwU2l6ZVBhdHRlcm4gPSB0aGlzLiNnZXRTaGlwU2l6ZVBhdHRlcm4oY3VycmVudFBsYXllckZsZWV0U2l6ZSk7XG5cbiAgICB0aGlzLiNoaWdobGlnaHRDZWxscyhjb29yZCwgc2hpcFNpemVQYXR0ZXJuLCBjdXJyZW50UGxheWVyTmFtZSk7XG4gIH1cblxuICAjaGlnaGxpZ2h0Q2VsbHMoY29vcmQsIHNoaXBTaXplUGF0dGVybiwgY3VycmVudFBsYXllck5hbWUpIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLiNpc0hvcml6b250YWw7XG5cbiAgICBzd2l0Y2ggKGlzSG9yaXpvbnRhbCkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplUGF0dGVybjsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKChjb29yZC5jb29yZFggKyBzaGlwU2l6ZVBhdHRlcm4pIC0gMSA+IHRoaXMuI0JPQVJEX1dJRFRIKSBicmVhaztcbiAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWNvb3JkeD1cIiR7Y29vcmQuY29vcmRYICsgaX1cIl1bZGF0YS1jb29yZHk9XCIke2Nvb3JkLmNvb3JkWX1cIl1bZGF0YS1wbGF5ZXJuYW1lPVwiJHtjdXJyZW50UGxheWVyTmFtZX1cIl1gKTtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplUGF0dGVybjsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKChjb29yZC5jb29yZFkgKyBzaGlwU2l6ZVBhdHRlcm4pIC0gMSA+IHRoaXMuI0JPQVJEX0hFSUdIVCkgYnJlYWs7XG4gICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1jb29yZHg9XCIke2Nvb3JkLmNvb3JkWH1cIl1bZGF0YS1jb29yZHk9XCIke2Nvb3JkLmNvb3JkWSArIGl9XCJdW2RhdGEtcGxheWVybmFtZT1cIiR7Y3VycmVudFBsYXllck5hbWV9XCJdYCk7XG4gICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgI2dldFNoaXBTaXplUGF0dGVybihjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7XG4gICAgc3dpdGNoIChjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiA1O1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gNDtcbiAgICAgIGNhc2UgMjpcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiAyO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gICN0b2dnbGVIb3Jpem9udGFsKCkge1xuICAgIHRoaXMuI2lzSG9yaXpvbnRhbCA9ICF0aGlzLiNpc0hvcml6b250YWw7XG4gICAgdGhpcy4jc3dpdGNoQXhpc0J1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdidXR0b24tYWN0aXZlJyk7XG4gIH1cblxuICAjdG9nZ2xlQ29tcHV0ZXIoKSB7XG4gICAgdGhpcy4jaXNDb21wdXRlckVuYWJsZWQgPSAhdGhpcy4jaXNDb21wdXRlckVuYWJsZWQ7XG4gICAgdGhpcy4jY29tcHV0ZXJFbmFibGVkQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2J1dHRvbi1hY3RpdmUnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLiNpc0NvbXB1dGVyRW5hYmxlZCk7XG4gIH1cblxuICBnZXRJc0hvcml6b250YWwoKSB7IHJldHVybiB0aGlzLiNpc0hvcml6b250YWw7IH1cblxuICBnZXQgaXNDb21wdXRlckVuYWJsZWQoKSB7IHJldHVybiB0aGlzLiNpc0NvbXB1dGVyRW5hYmxlZDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET01Db250cm9sbGVyO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vZW50aXRpZXMvUGxheWVyXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZW50aXRpZXMvU2hpcFwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi4vZW50aXRpZXMvR2FtZWJvYXJkXCI7XG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tIFwiLi9ET01Db250cm9sbGVyXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi4vZW50aXRpZXMvQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IEdhbWVTdGF0ZURhdGFCdWlsZGVyIGZyb20gXCIuLi9lbnRpdGllcy9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVTdGF0ZURhdGFCdWlsZGVyXCI7XG5cbmNsYXNzIEdhbWVDb250cm9sbGVyIHtcbiAgI2N1cnJlbnRQbGF5ZXIgPSBudWxsO1xuXG4gICNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG5cbiAgI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG5cbiAgI2lzUGxheWVyT25lVHVybiA9IHRydWU7XG5cbiAgI3BsYXllck9uZSA9IG51bGw7XG5cbiAgI3BsYXllclR3byA9IG51bGw7XG5cbiAgI3BsYXllck9uZUdhbWVib2FyZCA9IG51bGw7XG5cbiAgI3BsYXllclR3b0dhbWVib2FyZCA9IG51bGw7XG5cbiAgI0RPTUNvbnRyb2xsZXIgPSBudWxsO1xuXG4gICNsYXN0Q29tcHV0ZXJIaXRDb29yZCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jRE9NQ29udHJvbGxlciA9IG5ldyBET01Db250cm9sbGVyKHRoaXMuI2dldEFQSUNvbnRhaW5lcigpKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB0aGlzLiNsYXN0Q29tcHV0ZXJIaXRDb29yZCA9IG5ldyBDb29yZGluYXRlKC0xLCAtMSk7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoKTtcbiAgfVxuXG4gIC8vIENhbGxiYWNrIHRvIGxldCBvdGhlciBsYXllcnMgb2YgcHJvZ3JhbSBpbnRlcmFjdCB3aXRoIG91ciBnYW1lIGNvbnRyb2xsZXJcbiAgI2JvYXJkQWN0aW9uSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2VsbE5vZGUgPSBldmVudC50YXJnZXQ7XG5cbiAgICBjb25zdCBpc0NlbGxPd25lciA9IGNlbGxOb2RlLmRhdGFzZXQucGxheWVybmFtZSA9PT0gdGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCk7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jRE9NQ29udHJvbGxlci5nZXRJc0hvcml6b250YWwoKTtcblxuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuXG4gICAgY29uc3QgY2VsbENvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuXG4gICAgc3dpdGNoICh0aGlzLiNpc1JvdW5kUnVubmluZykge1xuICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIHBsYWNlIHNoaXBzIG9uIEhJUyBPV04gYm9hcmQgb25seVxuICAgICAgICBpZiAoaXNDZWxsT3duZXIgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYWNlU2hpcEhhbmRsZXIoY2VsbENvb3JkLCBpc0hvcml6b250YWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIGF0dGFjayBzaGlwcyBvbiBISVMgT1BQT05FTlQnUyBib2FyZCBvbmx5XG4gICAgICAgIGlmIChpc0NlbGxPd25lciA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLiNhdHRhY2tIYW5kbGVyKGNlbGxDb29yZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGhpcy4jRE9NQ29udHJvbGxlci5pc0NvbXB1dGVyRW5hYmxlZCk7XG4gICAgaWYgKHRoaXMuI0RPTUNvbnRyb2xsZXIuaXNDb21wdXRlckVuYWJsZWQgPT09IHRydWUgJiYgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy4jY29tcHV0ZXJBY3Rpb25IYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKGNlbGxDb29yZCk7XG4gIH1cblxuICAjZW5hYmxlQ29tcHV0ZXJIYW5kbGVyKCkge1xuICAgIHRoaXMuI3Jlc3RhcnRSb3VuZEhhbmRsZXIoKTtcbiAgfVxuXG4gICNjb21wdXRlckFjdGlvbkhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuI2NvbXB1dGVyQXR0YWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2NvbXB1dGVyQnVpbGRGbGVldCgpO1xuICAgIH1cbiAgfVxuXG4gICNjb21wdXRlckF0dGFjaygpIHtcbiAgICBsZXQgcm5kQ29vcmQgPSB0aGlzLiNnZXRSYW5kb21Db29yZCgpO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgIGxldCBpc1JlcGVhdGVkQ2VsbCA9IHRoaXMuI2lzUmVwZWF0ZWRDZWxsKHJuZENvb3JkKTsgXG5cbiAgICB3aGlsZSAoaXNSZXBlYXRlZENlbGwpIHtcbiAgICAgIHJuZENvb3JkID0gdGhpcy4jZ2V0UmFuZG9tQ29vcmQoKTtcbiAgICAgIGlzUmVwZWF0ZWRDZWxsID0gdGhpcy4jaXNSZXBlYXRlZENlbGwocm5kQ29vcmQpO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHRoaXMuI2F0dGFja0hhbmRsZXIocm5kQ29vcmQpO1xuXG4gICAgdGhpcy4jbGFzdENvbXB1dGVySGl0Q29vcmQgPSBybmRDb29yZDtcblxuICAgIGNvbnNvbGUubG9nKGBSTkQgWDogJHtybmRDb29yZC5jb29yZFh9IFJORCBZOiAke3JuZENvb3JkLmNvb3JkWX1gKTtcbiAgICBjb25zb2xlLmxvZyhgUkVTVUxUOiAke3Jlc3VsdH1gKTtcbiAgfVxuXG4gICNjb21wdXRlckJ1aWxkRmxlZXQoKSB7XG4gICAgbGV0IHJuZENvb3JkID0gbnVsbDtcbiAgICBsZXQgcm5kSXNIb3Jpem9udGFsID0gZmFsc2U7XG5cbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICB3aGlsZSAodGhpcy4jY3VycmVudFBsYXllci5mbGVldFNpemUgIT09IDUpIHtcbiAgICAgIHJuZENvb3JkID0gdGhpcy4jZ2V0UmFuZG9tQ29vcmQoKTtcblxuICAgICAgcm5kSXNIb3Jpem9udGFsID0gQm9vbGVhbihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuI3BsYWNlU2hpcEhhbmRsZXIocm5kQ29vcmQsIHJuZElzSG9yaXpvbnRhbCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBSTkQgWDogJHtybmRDb29yZC5jb29yZFh9IFJORCBZOiAke3JuZENvb3JkLmNvb3JkWX1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBSRVNVTFQ6ICR7cmVzdWx0fWApO1xuICAgIH1cbiAgfVxuXG4gICNnZXRSYW5kb21Db29yZCgpIHtcbiAgICBjb25zdCBybmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLndpZHRoICsgMSk7XG4gICAgY29uc3Qgcm5kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZC5oZWlnaHQgKyAxKTtcblxuICAgIGNvbnN0IHJuZENvb3JkID0gbmV3IENvb3JkaW5hdGUocm5kWCwgcm5kWSk7XG5cbiAgICByZXR1cm4gcm5kQ29vcmQ7XG4gIH1cblxuICAjaXNSZXBlYXRlZENlbGwoY29vcmQpIHtcbiAgICByZXR1cm4gdGhpcy4jY3VycmVudFBsYXllci5nZXRIaXRMb2coKVxuICAgIC5zb21lKChjdXJyZW50Q29vcmQpID0+IChjb29yZC5jb29yZFggPT09IGN1cnJlbnRDb29yZC5jb29yZFgpICYmIChjb29yZC5jb29yZFkgPT09IGN1cnJlbnRDb29yZC5jb29yZFkpKTtcbiAgfVxuXG4gICNzdGFydEdhbWVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSB0cnVlKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgI3Jlc3RhcnRSb3VuZEhhbmRsZXIoKSB7XG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdQbGF5ZXIgT25lJyk7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKSB7XG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dldEdhbWVTdGF0ZURhdGEoKTtcblxuICAgIHRoaXMuI0RPTUNvbnRyb2xsZXIudXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCk7XG4gIH1cblxuICAjdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmIChjZWxsTm9kZS5kYXRhc2V0LnBsYXllcm5hbWUgIT09IHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb29yZFggPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeDtcbiAgICBjb25zdCBjb29yZFkgPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeTtcblxuICAgIGNvbnN0IGN1cnJlbnRDZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoY3VycmVudENlbGxDb29yZCk7XG4gIH1cblxuICAjZ2V0R2FtZVN0YXRlRGF0YSgpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhQnVpbGRlciA9IG5ldyBHYW1lU3RhdGVEYXRhQnVpbGRlcigpO1xuXG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IGdhbWVTdGF0ZURhdGFCdWlsZGVyXG4gICAgICAuc2V0Q3VycmVudFVzZXJOYW1lKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldElzR2FtZVJ1bm5pbmcodGhpcy4jaXNHYW1lUnVubmluZylcbiAgICAgIC5zZXRJc1JvdW5kUnVubmluZyh0aGlzLiNpc1JvdW5kUnVubmluZylcbiAgICAgIC5zZXRJc1BsYXllck9uZVR1cm4odGhpcy4jaXNQbGF5ZXJPbmVUdXJuKVxuICAgICAgLnNldFBsYXllck9uZVVzZXJOYW1lKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0UGxheWVyVHdvVXNlck5hbWUodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5nZXRHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpKVxuICAgICAgLnNldFBsYXllclR3b0dhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuc2V0UGxheWVyT25lRmxlZXRTaXplKHRoaXMuI3BsYXllck9uZS5mbGVldFNpemUpXG4gICAgICAuc2V0UGxheWVyVHdvRmxlZXRTaXplKHRoaXMuI3BsYXllclR3by5mbGVldFNpemUpXG4gICAgICAuc2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSh0aGlzLiNjdXJyZW50UGxheWVyLmZsZWV0U2l6ZSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgcmV0dXJuIGdhbWVTdGF0ZURhdGE7XG4gIH1cblxuICAvLyBUbyBjaGVjayBpZiByb3VuZCBzaG91bGQgc3RhcnQgb25jZSBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAjc3RhcnRSb3VuZCgpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lLmdldFNoaXBzKCkubGVuZ3RoID09PSA1ICYmIHRoaXMuI3BsYXllclR3by5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAjZW5kR2FtZShwbGF5ZXJXaW5uZXIpIHtcbiAgICBpZiAocGxheWVyV2lubmVyID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gICNzd2l0Y2hDdXJyZW50UGxheWVyKCkge1xuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUd287XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gIXRoaXMuI2lzUGxheWVyT25lVHVybjtcbiAgfVxuXG4gICNnZXRXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3bztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgI2F0dGFja0hhbmRsZXIoY29vcmQpIHtcbiAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSB0aGlzLiNhdHRhY2tDZWxsKGNvb3JkKTtcbiAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG5cbiAgICBjb25zdCB3aW5uZXIgPSB0aGlzLiNnZXRXaW5uZXIoKTtcblxuICAgIGlmICh3aW5uZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuI2VuZEdhbWUod2lubmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKGBwbGF5ZXIgJHt3aW5uZXIuZ2V0UGxheWVyTmFtZSgpfSB3b25gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xuICB9XG5cbiAgI2F0dGFja0NlbGwoY29vcmQpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIubG9nSGl0KGNvb3JkKTtcbiAgICBjdXJyZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNwbGFjZVNoaXBIYW5kbGVyKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLiNwbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCk7XG5cbiAgICB0aGlzLiNzdGFydFJvdW5kKCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKSB7XG4gICAgaWYgKHRoaXMuI2lzUm91bmRSdW5uaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRCb2FyZCA9IG51bGw7XG4gICAgbGV0IG5ld1NoaXAgPSBudWxsO1xuICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gVG8gYnVpbGQgc2hpcHMgaW4gcHJlLWRldGVybWluZWQgcGF0dGVybiAoNSw0LDMsMywyKVxuICAgIHN3aXRjaCAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgNSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgNCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSA0OiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gUGxheWVycyBzaG91bGQgdGFrZSB0dXJucyBhZnRlciBidWlsZGluZyB0aGVpciBlbnRpcmUgZmxlZXRcbiAgICBpZiAoaXNQbGFjZWQpIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIuYWRkU2hpcChuZXdTaGlwKTtcblxuICAgICAgaWYgKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYGlzUGxhY2VkOiAke2lzUGxhY2VkfWApO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgI2dldEFQSUNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRHYW1lSGFuZGxlcjogdGhpcy4jc3RhcnRHYW1lSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgYm9hcmRBY3Rpb25IYW5kbGVyOiB0aGlzLiNib2FyZEFjdGlvbkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIHJlc3RhcnRSb3VuZEhhbmRsZXI6IHRoaXMuI3Jlc3RhcnRSb3VuZEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyOiB0aGlzLiN1cGRhdGVCb2FyZEhpbnRzSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZW5hYmxlQ29tcHV0ZXJIYW5kbGVyOiB0aGlzLiNlbmFibGVDb21wdXRlckhhbmRsZXIuYmluZCh0aGlzKVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9Db29yZGluYXRlXCI7XG5pbXBvcnQgaGl0U3RhdHVzIGZyb20gXCIuL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBCb2FyZENlbGwge1xuICAgICNjb29yZCA9IG51bGw7XG5cbiAgICAjc2hpcCA9IG51bGw7XG5cbiAgICAjaXNPY2N1cGllZCA9IGZhbHNlO1xuXG4gICAgI2hhc0JlZW5IaXQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIH1cblxuICAgIG9jY3VweShzaGlwKSB7XG4gICAgICAgIGlmICh0aGlzLiNzaGlwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaXNPY2N1cGllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuI3NoaXAgPSBzaGlwO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2hhc0JlZW5IaXQgPT09IHRydWUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNoYXNCZWVuSGl0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgdGhpcy4jc2hpcC50cnlIaXQodGhpcy4jY29vcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmQoKSB7IHJldHVybiB0aGlzLiNjb29yZDsgfVxuXG4gICAgZ2V0Q29vcmRTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgWDogJHt0aGlzLiNjb29yZC5jb29yZFh9IFk6ICR7dGhpcy4jY29vcmQuY29vcmRZfWA7XG4gICAgfVxuXG4gICAgZ2V0SGl0U3RhdHVzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuI2hhc0JlZW5IaXQpIHtcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuTk9UX0hJVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNzaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5ISVRfU0hJUDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX0NFTEw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGlzT2NjdXBpZWQoKSB7IHJldHVybiB0aGlzLiNpc09jY3VwaWVkOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkQ2VsbDsiLCJjbGFzcyBDb29yZGluYXRlIHtcbiAgICAjY29vcmRYID0gMDtcblxuICAgICNjb29yZFkgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmRYID0gY29vcmRYO1xuICAgICAgICB0aGlzLiNjb29yZFkgPSBjb29yZFk7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3JkWCgpIHsgcmV0dXJuIE51bWJlci5wYXJzZUludCh0aGlzLiNjb29yZFgsIDEwKTsgfVxuXG4gICAgZ2V0IGNvb3JkWSgpIHsgcmV0dXJuIE51bWJlci5wYXJzZUludCh0aGlzLiNjb29yZFksIDEwKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29yZGluYXRlOyIsImltcG9ydCBCb2FyZENlbGwgZnJvbSBcIi4vQm9hcmRDZWxsXCI7XG5pbXBvcnQgR2FtZWJvYXJkRGF0YUJ1aWxkZXIgZnJvbSBcIi4vZGF0YVN0YXRlQ29udGFpbmVycy9HYW1lYm9hcmREYXRhQnVpbGRlclwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgICN3aWR0aCA9IDEwO1xuXG4gICAgI2hlaWdodCA9IDEwO1xuXG4gICAgI2JvYXJkID0gW107XG5cbiAgICAvLyBzd2FwcGluZyBzdXBwb3NlZGx5IFggYW5kIFkgY29vcmRpbmF0ZXMgaGVyZSBiZWNhdXNlIG9mIGZhaWxlZCBhdHRlbXB0IHRvIGltcGxlbWVudCAyRCBhcnJheXMgaW4gSmF2YVNjcmlwdC4uLlxuICAgICNzaGlwTGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2luaXRCb2FyZCgpO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuI2NhblBsYWNlKHNoaXAuZ2V0Q29vcmRTdGFydCgpLCBpc0hvcml6b250YWwsIGxlbmd0aCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy4jc2hpcExpc3QucHVzaChzaGlwKTtcblxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRZIC0gMV1bKHNoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDEpICsgaV07XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRZIC0gMSkgKyBpXVtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFggLSAxXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jYm9hcmRbY29vcmQuY29vcmRZIC0gMV1bY29vcmQuY29vcmRYIC0gMV0uaGl0KCk7XG4gICAgfVxuICAgIFxuICAgIGdldEdhbWVib2FyZERhdGEocGxheWVyVXNlck5hbWUpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YUJ1aWxkZXIgPSBuZXcgR2FtZWJvYXJkRGF0YUJ1aWxkZXIoKTtcblxuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhID0gZ2FtZWJvYXJkRGF0YUJ1aWxkZXIuc2V0Qm9hcmREYXRhKHRoaXMuI2JvYXJkKVxuICAgICAgICAuc2V0UGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpXG4gICAgICAgIC5zZXRBbGxTaGlwc1N1bmsodGhpcy5hbGxTaGlwc1N1bmsoKSlcbiAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG4gICAgXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hpcExpc3QuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG4gICAgXG4gICAgI2NhblBsYWNlKGNvb3JkU3RhcnQsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBsZW5ndGggPiB0aGlzLiN3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtjb29yZFN0YXJ0LmNvb3JkWSAtIDFdWyhjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBsZW5ndGggPiB0aGlzLiNoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBpXVtjb29yZFN0YXJ0LmNvb3JkWCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0Qm9hcmQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZC5sZW5ndGggIT09IDApIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuI3dpZHRoOyB4ICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuI2JvYXJkLnB1c2goW10pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuI2hlaWdodDsgeSArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gc3dhcHBpbmcgdmFsdWVzIGR1ZSB0byB3cm9uZyBjZWxsIGRhdGEgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUNlbGwgPSBuZXcgQm9hcmRDZWxsKHkgKyAxLCB4ICsgMSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNib2FyZFt4XS5wdXNoKGVtcHR5Q2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLiN3aWR0aH07XG5cbiAgICBnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy4jaGVpZ2h0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiZnVuY3Rpb24gaGl0U3RhdHVzKCkge1xuICAgIGNvbnN0IE5PVF9ISVQgPSAnTk9UX0hJVCc7XG4gICAgY29uc3QgSElUX0NFTEwgPSAnSElUX0NFTEwnO1xuICAgIGNvbnN0IEhJVF9TSElQID0gJ0hJVF9TSElQJztcbiAgICBjb25zdCBCVUlMRElOR19TSElQID0gJ0JVSUxESU5HX1NISVAnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgTk9UX0hJVCxcbiAgICAgICAgSElUX0NFTEwsXG4gICAgICAgIEhJVF9TSElQLFxuICAgICAgICBCVUlMRElOR19TSElQXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhpdFN0YXR1czsiLCJjbGFzcyBQbGF5ZXIge1xuICAjcGxheWVyTmFtZSA9ICcnO1xuXG4gICNoaXRMb2cgPSBbXTtcblxuICAjcGxheWVyU2hpcHMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih1c2VyTmFtZSkge1xuICAgIHRoaXMuI3BsYXllck5hbWUgPSB1c2VyTmFtZTtcbiAgfVxuXG4gIGxvZ0hpdChjb29yZCkge1xuICAgIHRoaXMuI2hpdExvZy5wdXNoKGNvb3JkKTtcbiAgfVxuXG4gIGFkZFNoaXAoc2hpcCkge1xuICAgIHRoaXMuI3BsYXllclNoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICBnZXRIaXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdExvZy5zbGljZSgpO1xuICB9XG5cbiAgZ2V0U2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllclNoaXBzLnNsaWNlKCk7XG4gIH1cblxuICByZXNldFVzZXIoKSB7XG4gICAgdGhpcy4jaGl0TG9nID0gW107XG4gICAgdGhpcy4jcGxheWVyU2hpcHMgPSBbXTtcbiAgfVxuXG4gIGdldFBsYXllck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllck5hbWU7XG4gIH07XG5cbiAgZ2V0IGZsZWV0U2l6ZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclNoaXBzLmxlbmd0aDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiaW1wb3J0IFNoaXBQaWVjZSBmcm9tIFwiLi9TaGlwUGllY2VcIjtcblxuY2xhc3MgU2hpcCB7XG4gICN0aW1lc0hpdCA9IDA7XG5cbiAgI3NoaXBQaWVjZXMgPSBbXTtcbiAgXG4gICNjb29yZFN0YXJ0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICB0aGlzLiNjb29yZFN0YXJ0ID0gY29vcmRTdGFydFxuICAgIHRoaXMuI2J1aWxkU2hpcChjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpO1xuICB9XG5cbiAgdHJ5SGl0KGhpdENvb3JkKSB7XG4gICAgY29uc3Qgc2hpcFBpZWNlID0gdGhpcy4jc2hpcFBpZWNlcy5maW5kKHBpZWNlQ29vcmQgPT5cbiAgICAgIChwaWVjZUNvb3JkLmNvb3JkWCA9PT0gaGl0Q29vcmQuY29vcmRYKSAmJiAocGllY2VDb29yZC5jb29yZFkgPT09IGhpdENvb3JkLmNvb3JkWSlcbiAgICApO1xuXG4gICAgaWYgKHNoaXBQaWVjZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHNoaXBQaWVjZS5oaXRTdGF0dXMgPT09IHRydWUpIHJldHVybiBmYWxzZTsgXG5cbiAgICB0aGlzLiN0aW1lc0hpdCArPSAxO1xuXG4gICAgcmV0dXJuIHNoaXBQaWVjZS5oaXQoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5ldmVyeShzaGlwUGllY2UgPT5cbiAgICAgIHNoaXBQaWVjZS5oaXRTdGF0dXMgPT09IHRydWVcbiAgICApO1xuICB9XG5cbiAgI2J1aWxkU2hpcChjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgc2hpcFBpZWNlQ29vcmQgPSBudWxsO1xuXG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICBzaGlwUGllY2VDb29yZCA9IG5ldyBTaGlwUGllY2UoY29vcmRTdGFydC5jb29yZFggKyBpLCBjb29yZFN0YXJ0LmNvb3JkWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwUGllY2VDb29yZCA9IG5ldyBTaGlwUGllY2UoY29vcmRTdGFydC5jb29yZFgsIGNvb3JkU3RhcnQuY29vcmRZICsgaSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuI3NoaXBQaWVjZXMucHVzaChzaGlwUGllY2VDb29yZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29vcmRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29vcmRTdGFydDtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7IHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmxlbmd0aDsgfVxuXG4gIGdldCB0aW1lc0hpdCgpIHsgcmV0dXJuIHRoaXMuI3RpbWVzSGl0OyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuXG5jbGFzcyBTaGlwUGllY2Uge1xuICAgICNjb29yZCA9IG51bGw7XG5cbiAgICAjaGl0U3RhdHVzID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuI2hpdFN0YXR1cyA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLiNoaXRTdGF0dXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3JkWCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWCB9XG5cbiAgICBnZXQgY29vcmRZKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRZOyB9XG5cbiAgICBnZXQgaGl0U3RhdHVzKCkgeyByZXR1cm4gdGhpcy4jaGl0U3RhdHVzOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBQaWVjZTsiLCJjbGFzcyBHYW1lU3RhdGVEYXRhIHtcbiAgICAjY3VycmVudFBsYXllclVzZXJOYW1lO1xuXG4gICAgI2lzR2FtZVJ1bm5pbmc7XG5cbiAgICAjaXNSb3VuZFJ1bm5pbmc7XG5cbiAgICAjaXNQbGF5ZXJPbmVUdXJuO1xuXG4gICAgI3BsYXllck9uZVVzZXJOYW1lO1xuXG4gICAgI3BsYXllclR3b1VzZXJOYW1lO1xuXG4gICAgI3BsYXllck9uZUdhbWVib2FyZERhdGE7XG5cbiAgICAjcGxheWVyVHdvR2FtZWJvYXJkRGF0YTtcblxuICAgICNwbGF5ZXJPbmVGbGVldFNpemU7XG5cbiAgICAjcGxheWVyVHdvRmxlZXRTaXplO1xuXG4gICAgI2N1cnJlbnRQbGF5ZXJGbGVldFNpemU7XG5cbiAgICBnZXQgY3VycmVudFVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jY3VycmVudFBsYXllclVzZXJOYW1lOyB9XG5cbiAgICBzZXQgY3VycmVudFVzZXJOYW1lKGN1cnJlbnRVc2VyTmFtZSkgeyB0aGlzLiNjdXJyZW50UGxheWVyVXNlck5hbWUgPSBjdXJyZW50VXNlck5hbWU7IH1cblxuICAgIGdldCBpc0dhbWVSdW5uaW5nKCkgeyByZXR1cm4gdGhpcy4jaXNHYW1lUnVubmluZzsgfVxuXG4gICAgc2V0IGlzR2FtZVJ1bm5pbmcoaXNHYW1lUnVubmluZykgeyB0aGlzLiNpc0dhbWVSdW5uaW5nID0gaXNHYW1lUnVubmluZzsgfVxuXG4gICAgZ2V0IGlzUm91bmRSdW5uaW5nKCkgeyByZXR1cm4gdGhpcy4jaXNSb3VuZFJ1bm5pbmc7IH1cblxuICAgIHNldCBpc1JvdW5kUnVubmluZyhpc1JvdW5kUnVubmluZykgeyB0aGlzLiNpc1JvdW5kUnVubmluZyA9IGlzUm91bmRSdW5uaW5nOyB9XG5cbiAgICBnZXQgaXNQbGF5ZXJPbmVUdXJuKCkgeyByZXR1cm4gdGhpcy4jaXNQbGF5ZXJPbmVUdXJuOyB9XG5cbiAgICBzZXQgaXNQbGF5ZXJPbmVUdXJuKGlzUGxheWVyT25lVHVybikgeyB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSBpc1BsYXllck9uZVR1cm47IH1cblxuICAgIGdldCBwbGF5ZXJPbmVVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllck9uZVVzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyT25lVXNlck5hbWUocGxheWVyT25lVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyT25lVXNlck5hbWUgPSBwbGF5ZXJPbmVVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IHBsYXllclR3b1VzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVHdvVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJUd29Vc2VyTmFtZShwbGF5ZXJUd29Vc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJUd29Vc2VyTmFtZSA9IHBsYXllclR3b1VzZXJOYW1lOyB9XG5cbiAgICBnZXQgcGxheWVyT25lR2FtZWJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZERhdGE7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHBsYXllck9uZUdhbWVib2FyZERhdGEpIHsgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkRGF0YSA9IHBsYXllck9uZUdhbWVib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJUd29HYW1lYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgc2V0IHBsYXllclR3b0dhbWVib2FyZERhdGEocGxheWVyVHdvR2FtZWJvYXJkRGF0YSkgeyB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmREYXRhID0gcGxheWVyVHdvR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllck9uZUZsZWV0U2l6ZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllck9uZUZsZWV0U2l6ZTsgfVxuXG4gICAgc2V0IHBsYXllck9uZUZsZWV0U2l6ZShwbGF5ZXJPbmVGbGVldFNpemUpIHsgdGhpcy4jcGxheWVyT25lRmxlZXRTaXplID0gcGxheWVyT25lRmxlZXRTaXplOyB9XG4gICAgXG4gICAgZ2V0IHBsYXllclR3b0ZsZWV0U2l6ZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b0ZsZWV0U2l6ZTsgfVxuXG4gICAgc2V0IHBsYXllclR3b0ZsZWV0U2l6ZShwbGF5ZXJUd29GbGVldFNpemUpIHsgdGhpcy4jcGxheWVyVHdvRmxlZXRTaXplID0gcGxheWVyVHdvRmxlZXRTaXplOyB9XG5cbiAgICBnZXQgY3VycmVudFBsYXllckZsZWV0U2l6ZSgpIHsgcmV0dXJuIHRoaXMuI2N1cnJlbnRQbGF5ZXJGbGVldFNpemU7IH1cblxuICAgIHNldCBjdXJyZW50UGxheWVyRmxlZXRTaXplKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHsgdGhpcy4jY3VycmVudFBsYXllckZsZWV0U2l6ZSA9IGN1cnJlbnRQbGF5ZXJGbGVldFNpemU7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlRGF0YTsiLCJpbXBvcnQgR2FtZVN0YXRlRGF0YSBmcm9tIFwiLi9HYW1lU3RhdGVEYXRhXCI7XG5cbmNsYXNzIEdhbWVTdGF0ZURhdGFCdWlsZGVyIHtcbiAgICAjZ2FtZVN0YXRlRGF0YSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YSA9IG5ldyBHYW1lU3RhdGVEYXRhKCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFVzZXJOYW1lKGN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSA9IGN1cnJlbnRVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNHYW1lUnVubmluZyhpc0dhbWVSdW5uaW5nKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZyA9IGlzR2FtZVJ1bm5pbmc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzUm91bmRSdW5uaW5nKGlzUm91bmRSdW5uaW5nKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPSBpc1JvdW5kUnVubmluZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNQbGF5ZXJPbmVUdXJuKGlzUGxheWVyT25lVHVybikge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzUGxheWVyT25lVHVybiA9IGlzUGxheWVyT25lVHVybjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyT25lVXNlck5hbWUocGxheWVyT25lVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVVc2VyTmFtZSA9IHBsYXllck9uZVVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJUd29Vc2VyTmFtZShwbGF5ZXJUd29Vc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllclR3b1VzZXJOYW1lID0gcGxheWVyVHdvVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZUdhbWVib2FyZERhdGEocGxheWVyT25lR2FtZWJvYXJkRGF0YSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllck9uZUdhbWVib2FyZERhdGEgPSBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJUd29HYW1lYm9hcmREYXRhKHBsYXllclR3b0dhbWVib2FyZERhdGEpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29HYW1lYm9hcmREYXRhID0gcGxheWVyVHdvR2FtZWJvYXJkRGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyT25lRmxlZXRTaXplKHBsYXllck9uZUZsZWV0U2l6ZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllck9uZUZsZWV0U2l6ZSA9IHBsYXllck9uZUZsZWV0U2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvRmxlZXRTaXplKHBsYXllclR3b0ZsZWV0U2l6ZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllclR3b0ZsZWV0U2l6ZSA9IHBsYXllclR3b0ZsZWV0U2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZShjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuY3VycmVudFBsYXllckZsZWV0U2l6ZSA9IGN1cnJlbnRQbGF5ZXJGbGVldFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhID0gbmV3IEdhbWVTdGF0ZURhdGEoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dhbWVTdGF0ZURhdGE7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIGdhbWVTdGF0ZURhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGVEYXRhQnVpbGRlcjsiLCJjbGFzcyBHYW1lYm9hcmREYXRhIHtcbiAgICAjYm9hcmREYXRhID0gbnVsbDtcblxuICAgICNwbGF5ZXJVc2VyTmFtZSA9ICcnO1xuXG4gICAgI2FsbFNoaXBzU3VuayA9IG51bGw7XG5cbiAgICBzZXRCb2FyZERhdGEoYm9hcmQpIHtcbiAgICAgICAgY29uc3QgYm9hcmRDb3B5ID0gYm9hcmQuc2xpY2UoKTtcbiAgICAgICAgY29uc3QgYm9hcmREYXRhID0gW107XG5cbiAgICAgICAgYm9hcmRDb3B5LmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGJvYXJkRGF0YS5wdXNoKC4uLnJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2JvYXJkRGF0YSA9IGJvYXJkRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKSB7IHRoaXMuI3BsYXllclVzZXJOYW1lID0gcGxheWVyVXNlck5hbWU7IH1cblxuICAgIGdldCBhbGxTaGlwc1N1bmsoKSB7IHJldHVybiB0aGlzLiNhbGxTaGlwc1N1bms7IH1cblxuICAgIHNldCBhbGxTaGlwc1N1bmsoYWxsU2hpcHNTdW5rKSB7IHRoaXMuI2FsbFNoaXBzU3VuayA9IGFsbFNoaXBzU3VuazsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmREYXRhOyIsImltcG9ydCBHYW1lYm9hcmREYXRhIGZyb20gXCIuL0dhbWVib2FyZERhdGFcIjtcblxuY2xhc3MgR2FtZUJvYXJkRGF0YUJ1aWxkZXIge1xuICAgICNnYW1lYm9hcmREYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhID0gbmV3IEdhbWVib2FyZERhdGEoKTtcbiAgICB9XG5cbiAgICBzZXRCb2FyZERhdGEoZ2FtZWJvYXJkKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEuc2V0Qm9hcmREYXRhKGdhbWVib2FyZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEucGxheWVyVXNlck5hbWUgPSBwbGF5ZXJVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QWxsU2hpcHNTdW5rKGFsbFNoaXBzU3Vuaykge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLmFsbFNoaXBzU3VuayA9IGFsbFNoaXBzU3VuaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgI3Jlc2V0KCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhID0gbmV3IEdhbWVib2FyZERhdGEoKTtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YSA9IHRoaXMuI2dhbWVib2FyZERhdGE7XG4gICAgICAgIHRoaXMuI3Jlc2V0KCk7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmREYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkRGF0YUJ1aWxkZXI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLXVpLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG5cbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnYnV0dG9uJ1xuICAgICdib2FyZCc7XG59XG5cbi5jb250cm9scy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBnYXA6IDJlbVxufVxuXG4uYm9hcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtO1xufVxuXG4uYm9hcmQge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gIGdyaWQtYXJlYTogYm9hcmQ7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uYm9hcmQtYWN0aXZlLWJ1aWxkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcbn1cblxuLmJvYXJkLWFjdGl2ZS1hdHRhY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5ib2FyZC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib2FyZC1jZWxsOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcbn1cblxuLmJ1dHRvbiB7XG4gIGdyaWQtYXJlYTogYnV0dG9uO1xuXG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbi1hY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7O0VBRVI7O1dBRVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCOztFQUV2QixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLXVpLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdidXR0b24nXFxuICAgICdib2FyZCc7XFxufVxcblxcbi5jb250cm9scy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMmVtXFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gIGdyaWQtYXJlYTogYm9hcmQ7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLWFjdGl2ZS1idWlsZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYm9hcmQtYWN0aXZlLWF0dGFjayB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQtY2VsbDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcblxcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b24tYWN0aXZlIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyJztcbmltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbImhpdFN0YXR1cyIsIl9CT0FSRF9XSURUSCIsIldlYWtNYXAiLCJfQk9BUkRfSEVJR0hUIiwiX0NFTExfQ09VTlQiLCJfYm9hcmRQbGF5ZXJPbmUiLCJfYm9hcmRQbGF5ZXJUd28iLCJfc3RhcnRHYW1lQnV0dG9uIiwiX3N3aXRjaEF4aXNCdXR0b24iLCJfcmVzdGFydEdhbWVCdXR0b24iLCJfY29tcHV0ZXJFbmFibGVkQnV0dG9uIiwiX2JvYXJkSW5pdCIsIl9pc0hvcml6b250YWwiLCJfaXNDb21wdXRlckVuYWJsZWQiLCJfdXBkYXRlQm9hcmQiLCJXZWFrU2V0IiwiX3VwZGF0ZUJvYXJkRm9jdXMiLCJfbWFwSGFuZGxlcnMiLCJfaW5pdEJvYXJkIiwiX3VwZGF0ZUNlbGxNZXRhRGF0YSIsIl91cGRhdGVDZWxsU3RhdHVzIiwiX2NyZWF0ZUNlbGwiLCJfaGlnaGxpZ2hCdWlsZFBhdHRlcm4iLCJfaGlnaGxpZ2h0Q2VsbHMiLCJfZ2V0U2hpcFNpemVQYXR0ZXJuIiwiX3RvZ2dsZUhvcml6b250YWwiLCJfdG9nZ2xlQ29tcHV0ZXIiLCJET01Db250cm9sbGVyIiwiY29udHJvbGxlckFQSSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX2luaXRCb2FyZDIiLCJjYWxsIiwiYm9hcmRBY3Rpb25IYW5kbGVyIiwidXBkYXRlQm9hcmRIaW50c0hhbmRsZXIiLCJfbWFwSGFuZGxlcnMyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidXBkYXRlVUkiLCJnYW1lU3RhdGVEYXRhIiwiY3VycmVudENlbGxDb29yZCIsIl91cGRhdGVCb2FyZDIiLCJfdXBkYXRlQm9hcmRGb2N1czIiLCJpc0dhbWVSdW5uaW5nIiwiX2hpZ2hsaWdoQnVpbGRQYXR0ZXJuMiIsImN1cnJlbnRQbGF5ZXJGbGVldFNpemUiLCJjdXJyZW50VXNlck5hbWUiLCJnZXRJc0hvcml6b250YWwiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJnZXQiLCJnYW1lYm9hcmRPbmVEYXRhIiwicGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdhbWVib2FyZFR3b0RhdGEiLCJwbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwiaSIsIm5vZGVCb2FyZE9uZSIsImNoaWxkTm9kZXMiLCJkYXRhQm9hcmRPbmUiLCJib2FyZERhdGEiLCJub2RlQm9hcmRUd28iLCJkYXRhQm9hcmRUd28iLCJpc1BsYXllck9uZVR1cm4iLCJpc1JvdW5kUnVubmluZyIsIl91cGRhdGVDZWxsU3RhdHVzMiIsIl91cGRhdGVDZWxsTWV0YURhdGEyIiwicGxheWVyVXNlck5hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lSGFuZGxlciIsIl90b2dnbGVIb3Jpem9udGFsMiIsImJpbmQiLCJyZXN0YXJ0Um91bmRIYW5kbGVyIiwiX3RvZ2dsZUNvbXB1dGVyMiIsImVuYWJsZUNvbXB1dGVySGFuZGxlciIsIm5ld0JvYXJkQ2VsbE9uZSIsIl9jcmVhdGVDZWxsMiIsIm5ld0JvYXJkQ2VsbFR3byIsImFwcGVuZENoaWxkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiY2VsbE5vZGUiLCJjZWxsRGF0YSIsInBsYXllck5hbWUiLCJjb29yZCIsImdldENvb3JkIiwic2V0QXR0cmlidXRlIiwiY29vcmRYIiwiY29vcmRZIiwibm9kZSIsImRhdGEiLCJzdGF0dXMiLCJnZXRIaXRTdGF0dXMiLCJOT1RfSElUIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJISVRfU0hJUCIsIkhJVF9DRUxMIiwiaXNPY2N1cGllZCIsIm5ld0NlbGwiLCJjcmVhdGVFbGVtZW50IiwiY3VycmVudFBsYXllck5hbWUiLCJzaGlwU2l6ZVBhdHRlcm4iLCJfZ2V0U2hpcFNpemVQYXR0ZXJuMiIsIl9oaWdobGlnaHRDZWxsczIiLCJpc0hvcml6b250YWwiLCJjdXJyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJ0b2dnbGUiLCJjb25zb2xlIiwibG9nIiwiUGxheWVyIiwiU2hpcCIsIkdhbWVib2FyZCIsIkNvb3JkaW5hdGUiLCJHYW1lU3RhdGVEYXRhQnVpbGRlciIsIl9jdXJyZW50UGxheWVyIiwiX2lzR2FtZVJ1bm5pbmciLCJfaXNSb3VuZFJ1bm5pbmciLCJfaXNQbGF5ZXJPbmVUdXJuIiwiX3BsYXllck9uZSIsIl9wbGF5ZXJUd28iLCJfcGxheWVyT25lR2FtZWJvYXJkIiwiX3BsYXllclR3b0dhbWVib2FyZCIsIl9ET01Db250cm9sbGVyIiwiX2xhc3RDb21wdXRlckhpdENvb3JkIiwiX2JvYXJkQWN0aW9uSGFuZGxlciIsIl9lbmFibGVDb21wdXRlckhhbmRsZXIiLCJfY29tcHV0ZXJBY3Rpb25IYW5kbGVyIiwiX2NvbXB1dGVyQXR0YWNrIiwiX2NvbXB1dGVyQnVpbGRGbGVldCIsIl9nZXRSYW5kb21Db29yZCIsIl9pc1JlcGVhdGVkQ2VsbCIsIl9zdGFydEdhbWVIYW5kbGVyIiwiX3Jlc3RhcnRSb3VuZEhhbmRsZXIiLCJfdXBkYXRlR2FtZVVJIiwiX3VwZGF0ZUJvYXJkSGludHNIYW5kbGVyIiwiX2dldEdhbWVTdGF0ZURhdGEiLCJfc3RhcnRSb3VuZCIsIl9lbmRHYW1lIiwiX3N3aXRjaEN1cnJlbnRQbGF5ZXIiLCJfZ2V0V2lubmVyIiwiX2F0dGFja0hhbmRsZXIiLCJfYXR0YWNrQ2VsbCIsIl9wbGFjZVNoaXBIYW5kbGVyIiwiX3BsYWNlU2hpcCIsIl9nZXRBUElDb250YWluZXIiLCJHYW1lQ29udHJvbGxlciIsIl9nZXRBUElDb250YWluZXIyIiwiX3VwZGF0ZUdhbWVVSTIiLCJfYm9hcmRBY3Rpb25IYW5kbGVyMiIsImV2ZW50IiwidGFyZ2V0IiwiaXNDZWxsT3duZXIiLCJkYXRhc2V0IiwicGxheWVybmFtZSIsImdldFBsYXllck5hbWUiLCJjb29yZHgiLCJjb29yZHkiLCJjZWxsQ29vcmQiLCJfcGxhY2VTaGlwSGFuZGxlcjIiLCJfYXR0YWNrSGFuZGxlcjIiLCJpc0NvbXB1dGVyRW5hYmxlZCIsIl9jb21wdXRlckFjdGlvbkhhbmRsZXIyIiwiX2VuYWJsZUNvbXB1dGVySGFuZGxlcjIiLCJfcmVzdGFydFJvdW5kSGFuZGxlcjIiLCJfY29tcHV0ZXJBdHRhY2syIiwiX2NvbXB1dGVyQnVpbGRGbGVldDIiLCJybmRDb29yZCIsIl9nZXRSYW5kb21Db29yZDIiLCJyZXN1bHQiLCJpc1JlcGVhdGVkQ2VsbCIsIl9pc1JlcGVhdGVkQ2VsbDIiLCJybmRJc0hvcml6b250YWwiLCJmbGVldFNpemUiLCJCb29sZWFuIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwicm5kWCIsImZsb29yIiwid2lkdGgiLCJybmRZIiwiaGVpZ2h0IiwiZ2V0SGl0TG9nIiwic29tZSIsImN1cnJlbnRDb29yZCIsIl9zdGFydEdhbWVIYW5kbGVyMiIsIl9nZXRHYW1lU3RhdGVEYXRhMiIsIl91cGRhdGVCb2FyZEhpbnRzSGFuZGxlcjIiLCJnYW1lU3RhdGVEYXRhQnVpbGRlciIsInNldEN1cnJlbnRVc2VyTmFtZSIsInNldElzR2FtZVJ1bm5pbmciLCJzZXRJc1JvdW5kUnVubmluZyIsInNldElzUGxheWVyT25lVHVybiIsInNldFBsYXllck9uZVVzZXJOYW1lIiwic2V0UGxheWVyVHdvVXNlck5hbWUiLCJzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiZ2V0R2FtZWJvYXJkRGF0YSIsInNldFBsYXllclR3b0dhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJPbmVGbGVldFNpemUiLCJzZXRQbGF5ZXJUd29GbGVldFNpemUiLCJzZXRDdXJyZW50UGxheWVyRmxlZXRTaXplIiwiYnVpbGQiLCJfc3RhcnRSb3VuZDIiLCJnZXRTaGlwcyIsImxlbmd0aCIsIl9lbmRHYW1lMiIsInBsYXllcldpbm5lciIsIl9zd2l0Y2hDdXJyZW50UGxheWVyMiIsIl9nZXRXaW5uZXIyIiwiYWxsU2hpcHNTdW5rIiwiYXR0YWNrUmVzdWx0IiwiX2F0dGFja0NlbGwyIiwid2lubmVyIiwiY3VycmVudEJvYXJkIiwibG9nSGl0IiwicmVjZWl2ZUF0dGFjayIsIl9wbGFjZVNoaXAyIiwibmV3U2hpcCIsImlzUGxhY2VkIiwicGxhY2VTaGlwIiwiYWRkU2hpcCIsIl9jb29yZCIsIl9zaGlwIiwiX2lzT2NjdXBpZWQiLCJfaGFzQmVlbkhpdCIsIkJvYXJkQ2VsbCIsIm9jY3VweSIsInNoaXAiLCJoaXQiLCJ0cnlIaXQiLCJnZXRDb29yZFN0cmluZyIsIl9jb29yZFgiLCJfY29vcmRZIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJHYW1lYm9hcmREYXRhQnVpbGRlciIsIl93aWR0aCIsIl9oZWlnaHQiLCJfYm9hcmQiLCJfc2hpcExpc3QiLCJfY2FuUGxhY2UiLCJfY2FuUGxhY2UyIiwiZ2V0Q29vcmRTdGFydCIsInB1c2giLCJib2FyZENlbGwiLCJnYW1lYm9hcmREYXRhQnVpbGRlciIsImdhbWVib2FyZERhdGEiLCJzZXRCb2FyZERhdGEiLCJzZXRQbGF5ZXJVc2VyTmFtZSIsInNldEFsbFNoaXBzU3VuayIsImV2ZXJ5IiwiaXNTdW5rIiwiY29vcmRTdGFydCIsIngiLCJ5IiwiZW1wdHlDZWxsIiwiQlVJTERJTkdfU0hJUCIsInVzZXJOYW1lIiwiX3BsYXllck5hbWUiLCJfaGl0TG9nIiwiX3BsYXllclNoaXBzIiwic2xpY2UiLCJyZXNldFVzZXIiLCJTaGlwUGllY2UiLCJfdGltZXNIaXQiLCJfc2hpcFBpZWNlcyIsIl9jb29yZFN0YXJ0IiwiX2J1aWxkU2hpcCIsImhvcml6b250YWwiLCJfYnVpbGRTaGlwMiIsImhpdENvb3JkIiwic2hpcFBpZWNlIiwiZmluZCIsInBpZWNlQ29vcmQiLCJ1bmRlZmluZWQiLCJzaGlwUGllY2VDb29yZCIsIl9oaXRTdGF0dXMiLCJHYW1lU3RhdGVEYXRhIiwiX2N1cnJlbnRQbGF5ZXJVc2VyTmFtZSIsIl9wbGF5ZXJPbmVVc2VyTmFtZSIsIl9wbGF5ZXJUd29Vc2VyTmFtZSIsIl9wbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiX3BsYXllclR3b0dhbWVib2FyZERhdGEiLCJfcGxheWVyT25lRmxlZXRTaXplIiwiX3BsYXllclR3b0ZsZWV0U2l6ZSIsIl9jdXJyZW50UGxheWVyRmxlZXRTaXplIiwic2V0IiwicGxheWVyT25lVXNlck5hbWUiLCJwbGF5ZXJUd29Vc2VyTmFtZSIsInBsYXllck9uZUZsZWV0U2l6ZSIsInBsYXllclR3b0ZsZWV0U2l6ZSIsIl9nYW1lU3RhdGVEYXRhIiwicmVzZXQiLCJHYW1lYm9hcmREYXRhIiwiX2JvYXJkRGF0YSIsIl9wbGF5ZXJVc2VyTmFtZSIsIl9hbGxTaGlwc1N1bmsiLCJib2FyZCIsImJvYXJkQ29weSIsImZvckVhY2giLCJyb3ciLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9nYW1lYm9hcmREYXRhIiwiX3Jlc2V0IiwiR2FtZUJvYXJkRGF0YUJ1aWxkZXIiLCJnYW1lYm9hcmQiLCJfcmVzZXQyIiwiY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=