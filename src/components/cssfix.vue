<template>
<div class="cssfix">
      <div class="d-flex h-100 w-100 flex-column justify-content-start">
          <div class="ml-5 mt-4">
              <h1 class="pb-3">CSS fix</h1>
              <p>This tool will add an extra space after the " <code>}</code> " character in the CSS code:</p>
                <br>
          </div>
          <div class="card d-flex ml-5 mr-5 pt-4 bg-light">
         <div class="d-flex flex-row w-100 pr-5 pl-5">

            <div class="d-flex justify-content-between w-100">
               <div class="d-flex w-100 flex-column align-self-stretch mr-4">
                  <div class="form-group">
                     <label for="txtInputHtml"><b>Original CSS:</b></label>
                     <textarea v-model="inputCss" class="form-control" id="txtInputHtml" name="txtInputHtml" rows="10"></textarea>   
                  </div>
               </div>
            </div>
            <div class="d-flex justify-content-between w-100 ">
               <div class="d-flex w-100 flex-column align-self-stretch ml-4">
                  <div class="form-group">
                     <label for="txtInputHtml"><b>CSS with spaces:</b></label>
                     <textarea v-model="outputCss" class="form-control" id="txtOutputHtml" name="txtOutputHtml" rows="10"></textarea>   
                  </div>
               </div>
            </div>
         </div>
         <div class="d-flex flex-row justify-content-center p-4">
            <button type="button" class="btn btn-info" id="btnSubmit" v-on:click="convertCss">Convert</button>
         </div>
        
          </div>
      </div>
   </div>
</template>



<script>
export default {
  name: "cssfix",
  data() {
    return {
      aSpaces: [],
      inputCss: "",
      outputCss: "",
      regPattern1: /}/gi
    };
  },
  methods: {
    convertCss: function() {
      if (this.inputCss == "") {
        alert("Paste in Css");
      } else {
        var outputSpaces = this.aSpaces;
        var i = 0;

        this.inputCss.replace(this.regPattern1, function(match, p1) {
          outputSpaces.push(match + " ");
        });

        this.outputCss = this.inputCss.replace(this.regPattern1, function() {
          return outputSpaces[i++];
        });
      }
    }
  }
};
</script>

