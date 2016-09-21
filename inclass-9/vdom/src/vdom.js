//
// Inclass Virtual DOM Exercise
// ============================
//
// You need to implement createElement() and updateElement()
//
;(function(exports) {

'use strict'

function h(tag, props, ...children) {
    return { tag, props: props ? props : { }, 
        children: Array.isArray(children[0]) ? children[0] : children }
}


function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const $el = document.createElement(node.tag);
  addEventListeners($el, node.props);
  node.children
    .map(createElement)
    .forEach($el.appendChild.bind($el));
  return $el;
}

function addEventListeners($target, props) {
  Object.keys(props).forEach(name => {
    if (isEventProp(name)) {
      $target.addEventListener(
        extractEventName(name),
        props[name]
      );
    }
  });
}

function isEventProp(name) {
  return /^on/.test(name);
}

function extractEventName(name) {
  return name.slice(2).toLowerCase();
}

function changed(node1, node2) {
  return typeof node1 !== typeof node2 ||
         typeof node1 === 'string' && node1 !== node2 ||
         node1.type !== node2.type ||
         node1.props && node1.props.forceUpdate;
}

function updateElement($parent, newNode, oldNode, index = 0) {

}

const deepCopy = (obj) => {
    if (obj === null || typeof(obj) !== 'object')
        return obj;
    const props = {}
    if (obj.props) {
        for (let p in obj.props) {
            props[p] = obj.props[p]
        }
    }
    return h(obj.tag, props,
        Array.isArray(obj.children) ? obj.children.map(deepCopy) : obj.children)
}

const update = () => requestAnimationFrame(() => {
	// compare the current vdom with the original vdom for updates
    updateElement(h.mounted.root, h.mounted.current, h.mounted.original)
    h.mounted.original = deepCopy(h.mounted.current)
})

h.mount = (root, component) => {     //通过虚拟DOM构建真正DOM
    // we keep a copy of the original virtual DOM so we can diff it later for updates
    const originalComponent = deepCopy(component) //copy of the virtual DOM
    h.mounted = { root: root, current: component, original: originalComponent }
    updateElement(root, originalComponent)
}

exports.h = h

})(window);