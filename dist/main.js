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
      if (currentCellCoord) {
        _classPrivateMethodGet(this, _highlighBuildPattern, _highlighBuildPattern2).call(this, currentCellCoord, gameStateData.currentPlayerFleetSize, gameStateData.isRoundRunning, gameStateData.currentUserName);
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
function _highlighBuildPattern2(coord, currentPlayerFleetSize, isRoundRunning, currentPlayerName) {
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
  if (_classPrivateFieldGet(this, _isGameRunning) === true) return false;
  _classPrivateFieldSet(this, _isGameRunning, true);
  return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F5RDtBQUM5QjtBQUUzQixJQUFNYyxVQUFVLEdBQUcsSUFBSWhKLGtFQUFjLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvQm9hcmRDZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvQ29vcmRpbmF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9EYXRhUG9pbnRDb250YWluZXJzL0dhbWVib2FyZERhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9EYXRhUG9pbnRDb250YWluZXJzL0dhbWVib2FyZERhdGFCdWlsZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvSGl0U3RhdHVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1NoaXBQaWVjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgaGl0U3RhdHVzIGZyb20gXCIuLi9lbnRpdGllcy9IaXRTdGF0dXNcIjtcblxuY2xhc3MgRE9NQ29udHJvbGxlciB7XG4gICNCT0FSRF9XSURUSCA9IDEwO1xuXG4gICNCT0FSRF9IRUlHSFQgPSAxMDtcblxuICAjQ0VMTF9DT1VOVCA9IDEwMDtcblxuICAjYm9hcmRQbGF5ZXJPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtb25lJyk7XG5cbiAgI2JvYXJkUGxheWVyVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLXR3bycpO1xuXG4gICNzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZScpO1xuXG4gICNzd2l0Y2hBeGlzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvcml6b250YWwtc3RhdHVzJyk7XG5cbiAgI3Jlc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQtZ2FtZScpO1xuXG4gICNib2FyZEluaXQgPSBmYWxzZTtcblxuICAjaXNIb3Jpem9udGFsID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyQVBJKSB7XG4gICAgdGhpcy4jaW5pdEJvYXJkKGNvbnRyb2xsZXJBUEkuYm9hcmRBY3Rpb25IYW5kbGVyLCBjb250cm9sbGVyQVBJLnVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcbiAgICB0aGlzLiNtYXBIYW5kbGVycyhjb250cm9sbGVyQVBJKTtcbiAgfVxuXG4gIHVwZGF0ZVVJKGdhbWVTdGF0ZURhdGEsIGN1cnJlbnRDZWxsQ29vcmQpIHtcbiAgICB0aGlzLiN1cGRhdGVCb2FyZChnYW1lU3RhdGVEYXRhKTtcbiAgICB0aGlzLiN1cGRhdGVCb2FyZEZvY3VzKGdhbWVTdGF0ZURhdGEpO1xuXG4gICAgaWYgKGN1cnJlbnRDZWxsQ29vcmQpIHtcbiAgICAgIHRoaXMuI2hpZ2hsaWdoQnVpbGRQYXR0ZXJuKGN1cnJlbnRDZWxsQ29vcmQsIGdhbWVTdGF0ZURhdGEuY3VycmVudFBsYXllckZsZWV0U2l6ZSwgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZywgZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVCb2FyZChnYW1lU3RhdGVEYXRhKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkT25lRGF0YSA9IGdhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICBjb25zdCBnYW1lYm9hcmRUd29EYXRhID0gZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNDRUxMX0NPVU5UOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5vZGVCb2FyZE9uZSA9IHRoaXMuI2JvYXJkUGxheWVyT25lLmNoaWxkTm9kZXNbaV07XG4gICAgICBjb25zdCBkYXRhQm9hcmRPbmUgPSBnYW1lYm9hcmRPbmVEYXRhLmJvYXJkRGF0YVtpXTtcblxuICAgICAgY29uc3Qgbm9kZUJvYXJkVHdvID0gdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZFR3byA9IGdhbWVib2FyZFR3b0RhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lLCBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsIGdhbWVib2FyZE9uZURhdGEucGxheWVyVXNlck5hbWUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvLCBnYW1lYm9hcmRUd29EYXRhLnBsYXllclVzZXJOYW1lKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlQm9hcmRGb2N1cyhnYW1lU3RhdGVEYXRhKSB7XG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgc3dpdGNoIChnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICBjYXNlICdQbGF5ZXIgT25lJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHN3aXRjaCAoZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGxheWVyIE9uZSc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIEJvYXJkIEluaXRpYWxpemF0aW9uXG5cbiAgI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnN0YXJ0R2FtZUhhbmRsZXIpO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmRIYW5kbGVyKTtcbiAgfVxuXG4gICNpbml0Qm9hcmQoYm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jQ0VMTF9DT1VOVDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxPbmUgPSB0aGlzLiNjcmVhdGVDZWxsKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsVHdvID0gdGhpcy4jY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcblxuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsT25lKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbFR3byk7XG4gICAgfVxuXG4gICAgdGhpcy4jYm9hcmRJbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIENlbGwgQ3JlYXRpb24vU3RhdHVzTXV0YXRpb25cblxuICAjY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvYXJkQWN0aW9uSGFuZGxlcik7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcik7XG5cbiAgICByZXR1cm4gbmV3Q2VsbDtcbiAgfVxuXG4gICN1cGRhdGVDZWxsTWV0YURhdGEoY2VsbE5vZGUsIGNlbGxEYXRhLCBwbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgY29vcmQgPSBjZWxsRGF0YS5nZXRDb29yZCgpO1xuXG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeCcsIGNvb3JkLmNvb3JkWCk7XG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkeScsIGNvb3JkLmNvb3JkWSk7XG4gICAgY2VsbE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXBsYXllcm5hbWUnLCBwbGF5ZXJOYW1lKTtcbiAgfVxuXG4gICN1cGRhdGVDZWxsU3RhdHVzKGNlbGxOb2RlLCBjZWxsRGF0YSwgaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICBpZiAoIWNlbGxOb2RlIHx8ICFjZWxsRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm9kZSA9IGNlbGxOb2RlO1xuICAgIGNvbnN0IGRhdGEgPSBjZWxsRGF0YTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2V0SGl0U3RhdHVzKCk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5OT1RfSElUOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRkZGRkYnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX1NISVA6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGMDAwMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfQ0VMTDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2VsbERhdGEuaXNPY2N1cGllZCAmJiBpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gQ2VsbCBCdWlsZGluZyBQYXRoIEhpbnRpbmdcblxuICAjaGlnaGxpZ2hCdWlsZFBhdHRlcm4oY29vcmQsIGN1cnJlbnRQbGF5ZXJGbGVldFNpemUsIGlzUm91bmRSdW5uaW5nLCBjdXJyZW50UGxheWVyTmFtZSkge1xuICAgIGNvbnN0IHNoaXBTaXplUGF0dGVybiA9IHRoaXMuI2dldFNoaXBTaXplUGF0dGVybihjdXJyZW50UGxheWVyRmxlZXRTaXplKTtcblxuICAgIHRoaXMuI2hpZ2hsaWdodENlbGxzKGNvb3JkLCBzaGlwU2l6ZVBhdHRlcm4sIGN1cnJlbnRQbGF5ZXJOYW1lKTtcbiAgfVxuXG4gICNoaWdobGlnaHRDZWxscyhjb29yZCwgc2hpcFNpemVQYXR0ZXJuLCBjdXJyZW50UGxheWVyTmFtZSkge1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuI2lzSG9yaXpvbnRhbDtcblxuICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVQYXR0ZXJuOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoKGNvb3JkLmNvb3JkWCArIHNoaXBTaXplUGF0dGVybikgLSAxID4gdGhpcy4jQk9BUkRfV0lEVEgpIGJyZWFrO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtY29vcmR4PVwiJHtjb29yZC5jb29yZFggKyBpfVwiXVtkYXRhLWNvb3JkeT1cIiR7Y29vcmQuY29vcmRZfVwiXVtkYXRhLXBsYXllcm5hbWU9XCIke2N1cnJlbnRQbGF5ZXJOYW1lfVwiXWApO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVQYXR0ZXJuOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoKGNvb3JkLmNvb3JkWSArIHNoaXBTaXplUGF0dGVybikgLSAxID4gdGhpcy4jQk9BUkRfSEVJR0hUKSBicmVhaztcbiAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWNvb3JkeD1cIiR7Y29vcmQuY29vcmRYfVwiXVtkYXRhLWNvb3JkeT1cIiR7Y29vcmQuY29vcmRZICsgaX1cIl1bZGF0YS1wbGF5ZXJuYW1lPVwiJHtjdXJyZW50UGxheWVyTmFtZX1cIl1gKTtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAjZ2V0U2hpcFNpemVQYXR0ZXJuKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICBzd2l0Y2ggKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIDU7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiA0O1xuICAgICAgY2FzZSAyOlxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgI3RvZ2dsZUhvcml6b250YWwoKSB7XG4gICAgdGhpcy4jaXNIb3Jpem9udGFsID0gIXRoaXMuI2lzSG9yaXpvbnRhbDtcbiAgICB0aGlzLiNzd2l0Y2hBeGlzQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2J1dHRvbi1hY3RpdmUnKTtcbiAgfVxuXG4gIGdldElzSG9yaXpvbnRhbCgpIHsgcmV0dXJuIHRoaXMuI2lzSG9yaXpvbnRhbCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBET01Db250cm9sbGVyO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vZW50aXRpZXMvUGxheWVyXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZW50aXRpZXMvU2hpcFwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi4vZW50aXRpZXMvR2FtZWJvYXJkXCI7XG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tIFwiLi9ET01Db250cm9sbGVyXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi4vZW50aXRpZXMvQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IEdhbWVTdGF0ZURhdGFCdWlsZGVyIGZyb20gXCIuLi9lbnRpdGllcy9EYXRhUG9pbnRDb250YWluZXJzL0dhbWVTdGF0ZURhdGFCdWlsZGVyXCI7XG5cbmNsYXNzIEdhbWVDb250cm9sbGVyIHtcbiAgI2N1cnJlbnRQbGF5ZXIgPSBudWxsO1xuXG4gICNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG5cbiAgI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG5cbiAgI2lzUGxheWVyT25lVHVybiA9IHRydWU7XG5cbiAgI3BsYXllck9uZSA9IG51bGw7XG5cbiAgI3BsYXllclR3byA9IG51bGw7XG5cbiAgI3BsYXllck9uZUdhbWVib2FyZCA9IG51bGw7XG5cbiAgI3BsYXllclR3b0dhbWVib2FyZCA9IG51bGw7XG5cbiAgI0RPTUNvbnRyb2xsZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI0RPTUNvbnRyb2xsZXIgPSBuZXcgRE9NQ29udHJvbGxlcih0aGlzLiNnZXRBUElDb250YWluZXIoKSk7XG4gICAgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdQbGF5ZXIgT25lJyk7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoKTtcbiAgfVxuXG4gIC8vIENhbGxiYWNrIHRvIGxldCBvdGhlciBsYXllcnMgb2YgcHJvZ3JhbSBpbnRlcmFjdCB3aXRoIG91ciBnYW1lIGNvbnRyb2xsZXJcbiAgI2JvYXJkQWN0aW9uSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2VsbE5vZGUgPSBldmVudC50YXJnZXQ7XG5cbiAgICBjb25zdCBpc0NlbGxPd25lciA9IGNlbGxOb2RlLmRhdGFzZXQucGxheWVybmFtZSA9PT0gdGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCk7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jRE9NQ29udHJvbGxlci5nZXRJc0hvcml6b250YWwoKTtcblxuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuICAgIGNvbnN0IGNlbGxDb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcblxuICAgIHN3aXRjaCAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgLy8gdG8gbGV0IHBsYXllciBwbGFjZSBzaGlwcyBvbiBISVMgT1dOIGJvYXJkIG9ubHlcbiAgICAgICAgaWYgKGlzQ2VsbE93bmVyID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLiNwbGF5ZXJQbGFjZVNoaXAoY2VsbENvb3JkLCBpc0hvcml6b250YWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIGF0dGFjayBzaGlwcyBvbiBISVMgT1BQT05FTlQnUyBib2FyZCBvbmx5XG4gICAgICAgIGlmIChpc0NlbGxPd25lciA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLiNwbGF5ZXJBdHRhY2soY2VsbENvb3JkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoY2VsbENvb3JkKTtcbiAgfVxuXG4gICNzdGFydEdhbWVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgI3Jlc3RhcnRSb3VuZEhhbmRsZXIoKSB7XG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdQbGF5ZXIgT25lJyk7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKSB7XG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dldEdhbWVTdGF0ZURhdGEoKTtcblxuICAgIHRoaXMuI0RPTUNvbnRyb2xsZXIudXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCk7XG4gIH1cblxuICAjdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmIChjZWxsTm9kZS5kYXRhc2V0LnBsYXllcm5hbWUgIT09IHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb29yZFggPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeDtcbiAgICBjb25zdCBjb29yZFkgPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeTtcblxuICAgIGNvbnN0IGN1cnJlbnRDZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoY3VycmVudENlbGxDb29yZCk7XG4gIH1cblxuICAjZ2V0R2FtZVN0YXRlRGF0YSgpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhQnVpbGRlciA9IG5ldyBHYW1lU3RhdGVEYXRhQnVpbGRlcigpO1xuXG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IGdhbWVTdGF0ZURhdGFCdWlsZGVyXG4gICAgICAuc2V0Q3VycmVudFVzZXJOYW1lKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldElzR2FtZVJ1bm5pbmcodGhpcy4jaXNHYW1lUnVubmluZylcbiAgICAgIC5zZXRJc1JvdW5kUnVubmluZyh0aGlzLiNpc1JvdW5kUnVubmluZylcbiAgICAgIC5zZXRJc1BsYXllck9uZVR1cm4odGhpcy4jaXNQbGF5ZXJPbmVUdXJuKVxuICAgICAgLnNldFBsYXllck9uZVVzZXJOYW1lKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0UGxheWVyVHdvVXNlck5hbWUodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5nZXRHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpKVxuICAgICAgLnNldFBsYXllclR3b0dhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuc2V0UGxheWVyT25lRmxlZXRTaXplKHRoaXMuI3BsYXllck9uZS5mbGVldFNpemUpXG4gICAgICAuc2V0UGxheWVyVHdvRmxlZXRTaXplKHRoaXMuI3BsYXllclR3by5mbGVldFNpemUpXG4gICAgICAuc2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSh0aGlzLiNjdXJyZW50UGxheWVyLmZsZWV0U2l6ZSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgcmV0dXJuIGdhbWVTdGF0ZURhdGE7XG4gIH1cblxuICAvLyBUbyBjaGVjayBpZiByb3VuZCBzaG91bGQgc3RhcnQgb25jZSBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAjc3RhcnRSb3VuZCgpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lLmdldFNoaXBzKCkubGVuZ3RoID09PSA1ICYmIHRoaXMuI3BsYXllclR3by5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAjZW5kR2FtZShwbGF5ZXJXaW5uZXIpIHtcbiAgICBpZiAocGxheWVyV2lubmVyID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gICNzd2l0Y2hDdXJyZW50UGxheWVyKCkge1xuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUd287XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gIXRoaXMuI2lzUGxheWVyT25lVHVybjtcbiAgfVxuXG4gICNnZXRXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3bztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgI3BsYXllckF0dGFjayhjb29yZCkge1xuICAgIHRoaXMuI2F0dGFja0NlbGwoY29vcmQpO1xuICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcblxuICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuI2dldFdpbm5lcigpO1xuXG4gICAgaWYgKHdpbm5lciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jZW5kR2FtZSh3aW5uZXIpO1xuICAgICAgY29uc29sZS5sb2coYHBsYXllciAke3dpbm5lcn0gd29uYCk7XG4gICAgfVxuICB9XG5cbiAgI2F0dGFja0NlbGwoY29vcmQpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIGN1cnJlbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgI3BsYXllclBsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKSB7XG4gICAgdGhpcy4jcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpO1xuXG4gICAgdGhpcy4jc3RhcnRSb3VuZCgpO1xuICB9XG5cbiAgI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKSB7XG4gICAgaWYgKHRoaXMuI2lzUm91bmRSdW5uaW5nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcbiAgICBsZXQgbmV3U2hpcCA9IG51bGw7XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9XG5cbiAgICAvLyBUbyBidWlsZCBzaGlwcyBpbiBwcmUtZGV0ZXJtaW5lZCBwYXR0ZXJuICg1LDQsMywzLDIpXG4gICAgc3dpdGNoICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDQ6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUGxheWVycyBzaG91bGQgdGFrZSB0dXJucyBhZnRlciBidWlsZGluZyB0aGVpciBlbnRpcmUgZmxlZXRcbiAgICBpZiAoaXNQbGFjZWQpIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIuYWRkU2hpcChuZXdTaGlwKTtcblxuICAgICAgaWYgKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAjZ2V0QVBJQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydEdhbWVIYW5kbGVyOiB0aGlzLiNzdGFydEdhbWVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBib2FyZEFjdGlvbkhhbmRsZXI6IHRoaXMuI2JvYXJkQWN0aW9uSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgcmVzdGFydFJvdW5kSGFuZGxlcjogdGhpcy4jcmVzdGFydFJvdW5kSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXI6IHRoaXMuI3VwZGF0ZUJvYXJkSGludHNIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcbiIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4vSGl0U3RhdHVzXCI7XG5cbmNsYXNzIEJvYXJkQ2VsbCB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNzaGlwID0gbnVsbDtcblxuICAgICNpc09jY3VwaWVkID0gZmFsc2U7XG5cbiAgICAjaGFzQmVlbkhpdCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgb2NjdXB5KHNoaXApIHtcbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNpc09jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4jc2hpcCA9IHNoaXA7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICBpZiAodGhpcy4jaGFzQmVlbkhpdCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2hhc0JlZW5IaXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLiNzaGlwKSB7XG4gICAgICAgICAgICB0aGlzLiNzaGlwLnRyeUhpdCh0aGlzLiNjb29yZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRDb29yZCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkOyB9XG5cbiAgICBnZXRDb29yZFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBYOiAke3RoaXMuI2Nvb3JkLmNvb3JkWH0gWTogJHt0aGlzLiNjb29yZC5jb29yZFl9YDtcbiAgICB9XG5cbiAgICBnZXRIaXRTdGF0dXMoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy4jaGFzQmVlbkhpdCkge1xuICAgICAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5OT1RfSElUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9TSElQO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5ISVRfQ0VMTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaXNPY2N1cGllZCgpIHsgcmV0dXJuIHRoaXMuI2lzT2NjdXBpZWQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRDZWxsOyIsImNsYXNzIENvb3JkaW5hdGUge1xuICAgICNjb29yZFggPSAwO1xuXG4gICAgI2Nvb3JkWSA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZFggPSBjb29yZFg7XG4gICAgICAgIHRoaXMuI2Nvb3JkWSA9IGNvb3JkWTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHRoaXMuI2Nvb3JkWCwgMTApOyB9XG5cbiAgICBnZXQgY29vcmRZKCkgeyByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHRoaXMuI2Nvb3JkWSwgMTApOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3JkaW5hdGU7IiwiY2xhc3MgR2FtZVN0YXRlRGF0YSB7XG4gICAgI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTtcblxuICAgICNpc0dhbWVSdW5uaW5nO1xuXG4gICAgI2lzUm91bmRSdW5uaW5nO1xuXG4gICAgI2lzUGxheWVyT25lVHVybjtcblxuICAgICNwbGF5ZXJPbmVVc2VyTmFtZTtcblxuICAgICNwbGF5ZXJUd29Vc2VyTmFtZTtcblxuICAgICNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuXG4gICAgI3BsYXllclR3b0dhbWVib2FyZERhdGE7XG5cbiAgICAjcGxheWVyT25lRmxlZXRTaXplO1xuXG4gICAgI3BsYXllclR3b0ZsZWV0U2l6ZTtcblxuICAgICNjdXJyZW50UGxheWVyRmxlZXRTaXplO1xuXG4gICAgZ2V0IGN1cnJlbnRVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgc2V0IGN1cnJlbnRVc2VyTmFtZShjdXJyZW50VXNlck5hbWUpIHsgdGhpcy4jY3VycmVudFBsYXllclVzZXJOYW1lID0gY3VycmVudFVzZXJOYW1lOyB9XG5cbiAgICBnZXQgaXNHYW1lUnVubmluZygpIHsgcmV0dXJuIHRoaXMuI2lzR2FtZVJ1bm5pbmc7IH1cblxuICAgIHNldCBpc0dhbWVSdW5uaW5nKGlzR2FtZVJ1bm5pbmcpIHsgdGhpcy4jaXNHYW1lUnVubmluZyA9IGlzR2FtZVJ1bm5pbmc7IH1cblxuICAgIGdldCBpc1JvdW5kUnVubmluZygpIHsgcmV0dXJuIHRoaXMuI2lzUm91bmRSdW5uaW5nOyB9XG5cbiAgICBzZXQgaXNSb3VuZFJ1bm5pbmcoaXNSb3VuZFJ1bm5pbmcpIHsgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBpc1JvdW5kUnVubmluZzsgfVxuXG4gICAgZ2V0IGlzUGxheWVyT25lVHVybigpIHsgcmV0dXJuIHRoaXMuI2lzUGxheWVyT25lVHVybjsgfVxuXG4gICAgc2V0IGlzUGxheWVyT25lVHVybihpc1BsYXllck9uZVR1cm4pIHsgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gaXNQbGF5ZXJPbmVUdXJuOyB9XG5cbiAgICBnZXQgcGxheWVyT25lVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVVc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllck9uZVVzZXJOYW1lKHBsYXllck9uZVVzZXJOYW1lKSB7IHRoaXMuI3BsYXllck9uZVVzZXJOYW1lID0gcGxheWVyT25lVXNlck5hbWU7IH1cblxuICAgIGdldCBwbGF5ZXJUd29Vc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b1VzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvVXNlck5hbWUocGxheWVyVHdvVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyVHdvVXNlck5hbWUgPSBwbGF5ZXJUd29Vc2VyTmFtZTsgfVxuXG4gICAgZ2V0IHBsYXllck9uZUdhbWVib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhOyB9XG5cbiAgICBzZXQgcGxheWVyT25lR2FtZWJvYXJkRGF0YShwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKSB7IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZERhdGEgPSBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyVHdvR2FtZWJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZERhdGE7IH1cblxuICAgIHNldCBwbGF5ZXJUd29HYW1lYm9hcmREYXRhKHBsYXllclR3b0dhbWVib2FyZERhdGEpIHsgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkRGF0YSA9IHBsYXllclR3b0dhbWVib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJPbmVGbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVGbGVldFNpemU7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVGbGVldFNpemUocGxheWVyT25lRmxlZXRTaXplKSB7IHRoaXMuI3BsYXllck9uZUZsZWV0U2l6ZSA9IHBsYXllck9uZUZsZWV0U2l6ZTsgfVxuICAgIFxuICAgIGdldCBwbGF5ZXJUd29GbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29GbGVldFNpemU7IH1cblxuICAgIHNldCBwbGF5ZXJUd29GbGVldFNpemUocGxheWVyVHdvRmxlZXRTaXplKSB7IHRoaXMuI3BsYXllclR3b0ZsZWV0U2l6ZSA9IHBsYXllclR3b0ZsZWV0U2l6ZTsgfVxuXG4gICAgZ2V0IGN1cnJlbnRQbGF5ZXJGbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNjdXJyZW50UGxheWVyRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgY3VycmVudFBsYXllckZsZWV0U2l6ZShjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7IHRoaXMuI2N1cnJlbnRQbGF5ZXJGbGVldFNpemUgPSBjdXJyZW50UGxheWVyRmxlZXRTaXplOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZURhdGE7IiwiaW1wb3J0IEdhbWVTdGF0ZURhdGEgZnJvbSBcIi4vR2FtZVN0YXRlRGF0YVwiO1xuXG5jbGFzcyBHYW1lU3RhdGVEYXRhQnVpbGRlciB7XG4gICAgI2dhbWVTdGF0ZURhdGEgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEgPSBuZXcgR2FtZVN0YXRlRGF0YSgpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRVc2VyTmFtZShjdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUgPSBjdXJyZW50VXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzR2FtZVJ1bm5pbmcoaXNHYW1lUnVubmluZykge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcgPSBpc0dhbWVSdW5uaW5nO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc1JvdW5kUnVubmluZyhpc1JvdW5kUnVubmluZykge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID0gaXNSb3VuZFJ1bm5pbmc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzUGxheWVyT25lVHVybihpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc1BsYXllck9uZVR1cm4gPSBpc1BsYXllck9uZVR1cm47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZVVzZXJOYW1lKHBsYXllck9uZVVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lVXNlck5hbWUgPSBwbGF5ZXJPbmVVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvVXNlck5hbWUocGxheWVyVHdvVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29Vc2VyTmFtZSA9IHBsYXllclR3b1VzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHBsYXllck9uZUdhbWVib2FyZERhdGEpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVHYW1lYm9hcmREYXRhID0gcGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YShwbGF5ZXJUd29HYW1lYm9hcmREYXRhKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvR2FtZWJvYXJkRGF0YSA9IHBsYXllclR3b0dhbWVib2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZUZsZWV0U2l6ZShwbGF5ZXJPbmVGbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVGbGVldFNpemUgPSBwbGF5ZXJPbmVGbGVldFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b0ZsZWV0U2l6ZShwbGF5ZXJUd29GbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29GbGVldFNpemUgPSBwbGF5ZXJUd29GbGVldFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRQbGF5ZXJGbGVldFNpemUoY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmN1cnJlbnRQbGF5ZXJGbGVldFNpemUgPSBjdXJyZW50UGxheWVyRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YSA9IG5ldyBHYW1lU3RhdGVEYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVTdGF0ZURhdGEgPSB0aGlzLiNnYW1lU3RhdGVEYXRhO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBnYW1lU3RhdGVEYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlRGF0YUJ1aWxkZXI7IiwiY2xhc3MgR2FtZWJvYXJkRGF0YSB7XG4gICAgI2JvYXJkRGF0YSA9IG51bGw7XG5cbiAgICAjcGxheWVyVXNlck5hbWUgPSAnJztcblxuICAgICNhbGxTaGlwc1N1bmsgPSBudWxsO1xuXG4gICAgc2V0Qm9hcmREYXRhKGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ29weSA9IGJvYXJkLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkRGF0YSA9IFtdO1xuXG4gICAgICAgIGJvYXJkQ29weS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBib2FyZERhdGEucHVzaCguLi5yb3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNib2FyZERhdGEgPSBib2FyZERhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI2JvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllclVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJVc2VyTmFtZSA9IHBsYXllclVzZXJOYW1lOyB9XG5cbiAgICBnZXQgYWxsU2hpcHNTdW5rKCkgeyByZXR1cm4gdGhpcy4jYWxsU2hpcHNTdW5rOyB9XG5cbiAgICBzZXQgYWxsU2hpcHNTdW5rKGFsbFNoaXBzU3VuaykgeyB0aGlzLiNhbGxTaGlwc1N1bmsgPSBhbGxTaGlwc1N1bms7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkRGF0YTsiLCJpbXBvcnQgR2FtZWJvYXJkRGF0YSBmcm9tIFwiLi9HYW1lYm9hcmREYXRhXCI7XG5cbmNsYXNzIEdhbWVCb2FyZERhdGFCdWlsZGVyIHtcbiAgICAjZ2FtZWJvYXJkRGF0YSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YSA9IG5ldyBHYW1lYm9hcmREYXRhKCk7XG4gICAgfVxuXG4gICAgc2V0Qm9hcmREYXRhKGdhbWVib2FyZCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLnNldEJvYXJkRGF0YShnYW1lYm9hcmQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLnBsYXllclVzZXJOYW1lID0gcGxheWVyVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFsbFNoaXBzU3VuayhhbGxTaGlwc1N1bmspIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5hbGxTaGlwc1N1bmsgPSBhbGxTaGlwc1N1bms7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgICNyZXNldCgpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YSA9IG5ldyBHYW1lYm9hcmREYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGEgPSB0aGlzLiNnYW1lYm9hcmREYXRhO1xuICAgICAgICB0aGlzLiNyZXNldCgpO1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZERhdGFCdWlsZGVyOyIsImltcG9ydCBCb2FyZENlbGwgZnJvbSBcIi4vQm9hcmRDZWxsXCI7XG5pbXBvcnQgR2FtZWJvYXJkRGF0YUJ1aWxkZXIgZnJvbSBcIi4vRGF0YVBvaW50Q29udGFpbmVycy9HYW1lYm9hcmREYXRhQnVpbGRlclwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgICN3aWR0aCA9IDEwO1xuXG4gICAgI2hlaWdodCA9IDEwO1xuXG4gICAgI2JvYXJkID0gW107XG5cbiAgICAvLyBzd2FwcGluZyBzdXBwb3NlZGx5IFggYW5kIFkgY29vcmRpbmF0ZXMgaGVyZSBiZWNhdXNlIG9mIGZhaWxlZCBhdHRlbXB0IHRvIGltcGxlbWVudCAyRCBhcnJheXMgaW4gSmF2YVNjcmlwdC4uLlxuICAgICNzaGlwTGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2luaXRCb2FyZCgpO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuI2NhblBsYWNlKHNoaXAuZ2V0Q29vcmRTdGFydCgpLCBpc0hvcml6b250YWwsIGxlbmd0aCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNzaGlwTGlzdC5wdXNoKHNoaXApO1xuXG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxXVsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMSkgKyBpXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxKSArIGldW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDFdO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNib2FyZFtjb29yZC5jb29yZFkgLSAxXVtjb29yZC5jb29yZFggLSAxXS5oaXQoKTtcbiAgICB9XG5cbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGlwTGlzdC5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cblxuICAgIGdldEdhbWVib2FyZERhdGEocGxheWVyVXNlck5hbWUpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YUJ1aWxkZXIgPSBuZXcgR2FtZWJvYXJkRGF0YUJ1aWxkZXIoKTtcblxuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhID0gZ2FtZWJvYXJkRGF0YUJ1aWxkZXIuc2V0Qm9hcmREYXRhKHRoaXMuI2JvYXJkKVxuICAgICAgICAuc2V0UGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpXG4gICAgICAgIC5zZXRBbGxTaGlwc1N1bmsodGhpcy5hbGxTaGlwc1N1bmsoKSlcbiAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG5cbiAgICAjY2FuUGxhY2UoY29vcmRTdGFydCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgICAgIC8vIHRvIGV4Y2x1ZGUgc3RhcnRpbmcgcG9pbnQgZnJvbSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmICgoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGxlbmd0aCA+IHRoaXMuI3dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW2Nvb3JkU3RhcnQuY29vcmRZIC0gMV1bKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgICAgICAgIC8vIHRvIGV4Y2x1ZGUgc3RhcnRpbmcgcG9pbnQgZnJvbSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmICgoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGxlbmd0aCA+IHRoaXMuI2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGldW2Nvb3JkU3RhcnQuY29vcmRYIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2luaXRCb2FyZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkLmxlbmd0aCAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy4jd2lkdGg7IHggKz0gMSkge1xuICAgICAgICAgICAgdGhpcy4jYm9hcmQucHVzaChbXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy4jaGVpZ2h0OyB5ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBzd2FwcGluZyB2YWx1ZXMgZHVlIHRvIHdyb25nIGNlbGwgZGF0YSByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5Q2VsbCA9IG5ldyBCb2FyZENlbGwoeSArIDEsIHggKyAxKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2JvYXJkW3hdLnB1c2goZW1wdHlDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiZnVuY3Rpb24gaGl0U3RhdHVzKCkge1xuICAgIGNvbnN0IE5PVF9ISVQgPSAnTk9UX0hJVCc7XG4gICAgY29uc3QgSElUX0NFTEwgPSAnSElUX0NFTEwnO1xuICAgIGNvbnN0IEhJVF9TSElQID0gJ0hJVF9TSElQJztcblxuICAgIHJldHVybiB7XG4gICAgICAgIE5PVF9ISVQsXG4gICAgICAgIEhJVF9DRUxMLFxuICAgICAgICBISVRfU0hJUFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoaXRTdGF0dXM7IiwiY2xhc3MgUGxheWVyIHtcbiAgI3BsYXllck5hbWUgPSAnJztcblxuICAjaGl0TG9nID0gW107XG5cbiAgI3BsYXllclNoaXBzID0gW107XG5cbiAgY29uc3RydWN0b3IodXNlck5hbWUpIHtcbiAgICB0aGlzLiNwbGF5ZXJOYW1lID0gdXNlck5hbWU7XG4gIH1cblxuICBsb2dIaXQoY29vcmQpIHtcbiAgICB0aGlzLiNoaXRMb2cucHVzaChjb29yZCk7XG4gIH1cblxuICBhZGRTaGlwKHNoaXApIHtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgZ2V0SGl0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRMb2cuc2xpY2UoKTtcbiAgfVxuXG4gIGdldFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5zbGljZSgpO1xuICB9XG5cbiAgcmVzZXRVc2VyKCkge1xuICAgIHRoaXMuI2hpdExvZyA9IFtdO1xuICAgIHRoaXMuI3BsYXllclNoaXBzID0gW107XG4gIH1cblxuICBzZXRQbGF5ZXJOYW1lKHVzZXJOYW1lKSB7XG4gICAgdGhpcy4jcGxheWVyTmFtZSA9IHVzZXJOYW1lO1xuICB9XG5cbiAgZ2V0UGxheWVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyTmFtZTtcbiAgfTtcblxuICBnZXQgZmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyU2hpcHMubGVuZ3RoOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgU2hpcFBpZWNlIGZyb20gXCIuL1NoaXBQaWVjZVwiO1xuXG5jbGFzcyBTaGlwIHtcbiAgI3RpbWVzSGl0ID0gMDtcblxuICAjc2hpcFBpZWNlcyA9IFtdO1xuICBcbiAgI2Nvb3JkU3RhcnQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIHRoaXMuI2Nvb3JkU3RhcnQgPSBjb29yZFN0YXJ0XG4gICAgdGhpcy4jYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCk7XG4gIH1cblxuICB0cnlIaXQoaGl0Q29vcmQpIHtcbiAgICBjb25zdCBzaGlwUGllY2UgPSB0aGlzLiNzaGlwUGllY2VzLmZpbmQocGllY2VDb29yZCA9PlxuICAgICAgKHBpZWNlQ29vcmQuY29vcmRYID09PSBoaXRDb29yZC5jb29yZFgpICYmIChwaWVjZUNvb3JkLmNvb3JkWSA9PT0gaGl0Q29vcmQuY29vcmRZKVxuICAgICk7XG5cbiAgICBpZiAoc2hpcFBpZWNlID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlOyBcblxuICAgIHRoaXMuI3RpbWVzSGl0ICs9IDE7XG5cbiAgICByZXR1cm4gc2hpcFBpZWNlLmhpdCgpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmV2ZXJ5KHNoaXBQaWVjZSA9PlxuICAgICAgc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICAjYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBzaGlwUGllY2VDb29yZCA9IG51bGw7XG5cbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCArIGksIGNvb3JkU3RhcnQuY29vcmRZKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCwgY29vcmRTdGFydC5jb29yZFkgKyBpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jc2hpcFBpZWNlcy5wdXNoKHNoaXBQaWVjZUNvb3JkKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb29yZFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiNjb29yZFN0YXJ0O1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHsgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMubGVuZ3RoOyB9XG5cbiAgZ2V0IHRpbWVzSGl0KCkgeyByZXR1cm4gdGhpcy4jdGltZXNIaXQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9Db29yZGluYXRlXCI7XG5cbmNsYXNzIFNoaXBQaWVjZSB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNoaXRTdGF0dXMgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy4jaGl0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2hpdFN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRYIH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFk7IH1cblxuICAgIGdldCBoaXRTdGF0dXMoKSB7IHJldHVybiB0aGlzLiNoaXRTdGF0dXM7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcFBpZWNlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS11aS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMmVtO1xuXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ2J1dHRvbidcbiAgICAnYm9hcmQnO1xufVxuXG4uY29udHJvbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW1cbn1cblxuLmJvYXJkcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBnYXA6IDJlbTtcbn1cblxuLmJvYXJkIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICBncmlkLWFyZWE6IGJvYXJkO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmJvYXJkLWFjdGl2ZS1idWlsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5cbi5ib2FyZC1hY3RpdmUtYXR0YWNrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uYm9hcmQtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYm9hcmQtY2VsbDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5cbi5idXR0b24ge1xuICBncmlkLWFyZWE6IGJ1dHRvbjtcblxuICBwYWRkaW5nOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24tYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFROztFQUVSOztXQUVTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS11aS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnYnV0dG9uJ1xcbiAgICAnYm9hcmQnO1xcbn1cXG5cXG4uY29udHJvbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbVxcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICBncmlkLWFyZWE6IGJvYXJkO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5ib2FyZC1hY3RpdmUtYnVpbGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLmJvYXJkLWFjdGl2ZS1hdHRhY2sge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvYXJkLWNlbGw6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG5cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uLWFjdGl2ZSB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9HYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6WyJoaXRTdGF0dXMiLCJfQk9BUkRfV0lEVEgiLCJXZWFrTWFwIiwiX0JPQVJEX0hFSUdIVCIsIl9DRUxMX0NPVU5UIiwiX2JvYXJkUGxheWVyT25lIiwiX2JvYXJkUGxheWVyVHdvIiwiX3N0YXJ0R2FtZUJ1dHRvbiIsIl9zd2l0Y2hBeGlzQnV0dG9uIiwiX3Jlc3RhcnRHYW1lQnV0dG9uIiwiX2JvYXJkSW5pdCIsIl9pc0hvcml6b250YWwiLCJfdXBkYXRlQm9hcmQiLCJXZWFrU2V0IiwiX3VwZGF0ZUJvYXJkRm9jdXMiLCJfbWFwSGFuZGxlcnMiLCJfaW5pdEJvYXJkIiwiX2NyZWF0ZUNlbGwiLCJfdXBkYXRlQ2VsbE1ldGFEYXRhIiwiX3VwZGF0ZUNlbGxTdGF0dXMiLCJfaGlnaGxpZ2hCdWlsZFBhdHRlcm4iLCJfaGlnaGxpZ2h0Q2VsbHMiLCJfZ2V0U2hpcFNpemVQYXR0ZXJuIiwiX3RvZ2dsZUhvcml6b250YWwiLCJET01Db250cm9sbGVyIiwiY29udHJvbGxlckFQSSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX2luaXRCb2FyZDIiLCJjYWxsIiwiYm9hcmRBY3Rpb25IYW5kbGVyIiwidXBkYXRlQm9hcmRIaW50c0hhbmRsZXIiLCJfbWFwSGFuZGxlcnMyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidXBkYXRlVUkiLCJnYW1lU3RhdGVEYXRhIiwiY3VycmVudENlbGxDb29yZCIsIl91cGRhdGVCb2FyZDIiLCJfdXBkYXRlQm9hcmRGb2N1czIiLCJfaGlnaGxpZ2hCdWlsZFBhdHRlcm4yIiwiY3VycmVudFBsYXllckZsZWV0U2l6ZSIsImlzUm91bmRSdW5uaW5nIiwiY3VycmVudFVzZXJOYW1lIiwiZ2V0SXNIb3Jpem9udGFsIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiZ2FtZWJvYXJkT25lRGF0YSIsInBsYXllck9uZUdhbWVib2FyZERhdGEiLCJnYW1lYm9hcmRUd29EYXRhIiwicGxheWVyVHdvR2FtZWJvYXJkRGF0YSIsImkiLCJub2RlQm9hcmRPbmUiLCJjaGlsZE5vZGVzIiwiZGF0YUJvYXJkT25lIiwiYm9hcmREYXRhIiwibm9kZUJvYXJkVHdvIiwiZGF0YUJvYXJkVHdvIiwiX3VwZGF0ZUNlbGxTdGF0dXMyIiwiX3VwZGF0ZUNlbGxNZXRhRGF0YTIiLCJwbGF5ZXJVc2VyTmFtZSIsImlzR2FtZVJ1bm5pbmciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lSGFuZGxlciIsIl90b2dnbGVIb3Jpem9udGFsMiIsImJpbmQiLCJyZXN0YXJ0Um91bmRIYW5kbGVyIiwibmV3Qm9hcmRDZWxsT25lIiwiX2NyZWF0ZUNlbGwyIiwibmV3Qm9hcmRDZWxsVHdvIiwiYXBwZW5kQ2hpbGQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJuZXdDZWxsIiwiY3JlYXRlRWxlbWVudCIsImNlbGxOb2RlIiwiY2VsbERhdGEiLCJwbGF5ZXJOYW1lIiwiY29vcmQiLCJnZXRDb29yZCIsInNldEF0dHJpYnV0ZSIsImNvb3JkWCIsImNvb3JkWSIsIm5vZGUiLCJkYXRhIiwic3RhdHVzIiwiZ2V0SGl0U3RhdHVzIiwiTk9UX0hJVCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiSElUX1NISVAiLCJISVRfQ0VMTCIsImlzT2NjdXBpZWQiLCJjdXJyZW50UGxheWVyTmFtZSIsInNoaXBTaXplUGF0dGVybiIsIl9nZXRTaGlwU2l6ZVBhdHRlcm4yIiwiX2hpZ2hsaWdodENlbGxzMiIsImlzSG9yaXpvbnRhbCIsImN1cnJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsInRvZ2dsZSIsIlBsYXllciIsIlNoaXAiLCJHYW1lYm9hcmQiLCJDb29yZGluYXRlIiwiR2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJfY3VycmVudFBsYXllciIsIl9pc0dhbWVSdW5uaW5nIiwiX2lzUm91bmRSdW5uaW5nIiwiX2lzUGxheWVyT25lVHVybiIsIl9wbGF5ZXJPbmUiLCJfcGxheWVyVHdvIiwiX3BsYXllck9uZUdhbWVib2FyZCIsIl9wbGF5ZXJUd29HYW1lYm9hcmQiLCJfRE9NQ29udHJvbGxlciIsIl9ib2FyZEFjdGlvbkhhbmRsZXIiLCJfc3RhcnRHYW1lSGFuZGxlciIsIl9yZXN0YXJ0Um91bmRIYW5kbGVyIiwiX3VwZGF0ZUdhbWVVSSIsIl91cGRhdGVCb2FyZEhpbnRzSGFuZGxlciIsIl9nZXRHYW1lU3RhdGVEYXRhIiwiX3N0YXJ0Um91bmQiLCJfZW5kR2FtZSIsIl9zd2l0Y2hDdXJyZW50UGxheWVyIiwiX2dldFdpbm5lciIsIl9wbGF5ZXJBdHRhY2siLCJfYXR0YWNrQ2VsbCIsIl9wbGF5ZXJQbGFjZVNoaXAiLCJfcGxhY2VTaGlwIiwiX2dldEFQSUNvbnRhaW5lciIsIkdhbWVDb250cm9sbGVyIiwiX2dldEFQSUNvbnRhaW5lcjIiLCJfdXBkYXRlR2FtZVVJMiIsIl9ib2FyZEFjdGlvbkhhbmRsZXIyIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0NlbGxPd25lciIsImRhdGFzZXQiLCJwbGF5ZXJuYW1lIiwiZ2V0UGxheWVyTmFtZSIsImNvb3JkeCIsImNvb3JkeSIsImNlbGxDb29yZCIsIl9wbGF5ZXJQbGFjZVNoaXAyIiwiX3BsYXllckF0dGFjazIiLCJfc3RhcnRHYW1lSGFuZGxlcjIiLCJfcmVzdGFydFJvdW5kSGFuZGxlcjIiLCJfZ2V0R2FtZVN0YXRlRGF0YTIiLCJfdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIyIiwiZ2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJzZXRDdXJyZW50VXNlck5hbWUiLCJzZXRJc0dhbWVSdW5uaW5nIiwic2V0SXNSb3VuZFJ1bm5pbmciLCJzZXRJc1BsYXllck9uZVR1cm4iLCJzZXRQbGF5ZXJPbmVVc2VyTmFtZSIsInNldFBsYXllclR3b1VzZXJOYW1lIiwic2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdldEdhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwic2V0UGxheWVyT25lRmxlZXRTaXplIiwiZmxlZXRTaXplIiwic2V0UGxheWVyVHdvRmxlZXRTaXplIiwic2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSIsImJ1aWxkIiwiX3N0YXJ0Um91bmQyIiwiZ2V0U2hpcHMiLCJsZW5ndGgiLCJfZW5kR2FtZTIiLCJwbGF5ZXJXaW5uZXIiLCJfc3dpdGNoQ3VycmVudFBsYXllcjIiLCJfZ2V0V2lubmVyMiIsImFsbFNoaXBzU3VuayIsIl9hdHRhY2tDZWxsMiIsIndpbm5lciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Qm9hcmQiLCJyZWNlaXZlQXR0YWNrIiwiX3BsYWNlU2hpcDIiLCJuZXdTaGlwIiwiaXNQbGFjZWQiLCJwbGFjZVNoaXAiLCJhZGRTaGlwIiwiX2Nvb3JkIiwiX3NoaXAiLCJfaXNPY2N1cGllZCIsIl9oYXNCZWVuSGl0IiwiQm9hcmRDZWxsIiwib2NjdXB5Iiwic2hpcCIsImhpdCIsInRyeUhpdCIsImdldENvb3JkU3RyaW5nIiwiZ2V0IiwiX2Nvb3JkWCIsIl9jb29yZFkiLCJOdW1iZXIiLCJwYXJzZUludCIsIkdhbWVTdGF0ZURhdGEiLCJfY3VycmVudFBsYXllclVzZXJOYW1lIiwiX3BsYXllck9uZVVzZXJOYW1lIiwiX3BsYXllclR3b1VzZXJOYW1lIiwiX3BsYXllck9uZUdhbWVib2FyZERhdGEiLCJfcGxheWVyVHdvR2FtZWJvYXJkRGF0YSIsIl9wbGF5ZXJPbmVGbGVldFNpemUiLCJfcGxheWVyVHdvRmxlZXRTaXplIiwiX2N1cnJlbnRQbGF5ZXJGbGVldFNpemUiLCJzZXQiLCJpc1BsYXllck9uZVR1cm4iLCJwbGF5ZXJPbmVVc2VyTmFtZSIsInBsYXllclR3b1VzZXJOYW1lIiwicGxheWVyT25lRmxlZXRTaXplIiwicGxheWVyVHdvRmxlZXRTaXplIiwiX2dhbWVTdGF0ZURhdGEiLCJyZXNldCIsIkdhbWVib2FyZERhdGEiLCJfYm9hcmREYXRhIiwiX3BsYXllclVzZXJOYW1lIiwiX2FsbFNoaXBzU3VuayIsInNldEJvYXJkRGF0YSIsImJvYXJkIiwiYm9hcmRDb3B5Iiwic2xpY2UiLCJmb3JFYWNoIiwicm93IiwicHVzaCIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2dhbWVib2FyZERhdGEiLCJfcmVzZXQiLCJHYW1lQm9hcmREYXRhQnVpbGRlciIsImdhbWVib2FyZCIsInNldFBsYXllclVzZXJOYW1lIiwic2V0QWxsU2hpcHNTdW5rIiwiZ2FtZWJvYXJkRGF0YSIsIl9yZXNldDIiLCJHYW1lYm9hcmREYXRhQnVpbGRlciIsIl93aWR0aCIsIl9oZWlnaHQiLCJfYm9hcmQiLCJfc2hpcExpc3QiLCJfY2FuUGxhY2UiLCJfY2FuUGxhY2UyIiwiZ2V0Q29vcmRTdGFydCIsImJvYXJkQ2VsbCIsImV2ZXJ5IiwiaXNTdW5rIiwiZ2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJjb29yZFN0YXJ0IiwieCIsInkiLCJlbXB0eUNlbGwiLCJ1c2VyTmFtZSIsIl9wbGF5ZXJOYW1lIiwiX2hpdExvZyIsIl9wbGF5ZXJTaGlwcyIsImxvZ0hpdCIsImdldEhpdExvZyIsInJlc2V0VXNlciIsInNldFBsYXllck5hbWUiLCJTaGlwUGllY2UiLCJfdGltZXNIaXQiLCJfc2hpcFBpZWNlcyIsIl9jb29yZFN0YXJ0IiwiX2J1aWxkU2hpcCIsImhvcml6b250YWwiLCJfYnVpbGRTaGlwMiIsImhpdENvb3JkIiwic2hpcFBpZWNlIiwiZmluZCIsInBpZWNlQ29vcmQiLCJ1bmRlZmluZWQiLCJzaGlwUGllY2VDb29yZCIsIl9oaXRTdGF0dXMiLCJjb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==