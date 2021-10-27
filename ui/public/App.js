"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AddCust = /*#__PURE__*/function (_React$Component) {
  _inherits(AddCust, _React$Component);

  var _super = _createSuper(AddCust);

  function AddCust() {
    var _this;

    _classCallCheck(this, AddCust);

    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.state = {
      d: '1'
    };
    return _this;
  }

  _createClass(AddCust, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.custAdd;
      var field = {
        name: form.name.value,
        number: form.number.value
      };
      this.props.createField(field);
      form.name.value = "";
      form.number.value = "";
    }
  }, {
    key: "goback",
    value: function goback() {
      this.setState({
        d: '2'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.d == '1' && /*#__PURE__*/React.createElement("div", {
        className: "add"
      }, /*#__PURE__*/React.createElement("h1", null, "Add Customer "), /*#__PURE__*/React.createElement("div", {
        className: "abc"
      }, /*#__PURE__*/React.createElement("form", {
        className: "add_form",
        name: "custAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("label", {
        for: "na"
      }, "Enter Name to Add"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "na",
        name: "name",
        placeholder: "Enter Name"
      }), /*#__PURE__*/React.createElement("label", {
        for: "no"
      }, "Enter Number to add "), /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "no",
        name: "number",
        placeholder: "Enter Number"
      }), /*#__PURE__*/React.createElement("button", {
        id: "Add_button"
      }, "Add Customer")), /*#__PURE__*/React.createElement("button", {
        className: "goback",
        onClick: this.goback.bind(this)
      }, " Go back to home page"))), this.state.d == '2' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DisplayHomepage, {
        delField: this.props.delField,
        createField: this.props.createField,
        data: this.props.data
      })));
    }
  }]);

  return AddCust;
}(React.Component);

var DelCust = /*#__PURE__*/function (_React$Component2) {
  _inherits(DelCust, _React$Component2);

  var _super2 = _createSuper(DelCust);

  function DelCust() {
    var _this2;

    _classCallCheck(this, DelCust);

    _this2 = _super2.call(this);
    _this2.delSubmit = _this2.delSubmit.bind(_assertThisInitialized(_this2));
    _this2.state = {
      d: '1'
    };
    return _this2;
  }

  _createClass(DelCust, [{
    key: "delSubmit",
    value: function delSubmit(e) {
      e.preventDefault();
      var form = document.forms.custDel;
      var a = Number(form.no.value);
      var field = {
        id: a
      };
      this.props.delField(field);
      form.no.value = "";
    }
  }, {
    key: "goback",
    value: function goback() {
      this.setState({
        d: '2'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.d == '1' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Delete Customer"), /*#__PURE__*/React.createElement("div", {
        className: "abc"
      }, /*#__PURE__*/React.createElement("form", {
        name: "custDel",
        onSubmit: this.delSubmit
      }, /*#__PURE__*/React.createElement("label", {
        for: "abc"
      }, "Enter Key Number to delete"), /*#__PURE__*/React.createElement("input", {
        id: "abc",
        name: "no",
        type: "text",
        placeholder: "Enter Serial"
      }), /*#__PURE__*/React.createElement("button", {
        id: "Del_button"
      }, "Delete Customer")), /*#__PURE__*/React.createElement("button", {
        onClick: this.goback.bind(this)
      }, "Go back to home page"))), this.state.d == '2' && /*#__PURE__*/React.createElement(DisplayHomepage, {
        delField: this.props.delField,
        createField: this.props.createField,
        data: this.props.data
      }));
    }
  }]);

  return DelCust;
}(React.Component);

var DisplaySlots = /*#__PURE__*/function (_React$Component3) {
  _inherits(DisplaySlots, _React$Component3);

  var _super3 = _createSuper(DisplaySlots);

  function DisplaySlots() {
    _classCallCheck(this, DisplaySlots);

    return _super3.apply(this, arguments);
  }

  _createClass(DisplaySlots, [{
    key: "render",
    value: function render() {
      var slots = 25 - this.props.data.length;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number of Free Slots :", slots));
    }
  }]);

  return DisplaySlots;
}(React.Component);

var CreateRow = /*#__PURE__*/function (_React$Component4) {
  _inherits(CreateRow, _React$Component4);

  var _super4 = _createSuper(CreateRow);

  function CreateRow() {
    _classCallCheck(this, CreateRow);

    return _super4.apply(this, arguments);
  }

  _createClass(CreateRow, [{
    key: "render",
    value: function render() {
      var t = this.props.r;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, t.id), /*#__PURE__*/React.createElement("td", null, t.name), /*#__PURE__*/React.createElement("td", null, t.number), /*#__PURE__*/React.createElement("td", null, t.timestamp.toLocaleTimeString()));
    }
  }]);

  return CreateRow;
}(React.Component);

var CreateTable = /*#__PURE__*/function (_React$Component5) {
  _inherits(CreateTable, _React$Component5);

  var _super5 = _createSuper(CreateTable);

  function CreateTable() {
    _classCallCheck(this, CreateTable);

    return _super5.apply(this, arguments);
  }

  _createClass(CreateTable, [{
    key: "render",
    value: function render() {
      var rows = this.props.data.map(function (row) {
        return /*#__PURE__*/React.createElement(CreateRow, {
          key: row.id,
          r: row
        });
      });
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Serial Number"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Number"), /*#__PURE__*/React.createElement("th", null, "Timestamp"))), /*#__PURE__*/React.createElement("tbody", null, rows)));
    }
  }]);

  return CreateTable;
}(React.Component);

var DisplayCust = /*#__PURE__*/function (_React$Component6) {
  _inherits(DisplayCust, _React$Component6);

  var _super6 = _createSuper(DisplayCust);

  function DisplayCust() {
    var _this3;

    _classCallCheck(this, DisplayCust);

    _this3 = _super6.call(this);
    _this3.state = {
      d: '1'
    };
    return _this3;
  }

  _createClass(DisplayCust, [{
    key: "goback",
    value: function goback() {
      this.setState({
        d: '2'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.data;
      var tab = /*#__PURE__*/React.createElement(CreateTable, {
        data: t
      });
      return /*#__PURE__*/React.createElement("div", null, this.state.d == '1' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Customers"), /*#__PURE__*/React.createElement("div", null, tab))), this.state.d == '2' && /*#__PURE__*/React.createElement(DisplayHomepage, {
        delField: this.props.delField,
        createField: this.props.createField,
        data: t
      }));
    }
  }]);

  return DisplayCust;
}(React.Component);

var DisplayHomepage = /*#__PURE__*/function (_React$Component7) {
  _inherits(DisplayHomepage, _React$Component7);

  var _super7 = _createSuper(DisplayHomepage);

  function DisplayHomepage() {
    var _this4;

    _classCallCheck(this, DisplayHomepage);

    _this4 = _super7.call(this);
    _this4.state = {
      d: '1'
    };
    return _this4;
  }

  _createClass(DisplayHomepage, [{
    key: "add",
    value: function add() {
      this.setState({
        d: '2'
      });
    }
  }, {
    key: "disp",
    value: function disp() {
      this.setState({
        d: '3'
      });
    }
  }, {
    key: "del",
    value: function del() {
      this.setState({
        d: '4'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.d == '1' && /*#__PURE__*/React.createElement("div", {
        className: "abcd"
      }, /*#__PURE__*/React.createElement("h1", null, "Welcome to Hotel California!!!"), /*#__PURE__*/React.createElement("button", {
        onClick: this.add.bind(this)
      }, "Add Customer"), /*#__PURE__*/React.createElement("button", {
        onClick: this.del.bind(this)
      }, "Remove Customer")), this.state.d == '2' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AddCust, {
        createField: this.props.createField,
        data: this.props.data,
        delField: this.props.delField
      })), this.state.d == '3' && /*#__PURE__*/React.createElement(DisplayCust, {
        createField: this.createField,
        data: this.props.data,
        delField: this.props.delField
      }), this.state.d == '4' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DelCust, {
        delField: this.props.delField,
        createField: this.props.createField,
        data: this.props.data
      })));
    }
  }]);

  return DisplayHomepage;
}(React.Component);

function jsonDateReviver(key, value) {
  var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

var MainClass = /*#__PURE__*/function (_React$Component8) {
  _inherits(MainClass, _React$Component8);

  var _super8 = _createSuper(MainClass);

  function MainClass() {
    var _this5;

    _classCallCheck(this, MainClass);

    _this5 = _super8.call(this);
    _this5.state = {
      data: []
    };
    _this5.createField = _this5.createField.bind(_assertThisInitialized(_this5));
    _this5.delField = _this5.delField.bind(_assertThisInitialized(_this5));
    return _this5;
  }

  _createClass(MainClass, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, response, body, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query \n        {\n            recList \n            {\n                id\n                name\n                number\n                timestamp            \n            }\n        }";
                _context.next = 3;
                return fetch('http://localhost:3000/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query
                  })
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.text();

              case 6:
                body = _context.sent;
                result = JSON.parse(body, jsonDateReviver);
                this.setState({
                  data: result.data.recList
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "createField",
    value: function () {
      var _createField = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(field) {
        var l, query, respone;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                l = this.state.data.length;

                if (!(l >= 25)) {
                  _context2.next = 5;
                  break;
                }

                alert("List Full");
                _context2.next = 10;
                break;

              case 5:
                query = "mutation recAdd($field: recInputs!) {\n            recAdd(field: $field) {\n            id\n            }\n            }";
                _context2.next = 8;
                return fetch('http://localhost:3000/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: {
                      field: field
                    }
                  })
                });

              case 8:
                respone = _context2.sent;
                this.loadData();

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createField(_x) {
        return _createField.apply(this, arguments);
      }

      return createField;
    }()
  }, {
    key: "delField",
    value: function () {
      var _delField = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(field) {
        var l, query, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                l = this.state.data.length;

                if (!(field.id > this.state.data.length || field.id <= 0 || isNaN(field.id))) {
                  _context3.next = 5;
                  break;
                }

                alert("Invalid Entry");
                _context3.next = 10;
                break;

              case 5:
                query = "mutation recDel($field: recInd!) { recDel(field: $field) \n            {\n            id\n            }\n            } ";
                _context3.next = 8;
                return fetch('http://localhost:3000/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: {
                      field: field
                    }
                  })
                });

              case 8:
                response = _context3.sent;
                this.loadData();

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function delField(_x2) {
        return _delField.apply(this, arguments);
      }

      return delField;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DisplayHomepage, {
        data: this.state.data,
        createField: this.createField,
        delField: this.delField
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(DisplayCust, {
        createField: this.createField,
        data: this.state.data,
        delField: this.delField
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(DisplaySlots, {
        data: this.state.data
      }), /*#__PURE__*/React.createElement("hr", null));
    }
  }]);

  return MainClass;
}(React.Component);

var Disp = /*#__PURE__*/function (_React$Component9) {
  _inherits(Disp, _React$Component9);

  var _super9 = _createSuper(Disp);

  function Disp() {
    _classCallCheck(this, Disp);

    return _super9.call(this);
  }

  _createClass(Disp, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(MainClass, null);
    }
  }]);

  return Disp;
}(React.Component);

var element = /*#__PURE__*/React.createElement(Disp, null);
ReactDOM.render(element, document.getElementById('contents'));