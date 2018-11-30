<?php

$m1 = " PogChamp";
$m2 = " 😲";
$m3 = " Almas gemelas Clap";

$rm = array($m1, $m2, $m3);

$random_keys = array_rand($rm, 1);

echo $rm[$random_keys];

?>