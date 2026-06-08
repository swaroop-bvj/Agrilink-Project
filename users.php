<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

// DATABASE CONNECTION
$conn = new mysqli("localhost", "root", "", "agrilink");

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$action = isset($_GET['action']) ? $_GET['action'] : '';
$input = json_decode(file_get_contents("php://input"), true);

// ================= LIST USERS =================
if ($action == "list") {

    $result = $conn->query("SELECT id, name, aadhaar, mobile, created_at FROM users ORDER BY id DESC");

    $users = [];

    while ($row = $result->fetch_assoc()) {
        $users[] = [
            "id" => $row["id"],
            "name" => $row["name"],
            "aadhaar" => $row["aadhaar"],
            "phone" => $row["mobile"],
            "created_at" => $row["created_at"]
        ];
    }

    echo json_encode($users);
}

// ================= DELETE USER =================
elseif (isset($input['action']) && $input['action'] == "delete") {

    $id = intval($input['id']);

    if ($conn->query("DELETE FROM users WHERE id=$id")) {
        echo json_encode(["status" => "deleted"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}

// ================= EDIT USER =================
elseif (isset($input['action']) && $input['action'] == "update") {

    $id = intval($input['id']);
    $name = $conn->real_escape_string($input['name']);
    $mobile = $conn->real_escape_string($input['mobile']);

    if ($conn->query("UPDATE users SET name='$name', mobile='$mobile' WHERE id=$id")) {
        echo json_encode(["status" => "updated"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}

// ================= ADD USER =================
elseif (isset($input['action']) && $input['action'] == "add") {

    $name = $conn->real_escape_string($input['name']);
    $aadhaar = $conn->real_escape_string($input['aadhaar']);
    $mobile = $conn->real_escape_string($input['mobile']);
    $password = $conn->real_escape_string($input['password']);

    if ($conn->query("INSERT INTO users (name, aadhaar, mobile, password) 
                      VALUES ('$name', '$aadhaar', '$mobile', '$password')")) {
        echo json_encode(["status" => "added"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}

// ================= UPDATE USER =================
elseif (isset($input['action']) && $input['action'] == "update") {

    $id = intval($input['id']);
    $name = $conn->real_escape_string($input['name']);
    $mobile = $conn->real_escape_string($input['mobile']);

    $query = "UPDATE users SET name='$name', mobile='$mobile'";

    if (!empty($input['password'])) {
        $password = $conn->real_escape_string($input['password']);
        $query .= ", password='$password'";
    }

    $query .= " WHERE id=$id";

    if ($conn->query($query)) {
        echo json_encode(["status" => "updated"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}

$conn->close();
?>
