<?php

$m1 = " Buen intento Kappa";
$m2 = " Seguí participando";
$m3 = " Ya quisieras MiniK";

$rm = array($m1, $m2, $m3);

$random_keys = array_rand($rm, 1);

echo $rm[$random_keys];

?>