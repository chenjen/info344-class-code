Hey this is some content above the code
<?php 
$name = 'Dave';
$fullName = $name . 'Stearns';

class Person {
    protected $name;
    
    public function __construct($n) {
        $this->name = $n;
    }
    
    public function getName() {
        return $this ->name;
    }
}

function foo($bar) {
    echo "this this i the foo fighting function\n";
}
echo "Hello {$name}s\n";
foo(null);
?>
And this is some content