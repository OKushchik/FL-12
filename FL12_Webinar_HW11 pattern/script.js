fetch('epms.json')
    .then((response) => {
        return response.json();
    })
    .then( (data) => {
        // console.log(data);
        let withPool = [];
        for (let i=0; i<data.length; i++) {
            if (data[i].hasOwnProperty('pool_name')){
                withPool.push(data[i])
            }
        }

        var Node = function (name, salary) {
            this.children = [];
            this.name = name;
            this.salary = salary;
        }

        Node.prototype = {
            add: function (child) {
                        this.children.push(child);
            },
            getChild: function (i) {
                return this.children[i];
            },
        }

        function traverse(indent, node) {
            log.add(Array(indent++).join("--") + node.name);
            for (var i = 0;  i < node.children.length; i++) {
                traverse(indent, node.getChild(i));
            }
        }

        var log = (function () {
            var log = "";

            return {
                add: function (msg) { log += msg + "\n"; },
                show: function () { console.log(log); }
            }
        })();

        function run() {

            var tree = new Node("root");


            for (let i = 0; i<withPool.length; i++){
                var pool = new Node(withPool[i].pool_name);

                tree.add(pool);

                function contains(arr, elem) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].pool_name === elem.name) {
                            var poolL = new Node(arr[i].name, arr[i].salary);
                            pool.add(poolL)
                        }
                    }
                }
                contains (withPool,pool)
            }

            traverse(1, tree);

            log.show();
            let f = withPool.filter( el => el.salary < 1000)

            function warning() {
                let out = ' Warning list \n';
                for (let i = 0; i<f.length; i++){
                    out += `${f[i].name} - Sale ${f[i].salary} \n`
                }
                console.log(out)
            }
            warning();
        }
        run();
    });
