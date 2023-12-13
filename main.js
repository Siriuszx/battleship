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
    _classPrivateMethodGet(this, _initBoard, _initBoard2).call(this, _controllerAPI.doBoardActionHandler, _controllerAPI.updateBoardHintsHandler);
    _classPrivateMethodGet(this, _mapHandlers, _mapHandlers2).call(this, _controllerAPI);
  }
  _createClass(DOMController, [{
    key: "updateUI",
    value: function updateUI(gameStateData, currentCellCoord) {
      _classPrivateMethodGet(this, _updateDOMBoard, _updateDOMBoard2).call(this, gameStateData);
      if (currentCellCoord) {
        _classPrivateMethodGet(this, _highlighCellsBuilding, _highlighCellsBuilding2).call(this, currentCellCoord, gameStateData.currentPlayerFleetSize, gameStateData.isRoundRunning, gameStateData.currentUserName);
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
function _createBoardCell2(doBoardActionHandler, updateBoardHintsHandler) {
  var newCell = document.createElement('div');
  newCell.classList.add('board-cell');
  newCell.addEventListener('click', doBoardActionHandler);
  newCell.addEventListener('mouseover', updateBoardHintsHandler);
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
function _highlighCellsBuilding2(coord, currentPlayerFleetSize, isRoundRunning, currentPlayerName) {
  if (isRoundRunning === true) return;
  var shipSizePattern = _classPrivateMethodGet(this, _getShipSizePattern, _getShipSizePattern2).call(this, currentPlayerFleetSize);
  _classPrivateMethodGet(this, _highlightCells, _highlightCells2).call(this, coord, shipSizePattern, currentPlayerName);
}
function _highlightCells2(coord, shipSizePattern, currentPlayerName) {
  console.log("🚀 ~ file: DOMController.js:137 ~ DOMController ~ #highlightCells ~ currentPlayerName:", currentPlayerName);
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
var _updateBoardHintsHandler = /*#__PURE__*/new WeakSet();
var _updateGameUI = /*#__PURE__*/new WeakSet();
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
    _classPrivateMethodInitSpec(this, _updateGameUI);
    _classPrivateMethodInitSpec(this, _updateBoardHintsHandler);
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
      _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this, cellCoord);
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
function _updateBoardHintsHandler2(event) {
  var cellNode = event.target;
  if (cellNode.dataset.playername !== _classPrivateFieldGet(this, _currentPlayer).getPlayerName()) return;
  var coordX = cellNode.dataset.coordx;
  var coordY = cellNode.dataset.coordy;
  var currentCellCoord = new _entities_Coordinate__WEBPACK_IMPORTED_MODULE_4__["default"](coordX, coordY);
  _classPrivateMethodGet(this, _updateGameUI, _updateGameUI2).call(this, currentCellCoord);
}
function _updateGameUI2(currentCellCoord) {
  var gameStateData = _classPrivateMethodGet(this, _getGameStateData, _getGameStateData2).call(this);
  _classPrivateFieldGet(this, _DOMController).updateUI(gameStateData, currentCellCoord);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F5RDtBQUM5QjtBQUUzQixJQUFNYyxVQUFVLEdBQUcsSUFBSTNJLGtFQUFjLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvQm9hcmRDZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvQ29vcmRpbmF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZVN0YXRlRGF0YUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9EYXRhUG9pbnRDb250YWluZXJzL0dhbWVib2FyZERhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9lbnRpdGllcy9EYXRhUG9pbnRDb250YWluZXJzL0dhbWVib2FyZERhdGFCdWlsZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvSGl0U3RhdHVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZW50aXRpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VudGl0aWVzL1NoaXBQaWVjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgaGl0U3RhdHVzIGZyb20gXCIuLi9lbnRpdGllcy9IaXRTdGF0dXNcIjtcblxuY2xhc3MgRE9NQ29udHJvbGxlciB7XG4gICNib2FyZE9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1vbmUnKTtcblxuICAjYm9hcmRUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtdHdvJyk7XG5cbiAgI3N0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XG5cbiAgI3N3aXRjaEhvcml6b250YWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9yaXpvbnRhbC1zdGF0dXMnKTtcblxuICAjcmVzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydC1nYW1lJyk7XG5cbiAgI2JvYXJkSW5pdCA9IGZhbHNlO1xuXG4gICNOVU1CRVJfT0ZfQ0VMTFMgPSAxMDA7XG5cbiAgI2lzSG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgI0JPQVJEX0hFSUdIVCA9IDEwO1xuXG4gICNCT0FSRF9XSURUSCA9IDEwO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJBUEkpIHtcbiAgICB0aGlzLiNpbml0Qm9hcmQoY29udHJvbGxlckFQSS5kb0JvYXJkQWN0aW9uSGFuZGxlciwgY29udHJvbGxlckFQSS51cGRhdGVCb2FyZEhpbnRzSGFuZGxlcik7XG4gICAgdGhpcy4jbWFwSGFuZGxlcnMoY29udHJvbGxlckFQSSk7XG4gIH1cblxuICAjbWFwSGFuZGxlcnMoY29udHJvbGxlckFQSSkge1xuICAgIHRoaXMuI3N0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXJBUEkuc3RhcnRHYW1lSGFuZGxlcik7XG4gICAgdGhpcy4jc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuI3RvZ2dsZUhvcml6b250YWwuYmluZCh0aGlzKSk7XG4gICAgdGhpcy4jcmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyQVBJLnJlc3RhcnRSb3VuZEhhbmRsZXIpO1xuICB9XG5cbiAgI2luaXRCb2FyZChkb0JvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaXRzSGFuZGxlcikge1xuICAgIGlmICh0aGlzLiNib2FyZEluaXQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jTlVNQkVSX09GX0NFTExTOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld0JvYXJkQ2VsbE9uZSA9IHRoaXMuI2NyZWF0ZUJvYXJkQ2VsbChkb0JvYXJkQWN0aW9uSGFuZGxlciwgdXBkYXRlQm9hcmRIaXRzSGFuZGxlcik7XG4gICAgICBjb25zdCBuZXdCb2FyZENlbGxUd28gPSB0aGlzLiNjcmVhdGVCb2FyZENlbGwoZG9Cb2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGl0c0hhbmRsZXIpO1xuXG4gICAgICB0aGlzLiNib2FyZE9uZS5hcHBlbmRDaGlsZChuZXdCb2FyZENlbGxPbmUpO1xuICAgICAgdGhpcy4jYm9hcmRUd28uYXBwZW5kQ2hpbGQobmV3Qm9hcmRDZWxsVHdvKTtcbiAgICB9XG5cbiAgICB0aGlzLiNib2FyZEluaXQgPSB0cnVlO1xuICB9XG5cbiAgI3VwZGF0ZURPTUJvYXJkKGdhbWVTdGF0ZURhdGEpIHtcbiAgICBjb25zdCBnYW1lYm9hcmRPbmVEYXRhID0gZ2FtZVN0YXRlRGF0YS5wbGF5ZXJPbmVHYW1lYm9hcmREYXRhO1xuICAgIGNvbnN0IGdhbWVib2FyZFR3b0RhdGEgPSBnYW1lU3RhdGVEYXRhLnBsYXllclR3b0dhbWVib2FyZERhdGE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI05VTUJFUl9PRl9DRUxMUzsgaSArPSAxKSB7XG4gICAgICBjb25zdCBub2RlQm9hcmRPbmUgPSB0aGlzLiNib2FyZE9uZS5jaGlsZE5vZGVzW2ldO1xuICAgICAgY29uc3QgZGF0YUJvYXJkT25lID0gZ2FtZWJvYXJkT25lRGF0YS5ib2FyZERhdGFbaV07XG5cbiAgICAgIGNvbnN0IG5vZGVCb2FyZFR3byA9IHRoaXMuI2JvYXJkVHdvLmNoaWxkTm9kZXNbaV07XG4gICAgICBjb25zdCBkYXRhQm9hcmRUd28gPSBnYW1lYm9hcmRUd29EYXRhLmJvYXJkRGF0YVtpXTtcblxuICAgICAgdGhpcy4jdXBkYXRlQ2VsbFN0YXR1cyhub2RlQm9hcmRPbmUsIGRhdGFCb2FyZE9uZSwgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyk7XG4gICAgICB0aGlzLiN1cGRhdGVDZWxsU3RhdHVzKG5vZGVCb2FyZFR3bywgZGF0YUJvYXJkVHdvLCBnYW1lU3RhdGVEYXRhLmlzUm91bmRSdW5uaW5nKTtcblxuICAgICAgdGhpcy4jdXBkYXRlQ2VsbE1ldGFEYXRhKG5vZGVCb2FyZE9uZSwgZGF0YUJvYXJkT25lLCBnYW1lYm9hcmRPbmVEYXRhLnBsYXllclVzZXJOYW1lKTtcbiAgICAgIHRoaXMuI3VwZGF0ZUNlbGxNZXRhRGF0YShub2RlQm9hcmRUd28sIGRhdGFCb2FyZFR3bywgZ2FtZWJvYXJkVHdvRGF0YS5wbGF5ZXJVc2VyTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgI3RvZ2dsZUhvcml6b250YWwoKSB7XG4gICAgdGhpcy4jaXNIb3Jpem9udGFsID0gIXRoaXMuI2lzSG9yaXpvbnRhbDtcbiAgICB0aGlzLiNzd2l0Y2hIb3Jpem9udGFsQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2J1dHRvbi1hY3RpdmUnKTtcbiAgfVxuXG4gICNjcmVhdGVCb2FyZENlbGwoZG9Cb2FyZEFjdGlvbkhhbmRsZXIsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvQm9hcmRBY3Rpb25IYW5kbGVyKTtcbiAgICBuZXdDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyKTtcblxuICAgIHJldHVybiBuZXdDZWxsO1xuICB9XG5cbiAgI3VwZGF0ZUNlbGxNZXRhRGF0YShjZWxsTm9kZSwgY2VsbERhdGEsIHBsYXllcm5hbWUpIHtcbiAgICBjb25zdCBjb29yZCA9IGNlbGxEYXRhLmdldENvb3JkKCk7XG5cbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmR4JywgY29vcmQuY29vcmRYKTtcbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmR5JywgY29vcmQuY29vcmRZKTtcbiAgICBjZWxsTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWVybmFtZScsIHBsYXllcm5hbWUpO1xuICB9XG5cbiAgI3VwZGF0ZUNlbGxTdGF0dXMoY2VsbE5vZGUsIGNlbGxEYXRhLCBpc1JvdW5kUnVubmluZykge1xuICAgIGlmICghY2VsbE5vZGUgfHwgIWNlbGxEYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCBub2RlID0gY2VsbE5vZGU7XG4gICAgY29uc3QgZGF0YSA9IGNlbGxEYXRhO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nZXRIaXRTdGF0dXMoKTtcblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLk5PVF9ISVQ6IHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBoaXRTdGF0dXMoKS5ISVRfU0hJUDoge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkYwMDAwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIGhpdFN0YXR1cygpLkhJVF9DRUxMOiB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDgwODAnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjZWxsRGF0YS5pc09jY3VwaWVkICYmIGlzUm91bmRSdW5uaW5nID09PSBmYWxzZSkgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gIH1cblxuICB1cGRhdGVVSShnYW1lU3RhdGVEYXRhLCBjdXJyZW50Q2VsbENvb3JkKSB7XG4gICAgdGhpcy4jdXBkYXRlRE9NQm9hcmQoZ2FtZVN0YXRlRGF0YSk7XG4gICAgXG4gICAgaWYoY3VycmVudENlbGxDb29yZCkge1xuICAgICAgdGhpcy4jaGlnaGxpZ2hDZWxsc0J1aWxkaW5nKGN1cnJlbnRDZWxsQ29vcmQsIGdhbWVTdGF0ZURhdGEuY3VycmVudFBsYXllckZsZWV0U2l6ZSwgZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZywgZ2FtZVN0YXRlRGF0YS5jdXJyZW50VXNlck5hbWUpO1xuICAgIH1cbiAgfVxuXG4gICNoaWdobGlnaENlbGxzQnVpbGRpbmcoY29vcmQsIGN1cnJlbnRQbGF5ZXJGbGVldFNpemUsIGlzUm91bmRSdW5uaW5nLCBjdXJyZW50UGxheWVyTmFtZSkge1xuICAgIGlmIChpc1JvdW5kUnVubmluZyA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc2hpcFNpemVQYXR0ZXJuID0gdGhpcy4jZ2V0U2hpcFNpemVQYXR0ZXJuKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpO1xuXG4gICAgdGhpcy4jaGlnaGxpZ2h0Q2VsbHMoY29vcmQsIHNoaXBTaXplUGF0dGVybiwgY3VycmVudFBsYXllck5hbWUpO1xuICB9XG5cbiAgI2hpZ2hsaWdodENlbGxzKGNvb3JkLCBzaGlwU2l6ZVBhdHRlcm4sIGN1cnJlbnRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogRE9NQ29udHJvbGxlci5qczoxMzcgfiBET01Db250cm9sbGVyIH4gI2hpZ2hsaWdodENlbGxzIH4gY3VycmVudFBsYXllck5hbWU6XCIsIGN1cnJlbnRQbGF5ZXJOYW1lKVxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMuI2lzSG9yaXpvbnRhbDtcblxuICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVQYXR0ZXJuOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoKGNvb3JkLmNvb3JkWCArIHNoaXBTaXplUGF0dGVybikgLSAxID4gdGhpcy4jQk9BUkRfV0lEVEgpIGJyZWFrO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtY29vcmR4PVwiJHtjb29yZC5jb29yZFggKyBpfVwiXVtkYXRhLWNvb3JkeT1cIiR7Y29vcmQuY29vcmRZfVwiXVtkYXRhLXBsYXllcm5hbWU9XCIke2N1cnJlbnRQbGF5ZXJOYW1lfVwiXWApO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVQYXR0ZXJuOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoKGNvb3JkLmNvb3JkWSArIHNoaXBTaXplUGF0dGVybikgLSAxID4gdGhpcy4jQk9BUkRfSEVJR0hUKSBicmVhaztcbiAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWNvb3JkeD1cIiR7Y29vcmQuY29vcmRYfVwiXVtkYXRhLWNvb3JkeT1cIiR7Y29vcmQuY29vcmRZICsgaX1cIl1bZGF0YS1wbGF5ZXJuYW1lPVwiJHtjdXJyZW50UGxheWVyTmFtZX1cIl1gKTtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwODA4MCc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAjZ2V0U2hpcFNpemVQYXR0ZXJuKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICBzd2l0Y2ggKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIDU7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiA0O1xuICAgICAgY2FzZSAyOlxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICBnZXRJc0hvcml6b250YWwoKSB7IHJldHVybiB0aGlzLiNpc0hvcml6b250YWwgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlcjtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2VudGl0aWVzL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2VudGl0aWVzL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL2VudGl0aWVzL0dhbWVib2FyZFwiO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4uL2VudGl0aWVzL0Nvb3JkaW5hdGVcIjtcbmltcG9ydCBHYW1lU3RhdGVEYXRhQnVpbGRlciBmcm9tIFwiLi4vZW50aXRpZXMvRGF0YVBvaW50Q29udGFpbmVycy9HYW1lU3RhdGVEYXRhQnVpbGRlclwiO1xuXG5jbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICNjdXJyZW50UGxheWVyID0gbnVsbDtcblxuICAjaXNHYW1lUnVubmluZyA9IGZhbHNlO1xuXG4gICNpc1JvdW5kUnVubmluZyA9IGZhbHNlO1xuXG4gICNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICNwbGF5ZXJPbmUgPSBudWxsO1xuXG4gICNwbGF5ZXJUd28gPSBudWxsO1xuXG4gICNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBudWxsO1xuXG4gICNwbGF5ZXJUd29HYW1lYm9hcmQgPSBudWxsO1xuXG4gICNET01Db250cm9sbGVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNET01Db250cm9sbGVyID0gbmV3IERPTUNvbnRyb2xsZXIodGhpcy4jZ2V0QVBJQ29udGFpbmVyKCkpO1xuICAgIHRoaXMuI3BsYXllck9uZUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyT25lID0gbmV3IFBsYXllcignUGxheWVyIE9uZScpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIoJ1BsYXllciBUd28nKTtcbiAgICB0aGlzLiNjdXJyZW50UGxheWVyID0gdGhpcy4jcGxheWVyT25lO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gIH1cblxuICAvLyBDYWxsYmFjayB0byBsZXQgb3RoZXIgbGF5ZXJzIG9mIHByb2dyYW0gaW50ZXJhY3Qgd2l0aCBvdXIgZ2FtZSBjb250cm9sbGVyXG4gIGRvQm9hcmRBY3Rpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuI2lzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjZWxsTm9kZSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGNvbnN0IGlzQ2VsbE93bmVyID0gY2VsbE5vZGUuZGF0YXNldC5wbGF5ZXJuYW1lID09PSB0aGlzLiNjdXJyZW50UGxheWVyLmdldFBsYXllck5hbWUoKTtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLiNET01Db250cm9sbGVyLmdldElzSG9yaXpvbnRhbCgpO1xuXG4gICAgY29uc3QgY29vcmRYID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHg7XG4gICAgY29uc3QgY29vcmRZID0gY2VsbE5vZGUuZGF0YXNldC5jb29yZHk7XG4gICAgY29uc3QgY2VsbENvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuXG4gICAgc3dpdGNoICh0aGlzLiNpc1JvdW5kUnVubmluZykge1xuICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAvLyB0byBsZXQgcGxheWVyIHBsYWNlIHNoaXBzIG9uIEhJUyBPV04gYm9hcmQgb25seVxuICAgICAgICBpZiAoaXNDZWxsT3duZXIgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYXllclBsYWNlU2hpcChjZWxsQ29vcmQsIGlzSG9yaXpvbnRhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSB0cnVlOiB7XG4gICAgICAgIC8vIHRvIGxldCBwbGF5ZXIgYXR0YWNrIHNoaXBzIG9uIEhJUyBPUFBPTkVOVCdTIGJvYXJkIG9ubHlcbiAgICAgICAgaWYgKGlzQ2VsbE93bmVyID09PSB0cnVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuI3BsYXllckF0dGFjayhjZWxsQ29vcmQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjZWxsQ29vcmQpO1xuICAgIGNvbnNvbGUubG9nKCdBQ1RJT04nKTtcbiAgfVxuXG4gICN1cGRhdGVCb2FyZEhpbnRzSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGNlbGxOb2RlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKGNlbGxOb2RlLmRhdGFzZXQucGxheWVybmFtZSAhPT0gdGhpcy4jY3VycmVudFBsYXllci5nZXRQbGF5ZXJOYW1lKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvb3JkWCA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR4O1xuICAgIGNvbnN0IGNvb3JkWSA9IGNlbGxOb2RlLmRhdGFzZXQuY29vcmR5O1xuXG4gICAgY29uc3QgY3VycmVudENlbGxDb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcblxuICAgIHRoaXMuI3VwZGF0ZUdhbWVVSShjdXJyZW50Q2VsbENvb3JkKTtcbiAgfVxuXG4gICN1cGRhdGVHYW1lVUkoY3VycmVudENlbGxDb29yZCkge1xuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGEgPSB0aGlzLiNnZXRHYW1lU3RhdGVEYXRhKCk7XG5cbiAgICB0aGlzLiNET01Db250cm9sbGVyLnVwZGF0ZVVJKGdhbWVTdGF0ZURhdGEsIGN1cnJlbnRDZWxsQ29vcmQpO1xuICB9XG5cbiAgc3RhcnRHYW1lSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLiNpc0dhbWVSdW5uaW5nID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc29sZS5sb2coJ1NUQVJUJyk7XG4gICAgdGhpcy4jaXNHYW1lUnVubmluZyA9IHRydWU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlc3RhcnRSb3VuZEhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgdGhpcy4jY3VycmVudFBsYXllciA9IHRoaXMuI3BsYXllck9uZTtcbiAgICB0aGlzLiNpc1BsYXllck9uZVR1cm4gPSB0cnVlO1xuXG4gICAgdGhpcy4jdXBkYXRlR2FtZVVJKCk7XG4gICAgY29uc29sZS5sb2coJ1JFU1RBUlRFRCcpO1xuICB9XG5cbiAgI2dldEdhbWVTdGF0ZURhdGEoKSB7XG4gICAgY29uc3QgZ2FtZVN0YXRlRGF0YUJ1aWxkZXIgPSBuZXcgR2FtZVN0YXRlRGF0YUJ1aWxkZXIoKTtcblxuICAgIGNvbnN0IGdhbWVTdGF0ZURhdGEgPSBnYW1lU3RhdGVEYXRhQnVpbGRlclxuICAgICAgLnNldEN1cnJlbnRVc2VyTmFtZSh0aGlzLiNjdXJyZW50UGxheWVyLmdldFBsYXllck5hbWUoKSlcbiAgICAgIC5zZXRJc0dhbWVSdW5uaW5nKHRoaXMuI2lzR2FtZVJ1bm5pbmcpXG4gICAgICAuc2V0SXNSb3VuZFJ1bm5pbmcodGhpcy4jaXNSb3VuZFJ1bm5pbmcpXG4gICAgICAuc2V0SXNQbGF5ZXJPbmVUdXJuKHRoaXMuI2lzUGxheWVyT25lVHVybilcbiAgICAgIC5zZXRQbGF5ZXJPbmVVc2VyTmFtZSh0aGlzLiNwbGF5ZXJPbmUuZ2V0UGxheWVyTmFtZSgpKVxuICAgICAgLnNldFBsYXllclR3b1VzZXJOYW1lKHRoaXMuI3BsYXllclR3by5nZXRQbGF5ZXJOYW1lKCkpXG4gICAgICAuc2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQuZ2V0R2FtZWJvYXJkRGF0YSh0aGlzLiNwbGF5ZXJPbmUuZ2V0UGxheWVyTmFtZSgpKSlcbiAgICAgIC5zZXRQbGF5ZXJUd29HYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllclR3b0dhbWVib2FyZC5nZXRHYW1lYm9hcmREYXRhKHRoaXMuI3BsYXllclR3by5nZXRQbGF5ZXJOYW1lKCkpKVxuICAgICAgLnNldFBsYXllck9uZUZsZWV0U2l6ZSh0aGlzLiNwbGF5ZXJPbmUuZmxlZXRTaXplKVxuICAgICAgLnNldFBsYXllclR3b0ZsZWV0U2l6ZSh0aGlzLiNwbGF5ZXJUd28uZmxlZXRTaXplKVxuICAgICAgLnNldEN1cnJlbnRQbGF5ZXJGbGVldFNpemUodGhpcy4jY3VycmVudFBsYXllci5mbGVldFNpemUpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHJldHVybiBnYW1lU3RhdGVEYXRhO1xuICB9XG5cbiAgLy8gVG8gY2hlY2sgaWYgcm91bmQgc2hvdWxkIHN0YXJ0IG9uY2UgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgI3J1blJvdW5kKCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2V0U2hpcHMoKS5sZW5ndGggPT09IDUgJiYgdGhpcy4jcGxheWVyVHdvLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICBjb25zb2xlLmxvZygncm91bmQgaXMgcnVubmluZycpO1xuICAgICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAjZW5kR2FtZShwbGF5ZXJXaW5uZXIpIHtcbiAgICBpZiAocGxheWVyV2lubmVyID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLiNpc0dhbWVSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy4jaXNSb3VuZFJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gICNzd2l0Y2hDdXJyZW50UGxheWVyKCkge1xuICAgIGlmICh0aGlzLiNpc1BsYXllck9uZVR1cm4pIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJUd287XG4gICAgICBjb25zb2xlLmxvZygnUExBWUVSIFRXTyBUVVJOJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIgPSB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgICBjb25zb2xlLmxvZygnUExBWUVSIE9ORSBUVVJOJyk7XG4gICAgfVxuXG4gICAgdGhpcy4jaXNQbGF5ZXJPbmVUdXJuID0gIXRoaXMuI2lzUGxheWVyT25lVHVybjtcbiAgfVxuXG4gICNnZXRXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuI3BsYXllck9uZUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3dpbicpO1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3bztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZygnd2luJyk7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gVE9ETzogaW1wbGVtZW50IGF0dGFjayBsb2dpY1xuICAjcGxheWVyQXR0YWNrKGNvb3JkKSB7XG4gICAgdGhpcy4jYXR0YWNrQ2VsbChjb29yZCk7XG4gICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuXG4gICAgY29uc3Qgd2lubmVyID0gdGhpcy4jZ2V0V2lubmVyKCk7XG5cbiAgICBpZiAod2lubmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiNlbmRHYW1lKHdpbm5lcik7XG4gICAgICBjb25zb2xlLmxvZyhgcGxheWVyICR7d2lubmVyfSB3b25gKTtcbiAgICB9XG4gIH1cblxuICAjYXR0YWNrQ2VsbChjb29yZCkge1xuICAgIGlmICh0aGlzLiNpc1JvdW5kUnVubmluZyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuI2lzUGxheWVyT25lVHVybikge1xuICAgICAgY3VycmVudEJvYXJkID0gdGhpcy4jcGxheWVyVHdvR2FtZWJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgY3VycmVudEJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAjcGxheWVyUGxhY2VTaGlwKGNvb3JkLCBpc0hvcml6b250YWwpIHtcbiAgICB0aGlzLiNwbGFjZVNoaXAoY29vcmQsIGlzSG9yaXpvbnRhbCk7XG5cbiAgICB0aGlzLiNydW5Sb3VuZCgpO1xuICB9XG5cbiAgI3BsYWNlU2hpcChjb29yZCwgaXNIb3Jpem9udGFsKSB7XG4gICAgaWYgKHRoaXMuI2lzUm91bmRSdW5uaW5nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudEJvYXJkID0gbnVsbDtcbiAgICBsZXQgbmV3U2hpcCA9IG51bGw7XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy4jaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICBjdXJyZW50Qm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRCb2FyZCA9IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZDtcbiAgICB9XG5cbiAgICAvLyBUbyBidWlsZCBzaGlwcyBpbiBwcmUtZGV0ZXJtaW5lZCBwYXR0ZXJuICg1LDQsMywzLDIpXG4gICAgc3dpdGNoICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDUpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDQpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCA0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDMpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDQ6IHtcbiAgICAgICAgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkLCBpc0hvcml6b250YWwsIDIpO1xuICAgICAgICBpc1BsYWNlZCA9IGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgaXNIb3Jpem9udGFsLCAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUGxheWVycyBzaG91bGQgdGFrZSB0dXJucyBhZnRlciBidWlsZGluZyB0aGVpciBlbnRpcmUgZmxlZXRcbiAgICBpZiAoaXNQbGFjZWQpIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIuYWRkU2hpcChuZXdTaGlwKTtcbiAgICAgIGNvbnNvbGUubG9nKCdwbGFjZWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IHBsYXllciBzaGlwcyAke3RoaXMuI2N1cnJlbnRQbGF5ZXIuZ2V0U2hpcHMoKS5sZW5ndGh9YCk7XG5cbiAgICAgIGlmICh0aGlzLiNjdXJyZW50UGxheWVyLmdldFNoaXBzKCkubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2l0Y2gnKTtcbiAgICAgICAgdGhpcy4jc3dpdGNoQ3VycmVudFBsYXllcigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAjZ2V0QVBJQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydEdhbWVIYW5kbGVyOiB0aGlzLnN0YXJ0R2FtZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRvQm9hcmRBY3Rpb25IYW5kbGVyOiB0aGlzLmRvQm9hcmRBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICByZXN0YXJ0Um91bmRIYW5kbGVyOiB0aGlzLnJlc3RhcnRSb3VuZEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIHVwZGF0ZUJvYXJkSGludHNIYW5kbGVyOiB0aGlzLiN1cGRhdGVCb2FyZEhpbnRzSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9Db29yZGluYXRlXCI7XG5pbXBvcnQgaGl0U3RhdHVzIGZyb20gXCIuL0hpdFN0YXR1c1wiO1xuXG5jbGFzcyBCb2FyZENlbGwge1xuICAgICNjb29yZCA9IG51bGw7XG5cbiAgICAjc2hpcCA9IG51bGw7XG5cbiAgICAjaXNPY2N1cGllZCA9IGZhbHNlO1xuXG4gICAgI2hhc0JlZW5IaXQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkID0gbmV3IENvb3JkaW5hdGUoY29vcmRYLCBjb29yZFkpO1xuICAgIH1cblxuICAgIG9jY3VweShzaGlwKSB7XG4gICAgICAgIGlmICh0aGlzLiNzaGlwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jaXNPY2N1cGllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuI3NoaXAgPSBzaGlwO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2hhc0JlZW5IaXQgPT09IHRydWUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLiNoYXNCZWVuSGl0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy4jc2hpcCkge1xuICAgICAgICAgICAgdGhpcy4jc2hpcC50cnlIaXQodGhpcy4jY29vcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmQoKSB7IHJldHVybiB0aGlzLiNjb29yZDsgfVxuXG4gICAgZ2V0Q29vcmRTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgWDogJHt0aGlzLiNjb29yZC5jb29yZFh9IFk6ICR7dGhpcy4jY29vcmQuY29vcmRZfWA7XG4gICAgfVxuXG4gICAgZ2V0SGl0U3RhdHVzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuI2hhc0JlZW5IaXQpIHtcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuTk9UX0hJVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNzaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoaXRTdGF0dXMoKS5ISVRfU0hJUDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0U3RhdHVzKCkuSElUX0NFTEw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGlzT2NjdXBpZWQoKSB7IHJldHVybiB0aGlzLiNpc09jY3VwaWVkOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkQ2VsbDsiLCJjbGFzcyBDb29yZGluYXRlIHtcbiAgICAjY29vcmRYID0gMDtcblxuICAgICNjb29yZFkgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy4jY29vcmRYID0gY29vcmRYO1xuICAgICAgICB0aGlzLiNjb29yZFkgPSBjb29yZFk7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3JkWCgpIHsgcmV0dXJuIE51bWJlci5wYXJzZUludCh0aGlzLiNjb29yZFgsIDEwKTsgfVxuXG4gICAgZ2V0IGNvb3JkWSgpIHsgcmV0dXJuIE51bWJlci5wYXJzZUludCh0aGlzLiNjb29yZFksIDEwKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29yZGluYXRlOyIsImNsYXNzIEdhbWVTdGF0ZURhdGEge1xuICAgICNjdXJyZW50UGxheWVyVXNlck5hbWU7XG5cbiAgICAjaXNHYW1lUnVubmluZztcblxuICAgICNpc1JvdW5kUnVubmluZztcblxuICAgICNpc1BsYXllck9uZVR1cm47XG5cbiAgICAjcGxheWVyT25lVXNlck5hbWU7XG5cbiAgICAjcGxheWVyVHdvVXNlck5hbWU7XG5cbiAgICAjcGxheWVyT25lR2FtZWJvYXJkRGF0YTtcblxuICAgICNwbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuXG4gICAgI3BsYXllck9uZUZsZWV0U2l6ZTtcblxuICAgICNwbGF5ZXJUd29GbGVldFNpemU7XG5cbiAgICAjY3VycmVudFBsYXllckZsZWV0U2l6ZTtcblxuICAgIGdldCBjdXJyZW50VXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNjdXJyZW50UGxheWVyVXNlck5hbWU7IH1cblxuICAgIHNldCBjdXJyZW50VXNlck5hbWUoY3VycmVudFVzZXJOYW1lKSB7IHRoaXMuI2N1cnJlbnRQbGF5ZXJVc2VyTmFtZSA9IGN1cnJlbnRVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IGlzR2FtZVJ1bm5pbmcoKSB7IHJldHVybiB0aGlzLiNpc0dhbWVSdW5uaW5nOyB9XG5cbiAgICBzZXQgaXNHYW1lUnVubmluZyhpc0dhbWVSdW5uaW5nKSB7IHRoaXMuI2lzR2FtZVJ1bm5pbmcgPSBpc0dhbWVSdW5uaW5nOyB9XG5cbiAgICBnZXQgaXNSb3VuZFJ1bm5pbmcoKSB7IHJldHVybiB0aGlzLiNpc1JvdW5kUnVubmluZzsgfVxuXG4gICAgc2V0IGlzUm91bmRSdW5uaW5nKGlzUm91bmRSdW5uaW5nKSB7IHRoaXMuI2lzUm91bmRSdW5uaW5nID0gaXNSb3VuZFJ1bm5pbmc7IH1cblxuICAgIGdldCBpc1BsYXllck9uZVR1cm4oKSB7IHJldHVybiB0aGlzLiNpc1BsYXllck9uZVR1cm47IH1cblxuICAgIHNldCBpc1BsYXllck9uZVR1cm4oaXNQbGF5ZXJPbmVUdXJuKSB7IHRoaXMuI2lzUGxheWVyT25lVHVybiA9IGlzUGxheWVyT25lVHVybjsgfVxuXG4gICAgZ2V0IHBsYXllck9uZVVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lVXNlck5hbWU7IH1cblxuICAgIHNldCBwbGF5ZXJPbmVVc2VyTmFtZShwbGF5ZXJPbmVVc2VyTmFtZSkgeyB0aGlzLiNwbGF5ZXJPbmVVc2VyTmFtZSA9IHBsYXllck9uZVVzZXJOYW1lOyB9XG5cbiAgICBnZXQgcGxheWVyVHdvVXNlck5hbWUoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29Vc2VyTmFtZTsgfVxuXG4gICAgc2V0IHBsYXllclR3b1VzZXJOYW1lKHBsYXllclR3b1VzZXJOYW1lKSB7IHRoaXMuI3BsYXllclR3b1VzZXJOYW1lID0gcGxheWVyVHdvVXNlck5hbWU7IH1cblxuICAgIGdldCBwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgc2V0IHBsYXllck9uZUdhbWVib2FyZERhdGEocGxheWVyT25lR2FtZWJvYXJkRGF0YSkgeyB0aGlzLiNwbGF5ZXJPbmVHYW1lYm9hcmREYXRhID0gcGxheWVyT25lR2FtZWJvYXJkRGF0YTsgfVxuXG4gICAgZ2V0IHBsYXllclR3b0dhbWVib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNwbGF5ZXJUd29HYW1lYm9hcmREYXRhOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvR2FtZWJvYXJkRGF0YShwbGF5ZXJUd29HYW1lYm9hcmREYXRhKSB7IHRoaXMuI3BsYXllclR3b0dhbWVib2FyZERhdGEgPSBwbGF5ZXJUd29HYW1lYm9hcmREYXRhOyB9XG5cbiAgICBnZXQgcGxheWVyT25lRmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyT25lRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgcGxheWVyT25lRmxlZXRTaXplKHBsYXllck9uZUZsZWV0U2l6ZSkgeyB0aGlzLiNwbGF5ZXJPbmVGbGVldFNpemUgPSBwbGF5ZXJPbmVGbGVldFNpemU7IH1cbiAgICBcbiAgICBnZXQgcGxheWVyVHdvRmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jcGxheWVyVHdvRmxlZXRTaXplOyB9XG5cbiAgICBzZXQgcGxheWVyVHdvRmxlZXRTaXplKHBsYXllclR3b0ZsZWV0U2l6ZSkgeyB0aGlzLiNwbGF5ZXJUd29GbGVldFNpemUgPSBwbGF5ZXJUd29GbGVldFNpemU7IH1cblxuICAgIGdldCBjdXJyZW50UGxheWVyRmxlZXRTaXplKCkgeyByZXR1cm4gdGhpcy4jY3VycmVudFBsYXllckZsZWV0U2l6ZTsgfVxuXG4gICAgc2V0IGN1cnJlbnRQbGF5ZXJGbGVldFNpemUoY3VycmVudFBsYXllckZsZWV0U2l6ZSkgeyB0aGlzLiNjdXJyZW50UGxheWVyRmxlZXRTaXplID0gY3VycmVudFBsYXllckZsZWV0U2l6ZTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGVEYXRhOyIsImltcG9ydCBHYW1lU3RhdGVEYXRhIGZyb20gXCIuL0dhbWVTdGF0ZURhdGFcIjtcblxuY2xhc3MgR2FtZVN0YXRlRGF0YUJ1aWxkZXIge1xuICAgICNnYW1lU3RhdGVEYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhID0gbmV3IEdhbWVTdGF0ZURhdGEoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50VXNlck5hbWUoY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuY3VycmVudFVzZXJOYW1lID0gY3VycmVudFVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc0dhbWVSdW5uaW5nKGlzR2FtZVJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc0dhbWVSdW5uaW5nID0gaXNHYW1lUnVubmluZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SXNSb3VuZFJ1bm5pbmcoaXNSb3VuZFJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5pc1JvdW5kUnVubmluZyA9IGlzUm91bmRSdW5uaW5nO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRJc1BsYXllck9uZVR1cm4oaXNQbGF5ZXJPbmVUdXJuKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEuaXNQbGF5ZXJPbmVUdXJuID0gaXNQbGF5ZXJPbmVUdXJuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVVc2VyTmFtZShwbGF5ZXJPbmVVc2VyTmFtZSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllck9uZVVzZXJOYW1lID0gcGxheWVyT25lVXNlck5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b1VzZXJOYW1lKHBsYXllclR3b1VzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvVXNlck5hbWUgPSBwbGF5ZXJUd29Vc2VyTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YShwbGF5ZXJPbmVHYW1lYm9hcmREYXRhKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lR2FtZWJvYXJkRGF0YSA9IHBsYXllck9uZUdhbWVib2FyZERhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFBsYXllclR3b0dhbWVib2FyZERhdGEocGxheWVyVHdvR2FtZWJvYXJkRGF0YSkge1xuICAgICAgICB0aGlzLiNnYW1lU3RhdGVEYXRhLnBsYXllclR3b0dhbWVib2FyZERhdGEgPSBwbGF5ZXJUd29HYW1lYm9hcmREYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPbmVGbGVldFNpemUocGxheWVyT25lRmxlZXRTaXplKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyT25lRmxlZXRTaXplID0gcGxheWVyT25lRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJUd29GbGVldFNpemUocGxheWVyVHdvRmxlZXRTaXplKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEucGxheWVyVHdvRmxlZXRTaXplID0gcGxheWVyVHdvRmxlZXRTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50UGxheWVyRmxlZXRTaXplKGN1cnJlbnRQbGF5ZXJGbGVldFNpemUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZVN0YXRlRGF0YS5jdXJyZW50UGxheWVyRmxlZXRTaXplID0gY3VycmVudFBsYXllckZsZWV0U2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVTdGF0ZURhdGEgPSBuZXcgR2FtZVN0YXRlRGF0YSgpO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCBnYW1lU3RhdGVEYXRhID0gdGhpcy4jZ2FtZVN0YXRlRGF0YTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICByZXR1cm4gZ2FtZVN0YXRlRGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZURhdGFCdWlsZGVyOyIsImNsYXNzIEdhbWVib2FyZERhdGEge1xuICAgICNib2FyZERhdGEgPSBudWxsO1xuXG4gICAgI3BsYXllclVzZXJOYW1lID0gJyc7XG5cbiAgICAjYWxsU2hpcHNTdW5rID0gbnVsbDtcblxuICAgIHNldEJvYXJkRGF0YShib2FyZCkge1xuICAgICAgICBjb25zdCBib2FyZENvcHkgPSBib2FyZC5zbGljZSgpO1xuICAgICAgICBjb25zdCBib2FyZERhdGEgPSBbXTtcblxuICAgICAgICBib2FyZENvcHkuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgYm9hcmREYXRhLnB1c2goLi4ucm93KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jYm9hcmREYXRhID0gYm9hcmREYXRhO1xuICAgIH1cblxuICAgIGdldCBib2FyZERhdGEoKSB7IHJldHVybiB0aGlzLiNib2FyZERhdGE7IH1cblxuICAgIGdldCBwbGF5ZXJVc2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclVzZXJOYW1lOyB9XG5cbiAgICBzZXQgcGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpIHsgdGhpcy4jcGxheWVyVXNlck5hbWUgPSBwbGF5ZXJVc2VyTmFtZTsgfVxuXG4gICAgZ2V0IGFsbFNoaXBzU3VuaygpIHsgcmV0dXJuIHRoaXMuI2FsbFNoaXBzU3VuazsgfVxuXG4gICAgc2V0IGFsbFNoaXBzU3VuayhhbGxTaGlwc1N1bmspIHsgdGhpcy4jYWxsU2hpcHNTdW5rID0gYWxsU2hpcHNTdW5rOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZERhdGE7IiwiaW1wb3J0IEdhbWVib2FyZERhdGEgZnJvbSBcIi4vR2FtZWJvYXJkRGF0YVwiO1xuXG5jbGFzcyBHYW1lQm9hcmREYXRhQnVpbGRlciB7XG4gICAgI2dhbWVib2FyZERhdGEgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEgPSBuZXcgR2FtZWJvYXJkRGF0YSgpO1xuICAgIH1cblxuICAgIHNldEJvYXJkRGF0YShnYW1lYm9hcmQpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5zZXRCb2FyZERhdGEoZ2FtZWJvYXJkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyVXNlck5hbWUocGxheWVyVXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkRGF0YS5wbGF5ZXJVc2VyTmFtZSA9IHBsYXllclVzZXJOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRBbGxTaGlwc1N1bmsoYWxsU2hpcHNTdW5rKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEuYWxsU2hpcHNTdW5rID0gYWxsU2hpcHNTdW5rO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAjcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZERhdGEgPSBuZXcgR2FtZWJvYXJkRGF0YSgpO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmREYXRhID0gdGhpcy4jZ2FtZWJvYXJkRGF0YTtcbiAgICAgICAgdGhpcy4jcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZERhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmREYXRhQnVpbGRlcjsiLCJpbXBvcnQgQm9hcmRDZWxsIGZyb20gXCIuL0JvYXJkQ2VsbFwiO1xuaW1wb3J0IEdhbWVib2FyZERhdGFCdWlsZGVyIGZyb20gXCIuL0RhdGFQb2ludENvbnRhaW5lcnMvR2FtZWJvYXJkRGF0YUJ1aWxkZXJcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICAjd2lkdGggPSAxMDtcblxuICAgICNoZWlnaHQgPSAxMDtcblxuICAgICNib2FyZCA9IFtdO1xuXG4gICAgLy8gc3dhcHBpbmcgc3VwcG9zZWRseSBYIGFuZCBZIGNvb3JkaW5hdGVzIGhlcmUgYmVjYXVzZSBvZiBmYWlsZWQgYXR0ZW1wdCB0byBpbXBsZW1lbnQgMkQgYXJyYXlzIGluIEphdmFTY3JpcHQuLi5cbiAgICAjc2hpcExpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNpbml0Qm9hcmQoKTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgaXNIb3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNjYW5QbGFjZShzaGlwLmdldENvb3JkU3RhcnQoKSwgaXNIb3Jpem9udGFsLCBsZW5ndGgpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy4jc2hpcExpc3QucHVzaChzaGlwKTtcblxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRZIC0gMV1bKHNoaXAuZ2V0Q29vcmRTdGFydCgpLmNvb3JkWCAtIDEpICsgaV07XG4gICAgICAgICAgICAgICAgYm9hcmRDZWxsLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFsoc2hpcC5nZXRDb29yZFN0YXJ0KCkuY29vcmRZIC0gMSkgKyBpXVtzaGlwLmdldENvb3JkU3RhcnQoKS5jb29yZFggLSAxXTtcbiAgICAgICAgICAgICAgICBib2FyZENlbGwub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jYm9hcmRbY29vcmQuY29vcmRZIC0gMV1bY29vcmQuY29vcmRYIC0gMV0uaGl0KCk7XG4gICAgfVxuXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hpcExpc3QuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG5cbiAgICBnZXRHYW1lYm9hcmREYXRhKHBsYXllclVzZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZERhdGFCdWlsZGVyID0gbmV3IEdhbWVib2FyZERhdGFCdWlsZGVyKCk7XG5cbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGF0YSA9IGdhbWVib2FyZERhdGFCdWlsZGVyLnNldEJvYXJkRGF0YSh0aGlzLiNib2FyZClcbiAgICAgICAgLnNldFBsYXllclVzZXJOYW1lKHBsYXllclVzZXJOYW1lKVxuICAgICAgICAuc2V0QWxsU2hpcHNTdW5rKHRoaXMuYWxsU2hpcHNTdW5rKCkpXG4gICAgICAgIC5idWlsZCgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZERhdGE7XG4gICAgfVxuXG4gICAgI2NhblBsYWNlKGNvb3JkU3RhcnQsIGlzSG9yaXpvbnRhbCwgbGVuZ3RoKSB7XG4gICAgICAgIHN3aXRjaCAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRYIC0gMSkgKyBsZW5ndGggPiB0aGlzLiN3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSB0aGlzLiNib2FyZFtjb29yZFN0YXJ0LmNvb3JkWSAtIDFdWyhjb29yZFN0YXJ0LmNvb3JkWCAtIDEpICsgaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbC5pc09jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZmFsc2U6IHtcbiAgICAgICAgICAgICAgICAvLyB0byBleGNsdWRlIHN0YXJ0aW5nIHBvaW50IGZyb20gY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBsZW5ndGggPiB0aGlzLiNoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gdGhpcy4jYm9hcmRbKGNvb3JkU3RhcnQuY29vcmRZIC0gMSkgKyBpXVtjb29yZFN0YXJ0LmNvb3JkWCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZENlbGwuaXNPY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0Qm9hcmQoKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZC5sZW5ndGggIT09IDApIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuI3dpZHRoOyB4ICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuI2JvYXJkLnB1c2goW10pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuI2hlaWdodDsgeSArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gc3dhcHBpbmcgdmFsdWVzIGR1ZSB0byB3cm9uZyBjZWxsIGRhdGEgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUNlbGwgPSBuZXcgQm9hcmRDZWxsKHkgKyAxLCB4ICsgMSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNib2FyZFt4XS5wdXNoKGVtcHR5Q2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImZ1bmN0aW9uIGhpdFN0YXR1cygpIHtcbiAgICBjb25zdCBOT1RfSElUID0gJ05PVF9ISVQnO1xuICAgIGNvbnN0IEhJVF9DRUxMID0gJ0hJVF9DRUxMJztcbiAgICBjb25zdCBISVRfU0hJUCA9ICdISVRfU0hJUCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBOT1RfSElULFxuICAgICAgICBISVRfQ0VMTCxcbiAgICAgICAgSElUX1NISVBcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGl0U3RhdHVzOyIsImNsYXNzIFBsYXllciB7XG4gICNwbGF5ZXJOYW1lID0gJyc7XG5cbiAgI2hpdExvZyA9IFtdO1xuXG4gICNwbGF5ZXJTaGlwcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHVzZXJOYW1lKSB7XG4gICAgdGhpcy4jcGxheWVyTmFtZSA9IHVzZXJOYW1lO1xuICB9XG5cbiAgbG9nSGl0KGNvb3JkKSB7XG4gICAgdGhpcy4jaGl0TG9nLnB1c2goY29vcmQpO1xuICB9XG5cbiAgYWRkU2hpcChzaGlwKSB7XG4gICAgdGhpcy4jcGxheWVyU2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIGdldEhpdExvZygpIHtcbiAgICByZXR1cm4gdGhpcy4jaGl0TG9nLnNsaWNlKCk7XG4gIH1cblxuICBnZXRTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyU2hpcHMuc2xpY2UoKTtcbiAgfVxuXG4gIHJlc2V0VXNlcigpIHtcbiAgICB0aGlzLiNoaXRMb2cgPSBbXTtcbiAgICB0aGlzLiNwbGF5ZXJTaGlwcyA9IFtdO1xuICB9XG5cbiAgc2V0UGxheWVyTmFtZSh1c2VyTmFtZSkge1xuICAgIHRoaXMuI3BsYXllck5hbWUgPSB1c2VyTmFtZTtcbiAgfVxuXG4gIGdldFBsYXllck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllck5hbWU7XG4gIH07XG5cbiAgZ2V0IGZsZWV0U2l6ZSgpIHsgcmV0dXJuIHRoaXMuI3BsYXllclNoaXBzLmxlbmd0aDsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiaW1wb3J0IFNoaXBQaWVjZSBmcm9tIFwiLi9TaGlwUGllY2VcIjtcblxuY2xhc3MgU2hpcCB7XG4gICN0aW1lc0hpdCA9IDA7XG5cbiAgI3NoaXBQaWVjZXMgPSBbXTtcbiAgXG4gICNjb29yZFN0YXJ0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICB0aGlzLiNjb29yZFN0YXJ0ID0gY29vcmRTdGFydFxuICAgIHRoaXMuI2J1aWxkU2hpcChjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpO1xuICB9XG5cbiAgdHJ5SGl0KGhpdENvb3JkKSB7XG4gICAgY29uc3Qgc2hpcFBpZWNlID0gdGhpcy4jc2hpcFBpZWNlcy5maW5kKHBpZWNlQ29vcmQgPT5cbiAgICAgIChwaWVjZUNvb3JkLmNvb3JkWCA9PT0gaGl0Q29vcmQuY29vcmRYKSAmJiAocGllY2VDb29yZC5jb29yZFkgPT09IGhpdENvb3JkLmNvb3JkWSlcbiAgICApO1xuXG4gICAgaWYgKHNoaXBQaWVjZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHNoaXBQaWVjZS5oaXRTdGF0dXMgPT09IHRydWUpIHJldHVybiBmYWxzZTsgXG5cbiAgICB0aGlzLiN0aW1lc0hpdCArPSAxO1xuXG4gICAgcmV0dXJuIHNoaXBQaWVjZS5oaXQoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcFBpZWNlcy5ldmVyeShzaGlwUGllY2UgPT5cbiAgICAgIHNoaXBQaWVjZS5oaXRTdGF0dXMgPT09IHRydWVcbiAgICApO1xuICB9XG5cbiAgI2J1aWxkU2hpcChjb29yZFN0YXJ0LCBob3Jpem9udGFsLCBsZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgc2hpcFBpZWNlQ29vcmQgPSBudWxsO1xuXG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICBzaGlwUGllY2VDb29yZCA9IG5ldyBTaGlwUGllY2UoY29vcmRTdGFydC5jb29yZFggKyBpLCBjb29yZFN0YXJ0LmNvb3JkWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwUGllY2VDb29yZCA9IG5ldyBTaGlwUGllY2UoY29vcmRTdGFydC5jb29yZFgsIGNvb3JkU3RhcnQuY29vcmRZICsgaSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuI3NoaXBQaWVjZXMucHVzaChzaGlwUGllY2VDb29yZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29vcmRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29vcmRTdGFydDtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7IHJldHVybiB0aGlzLiNzaGlwUGllY2VzLmxlbmd0aDsgfVxuXG4gIGdldCB0aW1lc0hpdCgpIHsgcmV0dXJuIHRoaXMuI3RpbWVzSGl0OyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vQ29vcmRpbmF0ZVwiO1xuXG5jbGFzcyBTaGlwUGllY2Uge1xuICAgICNjb29yZCA9IG51bGw7XG5cbiAgICAjaGl0U3RhdHVzID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICB0aGlzLiNjb29yZCA9IG5ldyBDb29yZGluYXRlKGNvb3JkWCwgY29vcmRZKTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuI2hpdFN0YXR1cyA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLiNoaXRTdGF0dXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3JkWCgpIHsgcmV0dXJuIHRoaXMuI2Nvb3JkLmNvb3JkWCB9XG5cbiAgICBnZXQgY29vcmRZKCkgeyByZXR1cm4gdGhpcy4jY29vcmQuY29vcmRZOyB9XG5cbiAgICBnZXQgaGl0U3RhdHVzKCkgeyByZXR1cm4gdGhpcy4jaGl0U3RhdHVzOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBQaWVjZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUtdWktY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJlbTtcblxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdidXR0b24nXG4gICAgJ2JvYXJkJztcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMmVtXG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAyZW07XG59XG5cbi5ib2FyZCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgZ3JpZC1hcmVhOiBib2FyZDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5ib2FyZC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib2FyZC1jZWxsOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcbn1cblxuLmJ1dHRvbiB7XG4gIGdyaWQtYXJlYTogYnV0dG9uO1xuXG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbi1hY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7O0VBRVI7O1dBRVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCOztFQUV2QixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLXVpLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdidXR0b24nXFxuICAgICdib2FyZCc7XFxufVxcblxcbi5jb250cm9scy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMmVtXFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gIGdyaWQtYXJlYTogYm9hcmQ7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLWNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZC1jZWxsOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbi1hY3RpdmUge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOlsiaGl0U3RhdHVzIiwiX2JvYXJkT25lIiwiV2Vha01hcCIsIl9ib2FyZFR3byIsIl9zdGFydEdhbWVCdXR0b24iLCJfc3dpdGNoSG9yaXpvbnRhbEJ1dHRvbiIsIl9yZXN0YXJ0R2FtZUJ1dHRvbiIsIl9ib2FyZEluaXQiLCJfTlVNQkVSX09GX0NFTExTIiwiX2lzSG9yaXpvbnRhbCIsIl9CT0FSRF9IRUlHSFQiLCJfQk9BUkRfV0lEVEgiLCJfbWFwSGFuZGxlcnMiLCJXZWFrU2V0IiwiX2luaXRCb2FyZCIsIl91cGRhdGVET01Cb2FyZCIsIl90b2dnbGVIb3Jpem9udGFsIiwiX2NyZWF0ZUJvYXJkQ2VsbCIsIl91cGRhdGVDZWxsTWV0YURhdGEiLCJfdXBkYXRlQ2VsbFN0YXR1cyIsIl9oaWdobGlnaENlbGxzQnVpbGRpbmciLCJfaGlnaGxpZ2h0Q2VsbHMiLCJfZ2V0U2hpcFNpemVQYXR0ZXJuIiwiRE9NQ29udHJvbGxlciIsImNvbnRyb2xsZXJBUEkiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIndyaXRhYmxlIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9pbml0Qm9hcmQyIiwiY2FsbCIsImRvQm9hcmRBY3Rpb25IYW5kbGVyIiwidXBkYXRlQm9hcmRIaW50c0hhbmRsZXIiLCJfbWFwSGFuZGxlcnMyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidXBkYXRlVUkiLCJnYW1lU3RhdGVEYXRhIiwiY3VycmVudENlbGxDb29yZCIsIl91cGRhdGVET01Cb2FyZDIiLCJfaGlnaGxpZ2hDZWxsc0J1aWxkaW5nMiIsImN1cnJlbnRQbGF5ZXJGbGVldFNpemUiLCJpc1JvdW5kUnVubmluZyIsImN1cnJlbnRVc2VyTmFtZSIsImdldElzSG9yaXpvbnRhbCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWVIYW5kbGVyIiwiX3RvZ2dsZUhvcml6b250YWwyIiwiYmluZCIsInJlc3RhcnRSb3VuZEhhbmRsZXIiLCJ1cGRhdGVCb2FyZEhpdHNIYW5kbGVyIiwiaSIsIm5ld0JvYXJkQ2VsbE9uZSIsIl9jcmVhdGVCb2FyZENlbGwyIiwibmV3Qm9hcmRDZWxsVHdvIiwiYXBwZW5kQ2hpbGQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJnYW1lYm9hcmRPbmVEYXRhIiwicGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdhbWVib2FyZFR3b0RhdGEiLCJwbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwibm9kZUJvYXJkT25lIiwiY2hpbGROb2RlcyIsImRhdGFCb2FyZE9uZSIsImJvYXJkRGF0YSIsIm5vZGVCb2FyZFR3byIsImRhdGFCb2FyZFR3byIsIl91cGRhdGVDZWxsU3RhdHVzMiIsIl91cGRhdGVDZWxsTWV0YURhdGEyIiwicGxheWVyVXNlck5hbWUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJuZXdDZWxsIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImNlbGxOb2RlIiwiY2VsbERhdGEiLCJwbGF5ZXJuYW1lIiwiY29vcmQiLCJnZXRDb29yZCIsInNldEF0dHJpYnV0ZSIsImNvb3JkWCIsImNvb3JkWSIsIm5vZGUiLCJkYXRhIiwic3RhdHVzIiwiZ2V0SGl0U3RhdHVzIiwiTk9UX0hJVCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiSElUX1NISVAiLCJISVRfQ0VMTCIsImlzT2NjdXBpZWQiLCJjdXJyZW50UGxheWVyTmFtZSIsInNoaXBTaXplUGF0dGVybiIsIl9nZXRTaGlwU2l6ZVBhdHRlcm4yIiwiX2hpZ2hsaWdodENlbGxzMiIsImNvbnNvbGUiLCJsb2ciLCJpc0hvcml6b250YWwiLCJjdXJyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJQbGF5ZXIiLCJTaGlwIiwiR2FtZWJvYXJkIiwiQ29vcmRpbmF0ZSIsIkdhbWVTdGF0ZURhdGFCdWlsZGVyIiwiX2N1cnJlbnRQbGF5ZXIiLCJfaXNHYW1lUnVubmluZyIsIl9pc1JvdW5kUnVubmluZyIsIl9pc1BsYXllck9uZVR1cm4iLCJfcGxheWVyT25lIiwiX3BsYXllclR3byIsIl9wbGF5ZXJPbmVHYW1lYm9hcmQiLCJfcGxheWVyVHdvR2FtZWJvYXJkIiwiX0RPTUNvbnRyb2xsZXIiLCJfdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIiLCJfdXBkYXRlR2FtZVVJIiwiX2dldEdhbWVTdGF0ZURhdGEiLCJfcnVuUm91bmQiLCJfZW5kR2FtZSIsIl9zd2l0Y2hDdXJyZW50UGxheWVyIiwiX2dldFdpbm5lciIsIl9wbGF5ZXJBdHRhY2siLCJfYXR0YWNrQ2VsbCIsIl9wbGF5ZXJQbGFjZVNoaXAiLCJfcGxhY2VTaGlwIiwiX2dldEFQSUNvbnRhaW5lciIsIkdhbWVDb250cm9sbGVyIiwiX2dldEFQSUNvbnRhaW5lcjIiLCJfdXBkYXRlR2FtZVVJMiIsImV2ZW50IiwidGFyZ2V0IiwiaXNDZWxsT3duZXIiLCJkYXRhc2V0IiwiZ2V0UGxheWVyTmFtZSIsImNvb3JkeCIsImNvb3JkeSIsImNlbGxDb29yZCIsIl9wbGF5ZXJQbGFjZVNoaXAyIiwiX3BsYXllckF0dGFjazIiLCJfdXBkYXRlQm9hcmRIaW50c0hhbmRsZXIyIiwiX2dldEdhbWVTdGF0ZURhdGEyIiwiZ2FtZVN0YXRlRGF0YUJ1aWxkZXIiLCJzZXRDdXJyZW50VXNlck5hbWUiLCJzZXRJc0dhbWVSdW5uaW5nIiwic2V0SXNSb3VuZFJ1bm5pbmciLCJzZXRJc1BsYXllck9uZVR1cm4iLCJzZXRQbGF5ZXJPbmVVc2VyTmFtZSIsInNldFBsYXllclR3b1VzZXJOYW1lIiwic2V0UGxheWVyT25lR2FtZWJvYXJkRGF0YSIsImdldEdhbWVib2FyZERhdGEiLCJzZXRQbGF5ZXJUd29HYW1lYm9hcmREYXRhIiwic2V0UGxheWVyT25lRmxlZXRTaXplIiwiZmxlZXRTaXplIiwic2V0UGxheWVyVHdvRmxlZXRTaXplIiwic2V0Q3VycmVudFBsYXllckZsZWV0U2l6ZSIsImJ1aWxkIiwiX3J1blJvdW5kMiIsImdldFNoaXBzIiwibGVuZ3RoIiwiX2VuZEdhbWUyIiwicGxheWVyV2lubmVyIiwiX3N3aXRjaEN1cnJlbnRQbGF5ZXIyIiwiX2dldFdpbm5lcjIiLCJhbGxTaGlwc1N1bmsiLCJfYXR0YWNrQ2VsbDIiLCJ3aW5uZXIiLCJjdXJyZW50Qm9hcmQiLCJyZWNlaXZlQXR0YWNrIiwiX3BsYWNlU2hpcDIiLCJuZXdTaGlwIiwiaXNQbGFjZWQiLCJwbGFjZVNoaXAiLCJhZGRTaGlwIiwiX2Nvb3JkIiwiX3NoaXAiLCJfaXNPY2N1cGllZCIsIl9oYXNCZWVuSGl0IiwiQm9hcmRDZWxsIiwib2NjdXB5Iiwic2hpcCIsImhpdCIsInRyeUhpdCIsImdldENvb3JkU3RyaW5nIiwiZ2V0IiwiX2Nvb3JkWCIsIl9jb29yZFkiLCJOdW1iZXIiLCJwYXJzZUludCIsIkdhbWVTdGF0ZURhdGEiLCJfY3VycmVudFBsYXllclVzZXJOYW1lIiwiX3BsYXllck9uZVVzZXJOYW1lIiwiX3BsYXllclR3b1VzZXJOYW1lIiwiX3BsYXllck9uZUdhbWVib2FyZERhdGEiLCJfcGxheWVyVHdvR2FtZWJvYXJkRGF0YSIsIl9wbGF5ZXJPbmVGbGVldFNpemUiLCJfcGxheWVyVHdvRmxlZXRTaXplIiwiX2N1cnJlbnRQbGF5ZXJGbGVldFNpemUiLCJzZXQiLCJpc0dhbWVSdW5uaW5nIiwiaXNQbGF5ZXJPbmVUdXJuIiwicGxheWVyT25lVXNlck5hbWUiLCJwbGF5ZXJUd29Vc2VyTmFtZSIsInBsYXllck9uZUZsZWV0U2l6ZSIsInBsYXllclR3b0ZsZWV0U2l6ZSIsIl9nYW1lU3RhdGVEYXRhIiwicmVzZXQiLCJHYW1lYm9hcmREYXRhIiwiX2JvYXJkRGF0YSIsIl9wbGF5ZXJVc2VyTmFtZSIsIl9hbGxTaGlwc1N1bmsiLCJzZXRCb2FyZERhdGEiLCJib2FyZCIsImJvYXJkQ29weSIsInNsaWNlIiwiZm9yRWFjaCIsInJvdyIsInB1c2giLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9nYW1lYm9hcmREYXRhIiwiX3Jlc2V0IiwiR2FtZUJvYXJkRGF0YUJ1aWxkZXIiLCJnYW1lYm9hcmQiLCJzZXRQbGF5ZXJVc2VyTmFtZSIsInNldEFsbFNoaXBzU3VuayIsImdhbWVib2FyZERhdGEiLCJfcmVzZXQyIiwiR2FtZWJvYXJkRGF0YUJ1aWxkZXIiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX2JvYXJkIiwiX3NoaXBMaXN0IiwiX2NhblBsYWNlIiwiX2NhblBsYWNlMiIsImdldENvb3JkU3RhcnQiLCJib2FyZENlbGwiLCJldmVyeSIsImlzU3VuayIsImdhbWVib2FyZERhdGFCdWlsZGVyIiwiY29vcmRTdGFydCIsIngiLCJ5IiwiZW1wdHlDZWxsIiwidXNlck5hbWUiLCJfcGxheWVyTmFtZSIsIl9oaXRMb2ciLCJfcGxheWVyU2hpcHMiLCJsb2dIaXQiLCJnZXRIaXRMb2ciLCJyZXNldFVzZXIiLCJzZXRQbGF5ZXJOYW1lIiwiU2hpcFBpZWNlIiwiX3RpbWVzSGl0IiwiX3NoaXBQaWVjZXMiLCJfY29vcmRTdGFydCIsIl9idWlsZFNoaXAiLCJob3Jpem9udGFsIiwiX2J1aWxkU2hpcDIiLCJoaXRDb29yZCIsInNoaXBQaWVjZSIsImZpbmQiLCJwaWVjZUNvb3JkIiwidW5kZWZpbmVkIiwic2hpcFBpZWNlQ29vcmQiLCJfaGl0U3RhdHVzIiwiY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=