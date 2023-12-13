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
var _startGameButton = /*#__PURE__*/new WeakMap();
var _switchHorizontalButton = /*#__PURE__*/new WeakMap();
var _restartGameButton = /*#__PURE__*/new WeakMap();
var _boardInit = /*#__PURE__*/new WeakMap();
var _NUMBER_OF_CELLS = /*#__PURE__*/new WeakMap();
var _isHorizontal = /*#__PURE__*/new WeakMap();
var _BOARD_HEIGHT = /*#__PURE__*/new WeakMap();
var _BOARD_WIDTH = /*#__PURE__*/new WeakMap();
var _mapHandlers = /*#__PURE__*/new WeakSet();
var _initBoard = /*#__PURE__*/new WeakSet();
var _updateDOMBoard = /*#__PURE__*/new WeakSet();
var _toggleHorizontal = /*#__PURE__*/new WeakSet();
var _createBoardCell = /*#__PURE__*/new WeakSet();
var _updateCellMetaData = /*#__PURE__*/new WeakSet();
var _updateCellStatus = /*#__PURE__*/new WeakSet();
var _highlighCellsBuilding = /*#__PURE__*/new WeakSet();
var _highlightCells = /*#__PURE__*/new WeakSet();
var _getShipSizePattern = /*#__PURE__*/new WeakSet();
var DOMController = /*#__PURE__*/function () {
  function DOMController(_controllerAPI) {
    _classCallCheck(this, DOMController);
    _classPrivateMethodInitSpec(this, _getShipSizePattern);
    _classPrivateMethodInitSpec(this, _highlightCells);
    _classPrivateMethodInitSpec(this, _highlighCellsBuilding);
    _classPrivateMethodInitSpec(this, _updateCellStatus);
    _classPrivateMethodInitSpec(this, _updateCellMetaData);
    _classPrivateMethodInitSpec(this, _createBoardCell);
    _classPrivateMethodInitSpec(this, _toggleHorizontal);
    _classPrivateMethodInitSpec(this, _updateDOMBoard);
    _classPrivateMethodInitSpec(this, _initBoard);
    _classPrivateMethodInitSpec(this, _mapHandlers);
    _classPrivateFieldInitSpec(this, _boardOne, {
      writable: true,
      value: document.getElementById('board-one')
    });
    _classPrivateFieldInitSpec(this, _boardTwo, {
      writable: true,
      value: document.getElementById('board-two')
    });
    _classPrivateFieldInitSpec(this, _startGameButton, {
      writable: true,
      value: document.getElementById('start-game')
    });
    _classPrivateFieldInitSpec(this, _switchHorizontalButton, {
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
    _classPrivateFieldInitSpec(this, _NUMBER_OF_CELLS, {
      writable: true,
      value: 100
    });
    _classPrivateFieldInitSpec(this, _isHorizontal, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _BOARD_HEIGHT, {
      writable: true,
      value: 10
    });
    _classPrivateFieldInitSpec(this, _BOARD_WIDTH, {
      writable: true,
      value: 10
    });
    _classPrivateMethodGet(this, _initBoard, _initBoard2).call(this, _controllerAPI.doBoardActionHandler, _controllerAPI.updateBoardHitsHandler);
    _classPrivateMethodGet(this, _mapHandlers, _mapHandlers2).call(this, _controllerAPI);
  }
  _createClass(DOMController, [{
    key: "updateUI",
    value: function updateUI(gameStateData, currentCellCoord) {
      _classPrivateMethodGet(this, _updateDOMBoard, _updateDOMBoard2).call(this, gameStateData);
      _classPrivateMethodGet(this, _highlighCellsBuilding, _highlighCellsBuilding2).call(this, currentCellCoord, gameStateData.currentPlayerFleetSize, gameStateData.isRoundRunning);
    }
  }, {
    key: "getIsHorizontal",
    value: function getIsHorizontal() {
      return _classPrivateFieldGet(this, _isHorizontal);
    }
  }]);
  return DOMController;
}();
function _mapHandlers2(controllerAPI) {
  _classPrivateFieldGet(this, _startGameButton).addEventListener('click', controllerAPI.startGameHandler);
  _classPrivateFieldGet(this, _switchHorizontalButton).addEventListener('click', _classPrivateMethodGet(this, _toggleHorizontal, _toggleHorizontal2).bind(this));
  _classPrivateFieldGet(this, _restartGameButton).addEventListener('click', controllerAPI.restartRoundHandler);
}
function _initBoard2(doBoardActionHandler, updateBoardHitsHandler) {
  if (_classPrivateFieldGet(this, _boardInit) === true) return;
  for (var i = 0; i < _classPrivateFieldGet(this, _NUMBER_OF_CELLS); i += 1) {
    var newBoardCellOne = _classPrivateMethodGet(this, _createBoardCell, _createBoardCell2).call(this, doBoardActionHandler, updateBoardHitsHandler);
    var newBoardCellTwo = _classPrivateMethodGet(this, _createBoardCell, _createBoardCell2).call(this, doBoardActionHandler, updateBoardHitsHandler);
    _classPrivateFieldGet(this, _boardOne).appendChild(newBoardCellOne);
    _classPrivateFieldGet(this, _boardTwo).appendChild(newBoardCellTwo);
  }
  _classPrivateFieldSet(this, _boardInit, true);
}
function _updateDOMBoard2(gameStateData) {
  var gameboardOneData = gameStateData.playerOneGameboardData;
  var gameboardTwoData = gameStateData.playerTwoGameboardData;
  for (var i = 0; i < _classPrivateFieldGet(this, _NUMBER_OF_CELLS); i += 1) {
    var nodeBoardOne = _classPrivateFieldGet(this, _boardOne).childNodes[i];
    var dataBoardOne = gameboardOneData.boardData[i];
    var nodeBoardTwo = _classPrivateFieldGet(this, _boardTwo).childNodes[i];
    var dataBoardTwo = gameboardTwoData.boardData[i];
    _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardOne, dataBoardOne, gameStateData.isRoundRunning);
    _classPrivateMethodGet(this, _updateCellStatus, _updateCellStatus2).call(this, nodeBoardTwo, dataBoardTwo, gameStateData.isRoundRunning);
    _classPrivateMethodGet(this, _updateCellMetaData, _updateCellMetaData2).call(this, nodeBoardOne, dataBoardOne, gameboardOneData.playerUserName);
    _classPrivateMethodGet(this, _updateCellMetaData, _updateCellMetaData2).call(this, nodeBoardTwo, dataBoardTwo, gameboardTwoData.playerUserName);
  }
}
function _toggleHorizontal2() {
  _classPrivateFieldSet(this, _isHorizontal, !_classPrivateFieldGet(this, _isHorizontal));
  _classPrivateFieldGet(this, _switchHorizontalButton).classList.toggle('button-active');
}
function _createBoardCell2(doBoardActionHandler, updateBoardHitsHandler) {
  var newCell = document.createElement('div');
  newCell.classList.add('board-cell');
  newCell.addEventListener('click', doBoardActionHandler);
  newCell.addEventListener('mouseover', updateBoardHitsHandler);
  return newCell;
}
function _updateCellMetaData2(cellNode, cellData, playername) {
  var coord = cellData.getCoord();
  cellNode.setAttribute('data-coordx', coord.coordX);
  cellNode.setAttribute('data-coordy', coord.coordY);
  cellNode.setAttribute('data-playername', playername);
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
function _highlighCellsBuilding2(coord, currentPlayerFleetSize, isRoundRunning) {
  if (isRoundRunning === true) return;
  var shipSizePattern = _classPrivateMethodGet(this, _getShipSizePattern, _getShipSizePattern2).call(this, currentPlayerFleetSize);
  _classPrivateMethodGet(this, _highlightCells, _highlightCells2).call(this, coord, shipSizePattern, _classPrivateFieldGet(this, _isHorizontal));
}
function _highlightCells2(coord, shipSizePattern) {
  var isHorizontal = _classPrivateFieldGet(this, _isHorizontal);
  switch (isHorizontal) {
    case true:
      for (var i = 0; i < shipSizePattern; i += 1) {
        if (coord.coordX + shipSizePattern - 1 > _classPrivateFieldGet(this, _BOARD_WIDTH)) break;
        var currentNode = document.querySelector("div[data-coordx=\"".concat(coord.coordX + i, "\"][data-coordy=\"").concat(coord.coordY, "\"]"));
        currentNode.style.backgroundColor = '#808080';
      }
      break;
    case false:
      for (var _i = 0; _i < shipSizePattern; _i += 1) {
        if (coord.coordY + shipSizePattern - 1 > _classPrivateFieldGet(this, _BOARD_HEIGHT)) break;
        var _currentNode = document.querySelector("div[data-coordx=\"".concat(coord.coordX, "\"][data-coordy=\"").concat(coord.coordY + _i, "\"]"));
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






var _currentPlayer = /*#__PURE__*/new WeakMap();
var _isGameRunning = /*#__PURE__*/new WeakMap();
var _isRoundRunning = /*#__PURE__*/new WeakMap();
var _isPlayerOneTurn = /*#__PURE__*/new WeakMap();
var _playerOne = /*#__PURE__*/new WeakMap();
var _playerTwo = /*#__PURE__*/new WeakMap();
var _playerOneGameboard = /*#__PURE__*/new WeakMap();
var _playerTwoGameboard = /*#__PURE__*/new WeakMap();
var _DOMController = /*#__PURE__*/new WeakMap();
var _updateGameUI = /*#__PURE__*/new WeakSet();
var _updateBoardHitsHandler = /*#__PURE__*/new WeakSet();
var _getGameStateData = /*#__PURE__*/new WeakSet();
var _runRound = /*#__PURE__*/new WeakSet();
var _endGame = /*#__PURE__*/new WeakSet();
var _switchCurrentPlayer = /*#__PURE__*/new WeakSet();
var _getWinner = /*#__PURE__*/new WeakSet();
var _playerAttack = /*#__PURE__*/new WeakSet();
var _attackCell = /*#__PURE__*/new WeakSet();
var _playerPlaceShip = /*#__PURE__*/new WeakSet();
var _placeShip = /*#__PURE__*/new WeakSet();
var _getAPIContainer = /*#__PURE__*/new WeakSet();
var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);
    _classPrivateMethodInitSpec(this, _getAPIContainer);
    _classPrivateMethodInitSpec(this, _placeShip);
    _classPrivateMethodInitSpec(this, _playerPlaceShip);
    _classPrivateMethodInitSpec(this, _attackCell);
    // TODO: implement attack logic
    _classPrivateMethodInitSpec(this, _playerAttack);
    _classPrivateMethodInitSpec(this, _getWinner);
    _classPrivateMethodInitSpec(this, _switchCurrentPlayer);
    _classPrivateMethodInitSpec(this, _endGame);
    // To check if round should start once all ships have been placed
    _classPrivateMethodInitSpec(this, _runRound);
    _classPrivateMethodInitSpec(this, _getGameStateData);
    _classPrivateMethodInitSpec(this, _updateBoardHitsHandler);
    _classPrivateMethodInitSpec(this, _updateGameUI);
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
  }

  // Callback to let other layers of program interact with our game controller
  _createClass(GameController, [{
    key: "doBoardActionHandler",
    value: function doBoardActionHandler(event) {
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
      _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this);
      console.log('ACTION');
    }
  }, {
    key: "startGameHandler",
    value: function startGameHandler(event) {
      if (_classPrivateFieldGet(this, _isGameRunning) === true) return false;
      console.log('START');
      _classPrivateFieldSet(this, _isGameRunning, true);
      return true;
    }
  }, {
    key: "restartRoundHandler",
    value: function restartRoundHandler(event) {
      _classPrivateFieldSet(this, _isGameRunning, false);
      _classPrivateFieldSet(this, _isRoundRunning, false);
      _classPrivateFieldSet(this, _playerOneGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
      _classPrivateFieldSet(this, _playerTwoGameboard, new _entities_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]());
      _classPrivateFieldSet(this, _playerOne, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player One'));
      _classPrivateFieldSet(this, _playerTwo, new _entities_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player Two'));
      _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
      _classPrivateFieldSet(this, _isPlayerOneTurn, true);
      _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this);
      console.log('RESTARTED');
    }
  }]);
  return GameController;
}();
function _updateGameUI2(currentCellCoord) {
  var gameStateData = _classPrivateMethodGet(this, _getGameStateData, _getGameStateData2).call(this);
  _classPrivateFieldGet(this, _DOMController).updateUI(gameStateData, currentCellCoord);
}
function _updateBoardHitsHandler2(event) {
  var cellNode = event.target;
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
function _runRound2() {
  if (_classPrivateFieldGet(this, _playerOne).getShips().length === 5 && _classPrivateFieldGet(this, _playerTwo).getShips().length === 5) {
    console.log('round is running');
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
    console.log('PLAYER TWO TURN');
  } else {
    _classPrivateFieldSet(this, _currentPlayer, _classPrivateFieldGet(this, _playerOne));
    console.log('PLAYER ONE TURN');
  }
  _classPrivateFieldSet(this, _isPlayerOneTurn, !_classPrivateFieldGet(this, _isPlayerOneTurn));
}
function _getWinner2() {
  if (_classPrivateFieldGet(this, _playerOneGameboard).allShipsSunk() === true) {
    console.log('win');
    return _classPrivateFieldGet(this, _playerTwo);
  }
  if (_classPrivateFieldGet(this, _playerTwoGameboard).allShipsSunk() === true) {
    console.log('win');
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
  _classPrivateMethodGet(this, _runRound, _runRound2).call(this);
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
    console.log('placed');
    console.log("current player ships ".concat(_classPrivateFieldGet(this, _currentPlayer).getShips().length));
    if (_classPrivateFieldGet(this, _currentPlayer).getShips().length === 5) {
      console.log('switch');
      _classPrivateMethodGet(this, _switchCurrentPlayer, _switchCurrentPlayer2).call(this);
    }
    return true;
  }
  return false;
}
function _getAPIContainer2() {
  return {
    startGameHandler: this.startGameHandler.bind(this),
    doBoardActionHandler: this.doBoardActionHandler.bind(this),
    restartRoundHandler: this.restartRoundHandler.bind(this),
    updateBoardHitsHandler: _classPrivateMethodGet(this, _updateBoardHitsHandler, _updateBoardHitsHandler2).bind(this)
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
      _classPrivateFieldGet(this, _gameStateData).currentPlayerUserName = currentUserName;
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
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;;EAER;;WAES;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;;EAEvB,gBAAgB;;EAEhB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;;EAEjB,eAAe;EACf,WAAW;EACX,uBAAuB;EACvB,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;AAClB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-ui-container {\n  padding: 100px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n\n  grid-template-areas:\n    'button'\n    'board';\n}\n\n.controls-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  gap: 2em\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  gap: 2em;\n}\n\n.board {\n  height: 500px;\n  width: 500px;\n  border: 1px solid black;\n\n  grid-area: board;\n\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board-cell {\n  border: 1px solid black;\n}\n\n.board-cell:hover {\n  border: 2px solid lightgreen;\n}\n\n.button {\n  grid-area: button;\n\n  padding: 0.5rem;\n  color: #fff;\n  border: 2px solid black;\n  background-color: black;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.button-active {\n  color: #000;\n  background-color: white;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.button:hover {\n  color: #000;\n  background-color: white;\n  text-transform: uppercase;\n  font-weight: 700;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXlEO0FBQzlCO0FBRTNCLElBQU1jLFVBQVUsR0FBRyxJQUFJL0ksa0VBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Cb2FyZENlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9Db29yZGluYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lU3RhdGVEYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lU3RhdGVEYXRhQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9IaXRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcFBpZWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4uL2VudGl0aWVzL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBET01Db250cm9sbGVyIHtcbiAgI2JvYXJkT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLW9uZScpO1xuXG4gICNib2FyZFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC10d28nKTtcblxuICAjc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWUnKTtcblxuICAjc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3Jpem9udGFsLXN0YXR1cycpO1xuXG4gICNyZXN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWdhbWUnKTtcblxuICAjYm9hcmRJbml0ID0gZmFsc2U7XG5cbiAgI05VTUJFUl9PRl9DRUxMUyA9IDEwMDtcblxuICAjaXNIb3Jpem9udGFsID0gdHJ1ZTtcblxuICAjQk9BUkRfSEVJR0hUID0gMTA7XG5cbiAgI0JPQVJEX1dJRFRIID0gMTA7XG5cbiAgY29uc3RydWN0b3IoY29udHJvbGxlckFQSSkge1xuICAgIHRoaXMuI2luaXRCb2FyZChjb250cm9sbGVyQVBJLmRvQm9hcmRBY3Rpb25IYW5kbGVyLCBjb250cm9sbGVyQVBJLnVwZGF0ZUJvYXJkSGl0c0hhbmRsZXIpO1xuICAgIHRoaXMuI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpO1xuICB9XG5cbiAgI21hcEhhbmRsZXJzKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnN0YXJ0R2FtZUhhbmRsZXIpO1xuICAgIHRoaXMuI3N3aXRjaEhvcml6b250YWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiN0b2dnbGVIb3Jpem9udGFsLmJpbmQodGhpcykpO1xuICAgIHRoaXMuI3Jlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlckFQSS5yZXN0YXJ0Um91bmRIYW5kbGVyKTtcbiAgfVxuXG4gICNpbml0Qm9hcmQoZG9Cb2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGl0c0hhbmRsZXIpIHtcbiAgICBpZiAodGhpcy4jYm9hcmRJbml0ID09PSB0cnVlKSByZXR1cm47XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI05VTUJFUl9PRl9DRUxMUzsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxPbmUgPSB0aGlzLiNjcmVhdGVCb2FyZENlbGwoZG9Cb2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGl0c0hhbmRsZXIpO1xuICAgICAgY29uc3QgbmV3Qm9hcmRDZWxsVHdvID0gdGhpcy4jY3JlYXRlQm9hcmRDZWxsKGRvQm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpdHNIYW5kbGVyKTtcblxuICAgICAgdGhpcy4jYm9hcmRPbmUuYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsT25lKTtcbiAgICAgIHRoaXMuI2JvYXJkVHdvLmFwcGVuZENoaWxkKG5ld0JvYXJkQ2VsbFR3byk7XG4gICAgfVxuXG4gICAgdGhpcy4jYm9hcmRJbml0ID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZVVJKGdhbWVTdGF0ZURhdGEsIGN1cnJlbnRDZWxsQ29vcmQpIHtcbiAgICB0aGlzLiN1cGRhdGVET01Cb2FyZChnYW1lU3RhdGVEYXRhKTtcbiAgICB0aGlzLiNoaWdobGlnaENlbGxzQnVpbGRpbmcoY3VycmVudENlbGxDb29yZCwgZ2FtZVN0YXRlRGF0YS5jdXJyZW50UGxheWVyRmxlZXRTaXplLCBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcbiAgfVxuXG4gICN1cGRhdGVET01Cb2FyZChnYW1lU3RhdGVEYXRhKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkT25lRGF0YSA9IGdhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICBjb25zdCBnYW1lYm9hcmRUd29EYXRhID0gZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNOVU1CRVJfT0ZfQ0VMTFM7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgbm9kZUJvYXJkT25lID0gdGhpcy4jYm9hcmRPbmUuY2hpbGROb2Rlc1tpXTtcbiAgICAgIGNvbnN0IGRhdGFCb2FyZE9uZSA9IGdhbWVib2FyZE9uZURhdGEuYm9hcmREYXRhW2ldO1xuXG4gICAgICBjb25zdCBub2RlQm9hcmRUd28gPSB0aGlzLiNib2FyZFR3by5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkVHdvID0gZ2FtZWJvYXJkVHdvRGF0YS5ib2FyZERhdGFbaV07XG5cbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxTdGF0dXMobm9kZUJvYXJkT25lLCBkYXRhQm9hcmRPbmUsIGdhbWVTdGF0ZURhdGEuaXNSb3VuZFJ1bm5pbmcpO1xuICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRUd28sIGRhdGFCb2FyZFR3bywgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG5cbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxNZXRhRGF0YShub2RlQm9hcmRPbmUsIGRhdGFCb2FyZE9uZSwgZ2FtZWJvYXJkT25lRGF0YS5wbGF5ZXJVc2VyTmFtZSk7XG4gICAgICB0aGlzLiN1cGRhdGVDZWxsTWV0YURhdGEobm9kZUJvYXJkVHdvLCBkYXRhQm9hcmRUd28sIGdhbWVib2FyZFR3b0RhdGEucGxheWVyVXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICN0b2dnbGVIb3Jpem9udGFsKCkge1xuICAgIHRoaXMuI2lzSG9yaXpvbnRhbCA9ICF0aGlzLiNpc0hvcml6b250YWw7XG4gICAgdGhpcy4jc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdidXR0b24tYWN0aXZlJyk7XG4gIH1cblxuICAjY3JlYXRlQm9hcmRDZWxsKGRvQm9hcmRBY3Rpb25IYW5kbGVyLCB1cGRhdGVCb2FyZEhpdHNIYW5kbGVyKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvQm9hcmRBY3Rpb25IYW5kbGVyKTtcbiAgICBuZXdDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHVwZGF0ZUJvYXJkSGl0c0hhbmRsZXIpO1xuXG4gICAgcmV0dXJuIG5ld0NlbGw7XG4gIH1cblxuICAjdXBkYXRlQ2VsbE1ldGFEYXRhKGNlbGxOb2RlLCBjZWxsRGF0YSwgcGxheWVybmFtZSkge1xuICAgIGNvbnN0IGNvb3JkID0gY2VsbERhdGEuZ2V0Q29vcmQoKTtcblxuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHgnLCBjb29yZC5jb29yZFgpO1xuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHknLCBjb29yZC5jb29yZFkpO1xuICAgIGNlbGxOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGF5ZXJuYW1lJywgcGxheWVybmFtZSk7XG4gIH1cblxuICAjdXBkYXRlQ2VsbFN0YXR1cyhjZWxsTm9kZSwgY2VsbERhdGEsIGlzUm91bmRSdW5uaW5nKSB7XG4gICAgaWYgKCFjZWxsTm9kZSB8fCAhY2VsbERhdGEpIHJldHVybjtcblxuICAgIGNvbnN0IG5vZGUgPSBjZWxsTm9kZTtcbiAgICBjb25zdCBkYXRhID0gY2VsbERhdGE7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdldEhpdFN0YXR1cygpO1xuXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuTk9UX0hJVDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkZGRkZGJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLkhJVF9TSElQOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRjAwMDAnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgaGl0U3RhdHVzKCkuSElUX0NFTEw6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNlbGxEYXRhLmlzT2NjdXBpZWQgJiYgaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgfVxuXG4gICNoaWdobGlnaENlbGxzQnVpbGRpbmcoY29vcmQsIGN1cnJlbnRQbGF5ZXJGbGVldFNpemUsIGlzUm91bmRSdW5uaW5nKSB7XG4gICAgaWYgKGlzUm91bmRSdW5uaW5nID09PSB0cnVlKSByZXR1cm47XG5cbiAgICBjb25zdCBzaGlwU2l6ZVBhdHRlcm4gPSB0aGlzLiNnZXRTaGlwU2l6ZVBhdHRlcm4oY3VycmVudFBsYXllckZsZWV0U2l6ZSk7XG5cbiAgICB0aGlzLiNoaWdobGlnaHRDZWxscyhjb29yZCwgc2hpcFNpemVQYXR0ZXJuLCB0aGlzLiNpc0hvcml6b250YWwpO1xuICB9XG5cbiAgI2hpZ2hsaWdodENlbGxzKGNvb3JkLCBzaGlwU2l6ZVBhdHRlcm4pIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLiNpc0hvcml6b250YWw7XG5cbiAgICBzd2l0Y2ggKGlzSG9yaXpvbnRhbCkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplUGF0dGVybjsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKChjb29yZC5jb29yZFggKyBzaGlwU2l6ZVBhdHRlcm4pIC0gMSA+IHRoaXMuI0JPQVJEX1dJRFRIKSBicmVhaztcbiAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWNvb3JkeD1cIiR7Y29vcmQuY29vcmRYICsgaX1cIl1bZGF0YS1jb29yZHk9XCIke2Nvb3JkLmNvb3JkWX1cIl1gKTtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplUGF0dGVybjsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKChjb29yZC5jb29yZFkgKyBzaGlwU2l6ZVBhdHRlcm4pIC0gMSA+IHRoaXMuI0JPQVJEX0hFSUdIVCkgYnJlYWs7XG4gICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1jb29yZHg9XCIke2Nvb3JkLmNvb3JkWH1cIl1bZGF0YS1jb29yZHk9XCIke2Nvb3JkLmNvb3JkWSArIGl9XCJdYCk7XG4gICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgI2dldFNoaXBTaXplUGF0dGVybihjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7XG4gICAgc3dpdGNoIChjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiA1O1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gNDtcbiAgICAgIGNhc2UgMjpcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiAyO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgZ2V0SXNIb3Jpem9udGFsKCkgeyByZXR1cm4gdGhpcy4jaXNIb3Jpem9udGFsIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9lbnRpdGllcy9QbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9lbnRpdGllcy9TaGlwXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9lbnRpdGllcy9HYW1lYm9hcmRcIjtcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuLi9lbnRpdGllcy9Db29yZGluYXRlXCI7XG5pbXBvcnQgR2FtZVN0YXRlRGF0YUJ1aWxkZXIgZnJvbSBcIi4uL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAjY3VycmVudFBsYXllciA9IG51bGw7XG5cbiAgI2lzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcblxuICAjaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAjcGxheWVyT25lID0gbnVsbDtcblxuICAjcGxheWVyVHdvID0gbnVsbDtcblxuICAjcGxheWVyT25lR2FtZWJvYXJkID0gbnVsbDtcblxuICAjcGxheWVyVHdvR2FtZWJvYXJkID0gbnVsbDtcblxuICAjRE9NQ29udHJvbGxlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jRE9NQ29udHJvbGxlciA9IG5ldyBET01Db250cm9sbGVyKHRoaXMuI2dldEFQSUNvbnRhaW5lcigpKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICB9XG5cbiAgLy8gQ2FsbGJhY2sgdG8gbGV0IG90aGVyIGxheWVycyBvZiBwcm9ncmFtIGludGVyYWN0IHdpdGggb3VyIGdhbWUgY29udHJvbGxlclxuICBkb0JvYXJkQWN0aW9uSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2VsbE5vZGUgPSBldmVudC50YXJnZXQ7XG5cbiAgICBjb25zdCBpc0NlbGxPd25lciA9IGNlbGxOb2RlLmRhdGFzZXQucGxheWVybmFtZSA9PT0gdGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCk7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy4jRE9NQ29udHJvbGxlci5nZXRJc0hvcml6b250YWwoKTtcbiAgICBcbiAgICBjb25zdCBjb29yZFggPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeDtcbiAgICBjb25zdCBjb29yZFkgPSBjZWxsTm9kZS5kYXRhc2V0LmNvb3JkeTtcbiAgICBjb25zdCBjZWxsQ29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgXG4gICAgc3dpdGNoICh0aGlzLiNpc1JvdW5kUnVubmluZykge1xuICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIHBsYWNlIHNoaXBzIG9uIEhJUyBPV04gYm9hcmQgb25seVxuICAgICAgICBpZiAoaXNDZWxsT3duZXIgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYXllclBsYWNlU2hpcChjZWxsQ29vcmQsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgIC8vIHRvIGxldCBwbGF5ZXIgYXR0YWNrIHNoaXBzIG9uIEhJUyBPUFBPTkVOVCdTIGJvYXJkIG9ubHlcbiAgICAgICAgaWYgKGlzQ2VsbE93bmVyID09PSB0cnVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYXllckF0dGFjayhjZWxsQ29vcmQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICAgIGNvbnNvbGUubG9nKCdBQ1RJT04nKTtcbiAgfVxuXG4gICN1cGRhdGVHYW1lVUkoY3VycmVudENlbGxDb29yZCkge1xuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGEgPSB0aGlzLiNnZXRHYW1lU3RhdGVEYXRhKCk7XG5cbiAgICB0aGlzLiNET01Db250cm9sbGVyLnVwZGF0ZVVJKGdhbWVTdGF0ZURhdGEsIGN1cnJlbnRDZWxsQ29vcmQpO1xuICB9XG5cbiAgI3VwZGF0ZUJvYXJkSGl0c0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuXG4gICAgY29uc3QgY3VycmVudENlbGxDb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy4jaXNHYW1lUnVubmluZyA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKCdTVEFSVCcpO1xuICAgIHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXN0YXJ0Um91bmRIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdQbGF5ZXIgT25lJyk7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSSgpO1xuICAgIGNvbnNvbGUubG9nKCdSRVNUQVJURUQnKTtcbiAgfVxuXG4gICNnZXRHYW1lU3RhdGVEYXRhKCkge1xuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGFCdWlsZGVyID0gbmV3IEdhbWVTdGF0ZURhdGFCdWlsZGVyKCk7XG5cbiAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gZ2FtZVN0YXRlRGF0YUJ1aWxkZXJcbiAgICAgIC5zZXRDdXJyZW50VXNlck5hbWUodGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0SXNHYW1lUnVubmluZyh0aGlzLiNpc0dhbWVSdW5uaW5nKVxuICAgICAgLnNldElzUm91bmRSdW5uaW5nKHRoaXMuI2lzUm91bmRSdW5uaW5nKVxuICAgICAgLnNldElzUGxheWVyT25lVHVybih0aGlzLiNpc1BsYXllck9uZVR1cm4pXG4gICAgICAuc2V0UGxheWVyT25lVXNlck5hbWUodGhpcy4jcGxheWVyT25lLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRQbGF5ZXJUd29Vc2VyTmFtZSh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldFBsYXllck9uZUdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lR2FtZWJvYXJkLmdldEdhbWVib2FyZERhdGEodGhpcy4jcGxheWVyT25lLmdldFBsYXllck5hbWUoKSkpXG4gICAgICAuc2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0R2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyTmFtZSgpKSlcbiAgICAgIC5zZXRQbGF5ZXJPbmVGbGVldFNpemUodGhpcy4jcGxheWVyT25lLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRQbGF5ZXJUd29GbGVldFNpemUodGhpcy4jcGxheWVyVHdvLmZsZWV0U2l6ZSlcbiAgICAgIC5zZXRDdXJyZW50UGxheWVyRmxlZXRTaXplKHRoaXMuI2N1cnJlbnRQbGF5ZXIuZmxlZXRTaXplKVxuICAgICAgLmJ1aWxkKCk7XG5cbiAgICByZXR1cm4gZ2FtZVN0YXRlRGF0YTtcbiAgfVxuXG4gIC8vIFRvIGNoZWNrIGlmIHJvdW5kIHNob3VsZCBzdGFydCBvbmNlIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4gICNydW5Sb3VuZCgpIHtcbiAgICBpZiAodGhpcy4jcGxheWVyT25lLmdldFNoaXBzKCkubGVuZ3RoID09PSA1ICYmIHRoaXMuI3BsYXllclR3by5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgY29uc29sZS5sb2coJ3JvdW5kIGlzIHJ1bm5pbmcnKTtcbiAgICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuI2lzUGxheWVyT25lVHVybiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgI2VuZEdhbWUocGxheWVyV2lubmVyKSB7XG4gICAgaWYgKHBsYXllcldpbm5lciA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuI2lzUm91bmRSdW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICAjc3dpdGNoQ3VycmVudFBsYXllcigpIHtcbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyVHdvO1xuICAgICAgY29uc29sZS5sb2coJ1BMQVlFUiBUV08gVFVSTicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuICAgICAgY29uc29sZS5sb2coJ1BMQVlFUiBPTkUgVFVSTicpO1xuICAgIH1cblxuICAgIHRoaXMuI2lzUGxheWVyT25lVHVybiA9ICF0aGlzLiNpc1BsYXllck9uZVR1cm47XG4gIH1cblxuICAjZ2V0V2lubmVyKCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3aW4nKTtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUd287XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI3BsYXllclR3b0dhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3dpbicpO1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllck9uZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFRPRE86IGltcGxlbWVudCBhdHRhY2sgbG9naWNcbiAgI3BsYXllckF0dGFjayhjb29yZCkge1xuICAgIHRoaXMuI2F0dGFja0NlbGwoY29vcmQpO1xuICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcblxuICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuI2dldFdpbm5lcigpO1xuXG4gICAgaWYgKHdpbm5lciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4jZW5kR2FtZSh3aW5uZXIpO1xuICAgICAgY29uc29sZS5sb2coYHBsYXllciAke3dpbm5lcn0gd29uYCk7XG4gICAgfVxuICB9XG5cbiAgI2F0dGFja0NlbGwoY29vcmQpIHtcbiAgICBpZiAodGhpcy4jaXNSb3VuZFJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcblxuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIGN1cnJlbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgI3BsYXllclBsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKSB7XG4gICAgdGhpcy4jcGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpO1xuXG4gICAgdGhpcy4jcnVuUm91bmQoKTtcbiAgfVxuXG4gICNwbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZykgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGN1cnJlbnRCb2FyZCA9IG51bGw7XG4gICAgbGV0IG5ld1NoaXAgPSBudWxsO1xuICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gVG8gYnVpbGQgc2hpcHMgaW4gcHJlLWRldGVybWluZWQgcGF0dGVybiAoNSw0LDMsMywyKVxuICAgIHN3aXRjaCAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgNSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgNCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSA0OiB7XG4gICAgICAgIG5ld1NoaXAgPSBuZXcgU2hpcChjb29yZCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgaXNQbGFjZWQgPSBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGlzSG9yaXpvbnRhbCwgMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFBsYXllcnMgc2hvdWxkIHRha2UgdHVybnMgYWZ0ZXIgYnVpbGRpbmcgdGhlaXIgZW50aXJlIGZsZWV0XG4gICAgaWYgKGlzUGxhY2VkKSB7XG4gICAgICB0aGlzLiNjdXJyZW50UGxheWVyLmFkZFNoaXAobmV3U2hpcCk7XG4gICAgICBjb25zb2xlLmxvZygncGxhY2VkJyk7XG4gICAgICBjb25zb2xlLmxvZyhgY3VycmVudCBwbGF5ZXIgc2hpcHMgJHt0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RofWApO1xuXG4gICAgICBpZiAodGhpcy4jY3VycmVudFBsYXllci5nZXRTaGlwcygpLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpdGNoJyk7XG4gICAgICAgIHRoaXMuI3N3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgI2dldEFQSUNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRHYW1lSGFuZGxlcjogdGhpcy5zdGFydEdhbWVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBkb0JvYXJkQWN0aW9uSGFuZGxlcjogdGhpcy5kb0JvYXJkQWN0aW9uSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgcmVzdGFydFJvdW5kSGFuZGxlcjogdGhpcy5yZXN0YXJ0Um91bmRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICB1cGRhdGVCb2FyZEhpdHNIYW5kbGVyOiB0aGlzLiN1cGRhdGVCb2FyZEhpdHNIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcbiIsImltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL0Nvb3JkaW5hdGVcIjtcbmltcG9ydCBoaXRTdGF0dXMgZnJvbSBcIi4vSGl0U3RhdHVzXCI7XG5cbmNsYXNzIEJvYXJkQ2VsbCB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNzaGlwID0gbnVsbDtcblxuICAgICNpc09jY3VwaWVkID0gZmFsc2U7XG5cbiAgICAjaGFzQmVlbkhpdCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmQgPSBuZXcgQ29vcmRpbmF0ZShjb29yZFgsIGNvb3JkWSk7XG4gICAgfVxuXG4gICAgb2NjdXB5KHNoaXApIHtcbiAgICAgICAgaWYgKHRoaXMuI3NoaXApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNpc09jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4jc2hpcCA9IHNoaXA7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICBpZiAodGhpcy4jaGFzQmVlbkhpdCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuI2hhc0JlZW5IaXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLiNzaGlwKSB7XG4gICAgICAgICAgICB0aGlzLiNzaGlwLnRyeUhpdCh0aGlzLiNjb29yZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRDb29yZCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkOyB9XG5cbiAgICBnZXRDb29yZFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBYOiAke3RoaXMuI2Nvb3JkLmNvb3JkWH0gWTogJHt0aGlzLiNjb29yZC5jb29yZFl9YDtcbiAgICB9XG5cbiAgICBnZXRIaXRTdGF0dXMoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy4jaGFzQmVlbkhpdCkge1xuICAgICAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5OT1RfSElUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI3NoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhpdFN0YXR1cygpLkhJVF9TSElQO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5ISVRfQ0VMTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaXNPY2N1cGllZCgpIHsgcmV0dXJuIHRoaXMuI2lzT2NjdXBpZWQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRDZWxsOyIsImNsYXNzIENvb3JkaW5hdGUge1xuICAgICNjb29yZFggPSAwO1xuXG4gICAgI2Nvb3JkWSA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZFggPSBjb29yZFg7XG4gICAgICAgIHRoaXMuI2Nvb3JkWSA9IGNvb3JkWTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHRoaXMuI2Nvb3JkWCwgMTApOyB9XG5cbiAgICBnZXQgY29vcmRZKCkgeyByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHRoaXMuI2Nvb3JkWSwgMTApOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3JkaW5hdGU7IiwiY2xhc3MgR2FtZVN0YXRlRGF0YSB7XG4gICAgI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTtcblxuICAgICNpc0dhbWVSdW5uaW5nO1xuXG4gICAgI2lzUm91bmRSdW5uaW5nO1xuXG4gICAgI2lzUGxheWVyT25lVHVybjtcblxuICAgICNwbGF5ZXJPbmVVc2VyTmFtZTtcblxuICAgICNwbGF5ZXJUd29Vc2VyTmFtZTtcblxuICAgICNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuXG4gICAgI3BsYXllclR3b0dhbWVib2FyZERhdGE7XG5cbiAgICAjcGxheWVyT25lRmxlZXRTaXplO1xuXG4gICAgI3BsYXllclR3b0ZsZWV0U2l6ZTtcblxuICAgICNjdXJyZW50UGxheWVyRmxlZXRTaXplO1xuXG4gICAgZ2V0IGN1cnJlbnRVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgc2V0IGN1cnJlbnRVc2VyTmFtZShjdXJyZW50VXNlck5hbWUpIHsgdGhpcy4jY3VycmVudFBsYXllclVzZXJOYW1lID0gY3VycmVudFVzZXJOYW1lOyB9XG5cbiAgICBnZXQgaXNHYW1lUnVubmluZygpIHsgcmV0dXJuIHRoaXMuI2lzR2FtZVJ1bm5pbmc7IH1cblxuICAgIHNldCBpc0dhbWVSdW5uaW5nKGlzR2FtZVJ1bm5pbmcpIHsgdGhpcy4jaXNHYW1lUnVubmluZyA9IGlzR2FtZVJ1bm5pbmc7IH1cblxuICAgIGdldCBpc1JvdW5kUnVubmluZygpIHsgcmV0dXJuIHRoaXMuI2lzUm91bmRSdW5uaW5nOyB9XG5cbiAgICBzZXQgaXNSb3VuZFJ1bm5pbmcoaXNSb3VuZFJ1bm5pbmcpIHsgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBpc1JvdW5kUnVubmluZzsgfVxuXG4gICAgZ2V0IGlzUGxheWVyT25lVHVybigpIHsgcmV0dXJuIHRoaXMuI2lzUGxheWVyT25lVHVybjsgfVxuXG4gICAgc2V0IGlzUGxheWVyT25lVHVybihpc1BsYXllck9uZVR1cm4pIHsgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gaXNQbGF5ZXJPbmVUdXJuOyB9XG5cbiAgICBnZXQgcGxheWVyT25lVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVVc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllck9uZVVzZXJOYW1lKHBsYXllck9uZVVzZXJOYW1lKSB7IHRoaXMuI3BsYXllck9uZVVzZXJOYW1lID0gcGxheWVyT25lVXNlck5hbWU7IH1cblxuICAgIGdldCBwbGF5ZXJUd29Vc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b1VzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvVXNlck5hbWUocGxheWVyVHdvVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyVHdvVXNlck5hbWUgPSBwbGF5ZXJUd29Vc2VyTmFtZTsgfVxuXG4gICAgZ2V0IHBsYXllck9uZUdhbWVib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhOyB9XG5cbiAgICBzZXQgcGxheWVyT25lR2FtZWJvYXJkRGF0YShwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKSB7IHRoaXMuI3BsYXllck9uZUdhbWVib2FyZERhdGEgPSBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyVHdvR2FtZWJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclR3b0dhbWVib2FyZERhdGE7IH1cblxuICAgIHNldCBwbGF5ZXJUd29HYW1lYm9hcmREYXRhKHBsYXllclR3b0dhbWVib2FyZERhdGEpIHsgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkRGF0YSA9IHBsYXllclR3b0dhbWVib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJPbmVGbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJPbmVGbGVldFNpemU7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVGbGVldFNpemUocGxheWVyT25lRmxlZXRTaXplKSB7IHRoaXMuI3BsYXllck9uZUZsZWV0U2l6ZSA9IHBsYXllck9uZUZsZWV0U2l6ZTsgfVxuICAgIFxuICAgIGdldCBwbGF5ZXJUd29GbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29GbGVldFNpemU7IH1cblxuICAgIHNldCBwbGF5ZXJUd29GbGVldFNpemUocGxheWVyVHdvRmxlZXRTaXplKSB7IHRoaXMuI3BsYXllclR3b0ZsZWV0U2l6ZSA9IHBsYXllclR3b0ZsZWV0U2l6ZTsgfVxuXG4gICAgZ2V0IGN1cnJlbnRQbGF5ZXJGbGVldFNpemUoKSB7IHJldHVybiB0aGlzLiNjdXJyZW50UGxheWVyRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgY3VycmVudFBsYXllckZsZWV0U2l6ZShjdXJyZW50UGxheWVyRmxlZXRTaXplKSB7IHRoaXMuI2N1cnJlbnRQbGF5ZXJGbGVldFNpemUgPSBjdXJyZW50UGxheWVyRmxlZXRTaXplOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZURhdGE7IiwiaW1wb3J0IEdhbWVTdGF0ZURhdGEgZnJvbSBcIi4vR2FtZVN0YXRlRGF0YVwiO1xuXG5jbGFzcyBHYW1lU3RhdGVEYXRhQnVpbGRlciB7XG4gICAgI2dhbWVTdGF0ZURhdGEgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEgPSBuZXcgR2FtZVN0YXRlRGF0YSgpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRVc2VyTmFtZShjdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5jdXJyZW50UGxheWVyVXNlck5hbWUgPSBjdXJyZW50VXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzR2FtZVJ1bm5pbmcoaXNHYW1lUnVubmluZykge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzR2FtZVJ1bm5pbmcgPSBpc0dhbWVSdW5uaW5nO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc1JvdW5kUnVubmluZyhpc1JvdW5kUnVubmluZykge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nID0gaXNSb3VuZFJ1bm5pbmc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldElzUGxheWVyT25lVHVybihpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc1BsYXllck9uZVR1cm4gPSBpc1BsYXllck9uZVR1cm47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZVVzZXJOYW1lKHBsYXllck9uZVVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lVXNlck5hbWUgPSBwbGF5ZXJPbmVVc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvVXNlck5hbWUocGxheWVyVHdvVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29Vc2VyTmFtZSA9IHBsYXllclR3b1VzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhKHBsYXllck9uZUdhbWVib2FyZERhdGEpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVHYW1lYm9hcmREYXRhID0gcGxheWVyT25lR2FtZWJvYXJkRGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVHdvR2FtZWJvYXJkRGF0YShwbGF5ZXJUd29HYW1lYm9hcmREYXRhKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvR2FtZWJvYXJkRGF0YSA9IHBsYXllclR3b0dhbWVib2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllck9uZUZsZWV0U2l6ZShwbGF5ZXJPbmVGbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVGbGVldFNpemUgPSBwbGF5ZXJPbmVGbGVldFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b0ZsZWV0U2l6ZShwbGF5ZXJUd29GbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5wbGF5ZXJUd29GbGVldFNpemUgPSBwbGF5ZXJUd29GbGVldFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRQbGF5ZXJGbGVldFNpemUoY3VycmVudFBsYXllckZsZWV0U2l6ZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLmN1cnJlbnRQbGF5ZXJGbGVldFNpemUgPSBjdXJyZW50UGxheWVyRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YSA9IG5ldyBHYW1lU3RhdGVEYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVTdGF0ZURhdGEgPSB0aGlzLiNnYW1lU3RhdGVEYXRhO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBnYW1lU3RhdGVEYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlRGF0YUJ1aWxkZXI7IiwiY2xhc3MgR2FtZWJvYXJkRGF0YSB7XG4gICAgI2JvYXJkRGF0YSA9IG51bGw7XG5cbiAgICAjcGxheWVyVXNlck5hbWUgPSAnJztcblxuICAgICNhbGxTaGlwc1N1bmsgPSBudWxsO1xuXG4gICAgc2V0Qm9hcmREYXRhKGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ29weSA9IGJvYXJkLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkRGF0YSA9IFtdO1xuXG4gICAgICAgIGJvYXJkQ29weS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBib2FyZERhdGEucHVzaCguLi5yb3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNib2FyZERhdGEgPSBib2FyZERhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGJvYXJkRGF0YSgpIHsgcmV0dXJuIHRoaXMuI2JvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllclVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJVc2VyTmFtZSA9IHBsYXllclVzZXJOYW1lOyB9XG5cbiAgICBnZXQgYWxsU2hpcHNTdW5rKCkgeyByZXR1cm4gdGhpcy4jYWxsU2hpcHNTdW5rOyB9XG5cbiAgICBzZXQgYWxsU2hpcHNTdW5rKGFsbFNoaXBzU3VuaykgeyB0aGlzLiNhbGxTaGlwc1N1bmsgPSBhbGxTaGlwc1N1bms7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkRGF0YTsiLCJpbXBvcnQgR2FtZWJvYXJkRGF0YSBmcm9tIFwiLi9HYW1lYm9hcmREYXRhXCI7XG5cbmNsYXNzIEdhbWVCb2FyZERhdGFCdWlsZGVyIHtcbiAgICAjZ2FtZWJvYXJkRGF0YSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YSA9IG5ldyBHYW1lYm9hcmREYXRhKCk7XG4gICAgfVxuXG4gICAgc2V0Qm9hcmREYXRhKGdhbWVib2FyZCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLnNldEJvYXJkRGF0YShnYW1lYm9hcmQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJVc2VyTmFtZShwbGF5ZXJVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmREYXRhLnBsYXllclVzZXJOYW1lID0gcGxheWVyVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFsbFNoaXBzU3VuayhhbGxTaGlwc1N1bmspIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5hbGxTaGlwc1N1bmsgPSBhbGxTaGlwc1N1bms7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgICNyZXNldCgpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YSA9IG5ldyBHYW1lYm9hcmREYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGEgPSB0aGlzLiNnYW1lYm9hcmREYXRhO1xuICAgICAgICB0aGlzLiNyZXNldCgpO1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZERhdGFCdWlsZGVyOyIsImltcG9ydCBCb2FyZENlbGwgZnJvbSBcIi4vQm9hcmRDZWxsXCI7XG5pbXBvcnQgR2FtZWJvYXJkRGF0YUJ1aWxkZXIgZnJvbSBcIi4vRGF0YVBvaW50Q29udGFpbmVycy9HYW1lYm9hcmREYXRhQnVpbGRlclwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgICN3aWR0aCA9IDEwO1xuXG4gICAgI2hlaWdodCA9IDEwO1xuXG4gICAgI2JvYXJkID0gW107XG5cbiAgICAvLyBzd2FwcGluZyBzdXBwb3NlZGx5IFggYW5kIFkgY29vcmRpbmF0ZXMgaGVyZSBiZWNhdXNlIG9mIGZhaWxlZCBhdHRlbXB0IHRvIGltcGxlbWVudCAyRCBhcnJheXMgaW4gSmF2YVNjcmlwdC4uLlxuICAgICNzaGlwTGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2luaXRCb2FyZCgpO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLCBpc0hvcml6b250YWwsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuI2NhblBsYWNlKHNoaXAuZ2V0Q29vcmRTdGFydCgpLCBpc0hvcml6b250YWwsIGxlbmd0aCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNzaGlwTGlzdC5wdXNoKHNoaXApO1xuXG4gICAgICAgIGlmIChpc0hvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxXVsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRYIC0gMSkgKyBpXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkWyhzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFkgLSAxKSArIGldW3NoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDFdO1xuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNib2FyZFtjb29yZC5jb29yZFkgLSAxXVtjb29yZC5jb29yZFggLSAxXS5oaXQoKTtcbiAgICB9XG5cbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGlwTGlzdC5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cblxuICAgIGdldEdhbWVib2FyZERhdGEocGxheWVyVXNlck5hbWUpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YUJ1aWxkZXIgPSBuZXcgR2FtZWJvYXJkRGF0YUJ1aWxkZXIoKTtcblxuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhID0gZ2FtZWJvYXJkRGF0YUJ1aWxkZXIuc2V0Qm9hcmREYXRhKHRoaXMuI2JvYXJkKVxuICAgICAgICAuc2V0UGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpXG4gICAgICAgIC5zZXRBbGxTaGlwc1N1bmsodGhpcy5hbGxTaGlwc1N1bmsoKSlcbiAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkRGF0YTtcbiAgICB9XG5cbiAgICAjY2FuUGxhY2UoY29vcmRTdGFydCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgc3dpdGNoIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgICAgIC8vIHRvIGV4Y2x1ZGUgc3RhcnRpbmcgcG9pbnQgZnJvbSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmICgoY29vcmRTdGFydC5jb29yZFggLSAxKSArIGxlbmd0aCA+IHRoaXMuI3dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHRoaXMuI2JvYXJkW2Nvb3JkU3RhcnQuY29vcmRZIC0gMV1bKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRDZWxsLmlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgICAgICAgIC8vIHRvIGV4Y2x1ZGUgc3RhcnRpbmcgcG9pbnQgZnJvbSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmICgoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGxlbmd0aCA+IHRoaXMuI2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoY29vcmRTdGFydC5jb29yZFkgLSAxKSArIGldW2Nvb3JkU3RhcnQuY29vcmRYIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2luaXRCb2FyZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkLmxlbmd0aCAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy4jd2lkdGg7IHggKz0gMSkge1xuICAgICAgICAgICAgdGhpcy4jYm9hcmQucHVzaChbXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy4jaGVpZ2h0OyB5ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBzd2FwcGluZyB2YWx1ZXMgZHVlIHRvIHdyb25nIGNlbGwgZGF0YSByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5Q2VsbCA9IG5ldyBCb2FyZENlbGwoeSArIDEsIHggKyAxKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2JvYXJkW3hdLnB1c2goZW1wdHlDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiZnVuY3Rpb24gaGl0U3RhdHVzKCkge1xuICAgIGNvbnN0IE5PVF9ISVQgPSAnTk9UX0hJVCc7XG4gICAgY29uc3QgSElUX0NFTEwgPSAnSElUX0NFTEwnO1xuICAgIGNvbnN0IEhJVF9TSElQID0gJ0hJVF9TSElQJztcblxuICAgIHJldHVybiB7XG4gICAgICAgIE5PVF9ISVQsXG4gICAgICAgIEhJVF9DRUxMLFxuICAgICAgICBISVRfU0hJUFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoaXRTdGF0dXM7IiwiY2xhc3MgUGxheWVyIHtcbiAgI3BsYXllck5hbWUgPSAnJztcblxuICAjaGl0TG9nID0gW107XG5cbiAgI3BsYXllclNoaXBzID0gW107XG5cbiAgY29uc3RydWN0b3IodXNlck5hbWUpIHtcbiAgICB0aGlzLiNwbGF5ZXJOYW1lID0gdXNlck5hbWU7XG4gIH1cblxuICBsb2dIaXQoY29vcmQpIHtcbiAgICB0aGlzLiNoaXRMb2cucHVzaChjb29yZCk7XG4gIH1cblxuICBhZGRTaGlwKHNoaXApIHtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgZ2V0SGl0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRMb2cuc2xpY2UoKTtcbiAgfVxuXG4gIGdldFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJTaGlwcy5zbGljZSgpO1xuICB9XG5cbiAgcmVzZXRVc2VyKCkge1xuICAgIHRoaXMuI2hpdExvZyA9IFtdO1xuICAgIHRoaXMuI3BsYXllclNoaXBzID0gW107XG4gIH1cblxuICBzZXRQbGF5ZXJOYW1lKHVzZXJOYW1lKSB7XG4gICAgdGhpcy4jcGxheWVyTmFtZSA9IHVzZXJOYW1lO1xuICB9XG5cbiAgZ2V0UGxheWVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyTmFtZTtcbiAgfTtcblxuICBnZXQgZmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyU2hpcHMubGVuZ3RoOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgU2hpcFBpZWNlIGZyb20gXCIuL1NoaXBQaWVjZVwiO1xuXG5jbGFzcyBTaGlwIHtcbiAgI3RpbWVzSGl0ID0gMDtcblxuICAjc2hpcFBpZWNlcyA9IFtdO1xuICBcbiAgI2Nvb3JkU3RhcnQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIHRoaXMuI2Nvb3JkU3RhcnQgPSBjb29yZFN0YXJ0XG4gICAgdGhpcy4jYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCk7XG4gIH1cblxuICB0cnlIaXQoaGl0Q29vcmQpIHtcbiAgICBjb25zdCBzaGlwUGllY2UgPSB0aGlzLiNzaGlwUGllY2VzLmZpbmQocGllY2VDb29yZCA9PlxuICAgICAgKHBpZWNlQ29vcmQuY29vcmRYID09PSBoaXRDb29yZC5jb29yZFgpICYmIChwaWVjZUNvb3JkLmNvb3JkWSA9PT0gaGl0Q29vcmQuY29vcmRZKVxuICAgICk7XG5cbiAgICBpZiAoc2hpcFBpZWNlID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlOyBcblxuICAgIHRoaXMuI3RpbWVzSGl0ICs9IDE7XG5cbiAgICByZXR1cm4gc2hpcFBpZWNlLmhpdCgpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmV2ZXJ5KHNoaXBQaWVjZSA9PlxuICAgICAgc2hpcFBpZWNlLmhpdFN0YXR1cyA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICAjYnVpbGRTaGlwKGNvb3JkU3RhcnQsIGhvcml6b250YWwsIGxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBzaGlwUGllY2VDb29yZCA9IG51bGw7XG5cbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCArIGksIGNvb3JkU3RhcnQuY29vcmRZKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBQaWVjZUNvb3JkID0gbmV3IFNoaXBQaWVjZShjb29yZFN0YXJ0LmNvb3JkWCwgY29vcmRTdGFydC5jb29yZFkgKyBpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jc2hpcFBpZWNlcy5wdXNoKHNoaXBQaWVjZUNvb3JkKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb29yZFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiNjb29yZFN0YXJ0O1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHsgcmV0dXJuIHRoaXMuI3NoaXBQaWVjZXMubGVuZ3RoOyB9XG5cbiAgZ2V0IHRpbWVzSGl0KCkgeyByZXR1cm4gdGhpcy4jdGltZXNIaXQ7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9Db29yZGluYXRlXCI7XG5cbmNsYXNzIFNoaXBQaWVjZSB7XG4gICAgI2Nvb3JkID0gbnVsbDtcblxuICAgICNoaXRTdGF0dXMgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy4jaGl0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2hpdFN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRYKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRYIH1cblxuICAgIGdldCBjb29yZFkoKSB7IHJldHVybiB0aGlzLiNjb29yZC5jb29yZFk7IH1cblxuICAgIGdldCBoaXRTdGF0dXMoKSB7IHJldHVybiB0aGlzLiNoaXRTdGF0dXM7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcFBpZWNlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS11aS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMmVtO1xuXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ2J1dHRvbidcbiAgICAnYm9hcmQnO1xufVxuXG4uY29udHJvbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW1cbn1cblxuLmJvYXJkcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBnYXA6IDJlbTtcbn1cblxuLmJvYXJkIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICBncmlkLWFyZWE6IGJvYXJkO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmJvYXJkLWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJvYXJkLWNlbGw6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xufVxuXG4uYnV0dG9uIHtcbiAgZ3JpZC1hcmVhOiBidXR0b247XG5cbiAgcGFkZGluZzogMC41cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTs7RUFFUjs7V0FFUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7O0VBRXZCLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLGVBQWU7RUFDZixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtdWktY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2J1dHRvbidcXG4gICAgJ2JvYXJkJztcXG59XFxuXFxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAyZW1cXG59XFxuXFxuLmJvYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMmVtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgZ3JpZC1hcmVhOiBib2FyZDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvYXJkLWNlbGw6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG5cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uLWFjdGl2ZSB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9HYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6WyJoaXRTdGF0dXMiLCJfYm9hcmRPbmUiLCJXZWFrTWFwIiwiX2JvYXJkVHdvIiwiX3N0YXJ0R2FtZUJ1dHRvbiIsIl9zd2l0Y2hIb3Jpem9udGFsQnV0dG9uIiwiX3Jlc3RhcnRHYW1lQnV0dG9uIiwiX2JvYXJkSW5pdCIsIl9OVU1CRVJfT0ZfQ0VMTFMiLCJfaXNIb3Jpem9udGFsIiwiX0JPQVJEX0hFSUdIVCIsIl9CT0FSRF9XSURUSCIsIl9tYXBIYW5kbGVycyIsIldlYWtTZXQiLCJfaW5pdEJvYXJkIiwiX3VwZGF0ZURPTUJvYXJkIiwiX3RvZ2dsZUhvcml6b250YWwiLCJfY3JlYXRlQm9hcmRDZWxsIiwiX3VwZGF0ZUNlbGxNZXRhRGF0YSIsIl91cGRhdGVDZWxsU3RhdHVzIiwiX2hpZ2hsaWdoQ2VsbHNCdWlsZGluZyIsIl9oaWdobGlnaHRDZWxscyIsIl9nZXRTaGlwU2l6ZVBhdHRlcm4iLCJET01Db250cm9sbGVyIiwiY29udHJvbGxlckFQSSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX2luaXRCb2FyZDIiLCJjYWxsIiwiZG9Cb2FyZEFjdGlvbkhhbmRsZXIiLCJ1cGRhdGVCb2FyZEhpdHNIYW5kbGVyIiwiX21hcEhhbmRsZXJzMiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInVwZGF0ZVVJIiwiZ2FtZVN0YXRlRGF0YSIsImN1cnJlbnRDZWxsQ29vcmQiLCJfdXBkYXRlRE9NQm9hcmQyIiwiX2hpZ2hsaWdoQ2VsbHNCdWlsZGluZzIiLCJjdXJyZW50UGxheWVyRmxlZXRTaXplIiwiaXNSb3VuZFJ1bm5pbmciLCJnZXRJc0hvcml6b250YWwiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lSGFuZGxlciIsIl90b2dnbGVIb3Jpem9udGFsMiIsImJpbmQiLCJyZXN0YXJ0Um91bmRIYW5kbGVyIiwiaSIsIm5ld0JvYXJkQ2VsbE9uZSIsIl9jcmVhdGVCb2FyZENlbGwyIiwibmV3Qm9hcmRDZWxsVHdvIiwiYXBwZW5kQ2hpbGQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJnYW1lYm9hcmRPbmVEYXRhIiwicGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdhbWVib2FyZFR3b0RhdGEiLCJwbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwibm9kZUJvYXJkT25lIiwiY2hpbGROb2RlcyIsImRhdGFCb2FyZE9uZSIsImJvYXJkRGF0YSIsIm5vZGVCb2FyZFR3byIsImRhdGFCb2FyZFR3byIsIl91cGRhdGVDZWxsU3RhdHVzMiIsIl91cGRhdGVDZWxsTWV0YURhdGEyIiwicGxheWVyVXNlck5hbWUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJuZXdDZWxsIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImNlbGxOb2RlIiwiY2VsbERhdGEiLCJwbGF5ZXJuYW1lIiwiY29vcmQiLCJnZXRDb29yZCIsInNldEF0dHJpYnV0ZSIsImNvb3JkWCIsImNvb3JkWSIsIm5vZGUiLCJkYXRhIiwic3RhdHVzIiwiZ2V0SGl0U3RhdHVzIiwiTk9UX0hJVCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiSElUX1NISVAiLCJISVRfQ0VMTCIsImlzT2NjdXBpZWQiLCJzaGlwU2l6ZVBhdHRlcm4iLCJfZ2V0U2hpcFNpemVQYXR0ZXJuMiIsIl9oaWdobGlnaHRDZWxsczIiLCJpc0hvcml6b250YWwiLCJjdXJyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJQbGF5ZXIiLCJTaGlwIiwiR2FtZWJvYXJkIiwiQ29vcmRpbmF0ZSIsIkdhbWVTdGF0ZURhdGFCdWlsZGVyIiwiX2N1cnJlbnRQbGF5ZXIiLCJfaXNHYW1lUnVubmluZyIsIl9pc1JvdW5kUnVubmluZyIsIl9pc1BsYXllck9uZVR1cm4iLCJfcGxheWVyT25lIiwiX3BsYXllclR3byIsIl9wbGF5ZXJPbmVHYW1lYm9hcmQiLCJfcGxheWVyVHdvR2FtZWJvYXJkIiwiX0RPTUNvbnRyb2xsZXIiLCJfdXBkYXRlR2FtZVVJIiwiX3VwZGF0ZUJvYXJkSGl0c0hhbmRsZXIiLCJfZ2V0R2FtZVN0YXRlRGF0YSIsIl9ydW5Sb3VuZCIsIl9lbmRHYW1lIiwiX3N3aXRjaEN1cnJlbnRQbGF5ZXIiLCJfZ2V0V2lubmVyIiwiX3BsYXllckF0dGFjayIsIl9hdHRhY2tDZWxsIiwiX3BsYXllclBsYWNlU2hpcCIsIl9wbGFjZVNoaXAiLCJfZ2V0QVBJQ29udGFpbmVyIiwiR2FtZUNvbnRyb2xsZXIiLCJfZ2V0QVBJQ29udGFpbmVyMiIsIl91cGRhdGVHYW1lVUkyIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0NlbGxPd25lciIsImRhdGFzZXQiLCJnZXRQbGF5ZXJOYW1lIiwiY29vcmR4IiwiY29vcmR5IiwiY2VsbENvb3JkIiwiX3BsYXllclBsYWNlU2hpcDIiLCJfcGxheWVyQXR0YWNrMiIsImNvbnNvbGUiLCJsb2ciLCJfZ2V0R2FtZVN0YXRlRGF0YTIiLCJfdXBkYXRlQm9hcmRIaXRzSGFuZGxlcjIiLCJnYW1lU3RhdGVEYXRhQnVpbGRlciIsInNldEN1cnJlbnRVc2VyTmFtZSIsInNldElzR2FtZVJ1bm5pbmciLCJzZXRJc1JvdW5kUnVubmluZyIsInNldElzUGxheWVyT25lVHVybiIsInNldFBsYXllck9uZVVzZXJOYW1lIiwic2V0UGxheWVyVHdvVXNlck5hbWUiLCJzZXRQbGF5ZXJPbmVHYW1lYm9hcmREYXRhIiwiZ2V0R2FtZWJvYXJkRGF0YSIsInNldFBsYXllclR3b0dhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJPbmVGbGVldFNpemUiLCJmbGVldFNpemUiLCJzZXRQbGF5ZXJUd29GbGVldFNpemUiLCJzZXRDdXJyZW50UGxheWVyRmxlZXRTaXplIiwiYnVpbGQiLCJfcnVuUm91bmQyIiwiZ2V0U2hpcHMiLCJsZW5ndGgiLCJfZW5kR2FtZTIiLCJwbGF5ZXJXaW5uZXIiLCJfc3dpdGNoQ3VycmVudFBsYXllcjIiLCJfZ2V0V2lubmVyMiIsImFsbFNoaXBzU3VuayIsIl9hdHRhY2tDZWxsMiIsIndpbm5lciIsImN1cnJlbnRCb2FyZCIsInJlY2VpdmVBdHRhY2siLCJfcGxhY2VTaGlwMiIsIm5ld1NoaXAiLCJpc1BsYWNlZCIsInBsYWNlU2hpcCIsImFkZFNoaXAiLCJfY29vcmQiLCJfc2hpcCIsIl9pc09jY3VwaWVkIiwiX2hhc0JlZW5IaXQiLCJCb2FyZENlbGwiLCJvY2N1cHkiLCJzaGlwIiwiaGl0IiwidHJ5SGl0IiwiZ2V0Q29vcmRTdHJpbmciLCJnZXQiLCJfY29vcmRYIiwiX2Nvb3JkWSIsIk51bWJlciIsInBhcnNlSW50IiwiR2FtZVN0YXRlRGF0YSIsIl9jdXJyZW50UGxheWVyVXNlck5hbWUiLCJfcGxheWVyT25lVXNlck5hbWUiLCJfcGxheWVyVHdvVXNlck5hbWUiLCJfcGxheWVyT25lR2FtZWJvYXJkRGF0YSIsIl9wbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwiX3BsYXllck9uZUZsZWV0U2l6ZSIsIl9wbGF5ZXJUd29GbGVldFNpemUiLCJfY3VycmVudFBsYXllckZsZWV0U2l6ZSIsInNldCIsImN1cnJlbnRVc2VyTmFtZSIsImlzR2FtZVJ1bm5pbmciLCJpc1BsYXllck9uZVR1cm4iLCJwbGF5ZXJPbmVVc2VyTmFtZSIsInBsYXllclR3b1VzZXJOYW1lIiwicGxheWVyT25lRmxlZXRTaXplIiwicGxheWVyVHdvRmxlZXRTaXplIiwiX2dhbWVTdGF0ZURhdGEiLCJjdXJyZW50UGxheWVyVXNlck5hbWUiLCJyZXNldCIsIkdhbWVib2FyZERhdGEiLCJfYm9hcmREYXRhIiwiX3BsYXllclVzZXJOYW1lIiwiX2FsbFNoaXBzU3VuayIsInNldEJvYXJkRGF0YSIsImJvYXJkIiwiYm9hcmRDb3B5Iiwic2xpY2UiLCJmb3JFYWNoIiwicm93IiwicHVzaCIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2dhbWVib2FyZERhdGEiLCJfcmVzZXQiLCJHYW1lQm9hcmREYXRhQnVpbGRlciIsImdhbWVib2FyZCIsInNldFBsYXllclVzZXJOYW1lIiwic2V0QWxsU2hpcHNTdW5rIiwiZ2FtZWJvYXJkRGF0YSIsIl9yZXNldDIiLCJHYW1lYm9hcmREYXRhQnVpbGRlciIsIl93aWR0aCIsIl9oZWlnaHQiLCJfYm9hcmQiLCJfc2hpcExpc3QiLCJfY2FuUGxhY2UiLCJfY2FuUGxhY2UyIiwiZ2V0Q29vcmRTdGFydCIsImJvYXJkQ2VsbCIsImV2ZXJ5IiwiaXNTdW5rIiwiZ2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJjb29yZFN0YXJ0IiwieCIsInkiLCJlbXB0eUNlbGwiLCJ1c2VyTmFtZSIsIl9wbGF5ZXJOYW1lIiwiX2hpdExvZyIsIl9wbGF5ZXJTaGlwcyIsImxvZ0hpdCIsImdldEhpdExvZyIsInJlc2V0VXNlciIsInNldFBsYXllck5hbWUiLCJTaGlwUGllY2UiLCJfdGltZXNIaXQiLCJfc2hpcFBpZWNlcyIsIl9jb29yZFN0YXJ0IiwiX2J1aWxkU2hpcCIsImhvcml6b250YWwiLCJfYnVpbGRTaGlwMiIsImhpdENvb3JkIiwic2hpcFBpZWNlIiwiZmluZCIsInBpZWNlQ29vcmQiLCJ1bmRlZmluZWQiLCJzaGlwUGllY2VDb29yZCIsIl9oaXRTdGF0dXMiLCJjb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==