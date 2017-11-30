import Vue from 'vue';
/**
 * @param {Array} data
 * @param {Object} parent
 * @param {Numbel} level
 */
export function treeToArray(data, childrenKey, disableAll, parent, level) {
  let temp = [];
  data.map(item => {
    if (parent) {
      Vue.set(item, '_parent', parent);
    }
    if (disableAll) {
      Vue.set(item, 'disabled', true);
    }
    let _level = 0;
    if (level !== undefined && level !== null) {
      _level += 1;
    }
    Vue.set(item, '_level', _level);
    temp.push(item);
    if (item[childrenKey] && item[childrenKey].length > 0) {
      Vue.set(item, 'isGroupTitle', true);
      let children = treeToArray(item[childrenKey], childrenKey, disableAll, item, _level);
      temp = temp.concat(children);
    }
  });
  return temp;
}
