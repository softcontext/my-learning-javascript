global.count = 100;

function increase() {
    this.count++;
    console.log('1 >>', this.count);
}

// increase();

var obj = {
  count: 0,
  increase,
  escalate(){
    this.count++;
    console.log('2 >>', this.count);

    function increase() {
        this.count++;
        console.log('3 >>', this.count);

        function lift() {
            this.count++;
            console.log('3 >>', this.count);
        }

        lift();
    }

    increase();
  }
};

// obj.increase();

obj.escalate();

