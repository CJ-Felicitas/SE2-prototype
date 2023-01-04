<?php

use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\DB;
?>
<html>

<head>
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <!-- fav icon -->
    <link rel="shortcut icon" type="images/png" href="images/favicon.png" />

    <script src="js/dashboard.js"></script>
    <style>

    </style>
</head>

<body>

    <div class="container" style="margin-top: 60px;">
   <a href="/returndashboard"><button class="btn btn-primary">Back to Dashboard</button></a> 
        <h1>Order Summary</h1>
        <div class="row">
            <div class="col-md-8">
                <table class="table table-striped">
                    <thead>
                        <th>Order ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Date Recorded</th>
                    </thead>
                    <tbody>
                 
                        <?php
                        
                        $key = session('orderIDhint');
                        $list = "select order_items.order_id, product.product_name, order_items.quantity, product.list_price from order_items INNER JOIN product on order_items.product_id=product.product_id WHERE order_items.order_id='$key';";
                        $hostname = "localhost";
                        $username = "root";
                        $password = "";
                        $database = "protechcorp";
                        $conn = new mysqli($hostname,$username,$password,$database);
                        $result = $conn->query($list);
                      while ($row = mysqli_fetch_assoc($result)) {
                    echo "<tr><td>".$row['order_id']."</td><td>".$row['product_name']."</td><td>".$row['quantity'] ."</td><td>".$row['list_price']."</td><td>".date("Y/m/d")."</td></tr>"          ;
                }
                        
                   

?>
                    </tbody>
                </table>
            </div>

            <div class="col-md-4">
                <h3>Total Amount: </h3>
            </div>
        </div>
    </div>
</body>

</html>