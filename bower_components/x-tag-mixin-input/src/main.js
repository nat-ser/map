(function(){

  xtag.mixins.input = {
    lifecycle: {
      created: function(){
        if (!this.xtag.input) this.xtag.input = this.querySelector('input');
      }
    },
    methods: {
      isValid: function(){
        return this.xtag.validationRegex ? this.xtag.validationRegex.test(this.value) : true;
      }
    },
    accessors: {
      name: {
        attribute: { property: 'input' }
      },
      disabled: {
        attribute: { boolean: true, property: 'input' }
      },
      value: {
        get: function(){
          return this.xtag.input.value;
        },
        set: function(value){
          this.xtag.input.value = value;
        }
      },
      validate: {
        attribute: {},
        set: function(value){
          this.xtag.validationRegex = new RegExp(value);
        }
      }
    }
  };

})();
