<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['order-name'])) {$name = $_POST['order-name'];}
    if (isset($_POST['order-tel'])) {$phone = $_POST['order-tel'];}
    if (isset($_POST['order-country'])) {$country = $_POST['order-country'];}
    if (isset($_POST['order-full-cost'])) {
        $sum = $_POST['order-full-cost'];
    } else {
        $sum = '5999';
    }
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "biropka@gmail.com"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom   = "ultramaxx"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData <br><b>Поступил заказ </b> <br> <b>Имя клиента:</b> $name <br><b>Телефон:</b> $phone <br> <b>Страна:</b> $country <br> <b>Сумма заказа:</b> $sum ";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<p class="success">Спасибо за обращение к нам!</p>';
    }
    else 
    {
    echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>