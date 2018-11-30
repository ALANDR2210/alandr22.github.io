<?php

$m1 = " EZ";
$m2 = " ALV inviten al casamiento OhMyGoodness";
$m3 = " MEGAPOGGERS";

$rm = array($m1, $m2, $m3);

$random_keys = array_rand($rm, 1);

echo $rm[$random_keys];

?>