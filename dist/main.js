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
var _isComputerOn = /*#__PURE__*/new WeakMap();
var _DOMController = /*#__PURE__*/new WeakMap();
var _boardActionHandler = /*#__PURE__*/new WeakSet();
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
  _classPrivateFieldInitSpec(this, _isComputerOn, {
    writable: true,
    value: true
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
  if (_classPrivateFieldGet(this, _isComputerOn) === true && _classPrivateFieldGet(this, _isPlayerOneTurn) === false) {
    _classPrivateMethodGet(this, _computerActionHandler, _computerActionHandler2).call(this);
  }
  _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this, cellCoord);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXlEO0FBQzlCO0FBRTNCLElBQU1HLFVBQVUsR0FBRyxJQUFJaEssa0VBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Cb2FyZENlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Db29yZGluYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvSGl0U3RhdHVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1NoaXBQaWVjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVib2FyZERhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVib2FyZERhdGFCdWlsZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4uL2VudGl0aWVzL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBET01Db250cm9sbGVyIHtcbiAgI0JPQVJEX1dJRFRIID0gMTA7XG5cbiAgI0JPQVJEX0hFSUdIVCA9IDEwO1xuXG4gICNDRUxMX0NPVU5UID0gMTAwO1xuXG4gICNib2FyZFBsYXllck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1vbmUnKTtcblxuICAjYm9hcmRQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtdHdvJyk7XG5cbiAgI3N0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XG5cbiAgI3N3aXRjaEF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9yaXpvbnRhbC1zdGF0dXMnKTtcblxuICAjcmVzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydC1nYW1lJyk7XG5cbiAgI2JvYXJkSW5pdCA9IGZhbHNlO1xuXG4gICNpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5ib2FyZEFjdGlvbkhhbmRsZXIsIGNvbnRyb2xsZXJBUEkudXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgIHRoaXMuI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpO1xuICB9XG5cbiAgdXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCkge1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkKGdhbWVTdGF0ZURhdGEpO1xuICAgIHRoaXMuI3VwZGF0ZUJvYXJkRm9jdXMoZ2FtZVN0YXRlRGF0YSk7XG5cbiAgICBpZiAoY3VycmVudENlbGxDb29yZCAmJiBnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuI2hpZ2hsaWdoQnVpbGRQYXR0ZXJuKGN1cnJlbnRDZWxsQ29vcmQsIGdhbWVTdGF0ZURhdGEuY3VycmVudFBsYXllckZsZWV0U2l6ZSwgZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVCb2FyZChnYW1lU3RhdGVEYXRhKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkT25lRGF0YSA9IGdhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICBjb25zdCBnYW1lYm9hcmRUd29EYXRhID0gZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNDRUxMX0NPVU5UOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5vZGVCb2FyZE9uZSA9IHRoaXMuI2JvYXJkUGxheWVyT25lLmNoaWxkTm9kZXNbaV07XG4gICAgICBjb25zdCBkYXRhQm9hcmRPbmUgPSBnYW1lYm9hcmRPbmVEYXRhLmJvYXJkRGF0YVtpXTtcblxuICAgICAgY29uc3Qgbm9kZUJvYXJkVHdvID0gdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZFR3byA9IGdhbWVib2FyZFR3b0RhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICAvLyBUbyBoaWRlIGZpcnN0IHBsYXllcidzIGJvYXJkIGR1cmluZyBidWlsZGluZyBwaGFzZVxuICAgICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNQbGF5ZXJPbmVUdXJuID09PSBmYWxzZSAmJiBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lLCAhZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRPbmUsIGRhdGFCb2FyZE9uZSwgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsIGdhbWVib2FyZE9uZURhdGEucGxheWVyVXNlck5hbWUpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvLCBnYW1lYm9hcmRUd29EYXRhLnBsYXllclVzZXJOYW1lKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlQm9hcmRGb2N1cyhnYW1lU3RhdGVEYXRhKSB7XG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgc3dpdGNoIChnYW1lU3RhdGVEYXRhLmN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICBjYXNlICdQbGF5ZXIgT25lJzpcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICB0aGlzLiNib2FyZFBsYXllclR3by5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1hY3RpdmUtYnVpbGQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1idWlsZCcpO1xuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWJ1aWxkJyk7XG5cbiAgICAgIHN3aXRjaCAoZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGxheWVyIE9uZSc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxheWVyIFR3byc6XG4gICAgICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtYWN0aXZlLWF0dGFjaycpO1xuICAgICAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZS1hdHRhY2snKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIEJvYXJkIEluaXRpYWxpemF0aW9uXG5cbiAgI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnN0YXJ0R2FtZUhhbmRsZXIpO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmRIYW5kbGVyKTtcbiAgfVxuXG4gICNpbml0Qm9hcmQoYm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jQ0VMTF9DT1VOVDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxPbmUgPSB0aGlzLiNjcmVhdGVDZWxsKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpO1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsVHdvID0gdGhpcy4jY3JlYXRlQ2VsbChib2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcblxuICAgICAgdGhpcy4jYm9hcmRQbGF5ZXJPbmUuYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsT25lKTtcbiAgICAgIHRoaXMuI2JvYXJkUGxheWVyVHdvLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbFR3byk7XG4gICAgfVxuXG4gICAgdGhpcy4jYm9hcmRJbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIENlbGwgQ3JlYXRpb24vU3RhdHVzTXV0YXRpb25cblxuICAjdXBkYXRlQ2VsbE1ldGFEYXRhKGNlbGxOb2RlLCBjZWxsRGF0YSwgcGxheWVyTmFtZSkge1xuICAgIGNvbnN0IGNvb3JkID0gY2VsbERhdGEuZ2V0Q29vcmQoKTtcblxuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHgnLCBjb29yZC5jb29yZFgpO1xuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHknLCBjb29yZC5jb29yZFkpO1xuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGF5ZXJuYW1lJywgcGxheWVyTmFtZSk7XG4gIH1cblxuICAjdXBkYXRlQ2VsbFN0YXR1cyhjZWxsTm9kZSwgY2VsbERhdGEsIGlzUm91bmRSdW5uaW5nKSB7XG4gICAgaWYgKCFjZWxsTm9kZSB8fCAhY2VsbERhdGEpIHJldHVybjtcblxuICAgIGNvbnN0IG5vZGUgPSBjZWxsTm9kZTtcbiAgICBjb25zdCBkYXRhID0gY2VsbERhdGE7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdldEhpdFN0YXR1cygpO1xuXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuTk9UX0hJVDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkZGRkZGJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLkhJVF9TSElQOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRjAwMDAnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX0NFTEw6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNlbGxEYXRhLmlzT2NjdXBpZWQgJiYgaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgfVxuXG4gICNjcmVhdGVDZWxsKGJvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIpIHtcbiAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNlbGwnKTtcbiAgICBuZXdDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9hcmRBY3Rpb25IYW5kbGVyKTtcbiAgICBuZXdDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcblxuICAgIHJldHVybiBuZXdDZWxsO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gQ2VsbCBCdWlsZGluZyBQYXRoIEhpbnRpbmdcblxuICAjaGlnaGxpZ2hCdWlsZFBhdHRlcm4oY29vcmQsIGN1cnJlbnRQbGF5ZXJGbGVldFNpemUsIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3Qgc2hpcFNpemVQYXR0ZXJuID0gdGhpcy4jZ2V0U2hpcFNpemVQYXR0ZXJuKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpO1xuXG4gICAgdGhpcy4jaGlnaGxpZ2h0Q2VsbHMoY29vcmQsIHNoaXBTaXplUGF0dGVybiwgY3VycmVudFBsYXllck5hbWUpO1xuICB9XG5cbiAgI2hpZ2hsaWdodENlbGxzKGNvb3JkLCBzaGlwU2l6ZVBhdHRlcm4sIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jaXNIb3Jpem9udGFsO1xuXG4gICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZVBhdHRlcm47IGkgKz0gMSkge1xuICAgICAgICAgIGlmICgoY29vcmQuY29vcmRYICsgc2hpcFNpemVQYXR0ZXJuKSAtIDEgPiB0aGlzLiNCT0FSRF9XSURUSCkgYnJlYWs7XG4gICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1jb29yZHg9XCIke2Nvb3JkLmNvb3JkWCArIGl9XCJdW2RhdGEtY29vcmR5PVwiJHtjb29yZC5jb29yZFl9XCJdW2RhdGEtcGxheWVybmFtZT1cIiR7Y3VycmVudFBsYXllck5hbWV9XCJdYCk7XG4gICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZVBhdHRlcm47IGkgKz0gMSkge1xuICAgICAgICAgIGlmICgoY29vcmQuY29vcmRZICsgc2hpcFNpemVQYXR0ZXJuKSAtIDEgPiB0aGlzLiNCT0FSRF9IRUlHSFQpIGJyZWFrO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtY29vcmR4PVwiJHtjb29yZC5jb29yZFh9XCJdW2RhdGEtY29vcmR5PVwiJHtjb29yZC5jb29yZFkgKyBpfVwiXVtkYXRhLXBsYXllcm5hbWU9XCIke2N1cnJlbnRQbGF5ZXJOYW1lfVwiXWApO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gICNnZXRTaGlwU2l6ZVBhdHRlcm4oY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgIHN3aXRjaCAoY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDI6XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAjdG9nZ2xlSG9yaXpvbnRhbCgpIHtcbiAgICB0aGlzLiNpc0hvcml6b250YWwgPSAhdGhpcy4jaXNIb3Jpem9udGFsO1xuICAgIHRoaXMuI3N3aXRjaEF4aXNCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLWFjdGl2ZScpO1xuICB9XG5cbiAgZ2V0SXNIb3Jpem9udGFsKCkgeyByZXR1cm4gdGhpcy4jaXNIb3Jpem9udGFsIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9lbnRpdGllcy9QbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9lbnRpdGllcy9TaGlwXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9lbnRpdGllcy9HYW1lYm9hcmRcIjtcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuLi9lbnRpdGllcy9Db29yZGluYXRlXCI7XG5pbXBvcnQgR2FtZVN0YXRlRGF0YUJ1aWxkZXIgZnJvbSBcIi4uL2VudGl0aWVzL2RhdGFTdGF0ZUNvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAjY3VycmVudFBsYXllciA9IG51bGw7XG5cbiAgI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAjcGxheWVyT25lID0gbnVsbDtcblxuICAjcGxheWVyVHdvID0gbnVsbDtcblxuICAjcGxheWVyT25lR2FtZWJvYXJkID0gbnVsbDtcblxuICAjcGxheWVyVHdvR2FtZWJvYXJkID0gbnVsbDtcblxuICAjaXNDb21wdXRlck9uID0gdHJ1ZTtcblxuICAjRE9NQ29udHJvbGxlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jRE9NQ29udHJvbGxlciA9IG5ldyBET01Db250cm9sbGVyKHRoaXMuI2dldEFQSUNvbnRhaW5lcigpKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgLy8gQ2FsbGJhY2sgdG8gbGV0IG90aGVyIGxheWVycyBvZiBwcm9ncmFtIGludGVyYWN0IHdpdGggb3VyIGdhbWUgY29udHJvbGxlclxuICAjYm9hcmRBY3Rpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGNvbnN0IGlzQ2VsbE93bmVyID0gY2VsbE5vZGUuZGF0YXNldC5wbGF5ZXJuYW1lID09PSB0aGlzLiNjdXJyZW50UGxheWVyLmdldFBsYXllck5hbWUoKTtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLiNET01Db250cm9sbGVyLmdldElzSG9yaXpvbnRhbCgpO1xuXG4gICAgY29uc3QgY29vcmRYID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHg7XG4gICAgY29uc3QgY29vcmRZID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHk7XG5cbiAgICBjb25zdCBjZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG5cbiAgICBzd2l0Y2ggKHRoaXMuI2lzUm91bmRSdW5uaW5nKSB7XG4gICAgICBjYXNlIGZhbHNlOiB7XG4gICAgICAgIC8vIHRvIGxldCBwbGF5ZXIgcGxhY2Ugc2hpcHMgb24gSElTIE9XTiBib2FyZCBvbmx5XG4gICAgICAgIGlmIChpc0NlbGxPd25lciA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgdGhpcy4jcGxhY2VTaGlwSGFuZGxlcihjZWxsQ29vcmQsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgIC8vIHRvIGxldCBwbGF5ZXIgYXR0YWNrIHNoaXBzIG9uIEhJUyBPUFBPTkVOVCdTIGJvYXJkIG9ubHlcbiAgICAgICAgaWYgKGlzQ2VsbE93bmVyID09PSB0cnVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI2F0dGFja0hhbmRsZXIoY2VsbENvb3JkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jaXNDb21wdXRlck9uID09PSB0cnVlICYmIHRoaXMuI2lzUGxheWVyT25lVHVybiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuI2NvbXB1dGVyQWN0aW9uSGFuZGxlcigpO1xuICAgIH1cblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjZWxsQ29vcmQpO1xuICB9XG5cbiAgI2NvbXB1dGVyQWN0aW9uSGFuZGxlcigpIHtcbiAgICBpZih0aGlzLiNpc0dhbWVSdW5uaW5nID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgaWYodGhpcy4jaXNSb3VuZFJ1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuI2NvbXB1dGVyQXR0YWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2NvbXB1dGVyQnVpbGRGbGVldCgpO1xuICAgIH1cbiAgfVxuXG4gICNjb21wdXRlckF0dGFjaygpIHtcbiAgICBsZXQgcm5kQ29vcmQgPSBudWxsO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgIHJuZENvb3JkID0gdGhpcy4jZ2V0UmFuZG9tQ29vcmQoKTtcblxuICAgIHJlc3VsdCA9IHRoaXMuI2F0dGFja0hhbmRsZXIocm5kQ29vcmQpO1xuXG4gICAgY29uc29sZS5sb2coYFJORCBYOiAke3JuZENvb3JkLmNvb3JkWH0gUk5EIFk6ICR7cm5kQ29vcmQuY29vcmRZfWApO1xuICAgIGNvbnNvbGUubG9nKGBSRVNVTFQ6ICR7cmVzdWx0fWApO1xuICB9XG5cbiAgI2NvbXB1dGVyQnVpbGRGbGVldCgpIHtcbiAgICBsZXQgcm5kQ29vcmQgPSBudWxsO1xuICAgIGxldCBybmRJc0hvcml6b250YWwgPSBmYWxzZTtcblxuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgIHdoaWxlICh0aGlzLiNjdXJyZW50UGxheWVyLmZsZWV0U2l6ZSAhPT0gNSkge1xuICAgICAgcm5kQ29vcmQgPSB0aGlzLiNnZXRSYW5kb21Db29yZCgpO1xuXG4gICAgICBybmRJc0hvcml6b250YWwgPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpO1xuICAgICAgcmVzdWx0ID0gdGhpcy4jcGxhY2VTaGlwSGFuZGxlcihybmRDb29yZCwgcm5kSXNIb3Jpem9udGFsKTtcblxuICAgICAgY29uc29sZS5sb2coYFJORCBYOiAke3JuZENvb3JkLmNvb3JkWH0gUk5EIFk6ICR7cm5kQ29vcmQuY29vcmRZfWApO1xuICAgICAgY29uc29sZS5sb2coYFJFU1VMVDogJHtyZXN1bHR9YCk7XG4gICAgfVxuICB9XG5cbiAgI2dldFJhbmRvbUNvb3JkKCkge1xuICAgIGNvbnN0IHJuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQud2lkdGggKyAxKTtcbiAgICBjb25zdCBybmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmhlaWdodCArIDEpO1xuXG4gICAgY29uc3Qgcm5kQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShybmRYLCBybmRZKTtcblxuICAgIHJldHVybiBybmRDb29yZDtcbiAgfVxuXG4gICNzdGFydEdhbWVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSB0cnVlKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgI3Jlc3RhcnRSb3VuZEhhbmRsZXIoKSB7XG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdQbGF5ZXIgT25lJyk7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKSB7XG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IHRoaXMuI2dldEdhbWVTdGF0ZURhdGEoKTtcblxuICAgIHRoaXMuI0RPTUNvbnRyb2xsZXIudXBkYXRlVUkoZ2FtZVN0YXRlRGF0YSwgY3VycmVudENlbGxDb29yZCk7XG4gIH1cblxuICAjdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmIChjZWxsTm9kZS5kYXRhc2V0LnBsYXllcm5hbWUgIT09IHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb29yZFggPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeDtcbiAgICBjb25zdCBjb29yZFkgPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeTtcblxuICAgIGNvbnN0IGN1cnJlbnRDZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG5cbiAgICB0aGlzLiN1cGRhdGVHYW1lVUkoY3VycmVudENlbGxDb29yZCk7XG4gIH1cblxuICAjZ2V0R2FtZVN0YXRlRGF0YSgpIHtcbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhQnVpbGRlciA9IG5ldyBHYW1lU3RhdGVEYXRhQnVpbGRlcigpO1xuXG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YSA9IGdhbWVTdGF0ZURhdGFCdWlsZGVyXG4gICAgICAuc2V0Q3VycmVudFVzZXJOYW1lKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldElzR2FtZVJ1bm5pbmcodGhpcy4jaXNHYW1lUnVubmluZylcbiAgICAgIC5zZXRJc1JvdW5kUnVubmluZyh0aGlzLiNpc1JvdW5kUnVubmluZylcbiAgICAgIC5zZXRJc1BsYXllck9uZVR1cm4odGhpcy4jaXNQbGF5ZXJPbmVUdXJuKVxuICAgICAgLnNldFBsYXllck9uZVVzZXJOYW1lKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0UGxheWVyVHdvVXNlck5hbWUodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5nZXRHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJOYW1lKCkpKVxuICAgICAgLnNldFBsYXllclR3b0dhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyVHdvLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuc2V0UGxheWVyT25lRmxlZXRTaXplKHRoaXMuI3BsYXllck9uZS5mbGVldFNpemUpXG4gICAgICAuc2V0UGxheWVyVHdvRmxlZXRTaXplKHRoaXMuI3BsYXllclR3by5mbGVldFNpemUpXG4gICAgICAuc2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSh0aGlzLiNjdXJyZW50UGxheWVyLmZsZWV0U2l6ZSlcbiAgICAgIC5idWlsZCgpO1xuXG4gICAgcmV0dXJuIGdhbWVTdGF0ZURhdGE7XG4gIH1cblxuICAvLyBUbyBjaGVjayBpZiByb3VuZCBzaG91bGQgc3RhcnQgb25jZSBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAjc3RhcnRSb3VuZCgpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lLmdldFNoaXBzKCkubGVuZ3RoID09PSA1ICYmIHRoaXMuI3BsYXllclR3by5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAjZW5kR2FtZShwbGF5ZXJXaW5uZXIpIHtcbiAgICBpZiAocGxheWVyV2lubmVyID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gICNzd2l0Y2hDdXJyZW50UGxheWVyKCkge1xuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUd287XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfVxuXG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gIXRoaXMuI2lzUGxheWVyT25lVHVybjtcbiAgfVxuXG4gICNnZXRXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3bztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgI2F0dGFja0hhbmRsZXIoY29vcmQpIHtcbiAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSB0aGlzLiNhdHRhY2tDZWxsKGNvb3JkKTtcbiAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG5cbiAgICBjb25zdCB3aW5uZXIgPSB0aGlzLiNnZXRXaW5uZXIoKTtcblxuICAgIGlmICh3aW5uZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuI2VuZEdhbWUod2lubmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKGBwbGF5ZXIgJHt3aW5uZXIuZ2V0UGxheWVyTmFtZSgpfSB3b25gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xuICB9XG5cbiAgI2F0dGFja0NlbGwoY29vcmQpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIGN1cnJlbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgI3BsYWNlU2hpcEhhbmRsZXIoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKTtcblxuICAgIHRoaXMuI3N0YXJ0Um91bmQoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAjcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcbiAgICBsZXQgbmV3U2hpcCA9IG51bGw7XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9XG5cbiAgICAvLyBUbyBidWlsZCBzaGlwcyBpbiBwcmUtZGV0ZXJtaW5lZCBwYXR0ZXJuICg1LDQsMywzLDIpXG4gICAgc3dpdGNoICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDQ6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBQbGF5ZXJzIHNob3VsZCB0YWtlIHR1cm5zIGFmdGVyIGJ1aWxkaW5nIHRoZWlyIGVudGlyZSBmbGVldFxuICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgdGhpcy4jY3VycmVudFBsYXllci5hZGRTaGlwKG5ld1NoaXApO1xuXG4gICAgICBpZiAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICB0aGlzLiNzd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgaXNQbGFjZWQ6ICR7aXNQbGFjZWR9YCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAjZ2V0QVBJQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydEdhbWVIYW5kbGVyOiB0aGlzLiNzdGFydEdhbWVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBib2FyZEFjdGlvbkhhbmRsZXI6IHRoaXMuI2JvYXJkQWN0aW9uSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgcmVzdGFydFJvdW5kSGFuZGxlcjogdGhpcy4jcmVzdGFydFJvdW5kSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgdXBkYXRlQm9hcmRIaW50c0hhbmRsZXI6IHRoaXMuI3VwZGF0ZUJvYXJkSGludHNIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcbiIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4vSGl0U3RhdHVzXCI7XG5cbmNsYXNzIEJvYXJkQ2VsbCB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNzaGlwID0gbnVsbDtcblxuICAgICNpc09jY3VwaWVkID0gZmFsc2U7XG5cbiAgICAjaGFzQmVlbkhpdCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgb2NjdXB5KHNoaXApIHtcbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNpc09jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4jc2hpcCA9IHNoaXA7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICBpZiAodGhpcy4jaGFzQmVlbkhpdCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2hhc0JlZW5IaXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLiNzaGlwKSB7XG4gICAgICAgICAgICB0aGlzLiNzaGlwLnRyeUhpdCh0aGlzLiNjb29yZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRDb29yZCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkOyB9XG5cbiAgICBnZXRDb29yZFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBYOiAke3RoaXMuI2Nvb3JkLmNvb3JkWH0gWTogJHt0aGlzLiNjb29yZC5jb29yZFl9YDtcbiAgICB9XG5cbiAgICBnZXRIaXRTdGF0dXMoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy4jaGFzQmVlbkhpdCkge1xuICAgICAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5OT1RfSElUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9TSElQO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5ISVRfQ0VMTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaXNPY2N1cGllZCgpIHsgcmV0dXJuIHRoaXMuI2lzT2NjdXBpZWQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRDZWxsOyIsImNsYXNzIENvb3JkaW5hdGUge1xuICAgICNjb29yZFggPSAwO1xuXG4gICAgI2Nvb3JkWSA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZFggPSBjb29yZFg7XG4gICAgICAgIHRoaXMuI2Nvb3JkWSA9IGNvb3JkWTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHRoaXMuI2Nvb3JkWCwgMTApOyB9XG5cbiAgICBnZXQgY29vcmRZKCkgeyByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHRoaXMuI2Nvb3JkWSwgMTApOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3JkaW5hdGU7IiwiaW1wb3J0IEJvYXJkQ2VsbCBmcm9tIFwiLi9Cb2FyZENlbGxcIjtcbmltcG9ydCBHYW1lYm9hcmREYXRhQnVpbGRlciBmcm9tIFwiLi9kYXRhU3RhdGVDb250YWluZXJzL0dhbWVib2FyZERhdGFCdWlsZGVyXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgI3dpZHRoID0gMTA7XG5cbiAgICAjaGVpZ2h0ID0gMTA7XG5cbiAgICAjYm9hcmQgPSBbXTtcblxuICAgIC8vIHN3YXBwaW5nIHN1cHBvc2VkbHkgWCBhbmQgWSBjb29yZGluYXRlcyBoZXJlIGJlY2F1c2Ugb2YgZmFpbGVkIGF0dGVtcHQgdG8gaW1wbGVtZW50IDJEIGFycmF5cyBpbiBKYXZhU2NyaXB0Li4uXG4gICAgI3NoaXBMaXN0ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jaW5pdEJvYXJkKCk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHNoaXAsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy4jY2FuUGxhY2Uoc2hpcC5nZXRDb29yZFN0YXJ0KCksIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLiNzaGlwTGlzdC5wdXNoKHNoaXApO1xuXG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxXVsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMSkgKyBpXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxKSArIGldW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDFdO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNib2FyZFtjb29yZC5jb29yZFkgLSAxXVtjb29yZC5jb29yZFggLSAxXS5oaXQoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0R2FtZWJvYXJkRGF0YShwbGF5ZXJVc2VyTmFtZSkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhQnVpbGRlciA9IG5ldyBHYW1lYm9hcmREYXRhQnVpbGRlcigpO1xuXG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGEgPSBnYW1lYm9hcmREYXRhQnVpbGRlci5zZXRCb2FyZERhdGEodGhpcy4jYm9hcmQpXG4gICAgICAgIC5zZXRQbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSlcbiAgICAgICAgLnNldEFsbFNoaXBzU3Vuayh0aGlzLmFsbFNoaXBzU3VuaygpKVxuICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBnYW1lYm9hcmREYXRhO1xuICAgIH1cbiAgICBcbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGlwTGlzdC5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cbiAgICBcbiAgICAjY2FuUGxhY2UoY29vcmRTdGFydCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgICAgIC8vIHRvIGV4Y2x1ZGUgc3RhcnRpbmcgcG9pbnQgZnJvbSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmICgoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGxlbmd0aCA+IHRoaXMuI3dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW2Nvb3JkU3RhcnQuY29vcmRZIC0gMV1bKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgICAgICAgIC8vIHRvIGV4Y2x1ZGUgc3RhcnRpbmcgcG9pbnQgZnJvbSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmICgoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGxlbmd0aCA+IHRoaXMuI2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGldW2Nvb3JkU3RhcnQuY29vcmRYIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2luaXRCb2FyZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkLmxlbmd0aCAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy4jd2lkdGg7IHggKz0gMSkge1xuICAgICAgICAgICAgdGhpcy4jYm9hcmQucHVzaChbXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy4jaGVpZ2h0OyB5ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBzd2FwcGluZyB2YWx1ZXMgZHVlIHRvIHdyb25nIGNlbGwgZGF0YSByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5Q2VsbCA9IG5ldyBCb2FyZENlbGwoeSArIDEsIHggKyAxKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2JvYXJkW3hdLnB1c2goZW1wdHlDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMuI3dpZHRofTtcblxuICAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLiNoZWlnaHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJmdW5jdGlvbiBoaXRTdGF0dXMoKSB7XG4gICAgY29uc3QgTk9UX0hJVCA9ICdOT1RfSElUJztcbiAgICBjb25zdCBISVRfQ0VMTCA9ICdISVRfQ0VMTCc7XG4gICAgY29uc3QgSElUX1NISVAgPSAnSElUX1NISVAnO1xuICAgIGNvbnN0IEJVSUxESU5HX1NISVAgPSAnQlVJTERJTkdfU0hJUCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBOT1RfSElULFxuICAgICAgICBISVRfQ0VMTCxcbiAgICAgICAgSElUX1NISVAsXG4gICAgICAgIEJVSUxESU5HX1NISVBcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGl0U3RhdHVzOyIsImNsYXNzIFBsYXllciB7XG4gICNwbGF5ZXJOYW1lID0gJyc7XG5cbiAgI2hpdExvZyA9IFtdO1xuXG4gICNwbGF5ZXJTaGlwcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHVzZXJOYW1lKSB7XG4gICAgdGhpcy4jcGxheWVyTmFtZSA9IHVzZXJOYW1lO1xuICB9XG5cbiAgbG9nSGl0KGNvb3JkKSB7XG4gICAgdGhpcy4jaGl0TG9nLnB1c2goY29vcmQpO1xuICB9XG5cbiAgYWRkU2hpcChzaGlwKSB7XG4gICAgdGhpcy4jcGxheWVyU2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIGdldEhpdExvZygpIHtcbiAgICByZXR1cm4gdGhpcy4jaGl0TG9nLnNsaWNlKCk7XG4gIH1cblxuICBnZXRTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyU2hpcHMuc2xpY2UoKTtcbiAgfVxuXG4gIHJlc2V0VXNlcigpIHtcbiAgICB0aGlzLiNoaXRMb2cgPSBbXTtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcyA9IFtdO1xuICB9XG5cbiAgZ2V0UGxheWVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyTmFtZTtcbiAgfTtcblxuICBnZXQgZmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyU2hpcHMubGVuZ3RoOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgU2hpcFBpZWNlIGZyb20gXCIuL1NoaXBQaWVjZVwiO1xuXG5jbGFzcyBTaGlwIHtcbiAgI3RpbWVzSGl0ID0gMDtcblxuICAjc2hpcFBpZWNlcyA9IFtdO1xuICBcbiAgI2Nvb3JkU3RhcnQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIHRoaXMuI2Nvb3JkU3RhcnQgPSBjb29yZFN0YXJ0XG4gICAgdGhpcy4jYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCk7XG4gIH1cblxuICB0cnlIaXQoaGl0Q29vcmQpIHtcbiAgICBjb25zdCBzaGlwUGllY2UgPSB0aGlzLiNzaGlwUGllY2VzLmZpbmQocGllY2VDb29yZCA9PlxuICAgICAgKHBpZWNlQ29vcmQuY29vcmRYID09PSBoaXRDb29yZC5jb29yZFgpICYmIChwaWVjZUNvb3JkLmNvb3JkWSA9PT0gaGl0Q29vcmQuY29vcmRZKVxuICAgICk7XG5cbiAgICBpZiAoc2hpcFBpZWNlID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlOyBcblxuICAgIHRoaXMuI3RpbWVzSGl0ICs9IDE7XG5cbiAgICByZXR1cm4gc2hpcFBpZWNlLmhpdCgpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmV2ZXJ5KHNoaXBQaWVjZSA9PlxuICAgICAgc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICAjYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBzaGlwUGllY2VDb29yZCA9IG51bGw7XG5cbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCArIGksIGNvb3JkU3RhcnQuY29vcmRZKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCwgY29vcmRTdGFydC5jb29yZFkgKyBpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jc2hpcFBpZWNlcy5wdXNoKHNoaXBQaWVjZUNvb3JkKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb29yZFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiNjb29yZFN0YXJ0O1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHsgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMubGVuZ3RoOyB9XG5cbiAgZ2V0IHRpbWVzSGl0KCkgeyByZXR1cm4gdGhpcy4jdGltZXNIaXQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9Db29yZGluYXRlXCI7XG5cbmNsYXNzIFNoaXBQaWVjZSB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNoaXRTdGF0dXMgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy4jaGl0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2hpdFN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRYIH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFk7IH1cblxuICAgIGdldCBoaXRTdGF0dXMoKSB7IHJldHVybiB0aGlzLiNoaXRTdGF0dXM7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcFBpZWNlOyIsImNsYXNzIEdhbWVTdGF0ZURhdGEge1xuICAgICNjdXJyZW50UGxheWVyVXNlck5hbWU7XG5cbiAgICAjaXNHYW1lUnVubmluZztcblxuICAgICNpc1JvdW5kUnVubmluZztcblxuICAgICNpc1BsYXllck9uZVR1cm47XG5cbiAgICAjcGxheWVyT25lVXNlck5hbWU7XG5cbiAgICAjcGxheWVyVHdvVXNlck5hbWU7XG5cbiAgICAjcGxheWVyT25lR2FtZWJvYXJkRGF0YTtcblxuICAgICNwbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuXG4gICAgI3BsYXllck9uZUZsZWV0U2l6ZTtcblxuICAgICNwbGF5ZXJUd29GbGVldFNpemU7XG5cbiAgICAjY3VycmVudFBsYXllckZsZWV0U2l6ZTtcblxuICAgIGdldCBjdXJyZW50VXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNjdXJyZW50UGxheWVyVXNlck5hbWU7IH1cblxuICAgIHNldCBjdXJyZW50VXNlck5hbWUoY3VycmVudFVzZXJOYW1lKSB7IHRoaXMuI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZSA9IGN1cnJlbnRVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IGlzR2FtZVJ1bm5pbmcoKSB7IHJldHVybiB0aGlzLiNpc0dhbWVSdW5uaW5nOyB9XG5cbiAgICBzZXQgaXNHYW1lUnVubmluZyhpc0dhbWVSdW5uaW5nKSB7IHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSBpc0dhbWVSdW5uaW5nOyB9XG5cbiAgICBnZXQgaXNSb3VuZFJ1bm5pbmcoKSB7IHJldHVybiB0aGlzLiNpc1JvdW5kUnVubmluZzsgfVxuXG4gICAgc2V0IGlzUm91bmRSdW5uaW5nKGlzUm91bmRSdW5uaW5nKSB7IHRoaXMuI2lzUm91bmRSdW5uaW5nID0gaXNSb3VuZFJ1bm5pbmc7IH1cblxuICAgIGdldCBpc1BsYXllck9uZVR1cm4oKSB7IHJldHVybiB0aGlzLiNpc1BsYXllck9uZVR1cm47IH1cblxuICAgIHNldCBpc1BsYXllck9uZVR1cm4oaXNQbGF5ZXJPbmVUdXJuKSB7IHRoaXMuI2lzUGxheWVyT25lVHVybiA9IGlzUGxheWVyT25lVHVybjsgfVxuXG4gICAgZ2V0IHBsYXllck9uZVVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVVc2VyTmFtZShwbGF5ZXJPbmVVc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJPbmVVc2VyTmFtZSA9IHBsYXllck9uZVVzZXJOYW1lOyB9XG5cbiAgICBnZXQgcGxheWVyVHdvVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29Vc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllclR3b1VzZXJOYW1lKHBsYXllclR3b1VzZXJOYW1lKSB7IHRoaXMuI3BsYXllclR3b1VzZXJOYW1lID0gcGxheWVyVHdvVXNlck5hbWU7IH1cblxuICAgIGdldCBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgc2V0IHBsYXllck9uZUdhbWVib2FyZERhdGEocGxheWVyT25lR2FtZWJvYXJkRGF0YSkgeyB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhID0gcGxheWVyT25lR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllclR3b0dhbWVib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmREYXRhOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvR2FtZWJvYXJkRGF0YShwbGF5ZXJUd29HYW1lYm9hcmREYXRhKSB7IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZERhdGEgPSBwbGF5ZXJUd29HYW1lYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyT25lRmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgcGxheWVyT25lRmxlZXRTaXplKHBsYXllck9uZUZsZWV0U2l6ZSkgeyB0aGlzLiNwbGF5ZXJPbmVGbGVldFNpemUgPSBwbGF5ZXJPbmVGbGVldFNpemU7IH1cbiAgICBcbiAgICBnZXQgcGxheWVyVHdvRmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVHdvRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvRmxlZXRTaXplKHBsYXllclR3b0ZsZWV0U2l6ZSkgeyB0aGlzLiNwbGF5ZXJUd29GbGVldFNpemUgPSBwbGF5ZXJUd29GbGVldFNpemU7IH1cblxuICAgIGdldCBjdXJyZW50UGxheWVyRmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jY3VycmVudFBsYXllckZsZWV0U2l6ZTsgfVxuXG4gICAgc2V0IGN1cnJlbnRQbGF5ZXJGbGVldFNpemUoY3VycmVudFBsYXllckZsZWV0U2l6ZSkgeyB0aGlzLiNjdXJyZW50UGxheWVyRmxlZXRTaXplID0gY3VycmVudFBsYXllckZsZWV0U2l6ZTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGVEYXRhOyIsImltcG9ydCBHYW1lU3RhdGVEYXRhIGZyb20gXCIuL0dhbWVTdGF0ZURhdGFcIjtcblxuY2xhc3MgR2FtZVN0YXRlRGF0YUJ1aWxkZXIge1xuICAgICNnYW1lU3RhdGVEYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhID0gbmV3IEdhbWVTdGF0ZURhdGEoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50VXNlck5hbWUoY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuY3VycmVudFVzZXJOYW1lID0gY3VycmVudFVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc0dhbWVSdW5uaW5nKGlzR2FtZVJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc0dhbWVSdW5uaW5nID0gaXNHYW1lUnVubmluZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNSb3VuZFJ1bm5pbmcoaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyA9IGlzUm91bmRSdW5uaW5nO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc1BsYXllck9uZVR1cm4oaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNQbGF5ZXJPbmVUdXJuID0gaXNQbGF5ZXJPbmVUdXJuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVVc2VyTmFtZShwbGF5ZXJPbmVVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllck9uZVVzZXJOYW1lID0gcGxheWVyT25lVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b1VzZXJOYW1lKHBsYXllclR3b1VzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvVXNlck5hbWUgPSBwbGF5ZXJUd29Vc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YShwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YSA9IHBsYXllck9uZUdhbWVib2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b0dhbWVib2FyZERhdGEocGxheWVyVHdvR2FtZWJvYXJkRGF0YSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllclR3b0dhbWVib2FyZERhdGEgPSBwbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVGbGVldFNpemUocGxheWVyT25lRmxlZXRTaXplKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lRmxlZXRTaXplID0gcGxheWVyT25lRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJUd29GbGVldFNpemUocGxheWVyVHdvRmxlZXRTaXplKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvRmxlZXRTaXplID0gcGxheWVyVHdvRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50UGxheWVyRmxlZXRTaXplKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5jdXJyZW50UGxheWVyRmxlZXRTaXplID0gY3VycmVudFBsYXllckZsZWV0U2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEgPSBuZXcgR2FtZVN0YXRlRGF0YSgpO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gdGhpcy4jZ2FtZVN0YXRlRGF0YTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICByZXR1cm4gZ2FtZVN0YXRlRGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZURhdGFCdWlsZGVyOyIsImNsYXNzIEdhbWVib2FyZERhdGEge1xuICAgICNib2FyZERhdGEgPSBudWxsO1xuXG4gICAgI3BsYXllclVzZXJOYW1lID0gJyc7XG5cbiAgICAjYWxsU2hpcHNTdW5rID0gbnVsbDtcblxuICAgIHNldEJvYXJkRGF0YShib2FyZCkge1xuICAgICAgICBjb25zdCBib2FyZENvcHkgPSBib2FyZC5zbGljZSgpO1xuICAgICAgICBjb25zdCBib2FyZERhdGEgPSBbXTtcblxuICAgICAgICBib2FyZENvcHkuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgYm9hcmREYXRhLnB1c2goLi4ucm93KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jYm9hcmREYXRhID0gYm9hcmREYXRhO1xuICAgIH1cblxuICAgIGdldCBib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclVzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyVXNlck5hbWUgPSBwbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IGFsbFNoaXBzU3VuaygpIHsgcmV0dXJuIHRoaXMuI2FsbFNoaXBzU3VuazsgfVxuXG4gICAgc2V0IGFsbFNoaXBzU3VuayhhbGxTaGlwc1N1bmspIHsgdGhpcy4jYWxsU2hpcHNTdW5rID0gYWxsU2hpcHNTdW5rOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZERhdGE7IiwiaW1wb3J0IEdhbWVib2FyZERhdGEgZnJvbSBcIi4vR2FtZWJvYXJkRGF0YVwiO1xuXG5jbGFzcyBHYW1lQm9hcmREYXRhQnVpbGRlciB7XG4gICAgI2dhbWVib2FyZERhdGEgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEgPSBuZXcgR2FtZWJvYXJkRGF0YSgpO1xuICAgIH1cblxuICAgIHNldEJvYXJkRGF0YShnYW1lYm9hcmQpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5zZXRCb2FyZERhdGEoZ2FtZWJvYXJkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5wbGF5ZXJVc2VyTmFtZSA9IHBsYXllclVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRBbGxTaGlwc1N1bmsoYWxsU2hpcHNTdW5rKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEuYWxsU2hpcHNTdW5rID0gYWxsU2hpcHNTdW5rO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAjcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEgPSBuZXcgR2FtZWJvYXJkRGF0YSgpO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhID0gdGhpcy4jZ2FtZWJvYXJkRGF0YTtcbiAgICAgICAgdGhpcy4jcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZERhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmREYXRhQnVpbGRlcjsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUtdWktY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJlbTtcblxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdidXR0b24nXG4gICAgJ2JvYXJkJztcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtXG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW07XG59XG5cbi5ib2FyZCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgZ3JpZC1hcmVhOiBib2FyZDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5ib2FyZC1hY3RpdmUtYnVpbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xufVxuXG4uYm9hcmQtYWN0aXZlLWF0dGFjayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmJvYXJkLWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJvYXJkLWNlbGw6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xufVxuXG4uYnV0dG9uIHtcbiAgZ3JpZC1hcmVhOiBidXR0b247XG5cbiAgcGFkZGluZzogMC41cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTs7RUFFUjs7V0FFUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7O0VBRXZCLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLGVBQWU7RUFDZixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtdWktY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2J1dHRvbidcXG4gICAgJ2JvYXJkJztcXG59XFxuXFxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAyZW1cXG59XFxuXFxuLmJvYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMmVtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgZ3JpZC1hcmVhOiBib2FyZDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uYm9hcmQtYWN0aXZlLWJ1aWxkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5ib2FyZC1hY3RpdmUtYXR0YWNrIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmJvYXJkLWNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZC1jZWxsOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbi1hY3RpdmUge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOlsiaGl0U3RhdHVzIiwiX0JPQVJEX1dJRFRIIiwiV2Vha01hcCIsIl9CT0FSRF9IRUlHSFQiLCJfQ0VMTF9DT1VOVCIsIl9ib2FyZFBsYXllck9uZSIsIl9ib2FyZFBsYXllclR3byIsIl9zdGFydEdhbWVCdXR0b24iLCJfc3dpdGNoQXhpc0J1dHRvbiIsIl9yZXN0YXJ0R2FtZUJ1dHRvbiIsIl9ib2FyZEluaXQiLCJfaXNIb3Jpem9udGFsIiwiX3VwZGF0ZUJvYXJkIiwiV2Vha1NldCIsIl91cGRhdGVCb2FyZEZvY3VzIiwiX21hcEhhbmRsZXJzIiwiX2luaXRCb2FyZCIsIl91cGRhdGVDZWxsTWV0YURhdGEiLCJfdXBkYXRlQ2VsbFN0YXR1cyIsIl9jcmVhdGVDZWxsIiwiX2hpZ2hsaWdoQnVpbGRQYXR0ZXJuIiwiX2hpZ2hsaWdodENlbGxzIiwiX2dldFNoaXBTaXplUGF0dGVybiIsIl90b2dnbGVIb3Jpem9udGFsIiwiRE9NQ29udHJvbGxlciIsImNvbnRyb2xsZXJBUEkiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIndyaXRhYmxlIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9pbml0Qm9hcmQyIiwiY2FsbCIsImJvYXJkQWN0aW9uSGFuZGxlciIsInVwZGF0ZUJvYXJkSGludHNIYW5kbGVyIiwiX21hcEhhbmRsZXJzMiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInVwZGF0ZVVJIiwiZ2FtZVN0YXRlRGF0YSIsImN1cnJlbnRDZWxsQ29vcmQiLCJfdXBkYXRlQm9hcmQyIiwiX3VwZGF0ZUJvYXJkRm9jdXMyIiwiaXNHYW1lUnVubmluZyIsIl9oaWdobGlnaEJ1aWxkUGF0dGVybjIiLCJjdXJyZW50UGxheWVyRmxlZXRTaXplIiwiY3VycmVudFVzZXJOYW1lIiwiZ2V0SXNIb3Jpem9udGFsIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiZ2FtZWJvYXJkT25lRGF0YSIsInBsYXllck9uZUdhbWVib2FyZERhdGEiLCJnYW1lYm9hcmRUd29EYXRhIiwicGxheWVyVHdvR2FtZWJvYXJkRGF0YSIsImkiLCJub2RlQm9hcmRPbmUiLCJjaGlsZE5vZGVzIiwiZGF0YUJvYXJkT25lIiwiYm9hcmREYXRhIiwibm9kZUJvYXJkVHdvIiwiZGF0YUJvYXJkVHdvIiwiaXNQbGF5ZXJPbmVUdXJuIiwiaXNSb3VuZFJ1bm5pbmciLCJfdXBkYXRlQ2VsbFN0YXR1czIiLCJfdXBkYXRlQ2VsbE1ldGFEYXRhMiIsInBsYXllclVzZXJOYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZUhhbmRsZXIiLCJfdG9nZ2xlSG9yaXpvbnRhbDIiLCJiaW5kIiwicmVzdGFydFJvdW5kSGFuZGxlciIsIm5ld0JvYXJkQ2VsbE9uZSIsIl9jcmVhdGVDZWxsMiIsIm5ld0JvYXJkQ2VsbFR3byIsImFwcGVuZENoaWxkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiY2VsbE5vZGUiLCJjZWxsRGF0YSIsInBsYXllck5hbWUiLCJjb29yZCIsImdldENvb3JkIiwic2V0QXR0cmlidXRlIiwiY29vcmRYIiwiY29vcmRZIiwibm9kZSIsImRhdGEiLCJzdGF0dXMiLCJnZXRIaXRTdGF0dXMiLCJOT1RfSElUIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJISVRfU0hJUCIsIkhJVF9DRUxMIiwiaXNPY2N1cGllZCIsIm5ld0NlbGwiLCJjcmVhdGVFbGVtZW50IiwiY3VycmVudFBsYXllck5hbWUiLCJzaGlwU2l6ZVBhdHRlcm4iLCJfZ2V0U2hpcFNpemVQYXR0ZXJuMiIsIl9oaWdobGlnaHRDZWxsczIiLCJpc0hvcml6b250YWwiLCJjdXJyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJ0b2dnbGUiLCJQbGF5ZXIiLCJTaGlwIiwiR2FtZWJvYXJkIiwiQ29vcmRpbmF0ZSIsIkdhbWVTdGF0ZURhdGFCdWlsZGVyIiwiX2N1cnJlbnRQbGF5ZXIiLCJfaXNHYW1lUnVubmluZyIsIl9pc1JvdW5kUnVubmluZyIsIl9pc1BsYXllck9uZVR1cm4iLCJfcGxheWVyT25lIiwiX3BsYXllclR3byIsIl9wbGF5ZXJPbmVHYW1lYm9hcmQiLCJfcGxheWVyVHdvR2FtZWJvYXJkIiwiX2lzQ29tcHV0ZXJPbiIsIl9ET01Db250cm9sbGVyIiwiX2JvYXJkQWN0aW9uSGFuZGxlciIsIl9jb21wdXRlckFjdGlvbkhhbmRsZXIiLCJfY29tcHV0ZXJBdHRhY2siLCJfY29tcHV0ZXJCdWlsZEZsZWV0IiwiX2dldFJhbmRvbUNvb3JkIiwiX3N0YXJ0R2FtZUhhbmRsZXIiLCJfcmVzdGFydFJvdW5kSGFuZGxlciIsIl91cGRhdGVHYW1lVUkiLCJfdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIiLCJfZ2V0R2FtZVN0YXRlRGF0YSIsIl9zdGFydFJvdW5kIiwiX2VuZEdhbWUiLCJfc3dpdGNoQ3VycmVudFBsYXllciIsIl9nZXRXaW5uZXIiLCJfYXR0YWNrSGFuZGxlciIsIl9hdHRhY2tDZWxsIiwiX3BsYWNlU2hpcEhhbmRsZXIiLCJfcGxhY2VTaGlwIiwiX2dldEFQSUNvbnRhaW5lciIsIkdhbWVDb250cm9sbGVyIiwiX2dldEFQSUNvbnRhaW5lcjIiLCJfdXBkYXRlR2FtZVVJMiIsIl9ib2FyZEFjdGlvbkhhbmRsZXIyIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0NlbGxPd25lciIsImRhdGFzZXQiLCJwbGF5ZXJuYW1lIiwiZ2V0UGxheWVyTmFtZSIsImNvb3JkeCIsImNvb3JkeSIsImNlbGxDb29yZCIsIl9wbGFjZVNoaXBIYW5kbGVyMiIsIl9hdHRhY2tIYW5kbGVyMiIsIl9jb21wdXRlckFjdGlvbkhhbmRsZXIyIiwiX2NvbXB1dGVyQXR0YWNrMiIsIl9jb21wdXRlckJ1aWxkRmxlZXQyIiwicm5kQ29vcmQiLCJyZXN1bHQiLCJfZ2V0UmFuZG9tQ29vcmQyIiwiY29uc29sZSIsImxvZyIsInJuZElzSG9yaXpvbnRhbCIsImZsZWV0U2l6ZSIsIkJvb2xlYW4iLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJybmRYIiwiZmxvb3IiLCJ3aWR0aCIsInJuZFkiLCJoZWlnaHQiLCJfc3RhcnRHYW1lSGFuZGxlcjIiLCJfcmVzdGFydFJvdW5kSGFuZGxlcjIiLCJfZ2V0R2FtZVN0YXRlRGF0YTIiLCJfdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIyIiwiZ2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJzZXRDdXJyZW50VXNlck5hbWUiLCJzZXRJc0dhbWVSdW5uaW5nIiwic2V0SXNSb3VuZFJ1bm5pbmciLCJzZXRJc1BsYXllck9uZVR1cm4iLCJzZXRQbGF5ZXJPbmVVc2VyTmFtZSIsInNldFBsYXllclR3b1VzZXJOYW1lIiwic2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdldEdhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwic2V0UGxheWVyT25lRmxlZXRTaXplIiwic2V0UGxheWVyVHdvRmxlZXRTaXplIiwic2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSIsImJ1aWxkIiwiX3N0YXJ0Um91bmQyIiwiZ2V0U2hpcHMiLCJsZW5ndGgiLCJfZW5kR2FtZTIiLCJwbGF5ZXJXaW5uZXIiLCJfc3dpdGNoQ3VycmVudFBsYXllcjIiLCJfZ2V0V2lubmVyMiIsImFsbFNoaXBzU3VuayIsImF0dGFja1Jlc3VsdCIsIl9hdHRhY2tDZWxsMiIsIndpbm5lciIsImN1cnJlbnRCb2FyZCIsInJlY2VpdmVBdHRhY2siLCJfcGxhY2VTaGlwMiIsIm5ld1NoaXAiLCJpc1BsYWNlZCIsInBsYWNlU2hpcCIsImFkZFNoaXAiLCJfY29vcmQiLCJfc2hpcCIsIl9pc09jY3VwaWVkIiwiX2hhc0JlZW5IaXQiLCJCb2FyZENlbGwiLCJvY2N1cHkiLCJzaGlwIiwiaGl0IiwidHJ5SGl0IiwiZ2V0Q29vcmRTdHJpbmciLCJnZXQiLCJfY29vcmRYIiwiX2Nvb3JkWSIsIk51bWJlciIsInBhcnNlSW50IiwiR2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX2JvYXJkIiwiX3NoaXBMaXN0IiwiX2NhblBsYWNlIiwiX2NhblBsYWNlMiIsImdldENvb3JkU3RhcnQiLCJwdXNoIiwiYm9hcmRDZWxsIiwiZ2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJnYW1lYm9hcmREYXRhIiwic2V0Qm9hcmREYXRhIiwic2V0UGxheWVyVXNlck5hbWUiLCJzZXRBbGxTaGlwc1N1bmsiLCJldmVyeSIsImlzU3VuayIsImNvb3JkU3RhcnQiLCJ4IiwieSIsImVtcHR5Q2VsbCIsIkJVSUxESU5HX1NISVAiLCJ1c2VyTmFtZSIsIl9wbGF5ZXJOYW1lIiwiX2hpdExvZyIsIl9wbGF5ZXJTaGlwcyIsImxvZ0hpdCIsImdldEhpdExvZyIsInNsaWNlIiwicmVzZXRVc2VyIiwiU2hpcFBpZWNlIiwiX3RpbWVzSGl0IiwiX3NoaXBQaWVjZXMiLCJfY29vcmRTdGFydCIsIl9idWlsZFNoaXAiLCJob3Jpem9udGFsIiwiX2J1aWxkU2hpcDIiLCJoaXRDb29yZCIsInNoaXBQaWVjZSIsImZpbmQiLCJwaWVjZUNvb3JkIiwidW5kZWZpbmVkIiwic2hpcFBpZWNlQ29vcmQiLCJfaGl0U3RhdHVzIiwiR2FtZVN0YXRlRGF0YSIsIl9jdXJyZW50UGxheWVyVXNlck5hbWUiLCJfcGxheWVyT25lVXNlck5hbWUiLCJfcGxheWVyVHdvVXNlck5hbWUiLCJfcGxheWVyT25lR2FtZWJvYXJkRGF0YSIsIl9wbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwiX3BsYXllck9uZUZsZWV0U2l6ZSIsIl9wbGF5ZXJUd29GbGVldFNpemUiLCJfY3VycmVudFBsYXllckZsZWV0U2l6ZSIsInNldCIsInBsYXllck9uZVVzZXJOYW1lIiwicGxheWVyVHdvVXNlck5hbWUiLCJwbGF5ZXJPbmVGbGVldFNpemUiLCJwbGF5ZXJUd29GbGVldFNpemUiLCJfZ2FtZVN0YXRlRGF0YSIsInJlc2V0IiwiR2FtZWJvYXJkRGF0YSIsIl9ib2FyZERhdGEiLCJfcGxheWVyVXNlck5hbWUiLCJfYWxsU2hpcHNTdW5rIiwiYm9hcmQiLCJib2FyZENvcHkiLCJmb3JFYWNoIiwicm93IiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfZ2FtZWJvYXJkRGF0YSIsIl9yZXNldCIsIkdhbWVCb2FyZERhdGFCdWlsZGVyIiwiZ2FtZWJvYXJkIiwiX3Jlc2V0MiIsImNvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9