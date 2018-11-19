<template>
<div class="mmcfix">
      <div class="d-flex h-100 w-100 flex-column justify-content-start">
          <div class="ml-5 mt-4">
              <h1 class="pb-3">MMC fix</h1>
              <p>This tool will replace the <code>multiple</code> words and remove spaces from a character set:</p>
                <br>
          </div>
          <div class="card d-flex ml-5 mr-5 pt-4 bg-light">
         <div class="d-flex flex-row w-100 pr-5 pl-5">

            <div class="d-flex justify-content-between w-100">
               <div class="d-flex w-100 flex-column align-self-stretch mr-4">
                 <div class="form-group">
                     <label ><b>Original MMC:</b></label>
                     <input v-model="inputMmc" name="inputMmc" class="form-control">
                     <br>
                     <label ><b>Replace "Multiple" with:</b></label>
                     <input v-model="inputReplace" class="form-control">   
                  </div>
               </div>
            </div>
            <div class="d-flex justify-content-between w-100 ">
               <div class="d-flex w-100 flex-column align-self-stretch ml-4">
                  <div class="form-group">
                     <label ><b>Modified MMC:</b></label>
                     <textarea v-model="outputMmc" class="form-control" id="txtOutputHtml" name="txtOutputHtml" rows="5"></textarea>   
                  </div>
               </div>
            </div>
         </div>
         <div class="d-flex flex-row justify-content-center p-4">
            <button type="button" class="btn btn-info" id="btnSubmit" v-on:click="convertMmc">Convert</button>
         </div>
        
          </div>
      </div>
   </div>
</template>



<script>
    export default {
        name: 'mmcfix',
        data(){
            return {
                inputMmc: "",
                outputMmc: "",
                inputReplace: "Other",
                regPattern1: /Multiple/ig,
                regPattern2: /\s/g
            }
        },
        methods: {
            convertMmc: function(){
                var inputReplace = this.inputReplace

                this.outputMmc = this.inputMmc.replace(this.regPattern1, function(){
                    return inputReplace
                })
    
                this.outputMmc = this.outputMmc.replace(this.regPattern2, function(){
                    return ""
                })
            }
        }
    }

</script>

