<template>
  <div class="el-transfer-panel">
    <p class="el-transfer-panel__header">{{ title }}</p>
    <div class="el-transfer-panel__body">
      <el-input class="el-transfer-panel__filter" v-model="query" size="small" :placeholder="placeholder" :icon="inputIcon" @mouseenter.native="inputHover = true" @mouseleave.native="inputHover = false" @click="clearQuery" v-if="filterable"></el-input>
      <el-checkbox-group v-model="checked" v-show="!hasNoMatch && data.length > 0" :class="{ 'is-filterable': filterable }" class="el-transfer-panel__list">
        <span v-for="(item,index) in filteredData" :key="item[keyProp]">
          <template v-if='item.isGroupTitle && shouldShowGroupTitle(item)'>
            <option-content :option="item" class="ec-group-transfer_title"></option-content>
          </template>
          <template v-if="!item.isGroupTitle">
            <el-checkbox class="el-transfer-panel__item" :label="item[keyProp]" :disabled="item[disabledProp]" @mouseenter.native='event=>handleMouseEnter(event,item,index)' @mouseleave.native='event=>handleMouseLeave(event)'>
              <option-content :option="item"></option-content>
            </el-checkbox>
          </template>
        </span>
      </el-checkbox-group>
      <el-tooltip :content="tooltipContent" placement="top" ref="tooltip" />
      <p class="el-transfer-panel__empty" v-show="hasNoMatch">{{ t('el.transfer.noMatch') }}</p>
      <p class="el-transfer-panel__empty" v-show="data.length === 0 && !hasNoMatch">{{ t('el.transfer.noData') }}</p>
    </div>

    <p class="el-transfer-panel__footer">
      <el-checkbox v-model="allChecked" @change="handleAllCheckedChange" :indeterminate="isIndeterminate">{{ checkedSummary }}</el-checkbox>
      <slot></slot>
    </p>
  </div>
</template>

<script>
import Locale from 'element-ui/lib/mixins/locale';
import debounce from 'throttle-debounce/debounce';
export default {
  mixins: [Locale],

  name: 'EcGroupTransferPanel',

  componentName: 'EcGroupTransferPanel',

  components: {
    OptionContent: {
      props: {
        option: Object,
      },
      render(h) {
        const getParent = vm => {
          if (vm.$options.componentName === 'EcGroupTransferPanel') {
            return vm;
          } else if (vm.$parent) {
            return getParent(vm.$parent);
          } else {
            return vm;
          }
        };
        const parent = getParent(this);
        return parent.renderContent && !this.option.isGroupTitle ? (
          parent.renderContent(h, this.option)
        ) : (
          <span>{this.option[parent.labelProp] || this.option[parent.keyProp]}</span>
        );
      },
    },
  },

  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    renderContent: Function,
    placeholder: String,
    title: String,
    filterable: Boolean,
    footerFormat: Object,
    filterMethod: Function,
    defaultChecked: Array,
    props: Object,
    showOverflowTooltip: Boolean,
  },

  data() {
    return {
      checked: [],
      allChecked: false,
      query: '',
      inputHover: false,
      tooltipContent: '',
    };
  },

  watch: {
    checked(val) {
      this.updateAllChecked();
      this.$emit('checked-change', val);
    },

    data() {
      const checked = [];
      const filteredDataKeys = this.filteredData.map(item => item[this.keyProp]);
      this.checked.forEach(item => {
        if (filteredDataKeys.indexOf(item) > -1) {
          checked.push(item);
        }
      });
      this.checked = checked;
    },

    checkableData() {
      this.updateAllChecked();
    },

    defaultChecked: {
      immediate: true,
      handler(val, oldVal) {
        if (oldVal && val.length === oldVal.length && val.every(item => oldVal.indexOf(item) > -1)) return;
        const checked = [];
        const checkableDataKeys = this.checkableData.map(item => item[this.keyProp]);
        val.forEach(item => {
          if (checkableDataKeys.indexOf(item) > -1) {
            checked.push(item);
          }
        });
        this.checked = checked;
      },
    },
  },

  computed: {
    filteredData() {
      return this.data.filter(item => {
        if (typeof this.filterMethod === 'function') {
          return this.filterMethod(this.query, item);
        } else {
          const label = item[this.labelProp] || item[this.keyProp].toString();
          return label.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }
      });
    },

    checkableData() {
      return this.filteredData.filter(item => !item.isGroupTitle && !item[this.disabledProp]);
    },

    checkedSummary() {
      let checkedLength = this.checked.length;
      let dataLength = this.data.length;
      this.data.forEach(val => {
        if (val.isGroupTitle) {
          dataLength--;
        }
      });
      const { noChecked, hasChecked } = this.footerFormat;
      if (noChecked && hasChecked) {
        return checkedLength > 0
          ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength)
          : noChecked.replace(/\${total}/g, dataLength);
      } else {
        return checkedLength > 0
          ? this.t('el.transfer.hasCheckedFormat', { total: dataLength, checked: checkedLength })
          : this.t('el.transfer.noCheckedFormat', { total: dataLength });
      }
    },

    isIndeterminate() {
      const checkedLength = this.checked.length;
      return checkedLength > 0 && checkedLength < this.checkableData.length;
    },

    hasNoMatch() {
      return this.query.length > 0 && this.filteredData.length === 0;
    },

    inputIcon() {
      return this.query.length > 0 && this.inputHover ? 'circle-close' : 'search';
    },

    labelProp() {
      return this.props.label || 'label';
    },

    keyProp() {
      return this.props.key || 'key';
    },

    disabledProp() {
      return this.props.disabled || 'disabled';
    },
  },

  created() {
    this.activateTooltip = debounce(50, tooltip => tooltip.handleShowPopper());
  },
  methods: {
    updateAllChecked() {
      const checkableDataKeys = this.checkableData.map(item => item[this.keyProp]);
      this.allChecked = checkableDataKeys.length > 0 && checkableDataKeys.every(item => this.checked.indexOf(item) > -1);
    },

    handleAllCheckedChange(value) {
      this.checked = value.target.checked ? this.checkableData.map(item => item[this.keyProp]) : [];
    },

    clearQuery() {
      if (this.inputIcon === 'circle-close') {
        this.query = '';
      }
    },

    shouldShowGroupTitle(item) {
      if (!item.isGroupTitle) return false;
      let childrenKey = this.$props.props.children;
      let temp = item[childrenKey].filter(val => this.checkableData.includes(val));
      if (!temp.length) return false;
      return true;
    },

    handleMouseEnter(e, item) {
      if (!this.showOverflowTooltip) return;
      let cell = e.target.querySelector('.el-checkbox__label');
      // 显示...的时候
      const tooltip = this.$refs.tooltip;
      if (cell.scrollWidth > cell.offsetWidth) {
        this.tooltipContent = item[this.labelProp];
        tooltip.referenceElm = cell;
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
        tooltip.doDestroy();
        tooltip.setExpectedState(true);
        this.activateTooltip(tooltip);
      }
    },
    handleMouseLeave(event) {
      if (!this.showOverflowTooltip) return;
      const tooltip = this.$refs.tooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
    },
  },
};
</script>
<style lang="scss">
.ec-group-transfer_title {
  display: block;
  padding-left: 10px;
  font-size: 12px;
  color: #999;
  height: 30px;
  line-height: 30px;
}
</style>
