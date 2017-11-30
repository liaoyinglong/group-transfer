<template>
  <div class="el-transfer">
    <ec-group-transfer-panel v-bind="$props" :data="sourceData" :title="titles[0] || t('el.transfer.titles.0')" :default-checked="leftDefaultChecked" :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')" @checked-change="onSourceCheckedChange">
      <slot name="left-footer"></slot>
    </ec-group-transfer-panel>
    <div class="el-transfer__buttons">
      <el-button type="primary" size="small" @click.native="addToLeft" :disabled="rightChecked.length === 0">
        <i class="el-icon-arrow-left"></i>
        <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button type="primary" size="small" @click.native="addToRight" :disabled="leftChecked.length === 0">
        <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
        <i class="el-icon-arrow-right"></i>
      </el-button>
    </div>
    <ec-group-transfer-panel v-bind="$props" :data="targetData" :title="titles[1] || t('el.transfer.titles.1')" :default-checked="rightDefaultChecked" :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')" @checked-change="onTargetCheckedChange">
      <slot name="right-footer"></slot>
    </ec-group-transfer-panel>
  </div>
</template>

<script>
import Emitter from 'element-ui/lib/mixins/emitter';
import Locale from 'element-ui/lib/mixins/locale';
import EcGroupTransferPanel from './ec-group-transfer-panel';
import { treeToArray } from './utils';
export default {
  name: 'EcGroupTransfer',

  mixins: [Emitter, Locale],

  components: {
    EcGroupTransferPanel,
  },

  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
    buttonTexts: {
      type: Array,
      default() {
        return [];
      },
    },
    filterPlaceholder: {
      type: String,
      default: '',
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default() {
        return [];
      },
    },
    rightDefaultChecked: {
      type: Array,
      default() {
        return [];
      },
    },
    renderContent: Function,
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    footerFormat: {
      type: Object,
      default() {
        return {};
      },
    },
    filterable: Boolean,
    props: {
      type: Object,
      default() {
        return {
          label: 'label',
          key: 'key',
          children: 'children',
          disabled: 'disabled',
        };
      },
    },
    disableAll: Boolean,
  },

  data() {
    return {
      leftChecked: [],
      rightChecked: [],
    };
  },
  computed: {
    formatData() {
      return treeToArray(this.data, this.props.children, this.disableAll);
    },
    sourceData() {
      return this.formatData.filter(item => this.value.indexOf(item[this.props.key]) === -1);
    },

    targetData() {
      let rightArr = this.formatData.filter(item => this.value.indexOf(item[this.props.key]) > -1);
      let copyArr = this.formatData.filter(item => this.value.indexOf(item[this.props.key]) > -1);
      let temp;
      rightArr.forEach((item, i) => {
        if (!item._parent) return;
        temp = copyArr.filter(val => val === item._parent);
        if (!temp.length) {
          copyArr.splice(copyArr.indexOf(item), 0, item._parent);
        }
      });
      return copyArr;
    },
  },

  watch: {
    value(val) {
      this.dispatch('ElFormItem', 'el.form.change', val);
    },
  },

  methods: {
    onSourceCheckedChange(val) {
      this.leftChecked = val;
    },

    onTargetCheckedChange(val) {
      this.rightChecked = val;
    },

    addToLeft() {
      let currentValue = this.value.slice();
      this.rightChecked.forEach(item => {
        const index = currentValue.indexOf(item);
        if (index > -1) {
          currentValue.splice(index, 1);
        }
      });
      this.$emit('input', currentValue);
      this.$emit('change', currentValue, 'left', this.rightChecked);
    },
    addToRight() {
      let currentValue = this.value.slice();
      this.leftChecked.forEach(item => {
        if (this.value.indexOf(item) === -1) {
          this.formatData.forEach(val => {
            if (val[this.props.key] === item && val.isGroupTitle !== true) {
              currentValue = currentValue.concat(item);
            }
          });
        }
      });

      this.$emit('input', currentValue);
      this.$emit('change', currentValue, 'right', this.leftChecked);
    },
  },
};
</script>
