

<?php
//API MAP: 
    //required: city
    //ok 200 return users, missing token 400

    $db = mysqli_connect('localhost', 'root', '', 'beeople');
        
        
   $sql = "select * FROM users";
   $result = $db->query($sql);

   $citta = $_GET["city"];

   $find = false;
   $arr = array();

   if ($result->num_rows > 0) {
    // output data of each row
            while($row = $result->fetch_assoc()) {
                
                
                if($row["city"] == $citta){
                  
                    $find = true;
                    array_push($arr, array('username' => $row["username"], 'email' => $row["email"]));
                   
                }
    
            }

            if($find){
            echo json_encode($arr);}
            }
    
    if( empty($arr) ){
        echo "no users found";
    }
   
?>