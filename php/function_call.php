<?php

require 'functions.php';

$args = $_GET["args"];
$name = $_GET["name"];

//function function_call($name, $args)
//{
  $func = "return " . $name . "(";
  $num = sizeof($args);
  if ($num != 0 && $args[0] != "")
  {
   for ($i = 0; $i < $num; $i++)
    {
      if (strpos($args[$i], " "))
        $func .= "'" . $args[$i] . "'";
      else
	$func .= $args[$i];

      if ($i != $num - 1)
        $func .= ", ";
    }
  }

   $func .= ");";

//  echo $func;

  echo eval($func);

//}


?>
