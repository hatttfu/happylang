<?php 
    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    $email = $_POST['user_email'];
    
    if (mb_strlen($name) < 2 ) {
        echo "Пожалуйста, введите Ваше имя.";
        exit();
    }else if  (mb_strlen($phone) != 11) {
        echo "Пожалуйста, введите Ваш полный номер телефона.";
        exit();
    }
    
    $conn = mysqli_connect('localhost', 'root', 'Chehova22!', 'happylang_db');

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // echo "Connected successfully";

    $sql = "INSERT INTO users (name, phone, email) VALUES('$name', '$phone', '$email')";

    if (mysqli_query($conn, $sql)) {
        // echo "New record created successfully";
    } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
  
    header('Location: index.html#form');
?>