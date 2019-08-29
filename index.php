<!DOCTYPE html>
<html>

<head>

  <title>EarthQuaker Devices Randomizer and Samplepacks by PatternBased</title>  
  <link rel="stylesheet" href="style.css">
  
</head>

<body>


<?php
	// 1. Create a database connection
	$dbhost = "localhost";
	$dbuser = "wordpress-user";
	$dbpass = "Doody!ppMARIA";
	$dbname = "patternbased-db";
	$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
	// Test if connection occured
	if(mysqli_connect_errno()) {
	  die("Database connection failed: " .
	  	mysqli_connect_error() .
  	  	" (" . mysqli_connect_errno() . ")"
	  );
	}
?>

<?php
	// 2. Build the MYSQL Query to randomly select three EQDevices and put the associated data into an array

	$query  = "SELECT * ";
	$query .= "FROM eqd ";
	$query .= "WHERE IsActive = 1 ";
	$query .= "order by RAND() ";
	$query .= "LIMIT 3";

	// uncomment the following echo statement to see a printout of the database query
	// echo "Database Query: " . $query . "<br />";

	$result = mysqli_query($connection, $query);
	// Test if there was a query error
	if (!$result) {
		die("Database query failed.");
	}
?>
<table class="center">
<tr>
<?php
	// 3. Loop returned data into an array
		while($subject = mysqli_fetch_assoc($result)) {
	// output data from each row
?>

<td>
<?php echo "<a href=\"" . $subject["SamplePackURL"] . "\">" . "<img src=\"images/" . $subject["DeviceImage"] . "\" style=\"height:300px;\">" . "</a>" ; ?>
</td>

<?php
	}
?>
</tr>
</table>

<?php
	// 4. Release returned data
	mysqli_free_result($result);
?>

<?php
  // 5. Close database connection
  mysqli_close($connection);
?>


</body>

</html>