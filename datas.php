<?php

$albums = file_get_contents('datas.json');

header('Content-Type: application/json');
echo json_encode($albums);
