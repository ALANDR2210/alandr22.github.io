<?php

$m1 = " Pta que sad BibleThump";
$m2 = " Friendzone detected! ⚠️";
$m3 = " FeelsBadMan";

$rm = array($m1, $m2, $m3);

$random_keys = array_rand($rm, 1);

echo $rm[$random_keys];

?>