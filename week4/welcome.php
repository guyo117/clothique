<?php
session_start();

$_SESSION["user"] = "GUYO JILLO";

echo "Welcome " .
$_SESSION["user"];
?>