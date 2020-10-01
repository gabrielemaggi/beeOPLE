<?php
//API REGISTER: 
    //required: parameters
    //ok 200 set_token email, missing parameters 400

    // if the register button is clicked
    $email = $_GET["email"];
    $nome = $_GET["nome"];
    $cognome = $_GET["cognome"];
    $username = $_GET["username"];
    $password = $_GET["password"];
    $city = $_GET["city"];
    $role = 0;

    // connect to the database
    $db = mysqli_connect('localhost', 'root', '', 'beeople');
    
    
    $sql = "select * FROM users";
    $result = $db->query($sql);

    $find = false;

        if ($result->num_rows > 0) {
        // output data of each row
                while($row = $result->fetch_assoc()) {
                    
                    
                    if($row["email"] == $email){
                      
                        $find = true;
                        break;
                    //http_response_code(200);
                    }
                    //http_response_code(400);
                  
                    //echo "email: " . $row["email"]. " - password: " . $row["password"]. " " ."<br>";
                }
        } 
        
        if(!$find){
            $sql = "insert into users(email, nome, cognome, username, password, city, role) values('$email', '$nome', '$cognome' , '$username',  '$password', '$city', '$role' )";
            mysqli_query($db, $sql);
            echo "ok";
        }else{
            echo "email already exist";
        }



    // if there are no errors, save user to database

    
    ?>