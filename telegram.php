<?php

/* https://api.telegram.org/bot6751340227:AAF92vFtCP3tSMQpAOb2wl9su694SQ9AQoY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['nameSurname'];
$city = $_POST['City'];
$phone = $_POST['userphone'];
$novaposhta = $_POST['novaposhta'];
$value = $_POST['value'];
$token = "6751340227:AAF92vFtCP3tSMQpAOb2wl9su694SQ9AQoY";
$chat_id = "-4037937896";
$arr = array(
  'Имя пользователя: ' => $name,
  'Місто' => $city,
  'Телефон: ' => $phone,
  'НоваПошта' => $novaposhta,
  'Кількість' => $value
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>