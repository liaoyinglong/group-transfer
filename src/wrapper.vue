<script>
import props from './item/props';
import handle from './item/handle';
import eText from './item/eText';
import eDatetime from './item/eDatetime';
import eSelect from './item/eSelect';
import eCheckbox from './item/eCheckbox';
import eRadio from './item/eRadio';

export default {
  mixins: [handle],
  props,
  components: {
    eText,
    eNumber: eText,
    eTextarea: eText,
    eDatetime,
    eSelect,
    eCheckbox,
    eRadio,
  },
  render(h) {
    const attrs = this.$props;
    const tag = `e-${this.type}`;
    return h(tag, {
      props: { ...attrs },
      on: {
        input: this.handle,
        change: this.handle,
      },
    });
  },
};
</script>
