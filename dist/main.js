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
var _updateCellMetaData = /*#__PURE__*/new WeakSet();
var _updateCellStatus = /*#__PURE__*/new WeakSet();
var _createCell = /*#__PURE__*/new WeakSet();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0VBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Cb2FyZENlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Db29yZGluYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvSGl0U3RhdHVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1NoaXBQaWVjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVib2FyZERhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVib2FyZERhdGFCdWlsZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4uL2VudGl0aWVzL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBET01Db250cm9sbGVyIHtcbiAgI0JPQVJEX1dJRFRIID0gMTA7XG5cbiAgI0JPQVJEX0hFSUdIVCA9IDEwO1xuXG4gICNDRUxMX0NPVU5UID0gMTAwO1xuXG4gICNib2FyZFBsYXllck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1vbmUnKTtcblxuICAjYm9hcmRQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtdHdvJyk7XG5cbiAgI3N0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XG5cbiAgI3N3aXRjaEF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9yaXpvbnRhbC1zdGF0dXMnKTtcblxuICAjcmVzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydC1nYW1lJyk7XG5cbiAgI2JvYXJkSW5pdCA9IGZhbHNlO1xuXG4gICNpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5ib2FyZEFjdGlvbkhhbmRsZXIsIGNvbnRyb2xsZXJBUEkudXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgIHRoaXMuI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpO1xuICB9XG5cbiAgdXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCkge1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkKGdhbWVTdGF0ZURhdGEpO1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkRm9jdXMoZ2FtZVN0YXRlRGF0YSk7XG5cbiAgICBpZiAoY3VycmVudENlbGxDb29yZCAmJiBnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuI2hpZ2hsaWdoQnVpbGRQYXR0ZXJuKGN1cnJlbnRDZWxsQ29vcmQsIGdhbWVTdGF0ZURhdGEuY3VycmVudFBsYXllckZsZWV0U2l6ZSwgZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVCb2FyZChnYW1lU3RhdGVEYXRhKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkT25lRGF0YSA9IGdhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICBjb25zdCBnYW1lYm9hcmRUd29EYXRhID0gZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNDRUxMX0NPVU5UOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5vZGVCb2FyZE9uZSA9IHRoaXMuI2JvYXJkUGxheWVyT25lLmNoaWxkTm9kZXNbaV07XG4gICAgICBjb25zdCBkYXRhQm9hcmRPbmUgPSBnYW1lYm9hcmRPbmVEYXRhLmJvYXJkRGF0YVtpXTtcblxuICAgICAgY29uc3Qgbm9kZUJvYXJkVHdvID0gdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZFR3byA9IGdhbWVib2FyZFR3b0RhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICAvLyBUbyBoaWRlIGZpcnN0IHBsYXllcidzIGJvYXJkIGR1cmluZyBidWlsZGluZyBwaGFzZVxuICAgICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNQbGF5ZXJPbmVUdXJuID09PSBmYWxzZSAmJiBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lLCAhZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRPbmUsIGRhdGFCb2FyZE9uZSwgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsIGdhbWVib2FyZE9uZURhdGEucGxheWVyVXNlck5hbWUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvLCBnYW1lYm9hcmRUd29EYXRhLnBsYXllclVzZXJOYW1lKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlQm9hcmRGb2N1cyhnYW1lU3RhdGVEYXRhKSB7XG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgc3dpdGNoIChnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICBjYXNlICdQbGF5ZXIgT25lJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHN3aXRjaCAoZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGxheWVyIE9uZSc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIEJvYXJkIEluaXRpYWxpemF0aW9uXG5cbiAgI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnN0YXJ0R2FtZUhhbmRsZXIpO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmRIYW5kbGVyKTtcbiAgfVxuXG4gICNpbml0Qm9hcmQoYm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jQ0VMTF9DT1VOVDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxPbmUgPSB0aGlzLiNjcmVhdGVDZWxsKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsVHdvID0gdGhpcy4jY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcblxuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsT25lKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbFR3byk7XG4gICAgfVxuXG4gICAgdGhpcy4jYm9hcmRJbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIENlbGwgQ3JlYXRpb24vU3RhdHVzTXV0YXRpb25cblxuICAjdXBkYXRlQ2VsbE1ldGFEYXRhKGNlbGxOb2RlLCBjZWxsRGF0YSwgcGxheWVyTmFtZSkge1xuICAgIGNvbnN0IGNvb3JkID0gY2VsbERhdGEuZ2V0Q29vcmQoKTtcblxuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHgnLCBjb29yZC5jb29yZFgpO1xuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHknLCBjb29yZC5jb29yZFkpO1xuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGF5ZXJuYW1lJywgcGxheWVyTmFtZSk7XG4gIH1cblxuICAjdXBkYXRlQ2VsbFN0YXR1cyhjZWxsTm9kZSwgY2VsbERhdGEsIGlzUm91bmRSdW5uaW5nKSB7XG4gICAgaWYgKCFjZWxsTm9kZSB8fCAhY2VsbERhdGEpIHJldHVybjtcblxuICAgIGNvbnN0IG5vZGUgPSBjZWxsTm9kZTtcbiAgICBjb25zdCBkYXRhID0gY2VsbERhdGE7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdldEhpdFN0YXR1cygpO1xuXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuTk9UX0hJVDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkZGRkZGJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLkhJVF9TSElQOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRjAwMDAnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX0NFTEw6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNlbGxEYXRhLmlzT2NjdXBpZWQgJiYgaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgfVxuXG4gICNjcmVhdGVDZWxsKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpIHtcbiAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNlbGwnKTtcbiAgICBuZXdDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9hcmRBY3Rpb25IYW5kbGVyKTtcbiAgICBuZXdDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcblxuICAgIHJldHVybiBuZXdDZWxsO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gQ2VsbCBCdWlsZGluZyBQYXRoIEhpbnRpbmdcblxuICAjaGlnaGxpZ2hCdWlsZFBhdHRlcm4oY29vcmQsIGN1cnJlbnRQbGF5ZXJGbGVldFNpemUsIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3Qgc2hpcFNpemVQYXR0ZXJuID0gdGhpcy4jZ2V0U2hpcFNpemVQYXR0ZXJuKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpO1xuXG4gICAgdGhpcy4jaGlnaGxpZ2h0Q2VsbHMoY29vcmQsIHNoaXBTaXplUGF0dGVybiwgY3VycmVudFBsYXllck5hbWUpO1xuICB9XG5cbiAgI2hpZ2hsaWdodENlbGxzKGNvb3JkLCBzaGlwU2l6ZVBhdHRlcm4sIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jaXNIb3Jpem9udGFsO1xuXG4gICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZVBhdHRlcm47IGkgKz0gMSkge1xuICAgICAgICAgIGlmICgoY29vcmQuY29vcmRYICsgc2hpcFNpemVQYXR0ZXJuKSAtIDEgPiB0aGlzLiNCT0FSRF9XSURUSCkgYnJlYWs7XG4gICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1jb29yZHg9XCIke2Nvb3JkLmNvb3JkWCArIGl9XCJdW2RhdGEtY29vcmR5PVwiJHtjb29yZC5jb29yZFl9XCJdW2RhdGEtcGxheWVybmFtZT1cIiR7Y3VycmVudFBsYXllck5hbWV9XCJdYCk7XG4gICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZVBhdHRlcm47IGkgKz0gMSkge1xuICAgICAgICAgIGlmICgoY29vcmQuY29vcmRZICsgc2hpcFNpemVQYXR0ZXJuKSAtIDEgPiB0aGlzLiNCT0FSRF9IRUlHSFQpIGJyZWFrO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtY29vcmR4PVwiJHtjb29yZC5jb29yZFh9XCJdW2RhdGEtY29vcmR5PVwiJHtjb29yZC5jb29yZFkgKyBpfVwiXVtkYXRhLXBsYXllcm5hbWU9XCIke2N1cnJlbnRQbGF5ZXJOYW1lfVwiXWApO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gICNnZXRTaGlwU2l6ZVBhdHRlcm4oY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgIHN3aXRjaCAoY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDI6XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAjdG9nZ2xlSG9yaXpvbnRhbCgpIHtcbiAgICB0aGlzLiNpc0hvcml6b250YWwgPSAhdGhpcy4jaXNIb3Jpem9udGFsO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLWFjdGl2ZScpO1xuICB9XG5cbiAgZ2V0SXNIb3Jpem9udGFsKCkgeyByZXR1cm4gdGhpcy4jaXNIb3Jpem9udGFsIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9lbnRpdGllcy9QbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9lbnRpdGllcy9TaGlwXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9lbnRpdGllcy9HYW1lYm9hcmRcIjtcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuLi9lbnRpdGllcy9Db29yZGluYXRlXCI7XG5pbXBvcnQgR2FtZVN0YXRlRGF0YUJ1aWxkZXIgZnJvbSBcIi4uL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAjY3VycmVudFBsYXllciA9IG51bGw7XG5cbiAgI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAjcGxheWVyT25lID0gbnVsbDtcblxuICAjcGxheWVyVHdvID0gbnVsbDtcblxuICAjcGxheWVyT25lR2FtZWJvYXJkID0gbnVsbDtcblxuICAjcGxheWVyVHdvR2FtZWJvYXJkID0gbnVsbDtcblxuICAjRE9NQ29udHJvbGxlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jRE9NQ29udHJvbGxlciA9IG5ldyBET01Db250cm9sbGVyKHRoaXMuI2dldEFQSUNvbnRhaW5lcigpKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgLy8gQ2FsbGJhY2sgdG8gbGV0IG90aGVyIGxheWVycyBvZiBwcm9ncmFtIGludGVyYWN0IHdpdGggb3VyIGdhbWUgY29udHJvbGxlclxuICAjYm9hcmRBY3Rpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGNvbnN0IGlzQ2VsbE93bmVyID0gY2VsbE5vZGUuZGF0YXNldC5wbGF5ZXJuYW1lID09PSB0aGlzLiNjdXJyZW50UGxheWVyLmdldFBsYXllck5hbWUoKTtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLiNET01Db250cm9sbGVyLmdldElzSG9yaXpvbnRhbCgpO1xuXG4gICAgY29uc3QgY29vcmRYID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHg7XG4gICAgY29uc3QgY29vcmRZID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHk7XG4gICAgY29uc3QgY2VsbENvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuXG4gICAgc3dpdGNoICh0aGlzLiNpc1JvdW5kUnVubmluZykge1xuICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIHBsYWNlIHNoaXBzIG9uIEhJUyBPV04gYm9hcmQgb25seVxuICAgICAgICBpZiAoaXNDZWxsT3duZXIgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYXllclBsYWNlU2hpcChjZWxsQ29vcmQsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgIC8vIHRvIGxldCBwbGF5ZXIgYXR0YWNrIHNoaXBzIG9uIEhJUyBPUFBPTkVOVCdTIGJvYXJkIG9ubHlcbiAgICAgICAgaWYgKGlzQ2VsbE93bmVyID09PSB0cnVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYXllckF0dGFjayhjZWxsQ29vcmQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjZWxsQ29vcmQpO1xuICB9XG5cbiAgI3N0YXJ0R2FtZUhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IHRydWUpIHJldHVybjtcblxuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAjcmVzdGFydFJvdW5kSGFuZGxlcigpIHtcbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAjdXBkYXRlR2FtZVVJKGN1cnJlbnRDZWxsQ29vcmQpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gdGhpcy4jZ2V0R2FtZVN0YXRlRGF0YSgpO1xuXG4gICAgdGhpcy4jRE9NQ29udHJvbGxlci51cGRhdGVVSShnYW1lU3RhdGVEYXRhLCBjdXJyZW50Q2VsbENvb3JkKTtcbiAgfVxuXG4gICN1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKGNlbGxOb2RlLmRhdGFzZXQucGxheWVybmFtZSAhPT0gdGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuXG4gICAgY29uc3QgY3VycmVudENlbGxDb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKTtcbiAgfVxuXG4gICNnZXRHYW1lU3RhdGVEYXRhKCkge1xuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGFCdWlsZGVyID0gbmV3IEdhbWVTdGF0ZURhdGFCdWlsZGVyKCk7XG5cbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gZ2FtZVN0YXRlRGF0YUJ1aWxkZXJcbiAgICAgIC5zZXRDdXJyZW50VXNlck5hbWUodGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0SXNHYW1lUnVubmluZyh0aGlzLiNpc0dhbWVSdW5uaW5nKVxuICAgICAgLnNldElzUm91bmRSdW5uaW5nKHRoaXMuI2lzUm91bmRSdW5uaW5nKVxuICAgICAgLnNldElzUGxheWVyT25lVHVybih0aGlzLiNpc1BsYXllck9uZVR1cm4pXG4gICAgICAuc2V0UGxheWVyT25lVXNlck5hbWUodGhpcy4jcGxheWVyT25lLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJUd29Vc2VyTmFtZSh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldFBsYXllck9uZUdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuc2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0R2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyTmFtZSgpKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVGbGVldFNpemUodGhpcy4jcGxheWVyT25lLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRQbGF5ZXJUd29GbGVldFNpemUodGhpcy4jcGxheWVyVHdvLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRDdXJyZW50UGxheWVyRmxlZXRTaXplKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZmxlZXRTaXplKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICByZXR1cm4gZ2FtZVN0YXRlRGF0YTtcbiAgfVxuXG4gIC8vIFRvIGNoZWNrIGlmIHJvdW5kIHNob3VsZCBzdGFydCBvbmNlIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4gICNzdGFydFJvdW5kKCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUgJiYgdGhpcy4jcGxheWVyVHdvLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IHRydWU7XG4gICAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gICNlbmRHYW1lKHBsYXllcldpbm5lcikge1xuICAgIGlmIChwbGF5ZXJXaW5uZXIgPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllclR3bztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB9XG5cbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSAhdGhpcy4jaXNQbGF5ZXJPbmVUdXJuO1xuICB9XG5cbiAgI2dldFdpbm5lcigpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyVHdvO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAjcGxheWVyQXR0YWNrKGNvb3JkKSB7XG4gICAgdGhpcy4jYXR0YWNrQ2VsbChjb29yZCk7XG4gICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuXG4gICAgY29uc3Qgd2lubmVyID0gdGhpcy4jZ2V0V2lubmVyKCk7XG5cbiAgICBpZiAod2lubmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiNlbmRHYW1lKHdpbm5lcik7XG4gICAgICBjb25zb2xlLmxvZyhgcGxheWVyICR7d2lubmVyfSB3b25gKTtcbiAgICB9XG4gIH1cblxuICAjYXR0YWNrQ2VsbChjb29yZCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgY3VycmVudEJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAjcGxheWVyUGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICB0aGlzLiNwbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCk7XG5cbiAgICB0aGlzLiNzdGFydFJvdW5kKCk7XG4gIH1cblxuICAjcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuICAgIGxldCBuZXdTaGlwID0gbnVsbDtcbiAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIC8vIFRvIGJ1aWxkIHNoaXBzIGluIHByZS1kZXRlcm1pbmVkIHBhdHRlcm4gKDUsNCwzLDMsMilcbiAgICBzd2l0Y2ggKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNSk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMToge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgNCk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgNDoge1xuICAgICAgICBuZXdTaGlwID0gbmV3IFNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCwgMik7XG4gICAgICAgIGlzUGxhY2VkID0gY3VycmVudEJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQbGF5ZXJzIHNob3VsZCB0YWtlIHR1cm5zIGFmdGVyIGJ1aWxkaW5nIHRoZWlyIGVudGlyZSBmbGVldFxuICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllci5hZGRTaGlwKG5ld1NoaXApO1xuXG4gICAgICBpZiAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gICNnZXRBUElDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0R2FtZUhhbmRsZXI6IHRoaXMuI3N0YXJ0R2FtZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGJvYXJkQWN0aW9uSGFuZGxlcjogdGhpcy4jYm9hcmRBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICByZXN0YXJ0Um91bmRIYW5kbGVyOiB0aGlzLiNyZXN0YXJ0Um91bmRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcjogdGhpcy4jdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuaW1wb3J0IGhpdFN0YXR1cyBmcm9tIFwiLi9IaXRTdGF0dXNcIjtcblxuY2xhc3MgQm9hcmRDZWxsIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI3NoaXAgPSBudWxsO1xuXG4gICAgI2lzT2NjdXBpZWQgPSBmYWxzZTtcblxuICAgICNoYXNCZWVuSGl0ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBvY2N1cHkoc2hpcCkge1xuICAgICAgICBpZiAodGhpcy4jc2hpcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2lzT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiNzaGlwID0gc2hpcDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNoYXNCZWVuSGl0ID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaGFzQmVlbkhpdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgIHRoaXMuI3NoaXAudHJ5SGl0KHRoaXMuI2Nvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldENvb3JkKCkgeyByZXR1cm4gdGhpcy4jY29vcmQ7IH1cblxuICAgIGdldENvb3JkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFg6ICR7dGhpcy4jY29vcmQuY29vcmRYfSBZOiAke3RoaXMuI2Nvb3JkLmNvb3JkWX1gO1xuICAgIH1cblxuICAgIGdldEhpdFN0YXR1cygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLiNoYXNCZWVuSGl0KSB7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLk5PVF9ISVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX1NISVA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9DRUxMO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc09jY3VwaWVkKCkgeyByZXR1cm4gdGhpcy4jaXNPY2N1cGllZDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZENlbGw7IiwiY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgI2Nvb3JkWCA9IDA7XG5cbiAgICAjY29vcmRZID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkWCA9IGNvb3JkWDtcbiAgICAgICAgdGhpcy4jY29vcmRZID0gY29vcmRZO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRYLCAxMCk7IH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy4jY29vcmRZLCAxMCk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRpbmF0ZTsiLCJpbXBvcnQgQm9hcmRDZWxsIGZyb20gXCIuL0JvYXJkQ2VsbFwiO1xuaW1wb3J0IEdhbWVib2FyZERhdGFCdWlsZGVyIGZyb20gXCIuL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICAjd2lkdGggPSAxMDtcblxuICAgICNoZWlnaHQgPSAxMDtcblxuICAgICNib2FyZCA9IFtdO1xuXG4gICAgLy8gc3dhcHBpbmcgc3VwcG9zZWRseSBYIGFuZCBZIGNvb3JkaW5hdGVzIGhlcmUgYmVjYXVzZSBvZiBmYWlsZWQgYXR0ZW1wdCB0byBpbXBsZW1lbnQgMkQgYXJyYXlzIGluIEphdmFTY3JpcHQuLi5cbiAgICAjc2hpcExpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNpbml0Qm9hcmQoKTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNjYW5QbGFjZShzaGlwLmdldENvb3JkU3RhcnQoKSwgaXNIb3Jpem9udGFsLCBsZW5ndGgpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jc2hpcExpc3QucHVzaChzaGlwKTtcblxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRZIC0gMV1bKHNoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDEpICsgaV07XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRZIC0gMSkgKyBpXVtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFggLSAxXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jYm9hcmRbY29vcmQuY29vcmRZIC0gMV1bY29vcmQuY29vcmRYIC0gMV0uaGl0KCk7XG4gICAgfVxuICAgIFxuICAgIGdldEdhbWVib2FyZERhdGEocGxheWVyVXNlck5hbWUpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YUJ1aWxkZXIgPSBuZXcgR2FtZWJvYXJkRGF0YUJ1aWxkZXIoKTtcblxuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhID0gZ2FtZWJvYXJkRGF0YUJ1aWxkZXIuc2V0Qm9hcmREYXRhKHRoaXMuI2JvYXJkKVxuICAgICAgICAuc2V0UGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpXG4gICAgICAgIC5zZXRBbGxTaGlwc1N1bmsodGhpcy5hbGxTaGlwc1N1bmsoKSlcbiAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG4gICAgXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hpcExpc3QuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG4gICAgXG4gICAgI2NhblBsYWNlKGNvb3JkU3RhcnQsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBsZW5ndGggPiB0aGlzLiN3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtjb29yZFN0YXJ0LmNvb3JkWSAtIDFdWyhjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBsZW5ndGggPiB0aGlzLiNoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBpXVtjb29yZFN0YXJ0LmNvb3JkWCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0Qm9hcmQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZC5sZW5ndGggIT09IDApIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuI3dpZHRoOyB4ICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuI2JvYXJkLnB1c2goW10pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuI2hlaWdodDsgeSArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gc3dhcHBpbmcgdmFsdWVzIGR1ZSB0byB3cm9uZyBjZWxsIGRhdGEgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUNlbGwgPSBuZXcgQm9hcmRDZWxsKHkgKyAxLCB4ICsgMSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNib2FyZFt4XS5wdXNoKGVtcHR5Q2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImZ1bmN0aW9uIGhpdFN0YXR1cygpIHtcbiAgICBjb25zdCBOT1RfSElUID0gJ05PVF9ISVQnO1xuICAgIGNvbnN0IEhJVF9DRUxMID0gJ0hJVF9DRUxMJztcbiAgICBjb25zdCBISVRfU0hJUCA9ICdISVRfU0hJUCc7XG4gICAgY29uc3QgQlVJTERJTkdfU0hJUCA9ICdCVUlMRElOR19TSElQJztcblxuICAgIHJldHVybiB7XG4gICAgICAgIE5PVF9ISVQsXG4gICAgICAgIEhJVF9DRUxMLFxuICAgICAgICBISVRfU0hJUCxcbiAgICAgICAgQlVJTERJTkdfU0hJUFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoaXRTdGF0dXM7IiwiY2xhc3MgUGxheWVyIHtcbiAgI3BsYXllck5hbWUgPSAnJztcblxuICAjaGl0TG9nID0gW107XG5cbiAgI3BsYXllclNoaXBzID0gW107XG5cbiAgY29uc3RydWN0b3IodXNlck5hbWUpIHtcbiAgICB0aGlzLiNwbGF5ZXJOYW1lID0gdXNlck5hbWU7XG4gIH1cblxuICBsb2dIaXQoY29vcmQpIHtcbiAgICB0aGlzLiNoaXRMb2cucHVzaChjb29yZCk7XG4gIH1cblxuICBhZGRTaGlwKHNoaXApIHtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgZ2V0SGl0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRMb2cuc2xpY2UoKTtcbiAgfVxuXG4gIGdldFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5zbGljZSgpO1xuICB9XG5cbiAgcmVzZXRVc2VyKCkge1xuICAgIHRoaXMuI2hpdExvZyA9IFtdO1xuICAgIHRoaXMuI3BsYXllclNoaXBzID0gW107XG4gIH1cblxuICBnZXRQbGF5ZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJOYW1lO1xuICB9O1xuXG4gIGdldCBmbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5sZW5ndGg7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImltcG9ydCBTaGlwUGllY2UgZnJvbSBcIi4vU2hpcFBpZWNlXCI7XG5cbmNsYXNzIFNoaXAge1xuICAjdGltZXNIaXQgPSAwO1xuXG4gICNzaGlwUGllY2VzID0gW107XG4gIFxuICAjY29vcmRTdGFydCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgdGhpcy4jY29vcmRTdGFydCA9IGNvb3JkU3RhcnRcbiAgICB0aGlzLiNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKTtcbiAgfVxuXG4gIHRyeUhpdChoaXRDb29yZCkge1xuICAgIGNvbnN0IHNoaXBQaWVjZSA9IHRoaXMuI3NoaXBQaWVjZXMuZmluZChwaWVjZUNvb3JkID0+XG4gICAgICAocGllY2VDb29yZC5jb29yZFggPT09IGhpdENvb3JkLmNvb3JkWCkgJiYgKHBpZWNlQ29vcmQuY29vcmRZID09PSBoaXRDb29yZC5jb29yZFkpXG4gICAgKTtcblxuICAgIGlmIChzaGlwUGllY2UgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlKSByZXR1cm4gZmFsc2U7IFxuXG4gICAgdGhpcy4jdGltZXNIaXQgKz0gMTtcblxuICAgIHJldHVybiBzaGlwUGllY2UuaGl0KCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMuZXZlcnkoc2hpcFBpZWNlID0+XG4gICAgICBzaGlwUGllY2UuaGl0U3RhdHVzID09PSB0cnVlXG4gICAgKTtcbiAgfVxuXG4gICNidWlsZFNoaXAoY29vcmRTdGFydCwgaG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHNoaXBQaWVjZUNvb3JkID0gbnVsbDtcblxuICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYICsgaSwgY29vcmRTdGFydC5jb29yZFkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcFBpZWNlQ29vcmQgPSBuZXcgU2hpcFBpZWNlKGNvb3JkU3RhcnQuY29vcmRYLCBjb29yZFN0YXJ0LmNvb3JkWSArIGkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiNzaGlwUGllY2VzLnB1c2goc2hpcFBpZWNlQ29vcmQpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvb3JkU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Nvb3JkU3RhcnQ7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5sZW5ndGg7IH1cblxuICBnZXQgdGltZXNIaXQoKSB7IHJldHVybiB0aGlzLiN0aW1lc0hpdDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcblxuY2xhc3MgU2hpcFBpZWNlIHtcbiAgICAjY29vcmQgPSBudWxsO1xuXG4gICAgI2hpdFN0YXR1cyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLiNoaXRTdGF0dXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy4jaGl0U3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBjb29yZFgoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFggfVxuXG4gICAgZ2V0IGNvb3JkWSgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWTsgfVxuXG4gICAgZ2V0IGhpdFN0YXR1cygpIHsgcmV0dXJuIHRoaXMuI2hpdFN0YXR1czsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwUGllY2U7IiwiY2xhc3MgR2FtZVN0YXRlRGF0YSB7XG4gICAgI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTtcblxuICAgICNpc0dhbWVSdW5uaW5nO1xuXG4gICAgI2lzUm91bmRSdW5uaW5nO1xuXG4gICAgI2lzUGxheWVyT25lVHVybjtcblxuICAgICNwbGF5ZXJPbmVVc2VyTmFtZTtcblxuICAgICNwbGF5ZXJUd29Vc2VyTmFtZTtcblxuICAgICNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuXG4gICAgI3BsYXllclR3b0dhbWVib2FyZERhdGE7XG5cbiAgICAjcGxheWVyT25lRmxlZXRTaXplO1xuXG4gICAgI3BsYXllclR3b0ZsZWV0U2l6ZTtcblxuICAgICNjdXJyZW50UGxheWVyRmxlZXRTaXplO1xuXG4gICAgZ2V0IGN1cnJlbnRVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgc2V0IGN1cnJlbnRVc2VyTmFtZShjdXJyZW50VXNlck5hbWUpIHsgdGhpcy4jY3VycmVudFBsYXllclVzZXJOYW1lID0gY3VycmVudFVzZXJOYW1lOyB9XG5cbiAgICBnZXQgaXNHYW1lUnVubmluZygpIHsgcmV0dXJuIHRoaXMuI2lzR2FtZVJ1bm5pbmc7IH1cblxuICAgIHNldCBpc0dhbWVSdW5uaW5nKGlzR2FtZVJ1bm5pbmcpIHsgdGhpcy4jaXNHYW1lUnVubmluZyA9IGlzR2FtZVJ1bm5pbmc7IH1cblxuICAgIGdldCBpc1JvdW5kUnVubmluZygpIHsgcmV0dXJuIHRoaXMuI2lzUm91bmRSdW5uaW5nOyB9XG5cbiAgICBzZXQgaXNSb3VuZFJ1bm5pbmcoaXNSb3VuZFJ1bm5pbmcpIHsgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBpc1JvdW5kUnVubmluZzsgfVxuXG4gICAgZ2V0IGlzUGxheWVyT25lVHVybigpIHsgcmV0dXJuIHRoaXMuI2lzUGxheWVyT25lVHVybjsgfVxuXG4gICAgc2V0IGlzUGxheWVyT25lVHVybihpc1BsYXllck9uZVR1cm4pIHsgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gaXNQbGF5ZXJPbmVUdXJuOyB9XG5cbiAgICBnZXQgcGxheWVyT25lVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVVc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllck9uZVVzZXJOYW1lKHBsYXllck9uZVVzZXJOYW1lKSB7IHRoaXMuI3BsYXllck9uZVVzZXJOYW1lID0gcGxheWVyT25lVXNlck5hbWU7IH1cblxuICAgIGdldCBwbGF5ZXJUd29Vc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b1VzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvVXNlck5hbWUocGxheWVyVHdvVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyVHdvVXNlck5hbWUgPSBwbGF5ZXJUd29Vc2VyTmFtZTsgfVxuXG4gICAgZ2V0IHBsYXllck9uZUdhbWVib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhOyB9XG5cbiAgICBzZXQgcGxheWVyT25lR2FtZWJvYXJkRGF0YShwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKSB7IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZERhdGEgPSBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyVHdvR2FtZWJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZERhdGE7IH1cblxuICAgIHNldCBwbGF5ZXJUd29HYW1lYm9hcmREYXRhKHBsYXllclR3b0dhbWVib2FyZERhdGEpIHsgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkRGF0YSA9IHBsYXllclR3b0dhbWVib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJPbmVGbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVGbGVldFNpemU7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVGbGVldFNpemUocGxheWVyT25lRmxlZXRTaXplKSB7IHRoaXMuI3BsYXllck9uZUZsZWV0U2l6ZSA9IHBsYXllck9uZUZsZWV0U2l6ZTsgfVxuICAgIFxuICAgIGdldCBwbGF5ZXJUd29GbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29GbGVldFNpemU7IH1cblxuICAgIHNldCBwbGF5ZXJUd29GbGVldFNpemUocGxheWVyVHdvRmxlZXRTaXplKSB7IHRoaXMuI3BsYXllclR3b0ZsZWV0U2l6ZSA9IHBsYXllclR3b0ZsZWV0U2l6ZTsgfVxuXG4gICAgZ2V0IGN1cnJlbnRQbGF5ZXJGbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNjdXJyZW50UGxheWVyRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgY3VycmVudFBsYXllckZsZWV0U2l6ZShjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7IHRoaXMuI2N1cnJlbnRQbGF5ZXJGbGVldFNpemUgPSBjdXJyZW50UGxheWVyRmxlZXRTaXplOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZURhdGE7IiwiaW1wb3J0IEdhbWVTdGF0ZURhdGEgZnJvbSBcIi4vR2FtZVN0YXRlRGF0YVwiO1xuXG5jbGFzcyBHYW1lU3RhdGVEYXRhQnVpbGRlciB7XG4gICAgI2dhbWVTdGF0ZURhdGEgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEgPSBuZXcgR2FtZVN0YXRlRGF0YSgpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRVc2VyTmFtZShjdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUgPSBjdXJyZW50VXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzR2FtZVJ1bm5pbmcoaXNHYW1lUnVubmluZykge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcgPSBpc0dhbWVSdW5uaW5nO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc1JvdW5kUnVubmluZyhpc1JvdW5kUnVubmluZykge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID0gaXNSb3VuZFJ1bm5pbmc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzUGxheWVyT25lVHVybihpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc1BsYXllck9uZVR1cm4gPSBpc1BsYXllck9uZVR1cm47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZVVzZXJOYW1lKHBsYXllck9uZVVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lVXNlck5hbWUgPSBwbGF5ZXJPbmVVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvVXNlck5hbWUocGxheWVyVHdvVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29Vc2VyTmFtZSA9IHBsYXllclR3b1VzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHBsYXllck9uZUdhbWVib2FyZERhdGEpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVHYW1lYm9hcmREYXRhID0gcGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YShwbGF5ZXJUd29HYW1lYm9hcmREYXRhKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvR2FtZWJvYXJkRGF0YSA9IHBsYXllclR3b0dhbWVib2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZUZsZWV0U2l6ZShwbGF5ZXJPbmVGbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVGbGVldFNpemUgPSBwbGF5ZXJPbmVGbGVldFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b0ZsZWV0U2l6ZShwbGF5ZXJUd29GbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29GbGVldFNpemUgPSBwbGF5ZXJUd29GbGVldFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRQbGF5ZXJGbGVldFNpemUoY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmN1cnJlbnRQbGF5ZXJGbGVldFNpemUgPSBjdXJyZW50UGxheWVyRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YSA9IG5ldyBHYW1lU3RhdGVEYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVTdGF0ZURhdGEgPSB0aGlzLiNnYW1lU3RhdGVEYXRhO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBnYW1lU3RhdGVEYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlRGF0YUJ1aWxkZXI7IiwiY2xhc3MgR2FtZWJvYXJkRGF0YSB7XG4gICAgI2JvYXJkRGF0YSA9IG51bGw7XG5cbiAgICAjcGxheWVyVXNlck5hbWUgPSAnJztcblxuICAgICNhbGxTaGlwc1N1bmsgPSBudWxsO1xuXG4gICAgc2V0Qm9hcmREYXRhKGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ29weSA9IGJvYXJkLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkRGF0YSA9IFtdO1xuXG4gICAgICAgIGJvYXJkQ29weS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBib2FyZERhdGEucHVzaCguLi5yb3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNib2FyZERhdGEgPSBib2FyZERhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI2JvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllclVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJVc2VyTmFtZSA9IHBsYXllclVzZXJOYW1lOyB9XG5cbiAgICBnZXQgYWxsU2hpcHNTdW5rKCkgeyByZXR1cm4gdGhpcy4jYWxsU2hpcHNTdW5rOyB9XG5cbiAgICBzZXQgYWxsU2hpcHNTdW5rKGFsbFNoaXBzU3VuaykgeyB0aGlzLiNhbGxTaGlwc1N1bmsgPSBhbGxTaGlwc1N1bms7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkRGF0YTsiLCJpbXBvcnQgR2FtZWJvYXJkRGF0YSBmcm9tIFwiLi9HYW1lYm9hcmREYXRhXCI7XG5cbmNsYXNzIEdhbWVCb2FyZERhdGFCdWlsZGVyIHtcbiAgICAjZ2FtZWJvYXJkRGF0YSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YSA9IG5ldyBHYW1lYm9hcmREYXRhKCk7XG4gICAgfVxuXG4gICAgc2V0Qm9hcmREYXRhKGdhbWVib2FyZCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLnNldEJvYXJkRGF0YShnYW1lYm9hcmQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLnBsYXllclVzZXJOYW1lID0gcGxheWVyVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFsbFNoaXBzU3VuayhhbGxTaGlwc1N1bmspIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5hbGxTaGlwc1N1bmsgPSBhbGxTaGlwc1N1bms7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgICNyZXNldCgpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YSA9IG5ldyBHYW1lYm9hcmREYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGEgPSB0aGlzLiNnYW1lYm9hcmREYXRhO1xuICAgICAgICB0aGlzLiNyZXNldCgpO1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZERhdGFCdWlsZGVyOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS11aS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMmVtO1xuXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ2J1dHRvbidcbiAgICAnYm9hcmQnO1xufVxuXG4uY29udHJvbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW1cbn1cblxuLmJvYXJkcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBnYXA6IDJlbTtcbn1cblxuLmJvYXJkIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICBncmlkLWFyZWE6IGJvYXJkO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmJvYXJkLWFjdGl2ZS1idWlsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5cbi5ib2FyZC1hY3RpdmUtYXR0YWNrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uYm9hcmQtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYm9hcmQtY2VsbDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XG59XG5cbi5idXR0b24ge1xuICBncmlkLWFyZWE6IGJ1dHRvbjtcblxuICBwYWRkaW5nOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24tYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFROztFQUVSOztXQUVTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS11aS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnYnV0dG9uJ1xcbiAgICAnYm9hcmQnO1xcbn1cXG5cXG4uY29udHJvbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbVxcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICBncmlkLWFyZWE6IGJvYXJkO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5ib2FyZC1hY3RpdmUtYnVpbGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLmJvYXJkLWFjdGl2ZS1hdHRhY2sge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvYXJkLWNlbGw6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG5cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uLWFjdGl2ZSB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9HYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6WyJoaXRTdGF0dXMiLCJfQk9BUkRfV0lEVEgiLCJXZWFrTWFwIiwiX0JPQVJEX0hFSUdIVCIsIl9DRUxMX0NPVU5UIiwiX2JvYXJkUGxheWVyT25lIiwiX2JvYXJkUGxheWVyVHdvIiwiX3N0YXJ0R2FtZUJ1dHRvbiIsIl9zd2l0Y2hBeGlzQnV0dG9uIiwiX3Jlc3RhcnRHYW1lQnV0dG9uIiwiX2JvYXJkSW5pdCIsIl9pc0hvcml6b250YWwiLCJfdXBkYXRlQm9hcmQiLCJXZWFrU2V0IiwiX3VwZGF0ZUJvYXJkRm9jdXMiLCJfbWFwSGFuZGxlcnMiLCJfaW5pdEJvYXJkIiwiX3VwZGF0ZUNlbGxNZXRhRGF0YSIsIl91cGRhdGVDZWxsU3RhdHVzIiwiX2NyZWF0ZUNlbGwiLCJfaGlnaGxpZ2hCdWlsZFBhdHRlcm4iLCJfaGlnaGxpZ2h0Q2VsbHMiLCJfZ2V0U2hpcFNpemVQYXR0ZXJuIiwiX3RvZ2dsZUhvcml6b250YWwiLCJET01Db250cm9sbGVyIiwiY29udHJvbGxlckFQSSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX2luaXRCb2FyZDIiLCJjYWxsIiwiYm9hcmRBY3Rpb25IYW5kbGVyIiwidXBkYXRlQm9hcmRIaW50c0hhbmRsZXIiLCJfbWFwSGFuZGxlcnMyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidXBkYXRlVUkiLCJnYW1lU3RhdGVEYXRhIiwiY3VycmVudENlbGxDb29yZCIsIl91cGRhdGVCb2FyZDIiLCJfdXBkYXRlQm9hcmRGb2N1czIiLCJpc0dhbWVSdW5uaW5nIiwiX2hpZ2hsaWdoQnVpbGRQYXR0ZXJuMiIsImN1cnJlbnRQbGF5ZXJGbGVldFNpemUiLCJjdXJyZW50VXNlck5hbWUiLCJnZXRJc0hvcml6b250YWwiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJnYW1lYm9hcmRPbmVEYXRhIiwicGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdhbWVib2FyZFR3b0RhdGEiLCJwbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwiaSIsIm5vZGVCb2FyZE9uZSIsImNoaWxkTm9kZXMiLCJkYXRhQm9hcmRPbmUiLCJib2FyZERhdGEiLCJub2RlQm9hcmRUd28iLCJkYXRhQm9hcmRUd28iLCJpc1BsYXllck9uZVR1cm4iLCJpc1JvdW5kUnVubmluZyIsIl91cGRhdGVDZWxsU3RhdHVzMiIsIl91cGRhdGVDZWxsTWV0YURhdGEyIiwicGxheWVyVXNlck5hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lSGFuZGxlciIsIl90b2dnbGVIb3Jpem9udGFsMiIsImJpbmQiLCJyZXN0YXJ0Um91bmRIYW5kbGVyIiwibmV3Qm9hcmRDZWxsT25lIiwiX2NyZWF0ZUNlbGwyIiwibmV3Qm9hcmRDZWxsVHdvIiwiYXBwZW5kQ2hpbGQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJjZWxsTm9kZSIsImNlbGxEYXRhIiwicGxheWVyTmFtZSIsImNvb3JkIiwiZ2V0Q29vcmQiLCJzZXRBdHRyaWJ1dGUiLCJjb29yZFgiLCJjb29yZFkiLCJub2RlIiwiZGF0YSIsInN0YXR1cyIsImdldEhpdFN0YXR1cyIsIk5PVF9ISVQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkhJVF9TSElQIiwiSElUX0NFTEwiLCJpc09jY3VwaWVkIiwibmV3Q2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJjdXJyZW50UGxheWVyTmFtZSIsInNoaXBTaXplUGF0dGVybiIsIl9nZXRTaGlwU2l6ZVBhdHRlcm4yIiwiX2hpZ2hsaWdodENlbGxzMiIsImlzSG9yaXpvbnRhbCIsImN1cnJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsInRvZ2dsZSIsIlBsYXllciIsIlNoaXAiLCJHYW1lYm9hcmQiLCJDb29yZGluYXRlIiwiR2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJfY3VycmVudFBsYXllciIsIl9pc0dhbWVSdW5uaW5nIiwiX2lzUm91bmRSdW5uaW5nIiwiX2lzUGxheWVyT25lVHVybiIsIl9wbGF5ZXJPbmUiLCJfcGxheWVyVHdvIiwiX3BsYXllck9uZUdhbWVib2FyZCIsIl9wbGF5ZXJUd29HYW1lYm9hcmQiLCJfRE9NQ29udHJvbGxlciIsIl9ib2FyZEFjdGlvbkhhbmRsZXIiLCJfc3RhcnRHYW1lSGFuZGxlciIsIl9yZXN0YXJ0Um91bmRIYW5kbGVyIiwiX3VwZGF0ZUdhbWVVSSIsIl91cGRhdGVCb2FyZEhpbnRzSGFuZGxlciIsIl9nZXRHYW1lU3RhdGVEYXRhIiwiX3N0YXJ0Um91bmQiLCJfZW5kR2FtZSIsIl9zd2l0Y2hDdXJyZW50UGxheWVyIiwiX2dldFdpbm5lciIsIl9wbGF5ZXJBdHRhY2siLCJfYXR0YWNrQ2VsbCIsIl9wbGF5ZXJQbGFjZVNoaXAiLCJfcGxhY2VTaGlwIiwiX2dldEFQSUNvbnRhaW5lciIsIkdhbWVDb250cm9sbGVyIiwiX2dldEFQSUNvbnRhaW5lcjIiLCJfdXBkYXRlR2FtZVVJMiIsIl9ib2FyZEFjdGlvbkhhbmRsZXIyIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0NlbGxPd25lciIsImRhdGFzZXQiLCJwbGF5ZXJuYW1lIiwiZ2V0UGxheWVyTmFtZSIsImNvb3JkeCIsImNvb3JkeSIsImNlbGxDb29yZCIsIl9wbGF5ZXJQbGFjZVNoaXAyIiwiX3BsYXllckF0dGFjazIiLCJfc3RhcnRHYW1lSGFuZGxlcjIiLCJfcmVzdGFydFJvdW5kSGFuZGxlcjIiLCJfZ2V0R2FtZVN0YXRlRGF0YTIiLCJfdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIyIiwiZ2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJzZXRDdXJyZW50VXNlck5hbWUiLCJzZXRJc0dhbWVSdW5uaW5nIiwic2V0SXNSb3VuZFJ1bm5pbmciLCJzZXRJc1BsYXllck9uZVR1cm4iLCJzZXRQbGF5ZXJPbmVVc2VyTmFtZSIsInNldFBsYXllclR3b1VzZXJOYW1lIiwic2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdldEdhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwic2V0UGxheWVyT25lRmxlZXRTaXplIiwiZmxlZXRTaXplIiwic2V0UGxheWVyVHdvRmxlZXRTaXplIiwic2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSIsImJ1aWxkIiwiX3N0YXJ0Um91bmQyIiwiZ2V0U2hpcHMiLCJsZW5ndGgiLCJfZW5kR2FtZTIiLCJwbGF5ZXJXaW5uZXIiLCJfc3dpdGNoQ3VycmVudFBsYXllcjIiLCJfZ2V0V2lubmVyMiIsImFsbFNoaXBzU3VuayIsIl9hdHRhY2tDZWxsMiIsIndpbm5lciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Qm9hcmQiLCJyZWNlaXZlQXR0YWNrIiwiX3BsYWNlU2hpcDIiLCJuZXdTaGlwIiwiaXNQbGFjZWQiLCJwbGFjZVNoaXAiLCJhZGRTaGlwIiwiX2Nvb3JkIiwiX3NoaXAiLCJfaXNPY2N1cGllZCIsIl9oYXNCZWVuSGl0IiwiQm9hcmRDZWxsIiwib2NjdXB5Iiwic2hpcCIsImhpdCIsInRyeUhpdCIsImdldENvb3JkU3RyaW5nIiwiZ2V0IiwiX2Nvb3JkWCIsIl9jb29yZFkiLCJOdW1iZXIiLCJwYXJzZUludCIsIkdhbWVib2FyZERhdGFCdWlsZGVyIiwiX3dpZHRoIiwiX2hlaWdodCIsIl9ib2FyZCIsIl9zaGlwTGlzdCIsIl9jYW5QbGFjZSIsIl9jYW5QbGFjZTIiLCJnZXRDb29yZFN0YXJ0IiwicHVzaCIsImJvYXJkQ2VsbCIsImdhbWVib2FyZERhdGFCdWlsZGVyIiwiZ2FtZWJvYXJkRGF0YSIsInNldEJvYXJkRGF0YSIsInNldFBsYXllclVzZXJOYW1lIiwic2V0QWxsU2hpcHNTdW5rIiwiZXZlcnkiLCJpc1N1bmsiLCJjb29yZFN0YXJ0IiwieCIsInkiLCJlbXB0eUNlbGwiLCJCVUlMRElOR19TSElQIiwidXNlck5hbWUiLCJfcGxheWVyTmFtZSIsIl9oaXRMb2ciLCJfcGxheWVyU2hpcHMiLCJsb2dIaXQiLCJnZXRIaXRMb2ciLCJzbGljZSIsInJlc2V0VXNlciIsIlNoaXBQaWVjZSIsIl90aW1lc0hpdCIsIl9zaGlwUGllY2VzIiwiX2Nvb3JkU3RhcnQiLCJfYnVpbGRTaGlwIiwiaG9yaXpvbnRhbCIsIl9idWlsZFNoaXAyIiwiaGl0Q29vcmQiLCJzaGlwUGllY2UiLCJmaW5kIiwicGllY2VDb29yZCIsInVuZGVmaW5lZCIsInNoaXBQaWVjZUNvb3JkIiwiX2hpdFN0YXR1cyIsIkdhbWVTdGF0ZURhdGEiLCJfY3VycmVudFBsYXllclVzZXJOYW1lIiwiX3BsYXllck9uZVVzZXJOYW1lIiwiX3BsYXllclR3b1VzZXJOYW1lIiwiX3BsYXllck9uZUdhbWVib2FyZERhdGEiLCJfcGxheWVyVHdvR2FtZWJvYXJkRGF0YSIsIl9wbGF5ZXJPbmVGbGVldFNpemUiLCJfcGxheWVyVHdvRmxlZXRTaXplIiwiX2N1cnJlbnRQbGF5ZXJGbGVldFNpemUiLCJzZXQiLCJwbGF5ZXJPbmVVc2VyTmFtZSIsInBsYXllclR3b1VzZXJOYW1lIiwicGxheWVyT25lRmxlZXRTaXplIiwicGxheWVyVHdvRmxlZXRTaXplIiwiX2dhbWVTdGF0ZURhdGEiLCJyZXNldCIsIkdhbWVib2FyZERhdGEiLCJfYm9hcmREYXRhIiwiX3BsYXllclVzZXJOYW1lIiwiX2FsbFNoaXBzU3VuayIsImJvYXJkIiwiYm9hcmRDb3B5IiwiZm9yRWFjaCIsInJvdyIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2dhbWVib2FyZERhdGEiLCJfcmVzZXQiLCJHYW1lQm9hcmREYXRhQnVpbGRlciIsImdhbWVib2FyZCIsIl9yZXNldDIiLCJjb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==