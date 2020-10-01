<?php
//API PROFILE: 
    //required: token
    //ok 200 return parameter, missing token 400

    $db = mysqli_connect('localhost', 'root', '', 'beeople');
        
        
   $sql = "select * FROM users";
   $result = $db->query($sql);
   $profilo = $_GET["token"];
    
   if ($result->num_rows > 0) {
    // output data of each row
            while($row = $result->fetch_assoc()) {
                
                
                if($row["email"] == $profilo){
                  
                    $arr = array('nome' => $row["nome"], 'cognome' => $row["cognome"], 'username' => $row["username"], 'email' => $row["email"], 'city' => $row["city"], 'ruolo' => $row["role"]);
                    
                    echo json_encode($arr);
                    break;
                //http_response_code(200);
                }
                //http_response_code(400);
              
                //echo "email: " . $row["email"]. " - password: " . $row["password"]. " " ."<br>";
            }
    } 
   
?>