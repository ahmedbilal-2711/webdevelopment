<?php
 $serverName = "192.168.0.104,2001"; //serverName\instanceName

 // Since UID and PWD are not specified in the $connectionInfo array,
 // The connection will be attempted using Windows Authentication.
 $connectionInfo = array("Database"=>"passwords", "UID"=>"ahmed", "PWD"=>"1");
 $conn = sqlsrv_connect( $serverName, $connectionInfo);

 if( $conn ) {
   echo "Connection established.<br />";
 }else{
   echo "Connection could not be established.<br />";
   die( print_r( sqlsrv_errors(), true));
 }

 $name= $_POST['name'];
 $age= $_POST['age'];
 $email= $_POST['email'];
 $phone= $_POST['pn'];
 $prof= $_POST['prof'];
 $select= $_POST['perm'];
    
    $params = array($name,$age,$email,$phone,$prof,$select);
    $sql = "INSERT INTO test (Applicant,Age,Email,Phone,Profession,Permission) VALUES (?,?,?,?,?,?)";
    echo $sql;
    for($i=0;$i<6;$i++){
      echo $params[$i];
    }

$stmt = sqlsrv_query( $conn, $sql, $params);
if( $stmt === false ) {
     die( print_r( sqlsrv_errors(), true));
}
?>