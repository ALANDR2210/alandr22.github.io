<?php

$m1 = "a";
$m2 = "b";
$m3 = "c";
$m4 = "d";
$m5 = "e";

$rm = array($m1, $m2, $m3, $m4, $m5);
$random_keys = array_rand($rm, 1);

echo $rm[$random_keys];

?>