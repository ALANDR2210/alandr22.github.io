<?php

$m1 = " No lo se Rick 🤔";
$m2 = " Casi SeemsGood";
$m3 = " KappaHD";

$rm = array($m1, $m2, $m3);

$random_keys = array_rand($rm, 1);

echo $rm[$random_keys];

?>