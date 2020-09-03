"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var canvas = document.querySelector("#philCanvas");
var philGraph = new Graph({
  canvas: canvas
});
var lastId = null;
var lastFillColor = "";
var lastStrokeColor = "";

function highlight(e) {
  var targetNode = e.target.closest("g");

  if ((targetNode === null || targetNode === void 0 ? void 0 : targetNode.id) != lastId) {
    if (lastId) {
      var lastTarget = document.querySelector("#".concat(lastId));
      lastTarget.remove();
      philGraph.nodeDictionary[lastId].fillColor = lastFillColor;
      philGraph.nodeDictionary[lastId].strokeColor = lastStrokeColor;
      philGraph.nodeDictionary[lastId].displayLabel = false;
      philGraph.drawNode(lastId);
    }

    lastId = null;

    if (targetNode) {
      var id = targetNode.id;
      targetNode.remove();
      lastFillColor = philGraph.nodeDictionary[id].fillColor;
      lastStrokeColor = philGraph.nodeDictionary[id].strokeColor;
      philGraph.nodeDictionary[id].fillColor = "#4ebaaa";
      philGraph.nodeDictionary[id].strokeColor = "#4ebaaa";
      philGraph.nodeDictionary[id].displayLabel = true;
      philGraph.drawNode(id);
      lastId = id;
    }
  }
}

canvas.addEventListener("mouseover", highlight);
var nodes = [];
var nodeIds = [];
var edges = [];

function queryToGraph(_x) {
  return _queryToGraph.apply(this, arguments);
}

function _queryToGraph() {
  _queryToGraph = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(queryData) {
    var spinner, spinnerCopy, component;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            spinner = document.querySelector(".js-loading-spinner");
            spinnerCopy = document.querySelector(".js-loading-spinner-copy");
            spinnerCopy.innerHTML = "Processing query...";
            component = extractAndGraph(queryData.results.bindings, philGraph);
            spinnerCopy.innerHTML = "Done.";
            spinner.remove();
            canvas.style.height = "100%";
            philGraph.fruchtermanReingold(10, 1);
            philGraph.draw();
            analyseAndDisplay(philGraph);
            philGraph.refresh();

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _queryToGraph.apply(this, arguments);
}

var SPARQLQueryDispatcher = /*#__PURE__*/function () {
  function SPARQLQueryDispatcher(endpoint) {
    _classCallCheck(this, SPARQLQueryDispatcher);

    this.endpoint = endpoint;
  }

  _createClass(SPARQLQueryDispatcher, [{
    key: "query",
    value: function () {
      var _query = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sparqlQuery) {
        var fullUrl, headers;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fullUrl = this.endpoint + "?query=" + encodeURIComponent(sparqlQuery);
                headers = {
                  Accept: "application/sparql-results+json"
                };
                return _context.abrupt("return", fetch(fullUrl, {
                  headers: headers
                }).then(function (body) {
                  return body.json();
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function query(_x2) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }]);

  return SPARQLQueryDispatcher;
}();

var endpointUrl = "https://query.wikidata.org/sparql";
var sparqlQuery = "SELECT ?item ?itemLabel ?influenced_by ?influenced_byLabel\n                                 WHERE \n                                 {\n                                   ?item wdt:P106 wd:Q4964182;\n                                         wdt:P737 ?influenced_by. #This means only those people who have an influenced_by will be returned\n                                   SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n                                 } ";
var queryDispatcher = new SPARQLQueryDispatcher(endpointUrl);
queryDispatcher.query(sparqlQuery).then(queryToGraph);

function idFromURI(ur) {
  return ur.replace("http://www.wikidata.org/entity/", "");
} // Runs BFS but returns the list of nodes covered in the process, which will map the largest connected component which includes the initially provided node.


function connectedComponentMapBF(edges, queue, covered) {
  var upperBound = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (queue.length > 0) {
    var current = queue.shift();
    var currNode = current.node;
    var depth = current.depth; // by default this function will map the whole connected component, but if an upper bound is passed then it will only map up to that depth from the initial node.

    if (upperBound && depth >= upperBound) {
      return covered;
    }

    var nextOutNodes = edges.filter(function (e) {
      return e.source === currNode;
    }).map(function (e) {
      return e.target;
    });
    var nextInNodes = edges.filter(function (e) {
      return e.target === currNode;
    }).map(function (e) {
      return e.source;
    });
    var nextLevelNodes = nextOutNodes.concat(nextInNodes);

    var _iterator = _createForOfIteratorHelper(nextLevelNodes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var nodeId = _step.value;

        if (!covered.includes(nodeId)) {
          queue.push({
            node: nodeId,
            depth: depth + 1
          });
          covered.push(nodeId);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return connectedComponentMapBF(edges, queue, covered, upperBound);
  } else {
    // return a list of all the ids discovered in the search process (all those nodes in the largest connected component which includes the start node)
    return covered;
  }
}

function findLargestComponent(nodes, edges) {
  var runningCoveredList = [];
  var components = [];

  var _iterator2 = _createForOfIteratorHelper(nodes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var node = _step2.value;

      if (!runningCoveredList.includes(node)) {
        var connectedComponent = connectedComponentMapBF(edges, [{
          node: node,
          depth: 0
        }], [node]);
        runningCoveredList.push.apply(runningCoveredList, _toConsumableArray(connectedComponent));
        components.push(connectedComponent);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var largestComponent = [];

  for (var _i = 0, _components = components; _i < _components.length; _i++) {
    var component = _components[_i];

    if (component.length > largestComponent.length) {
      largestComponent = component;
    }
  }

  return largestComponent;
}

function extractAndGraph(data, graph) {
  var _iterator3 = _createForOfIteratorHelper(data),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var entry = _step3.value;
      var id = idFromURI(entry.item.value);

      if (!nodeIds.includes(id)) {
        var label = entry.itemLabel.value;
        var infId = idFromURI(entry.influenced_by.value);
        var infLabel = entry.influenced_byLabel.value;
        nodes.push({
          id: id,
          label: label
        });
        nodeIds.push(id);

        if (!nodeIds.includes(infId)) {
          nodes.push({
            id: infId,
            label: infLabel
          });
          nodeIds.push(infId);
        }

        edges.push({
          source: id,
          target: infId
        });
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var largestComponent = findLargestComponent(nodeIds, edges);
  var componentNodes = nodes.filter(function (n) {
    return largestComponent.includes(n.id);
  });
  var componentEdges = edges.filter(function (e) {
    return largestComponent.includes(e.target) && largestComponent.includes(e.source);
  });

  var _iterator4 = _createForOfIteratorHelper(componentNodes),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var node = _step4.value;
      graph.addNode(node);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  var _iterator5 = _createForOfIteratorHelper(componentEdges),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var edge = _step5.value;
      graph.addEdge(edge);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return largestComponent;
}

function analyseAndDisplay(graph) {
  var highestDegree = 0;
  var highestNode;

  var _iterator6 = _createForOfIteratorHelper(graph.nodeIds),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var id = _step6.value;
      var degree = graph.degree(id);

      if (degree > highestDegree) {
        highestDegree = degree;
        highestNode = graph.nodeDictionary[id];
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  highestNode.weight = 3;
  highestNode.fillColor = "#039be5";
  highestNode.strokeColor = "#039be5";
  var longestPath = 0;
  var ends = [];
  var n = graph.nodeIds.length;

  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      var pathLength = graph.shortestPath(graph.nodeIds[i], graph.nodeIds[j]);

      if (pathLength === longestPath) {
        ends.push({
          a: "".concat(graph.nodeIds[i]),
          b: "".concat(graph.nodeIds[j])
        });
      }

      if (pathLength > longestPath) {
        longestPath = pathLength;
        ends = [{
          a: "".concat(graph.nodeIds[i]),
          b: "".concat(graph.nodeIds[j])
        }];
      }
    }
  }

  var line = ends[Math.floor(Math.random() * (ends.length - 1))];
  var aNode = graph.nodeDictionary[line.a];
  var bNode = graph.nodeDictionary[line.b];
  aNode.weight = 3;
  bNode.weight = 3;
  aNode.fillColor = "#f06292";
  aNode.strokeColor = "#f06292";
  bNode.fillColor = "#9575cd";
  bNode.strokeColor = "#9575cd";
  var nCount = document.querySelector("#nodeCount");
  var hDName = document.querySelector("#highestDegreeName");
  var hDCount = document.querySelector("#highestDegreeCount");
  var diamCount = document.querySelector("#diameterCount");
  var aNodeName = document.querySelector("#aNode");
  var bNodeName = document.querySelector("#bNode");
  nCount.innerHTML = graph.nodes.length;
  hDName.innerHTML = highestNode.label;
  hDCount.innerHTML = highestDegree;
  diamCount.innerHTML = longestPath;
  aNodeName.innerHTML = aNode.label;
  bNodeName.innerHTML = bNode.label;
}