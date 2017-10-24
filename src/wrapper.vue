<script>
import props from './item/props';

import eText from './item/eText';
import eNumber from './item/eNumber';
import eTextarea from './item/eTextarea';
import eDatetime from './item/eDatetime';
import eSelect from './item/eSelect';

export default {
  props,
  components: {
    eText,
    eNumber,
    eTextarea,
    eDatetime,
    eSelect,
  },
  render(h) {
    const attrs = this.$props;
    const tag = `e-${this.type}`;
    return h(tag, {
      props: { ...attrs },
      on: {
        input: this.handleInput,
        change: this.handleChange,
      },
    });
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value);
    },
    handleChange(value) {
      this.$emit('input', value);
    },
  },
};
</script>
