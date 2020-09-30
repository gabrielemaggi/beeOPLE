<?php
    // CI DEVE DARE TUTTI I POST
    
    //API LOGIN: 
    //required: email, password
    //ok 200 set_token XX, password or email wrong 400


    
    $servername = "localhost";
    $username = "root";
    $password = "";

    $dbname = "beeople";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 

    $sql = "select * FROM ambiental_post";
    $result = $conn->query($sql);

    $find = false;

        if ($result->num_rows > 0) {
        // output data of each row
                while($row = $result->fetch_assoc()) {
                    
                    
                    //http_response_code(400);
                  
                    //echo "email: " . $row["email"]. " - password: " . $row["password"]. " " ."<br>";
                }
        } 
        
 
    $conn->close();

?>