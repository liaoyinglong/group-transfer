<script>
import props from './item/props';

import eText from './item/eText';
import eDatetime from './item/eDatetime';
import eSelect from './item/eSelect';

export default {
  props,
  components: {
    eText,
    eNumber: eText,
    eTextarea: eText,
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
        change: this.handleInput,
      },
    });
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
