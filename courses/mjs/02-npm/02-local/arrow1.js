var obj = {
  name: "jat",
  sayName() {
    console.log("My name is "+ this.name);
    /**
     * so right here the "this.name" below gets lost the context "this"
     * so a work around that is to define or store the context before using it.
     * like so: var that= this;
     */
    var that = this;
    setTimeout(function () {
      console.log("my name is still "+ that.name);
    },1000);
    setTimeout(()=>{
      console.log("This is with a arrow function "+ this.name);
    },1000);
  }


}

obj.sayName();
