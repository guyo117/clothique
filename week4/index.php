<?php
session_start();

$_SESSION["user"] = "Guyo";

echo "Welcome " .
$_SESSION["user"];
?>