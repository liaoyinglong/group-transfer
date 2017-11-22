import Vue from 'vue';
/**
 * @param {Array} data
 * @param {Boolean} expandedAll
 * @param {Object} parent
 * @param {Numbel} level
 */
export function treeToArray(data, expandedAll, childrenKey, parent, level) {
  let temp = [];
  data.map(item => {
    if (item._expanded === undefined) {
      Vue.set(item, '_expanded', expandedAll);
    }
    if (parent) {
      Vue.set(item, '_parent', parent);
    }
    let _level = 0;
    if (level !== undefined && level !== null) {
      _level += 1;
    }
    Vue.set(item, '_level', _level);
    temp.push(item);
    if (item[childrenKey] && item[childrenKey].length > 0) {
      Vue.set(item, 'needIcon', true);
      let children = treeToArray(item[childrenKey], expandedAll, childrenKey, item, _level);
      temp = temp.concat(children);
    }
    return temp;
  });
  return temp;
}
