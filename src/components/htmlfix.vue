<template>
   <div class="htmlfix">
      <div class="d-flex h-100 w-100 flex-column justify-content-start">
          <div class="ml-5 mt-4">
              <h1 class="pb-3">HTML fix</h1>
              <p>This tool will add the missing <code>alias</code> attributes to the HTML code, if <code>_label</code> attributes are present in the following formats: </p>
          <ul class="list-unstyled">
              <li><code>_label="ABC123"</code></li>
              <li><code>_label=ABC123</code></li>
              <br>
          </ul>
          <p></p>
          </div>
          <div class="card d-flex ml-5 mr-5 pt-4 pb-5 bg-light">
         <div class="d-flex flex-row w-100 pr-5 pl-5">

            <div class="d-flex justify-content-between w-100">
               <div class="d-flex w-100 flex-column align-self-stretch mr-4">
                  <div class="form-group">
                     <label for="txtInputHtml"><b>Original HTML:</b></label>
                     <textarea v-model="inputHtml" class="form-control" id="txtInputHtml" name="txtInputHtml" rows="10"></textarea>   
                  </div>
               </div>
            </div>
            <div class="d-flex justify-content-between w-100 ">
               <div class="d-flex w-100 flex-column align-self-stretch ml-4">
                  <div class="form-group">
                     <label for="txtInputHtml"><b>HTML with aliases:</b></label>
                     <textarea v-model="outputHtml" class="form-control" id="txtOutputHtml" name="txtOutputHtml" rows="10"></textarea>   
                  </div>
               </div>
            </div>
         </div>
         <div class="d-flex flex-row justify-content-center p-4">
            <button type="button" class="btn btn-info" id="btnSubmit" v-on:click="convertHtml">Convert</button>
         </div>
         <div class="d-flex flex-row w-100 pr-5 pl-5">
            <div class="d-flex justify-content-between w-100">
              <div class="card w-100 mr-4">
                  <div class="card-header">
                      Original HTML preview:
                  </div>
                  <div class="card-body pl-0 pr-0">
                      <div class="bg-white" v-html="inputHtml"></div>
                  </div>
              </div>
            </div>

            
              <div class="d-flex justify-content-between w-100">
              <div class="card w-100 ml-4">
                  <div class="card-header">
                      HTML with aliases preview:
                  </div>
                  <div class="card-body pl-0 pr-0">
                      <div class="bg-white" v-html="outputHtml"></div>
                  </div>
              </div>
            </div>
         </div>
          </div>
      </div>
   </div>
   </div>
</template>

<script>
export default {
  name: "htmlfix",
  data() {
    return {
      aLabels: [],
      inputHtml: "",
      outputHtml: "",
    //   regPattern1: /_label="([^"]*)"/gi,
      regPattern2: /_label=([^>\s]*)/gi
    };
  },
  methods: {
    convertHtml: function() {
      if (this.inputHtml == "") {
        alert("Paste in html");
      } else {
        if (!this.inputHtml.match(this.regPattern1)) {
          alert("No _labels found");
        } else {
          var outputLabels = this.aLabels;
          var i = 0;

          this.inputHtml.replace(this.regPattern2, function(match, p1) {
            outputLabels.push(match + ' alias=' + p1);
          });

          this.outputHtml = this.inputHtml.replace(
            this.regPattern2,
            function() {
              return outputLabels[i++];
            }
          );
        }
      }
    }
  }
};
</script>

