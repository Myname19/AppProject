<?php
    if (isset($_POST['loginButton'])) 
    {
    header("Location: loginPage.php");
    exit();
    }
    
    if (isset($_POST['loginBtn'])) 
    {
    header("Location: index.php");
    exit();
    }
    
    
    echo $_POST["email"];
/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHP.php to edit this template
 */

