<?php
class Person{
  //Здоровье человека не может быть более 100 ед.
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mother;
    private $father;
    function __construct($name, $lastname, $age, $mother = null, $father = null)
    {
    $this->name=$name;
    $this->lastname=$lastname;
    $this->age=$age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp=100;
    }
    function sayHi($name){
        return "Hi $name, I`m ".$this->name;
    }
    function setHP($hp){
        if ($this->hp + $hp >= 100) $this->hp = 100; // сделали  здоровье не больше 100
    else $this->hp = $this->hp+$hp;
    }
    function getHP(){
        return $this->hp;
    }
    function getName(){
        return $this->name;
    }
    function getMother(){
        return $this->mother;
    }
    function getFather(){
        return $this->father;
    }
    function getLastname(){
        return $this->lastname;
    }
    function getAge(){
        return $this->age;
    }
    function getInfo(){
        return "<h3>A few words about myself.</h3><br>"."My name is: ".$this->getName().";<br>
        My lastname is: ".$this->getLastname().";<br>
        My age: ".$this->getAge().";<br>
        My mother is: ".$this->getMother()->getName().";<br>
        Her age: ".$this->getMother()->getAge().";<br>
        My father is: ".$this->getFather()->getName().";<br>
        His age: ".$this->getFather()->getAge().";<br>
        My grandfather's name is (mom's father): ".$this->getMother()->getFather()->getName().";<br>
        His age: ".$this->getMother()->getFather()->getAge().";<br>
        My grandfather's name is (dad's father): ".$this->getFather()->getFather()->getName().";<br>
        His age: ".$this->getFather()->getFather()->getAge().";<br>
        My grandma's name is (dad's mother): ".$this->getFather()->getMother()->getName().";<br>
        Her age: ".$this->getFather()->getMother()->getAge().".";
    }
}
$igor = new Person("Igor","Petrov",69);
$nicholas = new Person("Nicholas","Ivanov",71);
$maria = new Person("Maria","Ivanov",70);
$alex = new Person("Alex","Ivanov",42,$maria,$nicholas);
$olga = new Person("Olga","Ivanova",42,null,$igor);
$valera = new Person("Valera","Ivanov",15,$olga,$alex);

//echo $valera->getMother()->getMother()->getName();
echo $valera->getInfo();

// $medKit = 50;
// $alex->setHP(-30); //упал
// echo $alex->getHP(). "<br>";
// $alex->setHP($medKit); //нашел аптечку
// echo $alex->getHP();

//echo $alex->sayHi($igor->name);
//$alex->name = "Alex";
//echo $alex->name;
