export default {
  data() {
    return {
      text: '外部匯入的元件，這是模組化元件'
    };
  },
  template: `<div class="alert alert-primary" role="alert">
      {{ text }}
    </div>`
}
